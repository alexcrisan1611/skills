#!/usr/bin/env python3
"""Read, search, and quote the King James Version from per-book JSON files.

Data layout: one JSON file per book, named for the book with no spaces
(Genesis.json, 1Samuel.json, SongofSolomon.json), each of the form:

    {"book": "Genesis",
     "chapters": [{"chapter": "1",
                   "verses": [{"verse": "1", "text": "..."}, ...]}, ...]}

Data directory resolution order:
    1. --dir
    2. $KJV_DIR
    3. ~/bible-kjv
    4. ~/Bible-kjv
    5. ./bible-kjv

Usage:
    scripture.py books
    scripture.py lookup Genesis 1
    scripture.py lookup "Genesis 1:1-5"
    scripture.py lookup John 3:16 Romans 5:1
    scripture.py search "dominion"
    scripture.py search "first principles" --limit 50
    scripture.py search "foundation" --book Psalms --book Isaiah
    scripture.py search "lov(e|eth) the Lord" --regex
    scripture.py stats
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# --------------------------------------------------------------------------
# Data location
# --------------------------------------------------------------------------

def find_data_dir(explicit: str | None) -> Path:
    candidates: list[Path] = []
    if explicit:
        candidates.append(Path(explicit))
    if os.environ.get("KJV_DIR"):
        candidates.append(Path(os.environ["KJV_DIR"]))
    home = Path.home()
    candidates += [
        home / "bible-kjv",
        home / "Bible-kjv",
        home / "kjv",
        Path.cwd() / "bible-kjv",
        Path.cwd() / "data" / "bible-kjv",
    ]
    # A checked-out copy of this repository keeps the text at <repo>/data/bible.
    for parent in Path(__file__).resolve().parents:
        candidates.append(parent / "data" / "bible")
    for c in candidates:
        if c.is_dir() and any(c.glob("*.json")):
            return c
    tried = "\n  ".join(str(c) for c in candidates)
    raise SystemExit(
        "Could not find the KJV data directory. Point at it with "
        f"--dir or $KJV_DIR. Tried:\n  {tried}"
    )


# --------------------------------------------------------------------------
# Book names and abbreviations
# --------------------------------------------------------------------------

BOOK_ALIASES: dict[str, str] = {}


def normalise_key(name: str) -> str:
    """Fold a book reference to a compact comparison key."""
    return re.sub(r"[^a-z0-9]", "", name.strip().lower())


def _book_table() -> dict[str, str]:
    """Return {file_stem: display_name} and register every known alias."""
    table: dict[str, tuple[str, tuple[str, ...]]] = {
        "Genesis": ("Genesis", ("gen", "ge", "gn")),
        "Exodus": ("Exodus", ("ex", "exod", "exo")),
        "Leviticus": ("Leviticus", ("lev", "le", "lv")),
        "Numbers": ("Numbers", ("num", "nu", "nm", "nb")),
        "Deuteronomy": ("Deuteronomy", ("deut", "dt", "de")),
        "Joshua": ("Joshua", ("josh", "jos")),
        "Judges": ("Judges", ("judg", "jdg", "jg")),
        "Ruth": ("Ruth", ("rth", "ru")),
        "1Samuel": ("1 Samuel", ("1sam", "1sa", "1sm", "1s", "isamuel", "firstsamuel")),
        "2Samuel": ("2 Samuel", ("2sam", "2sa", "2sm", "2s", "iisamuel", "secondsamuel")),
        "1Kings": ("1 Kings", ("1kgs", "1ki", "1kg", "1k", "ikings", "firstkings")),
        "2Kings": ("2 Kings", ("2kgs", "2ki", "2kg", "2k", "iikings", "secondkings")),
        "1Chronicles": ("1 Chronicles", ("1chr", "1ch", "1chronicle", "firstchronicles")),
        "2Chronicles": ("2 Chronicles", ("2chr", "2ch", "2chronicle", "secondchronicles")),
        "Ezra": ("Ezra", ("ezr",)),
        "Nehemiah": ("Nehemiah", ("neh", "ne")),
        "Esther": ("Esther", ("est", "esth", "es")),
        "Job": ("Job", ("jb",)),
        "Psalms": ("Psalms", ("psalm", "ps", "psa", "pslm", "pss")),
        "Proverbs": ("Proverbs", ("prov", "pro", "pr", "prv", "proverb")),
        "Ecclesiastes": ("Ecclesiastes", ("eccl", "ecc", "ec", "qoheleth", "ecclesiast")),
        "SongofSolomon": ("Song of Solomon", (
            "song", "sos", "songofsongs", "canticles", "cant",
            "songofsol", "canticleofcanticles",
        )),
        "Isaiah": ("Isaiah", ("isa", "is")),
        "Jeremiah": ("Jeremiah", ("jer", "je", "jr")),
        "Lamentations": ("Lamentations", ("lam", "la")),
        "Ezekiel": ("Ezekiel", ("ezek", "eze", "ezk")),
        "Daniel": ("Daniel", ("dan", "dn", "da")),
        "Hosea": ("Hosea", ("hos", "ho")),
        "Joel": ("Joel", ("joe", "jl")),
        "Amos": ("Amos", ("am",)),
        "Obadiah": ("Obadiah", ("obad", "oba", "ob")),
        "Jonah": ("Jonah", ("jon", "jnh")),
        "Micah": ("Micah", ("mic", "mi")),
        "Nahum": ("Nahum", ("nah", "na")),
        "Habakkuk": ("Habakkuk", ("hab", "hb")),
        "Zephaniah": ("Zephaniah", ("zeph", "zep", "zp")),
        "Haggai": ("Haggai", ("hag", "hg")),
        "Zechariah": ("Zechariah", ("zech", "zec", "zc")),
        "Malachi": ("Malachi", ("mal", "ml")),
        "Matthew": ("Matthew", ("matt", "mat", "mt")),
        "Mark": ("Mark", ("mrk", "mk", "mr")),
        "Luke": ("Luke", ("luk", "lk")),
        "John": ("John", ("joh", "jn")),
        "Acts": ("Acts", ("act", "ac", "actsoftheapostles")),
        "Romans": ("Romans", ("rom", "ro", "rm")),
        "1Corinthians": ("1 Corinthians", ("1cor", "1co", "1cr", "icorinthians", "firstcorinthians")),
        "2Corinthians": ("2 Corinthians", ("2cor", "2co", "2cr", "iicorinthians", "secondcorinthians")),
        "Galatians": ("Galatians", ("gal", "ga")),
        "Ephesians": ("Ephesians", ("eph", "ep")),
        "Philippians": ("Philippians", ("phil", "php", "pp", "philip")),
        "Colossians": ("Colossians", ("col", "co")),
        "1Thessalonians": ("1 Thessalonians", ("1thess", "1th", "1thes", "firstthessalonians")),
        "2Thessalonians": ("2 Thessalonians", ("2thess", "2th", "2thes", "secondthessalonians")),
        "1Timothy": ("1 Timothy", ("1tim", "1ti", "1tm", "firsttimothy")),
        "2Timothy": ("2 Timothy", ("2tim", "2ti", "2tm", "secondtimothy")),
        "Titus": ("Titus", ("tit", "ti")),
        "Philemon": ("Philemon", ("philem", "phm", "pm")),
        "Hebrews": ("Hebrews", ("heb", "hb")),
        "James": ("James", ("jas", "jm")),
        "1Peter": ("1 Peter", ("1pet", "1pe", "1pt", "1p", "ipeter", "firstpeter")),
        "2Peter": ("2 Peter", ("2pet", "2pe", "2pt", "2p", "iipeter", "secondpeter")),
        "1John": ("1 John", ("1jn", "1joh", "1j", "ijohn", "firstjohn")),
        "2John": ("2 John", ("2jn", "2joh", "2j", "iijohn", "secondjohn")),
        "3John": ("3 John", ("3jn", "3joh", "3j", "iiijohn", "thirdjohn")),
        "Jude": ("Jude", ("jud", "jd")),
        "Revelation": ("Revelation", (
            "rev", "re", "rv", "revelations", "apocalypse",
            "revelationofjohn", "theapocalypse",
        )),
    }
    displays: dict[str, str] = {}
    for stem, (display, aliases) in table.items():
        displays[stem] = display
        for name in (stem, display, *aliases):
            BOOK_ALIASES[normalise_key(name)] = stem
    return displays


DISPLAY_NAMES = _book_table()

# Canonical reading order, for stable output when sorting.
BOOK_ORDER = {stem: i for i, stem in enumerate([
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua",
    "Judges", "Ruth", "1Samuel", "2Samuel", "1Kings", "2Kings", "1Chronicles",
    "2Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
    "Ecclesiastes", "SongofSolomon", "Isaiah", "Jeremiah", "Lamentations",
    "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
    "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1Corinthians",
    "2Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
    "1Thessalonians", "2Thessalonians", "1Timothy", "2Timothy", "Titus",
    "Philemon", "Hebrews", "James", "1Peter", "2Peter", "1John", "2John",
    "3John", "Jude", "Revelation",
])}

# --------------------------------------------------------------------------
# Loading
# --------------------------------------------------------------------------

_CACHE: dict[str, dict] = {}


def resolve_book(name: str) -> str:
    key = normalise_key(name)
    if key in BOOK_ALIASES:
        return BOOK_ALIASES[key]
    # Fall back to a prefix match, so "songofsol" or "thess" still land.
    hits = {stem for k, stem in BOOK_ALIASES.items() if k.startswith(key)}
    if len(hits) == 1:
        return hits.pop()
    if hits:
        options = ", ".join(sorted(DISPLAY_NAMES[h] for h in hits))
        raise SystemExit(f"'{name}' is ambiguous. Did you mean: {options}?")
    raise SystemExit(f"Unknown book: '{name}'")


def load_book(stem: str, data_dir: Path) -> dict:
    if stem not in _CACHE:
        path = data_dir / f"{stem}.json"
        if not path.is_file():
            raise SystemExit(f"Missing data file: {path}")
        _CACHE[stem] = json.loads(path.read_text(encoding="utf-8"))
    return _CACHE[stem]


def iter_verses(stem: str, data_dir: Path):
    """Yield (chapter:int, verse:int, text:str) for one book."""
    for chapter in load_book(stem, data_dir)["chapters"]:
        c = int(chapter["chapter"])
        for v in chapter["verses"]:
            yield c, int(v["verse"]), v["text"].strip()


# --------------------------------------------------------------------------
# Reference parsing
# --------------------------------------------------------------------------

REF_RE = re.compile(
    r"^\s*(?P<book>(?:[1-3]|[Ii]{1,3})?\s*[A-Za-z][A-Za-z.\s]*?)"
    r"\s*(?P<chapter>\d+)"
    r"(?:\s*[:.]\s*(?P<verse>\d+)"
    r"(?:\s*[-–]\s*(?P<end>\d+))?)?\s*$"
)


def parse_reference(text: str) -> tuple[str, int, int | None, int | None]:
    m = REF_RE.match(text)
    if not m:
        raise SystemExit(f"Could not parse reference: {text!r}")
    stem = resolve_book(m.group("book"))
    chapter = int(m.group("chapter"))
    verse = int(m.group("verse")) if m.group("verse") else None
    end = int(m.group("end")) if m.group("end") else verse
    return stem, chapter, verse, end


def label(stem: str, chapter: int, verse: int | None = None) -> str:
    out = f"{DISPLAY_NAMES[stem]} {chapter}"
    if verse is not None:
        out += f":{verse}"
    return out


# --------------------------------------------------------------------------
# Commands
# --------------------------------------------------------------------------

def cmd_lookup(args) -> None:
    data_dir = find_data_dir(args.dir)
    for ref in args.reference:
        stem, chapter, verse, end = parse_reference(ref)
        found = [
            (c, v, t) for c, v, t in iter_verses(stem, data_dir) if c == chapter
        ]
        if not found:
            print(f"{label(stem, chapter)}: chapter not found")
            continue
        if verse is None:
            for c, v, t in found:
                print(f"{label(stem, c, v)}\t{t}")
        else:
            for c, v, t in found:
                if verse <= v <= (end or verse):
                    print(f"{label(stem, c, v)}\t{t}")
        print()


def fold_punctuation(s: str) -> str:
    """Fold curly punctuation so "Lord's" matches "Lord’s"."""
    return (
        s.replace("\u2019", "'")
        .replace("\u2018", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\u2014", "--")
        .replace("\u2013", "-")
        .lower()
    )


def cmd_search(args) -> None:
    data_dir = find_data_dir(args.dir)
    if args.book:
        stems = [resolve_book(b) for b in args.book]
    else:
        stems = sorted(BOOK_ORDER, key=lambda s: BOOK_ORDER[s])

    needle = fold_punctuation(args.query)
    if args.regex:
        try:
            pattern = re.compile(needle)
        except re.error as exc:
            raise SystemExit(f"Bad regex: {exc}")
    else:
        pattern = re.compile(re.escape(needle))

    shown = 0
    total = 0
    for stem in stems:
        for c, v, t in iter_verses(stem, data_dir):
            if pattern.search(fold_punctuation(t)):
                total += 1
                if shown < args.limit:
                    print(f"{label(stem, c, v)}\t{t}")
                    shown += 1
    print()
    print(f"{total} verse(s) matched; showing {min(total, args.limit)}.")


def cmd_books(args) -> None:
    data_dir = find_data_dir(args.dir)
    for stem in sorted(BOOK_ORDER, key=lambda s: BOOK_ORDER[s]):
        if (data_dir / f"{stem}.json").is_file():
            print(DISPLAY_NAMES[stem])


def cmd_stats(args) -> None:
    data_dir = find_data_dir(args.dir)
    books = chapters = verses = 0
    for stem in BOOK_ORDER:
        if not (data_dir / f"{stem}.json").is_file():
            continue
        books += 1
        data = load_book(stem, data_dir)
        chapters += len(data["chapters"])
        verses += sum(len(ch["verses"]) for ch in data["chapters"])
    print(f"books={books} chapters={chapters} verses={verses}")
    print(f"data_dir={data_dir}")


def main() -> None:
    p = argparse.ArgumentParser(
        description="Look up and search the KJV stored as per-book JSON files."
    )
    p.add_argument("--dir", help="Directory holding the per-book JSON files")
    sub = p.add_subparsers(dest="command", required=True)

    lp = sub.add_parser("lookup", help="Print verses for one or more references")
    lp.add_argument("reference", nargs="+", help="e.g. 'Genesis 1' or 'John 3:16-17'")
    lp.set_defaults(func=cmd_lookup)

    sp = sub.add_parser("search", help="Find verses containing a phrase")
    sp.add_argument("query")
    sp.add_argument("--book", action="append", help="Restrict to a book (repeatable)")
    sp.add_argument("--limit", type=int, default=40, help="Max verses to print")
    sp.add_argument("--regex", action="store_true", help="Treat query as a regex")
    sp.set_defaults(func=cmd_search)

    bp = sub.add_parser("books", help="List available books")
    bp.set_defaults(func=cmd_books)

    stp = sub.add_parser("stats", help="Count books, chapters, and verses")
    stp.set_defaults(func=cmd_stats)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
