# The Foundation Chapter Map

The complete map of the chapters this skill treats as load-bearing, with the reason each one is
on the list. `SKILL.md` carries a short starter set and a reading order. This file carries the
full list, grouped by the question each chapter answers.

Every verse below came from the local KJV through `scripture.ts`. Every definition came from
`lexicon.ts`. Run these commands from the skill folder to reproduce any line:

```
bun run scripts/scripture.ts lookup "Genesis 1:1"
bun run scripts/lexicon.ts lookup H7287
```

If Bun is not installed, use `python scripts/scripture.py` and `python scripts/lexicon.py` with the same arguments.

Labels used in this file:

- Text states: the verse itself makes the claim.
- Lexical: the claim rests on the Hebrew or Greek entry.
- Inference: this skill draws the claim from the text. The text does not state it.
- Contested: faithful readers disagree, or the bundled tools cannot settle the point.

A selection reason is a judgment about what carries weight. Every reason in a Why column is
"Inference" unless the entry marks it otherwise. Verse text is "Text states".

---

## Table of contents

1. [How a chapter gets on this list](#1-how-a-chapter-gets-on-this-list)
2. [Group 1. The chapter that names the topic](#2-group-1-the-chapter-that-names-the-topic)
3. [Group 2. Who God is](#3-group-2-who-god-is)
4. [Group 3. The thoughts and mind of God](#4-group-3-the-thoughts-and-mind-of-god)
5. [Group 4. The gospel spine](#5-group-4-the-gospel-spine)
6. [Group 5. First principles of the kingdom and daily practice](#6-group-5-first-principles-of-the-kingdom-and-daily-practice)
7. [Group 6. The keystone: 1 Corinthians 13](#7-group-6-the-keystone-1-corinthians-13)
8. [Group 7. The foundation vocabulary](#8-group-7-the-foundation-vocabulary)
9. [Chapters that sit in two groups](#9-chapters-that-sit-in-two-groups)
10. [The reading sequence](#10-the-reading-sequence)
11. [The through-line](#11-the-through-line)
12. [Appendix. The rest of the starter set](#12-appendix-the-rest-of-the-starter-set)

---

## 1. How a chapter gets on this list

The three tests, quoted from `SKILL.md`:

> Scripture names the category of foundations and develops it from the beginning to the end. Three tests select a foundation chapter:
>
> 1. Explicit foundation language ("first," "beginning," "foundation," "cornerstone").
> 2. Later Scripture quotes the chapter as a foundation. A chapter that Romans, Hebrews, or 1 Peter cites is load-bearing by definition.
> 3. The chapter gives a direct view into the mind and ways of God.

The tests are not equal. Test 1 is checkable by search. Test 2 is checkable by quotation. Test 3
rests on a reader's judgment, so it produces the most disagreement.

### Test 1. Explicit foundation language

A search for the word "foundation" in only four books (Isaiah, Matthew, Hebrews, and Revelation)
returns 21 verses. The list below is the load-bearing subset of the foundation language. Every entry is "Text states".

| Verse              | Text                                                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Genesis 1:1        | "In the beginning God created the heaven and the earth."                                                                                                                            |
| John 1:1           | "In the beginning was the Word, and the Word was with God, and the Word was God."                                                                                                   |
| Isaiah 28:16       | "Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste."                                |
| Matthew 7:25       | "And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock."                                       |
| 1 Corinthians 3:11 | "For other foundation can no man lay than that is laid, which is Jesus Christ."                                                                                                     |
| Ephesians 2:20     | "And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone;"                                                                |
| Hebrews 6:1        | "Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God," |
| Hebrews 11:10      | "For he looked for a city which hath foundations, whose builder and maker is God."                                                                                                  |
| 2 Timothy 2:19     | "Nevertheless the foundation of God standeth sure, having this seal, The Lord knoweth them that are his. And, Let every one that nameth the name of Christ depart from iniquity."   |
| Revelation 21:14   | "And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb."                                                                        |

Lexical: the Greek behind "foundation" in these verses is G2310 `themélios`, _"something put
down, i.e. a substruction (of a building, etc.), (literally or figuratively)"_, glossed
"foundation". The reverse map `english foundation` returns 16 entries: 14 Hebrew and 2 Greek
(G2310 `themélios` and G2602 `katabolḗ`). One English word does not equal one idea.

### Test 2. Chapters later Scripture quotes as foundations

A chapter that a later book quotes as the ground of an argument is load-bearing by definition.
This table lists the quotations this map relies on. Every quote is "Text states".

| Earlier chapter | Quoted or cited in                             | Verified text                                                                                                                        |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Genesis 12:3    | Galatians 3:8                                  | "In thee shall all nations be blessed."                                                                                              |
| Genesis 15:6    | Romans 4:3                                     | "Abraham believed God, and it was counted unto him for righteousness."                                                               |
| Exodus 12       | 1 Corinthians 5:7                              | "For even Christ our passover is sacrificed for us:"                                                                                 |
| Exodus 34:6     | Psalms 103:8                                   | "The LORD is merciful and gracious, slow to anger, and plenteous in mercy."                                                          |
| Exodus 34:6     | Jonah 4:2                                      | "thou art a gracious God, and merciful, slow to anger, and of great kindness"                                                        |
| Leviticus 11:44 | 1 Peter 1:16                                   | "Be ye holy; for I am holy."                                                                                                         |
| Deuteronomy 6:5 | Matthew 22:37                                  | "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind."                                 |
| 2 Samuel 7:14   | Hebrews 1:5                                    | "I will be to him a Father, and he shall be to me a Son"                                                                             |
| Psalms 22:1     | Matthew 27:46                                  | "My God, my God, why hast thou forsaken me?"                                                                                         |
| Psalms 110:1    | Matthew 22:44, Mark 12:36, Luke 20:42, Acts 2:34-35, and Hebrews 1:13 | "The LORD said unto my Lord, Sit thou on my right hand, till I make thine enemies thy footstool?"                                    |
| Isaiah 7:14     | Matthew 1:23                                   | "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel"                           |
| Hosea 11:1      | Matthew 2:15                                   | "Out of Egypt have I called my son."                                                                                                 |
| Micah 5:2       | Matthew 2:6                                    | "for out of thee shall come a Governor, that shall rule my people Israel."                                                           |
| Isaiah 28:16    | Romans 9:33 and 1 Peter 2:6                    | "Behold, I lay in Sion a stumblingstone and rock of offence: and whosoever believeth on him shall not be ashamed."                   |
| Isaiah 53:1     | John 12:38 and Romans 10:16                    | "Lord, who hath believed our report? and to whom hath the arm of the Lord been revealed?"                                            |
| Isaiah 53:5     | 1 Peter 2:24                                   | "by whose stripes ye were healed."                                                                                                   |
| Jeremiah 31:33  | Hebrews 8:10                                   | "I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people:" |
| Habakkuk 2:4    | Romans 1:17, Galatians 3:11, and Hebrews 10:38 | "The just shall live by faith."                                                                                                      |

Inference: the list is not exhaustive. It contains the quotations that carry the gospel spine
in group 4. A full quotation index is a separate project.

### Test 3. Direct windows into God's own mind and ways

These chapters report what God says about his own reasoning, or they show a person receiving it.
The list includes Isaiah 55:6-9, Jeremiah 29:11, Psalms 139:17 with Psalms 147:5, Job 38 to 41,
Romans 11:33-36, and 1 Corinthians 2:9-16. Group 3 below treats each one.

Inference: a reader cannot verify test 3 the way a reader verifies test 1. The claim is that
the passage gives access to God's mind. A reader who rejects the premise rejects the group.
The chapters stay on the map because they are where the skill family's claims about thinking
come from.

---

## 2. Group 1. The chapter that names the topic

### Hebrews 5:11 to 6:2

This is the only place in the Bible that uses the phrase "first principles" ("Text states", and
verified by search: the query returns exactly one verse).

- Hebrews 5:12: "For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat."
- Hebrews 6:1: "Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God,"
- Hebrews 6:2: "Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment."

Lexical: in Hebrews 5:12 the Greek phrase behind "first principles" is _ta stoicheia tēs
archēs_. It uses two words: G4747 `stoicheîon` ("element") and G746 `archḗ` ("beginning"). In
Hebrews 6:1 the word "principles" renders G746 `archḗ` alone. The lexicon defines G746 as
_"(properly abstract) a commencement, or (concretely) chief (in various applications of order,
time, place, or rank)"_ and glosses it "beginning, corner, (at the, the) first (estate),
magistrate, power, principality, principle, rule". The reverse map confirms that the KJV renders
both G746 and G4747 as "principle". The bundled tools do not tag individual verses with Strong's
numbers. The two-word reading of each verse comes from the Greek text, not from a tool result.

The passage names six items. They are the starter curriculum, and the author treats them as
already known. The author argues for leaving them and moving on, not for repeating them.

1. Repentance from dead works.
2. Faith toward God.
3. The doctrine of baptisms.
4. Laying on of hands.
5. Resurrection of the dead.
6. Eternal judgment.

Inference: the list orders the material from turning, to trusting, to belonging, to the end.
That order is a reading of the sequence, not a statement in the text.

All seven passages in group 7 carry the same foundation vocabulary. Six of them use "foundation"
or "foundations", and Matthew 7:25 uses "founded". Group 6 (1 Corinthians 13) has no foundation
vocabulary. Inference: the shared vocabulary is the reason that the author can call these items
first. The word "foundation" in Hebrews 6:1 is the ordinary building word, not a metaphor invented
for the passage.

---

## 3. Group 2. Who God is

A foundation that does not begin with God begins with something smaller. These chapters give the
canon's account of who God is, in his own words and in vision.

| Chapter                | Why it is on the list                                                                                            | Carrying verse                                                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Genesis 1              | The canon opens with God as maker. Every later claim about origin, order, and value assumes this chapter.        | Genesis 1:1: "In the beginning God created the heaven and the earth."                                                                                                         |
| Exodus 3               | God names himself. The name grounds the exodus and every later appeal to the God of Israel.                      | Exodus 3:14: "And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you."                             |
| Exodus 34:5-7          | The closest thing in the Old Testament to a formal self-description. Later Scripture quotes it as one.           | Exodus 34:6: "And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth,"           |
| Deuteronomy 6:4-9      | The Shema states who God is and what total love of him requires. Jesus names it as the first command.            | Deuteronomy 6:4: "Hear, O Israel: The LORD our God is one LORD:"                                                                                                              |
| Isaiah 6               | A direct vision of God's holiness and of the prophet's undoing. It grounds holiness and the call to mission.     | Isaiah 6:3: "And one cried unto another, and said, Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory."                                             |
| Isaiah 40 and 44 to 46 | Incomparability. The chapters argue that no other god compares and that God declares the end from the beginning. | Isaiah 46:10: "Declaring the end from the beginning, and from ancient times the things that are not yet done, saying, My counsel shall stand, and I will do all my pleasure:" |
| John 1                 | "In the beginning was the Word." The archetype repeats, and the chapter identifies the agent of creation.        | John 1:1: "In the beginning was the Word, and the Word was with God, and the Word was God."                                                                                   |
| Colossians 1:15-20     | The image of the invisible God. All things were created by him and for him, and all things consist by him.       | Colossians 1:17: "And he is before all things, and by him all things consist."                                                                                                |
| Revelation 4 to 5      | The throne room. It gives the end-state picture of God and the Lamb, and the ground of all worship.              | Revelation 4:11: "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created."          |

Text states: Isaiah 40:28 adds "there is no searching of his understanding." That line is a
bridge into group 3.

Contested: readers divide over the authorship and unity of Isaiah. Some treat chapters 40 to 66
as a separate work. This map follows the skill's usage and treats the book as one. The division
does not change the content of the chapters listed here.

---

## 4. Group 3. The thoughts and mind of God

Scripture treats the mind of God as knowable in part and not as a projection of human thought.
These chapters state the difference, describe the access, and set the discipline of thought that
follows.

| Chapter or passage                    | Why it is on the list                                                                                                            | Carrying verse                                                                                                                                                                                                                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Isaiah 55:6-9                         | God states that his thoughts and ways are not ours. The statement sits inside an offer of pardon.                                | Isaiah 55:8: "For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD."                                                                                                                                                                                |
| Jeremiah 29:11                        | God states his intent toward a people in exile. The thoughts are toward them, and the outcome is stated.                         | Jeremiah 29:11: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end."                                                                                                                                 |
| Psalms 139:17 with Psalms 147:5       | The psalmist counts God's thoughts as precious and beyond number. The second psalm states that his understanding is infinite.    | Psalms 139:17: "How precious also are thy thoughts unto me, O God! how great is the sum of them!"                                                                                                                                                                                   |
| Job 38 to 41                          | God answers Job out of the whirlwind with questions. The effect is to show the limit of human reasoning, not to win an argument. | Job 38:4: "Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding."                                                                                                                                                                          |
| Romans 11:33-36                       | A doxology on the depth of God's wisdom. It states that his judgments are unsearchable and his ways past finding out.            | Romans 11:34: "For who hath known the mind of the Lord? or who hath been his counsellor?"                                                                                                                                                                                           |
| 1 Corinthians 2:9-16                  | God reveals by his Spirit what eye and ear did not receive. The passage ends with the mind of Christ.                            | 1 Corinthians 2:16: "For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ."                                                                                                                                                            |
| Philippians 2:1-11                    | The mind of Christ is described as humility and obedience, and the reader is told to adopt it.                                   | Philippians 2:5: "Let this mind be in you, which was also in Christ Jesus:"                                                                                                                                                                                                         |
| Isaiah 26:3                           | The mind stayed on God holds peace. The mechanism is trust, not effort.                                                          | Isaiah 26:3: "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee."                                                                                                                                                                      |
| Romans 12:1-2                         | Transformation runs through the renewing of the mind. The renewed mind then tests the will of God.                               | Romans 12:2: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."                                                                                               |
| Ephesians 1:17-19 and 3:14-21         | A request for the spirit of wisdom and revelation, and a prayer to know a love that passes knowledge.                            | Ephesians 1:17: "That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of wisdom and revelation in the knowledge of him:"                                                                                                                        |
| Philippians 4:8 with Colossians 3:1-2 | The two passages give the discipline. One lists what to think on. The other sets the direction of affection.                     | Philippians 4:8: "whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things." |
| 2 Corinthians 10:5                    | Every thought is brought into captivity. The passage treats thought as a territory to be governed.                               | 2 Corinthians 10:5: "Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ;"                                                                                      |
| 1 Samuel 16:7                         | God states the contrast between outward appearance and the heart. It corrects a natural method of judgment.                      | 1 Samuel 16:7: "for man looketh on the outward appearance, but the LORD looketh on the heart."                                                                                                                                                                                      |
| John 17:3                             | Eternal life is defined as knowing God and Jesus Christ. Knowledge is the content of the goal.                                   | John 17:3: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent."                                                                                                                                                          |
| 1 John 5:20                           | An understanding is given, and its purpose is to know him that is true.                                                          | 1 John 5:20: "And we know that the Son of God is come, and hath given us an understanding, that we may know him that is true"                                                                                                                                                       |

Cross-reference: John 17 and 1 John sit in group 4 as whole books. Philippians 2 pairs with
John 13 in the reading sequence. Colossians 1:15-20 sits in group 2. Isaiah 55 sits beside
Isaiah 53 in group 4.

---

## 5. Group 4. The gospel spine

These chapters carry the account from the fracture to the recovery. The skill family derives
its claims about failure, cost, substitution, and restoration from them.

| Chapter                                | Why it is on the list                                                                                                                            | Carrying verse                                                                                                                                                                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Genesis 3 with Genesis 50:20           | The fracture and the first promise. Genesis 50:20 states the reversal pattern: what was meant for evil is meant unto good.                       | Genesis 3:15: "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel."                                                                           |
| Genesis 12:1-3 and 15:6                | The covenant of blessing to all families, and belief counted as righteousness. Paul quotes both.                                                 | Genesis 15:6: "And he believed in the LORD; and he counted it to him for righteousness."                                                                                                                                                 |
| Exodus 12 and Leviticus 16             | The Passover and the day of atonement. Substitution and covering are established as practice before they are explained.                          | Leviticus 16:30: "For on that day shall the priest make an atonement for you, to cleanse you, that ye may be clean from all your sins before the LORD."                                                                                  |
| Exodus 20                              | The covenant law, spoken by God and given before the people enter the land.                                                                      | Exodus 20:2-3: "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage. Thou shalt have no other gods before me."                                                                          |
| 2 Samuel 7                             | The throne promise to David. Hebrews quotes it of the Son.                                                                                       | 2 Samuel 7:16: "And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever."                                                                                                    |
| Psalms 22 and 110                      | The suffering and the session. The first is spoken from the cross. The second is quoted in three New Testament books.                            | Psalms 22:1: "My God, my God, why hast thou forsaken me? why art thou so far from helping me, and from the words of my roaring?"                                                                                                         |
| Isaiah 28:16                           | The sure foundation in Zion. Paul and Peter both quote it.                                                                                       | Isaiah 28:16: "Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste."                                                                       |
| Isaiah 53                              | The suffering servant. The Ethiopian official reads it and asks who it describes.                                                                | Isaiah 53:5: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."                                                             |
| Jeremiah 31:31-34 and Ezekiel 36:25-27 | The new covenant and the new heart. Hebrews 8 quotes the first at length.                                                                        | Jeremiah 31:33: "I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people."                                                                                             |
| Habakkuk 2:4                           | The just shall live by his faith. Three New Testament books quote the line.                                                                      | Habakkuk 2:4: "but the just shall live by his faith."                                                                                                                                                                                    |
| Luke 15                                | The lost and found. The father runs, and the recovery is described as life from the dead.                                                        | Luke 15:24: "For this my son was dead, and is alive again; he was lost, and is found."                                                                                                                                                   |
| John 3 and 17                          | New birth and eternal life. One chapter states the gift and the other defines the life.                                                          | John 3:16: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."                                                                               |
| Acts 2 and 15                          | The Spirit given, and the council that settles the terms of inclusion.                                                                           | Acts 15:11: "But we believe that through the grace of the LORD Jesus Christ we shall be saved, even as they."                                                                                                                            |
| Romans 1 to 8                          | The compact system. It runs from the universal verdict to the statement that nothing separates.                                                  | Romans 8:1: "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."                                                                                              |
| 1 Corinthians 3:10-15                  | The one foundation and the fire test. Every builder's work is tried. Cross-reference group 7.                                                    | 1 Corinthians 3:11: "For other foundation can no man lay than that is laid, which is Jesus Christ."                                                                                                                                      |
| 1 Corinthians 15                       | The resurrection. Christ is the firstfruits, and the last Adam reverses the first.                                                               | 1 Corinthians 15:22: "For as in Adam all die, even so in Christ shall all be made alive."                                                                                                                                                |
| Ephesians 1 to 2                       | Purpose before the foundation of the world, and grace through faith. Cross-reference group 7 for 2:19-22.                                        | Ephesians 2:8: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:"                                                                                                                             |
| 2 Corinthians 5:17-21                  | New creature, reconciliation, and ambassadorship. The chapter states the exchange at the center.                                                 | 2 Corinthians 5:21: "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him."                                                                                                     |
| Hebrews 1 and 11                       | The Son as the express image and the upholder of all things, then faith as the substance of things hoped for. Cross-reference group 7 for 11:10. | Hebrews 1:3: "Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;" |
| 2 Timothy 2:19 and 3:14-17             | The foundation of God stands sure, and the scriptures furnish the man of God. Cross-reference group 7 for 2:19.                                  | 2 Timothy 3:16: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:"                                                                           |
| 1 John 1 to 2, 4, and 5:20             | Light, advocacy, and love as the proof. The letters give the tests of the profession.                                                            | 1 John 1:9: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness."                                                                                                        |

Inference: the spine is an ordering of the material, not a claim that the chapters form one
argument. The order runs from the problem, through the provision, to the practice.

---

## 6. Group 5. First principles of the kingdom and daily practice

The foundation chapters state what is true. These chapters state how to live in light of it.

| Chapter or passage                              | Why it is on the list                                                                                                          | Carrying verse                                                                                                                                                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Matthew 5 to 7                                  | The Sermon on the Mount. It holds the kingdom ethic, the prayer, and the foundation test. Cross-reference group 7 for 7:24-27. | Matthew 7:24: "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock:"                                                                      |
| Matthew 22:34-40                                | The two commands on which all the law and the prophets hang. The first quotes Deuteronomy 6:5.                                 | Matthew 22:40: "On these two commandments hang all the law and the prophets."                                                                                                                                                |
| Proverbs 1 to 9                                 | Instruction for a son. The program starts from the fear of the LORD as the beginning of knowledge.                             | Proverbs 1:7: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction."                                                                                                                |
| Ecclesiastes 12:13                              | A one-line summary of the whole duty of man, stated as the conclusion of the book.                                             | Ecclesiastes 12:13: "Fear God, and keep his commandments: for this is the whole duty of man."                                                                                                                                |
| Micah 6:8 with Isaiah 1:18                      | What the LORD requires, and the invitation to reason together.                                                                 | Micah 6:8: "what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"                                                                                                       |
| Hosea 6:6                                       | Mercy and the knowledge of God rank above ritual. Jesus quotes the line twice.                                                 | Hosea 6:6: "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings."                                                                                                                     |
| James 1 to 2                                    | Doers and not hearers only, and faith without works. The letter supplies the practical test.                                   | James 1:22: "But be ye doers of the word, and not hearers only, deceiving your own selves."                                                                                                                                  |
| Galatians 5 to 6                                | The fruit of the Spirit and the sowing and reaping principle.                                                                  | Galatians 6:7: "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap."                                                                                                                   |
| 1 Corinthians 10:31 and 1 Thessalonians 5:16-18 | One command covers all activity, and three reflexes cover the disposition.                                                     | 1 Corinthians 10:31: "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God."                                                                                                                  |
| 1 Peter 1 and 2 Peter 1:3-11                    | The living hope, then the list of qualities to add to faith.                                                                   | 2 Peter 1:10: "give diligence to make your calling and election sure: for if ye do these things, ye shall never fall:"                                                                                                       |
| Matthew 28:18-20                                | The commission. All power is stated first, and the command follows from it.                                                    | Matthew 28:19: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:"                                                                                    |
| Mark 10:43-45                                   | Greatness defined as service, with the Son of man as the pattern.                                                              | Mark 10:45: "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many."                                                                                               |
| Luke 24:44-47                                   | The scriptures fulfilled, and repentance preached among all nations.                                                           | Luke 24:47: "And that repentance and remission of sins should be preached in his name among all nations, beginning at Jerusalem."                                                                                            |
| Acts 1:8                                        | Witnesses in expanding circles, from the city to the end of the earth.                                                         | Acts 1:8: "ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth."                                                                                    |
| Acts 17:22-31                                   | The model pitch to a culture. It moves from creation, to providence, to repentance, to judgment.                               | Acts 17:26-27: "And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation; That they should seek the Lord" |

Cross-reference: Matthew 5 to 7 supplies the foundation vocabulary in 7:24-27, and that entry
sits in group 7. Proverbs 24:3-4 states the form, establish, fill pattern and appears in the
appendix.

---

## 7. Group 6. The keystone: 1 Corinthians 13

This chapter is the keystone because it governs motive. A correct conclusion reached for a
wrong reason is not a win. The skill family applies this test to every other axiom.

Lexical: the KJV word "charity" in this chapter is G26 `agápē`, _("love, i.e. affection or
benevolence; specially (plural) a love-feast")_, glossed "(feast of) charity(-ably), dear, love".
The reverse map `english charity` returns G26 alone. The KJV uses "charity" for love (_agapē_) in
this chapter. Elsewhere it usually renders the same word "love". The sense "alms" also existed in
1611, but this chapter does not use it. A reader who hears "philanthropy" in verse 13 hears the
wrong sense.

Four observations.

### Observation 1. The motive is constitutive, not additive (13:1-3)

- 1 Corinthians 13:1: "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal."
- 1 Corinthians 13:2: "And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing."
- 1 Corinthians 13:3: "And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing."

Inference: the three verses name the highest available gifts, then the highest available
sacrifice, and set them at zero without love. The act and the motive are one thing in this
account. Love is not a supplement added to an otherwise valuable act.

### Observation 2. Love is described by conduct (13:4-7)

- 1 Corinthians 13:4: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,"
- 1 Corinthians 13:5: "Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;"
- 1 Corinthians 13:6: "Rejoiceth not in iniquity, but rejoiceth in the truth;"
- 1 Corinthians 13:7: "Beareth all things, believeth all things, hopeth all things, endureth all things."

Inference: most of the list is negative. The text says what love does not do more often than
what it does. That makes the passage usable as a checklist, and it makes self-assessment
uncomfortable.

### Observation 3. Love outlasts the gifts (13:8-13)

- 1 Corinthians 13:8: "Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away."
- 1 Corinthians 13:13: "And now abideth faith, hope, charity, these three; but the greatest of these is charity."

Inference: the chapter ranks three permanent things and puts love first. The ranking is the
reason the skill family calls this chapter the keystone and not a supplement.

### Observation 4. Present knowledge is partial (13:9-12)

- 1 Corinthians 13:9: "For we know in part, and we prophesy in part."
- 1 Corinthians 13:12: "For now we see through a glass, darkly; but then face to face: now I know in part; but then shall I know even as also I am known."

Inference: this is a direct limit on reasoning. The tool is real and it is incomplete. The
correction is not to reason less. The correction is to hold conclusions at the confidence the
instrument supports.

---

## 8. Group 7. The foundation vocabulary

Where the text itself says "foundation," it means what cannot be replaced without destroying
the structure. These seven entries are the vocabulary the skill family uses.

| Passage               | Why it is on the list                                                                            | Carrying verse                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Matthew 7:24-27       | The house on the rock and the house on the sand. Foundations are tested by storms, not by plans. | Matthew 7:25: "and it fell not: for it was founded upon a rock."                                                                                                                                  |
| 1 Corinthians 3:10-15 | Christ is the only foundation. Every builder's work is tried by fire. Cross-reference group 4.   | 1 Corinthians 3:13: "Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."    |
| Ephesians 2:19-22     | The building is framed together and grows. Christ is the chief corner stone.                     | Ephesians 2:20: "And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone;"                                                              |
| Hebrews 11:10         | Abraham looked for a city with foundations, whose builder and maker is God.                      | Hebrews 11:10: "For he looked for a city which hath foundations, whose builder and maker is God."                                                                                                 |
| 2 Timothy 2:19        | The foundation of God stands sure, and it carries a seal with two sides.                         | 2 Timothy 2:19: "Nevertheless the foundation of God standeth sure, having this seal, The Lord knoweth them that are his. And, Let every one that nameth the name of Christ depart from iniquity." |
| Isaiah 28:16          | The sure foundation in Zion, with a promise attached to belief.                                  | Isaiah 28:16: "he that believeth shall not make haste."                                                                                                                                           |
| Revelation 21:14      | The city wall has twelve foundations, and the names are on them.                                 | Revelation 21:14: "And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb."                                                                    |

Lexical: the nearest thing to a definition is Hebrews 11:1, "Now faith is the substance of
things hoped for, the evidence of things not seen." G5287 `hypóstasis` is defined as _"a setting
under (support), i.e. (figuratively) concretely, essence, or abstractly, assurance (objectively
or subjectively)"_ and glossed "confidence, confident, person, substance". A foundation is what
stands under the thing before the outcome is visible.

---

## 9. Chapters that sit in two groups

The map puts each chapter in one place. These entries also carry a second job, and the
cross-reference points to the other section.

| Entry                 | Primary group             | Also serves                                                        |
| --------------------- | ------------------------- | ------------------------------------------------------------------ |
| 1 Corinthians 3:10-15 | Group 4, the gospel spine | Group 7, the foundation vocabulary. Christ is the only foundation. |
| Isaiah 28:16          | Group 4, the gospel spine | Group 7, the foundation vocabulary. Quoted by Paul and Peter.      |
| 2 Timothy 2:19        | Group 4, the gospel spine | Group 7, the foundation vocabulary. The seal has two sides.        |
| Ephesians 1-2         | Group 4, the gospel spine | Group 7 draws on 2:19-22. The corner stone and the building.       |
| Matthew 5-7           | Group 5, daily practice   | Group 7 draws on 7:24-27. The two houses.                          |
| John 17               | Group 4, the gospel spine | Group 3 draws on 17:3. Eternal life as knowing.                    |
| 1 John 1-2 and 4      | Group 4, the gospel spine | Group 3 draws on 5:20. The understanding given.                    |
| Philippians 2:1-11    | Group 3, the mind of God  | The reading sequence pairs it with John 13.                        |
| Colossians 3:1-2      | Group 3, the mind of God  | Colossians 1:15-20 sits in group 2.                                |
| Isaiah 55:6-9         | Group 3, the mind of God  | Isaiah 53 sits in group 4.                                         |
| Jeremiah 29:11        | Group 3, the mind of God  | Jeremiah 31 sits in group 4.                                       |
| Romans 12:1-2         | Group 3, the mind of God  | Romans 1 to 8 sits in group 4.                                     |
| Hebrews 11:10         | Group 7, the vocabulary   | Hebrews 11 sits in group 4.                                        |

---

## 10. The reading sequence

`SKILL.md` gives a starter set in reading order. This is the same shape with the full map
included. The order is this skill's "Inference". It is a reading plan, not a claim the text
makes.

| Order | Reading                                           | Why it sits here                                                                     |
| ----- | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1     | Hebrews 5:11 to 6:2                               | The passage names the topic. Read it first so the rest is read for foundations.      |
| 2     | Genesis 1                                         | The source and the method.                                                           |
| 3     | Genesis 2                                         | The rhythm, the boundary, and the first "not good."                                  |
| 4     | Genesis 3                                         | The fracture and the first promise.                                                  |
| 5     | Genesis 12 and 15                                 | The covenant, and belief counted as righteousness.                                   |
| 6     | Exodus 3                                          | The name.                                                                            |
| 7     | Exodus 12 and Leviticus 16                        | The Passover and the covering.                                                       |
| 8     | Exodus 20                                         | The law, given after the rescue.                                                     |
| 9     | Exodus 34:5-7                                     | The self-description that later Scripture quotes.                                    |
| 10    | Deuteronomy 6:4-9                                 | The Shema.                                                                           |
| 11    | 2 Samuel 7                                        | The throne promise.                                                                  |
| 12    | Psalms 22 and 110                                 | The suffering and the session.                                                       |
| 13    | Job 38 to 41                                      | The limit of reasoning.                                                              |
| 14    | Proverbs 1 to 9                                   | The beginning of knowledge.                                                          |
| 15    | Ecclesiastes 12:13                                | The summary of duty.                                                                 |
| 16    | Isaiah 6                                          | The holiness vision.                                                                 |
| 17    | Isaiah 28:16                                      | The sure foundation.                                                                 |
| 18    | Isaiah 40 and 44 to 46                            | Incomparability.                                                                     |
| 19    | Isaiah 53                                         | The servant.                                                                         |
| 20    | Isaiah 55:6-9                                     | The thoughts above our thoughts.                                                     |
| 21    | Jeremiah 29:11 and 31:31-34 with Ezekiel 36:25-27 | The intent toward the exiles and the new covenant.                                   |
| 22    | Habakkuk 2:4                                      | The line three New Testament books quote.                                            |
| 23    | Matthew 5 to 7                                    | The kingdom ethic and the two houses.                                                |
| 24    | Matthew 22:34-40                                  | The two commands.                                                                    |
| 25    | Matthew 28:18-20                                  | The commission.                                                                      |
| 26    | Mark 10:43-45                                     | Greatness as service.                                                                |
| 27    | Luke 15                                           | The lost and found.                                                                  |
| 28    | Luke 24:44-47                                     | The scriptures fulfilled, and the message sent.                                      |
| 29    | John 1                                            | The Word in the beginning.                                                           |
| 30    | John 3 and 17                                     | New birth and eternal life.                                                          |
| 31    | Acts 2 and 15                                     | The Spirit and the council.                                                          |
| 32    | Acts 17:22-31                                     | The model pitch to a culture.                                                        |
| 33    | Romans 1 to 8                                     | The compact system.                                                                  |
| 34    | Romans 11:33-36 and 12:1-2                        | The depth, then the renewed mind.                                                    |
| 35    | 1 Corinthians 2:9-16                              | The mind of Christ.                                                                  |
| 36    | 1 Corinthians 3:10-15                             | The one foundation and the fire.                                                     |
| 37    | 1 Corinthians 13                                  | The keystone. Read it after the foundation vocabulary so the vocabulary is governed. |
| 38    | 1 Corinthians 15                                  | The resurrection.                                                                    |
| 39    | 2 Corinthians 5:17-21                             | Reconciliation and ambassadorship.                                                   |
| 40    | Galatians 5 to 6                                  | The fruit and the sowing.                                                            |
| 41    | Ephesians 1 to 2                                  | Purpose before creation, and grace through faith.                                    |
| 42    | Philippians 2:1-11 and 4:8 with Colossians 3:1-2  | The mind of Christ, and the discipline of thought.                                   |
| 43    | Colossians 1:15-20                                | The preeminence of the Son.                                                          |
| 44    | 1 Thessalonians 5:16-18                           | The three reflexes.                                                                  |
| 45    | 2 Timothy 2:19 and 3:14-17                        | The sure foundation and the scriptures.                                              |
| 46    | Hebrews 1, 8, and 11                              | The Son, the better covenant, and faith.                                             |
| 47    | James 1 to 2                                      | Doers, and faith with works.                                                         |
| 48    | 1 Peter 1 and 2 Peter 1:3-11                      | The living hope and the ladder.                                                      |
| 49    | 1 John 1 to 2, 4, and 5:20                        | Light, love, and understanding.                                                      |
| 50    | Revelation 4 to 5 and 21                          | The throne and the city. The last answer to the first line.                          |

Inference: the sequence front-loads the definition and the Old Testament. It places
1 Corinthians 13 after the foundation vocabulary, so that love governs the use of that
vocabulary.

### Useful pairings

| Pair                          | The link                                                                                                                      |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Hebrews 6 with Hebrews 11     | The passage that names the foundation and the chapter that defines faith. Read together, the vocabulary and the posture meet. |
| Genesis 1 with Revelation 21  | The first creation and the new creation. The last book answers the first.                                                     |
| Exodus 34 with Psalms 103     | The self-description and the psalm that quotes it. The psalm shows how Israel used the list.                                  |
| Deuteronomy 6 with Matthew 22 | The Shema and the command Jesus calls the first. Matthew adds the second from Leviticus 19:18.                                |
| Isaiah 53 with Acts 8         | The servant song and the official who reads it and asks who it describes. Philip answers from the same scripture.             |
| Jeremiah 31 with Hebrews 8    | The new covenant promise and the letter that quotes it at length to argue that the first covenant is old.                     |
| Philippians 2 with John 13    | The mind of Christ stated as doctrine and shown as a basin and a towel.                                                       |

---

## 11. The through-line

The arc runs from the first line of the Bible to Revelation 21:5-6, with one verse in the
middle.

- Genesis 1:1: "In the beginning God created the heaven and the earth." ("Text states")
- 1 Corinthians 3:11: "For other foundation can no man lay than that is laid, which is Jesus Christ." ("Text states")
- Revelation 21:5-6: "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful. And he said unto me, It is done. I am Alpha and Omega, the beginning and the end. I will give unto him that is athirst of the fountain of the water of life freely." ("Text states")

The first verse states the source. The middle verse names the foundation that is already laid.
The last verses close the arc with a new creation and with the words "the beginning and the end."
Inference: those words answer "In the beginning" in Genesis 1:1. Genesis 1:1 does not say "the
end". Everything in groups 2 through 7 sits inside that frame.

Inference: the through-line is the reason this skill treats foundations as a single subject
rather than a set of topics. The frame is stated in the text. The use of the frame as an
organizing device is the skill's choice.

---

## 12. Appendix. The rest of the starter set

`SKILL.md` lists a starter set. Sections 2 to 8 cover most of it. This appendix records the
rest, so the two files agree and nothing in the starter set goes unrecorded.

Genesis 2 is a foundation chapter by content. The seven groups give it no slot of its own. The
close read in `references/genesis-1-3.md` treats the chapter in full. Its contribution is
cultivation, boundary, work, partnership, and the first "not good."

| Chapter                                      | What it supplies                                                                                                  | Carrying verse                                                                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Genesis 2                                    | Cultivation, boundaries, work, partnership, the first "not good." Treated in full in `references/genesis-1-3.md`. | Genesis 2:15: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it."                                      |
| Exodus 18                                    | Delegation and triage. The first management fix.                                                                  | Exodus 18:21: "Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness;"                    |
| Deuteronomy 8                                | Wealth, wilderness testing, and the forgetting that follows success.                                              | Deuteronomy 8:18: "But thou shalt remember the LORD thy God: for it is he that giveth thee power to get wealth"                                     |
| 1 Chronicles 12:32                           | Reading the times to know what to do.                                                                             | 1 Chronicles 12:32: "men that had understanding of the times, to know what Israel ought to do"                                                      |
| Nehemiah 1 to 6                              | Reconnaissance, vision, threat, build and defend, focus.                                                          | Nehemiah 2:18: "And they said, Let us rise up and build. So they strengthened their hands for this good work."                                      |
| Proverbs 24:3-4                              | Build, establish, fill. The same shape as the two passes of Genesis 1.                                            | Proverbs 24:3: "Through wisdom is an house builded; and by understanding it is established:"                                                        |
| Ecclesiastes 1 to 2, 9:11, 10:10, and 11:1-6 | Experiment, vanity tested, the sharpened axe, and action under uncertainty.                                       | Ecclesiastes 11:4: "He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap."                                     |
| Matthew 25:14-30                             | The talents. Capital allocated unequally, and a return expected.                                                  | Matthew 25:21: "thou hast been faithful over a few things, I will make thee ruler over many things"                                                 |
| Luke 14:28-30                                | Counting the cost before the build.                                                                               | Luke 14:28: "For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?" |
| Acts 6                                       | The first decision about organization design. Its purpose was to protect the primary work.                                                  | Acts 6:3: "look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business."            |

Lexical: the KJV word "talent" in Matthew 25:15 is G5007 `tálanton`, a weight of money. Whatever
the English word meant in 1611, the parable is about capital, not about natural ability. See
`references/kjv-1611.md`.

Cross-reference: Acts 17 appears in group 5. The appendix records Acts 6.

---

## 13. Reproducing the checks

Run these commands from the skill folder:

```
bun run scripts/scripture.ts lookup "Genesis 1:1" "Revelation 21:5-6"
bun run scripts/scripture.ts search "first principles"
bun run scripts/scripture.ts search "foundation" --book Isaiah --book Matthew --book Hebrews --book Revelation
bun run scripts/lexicon.ts lookup G26 G746 G2310 G4747 G5287
bun run scripts/lexicon.ts english foundation
```

If Bun is not installed, use `python scripts/scripture.py` and `python scripts/lexicon.py` with the same arguments.

The data directory holds 66 books, 1,189 chapters, and 31,102 verses. The Strong's dictionary
holds 8,674 Hebrew entries and 5,523 Greek entries.
