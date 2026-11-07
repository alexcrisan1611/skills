# Bible review of the skills

Date: October 23, 2026. Scope: the 10 skills in this repository, all Markdown files. Nothing was edited.

Status: on October 23, 2026, every finding in this report was fixed in the working tree, and none was skipped. The line numbers below refer to commit `73b95e4`, before the fixes.

## How the review was done

Seven reviewers read every line of the Scripture-based skills. A lead reviewer read `ancient-secret-wealth-principle` and `self-grill`. The reviewers checked each claim against the local KJV with `scripture-foundations/scripts/scripture.py` and each Strong's entry with `scripts/lexicon.py`. The lead reviewer then checked the file text and the KJV text for every High finding.

The earlier audit (October 6, 2026) checked wording, verse numbers, counts, and Strong's numbers. This review asks a different question: does each skill teach what the Bible teaches, read in its context and against the rest of Scripture?

Severity:

- High: the file contradicts what the text says, or it gives a role that Scripture gives to God or to Christ to a person or a technique.
- Medium: the file goes past the text, leaves out context that changes the meaning, presents one side of a contested matter as the text, or contradicts itself or another skill.
- Low: a small error.

## Summary

The KJV wording is now very good. The reviewers compared more than 1,000 block quotes and inline quotes, and every one matches the KJV. The Strong's entries match the tools. The earlier audit's fixes held, with a few exceptions listed below.

The problems are now in meaning. The same few patterns repeat in almost every skill, and they all go in one direction: the work of God becomes a human technique, and a text about the kingdom becomes a text about business.

| Skill | High | Medium | Low |
|---|---|---|---|
| scripture-foundations | 3 | 11 | 9 |
| business-first-principles: SKILL.md, axioms.md, canon-survey.md | 7 | 13 | 8 |
| business-first-principles: capital-and-stewardship.md, ethics.md | 4 | 14 | 4 |
| business-first-principles: org-and-labor.md, trends-and-timing.md | 4 | 19 | 4 |
| renewing-the-mind | 1 | 10 | 3 |
| body-first-principles | 1 | 5 | 4 |
| first-principles-reasoning | 1 | 6 | 2 |
| business-idea-generation | 1 | 9 | 3 |
| problem-solving-first-principles | 1 | 5 | 4 |
| technology-selection | 1 | 4 | 3 |
| ancient-secret-wealth-principle | 1 | 6 | 2 |
| self-grill | 0 | 0 | 0 |
| Total | 25 | 102 | 46 |

`self-grill` quotes no Scripture and makes no biblical claim, so there is nothing to test.

## The ten patterns

Fix these patterns first. Each one causes findings in several skills.

### 1. God is removed as the one who acts

The texts credit God, and the files credit human skill or method.

- `renewing-the-mind/SKILL.md` never names the Holy Spirit, grace, Christ, faith, or prayer. The only spirits in the file are the unclean spirits of Matthew 12. Titus 3:5: "the washing of regeneration, and renewing of the Holy Ghost." Every New Testament "renewed" is passive (2 Corinthians 4:16, Ephesians 4:23, Colossians 3:10).
- Joseph "reads" the dream (`problem-solving-first-principles/SKILL.md:98, 132`), and the cycle "can be read in advance" (`trends-and-timing.md:298`). Genesis 41:16: "It is not in me: God shall give Pharaoh an answer of peace." 41:25: "God hath shewed Pharaoh what he is about to do."
- Paul's message in Acts 27 is "the forecast" (`crisis.md:92-98`). Acts 27:23-25: "the angel of God... I believe God."
- Haggai 1 is a "leaking system" (`technology-selection/SKILL.md:403, 417`). Haggai 1:9: "I did blow upon it. Why? saith the LORD of hosts. Because of mine house that is waste."
- David's confidence rests on "prior work" (`business-idea-generation/SKILL.md:567-590`). 1 Samuel 17:37: "The LORD that delivered me... he will deliver me."
- The Issachar men's understanding is "a function, not a gift" (`business-idea-generation/SKILL.md:65-68`, `trends-and-timing.md:95`). 1 Chronicles 12:23 says they came "according to the word of the LORD."
- `canon-survey.md` removes God from the verses again and again. "A new heart also will I give you" (Ezekiel 36:26) becomes "change the culture." "God meant it unto good" (Genesis 50:20) becomes "Turn opposition to good." "Glorify your Father" (Matthew 5:16) becomes marketing.
- The firstfruits go to the business: "Take margin, generosity, and investment off the top" (`canon-survey.md:127`). Proverbs 3:9: "Honour the LORD with thy substance, and with the firstfruits of all thine increase."

### 2. Christ is at the edge of the foundation, not at its center

- The "core of the set" in `scripture-foundations/SKILL.md:213` is Genesis 1-3 and 1 Corinthians 13. Christ and the cross are not in it. 1 Corinthians 3:11: "other foundation can no man lay than that is laid, which is Jesus Christ." 1 Corinthians 15:3 puts the cross "first of all."
- The "first principles" of Hebrews 5:12 are "the principles of the doctrine of Christ" (6:1). The writer calls them "milk" (5:12-13) and tells the reader to leave them and "go on unto perfection." The skills link them to a reasoning method by a shared English phrase. That is the false-friend error that Rule two warns about. `first-principles-reasoning/SKILL.md:66-92` also lines them up with Aristotle's _archai_ and does not quote Colossians 2:8 ("the rudiments of the world, and not after Christ").
- "Every business needs one defining value proposition, a cornerstone" (`canon-survey.md:47`). The verses it cites name the cornerstone: "Jesus Christ himself being the chief corner stone" (Ephesians 2:20).
- Axiom A31 (`business-first-principles/SKILL.md:285-291`) uses Genesis 3:21 and the atonement texts to support a cash reserve policy. The file's own observation is that God made the covering, and the fig-leaf aprons that the man made did not last. A cash reserve is your own covering.
- 1 Corinthians 15:58 ("your labour is not in vain in the Lord") becomes "the compounding payoff arrives late" (`canon-survey.md:60`). The "Therefore" rests on the resurrection.
- The body skills give the role of Christ as head to management (`body-first-principles/SKILL.md:101-125`). The Ephesians 4:15-16 citation drops "which is the head, even Christ." 1 Corinthians 12:18: "But now hath God set the members."

### 3. Parables of the kingdom become business doctrine

- The talents. "That fact decides the point of the parable" (`capital-and-stewardship.md:126`), and "idle capital is a moral failure" (line 188). `kjv-1611.md:270-272` says that ability-based stewardship "quietly changes the subject," and `chapter-map.md:502` labels "the parable is about capital" as "Lexical." The parable opens with "Watch therefore, for ye know neither the day nor the hour" (Matthew 25:13) and ends in "outer darkness" (25:30). Talanton is money, and that is the image. The point is faithfulness until the Lord returns. Scripture also says that abilities are received and must be stewarded: "what hast thou that thou didst not receive?" (1 Corinthians 4:7), "As every man hath received the gift" (1 Peter 4:10).
- The pounds. "'Occupy till I come' is a business instruction" (`kjv-1611.md:112`). Luke 19:11 says Jesus told the parable "because they thought that the kingdom of God should immediately appear."
- The rich fool becomes a lesson in succession planning (`capital-and-stewardship.md:1129-1147`) and in opportunity cost (`business-first-principles/SKILL.md:283`). Jesus gives the verdict himself: "beware of covetousness" (Luke 12:15) and "not rich toward God" (12:21).
- The sower. The thorns become "the bundle of the incumbent" (`trends-and-timing.md:719-728`). Jesus explains the thorns in the same chapter: "the care of this world, and the deceitfulness of riches, choke the word" (Matthew 13:22).
- The stone of Daniel 2 becomes a disruptor "from outside the category" (`trends-and-timing.md:577`, `reading-the-times.md:190`). Daniel 2:44: "shall the God of heaven set up a kingdom, which shall never be destroyed."

### 4. The texts on wealth are read selectively

The texts that warn against seeking and storing wealth are mostly missing: Matthew 6:19-24, Luke 12:15 and 33, Proverbs 23:4-5, Proverbs 28:20 and 22, 1 Timothy 6:9-10, James 5:1-6, Isaiah 5:8.

- 1 Timothy 6:19 is read as "the text permits accumulation" (`capital-and-stewardship.md:1301`). Verse 18 builds the store by giving: "ready to distribute, willing to communicate." The store is laid up "that they may lay hold on eternal life."
- Direct giving is called "dependence," and Working Rule 6 says "You do not distribute" (`ethics.md:175, 1300`). Deuteronomy 15:10: "Thou shalt surely give him." Isaiah 58:7: "deal thy bread to the hungry." Acts 4:35: "distribution was made unto every man according as he had need."
- Lenders should "price that release" of the seventh year (`capital-and-stewardship.md:591`). Deuteronomy 15:9 calls that very calculation sin: "Beware that there be not a thought in thy wicked heart, saying, The seventh year... is at hand."
- Concentration of land is "not a moral failure of the participants" (`capital-and-stewardship.md:930`). Isaiah 5:8: "Woe unto them that join house to house, that lay field to field."
- Usury is presented from one side only (`capital-and-stewardship.md:510-516`). Psalm 15:5, Ezekiel 18:13, and Luke 6:35 are not cited, and the commercial-interest conclusion is not labeled "Contested."
- `ancient-secret-wealth-principle` has no warning about seeking wealth at all (see that skill below).

### 5. The pattern of the first temptation becomes a sales method

Axiom A24 (`business-first-principles/SKILL.md:229-233`), the demand test in `business-idea-generation/SKILL.md:600-623`, and the buyer psychology in `ancient-secret-wealth-principle` all build a sales test on Genesis 3:6. In this test, if you leave "status" open, "you lose to whoever offers standing." The status channel is the serpent's promise, "ye shall be as gods" (3:5), and 1 John 2:16 says "the pride of life, is not of the Father." `axioms.md:1375` calls channels (b) and (c) bad reasons for your own decisions, and then tells you to use them on buyers. `business-idea-generation` labels the test "description only" but puts it in the output format.

This also contradicts `renewing-the-mind/references/institutions.md` T4, which treats an appeal to "hunger, attraction, and status" as a distortion to resist.

Genesis 2:9 ("pleasant to the sight, and good for food") shows that appetite and beauty are goods that God made. Keep those, and turn the test into an ethics check.

### 6. Death, the curse, and the conflict are called "design" or "permanent"

- B21: "aging is built into the design of the human body, and it is not a defect" (`body-first-principles/SKILL.md:270`; also `body-systems.md:575` and `where-the-body-misleads.md:401`). The file labels the text "Contested." But Romans 5:12 says "death by sin," and 1 Corinthians 15:26 says "The last enemy that shall be destroyed is death." Faithful readers differ on a narrower point: was Adam naturally immortal, or kept alive by the tree of life (Genesis 3:22)? This claim also contradicts the same skill's "The body is a fallen system" (`SKILL.md:313`).
- "Resistance is permanent" and "Conflict is not a phase" (`genesis-1-3.md:730, 741`). "Permanent adversary" (`business-first-principles/SKILL.md:307`). "The curse names a condition that does not end" (`body-systems.md:272`). Also `problem-solving-first-principles/SKILL.md:142`. Genesis 3:17 limits it to "all the days of thy life." Revelation 22:3: "there shall be no more curse." Romans 16:20: "the God of peace shall bruise Satan under your feet shortly."

### 7. Creation is described in a way the text does not support

- "Nothing explains where the raw material came from. The text treats both as given" (`genesis-1-3.md:73-75`). Creation out of nothing is called "a later theological inference" (`original-language.md:68`). Hebrews 11:3: "things which are seen were not made of things which do appear." John 1:3: "without him was not any thing made that was made." The lexical caution is fair, because _bara_ alone does not prove creation out of nothing. But the doctrine is in the canon. It was not added later.
- "Nothing justifies the act, because nothing comes before it" (`first-principles-reasoning/SKILL.md:59-60`). Psalm 90:2: "even from everlasting to everlasting, thou art God." Revelation 4:11: "for thy pleasure they are and were created."
- "Disorder is the resting state of everything" (`business-first-principles/SKILL.md:41`) and decay is "the baseline" from Genesis 1:2 (`technology-selection/SKILL.md:348`). The unformed earth of 1:2 is unfinished, not corrupt. Romans 8:21 ties "the bondage of corruption" to the fall.

### 8. Moral judgment is replaced by timing, mechanism, or system

- "'Is this good?' is the wrong question. The right question is 'is this its time?'" (`trends-and-timing.md:182, 190`). `business-first-principles/SKILL.md:283` says the same. Ecclesiastes 12:14: "God shall bring every work into judgment... whether it be good, or whether it be evil."
- The unequal yoke "is not about purity... The damage is mechanical, not moral" (`ethics.md:447-452`). 2 Corinthians 6:14: "what fellowship hath righteousness with unrighteousness?"
- "Blame is not a finding" (`problem-solving-first-principles/SKILL.md:22`). In Genesis 3, God holds each person to account for their own act (3:14, 3:17). Adam is the one who points to the system: "The woman whom thou gavest to be with me" (3:12).
- "Eyeservice is a structural problem, not a flaw of character" (`org-and-labor.md:955`). Ephesians 6:6: "doing the will of God from the heart."
- The sluggard's failure is "not laziness" (`org-and-labor.md:974`). Proverbs 6:9: "How long wilt thou sleep, O sluggard?"

### 9. Contested matters are presented as settled

Rule one says: "Where faithful readers differ, show the range." These places present one side as the text:

- The roles of man and woman. "Not a subordinate assistant" (`scripture-foundations/SKILL.md:67`), "corresponding strength," and "Text states: The remedy is not a subordinate" (`axioms.md:1074, 1619`). Neither file cites 1 Corinthians 11:9 or 1 Timothy 2:13. Meanwhile, `genesis-1-3.md:196-201` leans the other way.
- The creation days and the Sabbath (`genesis-1-3.md:459, 833`, `axioms.md:831-895`). Exodus 20:11, Exodus 31:17, Romans 14:5, and Colossians 2:16-17 are not cited.
- The soul as separable from the body is called "Greek influence" (`original-language.md:241`). Matthew 10:28 and 2 Corinthians 5:8 are not cited.
- "The least of these my brethren" is read as everyone in need (`ethics.md:871`, `where-the-body-misleads.md:106`). Matthew 12:49 points "toward his disciples."
- 1 Thessalonians 4:6 is read as commercial fraud (`ethics.md:1144`). Verses 3 and 7 are about sexual purity.
- Ecclesiastes 11:1-2 is read only as a portfolio of bets (`capital-and-stewardship.md:962`, `business-idea-generation/SKILL.md:296`). Many readers take it as being about generosity.
- Continuing prophetic gifts (`trends-and-timing.md:95, 683`).

### 10. Rule one is broken in the labels

Many inferences still carry the label "Text states." There are about 30 cases. Examples are `axioms.md:347, 537, 1018, 1074, 1315, 1573, 1619, 1785`, `technology-selection/SKILL.md:68, 403`, and `business-idea-generation/SKILL.md:94, 210`. `technology-selection/SKILL.md:650-662` has a column named "Violates" that lists 2 Samuel 24:24 and Genesis 11. The same file calls both of these analogies. "Contested" is used where no faithful reader disputes the text (B21, and the Genesis 3:6 test).

## Contradictions between skills and inside skills

| Claim | Where | Contradicted by |
|---|---|---|
| Joseph reads the cycle | `problem-solving-first-principles/SKILL.md:98, 132` | `business-idea-generation/SKILL.md:274`: "Joseph did not detect the cycle. God disclosed it." |
| Isaiah 28:16 grounds the gating of decisions you cannot reverse | `technology-selection/SKILL.md:198-218` | `opportunity-method.md:590`: "The verse does not ground A32". `canon-survey.md:170`: "Analogy, not command" |
| Status is a sales lever | `axioms.md` A24, `business-idea-generation/SKILL.md:600` | `renewing-the-mind/references/institutions.md` T4: a distortion to resist |
| Aging is design, "not a defect" | `body-first-principles/SKILL.md:270` | Same file, line 313: "The body is a fallen system" |
| God asks the act question at Genesis 3:13 | `diagnosis.md:131-132, 163` | `problem-solving-first-principles/SKILL.md:39-56`: both questions are in 3:11 |
| "God calls the work of each day good" | `business-first-principles/SKILL.md:109`, `axioms.md:538` | Genesis 1:6-8 (day 2 has no verdict). `scripture-foundations` already fixed this |
| In 1611 "charity" meant love, "not almsgiving" | `renewing-the-mind/references/thought-patterns.md:799, 874` | The earlier audit's fix in `scripture-foundations`: the alms sense existed before 1611 |
| Building and keeping are "the same duty" | `axioms.md:1854` | A17: "two separate words" |
| The reward is "authority, not money" | `capital-and-stewardship.md:199` | Same file, line 1245: stewardship is "an audition for capital of his own" |
| Micah 6:8 is "the whole requirement, not a summary" | `ethics.md:98` | Same file, line 139: "The test is a summary" |
| A14: "You cannot rest from an unfinished thing" | `axioms.md:831` | A15: rest "does not depend on anything" (line 877) |
| Keeping options open is the failure (A21) | `axioms.md` | `canon-survey.md:129`: "Make parallel bets" |
| The wealth skill uses Rule one and the KJV script | `ancient-secret-wealth-principle/SKILL.md`, `README.md` | `scripture-foundations/SKILL.md:26`, `README.md:15`: it "does not build on this layer" |

## Findings by skill

Each finding gives the place, the problem, and the fix. The quotes of Scripture are from the local KJV.

### ancient-secret-wealth-principle

High

1. `SKILL.md` as a whole. The purpose of the skill is to move the user toward more income, with "No fixed ceiling" at Level 4. The skill says "Scripture governs," but it never cites the texts that govern the desire for wealth. Proverbs 23:4: "Labour not to be rich: cease from thine own wisdom." 1 Timothy 6:9: "But they that will be rich fall into temptation and a snare." Proverbs 28:20: "he that maketh haste to be rich shall not be innocent." Luke 12:15: "a man's life consisteth not in the abundance of the things which he possesseth." Hebrews 13:5: "be content with such things as ye have." Fix: add a section, "What Scripture says about seeking wealth," and make step 1 ask why the user wants more reach.

Medium

2. `SKILL.md`, "Definition of wealth." Golden defines wealth as "your ability to create value." Deuteronomy 8:17-18: "My power and the might of mine hand hath gotten me this wealth. But thou shalt remember the LORD thy God: for it is he that giveth thee power to get wealth." Scripture also names a different kind of riches: "rich toward God" (Luke 12:21) and "rich in good works" (1 Timothy 6:18). Fix: quote Deuteronomy 8:17-18 next to the definition.
3. Level 4, "Imagination," is the highest level. In the KJV, "imagination" and "imagine" occur in 36 verses, and almost all are evil: "every imagination of the thoughts of his heart was only evil continually" (Genesis 6:5), "the imagination of man's heart is evil from his youth" (Genesis 8:21), "became vain in their imaginations" (Romans 1:21), "Casting down imaginations" (2 Corinthians 10:5). The clearest case is Babel. Genesis 11:6 has one people (Unification), one language (Communication), and "nothing will be restrained from them, which they have imagined to do" (Imagination), with the motive "let us make us a name" (11:4). God scattered them. Fix: name Babel as the warning. Put Level 4 under Proverbs 16:9 ("A man's heart deviseth his way: but the LORD directeth his steps") and James 4:13-15. Bezaleel, "filled... with the spirit of God... To devise cunning works" (Exodus 31:3-4), is the positive model.
4. The creation-order "mirror." Golden's order is "the image or idea, the spoken word, the unified purpose, and the physical forming." The skill already says the text states no value ranking. It also does not state this order. Genesis 1:1 says "God created" before 1:3 says "God said." The "image" of Genesis 1:26-27 (H6754 _tselem_, "resemblance... a representative figure") is man made in God's image. It is not God's mental picture of a plan. Reading "imagination" into "image" is the false-friend error that Rule two forbids. Fix: say that the text does not give this order.
5. Proverbs 14:23. The skill quotes "the talk of the lips tendeth only to penury" and calls it "a tension." Then the income table puts words (Level 3) far above labor. The tension is named but not resolved. Fix: say that the verse contrasts labor with empty talk. Selling, writing, and speaking are labor only when they deliver the value they promise.
6. The buyer psychology has no ethical guard. "Past voids" prices the offer by the size of the buyer's pain. "Present virtues" includes "high status." "Future visions" asks what the offer "promise[s]." Luke 16:15: "that which is highly esteemed among men is abomination in the sight of God." Proverbs 25:14: "Whoso boasteth himself of a false gift is like clouds and wind without rain." 2 Peter 2:3: "with feigned words make merchandise of you." Fix: point to `business-first-principles/references/ethics.md` Part 2 (Leviticus 19:14, the stumblingblock before the blind), Part 3, and Part 7, and add the check "Is every promise true?"
7. Step 4, "Address any resistance to selling," and the "trap of trading time for money." The resistance can be conscience, and Rule one forbids "the overriding of the conscience of another person." Romans 14:23: "whatsoever is not of faith is sin." Scripture also commends hands-on work as a good end, not a trap: "work with your own hands" (1 Thessalonians 4:11), "labour, working with his hands the thing which is good, that he may have to give to him that needeth" (Ephesians 4:28), "thou shalt eat the labour of thine hands: happy shalt thou be" (Psalm 128:2). Jesus was "the carpenter" (Mark 6:3), and Paul was a tentmaker (Acts 18:3). Fix: first ask whether the resistance is about the truth or the worth of the offer. Allow "stay at Level 1 and be content" as a valid answer.

Low

8. The name "Ancient Secret." Scripture presents what God reveals as open, not secret: "those things which are revealed belong unto us" (Deuteronomy 29:29), "I have not spoken in secret" (Isaiah 45:19), "in secret have I said nothing" (John 18:20). Fix: say that the name is Golden's title, not a hidden biblical principle.
9. Cross-skill: see the last row of the contradictions table.

### scripture-foundations

High

1. `genesis-1-3.md:73-75`, `original-language.md:68`: creation out of nothing is undercut (pattern 7). Fix: "The material comes from God's creating act (1:1). Hebrews 11:3 and John 1:3 teach that all things were made by his word."
2. `kjv-1611.md:270-272, 112`; `SKILL.md:70, 202`; `chapter-map.md:498, 502-504`: the talents and the pounds (pattern 3). Fix: relabel "Lexical" as "Inference." Quote Matthew 25:13 and Luke 19:11. Remove "a resource that was never his," because 1 Corinthians 4:7 says that abilities are received.
3. `chapter-map.md:233`: Psalm 110 "is quoted in three New Testament books." It is five (Matthew 22:44, Mark 12:36, Luke 20:42, Acts 2:34, Hebrews 1:13). The earlier audit found this, and it is still not fixed.

Medium

4. `genesis-1-3.md:730-731, 741-742`: "Resistance is permanent," "Conflict is not a phase" (pattern 6). It also contradicts the file's own table at line 754, which calls the head wound "a killing blow."
5. `SKILL.md:44, 175, 213, 234`; `chapter-map.md:352-356`: Christ is outside the core set and the definition of a foundation (pattern 2). `SKILL.md:61` also drops "especially reliance upon Christ for salvation" from the G4102 definition. Fix: put Christ in the core set. Change line 44 to "A reading that you cannot question..."
6. `SKILL.md:67` against `genesis-1-3.md:196-201, 712-713`: the roles of man and woman (pattern 9). Fix: one "Contested:" note that covers the complementarian and egalitarian readings.
7. `SKILL.md:62-63`, `genesis-1-3.md:353-354`: the meaning of _radah_ is built on the root. "To force into service" is not in Strong's. In use, Leviticus 25:43 needs the added word "with rigour" to make it harsh, and 1 Kings 4:24 uses it of Solomon, who "had peace on all sides." This breaks `SKILL.md:97` ("Etymology is not meaning"). Fix: follow `original-language.md:186`, which is balanced.
8. `original-language.md:230, 493`, `genesis-1-3.md:98-99`: the gloss list is read as meaning ("the dictionary says so"). This breaks the file's own rule at line 718.
9. `original-language.md:241`: the soul (pattern 9).
10. `kjv-1611.md:248`: "the gift itself is worth nothing." 1 Corinthians 13:3: "it profiteth me nothing." The poor are still fed.
11. `kjv-1611.md:142, 196`: Matthew 18 is "a parable about a ratio... The ratio is the point." 18:35 states the point: "if ye from your hearts forgive not every one his brother."
12. `original-language.md:685`: grace is "an unearned grant that creates obligation" that "goes both ways." Romans 11:6: "otherwise grace is no more grace."
13. `genesis-1-3.md:833-836, 459-460`: the creation days and the Sabbath (pattern 9).
14. `genesis-1-3.md:365, 311, 126, 188, 507`: inferences labeled "Text states." Leviticus 25:23 is Israel's land law. Psalm 24:1 makes the general point.

Low: the serpent is identified with Satan elsewhere than "the last book" (John 8:44, 2 Corinthians 11:3, Romans 16:20) (`genesis-1-3.md:586`). "The curse on work" conflicts with "the ground is cursed, not the man" (`original-language.md:393`). The living are "caught up" (1 Thessalonians 4:17), not "not raised" (`kjv-1611.md:238`). The Acts 17 summary leaves out the resurrection, 17:31 (`chapter-map.md:275`). "Slow to anger" is not the KJV wording of Exodus 34:6, which has "longsuffering," and 34:7 is left out (`SKILL.md:185`). Deuteronomy 8:18 is cut before "that he may establish his covenant" (`chapter-map.md:493`, `axioms.md:129`). Two quotes are each tied to two verses but match only one (`chapter-map.md:102-103`). _Arum_ is called "ambivalent," against two other files (`original-language.md:365`). "Good parts can make one bad product" runs against 1:31 (`genesis-1-3.md:432`).

### business-first-principles: SKILL.md, axioms.md, canon-survey.md

High

1. `canon-survey.md:47`: a value proposition as the cornerstone (pattern 2).
2. `canon-survey.md:127`: the firstfruits go to the business (pattern 1).
3. `SKILL.md:233`, `axioms.md:1374-1376`: A24, temptation as a sales method (pattern 5). `SKILL.md` also lacks the "not a license to manipulate" caveat that `axioms.md` has.
4. `axioms.md:1315`: "Text states: Both levers are false." Genesis 3:7: "the eyes of them both were opened." 3:22: "the man is become as one of us, to know good and evil." The lie was a half-truth, and `canon-survey.md:84` says so. Fix: "Inference: the promise came true in a form that brought ruin."
5. `SKILL.md:285-291`, `axioms.md:1723-1770`, `canon-survey.md:20`: A31, the atonement texts used for cash reserves (pattern 2). Fix: keep Genesis 3:21 as grace. Ground reserves in Proverbs 21:20 or Genesis 41.
6. `SKILL.md:109`, `axioms.md:538`: "God calls the work of each day good." Day 2 has no verdict.
7. `canon-survey.md:60`: 1 Corinthians 15:58 as a compounding payoff (pattern 2).

Medium

8. `canon-survey.md:57, 72, 73, 107, 118, 139-142, 148`: God is removed as the one who acts or the reason for acting (pattern 1). This list also includes Isaiah 40:31 without "upon the LORD," and Micah 6:8 without "walk humbly with thy God."
9. `canon-survey.md:50`: Hebrews 11:10 is read as "have a clear picture of the end state." 11:8: "he went out, not knowing whither he went."
10. `SKILL.md:135`, `axioms.md:777-795`: A13. 1 Corinthians 9 and 1 Timothy 5:18 are about those who preach and the elders. In the same chapter Paul gives up the right: "we have not used this power" (9:12). So "violation" for unpaid founder work condemns Paul. Matthew 6:33 and Philippians 4:19 are presented as promises of business provision.
11. `axioms.md:633, 641`: A11, "Multiplication is commanded," and a firm that does not grow is "incomplete in its design." Genesis 1:28 is a blessing on humans. Luke 12:15-18 counts against a duty to grow.
12. `axioms.md:716`, `SKILL.md:273`: A12 and A29. Dominion in Genesis 1:26 is over animals and the earth, not people. A29 says that rule over a person first appears after the fall.
13. `SKILL.md:179`, `axioms.md:1074, 1619`: the roles of man and woman (pattern 9).
14. `axioms.md:1573-1588`: A28, "Text states... The output increases," is a contested reading of Genesis 3:16. "The curse does not describe pain at other points" is false. 3:17: "in sorrow shalt thou eat of it all the days of thy life."
15. `SKILL.md:283`, `axioms.md:1696`: A30 and the rich fool (pattern 3). The file also does not reconcile the fool's barns with its own A31 advice.
16. `SKILL.md:307, 309`, `axioms.md:1853, 1893`: "permanent adversary," and "Trust, once lost, is a closed way" (pattern 6). Hebrews 10:20: "a new and living way."
17. `axioms.md:831, 877, 895`, `canon-survey.md:139`: the Sabbath (patterns 9 and contradictions). The fallow year of Exodus 23:11 is "that the poor of thy people may eat," not the firm's spare capacity.
18. A21 against `canon-survey.md:129` (see the contradictions table). A21 also borrows Luke 9:62 ("fit for the kingdom of God") as a model of commitment to a venture.
19. `SKILL.md:12`: Genesis 1-3 is "the first venture," with "a failure, and a recovery." This makes the fall look like God's project failing. `SKILL.md` never mentions Christ, grace, or love, and the keystone rule is missing from the procedure.
20. `SKILL.md:41`, `axioms.md:180`: A2, "Disorder is the resting state" (pattern 7).

Low: "the same duty" against A17 (`axioms.md:1854`). The Spirit of God is called "Something" (`SKILL.md:49`, `axioms.md:247`). "The account describes no other input," but God "made," "created," and "formed" (`axioms.md:305`). The sense of _moed_ is taken from the root (`axioms.md:481-503`). "What failed is the shamar," but the slothful man's field was also "all grown over with thorns," so both duties failed (`axioms.md:1018`). Acts 16 credits the Holy Ghost and a vision, not "the attempt" (`axioms.md:1155`). Scripture "commands" the succession of culture (`canon-survey.md:58`). "Naming is an act of authority" is stated as settled, but Hagar names the LORD (Genesis 16:13) (`SKILL.md:81-87`).

### business-first-principles: capital-and-stewardship.md, ethics.md

High

1. `capital-and-stewardship.md:126, 128, 184, 188`, Working Rule 1: the talents (pattern 3). Line 184 also labels as "Text states" the claim "He requires only that the capital is not idle." Verse 27 answers the servant's own words.
2. `capital-and-stewardship.md:1301, 1312`: 1 Timothy 6:19 (pattern 4).
3. `ethics.md:175, 180`, Working Rule 6: direct giving as "dependence" (pattern 4).
4. `ethics.md:447, 451-452`: the unequal yoke (pattern 8). It also contradicts the file's own observation 2 ("defilement").

Medium

5. `capital-and-stewardship.md:510, 516`, Working Rule 15: usury (pattern 4).
6. `ethics.md:1144-1161`: 1 Thessalonians 4:6 (pattern 9).
7. `capital-and-stewardship.md:1129-1147`: the rich fool (pattern 3).
8. `capital-and-stewardship.md:930-932`, Working Rules 26-27: concentration (pattern 4).
9. `capital-and-stewardship.md:591-592`, Working Rule 17: "price that release" (pattern 4).
10. `capital-and-stewardship.md:1245, 1250`: "an audition for capital of his own." Luke 16:11 sets "the true riches" against mammon.
11. `capital-and-stewardship.md:275`: Luke's parable "assess[es] by result." Luke 19:17: "because thou hast been faithful in a very little."
12. `capital-and-stewardship.md:962, 976, 998-1004`: the return of Ecclesiastes 11 "is certain." 11:6: "thou knowest not whether shall prosper, either this or that."
13. `ethics.md:339, 366, 636`, `capital-and-stewardship.md:410`, Working Rule 18: promises to Israel in the land are treated as promises to a business (Deuteronomy 25:15, Isaiah 58:14). The file's own rule at `ethics.md:17` says to label these as analogies.
14. `ethics.md:282`, Working Rule 10: "no third option between resentment and confrontation." Proverbs 19:11: "it is his glory to pass over a transgression."
15. `ethics.md:688-694`: Micah 3:11's "reward" is called "ordinary payments... not bribes." Exodus 23:8: "thou shalt take no gift." This also contradicts the file's own rule on gifts in Part 4.
16. `ethics.md:770`, Working Rule 34: "The test is what was available to know... even if nobody read it." Proverbs 24:12 tests the heart. This contradicts observation 3 at line 763.
17. `ethics.md:871-878`: "my brethren" (pattern 9).
18. `ethics.md:98` against line 139: Micah 6:8 (contradictions table).

Low: "Text states: ... Joseph did not buy the grain," but the text is silent (`capital-and-stewardship.md:705`). In Daniel 1, Melzar consents, not "the official," and 1:9 credits God (`ethics.md:1003`). A miracle in 2 Kings 4:6 is called "an economic fact" (`capital-and-stewardship.md:1349`). 1 John 3:18 ("in deed and in truth") is missing from a claim that the verdict is "not the act" (`ethics.md:898`).

### business-first-principles: org-and-labor.md, trends-and-timing.md

High

1. `trends-and-timing.md:182, 190`, Rules 8-9: "'Is this good?' is the wrong question" (pattern 8).
2. `trends-and-timing.md:298, 314`, Rule 15, and line 208: "Cycles can be read in advance" (pattern 1). This also contradicts the file's own lines 822 and 831, and Genesis 8:22 promises seasons, not market cycles.
3. `trends-and-timing.md:711-728`: the sower (pattern 3). It also contradicts itself twice: line 711 against 719, and line 722 against 726.
4. `trends-and-timing.md:577, 580`, Rule 31: the stone (pattern 3).

Medium

5. `trends-and-timing.md:95, 113`, Rule 3: Issachar (pattern 1). 1 Chronicles 25:2 and 7 show prophecy that was organized and counted. Rule 3 rests on the root of _yada_.
6. `trends-and-timing.md:630, 683-684`: "Most business forecasting is deduction," and the track record as "the warrant." Deuteronomy 13:2-3: even if "the sign or the wonder come to pass... Thou shalt not hearken."
7. `trends-and-timing.md:381, 387`: Numbers 13-14, "The distortion was about the self." Numbers 14:11: "how long will it be ere they believe me." Hebrews 3:19: "because of unbelief."
8. `trends-and-timing.md:466`: the ground for transferring confidence is "the same capability." The file's own observation says "the same deliverer." 1 Samuel 17:47: "the battle is the LORD's."
9. `trends-and-timing.md:485-493`: Isaiah 28:16 as a rule against hurry. Romans 9:33 and 1 Peter 2:6 apply the verse to Christ.
10. `trends-and-timing.md:263`: "The randomness has no target." Proverbs 16:33: "the whole disposing thereof is of the LORD." This also contradicts line 253.
11. `trends-and-timing.md:1011, 1016`, Rule 53: "The reading took decades." Joseph read it at Genesis 45:5, in the second year of the famine (45:6).
12. `org-and-labor.md:174, 181`: "Moses does not keep... the authority to decide individual cases." Exodus 18:26: "the hard causes they brought unto Moses."
13. `org-and-labor.md:135, 137`: inferences labeled "Text states" about the selection criteria. Deuteronomy 1:13-15 is not cited.
14. `org-and-labor.md:1393`, Rule 42: "Authority used over people is forbidden." Hebrews 13:17: "Obey them that have the rule over you." Fix: "Lordship that dominates is forbidden."
15. `org-and-labor.md:1090-1103`: 1 Peter 5:2 "excludes the money motive," and the leader's job "is not commanding." The same verse says "taking the oversight thereof," and G4165 includes "rule." The verse excludes greed, not pay. The people addressed are church elders.
16. `org-and-labor.md:955`: eyeservice (pattern 8). It also applies texts written to slaves and masters to managers with no note.
17. `org-and-labor.md:828, 834`, Rule 26: "Pay during the work." Deuteronomy 24:15 and Matthew 20:8 put wages at the end of the day. Deuteronomy 24:14-15 is missing from the file.
18. `org-and-labor.md:914` against 678: the owner's "own" and "the assets were never his" (1 Chronicles 29:16).
19. `org-and-labor.md:612, 625`: David's disqualification "can concern what you are." 1 Chronicles 22:8 gives the reason: "thou hast shed much blood." Label it "Contested."
20. `org-and-labor.md:619, 627`: "The job of the founder is to turn intent into a specification." 1 Chronicles 28:19: "the LORD made me understand in writing by his hand upon me." This contradicts observation 7.
21. `org-and-labor.md:974`: the sluggard (pattern 8).
22. Both files apply the analogy label unevenly. `trends-and-timing.md:978` labels John 4:35 correctly. Acts 6 (`org:254`), 1 Corinthians 12:18 (`org:1188`), Acts 17 (`trends:947`), and Luke 12:56 (`trends:147`) have no label.
23. `trends-and-timing.md:306, 315` against `org-and-labor.md` Part 3: Joseph's sales are a "competitive advantage," while the org file condemns the same slide into bondage in Nehemiah 5. Add a "Contested:" note on Genesis 47.

Low: "accurate and not modest," against Romans 12:16 and Philippians 2:3 (`org:1221, 1386`). The narrator's silence is read as approval of Nehemiah's anger (`org:521`). The glosses of H4195 and H4270 are read against their definitions (`trends:512, 521`). There are five more "Text states" labels on inferences (`org:192, 222, 673`, `trends:18, 847`).

### renewing-the-mind

High

1. `SKILL.md:14, 40, 46, 50`, `README.md:7`: renewal is a technique with no Holy Spirit, grace, or Christ (pattern 1). Philippians 2:12-13 holds both sides: "work out your own salvation... For it is God which worketh in you." Fix: add a section "Who renews" (Titus 3:5, Ephesians 4:20-24, 2 Corinthians 3:18, Philippians 2:12-13). Make prayer part of the procedure, as in Psalm 139:23-24: "Search me, O God."

Medium

2. `SKILL.md:3, 18-20`: the skill is for anyone, but Romans 12:1 addresses "brethren, by the mercies of God," and "the natural man receiveth not the things of the Spirit of God" (1 Corinthians 2:14). In Matthew 12 the house is "empty, swept, and garnished": clean but with no occupant. Fix: branch the procedure, and point an unbeliever to the gospel first.
3. `SKILL.md:42`: 2 Corinthians 10:4 drops "mighty through God." Applying the verse to a person's own thoughts is not labeled as an inference.
4. `SKILL.md:118`, `README.md:74`, `institutions.md:337`: the claim about Proverbs 1:7 is called "firm," but `institutions.md:68-69` labels it Inference and Contested. Daniel learned "the learning and the tongue of the Chaldeans" (Daniel 1:4), and "God gave them knowledge" (1:17). The skill also defines "Contested" as empirical only, so it has no label for theological disagreement.
5. `institutions.md:324-325`: Romans 1:25 (idolatry) is applied to schools and advertising with no label, one sentence after "None of the three denies God."
6. `institutions.md:84, 114, 125, 134`: "Text states" on inferences about parents as teachers. Scripture shows teachers outside the household: "tutors and governors" (Galatians 4:2), "at the feet of Gamaliel" (Acts 22:3). "Does not delegate" contradicts lines 117 and 145.
7. `institutions.md:73-76, 97-100`: the child should "obey a reason, not a bell." Romans 13:5 and Colossians 3:20 command submission without reasons given. Exodus 34:21 sets a fixed stop on work.
8. `thought-patterns.md:773`, `SKILL.md:110`: "A person whom nothing can move on a matter holds a wisdom from below." 1 Corinthians 15:58: "be ye stedfast, unmoveable." Galatians 1:8. Division can come from truth (John 7:43).
9. `thought-patterns.md:425, 427`: "The counter is not more self-examination." 2 Corinthians 13:5: "Examine yourselves." Lamentations 3:40: "Let us search and try our ways."
10. `SKILL.md:144`: no guard separates lament and godly sorrow from errors of thought. "How long wilt thou forget me, O LORD?" (Psalm 13:1). God rebuked Job's friends: "ye have not spoken of me the thing that is right" (Job 42:7). Matching a sufferer's words to a pattern and a counter-verse is their method.
11. `institutions.md:272`: John 1:1 is used to argue that the word, not the image, is the instrument of revelation. John 1:14: "the Word was made flesh... and we beheld his glory." Colossians 1:15: "the image of the invisible God."

Low: C6 needs its cause from Psalm 78:18-22 and 42 (`thought-patterns.md:403`). B4 and B5 leave out "ready to distribute" (1 Timothy 6:18), miscount the Proverbs, and label a use of Luke 14:28 as "Text states" (`thought-patterns.md:278-291`). The appendix row for "renewing" is wrong (`thought-patterns.md:895`).

### body-first-principles

High

1. `SKILL.md:270-274`, `body-systems.md:575, 605, 731`, `where-the-body-misleads.md:380, 401`, `body-scripture-map.md:85`, `README.md:78`: B21, death as design (pattern 6). The earlier audit found this, and it is only partly fixed. `where-the-body-misleads.md:402` also settles the question by appeal to the body, which `SKILL.md:397` forbids. Fix: put finitude on the design side (Genesis 2:7, Psalm 103:14). Say "Text states:" that death entered by sin, is an enemy, and will end. Label only the Genesis 3:22 question as "Contested."

Medium

2. `SKILL.md:18-20, 101-125`, `body-systems.md:150, 194`: the headship of Christ and the placing of the members by God go to management (pattern 2). `body-scripture-map.md:199` gets this right, but `SKILL.md` does not. Fix: add a note to B5, B7, and Rule two: "In the text the head is Christ and the placer is God. A CEO is neither."
3. `body-systems.md:760-764`: 1 Corinthians 6:19-20 ("the temple of the Holy Ghost") is applied to every person in a firm. The passage is to believers. Genesis 1:27 and 9:6 hold for every person, and the file already quotes them.
4. `SKILL.md:156`, `body-systems.md:272`, `body-scripture-map.md:74`: B10, the curse "does not end" (pattern 6).
5. `SKILL.md:303`, `body-systems.md:683`: B24, breath "runs on its own." Job 12:10: "In whose hand is... the breath of all mankind." Acts 17:25: "he giveth to all life, and breath." Fix: "Runs without conscious attention, never apart from God."
6. `SKILL.md:288`, `body-scripture-map.md:300-315`: B22 uses Genesis 2:18 for redundancy ("A spare is cheaper than the failure"). The woman is a fitting counterpart, not a spare.

Low: "Every human body ages and dies," but Enoch "was translated that he should not see death" (Hebrews 11:5) and "We shall not all sleep" (1 Corinthians 15:51) (`SKILL.md:269`). The refiner's fire is in Malachi 3:2, not 3:3 (`SKILL.md:211`). H8104 has no KJV gloss "guard" (`body-systems.md:398`). "My brethren" (pattern 9) (`where-the-body-misleads.md:106`).

### first-principles-reasoning

High

1. `SKILL.md:59-60`: "Nothing justifies the act, because nothing comes before it" (pattern 7). This also contradicts lines 121-122, which quote wisdom as being "before his works of old." Fix: "The regress stops at God, who is before all things (Psalm 90:2)."

Medium

2. `epistemic-limits.md:87-89`: "the error is not the asking... He says, 'I will demand of thee, and answer thou me' (38:3)." Job 38:2: "Who is this that darkeneth counsel by words without knowledge?" The verse reverses Job's own demand at 13:22. It is a rebuke, not an invitation. The earlier audit's fix created this error.
3. `epistemic-limits.md:109` against 115-117: Isaiah 55:8 is labeled "Text states" both as "a difference in kind" and as "spatial and graded." 55:7 ties the verse to the call to repent: "let the unrighteous man [forsake] his thoughts."
4. `SKILL.md:339-342`, `epistemic-limits.md:34-38`: the effect of sin on the mind is missing. Outside quotes, none of the four files mentions sin, the fall, the Spirit, or prayer. "Having the understanding darkened" (Ephesians 4:18). "let him ask of God" (James 1:5). The output format has no slot for the thinker's condition, which `SKILL.md:341` requires.
5. `SKILL.md:66-92`: _stoicheion_ and Aristotle, with no Colossians 2:8 or Galatians 4:9 (pattern 2).
6. `SKILL.md:223-226`: "Text states: Isaiah 28:16 gives the counter" to haste in reasoning. The verse is about trust in God's stone, set against "we have made lies our refuge" (28:15).
7. `epistemic-limits.md:233-234`: "Text states" contradicts the file's own "Contested" note at lines 276-280.

Low: "complete knowledge" is labeled "Text states," but Romans 11:33 says "unsearchable" (`SKILL.md:159`, `epistemic-limits.md:165`). Deuteronomy 29:29 sorts the secret things by what God has revealed, not by whether an answer would change an action (`epistemic-limits.md:197`).

### business-idea-generation

High

1. `SKILL.md:600-623, 661, 685`, `opportunity-method.md:259-278, 608`: the demand test based on Genesis 3:6 (pattern 5). Fix: turn it into an ethics check. Serve the goods of 2:9, refuse to exploit 1 John 2:16, drop status as a lever, and take the test out of the output format.

Medium

2. `SKILL.md:65-68`: Issachar, "not a gift" (pattern 1).
3. `SKILL.md:94-95`: "Text states: the charge is not incompetence. The charge is inconsistency." `opportunity-method.md:211` labels the same claim "Inference." The time they missed is Christ's presence: "thou knewest not the time of thy visitation" (Luke 19:44).
4. `SKILL.md:171-194, 674`: Acts 17 is "the pattern to enter a market," and the failure row is "a pitch for something it did not ask about." Paul "preached unto them Jesus, and the resurrection" (17:18), and they said "thou bringest certain strange things to our ears" (17:20). The failure row turns the text upside down.
5. `SKILL.md:391-395`, `opportunity-method.md:564`: "true facts and a false conclusion." Numbers 13:32 calls it "an evil report," and the root is unbelief (Numbers 14:11, Hebrews 3:19).
6. `SKILL.md:210-215`: "Adam finds the lack." Genesis 2:18: "the LORD God said, It is not good that the man should be alone." God named the need and met it.
7. `SKILL.md:567-590`: David's qualification is "prior work" (pattern 1).
8. `reading-the-times.md:190, 223-224, 474-475`: the stone as disruption (pattern 3). Rule 15 also drops the condition that Part 4 puts on it.
9. `reading-the-times.md:284-290, 381-384`: "The track record is the warrant." Deuteronomy 13:2-3.
10. `SKILL.md:296-335`, `opportunity-method.md:282-321`: Ecclesiastes 11:1-2 (pattern 9).

Low: the sower is applied to market segments without Jesus' explanation (Matthew 13:19) (`SKILL.md:430-451`). Nehemiah's announcement rested on "the hand of my God which was good upon me" (2:18) (`SKILL.md:364`). The procedure never cites James 4:13-15 or Proverbs 16:9.

### problem-solving-first-principles

High

1. `diagnosis.md:131-132, 163`: the act question is put at Genesis 3:13. Both questions are to Adam in 3:11, and 3:13 is to the woman. The earlier audit fixed `SKILL.md` and the README but not this file.

Medium

2. `SKILL.md:22-23, 527-529`, `README.md:12`: "Blame is not a finding" (pattern 8). The skill also never mentions the mercy in the verdict (3:15, 3:21) or restoration: "restore such an one in the spirit of meekness" (Galatians 6:1). Its focus on systems does fit John 9:3 and Proverbs 18:13. Fix: "Blame is not the first finding." Record both the personal act and the system.
3. `SKILL.md:98, 132-133`: Joseph "reads" (pattern 1).
4. `SKILL.md:455-456`, `crisis.md:92-98, 119, 285`: Paul's message as "the forecast" (pattern 1).
5. `crisis.md:306-307`, `SKILL.md:474`: "the warning was right." Paul warned "also of our lives" (27:10), but "there shall be no loss of any man's life" (27:22). The warning was right about the ship and the cargo.
6. `SKILL.md:420-426`: the file says Matthew 18:6 is about believers, "not of employees," then applies it to a manager. Fix: cite Ephesians 6:9 or Colossians 4:1.

Low: the storm and fire tests are about hearing Christ and about Christ as foundation (Matthew 7:24, 1 Corinthians 3:11), with no analogy label (`SKILL.md:322-353`). Exodus 18:23, "and God command thee so," is left out (`SKILL.md:171-206`). "Permanent" (pattern 6) (`SKILL.md:142`). `crisis.md:56-61` and `SKILL.md:445-448` disagree on the labels for the "four reasons."

### technology-selection

High

1. `SKILL.md:403-404, 417-418`, `total-cost.md:188`: Haggai 1 (pattern 1). Haggai 1:9-11 gives the cause: "Because of mine house that is waste... And I called for a drought." Fix: state the text's cause, and label the "leaking system" lesson as an analogy from the image.

Medium

2. `SKILL.md:650-662`: the "Violates" column (pattern 10). Rename it "Drawn from (inference)."
3. `SKILL.md:198-218, 621, 655`, `total-cost.md:308-310`: Isaiah 28:16 (contradictions table).
4. `SKILL.md:441-464, 659`: Babel shows that a single system "concentrates failure." Nothing failed from inside. God stopped a project that was working: "nothing will be restrained from them" (11:6). The motive was "let us make us a name, lest we be scattered" (11:4), against "replenish the earth" (9:1). "One plan, one purpose" is labeled "Text states," but the text does not say it.
5. `SKILL.md:68-76`, `decision-framework.md:338-341`: "the result clause attaches to direction." In Ecclesiastes 10:10 the Hebrew behind "direct" is, by the standard concordance, H3787 _kasher_: "to be straight or right... to succeed or prosper." The local tools do not tag verses. This reads the modern sense of "direction" into a 1611 word, which Rule two forbids. Fix: "wisdom brings success," labeled as an inference.

Low: the order of Proverbs 24:3-4 is poetic parallelism (Proverbs 3:19-20 uses the same three words of creation), not a sequence that the text states (`SKILL.md:41-45`). Decay as "the baseline" (pattern 7) (`SKILL.md:348`). "Someone dressed it once" is a guess (`total-cost.md:201`).

## Items from the earlier audit that are still open

- `scripture-foundations/references/chapter-map.md:233`: the Psalm 110 count.
- `scripture-foundations/references/chapter-map.md:157-161`: the group numbers are fixed, but the reasoning about "shared vocabulary" still does not work.
- The 1611 "charity" claim, in `renewing-the-mind/references/thought-patterns.md:799, 874`.
- `problem-solving-first-principles/references/diagnosis.md:131-132, 163`: Genesis 3:13.
- B21, "death is design": relabeled, but the claim is still there.
- `body-first-principles/SKILL.md:18`, 1 Corinthians 12 applied to companies: a note was added, but lines 18-20 still generalize.
- `first-principles-reasoning/references/epistemic-limits.md:87`: reworded, and the new wording is also wrong.
- "Text states" on inferences: about 30 places remain across the skills.

## What the skills get right

These strengths are real, and they make the problems above easy to fix:

- The quotes are exact, and the Strong's entries match.
- Rule one and Rule two are sound. Most of the findings are places where a file breaks its own rules.
- Ownership as stewardship (A1), work before the fall (A16), and building and keeping as equal duties (A17) are well grounded.
- Genesis 47 gives both readings and names the people's servitude. The wage texts (Leviticus 19:13, James 5:4, Jeremiah 22:13) are handled soundly. Joseph's integrity is shown to lead to prison, not to profit.
- `renewing-the-mind` handles Colossians 2:8 honestly. Its guards against judging others (Matthew 7, Galatians 6:1) are good, and F8 places the cure in forgiveness and returning to God.
- `business-idea-generation` says that the Bible gives cases and not a method. It labels John 4:35 as an analogy, credits God with Joseph's foreknowledge, and denies that method guarantees results (Ecclesiastes 9:11).
- `technology-selection` treats the skill of Bezaleel as a gift from God that is taught and shared.
- `first-principles-reasoning` handles the limits of creaturely knowledge well (Job 38-41, Deuteronomy 29:29, Proverbs 1:7).

## Recommended order of work

1. Put the work of God back where the text puts it (pattern 1). Start with `renewing-the-mind/SKILL.md`, because the model loads it first and it has the largest gap.
2. Put Christ in the core of `scripture-foundations`, and remove the cornerstone, A31, and 1 Corinthians 15:58 mappings (pattern 2).
3. Fix the creation claims (pattern 7) and the claims that death is design or the curse is permanent (pattern 6).
4. Turn the Genesis 3:6 sales test into an ethics check in all three places (pattern 5).
5. Restore the context of the kingdom parables and the stone, and label each business use as an analogy (pattern 3).
6. Add the missing texts on wealth, and fix 1 Timothy 6:19, "dependence," and "price the release" (pattern 4). Add the wealth warnings to `ancient-secret-wealth-principle`.
7. Put moral judgment back (pattern 8), and add "Contested" notes where faithful readers differ (pattern 9).
8. Fix the contradictions table.
9. Do one pass on the "Text states" labels (pattern 10).
