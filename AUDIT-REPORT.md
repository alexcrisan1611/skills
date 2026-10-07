# Audit of the skills repository

Date: October 6, 2026. Scope: the 9 skills in this repository, 41 files, about 258,000 words. Nothing was edited.

Status: on October 7, 2026, the findings in this report were fixed on the branch `fix/audit-findings`, and every file was converted to Simple English. The line numbers below refer to commit `d7e94a4`, before the fixes.

## How the audit was done

Eight reviewers read every line of every Markdown file. They checked each quoted verse against the local KJV with `scripture-foundations/scripts/scripture.py` and each Strong's number with `scripts/lexicon.py`. They checked the claims about history, science, medicine, law, and accounting against known facts. Accounting claims were checked against US GAAP. I spot-checked a sample of the findings against the KJV again, and each sample held.

Each finding has a severity:

- High: the file misquotes Scripture, cites the wrong verse or word, states a false fact, or points to a file or skill that does not exist.
- Medium: the file presents an inference as what the text states, misreads the context, or contradicts itself or another skill.
- Low: a small error, a typo, or a style problem.

Line numbers refer to the files as they are on commit `d7e94a4`.

## Summary

The KJV wording is in good condition where the files use block quotes. Almost every block quote matches the KJV word for word. The problems are in five other places:

1. Verse numbers. In 25 block quotes, a formatter renumbered selected verses as if they were consecutive. The text is correct, but the verse numbers are wrong.
2. Quotes in running prose. About 25 inline quotes drop or change a word.
3. Counts. Many counts in the files are wrong ("seven times", "three clauses", "six symptoms").
4. Labels. The family rule says that a business application is an inference and must carry that label. Dozens of inferences carry the label "Text states".
5. Stale paths and logs. The files still point to a `skills/` folder that no longer exists. Five files say that reference files are missing, and those files now exist.

Simple English compliance is low across the repository. Only `genesis-1-3.md` and `chapter-map.md` come close.

| Skill | High | Medium | Simple English status |
|---|---|---|---|
| scripture-foundations | 10 | 9 | SKILL.md and two references not converted |
| business-first-principles (SKILL, axioms, canon-survey) | 19 | 14 | Not converted, axioms.md is the worst file |
| business-first-principles (capital, ethics) | 11 | 15 | Not converted |
| business-first-principles (org, trends) | 9 | 16 | Not converted |
| renewing-the-mind | 6 | 12 | SKILL.md close, references not converted |
| body-first-principles | 6 | 8 | Mostly bold and British spelling |
| ancient-secret-wealth-principle | 1 (structural) | several | Not converted |
| business-idea-generation | 4 | 7 | Mostly bold and British spelling |
| problem-solving-first-principles | 5 | 8 | Mostly bold and British spelling |
| first-principles-reasoning | 0 | 6 | Mostly bold |
| technology-selection | 2 | 7 | Mostly bold and British spelling |

## Problems that cross skill boundaries

### Renumbered verses in block quotes

Selected verses carry the numbers 1, 2, 3 in order instead of their real numbers. The probable cause is a Markdown formatter that read `> 31.` as an ordered list and renumbered it. The observations under each block cite the real numbers, so the file contradicts itself. Write each verse as `> 31 text` without the period, or as `> (31) text`.

| File | Passage | Labeled | Real verses |
|---|---|---|---|
| business-first-principles/references/capital-and-stewardship.md:749 | Deuteronomy 24 | 7-10 | 10-13 |
| capital-and-stewardship.md:976 | Genesis 41 | 50-54 | 53-57 |
| capital-and-stewardship.md:1170 | Leviticus 25 | 29 | 34 |
| business-first-principles/references/ethics.md:1202 | Luke 10 | 26-34 | 29-37 |
| ethics.md:1270 | Matthew 25 | 33-40 | 35, 36, 40, 42-46 |
| ethics.md:1361 | Genesis 39 | 3-10 | 4, 6-12 |
| ethics.md:1436 | Genesis 20 | 7-11 | 9-13 |
| ethics.md:1587 | Daniel 6 | 9-10 | 10-11 |
| ethics.md:1658 | Revelation 18 | 6-15 | 7, 8, 9, 11, 12, 13, 17, 20, 23, 24 |
| business-first-principles/references/org-and-labour.md:570 | Nehemiah 3 | 1-9 | 1, 2, 3, 8, 10, 12, 23, 28, 32 |
| org-and-labour.md:661 | Nehemiah 4 | 19-21 | 21-23 |
| org-and-labour.md:915 | 1 Chronicles 22 | 5-8 | 5, 14, 15, 16 |
| org-and-labour.md:928 | 1 Chronicles 28 | 1-10 | 1-3, 9-12, 19-21 |
| org-and-labour.md:1783 | John 13 | 1-12 | 1, 3-7, 12-17 |
| org-and-labour.md:1853 | 1 Corinthians 12 | 4-19 | 4-7, 12, 14, 15, 17, 18, 21-27 |
| business-first-principles/references/trends-and-timing.md:616 | Numbers 14 | 1-9 | 1-4, 28-30, 33, 34 |
| trends-and-timing.md:853 | Daniel 2 | 20-34 | 20-22, 31-45 |
| trends-and-timing.md:889 | Daniel 7 | 3-9 | 3-7, 23, 24 |
| business-idea-generation/SKILL.md:166 | Acts 17 | 24 | 28 |
| business-idea-generation/SKILL.md:225 | Genesis 41 | 31-34 | 33-36 |
| business-idea-generation/SKILL.md:243 | Genesis 47 | 18-19 | 23-24 |
| business-idea-generation/SKILL.md:366 | Numbers 13 | 29-31 | 30, 31, 33 |
| business-idea-generation/SKILL.md:480 | Genesis 1 | 3-4 | 4-5 |
| body-first-principles/SKILL.md:76 | 1 Corinthians 12 | 22 | 23 |

### Paths to a folder that no longer exists

About 57 paths in 20 files start with `skills/`, for example `skills/scripture-foundations/scripts/scripture.ts`. Commit `799878a` moved the skills to the repository root, so these paths do not resolve. Remove the `skills/` prefix, or use paths relative to each skill such as `../scripture-foundations/references/kjv-1611.md`.

`scripture-foundations/references/chapter-map.md:11` and `genesis-1-3.md:833` also use `bun run verse` and `bun run lexicon`. The repository has no `package.json`, so these commands fail. Use the form in `scripture-foundations/SKILL.md`: `bun run <skill-dir>/scripts/scripture.ts lookup "Genesis 1:1"`.

### Verification logs that are now false

These files end with a log that says the four reference files of scripture-foundations "do not exist" or are "None present":

- `business-first-principles/references/axioms.md:3042`
- `capital-and-stewardship.md:2131`
- `ethics.md:2097`
- `org-and-labour.md:2306`
- `trends-and-timing.md:1933`

All four files (`chapter-map.md`, `genesis-1-3.md`, `kjv-1611.md`, `original-language.md`) exist. Delete these log items. Also, `trends-and-timing.md:1880` lists two items as "now verified" under the heading "Claims I could NOT verify". `capital-and-stewardship.md:2079` logs verses that the file does not use.

### Skill names that do not exist

`scripture-foundations/SKILL.md:16` names `first-principles-thinking` and `technology-decisions`. The real names are `first-principles-reasoning` and `technology-selection`. The same list also leaves out `body-first-principles` and `renewing-the-mind`, which build on this layer.

`business-first-principles/references/canon-survey.md` is not listed in the References section of `business-first-principles/SKILL.md:376`.

### The "talent" claim

Three files say that in 1611 "talent" meant only a weight, and that the sense "natural ability" came later:

- `scripture-foundations/SKILL.md:77`
- `scripture-foundations/references/kjv-1611.md:81`
- `scripture-foundations/references/chapter-map.md:493`, with the label "Text states"

This is false. The sense "natural ability" came from this parable and was in English by the 1400s. `original-language.md:806` says the opposite of the other three files, and it is correct. `capital-and-stewardship.md:123` repeats the claim. The correct point is this: the Greek word is a weight of money, so the parable is about capital. What the English word meant in 1611 does not change that.

A similar claim says that "charity" did not mean alms in 1611 (`scripture-foundations/SKILL.md:67`, `chapter-map.md:284`, `kjv-1611.md:80`, `original-language.md:740`). The alms sense also existed before 1611. The correct claim is that the KJV uses "charity" for love in 1 Corinthians 13.

### "Text states" on inferences

The family rule in `scripture-foundations/SKILL.md:22` says that an application is an inference and must carry that label. Every skill except ancient-secret-wealth-principle has inferences with the label "Text states". The worst examples are listed under each skill below. Do one pass over all files and relabel each one.

### ancient-secret-wealth-principle breaks the family rules

This skill quotes no Scripture and labels nothing as text or inference. Line 29 states "The biblical hierarchy of creation mirrors the value hierarchy" with no reference. Line 27 calls labor "the lowest form of work". That conflicts with these sources:

- Proverbs 14:23: "In all labour there is profit: but the talk of the lips tendeth only to penury".
- `business-first-principles` axioms A16 and A17, which say that work comes before the fall and that maintenance is not junior work.
- `body-first-principles` B4, which says to reward the maintainers and the support desk.

Line 70 says that money spent on skills "is an investment seed that replenishes itself". That is a promise of return, and it can cause financial harm. Under US GAAP (ASC 720), training costs are expensed when they occur. They are not assets. The income bands overlap: Level 2 runs from $80,000 to $250,000, and Level 3 starts at $100,000. Line 37 caps Level 1 at about $80,000 a year, which does not fit high-paid hands-on work such as surgery. The "80-90%" figure on line 54 has no source. The timestamps such as [02:50] cite a video that the file does not name. The file also uses LaTeX (`$\rightarrow$`), which does not render.

Present this skill as Myron Golden's model, name the source video, label the biblical claims as inferences, and remove the "replenishes itself" promise.

### Accounting language against US GAAP

| File | Text | Problem | Fix |
|---|---|---|---|
| capital-and-stewardship.md:1498 | "the distinction between the balance sheet and working capital" | Working capital is part of the balance sheet. | "long-term reserves and working capital" |
| capital-and-stewardship.md:1970 | "Borrowing vessels is a capital expenditure" | A loan of an item buys no asset and spends no cash. | "Secure capacity before volume." |
| business-first-principles/SKILL.md:130, axioms.md:1142 | "capitalise before you operate" | In GAAP, "capitalize" means to record a cost as an asset. | "fund before you operate" |
| technology-selection/references/decision-framework.md:272 | "A managed service subscription replaces the hardware depreciation" | Depreciation is a non-cash expense. The subscription replaces hardware purchases and running costs. | "replaces the hardware refresh spending and the running costs" |
| technology-selection/references/total-cost.md:119 | a monthly "replacement reserve" | GAAP does not let you accrue an expense for a future replacement. It is only a budget earmark. Maintenance after go-live is expensed (ASC 350-40). | Call it a budget earmark. State that the cost model is on a cash basis. |
| ethics.md:502 | "Revenue recognition timing" listed as falsification | Under ASC 606, timing follows rules. | "revenue recognized before the performance obligation is satisfied" |
| ancient-secret-wealth-principle/SKILL.md:70 | skill spending as an asset that replenishes itself | Training is expensed (ASC 720). | Remove the claim. |

## Findings by skill

### scripture-foundations

High:

- SKILL.md:161 says "and God saw that it was good" occurs 7 times. The KJV has 6 ("that it was good" in 1:4, 10, 12, 18, 21, 25). Verse 1:31 says "very good".
- genesis-1-3.md:422 says "Each day is called good." Day 2 (1:6-8) has no verdict, and day 3 has two.
- SKILL.md:259 says that hypostasis is "the same word used for foundation". In the New Testament, "foundation" translates G2310 themelios. Hypostasis is a related idea, not the same word.
- chapter-map.md:77 says the search for "foundation" returns "10 Hebrew and 6 Greek" entries. The tool returns 14 Hebrew and 2 Greek.
- chapter-map.md:227 says Psalm 110 is quoted in three New Testament books. Matthew 22:44, Mark 12:36, Luke 20:42, Acts 2:34, and Hebrews 1:13 quote it, so it is at least five.
- kjv-1611.md:336 puts the Matthew and Luke sparrow prices in two different coins. Both use the assarion (G787). Only Mark 12:42 uses the kodrantes.
- original-language.md:973 says the four KJV occurrences of oikonomia are all "dispensation". Luke 16:2-4 has "stewardship" 3 times, so the KJV uses it in 7 verses.
- The talent and charity claims (see above).

Medium:

- Hebrews 5:12 says "first principles" for "ta stoicheia tes arches", which uses two Greek words. SKILL.md:198 and chapter-map.md:133 tie the phrase to arche only. original-language.md:722 ties it to stoicheion only. Make all three say that it uses both.
- original-language.md:637 ties "pleasant to the eyes" (Genesis 3:6) to H2530 chamad. The word there is H8378 ta'avah. Chamad is "to be desired".
- original-language.md:897 cites 2 Corinthians 8:9 for kenoo. That verse uses ptocheuo.
- kjv-1611.md:304 gives a talent as 3,000 shekels at 11-12 g, which equals 30-34 kg. The math gives 33-36 kg.
- genesis-1-3.md:401 (A13) says the food is given before the work. Genesis 1:28 (the dominion mandate) comes before 1:29 (food), and 2:15 (work) comes before 2:16 (eat).
- genesis-1-3.md:467 builds "the garden is a fenced place" on the root of shamar. SKILL.md:109 forbids this ("Etymology is not meaning").
- Inferences with the label "Text states": genesis-1-3.md:359, 361, 604, 723, 757.
- chapter-map.md:153 refers to "group 6 and group 7". Group 6 holds only 1 Corinthians 13, and it has no foundation vocabulary.

Low: SKILL.md:216 cuts Job 38:4 short ("the foundations of the earth"). kjv-1611.md:405 says "24 occurrences" where the tool counts 24 verses. Philippians 3:20 is a weak example for "conversation", because the Greek there is politeuma (citizenship).

### business-first-principles: SKILL.md, axioms.md, canon-survey.md

Misquotes:

- SKILL.md:93 has "for days, and for years". Genesis 1:14 reads "for days, and years".
- SKILL.md:165 has "with the other held a weapon". Nehemiah 4:17 reads "with the other hand held a weapon".
- axioms.md:1355 has "may rest... and be refreshed". Exodus 23:12 reads "may rest, and the son of thy handmaid, and the stranger, may be refreshed".
- canon-survey.md:94 has "is entered into the ears". James 5:4 reads "are entered into the ears of the Lord of sabaoth".
- canon-survey.md:58 drops the repeated "for" in 2 Timothy 3:16.
- canon-survey.md:49 has "go on to perfection". Hebrews 6:1 reads "go on unto perfection", and the verse says to leave the first principles, not to master them.

Wrong counts and facts in axioms.md:

- Line 908: "after his kind" occurs 8 times in Genesis 1, not 7.
- Line 464: three of the five "divide" verses fall on forming days, not four. Verses 14 and 18 are on day 4.
- Line 1294: rest is not established "before any human being exists". Man is made on day 6.
- Line 2269: God does not question the serpent. Genesis 3:14 curses it without a question.
- Line 1402: the gold is in the land of Havilah, not in the garden.
- Line 288: the walls of Jerusalem did not decay from neglect. Babylon burned them (Nehemiah 1:3, 2 Kings 25:10).
- Line 1341: Leviticus 25 releases land and servants. Debt release is in Deuteronomy 15.
- Line 930: Genesis 1:11 gives plants no command to multiply.
- Line 1209: "finished" and "ended" in Genesis 2:1-2 are one Hebrew verb (H3615 kalah), not two. John 19:30 uses the Greek teleo, so it is not "the same word".
- Line 2926: Romans 16:20 (syntribo, G4937) and Genesis 3:15 (shuph, H7779) do not use "the same verb".
- Line 687: "lights" in Genesis 1:14 is H3974 ma'or, not H216.
- Line 2694 says "in the New Testament" and then quotes Leviticus 17:11.

Medium:

- SKILL.md:284 and axioms.md:2853 say access control is part of the good order. axioms.md:2847 says it follows the fall.
- SKILL.md:346 maps the stopping rule to A10 and A14. SKILL.md:320 maps it to A8 and A15.
- A18 and A19 (axioms.md:1729) say the gap was not visible before the naming. Genesis 2:18 states it before the naming.
- SKILL.md:291 and axioms.md:2946 say "aim at the head" of a competitor, from Genesis 3:15. axioms.md:2952 says "A competitor is not the enemy."
- axioms.md:1047 says the grant has "no coercion in it". The same file glosses kabash as "force, bring into bondage".
- axioms.md:1907 recommends "non-competes with teeth". California (Business and Professions Code section 16600), Minnesota, and North Dakota void most non-competes. Add a caveat about jurisdiction.
- canon-survey.md:27 drops Jeremiah 31, and line 74 uses Jeremiah 31:33. The survey also drops the sacrificial law, and A31 builds on Leviticus 17:11.
- canon-survey.md:164 says you harvest "more than you sow" from Galatians 6:7-9. The passage does not say this.
- The "5-10x" cost figure at SKILL.md:344 has no source.

### business-first-principles: capital-and-stewardship.md, ethics.md

Misquotes:

- capital-and-stewardship.md:1922 and 1943 have "And he said, There is not a vessel more". 2 Kings 4:6 reads "And he said unto her".
- capital-and-stewardship.md:1189 has "ye shall eat yet of old fruit". Leviticus 25:22 reads "and eat yet of old fruit".
- capital-and-stewardship.md:1292 has "according unto the fewness". Leviticus 25:16 reads "according to".
- ethics.md:883 adds "and" before "the glory of the LORD" in Isaiah 58:8.
- ethics.md:1227 has "saw him, and passed by". Luke 10:31 reads "when he saw him, he passed by".

Wrong facts:

- capital-and-stewardship.md:1099 calls Genesis 47:24 a "five-to-one split". The verse gives one fifth to Pharaoh and keeps four parts, which is four to one.
- capital-and-stewardship.md:953 says that 1.4 years of output covers seven years with no harvest. The numbers do not work. Line 959 and Working Rule 19 repeat the claim. Genesis 41:49 says the store was too large to count.
- capital-and-stewardship.md:192 says "reckoneth" in Matthew 25:19 is G3056 logos. The verb is G4868 synairo.
- capital-and-stewardship.md:344 says three servants are "named". The servants in Matthew 25 have no names.
- capital-and-stewardship.md:19 calls the setting "pre-monetary". The file quotes "If thou lend money" (Exodus 22:25). Write "before coinage".
- capital-and-stewardship.md:1008 says Joseph "bought low". He took a tax. He did not buy grain.
- capital-and-stewardship.md:1196 calls Exodus 23:12 "the daily version". It is the weekly sabbath.
- capital-and-stewardship.md:1306 says Leviticus 25:16 states a present-value calculation. It prices by the number of years and states no discount.
- ethics.md:213 says "ten of the eighteen verses". Leviticus 19 has 37 verses.
- ethics.md:264 points to Part 6 of capital-and-stewardship.md for James 5:4. That file never quotes James 5.
- ethics.md:1853 cites Deuteronomy 25:4 (the ox) for wages. Use Deuteronomy 24:14-15.

Medium: Working Rule 1 calls the money changers a "risk-free rate". The tie-break at ethics.md:1946 ("prefer the party who cannot refuse") contradicts the file's own reading of Leviticus 19:15, which forbids partiality in either direction. Four axiom names drift from axioms.md (A19, A27, A30, A32). The inferences at ethics.md:630, 1239, and 1776 carry the label "Text states". Four counts do not match their lists (capital-and-stewardship.md:773 and 1216, ethics.md:221 and 1231).

### business-first-principles: org-and-labour.md, trends-and-timing.md

Misquotes:

- org-and-labour.md:22, 113, and 2144 have "the thing is too heavy". Exodus 18:18 reads "this thing".
- org-and-labour.md:1637 has "among them". 2 Thessalonians 3:11 reads "among you".
- org-and-labour.md:1892 has "God hath set". 1 Corinthians 12:18 reads "But now hath God set".
- org-and-labour.md:2124 has "A multitude of counsellors". Proverbs 15:22 reads "the multitude".
- trends-and-timing.md:916 has "it shall break". Daniel 2:40 reads "shall it break".
- trends-and-timing.md:1351 quotes "Both may be alike good". Ecclesiastes 11:6 reads "both shall be alike good".

Wrong facts:

- org-and-labour.md:250 gives the Exodus 18 tier ratios as 10 : 5 : 2 : 1. The spans between tiers are times 10, times 2, and times 5. The verification log at line 2271 repeats the error.
- org-and-labour.md:1823 says hypodeigma (John 13:15, G5262) is "the same word" as typos (1 Peter 5:3, G5179). They are two words.
- org-and-labour.md:695 and rule 18 read Nehemiah 4 as a rotation of guards. Verse 22 says the same people guard by night and work by day.
- trends-and-timing.md:480 says Joseph sold "at the bottom". He sold grain when it was scarcest and dearest, so that was the top of the grain market.
- trends-and-timing.md:1617 places Genesis 50:20 "at the end of the famine". Jacob lived 17 years in Egypt (Genesis 47:28), so the verse comes about 12 years after the famine.
- trends-and-timing.md:1712 says "six imperatives" and lists eight.
- trends-and-timing.md:96 and rule 3 say yada is knowledge "not by inference". The Strong's definition the file quotes includes "inferentially".

Medium: trends-and-timing.md:17 defines a failure of the first capacity with the definition of the second. trends-and-timing.md:123 says a prophetic gift "would be one person", but Numbers 11:25 and 1 Samuel 10:5 show groups. org-and-labour.md:1396 applies Leviticus 19:13 (a laborer's wages) to supplier payment terms. Supplier invoices are trade payables, not wages. org-and-labour.md:171 says "Nothing in the list requires an interview" with the label "Text states", and that drives rule 8. org-and-labour.md:771 says Nehemiah uses the same word for usury as Leviticus 25. Leviticus uses H5392 neshek, a different word. The file name uses British spelling. Rename it to `org-and-labor.md` and update the three references to it.

### renewing-the-mind

High:

- SKILL.md:126 has "easy to be entreated". James 3:17 reads "intreated". thought-patterns.md:1282 repeats the error.
- SKILL.md:29, 63, and 117 change the KJV punctuation in Romans 12:2, Proverbs 4:23, and Philippians 4:8. Romans 12:2 also drops the "And" at the start. The plain-English rules do not apply inside a quote. Restore the KJV text.
- thought-patterns.md:786 says "limited" in Psalm 78:41 is H6696 tsur, "to besiege". The KJV gloss "limit" belongs to H8428 tavah. The siege reading has no basis.
- thought-patterns.md:628 says "the fear of man" in Proverbs 29:25 is H4034 magorah. The word is H2731 charadah.
- thought-patterns.md:1127 says the KJV renders H7279 as "whisperer". That gloss belongs to H5372 nirgan.
- institutions.md:536 says television and advertising is the oldest of the three forces. Compulsory schooling is older: Prussia made it law in 1763 and Massachusetts in 1852.

Medium:

- institutions.md:198 quotes "the face of his fields" as Proverbs. The phrase is not in the KJV. Proverbs 27:23 reads "know the state of thy flocks, and look well to thy herds".
- thought-patterns.md:869 ties metron to 2 Corinthians 10:12. That verse uses metreo. Metron is in verses 13 and 15.
- thought-patterns.md:1370 has the title "Hasting in the day of adversity". Proverbs 24:10 is about fainting.
- thought-patterns.md:1628 lists four failures and maps only three codes. The table at line 1720 gives a different code.
- thought-patterns.md:722 (C5, catastrophizing) gives only prayer and Scripture for anxiety. It does not repeat the medical warning from SKILL.md:197. Add one line: persistent anxiety can be a medical condition, and prayer does not replace a physician.
- institutions.md:10 and other lines use "the commission for this skill", which is text from the authoring brief. Remove it.
- SKILL.md:12 says three forces form false patterns in almost everyone "before the age of twenty". This has no source.

### body-first-principles

High:

- body-systems.md:332 says "careful" in Philippians 4:6 is G5431 phrontizo. The Greek is G3309 merimnao. The conclusion (careful means anxious) stays correct.
- SKILL.md:76 quotes 1 Corinthians 12:23 under the reference 12:22.
- SKILL.md:71 says that the failure of a parathyroid gland kills. A person has four. The loss of one is covered by the others. Write "Four glands, each about the size of a grain of rice. Loss of all of them kills."
- SKILL.md:72 and body-systems.md:106 say that one blocked capillary kills the tissue it feeds. Capillaries form a connected mesh. Tissue death needs a blocked arteriole or a larger vessel.
- body-systems.md:355 gives pulmonary embolism as an example of downstream tissue death. The lung has a second blood supply, so lung tissue rarely dies. The danger is strain on the heart and loss of gas exchange.
- body-systems.md:576 says, with the label "Body fact", that aging appears in every multicellular body. Hydra and some other species show almost no aging.

Medium: B21 says that death is design and "not a defect", and it cites Genesis 3:19, which is part of the curse. Genesis 2:17 and Romans 5:12 tie death to sin. B13 says that cash that does not move is a clot, but Proverbs 21:20 commends a stored reserve, and axiom A31 commends one too. SKILL.md:18 applies 1 Corinthians 12 to companies with no note that the passage is about the church. M7 says the body optimizes only for the next meal, with the label "Body fact". Fat and glycogen are stores for the future. B16 says "several" fatty acids are essential. Only two are.

### business-idea-generation

High:

- The five renumbered block quotes (see the table above).
- reading-the-times.md:264 says the declaration names "gates, bars, and treasures". That wording is Isaiah 45:1-3. Isaiah 42:9 and 43:19, the verses the file quotes, do not have it.
- reading-the-times.md:120 says the H3045 gloss list includes "look well to". It does not.
- SKILL.md:225 has "Egypt, that the land". Genesis 41:36 reads "Egypt; that the land".

Medium: SKILL.md:307 and opportunity-method.md:285 say "thou knowest not" occurs three times in Ecclesiastes 11. It occurs four times. SKILL.md:137 applies John 4:35 to markets. It does not note that verse 36 makes the harvest one of souls, and it does not label the reading as an analogy. SKILL.md:258 describes the Genesis 47 exchange as an opportunity and leaves out that the people sold themselves as servants (47:19, 47:25). opportunity-method.md:443 uses "20 kilometre radius". Use US units: a 12-mile radius.

### problem-solving-first-principles

High:

- SKILL.md:32-58 is the center of the skill, and it misreads Genesis 3. Verse 3:11 asks "Who told thee" and "Hast thou eaten" together. The table puts the act question at 3:13. It also misquotes 3:13, which reads "What is this that thou hast done?". Keep the where, source, act order, but label it as an inference.
- SKILL.md:278 says "broken down" in Proverbs 24:31 is H6555 parats. The verb is H2040 haras. The "Note on the tools" blames the tool for a correct result. Delete the note.
- SKILL.md:87 says Pharaoh saw "a single famine in a dream". He had two dreams, and each showed plenty and then famine.
- SKILL.md:95 says "Verse 41:26 says so twice". "The dream is one" occurs once in 41:25 and once in 41:26. The same paragraph says "Three features" and lists four.
- crisis.md:64 says the first moves in Acts 27 remove weight and navigation gear. The first moves (27:16-17) secure the boat and undergird the ship, which adds support.
- crisis.md:178 gives H4929 as mishmereth. H4929 is mishmar. SKILL.md:385 spells G1128 as "gymnaso". The word is gymnazo.

Medium: SKILL.md:318 says that both houses in Matthew 7 use G4363. Verse 27 uses G4350. crisis.md:212 says the debate over the warning must wait until after the crisis, but Paul raises it in the middle of the storm (Acts 27:21). SKILL.md:423 says the crisis response saved them. The text credits God's promise (27:24). SKILL.md:353 says the 2 Chronicles 20 promise was to the king alone. Verse 15 addresses all Judah. diagnosis.md:56 calls B10 a business axiom. It is a body axiom.

### first-principles-reasoning

No high findings. Every quote and every Strong's definition is correct.

Medium: epistemic-limits.md:87 says God invites the asking "earlier in the book". God first speaks to Job in chapter 38. SKILL.md:311 says the text names "imaginations" rather than opinions, but logismos means reasonings. Three inferences carry the label "Text states" (SKILL.md:300, 329, and others). method.md:209 calls a restatement of the source data a prediction, which breaks the skill's own ladder rule.

### technology-selection

High:

- SKILL.md:620 says "Five criteria" and lists six. decision-framework.md:86 says six.
- SKILL.md:398 says Haggai 1:6 has six symptoms. It has five: sowing, eating, drinking, clothing, and wages.

Medium: SKILL.md:540 says that the text shows that one generalist cannot carry a system. Exodus 31:3-5 gives Bezaleel "all manner of workmanship", so the text does not say this. total-cost.md:191 reads the field of the slothful against axiom A17. total-cost.md:101 lists the wrong item numbers for costs on an external schedule. The correct items are 2, 5, 6, 7, and 12. The accounting items are in the table above.

## Simple English compliance

These counts leave out KJV quotes, lexicon text, and code.

| File | Em-dashes | Semicolons | should, may, might, could, would | Bold markers | British spellings |
|---|---|---|---|---|---|
| business-first-principles/references/axioms.md | 445 | 229 | 75 | 1,412 | about 90 |
| renewing-the-mind/references/thought-patterns.md | 374 | 220 | 23 | 884 | about 40 |
| business-first-principles/references/org-and-labour.md | 107 | 140 | 59 | about 839 | about 108 |
| business-first-principles/references/trends-and-timing.md | 100 | 126 | 42 | about 828 | about 32 |
| business-first-principles/references/ethics.md | 117 | 136 | 40 | about 405 | about 61 |
| business-first-principles/references/capital-and-stewardship.md | 127 | 165 | 53 | about 315 | about 26 |
| scripture-foundations/references/original-language.md | 196 | 71 | 2 | 155 | some |
| scripture-foundations/references/kjv-1611.md | 130 | 41 | 1 | 178 | some |
| renewing-the-mind/references/institutions.md | 106 | 78 | 23 | 314 | about 25 |
| business-first-principles/SKILL.md | 78 | 20 | 8 | 106 | about 8 |
| scripture-foundations/SKILL.md | 39 | 37 | 2 | 50 | some |
| canon-survey.md | 30 | 37 | 3 | 160 | about 8 |
| All other files | 0 to 5 | 0 to 4 | 0 to 3 | 27 to 344 | 1 to 16 |

Some semicolon and modal counts include inline KJV quotes, so they are a little high.

Five problems repeat in every skill:

1. Bold lead-ins. Every axiom, observation, and label starts with bold, for example `**Text states:**` and `**B1.**`. Use plain labels such as `Text states:`.
2. British spelling. The files use labour, behaviour, organisation, judgement, licence, defence, centre, and honour. Some files also use both "judgment" and "judgement", which breaks the one-word-one-meaning rule. Keep the British forms only inside KJV quotes.
3. Long sentences. Each reference file has dozens of sentences over 25 words, many with an em-dash and a semicolon.
4. Words with two meanings. "Pattern" has three meanings in first-principles-reasoning and technology-selection. "Channel" has two meanings in business-idea-generation.
5. Changed quotes. The plain-English rules do not apply inside a KJV quote. renewing-the-mind and body-first-principles changed KJV punctuation and dropped words, probably to remove semicolons. Restore the exact text.

The files closest to compliance are `scripture-foundations/references/genesis-1-3.md`, `chapter-map.md`, and `renewing-the-mind/SKILL.md`. The files furthest away are the six reference files in business-first-principles. Together they hold about 116,000 words, close to half the repository.

## Recommended order of work

1. Fix the 24 renumbered block quotes and the misquotes in running prose. These are errors in Scripture.
2. Fix the wrong Strong's numbers and the wrong counts.
3. Fix the false statements about the body, the "talent" and "charity" dating, the tier ratios, and the Joseph and Acts 27 readings.
4. Fix the cross-skill problems: the `skills/` paths, the false logs, the wrong skill names, and the missing `package.json` commands.
5. Rewrite ancient-secret-wealth-principle to follow the family rules.
6. Do one pass for the "Text states" labels.
7. Fix the accounting language.
8. Convert each file to Simple English. Start with the SKILL.md files, because the model loads them first.

A script can run steps 1 and 2 again after the fixes. Compare each `>` block quote and each inline quote with the output of `scripture.py lookup`.
