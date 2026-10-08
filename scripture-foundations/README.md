# Scripture Foundations

A skill that gives an AI agent a local, searchable King James Version (KJV), a map of the foundation chapters of the Bible, and a method to derive principles from the text.

## What it does

The skill gives the agent three things:

1. The text. The agent quotes verses from a local copy of the KJV through a script, not from memory.
2. The map. A list of the chapters that Scripture itself treats as load-bearing, with the reason for each.
3. The method. Four steps that go from a text to a principle without proof-texting (quoting a verse out of context to support a claim).

The skill also has a Strong's lexicon tool. Strong's is a numbered dictionary of the Hebrew and Greek words under the KJV. The agent uses it to check the original word before it draws an inference from an English word.

This skill is the base layer for other skills in this repository: `first-principles-reasoning`, `body-first-principles`, `business-first-principles`, `business-idea-generation`, `problem-solving-first-principles`, `renewing-the-mind`, and `technology-selection`. The skill `ancient-secret-wealth-principle` is separate and does not build on it.

## When to use it

Use this skill in these cases:

- A task touches Genesis 1-3, "first principles", foundations, or cornerstones.
- You must quote, verify, or search the KJV, and the exact wording matters.
- A business, technical, design, or life decision must rest on a scriptural foundation.
- A decision is hard to reverse, or the usual answer failed.
- Someone justifies a practice by authority, fashion, or analogy and not by principle.

For routine questions where a known pattern works, the skill tells the agent to use the pattern.

## How it works

1. The agent looks up the verses with `scripts/scripture.ts` and quotes the output.
2. If a verse does argumentative work, the agent checks the Hebrew or Greek word with `scripts/lexicon.ts`. It also checks if the 1611 sense of the English word differs from the modern sense (for example, "let" meant "to hinder").
3. The agent applies the method: text, then observation, then axiom, then application. It then names the friction, which is what can make the result wrong.
4. The agent labels each claim as "Text states:", "Inference:", "Contested:", or "Speculation:". A business principle drawn from Genesis is an inference, not Scripture.

## What is in this folder

- `SKILL.md`: The instructions that the agent reads. It holds the rules, the method, a worked example, and the starter set of foundation chapters.
- `references/chapter-map.md`: The full map of foundation chapters, grouped by the question each chapter answers.
- `references/genesis-1-3.md`: A close read of Genesis 1 to 3 in verse groups, with the observations that the other skills use.
- `references/kjv-1611.md`: KJV words whose meaning changed since 1611, units and measures, and a verification checklist.
- `references/original-language.md`: A working lexicon of key Hebrew and Greek words, with Strong's definitions and KJV glosses copied from the tool.
- `scripts/scripture.ts`: Reads and searches the KJV (Bun).
- `scripts/scripture.py`: The same tool in Python, for machines without Bun.
- `scripts/lexicon.ts`: Looks up Strong's entries, and maps an English KJV word back to the Hebrew and Greek words (Bun).
- `scripts/lexicon.py`: The same tool in Python.
- `scripts/lib/`: Shared TypeScript code for book names, the KJV loader, the Strong's loader, argument parsing, and the search for the data directory.

## Data

The KJV text and the Strong's dictionary are not in this folder. The scripts look for them on your machine:

- KJV: one JSON file for each book (for example `Genesis.json`). The default location is `~/bible-kjv`. You can also give the path with `--dir` or the `KJV_DIR` environment variable.
- Strong's: a folder that contains `greek` or `hebrew`. The default location is `~/strongs`. You can also give the path with `--dir` or the `STRONGS_DIR` environment variable.

The scripts also try other folder names and a `data/` folder above the script. For the full search order, read `scripts/lib/paths.ts` and the top of each Python script. If no folder is found, the script stops and prints every location that it tried.

## Running the scripts

Run these commands from this folder. They need [Bun](https://bun.sh):

```
bun run scripts/scripture.ts lookup "Genesis 1:1-5"
bun run scripts/scripture.ts lookup "Gen 1:26-28" "Ps 24:1"
bun run scripts/scripture.ts search "dominion" --limit 20
bun run scripts/scripture.ts search "foundation" --book Psalms --book Isaiah
bun run scripts/scripture.ts search "lov(e|eth) the Lord" --regex
bun run scripts/scripture.ts books
bun run scripts/scripture.ts stats

bun run scripts/lexicon.ts lookup H7225 H7287
bun run scripts/lexicon.ts english "help meet"
bun run scripts/lexicon.ts search "to tread down"
bun run scripts/lexicon.ts stats
```

If Bun is not installed, use `python scripts/scripture.py` or `python scripts/lexicon.py` with the same arguments.

Some details:

- Book names are flexible. `Gen`, `1Cor`, `Song`, `ecc`, and `Ps` all resolve. An unknown or ambiguous name gives an error.
- Search is literal and case-insensitive. Add `--regex` for a pattern.
- The default limit is 40 verses for `scripture` and 25 entries for `lexicon`. Use `--limit` to change it.

## Example prompts

- "What does Genesis 2:15 actually say, and what does it imply for how we fund maintenance work?"
- "Quote 1 Corinthians 13:1-3 exactly from the KJV."
- "What is the Hebrew word behind 'dominion' in Genesis 1:26, and what does it mean?"
- "Where does the Bible use the phrase 'first principles'?"

## Limits

- The skill does not make an application into Scripture. It marks every business or practical result as an inference.
- It does not settle disputed matters. Where faithful readers differ, it shows the range.
- The KJV files have no word-level Strong's tags. The tools cannot prove that a given word in a given verse is a given Strong's number. The link is the standard concordance link, not a tool result.
- Etymology (the root of a word) does not decide meaning. The lexicon limits an interpretation. It does not produce one.
- The skill uses only the KJV. It does not include other translations.
- The skill does not supply the data files. You must install the KJV and Strong's data before the scripts work.
- The skill must not be used to justify harm, exploitation, or the overriding of the conscience of another person.
