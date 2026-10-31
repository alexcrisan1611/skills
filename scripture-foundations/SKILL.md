---
name: scripture-foundations
description: "Look up, search and verify KJV text with bundled scripts, and derive principles from it. Use before quoting any verse, or when the user asks for explicitly biblical reasoning."
---

# Scripture Foundations

## What this skill is for

Most reasoning fails at the foundation, not at the conclusion. This skill gives three things:

1. The text: a complete, local, searchable KJV. You quote verses from it and not from recall.
2. The map: the chapters that Scripture itself treats as load-bearing, and the reason for each.
3. The method: how to go from a text to a principle without proof-texting (quoting a verse out of context to support a claim).

These skills build on this one: `first-principles-reasoning`, `business-first-principles`, `business-idea-generation`, `problem-solving-first-principles` and `renewing-the-mind`. `ancient-secret-wealth-principle` presents an outside model (Myron Golden's Four Levels of Value), so it is not a first-principles skill, but it uses Rule one, the labels and the script from this skill.

Assume the user is a Christian.

---

## Rule one: applications are inferences

The Bible is the source. A business principle drawn from Genesis is not Scripture. It is a reading that a fallible person makes about how a revealed order applies to a situation. Say so. "Genesis 1 suggests..." is honest. "The Bible commands you to..." is not honest, unless the text actually commands it.

- Read in context. Before you quote a verse, read the verses around it. Find the speaker and the audience. Find out if the passage describes what is or prescribes what ought to be. Many bad doctrines come from a story that a reader turned into a command.
- Keep description apart from prescription. Genesis 3 describes the curse. It does not command thorns. It tells you to expect them.
- Do not invent certainty on disputed matters. Where faithful readers differ, show the range and let the user weigh it. False confidence here is a form of lying.
- Never use Scripture to justify harm, exploitation, or the overriding of the conscience of another person. Love is the first principle of motive (1 Corinthians 13:1-3). This is the keystone rule, and it governs every application. A reading that produces cruelty has a mistake in it.

The foundation itself is Christ, and "the foundation of God standeth sure" (2 Timothy 2:19). But a reading that you cannot question is not a foundation. It is an assumption in a costume.

### The labels

Every skill in this family marks each claim with one of these five labels, in plain text. This is the only definition. Other skills point here.

| Label | Use it when | What you must show |
| --- | --- | --- |
| Scripture says: | the verse itself says it | quote the verse from the script |
| Word meaning: | the Strong's entry says it | copy the definition from `scripts/lexicon.ts` |
| Reading: | a reader drew it from the text | the steps from the text to the claim |
| Disputed: | faithful readers or serious practitioners disagree | the range of views |
| Guess: | an estimate with no support from the text | that it is a guess |

A confidence section at the end of an answer uses the same five words.

One tool limit applies everywhere. The Strong's data is not tagged to verses. A link from a word in a verse to a Strong's number is the standard concordance link, not something the tools proved. Say so when an argument depends on it.

---

## Rule two: the KJV is 1611 English, and English moves

The KJV was translated in 1611 and revised to its familiar form in 1769. Some of its words changed meaning since then, and a few changed to near-opposites ("let" meant hinder, "prevent" meant go before, "conversation" meant conduct, "talent" was a weight of money). Much bad reasoning reads a modern sense back into a 1611 word.

When a verse does real work in your argument, do two checks before you rely on it:

1. Check the Hebrew or Greek word behind the English with `scripts/lexicon.ts` (or `scripts/lexicon.py`). The words where the KJV rendering understates the original are in `references/original-language.md`.
2. Check the 1611 sense of the English word. The words whose meaning moved are in `references/kjv-1611.md`.

If the underlying word does not support the reading, the reading is wrong. Strong wording does not repair it.

Two mistakes go the other way:

- Word origin is not meaning. The root of a word does not control how it is used. Usage across the Bible does. Word data can rule a reading out. It cannot prove one.
- Do not overclaim precision. "Strong's gives the root of _radah_ as 'to tread down'" is a fair claim with the dictionary open. "The Hebrew proves that Genesis 1 commands aggressive resource extraction" is not.

---

## Looking up the text

`<skill-dir>` means the folder that holds this `SKILL.md`. Other skills in the family sit next to it, so they call these scripts as `<their skill-dir>/../scripture-foundations/scripts/...`.

```
bun run <skill-dir>/scripts/scripture.ts lookup "Genesis 1:1-5"
bun run <skill-dir>/scripts/scripture.ts lookup "Gen 1:26-28" "Ps 24:1"
bun run <skill-dir>/scripts/scripture.ts search "dominion" --limit 20
bun run <skill-dir>/scripts/scripture.ts search "foundation" --book Psalms --book Isaiah
bun run <skill-dir>/scripts/scripture.ts search "lov(e|eth) the Lord" --regex
bun run <skill-dir>/scripts/scripture.ts stats
bun run <skill-dir>/scripts/lexicon.ts lookup H7287 G26
```

If Bun is not installed, use `python <skill-dir>/scripts/scripture.py` (or `lexicon.py`) with the same arguments.

- Book names are flexible. `Gen`, `1Cor`, `Song`, `ecc` and `Ps` all resolve. An unknown or ambiguous name gives an error, not a wrong answer.
- Search is literal and case-insensitive by default. Add `--regex` for patterns.
- The script folds curly apostrophes, so `Lord's` matches. If you read the JSON directly, fold them yourself.
- The script finds the data in this order: `--dir`, then `$KJV_DIR`, then `~/bible-kjv` and similar names in the home folder, then folders under the working directory, then `data/` folders above the script. See `scripts/lib/paths.ts` for the full order. If no data is found, tell the user: the KJV and Strong's data are not bundled (see this skill's `README.md`).
- The whole Bible is about 31,102 verses, so search freely.

Quote from the script's output, never from memory. Recalled wording is usually close but sometimes wrong where it matters most. The usual recall error in 1 Corinthians 13 is "love" where the KJV has "charity".

---

## The method: text, observation, axiom, application

Most "biblical business" content goes wrong because it skips step 2.

1. Text. Read the whole passage, in order, before you take anything from it.
2. Observation. Find what actually happens in the text:
   - Structure: in Genesis 1, days 1-3 make spaces and days 4-6 fill them. The structure is often the argument.
   - Repetition: "And God said" occurs 10 times, "God saw" 7 times. Repetition marks what the author wants seen.
   - Order: what comes first, and what depends on what.
   - Word choice: in Genesis 2:15 the man is put in the garden to _dress_ it and to _keep_ it, two verbs with two jobs.
   - What is missing, or what the text calls "not good".
3. Axiom. State the principle as a general claim. Test it: does it come from the observation or from outside? Does it hold in a different situation? Does it contradict another axiom you hold?
4. Application. Work out what follows for the actual situation. Then name what will resist it (Genesis 3:17-19: the ground resists every plan) and what could make the derivation wrong.

Worked example:

| Step | Content |
| --- | --- |
| Text | Genesis 2:15: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it." |
| Observation | God assigns work before the fall. There are two verbs: _dress_ (cultivate, serve, bring forth) and _keep_ (guard, preserve). The text gives both as the job. |
| Axiom | Reading: creation and maintenance are equal duties. Building is not more holy than keeping. |
| Application | Reading: an organization that rewards only shipping collects maintenance debt until it cannot keep what it built. Budget for "keep" explicitly, with owners, calendar time and the same status as new work. |
| What resists it | Maintenance is invisible, so every incentive system underfunds it. Naming the problem does not fix the incentive. Someone must hold the line. |

---

## When a question is foundational

First-principles work is expensive. Use this skill's method when:

- the decision is hard to reverse, or a wrong decision costs the structure;
- the usual answer failed, or everyone agrees too quickly;
- the question is "why do we do this at all?" and not "how do we do this better?";
- someone justifies something by authority, fashion or analogy and not by principle;
- the user explicitly asks for foundations, Genesis or first principles.

For everything else, use the known pattern. Foundations are for building on, not for admiring. Always use the lookup script before you quote a verse, foundational or not.

---

## Read when

| Read | When |
| --- | --- |
| `references/kjv-1611.md` | an English word in a verse carries your argument, or a unit or measure appears (talent, penny, cubit) |
| `references/original-language.md` | you need the Hebrew or Greek behind a word, including the "help meet" roles question |
| `references/chapter-map.md` | you need the starter set of foundation chapters, the full map, or the Bible's own "foundation" vocabulary |
| `references/genesis-1-3.md` | you reason from Genesis 1-3, verse by verse |
