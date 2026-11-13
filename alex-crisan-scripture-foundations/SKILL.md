---
name: alex-crisan-scripture-foundations
description: "Look up, search and verify KJV text with bundled scripts, and derive principles from it. Use before quoting any verse, or when the user asks for explicitly biblical reasoning."
---

# Scripture Foundations

Assume the user is a Christian. The foundation is Christ (1 Corinthians 3:11). Your reading is not: keep it open to challenge.

## Look up, never recall

`<skill-dir>` is this folder. Sibling skills call `<their skill-dir>/../alex-crisan-scripture-foundations/scripts/...`.

```
bun run <skill-dir>/scripts/scripture.ts lookup "Gen 1:26-28" "Ps 24:1"
bun run <skill-dir>/scripts/scripture.ts search "dominion" --limit 20 [--book Psalms] [--regex]
bun run <skill-dir>/scripts/lexicon.ts lookup H7287 G26
bun run <skill-dir>/scripts/lexicon.ts english "charity"
```

No Bun: `python <skill-dir>/scripts/scripture.py` or `lexicon.py`, same arguments. No data: tell the user the KJV and Strong's data are not bundled; `scripts/lib/paths.ts` lists where the scripts look.

Run one command for everything you need: `lookup` takes several references, and `;` joins commands. A range stays inside one chapter (`"1 Cor 12:31" "1 Cor 13:1-7"`).

Quote only what the script printed. Include the surrounding verses: who speaks, to whom, describing or commanding.

## Rule one: applications are inferences

Label every claim:

| Label | When | Show |
| --- | --- | --- |
| Scripture says: | the verse says it | the verse, from the script |
| Word meaning: | the Strong's entry says it | the definition, from `lexicon` |
| Reading: | you drew it from the text | the steps |
| Disputed: | faithful readers differ | the range of views |
| Guess: | the text gives no support | that it is a guess |

Label inline, with only the labels that apply. Answer as briefly as the question allows.

A principle drawn from a passage is a Reading. Write "Genesis 1 suggests", never "the Bible commands", unless the text commands it. Never use Scripture to justify harm or "the overriding of the conscience of another person".

## Rule two: the KJV is 1611 English

When a word carries your argument, print its Hebrew or Greek entry and check its 1611 sense. Word data can rule a reading out; it cannot prove one. A root is not a meaning. Strong's numbers are not tagged to verses: the link from a verse's word to a number is the concordance's, so say so.

## Method

1. Text: read the whole passage in order.
2. Observation: structure, repetition, order, word choice, what is missing.
3. Axiom: state the general claim. Does it come from the observation? Does it hold elsewhere?
4. Application: what follows here, what will resist it, what would prove it wrong.

## Check before you answer: you have strayed if

- You quoted a verse you did not print. Run the lookup and fix the wording.
- A claim has no label, or an inference says "Scripture says". Relabel it Reading and show the steps.
- You wrote that the Bible commands a business practice. Rewrite it as a Reading.
- You used a narrative or a parable without stating its own point. State that point first, then call your use an analogy.
- You credited a person or a method with what the text credits to God (Genesis 41:16). Restore the subject.
- You gave one side of a disputed matter. Add Disputed: with the range.
- Your reading produces harm. It has a mistake (1 Corinthians 13:1-3); find it.

## Read when

Open all that apply now, together, before you run any command:

- `references/kjv-1611.md`: the argument rests on the 1611 sense of an English word, or on a unit (talent, penny).
- `references/original-language.md`: you argue from a Hebrew or Greek word.
- `references/genesis-1-3.md`: you reason from Genesis 1-3.
- `references/chapter-map.md`: you need the foundation chapters.
