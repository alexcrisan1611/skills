---
name: scripture-foundations
description: The Scripture layer for first-principles work. It gives a local, searchable KJV, the foundation chapters of the Bible, and a method to derive principles from the text. Use this whenever a task touches Genesis 1-3, "first principles," foundations, cornerstones, the mind or thoughts of God, or any explicitly biblical reasoning. Use it whenever you must quote, verify, or search the KJV. Use it whenever business, technical, design, or life decisions must rest on a scriptural foundation. Reach for it even when the user only says "first principles" or "Genesis" and does not state the connection, and whenever the exact wording of a verse matters. Load it before you quote Scripture from memory. Recall is not reliable enough for exact wording.
---

# Scripture Foundations

## What this skill is for

Most reasoning fails at the foundation, not at the conclusion. This skill gives three things:

1. The text: a complete, local, searchable KJV. You quote verses from it and not from recall.
2. The map: the chapters that Scripture itself treats as load-bearing, and the reason for each.
3. The method: how to go from a text to a principle without proof-texting (quoting a verse out of context to support a claim).

The other skills in the family build on this layer:

- `first-principles-reasoning`
- `body-first-principles`
- `business-first-principles`
- `business-idea-generation`
- `problem-solving-first-principles`
- `renewing-the-mind`
- `technology-selection`

Load this skill first when a question is foundational. The skill `ancient-secret-wealth-principle` is separate. It does not build on this layer.

---

## Rule one: applications are inferences

This rule is more important than any technique in this skill, and it applies in both directions.

The Bible is the source. A business principle drawn from Genesis is not Scripture. It is an inference that a fallible reader makes about how a revealed order applies to a commercial situation. Say so. "Genesis 1 suggests..." is honest. "The Bible commands you to..." is not honest, unless the text actually commands it.

Follow these rules:

- Read in context. Before you quote a verse, read the verses around it. Find the speaker and the audience. Find out if the passage describes what is or prescribes what ought to be. Many bad doctrines come from a narrative that a reader turned into a command.
- Keep description apart from prescription. Genesis 3 describes the curse. It does not command thorns. It tells you to expect them.
- Do not invent certainty on disputed matters. Where faithful readers differ, show the range and let the user weigh it. False confidence here is a form of lying.
- Never use Scripture to justify harm, exploitation, or the overriding of the conscience of another person. The keystone governs every application. Love is the first principle of motive (1 Corinthians 13:1-3). A reading that produces cruelty has a mistake in it.
- Label your confidence. Use these labels, in plain text: "Text states:" for what the verse says, "Inference:" for what follows from it, "Contested:" where faithful readers differ, and "Speculation:" for a guess. These are four different claims.

A foundation that you cannot question is not a foundation. It is an assumption in a costume.

---

## Rule two: the KJV is 1611 English, and English moves

The translators made the King James Version in 1611. Revisions brought it to its familiar form in 1769. Its English is not modern English. Some of its most important theological words changed meaning since then, and a few changed to near-opposites. Much bad reasoning reads a modern sense back into a 1611 word.

Do two checks before you draw any inference from the text.

### Check the underlying Hebrew or Greek

Each KJV word is a choice of translation, and the choice is not always the nearest one. Use `scripts/lexicon.ts` (or `scripts/lexicon.py`) over Strong's. Look carefully at the words where the traditional rendering now understates or redirects the original:

| KJV       | Reference        | Underlying word             | What it carries                                                                     |
| --------- | ---------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| charity   | 1 Corinthians 13 | G26 ἀγάπη (_agapē_)         | love. In 1 Corinthians 13 the KJV renders this word "charity". Elsewhere it is usually "love" |
| faith     | Hebrews 11:1     | G4102 πίστις (_pistis_)     | persuasion, conviction, constancy, not only bare belief                             |
| dominion  | Genesis 1:26, 28 | H7287 רָדָה (_radah_)       | "to tread down, i.e. subjugate". This is stronger than custodianship                |
| subdue    | Genesis 1:28     | H3533 כָּבַשׁ (_kabash_)    | to bring into bondage, to force into service                                        |
| dress     | Genesis 2:15     | H5647 עָבַד (_abad_)        | to work, to serve, to till. The same verb is used of worship                        |
| keep      | Genesis 2:15     | H8104 שָׁמַר (_shamar_)     | "to hedge about (as with thorns), i.e. guard". The sense is protective              |
| beginning | Genesis 1:1      | H7225 רֵאשִׁית (_reshith_)  | "the first, in place, time, order or rank (specifically, a firstfruit)"             |
| help meet | Genesis 2:18     | H5828 עֵזֶר (_ezer_)        | "aid". The same word is used of God as the help of Israel. It is not a subordinate assistant |
| talent    | Matthew 25:15    | G5007 τάλαντον (_talanton_) | a weight of money (about 6,000 denarii, about 20 years of wages), not an ability    |

The last row needs more attention. The popular reading of the parable of the talents is "use your God-given abilities". The English sense "natural ability" came from this parable, and it was in English by the 15th century. But the Greek word is a weight of money. Whatever the English word meant in 1611, the parable is about capital: capital that a master entrusts, allocates unequally, and calls to account. That point is sharper and more demanding than the usual one.

### Check the 1611 sense of the English word

Some KJV words moved to a sense close to their opposite:

| KJV word     | 1611 sense                   | Modern sense        | Example                          |
| ------------ | ---------------------------- | ------------------- | -------------------------------- |
| let          | to hinder, restrain          | to permit           | 2 Thessalonians 2:7              |
| prevent      | to go before                 | to stop             | 1 Thessalonians 4:15             |
| conversation | conduct, manner of life      | spoken exchange     | 1 Peter 3:1-2, Philippians 1:27 (see the note below) |
| careful      | full of care, anxious        | attentive, cautious | Philippians 4:6, Luke 10:41      |
| suffer       | to permit                    | to endure pain      | Matthew 19:14                    |
| quick        | alive                        | fast                | Hebrews 4:12, 2 Timothy 4:1      |
| meat         | food, any provision          | flesh               | Genesis 1:29                     |
| bowels       | the inner person, compassion | intestines          | Colossians 3:12, Philippians 1:8 |
| by and by    | immediately                  | eventually          | Matthew 13:21, Luke 21:9         |
| peculiar     | one's own possession         | odd                 | 1 Peter 2:9, Titus 2:14          |
| want         | to lack                      | to desire           | Psalm 23:1                       |
| ghost        | spirit                       | apparition          | "Holy Ghost," throughout         |

A note on "conversation": Philippians 3:20 also has "conversation", but the Greek there is G4175 _politeuma_, "citizenship". It is a weak example of the sense "conduct".

The working rule: when a verse does argumentative work in your reasoning, verify the word before you use it. Never build an inferred practice on an unverified modern reading of a 1611 word. If the underlying term does not support the inference, the inference is wrong. Rhetorical force does not repair it.

### Two failure modes in the other direction

- Etymology is not meaning. The root of a word does not control its usage. _Ezer_ is related to words for aid, but that fact alone does not license a doctrine of marriage. The usage across the canon does. Lexical data limits interpretation. It does not produce it.
- Do not overclaim precision. Translation is not mechanical, and the KJV translators sometimes rendered loosely. "The Hebrew is stronger than 'dominion' suggests" is a fair claim with the dictionary open. "The Hebrew proves that Genesis 1 commands aggressive resource extraction" is not a fair claim.

Full lexicon: `references/original-language.md`

1611 false friends, in more detail: `references/kjv-1611.md`

---

## The text: how to look things up

The KJV is stored as one JSON file for each book. Use the bundled script, not memory.

```
bun run <skill-dir>/scripts/scripture.ts lookup "Genesis 1:1-5"
bun run <skill-dir>/scripts/scripture.ts lookup "Gen 1:26-28" "Ps 24:1"
bun run <skill-dir>/scripts/scripture.ts search "dominion" --limit 20
bun run <skill-dir>/scripts/scripture.ts search "foundation" --book Psalms --book Isaiah
bun run <skill-dir>/scripts/scripture.ts search "lov(e|eth) the Lord" --regex
bun run <skill-dir>/scripts/scripture.ts stats
```

If Bun is not installed, use `python <skill-dir>/scripts/scripture.py` with the same arguments.

Notes that save time:

- Book names are flexible. `Gen`, `1Cor`, `Song`, `ecc`, and `Ps` all resolve. An ambiguous or unknown name gives a clear error, not a wrong answer.
- Search is literal and case-insensitive by default. Add `--regex` for patterns.
- The source data contains curly apostrophes. The script folds them, so `Lord's` matches. If you read the JSON directly, fold them yourself. Curly apostrophes break naive string matching.
- The script finds the data directory in this order: `--dir`, then `$KJV_DIR`, then `~/bible-kjv` and the other names under the home directory, then folders under the working directory, then `data/` folders above the script. For the full order, see `scripts/lib/paths.ts` and `scripts/scripture.py`.
- The whole Bible has about 31,102 verses. A search across all books is fast, so run it freely.

Quote from the output of the script, not from memory. Recalled wording is usually close, but it is sometimes wrong in the places that matter most. For example, the usual recall error in 1 Corinthians 13 is "love" where the KJV has "charity". That error changes how the passage reads.

---

## The method: text → observation → axiom → application

The method has four steps. Most "biblical business" content goes wrong because it skips the second step.

1. Text. Read the full passage, in order, before you extract anything.

2. Observation. Find what actually happens in the text. Look at these features:

- Structure. Genesis 1 has a two-pass shape: days 1-3 form domains, and days 4-6 fill them. Structure is often the argument.
- Repetition. "And God said" occurs 10 times. "God saw" occurs 7 times: six times with "that it was good" (1:4, 10, 12, 18, 21, 25) and one time with "very good" (1:31). "And the evening and the morning were the Nth day" closes each day. Repetition marks what the author wants you to see.
- Sequence. Find what comes first, and what depends on what.
- Vocabulary. Look at the verbs and nouns that the text chooses. In Genesis 2:15 God puts the man in the garden to _dress_ it and to _keep_ it. These are two different verbs that do two different jobs.
- The negative space. Look for what is clearly absent, or what the text calls "not good."

3. Axiom. State the underlying principle as a general claim, at the level where it stops needing justification. Test it with these questions:

- Does it come from the observation, or did you bring it in from outside?
- Does it still hold in a different situation?
- Does it contradict another axiom that you hold?

4. Application. Derive the result for the actual situation. Then estimate the friction. Genesis 3:17-19 applies to every application: the ground resists. Name what can make the derivation wrong.

Worked example:

| Step        | Content |
| ----------- | ------- |
| Text        | Genesis 2:15: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it." |
| Observation | God assigns work before the fall. There are two verbs, not one: _dress_ (cultivate, serve, bring forth) and _keep_ (guard, preserve, hold). The text gives both as the job. |
| Axiom       | Inference: creation and maintenance are equal duties, not a hierarchy. Building is not more holy than keeping. |
| Application | Inference: an organization that rewards only shipping collects maintenance debt until it cannot keep the thing that it built. Budget for "keep" explicitly. It needs owners, calendar time, and the same status as new work. |
| Friction    | Maintenance is invisible, so every incentive system underfunds it. A name for the problem does not fix the incentive. Someone must hold the line. |

---

## The foundation map

Scripture names the category of foundations and develops it from the beginning to the end. Three tests select a foundation chapter:

1. Explicit foundation language ("first," "beginning," "foundation," "cornerstone").
2. Later Scripture quotes the chapter as a foundation. A chapter that Romans, Hebrews, or 1 Peter cites is load-bearing by definition.
3. The chapter gives a direct view into the mind and ways of God.

The chapter that names the topic is Hebrews 5:11-6:2. It is the only New Testament passage that literally says "first principles". Hebrews 5:12 has "the first principles of the oracles of God". The Greek there is _ta stoicheia tēs archēs_, which uses two words: G4747 _stoicheion_ ("elements") and G746 _archē_ ("beginning"). Hebrews 6:1 has "the principles of the doctrine of Christ", and "principles" there is _archē_ alone. The passage then lists six items: repentance from dead works, faith toward God, baptisms, laying on of hands, resurrection of the dead, and eternal judgment.

The starter set, in reading order:

| Chapter                                | What it establishes                                                      |
| -------------------------------------- | ------------------------------------------------------------------------ |
| Genesis 1                              | God as Creator, order, and source. The archetype of all making.          |
| Genesis 2                              | Cultivation, boundaries, work, partnership, the first "not good."        |
| Genesis 3                              | The fall, friction, blame, the first promise, guarded access.            |
| Genesis 12 and 15                      | The covenant with Abraham. Belief counted as righteousness.              |
| Exodus 3 and 34:5-7                    | "I AM". The self-description of God: merciful, gracious, slow to anger.  |
| Exodus 18                              | Delegation and triage. The first management fix.                         |
| Exodus 20                              | Covenant law.                                                            |
| Deuteronomy 6:4-9                      | The Shema: the foundation of love and obedience.                         |
| Deuteronomy 8                          | Wealth, the test of the wilderness, and the forgetting that follows success. |
| 1 Chronicles 12:32                     | "understanding of the times, to know what Israel ought to do"            |
| Nehemiah 1-6                           | Reconnaissance, vision, threat, build and defend, focus.                 |
| Job 38-41                              | "Where wast thou when I laid the foundations of the earth?" The limits of reasoning. |
| Proverbs 1-9                           | "The fear of the LORD is the beginning of knowledge."                    |
| Proverbs 24:3-4                        | Build, then establish, then fill.                                        |
| Ecclesiastes 1-2, 9:11, 10:10, 11:1-6  | Experiment, vanity tested, the sharpened axe, action under uncertainty.  |
| Ecclesiastes 12:13                     | A literal first-principles summary of the whole duty of man.             |
| Isaiah 28:16                           | "a sure foundation: he that believeth shall not make haste."             |
| Isaiah 40 and 44-46                    | Incomparability. "Declaring the end from the beginning."                 |
| Isaiah 53 and 55                       | The suffering servant. "My thoughts are not your thoughts."              |
| Matthew 5-7                            | The Sermon on the Mount. The house on the rock.                          |
| Matthew 22:34-40                       | Love God, love neighbor. All the law and the prophets hang on these two. |
| Matthew 25:14-30                       | The talents: capital allocated unequally, a return expected.             |
| Luke 14:28-30                          | "sitteth not down first, and counteth the cost"                          |
| John 1                                 | "In the beginning was the Word." The archetype repeats.                  |
| Acts 6 and 17                          | The first decision about organization design. The model pitch to a culture. |
| Romans 1-8 and 12:1-2                  | The compact system. The renewed mind.                                    |
| 1 Corinthians 3:10-15                  | "other foundation can no man lay". Work tried by fire.                   |
| 1 Corinthians 13                       | Love as the first principle of motive. The keystone.                     |
| Ephesians 1-2                          | Purpose before creation, the corner stone, grace through faith.          |
| Philippians 2:1-11                     | "Let this mind be in you." Humility as the pattern of thought.           |
| Hebrews 11                             | "faith is the substance of things hoped for"                             |

Genesis 1, Genesis 2, Genesis 3, and 1 Corinthians 13 are the core of the set.

Full map with all chapters and cross-references: `references/chapter-map.md`

Close reading of Genesis 1-3, verse by verse, with the observations: `references/genesis-1-3.md`

---

## The vocabulary of foundations

Where the text itself says "foundation," it speaks of what you cannot replace without destroying the structure:

- Matthew 7:24-27: the house on the rock. Storms test foundations, not plans.
- 1 Corinthians 3:10-15: Christ is the only foundation, and fire tries the work of every builder.
- 1 Corinthians 3:11: "other foundation can no man lay than that is laid".
- Ephesians 2:19-22: apostles and prophets, "Jesus Christ himself being the chief corner stone".
- Isaiah 28:16: the sure foundation in Zion. "he that believeth shall not make haste".
- Hebrews 11:10: the city "which hath foundations".
- 2 Timothy 2:19: "the foundation of God standeth sure".
- Revelation 21:14: the foundations of the New Jerusalem.

The nearest thing to a definition is Hebrews 11:1: "Now faith is the substance of things hoped for, the evidence of things not seen." The Greek word for "substance" is G5287 _hypostasis_, "a setting under (support)". It is a foundation idea, but it is not the New Testament word for "foundation". That word is G2310 _themelios_. A foundation is what you stand on before you can see the outcome. That is the working definition for everything in this skill family.

---

## When a question is foundational

Not every question is foundational. First-principles work is expensive. It takes longer than a known pattern, and it is worth the cost only when the pattern is actually broken. Use this skill in these cases:

- The decision is hard to reverse, or the cost of a wrong decision is structural.
- The conventional answer failed, or everyone agrees too quickly.
- The question is "why do we do this at all?" and not "how do we do this better?"
- Someone justifies something by authority, fashion, or analogy and not by principle.
- The user explicitly asks for foundations, Genesis, or first principles.

For everything else, use the pattern. Foundations are for building on, not for admiring.
