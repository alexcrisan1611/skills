#!/usr/bin/env python3
"""Look up Strong's Hebrew and Greek entries, and reverse-map KJV English words.

Why this exists: the KJV is a 1611 translation. Words like "charity", "let",
"prevent", "conversation", "careful", and "talent" do not mean what they mean in
modern English, and no inference from the KJV is safe until the underlying Hebrew
or Greek has been checked. This script makes that check cheap.

Data: Strong's Exhaustive Concordance (1890), JSON edition, Open Scriptures,
CC-BY-SA. Resolved from --dir, then $STRONGS_DIR, then ~/strongs.

Usage:
    lexicon.py lookup G26
    lexicon.py lookup H7225 H7287 G3624
    lexicon.py english dominion
    lexicon.py english "help meet"
    lexicon.py search "to tread down"
    lexicon.py stats
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

GREEK_FILES = ["greek/strongs-greek-dictionary.js", "greek/strongsgreek.dat"]
HEBREW_FILES = ["hebrew/strongs-hebrew-dictionary.js", "hebrew/strongs-hebrew-dictionary.json"]


def find_data_dir(explicit: str | None) -> Path:
    candidates: list[Path] = []
    if explicit:
        candidates.append(Path(explicit))
    if os.environ.get("STRONGS_DIR"):
        candidates.append(Path(os.environ["STRONGS_DIR"]))
    home = Path.home()
    candidates += [
        home / "strongs",
        home / "strongs-dictionary",
        home / "bible-strongs",
        Path.cwd() / "strongs",
        Path.cwd() / "data" / "strongs",
    ]
    # A checked-out copy of this repository keeps the dictionaries at
    # <repo>/data/strongs.
    for parent in Path(__file__).resolve().parents:
        candidates.append(parent / "data" / "strongs")
    for c in candidates:
        if c.is_dir() and ((c / "greek").is_dir() or (c / "hebrew").is_dir()):
            return c
    tried = "\n  ".join(str(c) for c in candidates)
    raise SystemExit(
        "Could not find the Strong's data directory. Point at it with --dir or "
        f"$STRONGS_DIR. Tried:\n  {tried}"
    )


def _read_json_object(path: Path) -> dict:
    """Read a file holding `var name = { ... };` and return the parsed object."""
    raw = path.read_bytes()
    for encoding in ("utf-8", "utf-8-sig", "latin-1"):
        try:
            text = raw.decode(encoding)
            break
        except UnicodeDecodeError:
            continue
    else:  # pragma: no cover - unreachable
        raise SystemExit(f"Could not decode {path}")

    brace = text.find("{")
    if brace == -1:
        raise SystemExit(f"No JSON object found in {path}")
    end = text.rfind("}")
    return json.loads(text[brace:end + 1])


_CACHE: dict[str, dict] = {}


def load(kind: str, data_dir: Path) -> dict:
    if kind in _CACHE:
        return _CACHE[kind]
    names = GREEK_FILES if kind == "greek" else HEBREW_FILES
    for name in names:
        path = data_dir / name
        if path.is_file():
            try:
                _CACHE[kind] = _read_json_object(path)
                return _CACHE[kind]
            except (json.JSONDecodeError, SystemExit):
                continue
    raise SystemExit(f"Could not load the Strong's {kind} dictionary under {data_dir}")


def normalise_id(value: str) -> str:
    """Accept 'h7225', '7225', 'H07225', 'G26' -> 'H7225' / 'G26'."""
    v = value.strip().upper()
    if not v or not v[0] in "HG":
        v = "H" + v if v and v[0].isdigit() else v
    letter, digits = v[0], re.sub(r"\D", "", v)
    return f"{letter}{int(digits)}" if digits else v


def parse_query(query: str) -> tuple[str, str]:
    """Return (kind, id) for a Strong's number."""
    sid = normalise_id(query)
    return ("greek" if sid.startswith("G") else "hebrew"), sid


def entry_block(sid: str, entry: dict) -> str:
    lang = "Greek" if sid.startswith("G") else "Hebrew"
    lemma = (entry.get("lemma") or "").strip()
    translit = (entry.get("translit") or "").strip()
    head = f"{sid}  {translit}  {lemma}  ({lang})".rstrip()
    lines = [head]
    for key, prefix in (
        ("strongs_def", "  def:  "),
        ("derivation", "  from: "),
        ("kjv_def", "  KJV:  "),
    ):
        val = (entry.get(key) or "").strip()
        if val:
            lines.append(prefix + val)
    return "\n".join(lines)


def cmd_lookup(args) -> None:
    data_dir = find_data_dir(args.dir)
    for query in args.strongs:
        kind, sid = parse_query(query)
        table = load(kind, data_dir)
        entry = table.get(sid)
        if entry is None:
            print(f"{query}: not found in the {kind} dictionary")
        else:
            print(entry_block(sid, entry))
        print()


def english_tokens(kjv_def: str) -> set[str]:
    """Split a KJV-gloss field into comparable tokens."""
    out: set[str] = set()
    for chunk in kjv_def.split(","):
        token = chunk.strip().lower()
        token = re.sub(r"\(.*?\)", " ", token)
        token = re.sub(r"[^a-z' ]+", " ", token)
        token = re.sub(r"\s+", " ", token).strip()
        if token:
            out.add(token)
            for word in token.split():
                if len(word) > 2:
                    out.add(word)
    return out


def cmd_english(args) -> None:
    data_dir = find_data_dir(args.dir)
    needle = args.phrase.strip().lower()
    needle = re.sub(r"\s+", " ", needle)

    hits: list[tuple[str, dict, str]] = []
    for kind in ("hebrew", "greek"):
        table = load(kind, data_dir)
        for sid, entry in table.items():
            kjv = (entry.get("kjv_def") or "").lower()
            if needle and needle in kjv:
                hits.append((sid, entry, kind))

    def sort_key(item):
        sid = item[0]
        return (sid[0], int(re.sub(r"\D", "", sid) or 0))

    hits.sort(key=sort_key)
    if not hits:
        print(f'No Strong\'s entry is glossed with "{args.phrase}" in the KJV.')
        return
    print(f'{len(hits)} entr(y/ies) the KJV renders as "{args.phrase}":\n')
    for i, (sid, entry, kind) in enumerate(hits):
        if i >= args.limit:
            print(f"... {len(hits) - args.limit} more (raise --limit)")
            break
        print(entry_block(sid, entry))
        print()


def cmd_search(args) -> None:
    data_dir = find_data_dir(args.dir)
    needle = args.text.strip().lower()
    shown = total = 0
    for kind in ("hebrew", "greek"):
        table = load(kind, data_dir)
        for sid, entry in sorted(
            table.items(), key=lambda kv: (kv[0][0], int(re.sub(r"\D", "", kv[0]) or 0))
        ):
            haystack = " ".join(
                str(entry.get(k) or "") for k in ("strongs_def", "derivation", "kjv_def", "translit", "lemma")
            ).lower()
            if needle in haystack:
                total += 1
                if shown < args.limit:
                    print(entry_block(sid, entry))
                    print()
                    shown += 1
    print(f"{total} entr(y/ies) matched; showing {min(total, args.limit)}.")


def cmd_stats(args) -> None:
    data_dir = find_data_dir(args.dir)
    he = load("hebrew", data_dir)
    gr = load("greek", data_dir)
    print(f"hebrew entries={len(he)}")
    print(f"greek entries={len(gr)}")
    print(f"data_dir={data_dir}")


def main() -> None:
    p = argparse.ArgumentParser(description="Look up Strong's Hebrew and Greek entries.")
    p.add_argument("--dir", help="Directory holding the strongs checkout")
    sub = p.add_subparsers(dest="command", required=True)

    lp = sub.add_parser("lookup", help="Show entries by Strong's number")
    lp.add_argument("strongs", nargs="+")
    lp.set_defaults(func=cmd_lookup)

    ep = sub.add_parser("english", help="Reverse map: KJV English word -> Strong's entries")
    ep.add_argument("phrase")
    ep.add_argument("--limit", type=int, default=25)
    ep.set_defaults(func=cmd_english)

    sp = sub.add_parser("search", help="Search definitions, derivations, and glosses")
    sp.add_argument("text")
    sp.add_argument("--limit", type=int, default=25)
    sp.set_defaults(func=cmd_search)

    stp = sub.add_parser("stats", help="Entry counts")
    stp.set_defaults(func=cmd_stats)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
