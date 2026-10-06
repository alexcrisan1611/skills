# Original Language: A Working Lexicon

Reference file for the `scripture-foundations` skill. It gathers the Hebrew and Greek
words that matter most for first-principles reasoning, with the Strong's definition and
the KJV gloss list for each.

**Every definition and gloss list below is copied verbatim from `lexicon.ts`.** Every
verse quoted is copied verbatim from `scripture.ts`. Nothing here was written from memory.

Reproduce any entry with:

```
bun run skills/scripture-foundations/scripts/lexicon.ts lookup H1254
bun run skills/scripture-foundations/scripts/scripture.ts lookup "Genesis 1:1-5"
```

Data: Strong's Exhaustive Concordance (1890), JSON edition, Open Scriptures, CC-BY-SA —
8,674 Hebrew entries, 5,523 Greek entries. KJV text: 66 books, 1,189 chapters, 31,102 verses.

---

## Table of contents

1. [How to read an entry](#1-how-to-read-an-entry)
2. [Part 1 — Genesis 1](#part-1--genesis-1)
3. [Part 2 — Genesis 2](#part-2--genesis-2)
4. [Part 3 — Genesis 3](#part-3--genesis-3)
5. [Part 4 — The foundation vocabulary in the New Testament](#part-4--the-foundation-vocabulary-in-the-new-testament)
6. [How to use this without overclaiming](#how-to-use-this-without-overclaiming)

---

## 1. How to read an entry

Each entry has these parts:

- **The heading** — the Strong's number, the lemma in original script, the
  transliteration, and the English word the KJV most often uses for it.
- **Strong's definition** — the Hebrew or Greek dictionary's own `strongs_def` field,
  copied verbatim. This is the lexical claim.
- **Derivation** — the `derivation` field, verbatim. Often names a root word.
- **KJV glosses** — the `kjv_def` field, verbatim: the list of English words the KJV
  translators used to render this word. Long lists are normal and are the point — they
  show how wide a word's range is.
- **Verified** — the verse or verses cited for the term, quoted exactly as the KJV text
  file returns them.

**On transliteration.** The Greek dictionary supplies a transliteration
(`agápē`). The Hebrew dictionary does not — its `translit` field is empty — so the
Hebrew transliterations below are supplied by this document using the conventional
academic system (`רָדָה` → _radah_), applied consistently.

**Two limitations you must keep in mind.**

1. The KJV files carry plain text only. They are **not tagged** with Strong's numbers
   at the word level. So this document can verify (a) that a Strong's entry exists and
   what it says, (b) that a verse exists and what it says, and (c) that the KJV renders
   a given English word with a given Strong's number — via the `english` reverse-map.
   It cannot verify that a _specific occurrence_ of a word in a _specific verse_ is the
   number you expect. Where a verse is listed under a term, treat it as the conventional
   concordance link, not as something these tools independently confirm.
2. A gloss list is not a definition. H8414's gloss list reads "confusion, empty place,
   without form, nothing, (thing of) nought, vain, vanity, waste, wilderness" — that
   tells you which English words the translators reached for; it does not tell you what
   the Hebrew word meant on its own.

A shortcut for the reverse direction (English word → Strong's numbers):

```
bun run skills/scripture-foundations/scripts/lexicon.ts english "without form"     -> H8414 only
bun run skills/scripture-foundations/scripts/lexicon.ts english "charity"          -> G26 only
bun run skills/scripture-foundations/scripts/lexicon.ts english "farthing"         -> G787, G2835
```

---

## Part 1 — Genesis 1

### H1254 · בָּרָא · _bara_ — created

**Strong's definition** — (absolutely) to create; (qualified) to cut down (a wood), select, feed (as formative processes)
**Derivation** — a primitive root;
**KJV glosses** — choose, create (creator), cut down, dispatch, do, make (fat).
**Verified** — Genesis 1:1 "In the beginning God created the heaven and the earth."; Genesis 1:27 "So God created man in his own image".

> **Interpretation, not lexical data.** Note the width of the gloss list: the KJV uses
> H1254 for "cut down" and "dispatch" as well as "create". The verb's core sense is
> formative activity, not bare fiat. Do not build an argument on "create means
> ex nihilo" — that idea is not in this dictionary entry, and Genesis 1:1 does not state
> it. It is a later theological inference.

### H6213 · עָשָׂה · _asah_ — made

**Strong's definition** — to do or make, in the broadest sense and widest application
**Derivation** — a primitive root;
**KJV glosses** — accomplish, advance, appoint, apt, be at, become, bear, bestow, bring forth, bruise, be busy, [idiom] certainly, have the charge of, commit, deal (with), deck, [phrase] displease, do, (ready) dress(-ed), (put in) execute(-ion), exercise, fashion, [phrase] feast, (fight-) ing man, [phrase] finish, fit, fly, follow, fulfill, furnish, gather, get, go about, govern, grant, great, [phrase] hinder, hold (a feast), [idiom] indeed, [phrase] be industrious, [phrase] journey, keep, labour, maintain, make, be meet, observe, be occupied, offer, [phrase] officer, pare, bring (come) to pass, perform, pracise, prepare, procure, provide, put, requite, [idiom] sacrifice, serve, set, shew, [idiom] sin, spend, [idiom] surely, take, [idiom] thoroughly, trim, [idiom] very, [phrase] vex, be (warr-) ior, work(-man), yield, use.
**Verified** — Genesis 1:26 "Let us make man in our image"; Genesis 1:31 "And God saw every thing that he had made, and, behold, it was very good."

> **Interpretation, not lexical data.** H6213 is the most generalized verb of doing in
> biblical Hebrew — the gloss list runs from "appoint" to "sin". Genesis 1:26 uses
> "make" (`asah`) while 1:27 uses "created" (`bara`). Any argument that depends on the
> two verbs being sharply opposed is arguing beyond the lexicon: `asah` is far too broad
> to carry that weight on its own.

### H8414 · תֹּהוּ · _tohu_ — without form

**Strong's definition** — a desolation (of surface), i.e. desert; figuratively, a worthless thing; adverbially, in vain
**Derivation** — from an unused root meaning to lie waste;
**KJV glosses** — confusion, empty place, without form, nothing, (thing of) nought, vain, vanity, waste, wilderness.
**Verified** — Genesis 1:2 "And the earth was without form, and void"; the reverse map
`english "without form"` returns **H8414 and nothing else**.

> **Interpretation, not lexical data.** The dominant image in the gloss list is _desert_,
> _waste_, _wilderness_ — an unproductive place, not merely an unshaped one. That matters
> if you are reasoning about what a "starting condition" looks like: the biblical picture
> is waste ground, not blank paper.

### H922 · בֹּהוּ · _bohu_ — void

**Strong's definition** — a vacuity, i.e. (superficially) an undistinguishable ruin
**Derivation** — from an unused root (meaning to be empty);
**KJV glosses** — emptiness, void.
**Verified** — Genesis 1:2 "And the earth was without form, and void".

> **Interpretation, not lexical data.** It is a rare word. The KJV phrase "without form,
> and void" — the translation of `tohu wa-bohu` — occurs in exactly 2 verses
> (`search "without form, and void"`): Genesis 1:2 and Jeremiah 4:23, where the same
> waste-and-empty state is pictured. Treat `tohu wa-bohu` as a fixed phrase meaning
> "waste and empty", not as two separate technical terms you can split apart and build
> on independently.

### H2822 · חֹשֶׁךְ · _choshek_ — darkness

**Strong's definition** — the dark; hence (literally) darkness; figuratively, misery, destruction, death, ignorance, sorrow, wickedness
**Derivation** — from H2821 (חָשַׁךְ);
**KJV glosses** — dark(-ness), night, obscurity.
**Verified** — Genesis 1:2 "and darkness was upon the face of the deep"; Genesis 1:4 "and God divided the light from the darkness."

> **Interpretation, not lexical data.** The gloss list carries heavy figurative freight
> (misery, death, ignorance, wickedness), but Genesis 1:2–5 uses the word for physical
> night, and God names it "Night" in 1:5. Reading the figurative sense into Genesis 1
> is a choice the text does not force.

### H8415 · תְּהוֹם · _tehom_ — deep

**Strong's definition** — an abyss (as a surging mass of water), especially the deep (the main sea or the subterranean watersupply)
**Derivation** — or תְּהֹם; (usually feminine) from H1949 (הוּם);
**KJV glosses** — deep (place), depth.
**Verified** — Genesis 1:2 "and darkness was upon the face of the deep".

> **Interpretation, not lexical data.** "the subterranean watersupply" is the dictionary's
> own phrasing and reflects ancient Near Eastern cosmology: a body of water under the
> land as well as around it. The word means a water mass, not a metaphysical abyss.

### H7363 · רָחַף · _rachaph_ — moved (brooded)

**Strong's definition** — to brood; by implication, to be relaxed
**Derivation** — a primitive root;
**KJV glosses** — flutter, move, shake.
**Verified** — Genesis 1:2 "And the Spirit of God moved upon the face of the waters."

> **Interpretation, not lexical data.** The KJV says "moved"; the dictionary's primary
> sense is "to brood" and its glosses are "flutter, move, shake". "Brooded" is a
> defensible rendering, but it is a rendering. The dictionary gives you the range;
> choosing one end of it is interpretation.

### H216 · אוֹר · _or_ — light

**Strong's definition** — illumination or (concrete) luminary (in every sense, including lightning, happiness, etc.)
**Derivation** — from H215 (אוֹר);
**KJV glosses** — bright, clear, [phrase] day, light (-ning), morning, sun.
**Verified** — Genesis 1:3 "And God said, Let there be light: and there was light."; Genesis 1:4 "And God saw the light, that it was good".

### H914 · בָּדַל · _badal_ — divided

**Strong's definition** — to divide (in variation senses literally or figuratively, separate, distinguish, differ, select, etc.)
**Derivation** — a primitive root;
**KJV glosses** — (make, put) difference, divide (asunder), (make) separate (self, -ation), sever (out), [idiom] utterly.
**Verified** — Genesis 1:4 "and God divided the light from the darkness."

> **Interpretation, not lexical data.** The gloss list includes "distinguish",
> "make difference", and "select". So `badal` is not only about cutting apart; it is
> also about marking a distinction. If you are reasoning about separation as an
> organizing act, the word carries both.

### H7549 · רָקִיעַ · _raqia_ — firmament

**Strong's definition** — properly, an expanse, i.e. the firmament or (apparently) visible arch of the sky
**Derivation** — from H7554 (רָקַע);
**KJV glosses** — firmament.
**Verified** — Genesis 1:20 "in the open firmament of heaven."; the reverse map
`english "firmament"` returns **H7549 alone** — the KJV uses "firmament" for this word
and no other.

> **Interpretation, not lexical data.** The dictionary's first sense is "an expanse".
> The root H7554 means to beat out or spread (as metal). "Firmament" is a Latin-derived
> English word that has since come to imply solidity; the Hebrew sense is spread-out
> space. Any argument that leans on the English word "firmament" connoting a hard dome
> is leaning on the translation, not the Hebrew.

### H3117 · יוֹם · _yom_ — day

**Strong's definition** — a day (as the warm hours), whether literal (from sunrise to sunset, or from one sunset to the next), or figurative (a space of time defined by an associated term), (often used adverb)
**Derivation** — from an unused root meaning to be hot;
**KJV glosses** — age, [phrase] always, [phrase] chronicals, continually(-ance), daily, ((birth-), each, to) day, (now a, two) days (agone), [phrase] elder, [idiom] end, [phrase] evening, [phrase] (for) ever(-lasting, -more), [idiom] full, life, as (so) long as (... live), (even) now, [phrase] old, [phrase] outlived, [phrase] perpetually, presently, [phrase] remaineth, [idiom] required, season, [idiom] since, space, then, (process of) time, [phrase] as at other times, [phrase] in trouble, weather, (as) when, (a, the, within a) while (that), [idiom] whole ([phrase] age), (full) year(-ly), [phrase] younger.
**Verified** — Genesis 1:5 "And the evening and the morning were the first day."

> **Interpretation, not lexical data.** The dictionary itself lists both a literal sense
> ("sunrise to sunset... sunset to the next") and a figurative one ("a space of time
> defined by an associated term"), and the KJV gloss list includes "age", "season",
> "process of time", "year". That means the Hebrew word does **not** settle the
> creation-day question. Anyone who claims the lexicon settles it for either side is
> overclaiming; anyone who claims the lexicon rules out a long period is also
> overclaiming. What the lexicon establishes is the range.

### H6754 · צֶלֶם · _tselem_ — image

**Strong's definition** — a phantom, i.e. (figuratively) illusion, resemblance; hence, a representative figure, especially an idol
**Derivation** — from an unused root meaning to shade;
**KJV glosses** — image, vain shew.
**Verified** — Genesis 1:26 "Let us make man in our image, after our likeness"; Genesis 1:27 "in the image of God created he him".

> **Interpretation, not lexical data.** This entry does real work. The word used for
> humanity's relation to God is the same word family used for **idols** — a physical
> representative. Whatever "image" means here, the dictionary puts "representative
> figure" at the centre and "phantom/illusion" at the edge, not the reverse.

### H1823 · דְּמוּת · _demuth_ — likeness

**Strong's definition** — resemblance; concretely, model, shape; adverbially, like
**Derivation** — from H1819 (דָּמָה);
**KJV glosses** — fashion, like (-ness, as), manner, similitude.
**Verified** — Genesis 1:26 "after our likeness".

> **Interpretation, not lexical data.** `tselem` and `demuth` are near-synonyms stacked
> in one clause. Treating them as two distinct technical faculties (say, "image" = reason
> and "likeness" = morality) is a homiletical move, not a lexical one.

### H7287 · רָדָה · _radah_ — dominion

**Strong's definition** — to tread down, i.e. subjugate; specifically, to crumble off
**Derivation** — a primitive root;
**KJV glosses** — (come to, make to) have dominion, prevail against, reign, (bear, make to) rule,(-r, over), take.
**Verified** — Genesis 1:26 "and let them have dominion over the fish of the sea"; Genesis 1:28 "and have dominion over the fish of the sea, and over the fowl of the air".

> **Interpretation, not lexical data.** This is the most contested word in the chapter
> and the most often softened. The dictionary's primary sense is "to tread down, i.e.
> subjugate" and its glosses include "prevail against". A reading of `radah` as gentle
> tending is not what this entry says. Equally, the entry does not say the word means
> "exploit" — "reign" and "rule" are also its glosses, and the object in Genesis 1 is
> the animal creation and the earth, not other people. Both the "domination" and the
> "stewardship" camps routinely overstate what the lexicon gives them.

### H3533 · כָּבַשׁ · _kabash_ — subdue

**Strong's definition** — to tread down; hence, negatively, to disregard; positively, to conquer, subjugate, violate
**Derivation** — a primitive root;
**KJV glosses** — bring into bondage, force, keep under, subdue, bring into subjection.
**Verified** — Genesis 1:28 "and subdue it: and have dominion over the fish of the sea". The reverse map confirms H3533 is one of the words the KJV renders "subdue".

> **Interpretation, not lexical data.** `kabash` is a stronger verb than `radah`, and its
> gloss list is blunt: "bring into bondage, force, keep under". It is used elsewhere of
> military conquest. If you are building a business argument that the creation mandate is
> inherently exploitative, this entry is the strongest evidence available — and it still
> does not get you there, because a command to subdue a thing does not specify the
> disposition of the one doing it. That step is inference.

### H6509 · פָּרָה · _parah_ — fruitful

**Strong's definition** — to bear fruit (literally or figuratively)
**Derivation** — a primitive root;
**KJV glosses** — bear, bring forth (fruit), (be, cause to be, make) fruitful, grow, increase.
**Verified** — Genesis 1:22 "Be fruitful, and multiply, and fill the waters in the seas"; Genesis 1:28 "Be fruitful, and multiply, and replenish the earth".

### H7235 · רָבָה · _rabah_ — multiply

**Strong's definition** — to increase (in whatever respect)
**Derivation** — a primitive root;
**KJV glosses** — (bring in) abundance ([idiom] -antly), [phrase] archer (by mistake for H7232 (רָבַב)), be in authority, bring up, [idiom] continue, enlarge, excel, exceeding(-ly), be full of, (be, make) great(-er, -ly, [idiom] -ness), grow up, heap, increase, be long, (be, give, have, make, use) many (a time), (any, be, give, give the, have) more (in number), (ask, be, be so, gather, over, take, yield) much (greater, more), (make to) multiply, nourish, plenty(-eous), [idiom] process (of time), sore, store, thoroughly, very.
**Verified** — Genesis 1:28 "Be fruitful, and multiply, and replenish the earth".

> **Interpretation, not lexical data.** Note "be in authority" in the gloss list. Growth
> and authority are not opposed in this word's range. Note also the dictionary's own
> caveat about one gloss being "by mistake for H7232" — the KJV's renderings here are
> not a clean semantic map of the Hebrew.

### H4390 · מָלֵא · _male_ — replenish / fill

**Strong's definition** — to fill or (intransitively) be full of, in a wide application (literally and figuratively)
**Derivation** — or מָלָא; (Esther 7:5), a primitive root;
**KJV glosses** — accomplish, confirm, [phrase] consecrate, be at an end, be expired, be fenced, fill, fulfil, (be, become, [idiom] draw, give in, go) full(-ly, -ly set, tale), (over-) flow, fulness, furnish, gather (selves, together), presume, replenish, satisfy, set, space, take a (hand-) full, [phrase] have wholly.
**Verified** — Genesis 1:28 "and replenish the earth"; the reverse map
`english "replenish"` returns **H4390 alone**.

> **Interpretation, not lexical data.** "Replenish" is a false friend of a mild kind —
> modern English reads it as "fill _again_", implying a prior emptying. The Hebrew is
> plain "fill", and the KJV uses the English word "fill" in the same creation account,
> at Genesis 1:22 ("fill the waters in the seas"). The KJV's "replenish" at 1:28 is not
> evidence of a pre-Adamic world.

### H2896 · טוֹב · _tov_ — good

**Strong's definition** — good (as an adjective) in the widest sense; used likewise as a noun, both in the masculine and the feminine, the singular and the plural (good, a good or good thing, a good man or woman; the good, goods or good things, good men or women), also as an adverb (well)
**Derivation** — from H2895 (טוֹב);
**KJV glosses** — beautiful, best, better, bountiful, cheerful, at ease, [idiom] fair (word), (be in) favour, fine, glad, good (deed, -lier, -liest, -ly, -ness, -s), graciously, joyful, kindly, kindness, liketh (best), loving, merry, [idiom] most, pleasant, [phrase] pleaseth, pleasure, precious, prosperity, ready, sweet, wealth, welfare, (be) well(-favoured).
**Verified** — Genesis 1:4 "And God saw the light, that it was good"; Genesis 1:31 "behold, it was very good."

> **Interpretation, not lexical data.** This entry is why "good" in Genesis 1 cannot be
> read as a narrow moral verdict. The dictionary's own gloss list includes "beautiful",
> "prosperity", "wealth", "welfare", "at ease", "fine". The word covers _sound and
> fitting and productive_, across a wide range. A business that treats "good" as only
> ethical compliance, or only as financial return, has each taken half of the word.

### H5315 · נֶפֶשׁ · _nephesh_ — living soul

**Strong's definition** — properly, a breathing creature, i.e. animal of (abstractly) vitality; used very widely in a literal, accommodated or figurative sense (bodily or mental)
**Derivation** — from H5314 (נָפַשׁ);
**KJV glosses** — any, appetite, beast, body, breath, creature, [idiom] dead(-ly), desire, [idiom] (dis-) contented, [idiom] fish, ghost, [phrase] greedy, he, heart(-y), (hath, [idiom] jeopardy of) life ([idiom] in jeopardy), lust, man, me, mind, mortally, one, own, person, pleasure, (her-, him-, my-, thy-) self, them (your) -selves, [phrase] slay, soul, [phrase] tablet, they, thing, ([idiom] she) will, [idiom] would have it.
**Verified** — Genesis 2:7 "and man became a living soul." Note: the reverse map finds
**no** Strong's entry glossed "living soul". The KJV phrase is a translation of a Hebrew
phrase; it is not a dictionary headword.

> **Interpretation, not lexical data.** The dictionary's primary sense is "a breathing
> creature" — the word is used of animals in Genesis 1:20–24 as well as of humans. The
> KJV gloss list spans "soul", "body", "breath", "creature", "person", "appetite",
> "desire", "lust". Greek-influenced readings that treat "soul" as an immaterial
> substance separable from the body are importing a distinction this entry does not
> contain.

---

## Part 2 — Genesis 2

Verified text for the chapter's key verses:

- Genesis 2:5 "And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground."
- Genesis 2:8 "And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed."
- Genesis 2:9 "And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil."
- Genesis 2:15 "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it."
- Genesis 2:16 "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:"
- Genesis 2:18 "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him."
- Genesis 2:24 "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh."

### H5647 · עָבַד · _abad_ — dress / serve

**Strong's definition** — to work (in any sense); by implication, to serve, till, (causatively) enslave, etc.
**Derivation** — a primitive root;
**KJV glosses** — [idiom] be, keep in bondage, be bondmen, bond-service, compel, do, dress, ear, execute, [phrase] husbandman, keep, labour(-ing man, bring to pass, (cause to, make to) serve(-ing, self), (be, become) servant(-s), do (use) service, till(-er), transgress (from margin), (set a) work, be wrought, worshipper,
**Verified** — Genesis 2:15 "to dress it and to keep it"; Genesis 2:5 "and there was not a man to till the ground."

> **Interpretation, not lexical data.** This is one of the highest-value entries in the
> whole lexicon for business reasoning, and the reason is the _unity_ of the gloss list.
> The same Hebrew word covers "work", "serve", "till", "labour", "be bondmen",
> "worshipper". Work, service, and worship are the same verb in this language. That is a
> lexical fact. What follows from it — that a business is a form of service and carries
> a worship question inside it — is inference, but the inference starts from a
> verifiable observation, not from a slogan. Note also the negative end:
> "causatively enslave", "bring into bondage". The word contains both directions.

### H8104 · שָׁמַר · _shamar_ — keep / guard

**Strong's definition** — properly, to hedge about (as with thorns), i.e. guard; generally, to protect, attend to, etc.
**Derivation** — a primitive root;
**KJV glosses** — beward, be circumspect, take heed (to self), keep(-er, self), mark, look narrowly, observe, preserve, regard, reserve, save (self), sure, (that lay) wait (for), watch(-man).
**Verified** — Genesis 2:15 "to dress it and to keep it"; Genesis 3:24 "to keep the way of the tree of life."

> **Interpretation, not lexical data.** The dictionary's image is concrete: "to hedge
> about (as with thorns)". This is not passive keeping — it is the watchman's and the
> guard's word, and the KJV gloss list is all attention ("mark", "look narrowly",
> "take heed", "watch"). Genesis 2:15 assigns both words to one task: `abad` and
> `shamar`, work and guard. The dictionary supports the pair; a management philosophy
> built on the pair is yours to argue for.

### H5828 · עֵזֶר · _ezer_ — help

**Strong's definition** — aid
**Derivation** — from H5826 (עָזַר);
**KJV glosses** — help.
**Verified** — Genesis 2:18 "I will make him an help meet for him."

> **Interpretation, not lexical data.** The entry is two words long: "aid". The KJV's
> "help meet" is not Hebrew _ezer_ plus a Hebrew word for "meet"; "meet" is a separate
> English word meaning "suitable". Do not build on the English two-word phrase. Note
> also that the KJV uses the same English word of God: Psalms 121:2 "My help cometh from
> the LORD, which made heaven and earth." A word the KJV applies both to a wife and to
> God is not a statement about rank. (The tools here cannot confirm the Hebrew behind a
> given occurrence; the _ezer_-of-God link is the conventional concordance reading.)

### H1588 · גַּן · _gan_ — garden

**Strong's definition** — a garden (as fenced)
**Derivation** — from H1598 (גָּנַן);
**KJV glosses** — garden.
**Verified** — Genesis 2:8 "And the LORD God planted a garden eastward in Eden".

> **Interpretation, not lexical data.** "as fenced" is the dictionary's own note, and
> the root H1598 `ganan` is — _"to hedge about, i.e. (generally) protect"_, glossed
> "defend". The word already contains a boundary. A garden in this vocabulary is a
> _protected_ cultivated space, not open wilderness — which is exactly what Genesis
> 2:15's guarded keeping (`shamar`) treats it as.

### H3808 · לֹא · _lo_ — not

**Strong's definition** — not (the simple or abs. negation); by implication, no; often used with other particles
**Derivation** — or לוֹא; or לֹה; (Deuteronomy 3:11), a primitive particle;
**KJV glosses** — [idiom] before, [phrase] or else, ere, [phrase] except, ig(-norant), much, less, nay, neither, never, no((-ne), -r, (-thing)), ([idiom] as though...,(can-), for) not (out of), of nought, otherwise, out of, [phrase] surely, [phrase] as truly as, [phrase] of a truth, [phrase] verily, for want, [phrase] whether, without.
**Verified** — Genesis 2:18 "It is not good that the man should be alone". The pair
H2896 + H3808 is an ordinary negation + adjective: literally "not good".

> **Interpretation, not lexical data.** The pair is the first occurrence of the phrase
> "not good" in the KJV (`search "not good"` returns Genesis 2:18 first), and it is a
> business condition: a single operator with no counterpart. That reading follows from
> the text's plain sense, not from a special meaning of `lo`.

### H398 · אָכַל · _akal_ — eat

**Strong's definition** — to eat (literally or figuratively)
**Derivation** — a primitive root;
**KJV glosses** — [idiom] at all, burn up, consume, devour(-er, up), dine, eat(-er, up), feed (with), food, [idiom] freely, [idiom] in...wise(-deed, plenty), (lay) meat, [idiom] quite.
**Verified** — Genesis 2:16 "Of every tree of the garden thou mayest freely eat". The
reverse map confirms H398 is one of the words the KJV renders "eat".

> **Interpretation, not lexical data.** The KJV's "freely eat" is the infinitive
> absolute construction in Hebrew, a standard intensifier — "you may surely eat".
> "Freely" is an English intensifier, not a term granting unlimited license.

### H1692 · דָּבַק · _davaq_ — cleave

**Strong's definition** — properly, to impinge, i.e. cling or adhere; figuratively, to catch by pursuit
**Derivation** — a primitive root;
**KJV glosses** — abide fast, cleave (fast together), follow close (hard after), be joined (together), keep (fast), overtake, pursue hard, stick, take.
**Verified** — Genesis 2:24 "and shall cleave unto his wife: and they shall be one flesh."

> **Interpretation, not lexical data.** The gloss list is physical and pursued: "abide
> fast", "follow close (hard after)", "pursue hard", "stick". This is adhesion, not
> sentiment. The dictionary gives no support for treating "cleave" here as primarily a
> feeling.

### H1320 · בָּשָׂר · _basar_ — flesh

**Strong's definition** — flesh (from its freshness); by extension, body, person; also (by euphemistically) the pudenda of aman
**Derivation** — from H1319 (בָּשַׂר);
**KJV glosses** — body, (fat, lean) flesh(-ed), kin, (man-) kind, [phrase] nakedness, self, skin.
**Verified** — Genesis 2:24 "and they shall be one flesh."

> **Note on the source text.** The dictionary's definition contains the typographical
> run-on "of aman"; it is copied verbatim from the entry as the tool prints it.

### H259 · אֶחָד · _echad_ — one

**Strong's definition** — properly, united, i.e. one; or (as an ordinal) first
**Derivation** — a numeral from H258 (אָחַד);
**KJV glosses** — a, alike, alone, altogether, and, any(-thing), apiece, a certain, (dai-) ly, each (one), [phrase] eleven, every, few, first, [phrase] highway, a man, once, one, only, other, some, together,
**Verified** — Genesis 2:24 "and they shall be one flesh."

> **Interpretation, not lexical data.** The dictionary's own first gloss is "properly,
> united". That is worth knowing before you argue about whether `echad` must mean a
> strict numerical singularity. This entry says _united_ is the primary sense and
> _first_ is also in range.

---

## Part 3 — Genesis 3

Verified text for the chapter's key verses:

- Genesis 3:1 "Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said unto the woman, Yea, hath God said, Ye shall not eat of every tree of the garden?"
- Genesis 3:4 "And the serpent said unto the woman, Ye shall not surely die:"
- Genesis 3:5 "For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil."
- Genesis 3:6 "And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat."
- Genesis 3:13 "And the woman said, The serpent beguiled me, and I did eat."
- Genesis 3:16 "Unto the woman he said, I will greatly multiply thy sorrow and thy conception; in sorrow thou shalt bring forth children; and thy desire shall be to thy husband, and he shall rule over thee."
- Genesis 3:17 "cursed is the ground for thy sake; in sorrow shalt thou eat of it all the days of thy life;"
- Genesis 3:18 "Thorns also and thistles shall it bring forth to thee; and thou shalt eat the herb of the field;"
- Genesis 3:19 "In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return."
- Genesis 3:21 "Unto Adam also and to his wife did the LORD God make coats of skins, and clothed them."
- Genesis 3:24 "So he drove out the man; and he placed at the east of the garden of Eden Cherubims, and a flaming sword which turned every way, to keep the way of the tree of life."

### H6175 · עָרוּם · _arum_ — subtil

**Strong's definition** — cunning (usually in a bad sense)
**Derivation** — passive participle of H6191 (עָרַם);
**KJV glosses** — crafty, prudent, subtil.
**Verified** — Genesis 3:1 "Now the serpent was more subtil than any beast of the field".

> **Interpretation, not lexical data.** The gloss list contains both "crafty" and
> "prudent" — the same word can be read either way, and the dictionary flags its
> usual sense as bad. "Subtil" in 1611 English meant what "subtle" means today. This
> is a case where the KJV word is not the problem; the Hebrew word's ambivalence is.

### H5175 · נָחָשׁ · _nachash_ — serpent

**Strong's definition** — a snake (from its hiss)
**Derivation** — from H5172 (נָחַשׁ);
**KJV glosses** — serpent.
**Verified** — Genesis 3:1 "Now the serpent was more subtil"; Genesis 3:13 "The serpent beguiled me".

> **Interpretation, not lexical data.** The entry is simply "a snake (from its hiss)".
> The dictionary does not identify this creature with any named spiritual being. Making
> that identification is a theological move drawn from elsewhere in the canon, not from
> this word.

### H5377 · נָשָׁא · _nasha_ — beguiled

**Strong's definition** — to lead astray, i.e. (mentally) to delude, or (morally) to seduce
**Derivation** — a primitive root;
**KJV glosses** — beguile, deceive, [idiom] greatly, [idiom] utterly.
**Verified** — Genesis 3:13 "The serpent beguiled me, and I did eat."; the reverse map
confirms H5377 is one of the words the KJV renders "beguile".

> **Interpretation, not lexical data.** The dictionary splits the sense cleanly:
> mental delusion and moral seduction. The failure mode described in Genesis 3 is
> therefore not ignorance and not merely weakness — the word covers both a false belief
> and a pulled desire. If you are reasoning about how bad decisions get made, this
> entry is about the mechanism, not just the outcome.

### H6093 · עִצָּבוֹן · _itsabon_ — sorrow

**Strong's definition** — worrisomeness, i.e. labor or pain
**Derivation** — from H6087 (עָצַב);
**KJV glosses** — sorrow, toil.
**Verified** — Genesis 3:16 "I will greatly multiply thy sorrow and thy conception; in sorrow thou shalt bring forth children"; Genesis 3:17 "in sorrow shalt thou eat of it all the days of thy life".

> **Interpretation, not lexical data.** The dictionary's first word is
> "worrisomeness", and its range is "labor or pain". The KJV gloss list itself offers
> "toil" alongside "sorrow". The curse on work in 3:17 is therefore described with the
> same word as the pain of childbirth — and the word is as much about grinding effort
> as about grief.

### H6975 · קוֹץ · _qots_ — thorns

**Strong's definition** — a thorn
**Derivation** — or קֹץ; from H6972 (קוּץ) (in the sense of pricking);
**KJV glosses** — thorn.
**Verified** — Genesis 3:18 "Thorns also and thistles shall it bring forth to thee".

### H1863 · דַּרְדַּר · _dardar_ — thistles

**Strong's definition** — a thorn
**Derivation** — of uncertain derivation;
**KJV glosses** — thistle.
**Verified** — Genesis 3:18 "Thorns also and thistles shall it bring forth to thee". The
reverse map shows H1863 is one of three entries the KJV renders "thistle".

> **Interpretation, not lexical data.** The two words are near-duplicates: the
> dictionary defines both as "a thorn". The point of the line is that the ground now
> produces obstruction to the work, not that two distinct botanical categories are in
> view.

### H2188 · זֵעָה · _zeah_ — sweat

**Strong's definition** — perspiration
**Derivation** — from H2111 (זוּעַ) (in the sense of H3154 (יֶזַע));
**KJV glosses** — sweat.
**Verified** — Genesis 3:19 "In the sweat of thy face shalt thou eat bread".

### H8669 · תְּשׁוּקָה · _teshuqah_ — desire

**Strong's definition** — a longing
**Derivation** — from H7783 (שׁוּק) in the original sense of stretching out after;
**KJV glosses** — desire.
**Verified** — Genesis 3:16 "and thy desire shall be to thy husband, and he shall rule over thee."

> **Interpretation, not lexical data.** The dictionary gives "a longing" and nothing
> about direction or control. Three KJV verses are conventionally grouped here because
> the same English word "desire" appears in each: Genesis 3:16 "and thy desire shall be
> to thy husband, and he shall rule over thee"; Genesis 4:7 "And unto thee shall be his
> desire, and thou shalt rule over him"; Song of Solomon 7:10 "I am my beloved's, and
> his desire is toward me." The much-argued reading of 3:16 as "your desire shall be
> _to control_ your husband" is imported from the parallel at Genesis 4:7, where the
> context is about mastery. That is a legitimate exegetical argument, but it is not what
> this entry states, and the entry alone does not settle it. (The tools here cannot
> confirm the Hebrew behind each occurrence; the grouping is the conventional
> concordance link.)

### H4910 · מָשַׁל · _mashal_ — rule

**Strong's definition** — to rule
**Derivation** — a primitive root;
**KJV glosses** — (have, make to have) dominion, governor, [idiom] indeed, reign, (bear, cause to, have) rule(-ing, -r), have power.
**Verified** — Genesis 3:16 "and he shall rule over thee."

> **Interpretation, not lexical data.** The entry is two words: "to rule". Note that
> this is a _different_ verb from `radah` (H7287) and `kabash` (H3533) in Genesis 1.
> The dictionary's gloss list runs "dominion, governor, reign, rule, have power" — a
> governmental range. Whether 3:16 describes a command, a prediction, or a
> consequence is not decided by the word.

### H3801 · כְּתֹנֶת · _kethoneth_ — coats

**Strong's definition** — a shirt
**Derivation** — or כֻּתֹּנֶת; from an unused root meaning to cover (compare H3802 (כָּתֵף));
**KJV glosses** — coat, garment, robe.
**Verified** — Genesis 3:21 "did the LORD God make coats of skins, and clothed them."

> **Interpretation, not lexical data.** The dictionary says "a shirt". This is a
> garment word, used elsewhere of the priestly tunic and of Joseph's coat. Any
> argument built on the _material_ ("skins") needs a sacrifice theology brought in
> from other texts; the word itself is about clothing.

### H3742 · כְּרוּב · _kerub_ — cherubims

**Strong's definition** — a cherub or imaginary figure
**Derivation** — of uncertain derivation;
**KJV glosses** — cherub, (plural) cherubims.
**Verified** — Genesis 3:24 "he placed at the east of the garden of Eden Cherubims".

> **Note on the source text.** The phrase "or imaginary figure" is the dictionary's own
> wording and is worth flagging: the lexicographer is describing a class of
> representation, not asserting non-existence. The Greek dictionary has G5502
> χερουβίμ, which it glosses "cherubims" and derives directly "plural of Hebrew origin
> (H03742)".

### H3858 · לַהַט · _lahat_ — flaming

**Strong's definition** — a blaze; also (from the idea of enwrapping) magic (as covert)
**Derivation** — from H3857 (לָהַט);
**KJV glosses** — flaming, enchantment.
**Verified** — Genesis 3:24 "and a flaming sword which turned every way".

> **Interpretation, not lexical data.** Note that the KJV gloss list pairs "flaming"
> with "enchantment" — the word also appears in Exodus 7:11 of the magicians. The
> dictionary's "blaze" sense and its "magic" sense are separate branches of one root.

### H3978 · מַאֲכָל · _ma'akhal_ — food

**Strong's definition** — an eatable (includ. provender, flesh and fruit)
**Derivation** — from H398 (אָכַל);
**KJV glosses** — food, fruit, (bake-)meat(-s), victual.
**Verified** — Genesis 3:6 "the tree was good for food".

### H2530 · חָמַד · _chamad_ — pleasant / desired

**Strong's definition** — to delight in
**Derivation** — a primitive root;
**KJV glosses** — beauty, greatly beloved, covet, delectable thing, ([idiom] great) delight, desire, goodly, lust, (be) pleasant (thing), precious (thing).
**Verified** — Genesis 3:6 "and that it was pleasant to the eyes, and a tree to be desired to make one wise". The reverse map confirms H2530 is among the words the KJV renders "desire" and "pleasant".

> **Interpretation, not lexical data.** The same verb appears in the tenth commandment
> ("Thou shalt not covet") and in Genesis 2:9 of trees that were good. The dictionary
> lists "delight in" as the core sense, with "covet" and "lust" at one end and
> "beauty", "precious" at the other. The word is not in itself a moral verdict; what
> makes it covetousness is the object and the disposition. Any argument that "desire
> is evil" has to get there from somewhere other than this entry.

### H7919 · שָׂכַל · _sakal_ — make one wise

**Strong's definition** — to be (causatively, make or act) circumspect and hence, intelligent
**Derivation** — a primitive root;
**KJV glosses** — consider, expert, instruct, prosper, (deal) prudent(-ly), (give) skill(-ful), have good success, teach, (have, make to) understand(-ing), wisdom, (be, behave self, consider, make) wise(-ly), guide wittingly.
**Verified** — Genesis 3:6 "a tree to be desired to make one wise".

> **Interpretation, not lexical data.** The gloss list pairs "wisdom" with "prosper",
> "have good success", "skill", "expert". This is practical sagacity, not abstract
> philosophy. Genesis 3 is a story about acquiring that kind of competence on the wrong
> terms. The connection to business reasoning is direct and does not require inventing
> anything: the temptation is competence, and the dictionary says so.

---

## Part 4 — The foundation vocabulary in the New Testament

Greek transliterations here are copied from the dictionary's own `translit` field
(accented as printed there).

### G2310 · themélios · θεμέλιος — foundation

**Strong's definition** — something put down, i.e. a substruction (of a building, etc.), (literally or figuratively)
**Derivation** — from a derivative of G5087 (τίθημι);
**KJV glosses** — foundation
**Verified** — 1 Corinthians 3:11 "For other foundation can no man lay than that is laid, which is Jesus Christ."; Luke 6:48 "and laid the foundation on a rock"; Luke 6:49 "is like a man that without a foundation built an house upon the earth".

> **Interpretation, not lexical data.** The definition is construction language: "something
> put down". Luke 6:48–49 is the vocabulary's own demonstration — same house, two
> foundations, and the difference only appears under load. That is a claim about
> structure, and it transfers to businesses without stretching the word.

### G204 · akrogōniaîos · ἀκρογωνιαῖος — chief corner stone

**Strong's definition** — belonging to the extreme corner
**Derivation** — from G206 (ἄκρον) and G1137 (γωνία);
**KJV glosses** — chief corner
**Verified** — Ephesians 2:20 "Jesus Christ himself being the chief corner stone";
1 Peter 2:6 "Behold, I lay in Sion a chief corner stone, elect, precious".

> **Interpretation, not lexical data.** The etymology is exact: "extreme corner". The
> dictionary says nothing about which structural role the stone plays (capstone,
> keystone, foundation corner). Arguments about load-bearing versus alignment depend on
> the architecture, not on this entry.

### G5287 · hypóstasis · ὑπόστασις — substance

**Strong's definition** — a setting under (support), i.e. (figuratively) concretely, essence, or abstractly, assurance (objectively or subjectively)
**Derivation** — from a compound of G5259 (ὑπό) and G2476 (ἵστημι);
**KJV glosses** — confidence, confident, person, substance
**Verified** — Hebrews 11:1 "Now faith is the substance of things hoped for, the evidence of things not seen."

> **Interpretation, not lexical data.** "A setting under (support)" is literally what
> the word is built to mean — `hypo` (under) + `histemi` (stand). The dictionary then
> splits into "essence" and "assurance". So in Hebrews 11:1 the word can be read as
> either _that which underlies_ or _confident expectation_; the dictionary does not
> choose. Choosing one is interpretation.

### G1650 · élenchos · ἔλεγχος — evidence

**Strong's definition** — proof, conviction
**Derivation** — from G1651 (ἐλέγχω);
**KJV glosses** — evidence, reproof
**Verified** — Hebrews 11:1 "the evidence of things not seen."

> **Interpretation, not lexical data.** Two glosses: "proof" and "conviction". The word
> covers both the thing that convinces and the state of being convinced. Any argument
> about "evidence" in a business or epistemic sense has to say which of the two it means.

### G4747 · stoicheîon · στοιχεῖον — first principles / rudiments

**Strong's definition** — something orderly in arrangement, i.e. (by implication) a serial (basal, fundamental, initial) constituent (literally), proposition (figuratively)
**Derivation** — neuter of a presumed derivative of the base of G4748 (στοιχέω);
**KJV glosses** — element, principle, rudiment
**Verified** — Hebrews 5:12 "ye have need that one teach you again which be the first principles of the oracles of God"; Colossians 2:8 "after the rudiments of the world, and not after Christ"; Galatians 4:9 "how turn ye again to the weak and beggarly elements".

> **Interpretation, not lexical data.** This is the word _first principles_ comes from:
> "a serial (basal, fundamental, initial) constituent". The English phrase "first
> principles" occurs in exactly 1 verse in the KJV (`search "first principles"`), and
> it is the verse above. Note that in both Colossians 2:8 and Galatians 4:9 the word
> carries a negative charge — the "rudiments" being the thing to beware of. The
> dictionary does not licence treating `stoicheion` as automatically good. First
> principles reasoning is the practice of getting to basal constituents; whether a given
> set of them is sound is a separate question.

### G26 · agápē · ἀγάπη — charity / love

**Strong's definition** — love, i.e. affection or benevolence; specially (plural) a love-feast
**Derivation** — from G25 (ἀγαπάω);
**KJV glosses** — (feast of) charity(-ably), dear, love
**Verified** — 1 Corinthians 13:4 "Charity suffereth long, and is kind; charity envieth not"; 1 Corinthians 13:13 "And now abideth faith, hope, charity, these three; but the greatest of these is charity."; the reverse map shows **G26 is the only entry the KJV renders "charity"** — all 24 occurrences in the KJV.

> **Interpretation, not lexical data.** `agapē` is the standard Greek noun for love;
> the KJV chose "charity" in 1 Corinthians 13 because in 1611 "charity" meant
> benevolent love, not handouts. See `kjv-1611.md` §4 — the modern sense of "charity"
> **reverses** the argument. In 1 Corinthians 13:3 "and have not charity... it profiteth
> me nothing", the modern reader hears "if I don't donate to the poor" and gets the
> sentence exactly backwards: the verse says donation without love profits nothing.

### G4102 · pístis · πίστις — faith

**Strong's definition** — persuasion, i.e. credence; moral conviction (of religious truth, or the truthfulness of God or a religious teacher), especially reliance upon Christ for salvation; abstractly, constancy in such profession; by extension, the system of religious (Gospel) truth itself
**Derivation** — from G3982 (πείθω);
**KJV glosses** — assurance, belief, believe, faith, fidelity
**Verified** — Hebrews 11:1 "Now faith is the substance of things hoped for"; Ephesians 2:8 "For by grace are ye saved through faith".

> **Interpretation, not lexical data.** The root is `peitho`, to persuade. The
> dictionary's own primary sense is "persuasion, i.e. credence" and the gloss list
> includes "fidelity" — faithfulness, not only belief. Note that the entry explicitly
> frames it as including "constancy in such profession". So "faith" in this vocabulary
> is not the same as "belief without evidence"; the entry describes persuasion and
> reliability. Arguments that treat faith as the opposite of evidence are arguments
> against a definition this dictionary does not give.

### G1680 · elpís · ἐλπίς — hope

**Strong's definition** — expectation (abstractly or concretely) or confidence
**Derivation** — from a primary (to anticipate, usually with pleasure);
**KJV glosses** — faith, hope
**Verified** — Hebrews 6:19 "Which hope we have as an anchor of the soul, both sure and stedfast".

> **Interpretation, not lexical data.** "Expectation... or confidence", and the KJV
> gloss list includes "faith" — so the KJV does not keep `pistis` and `elpis` strictly
> apart either. Hebrews 6:19 grounds the word in something already secured, which is
> why it can be called an anchor rather than a wish.

### G3670 · homologéō · ὁμολογέω — confess

**Strong's definition** — to assent, i.e. covenant, acknowledge
**Derivation** — from a compound of the base of G3674 (ὁμοῦ) and G3056 (λόγος);
**KJV glosses** — con- (pro-)fess, confession is made, give thanks, promise
**Verified** — Romans 10:9 "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."

> **Interpretation, not lexical data.** The etymology is "same word" — `homou` +
> `logos`. The dictionary's range runs "assent", "covenant", "acknowledge", "promise",
> "give thanks". This is not private opinion; it is saying the same thing, out loud,
> as a binding acknowledgement. That is a specific kind of speech act and it is worth
> distinguishing from merely holding a view.

### G3623 · oikonómos · οἰκονόμος — steward

**Strong's definition** — a house-distributor (i.e. manager), or overseer, i.e. an employee in that capacity; by extension, a fiscal agent (treasurer); figuratively, a preacher (of the Gospel)
**Derivation** — from G3624 (οἶκος) and the base of G3551 (νόμος);
**KJV glosses** — chamberlain, governor, steward
**Verified** — Luke 12:42 "Who then is that faithful and wise steward, whom his lord shall make ruler over his household"; 1 Corinthians 4:1–2 "as of the ministers of Christ, and stewards of the mysteries of God. Moreover it is required in stewards, that a man be found faithful."

> **Interpretation, not lexical data.** The dictionary's own terms are precise:
> "employee", "manager", "fiscal agent (treasurer)". The steward is not the owner.
> 1 Corinthians 4:2 states the requirement in one clause — "found faithful" — and the
> dictionary defines the _job_ (distribute the household's resources) separately from
> the _requirement_ (faithfulness). If you are reasoning about what a manager owes,
> this entry specifies the role and leaves the standard of judgment to the text.

### G5007 · tálanton · τάλαντον — talent

**Strong's definition** — equivalent to G5342 (φέρω)); a balance (as supporting weights), i.e. (by implication) a certain weight (and thence a coin or rather sum of money) or "talent"
**Derivation** — neuter of a presumed derivative of the original form of (to bear; _(the source entry is truncated mid-phrase; copied verbatim as the tool prints it)_
**KJV glosses** — talent
**Verified** — Matthew 25:15 "And unto one he gave five talents, to another two, and to another one"; Matthew 18:24 "one was brought unto him, which owed him ten thousand talents."; 1 Kings 10:14 "Now the weight of gold that came to Solomon in one year was six hundred threescore and six talents of gold,"; Exodus 38:24 "was twenty and nine talents, and seven hundred and thirty shekels,".

> **Interpretation, not lexical data.** This is the clearest example in the whole lexicon
> of a word whose modern meaning was created _by_ a parable rather than preserved by it.
> The dictionary says: a balance, a weight, "a coin or rather sum of money". It says
> nothing about innate ability. See `kjv-1611.md` §4 for the full reversal and §3 for
> the unit conversions.

### G888 · achreîos · ἀχρεῖος — unprofitable

**Strong's definition** — useless, i.e. (euphemistically) unmeritorious
**Derivation** — from G1 (Α) (as a negative particle) and a derivative of G5534 (χρή) (compare G5532 (χρεία));
**KJV glosses** — unprofitable
**Verified** — Luke 17:10 "say, We are unprofitable servants: we have done that which was our duty to do."; Matthew 25:30 "And cast ye the unprofitable servant into outer darkness".

> **Interpretation, not lexical data.** The dictionary gives "useless, i.e.
> (euphemistically) unmeritorious". Luke 17:10 puts the word in the mouth of servants
> who did exactly what they were told and are still called this. That is the opposite
> of an argument for merit-based standing, and it is gerund-level evidence — the word
> is doing the work, not the translator.

### G4103 · pistós · πιστός — faithful

**Strong's definition** — objectively, trustworthy; subjectively, trustful
**Derivation** — from G3982 (πείθω);
**KJV glosses** — believe(-ing, -r), faithful(-ly), sure, true
**Verified** — Luke 12:42 "that faithful and wise steward"; 1 Corinthians 4:2 "it is required in stewards, that a man be found faithful"; Matthew 25:21 "Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things".

> **Interpretation, not lexical data.** Note the dictionary's two-sided structure:
> "objectively, trustworthy; subjectively, trustful". Reliability and reliance are the
> same word. Matthew 25:21 ties promotion directly to it ("over a few things" →
> "over many things"), which is text, not lexicon — but the lexicon tells you the
> quality being tested is trustworthiness, not results.

### G1411 · dýnamis · δύναμις — power

**Strong's definition** — force (literally or figuratively); specially, miraculous power (usually by implication, a miracle itself)
**Derivation** — from G1410 (δύναμαι);
**KJV glosses** — ability, abundance, meaning, might(-ily, -y, -y deed), (worker of) miracle(-s), power, strength, violence, mighty (wonderful) work
**Verified** — Acts 1:8 "But ye shall receive power, after that the Holy Ghost is come upon you"; 1 Corinthians 1:24 "Christ the power of God, and the wisdom of God."

> **Interpretation, not lexical data.** "Force" is the primary sense; the gloss list
> includes "ability", "abundance", "strength", "violence". This is _capacity_, not
> _permission_. The next entry is the other one. English "power" flattens both, and
> that flattening destroys most arguments that use the word.

### G1849 · exousía · ἐξουσία — authority

**Strong's definition** — privilege, i.e. (subjectively) force, capacity, competency, freedom, or (objectively) mastery (concretely, magistrate, superhuman, potentate, token of control), delegated influence
**Derivation** — from G1832 (ἔξεστι) (in the sense of ability);
**KJV glosses** — authority, jurisdiction, liberty, power, right, strength
**Verified** — Matthew 28:18 "All power is given unto me in heaven and in earth."

> **Interpretation, not lexical data.** The definition is unmistakable: "privilege",
> "competency", "freedom", "mastery", "magistrate", "token of control", **"delegated
> influence"**. `exousia` is the right or warrant to act — granted, and therefore
> revocable. `dunamis` (G1411) is the capacity to do it. The dictionary supplies the
> distinction; the application is yours. Note what the tools can and cannot do here:
> they cannot tell you which Greek word stands behind a given English "power", so do not
> assert the tagging. What you can say is that Matthew 28:18 speaks of power that is
> _given_ — "All power is given unto me in heaven and in earth." — and that a warrant
> which is granted is the shape of `exousia` rather than of `dunamis`.

### G3341 · metánoia · μετάνοια — repentance

**Strong's definition** — (subjectively) compunction (for guilt, including reformation); by implication, reversal (of (another's) decision)
**Derivation** — from G3340 (μετανοέω);
**KJV glosses** — repentance
**Verified** — Hebrews 12:17 "he found no place of repentance, though he sought it carefully with tears."

> **Interpretation, not lexical data.** The dictionary includes **"reformation"** and
> **"reversal"** inside the definition, alongside the feeling of compunction. So the
> word is not regret; it is a change of course. In a business context that distinction
> is the difference between an apology and a corrected process.

### G5046 · téleios · τέλειος — perfect / complete

**Strong's definition** — complete (in various applications of labor, growth, mental and moral character, etc.); neuter (as noun, with G3588 (ὁ)) completeness
**Derivation** — from G5056 (τέλος);
**KJV glosses** — of full age, man, perfect
**Verified** — Matthew 5:48 "Be ye therefore perfect, even as your Father which is in heaven is perfect."; James 1:4 "But let patience have her perfect work, that ye may be perfect and entire, wanting nothing."

> **Interpretation, not lexical data.** The dictionary's first gloss is "complete",
> and its derivation is `telos` — end, goal. The KJV gloss list includes "of full age",
> which is maturity language. James 1:4 spells the sense out with three words: "perfect
> and entire, wanting nothing". Arguments that read "perfect" as _flawless_ have
> substituted a modern sense. The word is about reaching the intended end.

### G2758 · kenóō · κενόω — emptied

**Strong's definition** — to make empty, i.e. (figuratively) to abase, neutralize, falsify
**Derivation** — from G2756 (κενός);
**KJV glosses** — make (of none effect, of no reputation, void), be in vain
**Verified** — Philippians 2:7 "But made himself of no reputation, and took upon him the form of a servant"; 2 Corinthians 8:9 "though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich."

> **Interpretation, not lexical data.** The KJV at Philippians 2:7 does not use the word
> "emptied". The gloss list for G2758 contains "make (of none effect, of no reputation,
> void)", and the English phrase "of no reputation" occurs in exactly 1 verse in the KJV
> (`search "of no reputation"`): Philippians 2:7. So the KJV renders `kenoo` there as
> "made himself of no reputation". The widely discussed "kenosis" reading rests on the
> Greek word and on what it normally means ("to make empty", "abase", "neutralize"), not
> on the English of the KJV. If you cite Philippians 2:7 for a claim about self-emptying,
> cite the Greek, and note that the dictionary's range includes "neutralize" and
> "falsify" as well as "empty".

### G5012 · tapeinophrosýnē · ταπεινοφροσύνη — humility

**Strong's definition** — humiliation of mind, i.e. modesty
**Derivation** — from a compound of G5011 (ταπεινός) and the base of G5424 (φρήν);
**KJV glosses** — humbleness of mind, humility (of mind, loneliness (of mind)
**Verified** — 1 Peter 5:5 "be clothed with humility"; Colossians 3:12 "bowels of mercies, kindness, humbleness of mind, meekness, longsuffering"; Acts 20:19 "with all humility of mind"; Colossians 2:18 "a voluntary humility".

> **Note on the source text.** The KJV gloss field's parentheses are unbalanced in the
> source entry ("loneliness (of mind"); it is copied verbatim as printed.

> **Interpretation, not lexical data.** `phren` is the mind — so the compound is
> literally "low-mindedness", a deliberate posture of the mind, not a low estimate of
> oneself. Note Colossians 2:18: the same word appears with "voluntary" and is treated
> as a problem. The word is not self-validating; the dictionary does not tell you when
> lowliness of mind is a virtue and when it is a pose.

### G5485 · cháris · χάρις — grace

**Strong's definition** — graciousness (as gratifying), of manner or act (abstract or concrete; literal, figurative or spiritual; especially the divine influence upon the heart, and its reflection in the life; including gratitude)
**Derivation** — from G5463 (χαίρω);
**KJV glosses** — acceptable, benefit, favour, gift, grace(- ious), joy, liberality, pleasure, thank(-s, -worthy)
**Verified** — Ephesians 2:8 "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God". The reverse map shows G5485 is one of the entries the KJV renders "grace".

> **Interpretation, not lexical data.** The gloss list is unusually wide: "favour",
> "gift", "liberality", "thank(-s)", "joy". The dictionary notes the sense includes
> "gratitude" — grace flows both ways in this word. In business terms, this is closer
> to an unearned grant that creates obligation and gratitude than to a transaction.
> Note that the word does not appear in the dictionary as a commercial term; the
> application to pricing or credit is analogy, and should be labelled as such.

### G4678 · sophía · σοφία — wisdom

**Strong's definition** — wisdom (higher or lower, worldly or spiritual)
**Derivation** — from G4680 (σοφός);
**KJV glosses** — wisdom
**Verified** — 1 Corinthians 1:24 "Christ the power of God, and the wisdom of God."

> **Interpretation, not lexical data.** The definition deliberately refuses to grade
> the word: "higher or lower, worldly or spiritual". The same noun covers both. So
> `sophia` alone cannot be used to claim that a plan is sound; the dictionary does
> not distinguish the good kind from the bad kind.

### G2889 · kósmos · κόσμος — world

**Strong's definition** — orderly arrangement, i.e. decoration; by implication, the world (in a wide or narrow sense, including its inhabitants, literally or figuratively (morally))
**Derivation** — probably from the base of G2865 (κομίζω);
**KJV glosses** — adorning, world
**Verified** — John 3:16 "For God so loved the world"; the reverse map confirms G2889 is among the entries the KJV renders "world".

> **Interpretation, not lexical data.** The primary sense is _order_ — "orderly
> arrangement, decoration". This is the word behind "cosmos" and "cosmetic". When the
> New Testament says "the world", it can mean the ordered system as readily as the
> planet or its population. Treating "the world" as always meaning "humanity" or always
> meaning "evil society" is a choice the dictionary does not make for you.

### G3622 · oikonomía · οἰκονομία — economy / stewardship

**Strong's definition** — administration (of a household or estate); specially, a (religious) "economy"
**Derivation** — from G3623 (οἰκονόμος);
**KJV glosses** — dispensation, stewardship
**Verified** — Luke 16:2 "give an account of thy stewardship; for thou mayest be no longer steward."; 1 Corinthians 9:17 "a dispensation of the gospel is committed unto me."; Ephesians 1:10 "That in the dispensation of the fulness of times"; Colossians 1:25 "according to the dispensation of God which is given to me for you".

> **Interpretation, not lexical data.** This is the direct source of the English word
> _economy_, and the dictionary's definition is the household one: "administration (of
> a household or estate)". The word's four KJV occurrences are all "dispensation",
> which is why the modern English word's meaning is not obvious from the KJV text.
> Note Luke 16:2: stewards are audited and a bad report ends the role. That is the
> text, not the lexicon.

---

## How to use this without overclaiming

1. **A gloss list is not a definition.** The `KJV` field tells you which English words
   the 1611 translators used; it does not tell you what the Hebrew or Greek meant to its
   speakers. H1254 is glossed "cut down" and "dispatch" as well as "create" — the list
   describes the translation, not the concept.
2. **One verse does not fix a word's sense.** Words like H6213 (`asah`), H2896 (`tov`),
   H3117 (`yom`), and G4678 (`sophia`) are extremely wide. Any argument that takes a
   single occurrence and treats it as the meaning has to explain why the other glosses
   in the list do not apply.
3. **Origin stories are usually wrong.** "The word literally means X" is the most
   abused sentence in biblical reasoning. Etymology (`G5287` from `hypo` + `histemi`)
   constrains a word's history, not its usage. Check the gloss list before making an
   etymological claim.
4. **These tools do not tag words to verses.** The KJV text is plain; `scripture.ts`
   cannot tell you which Strong's number sits behind a given English word in a given
   verse. The `english` reverse-map gives you the candidate set for a _gloss_, not a
   verse-level attestation. If a claim needs verse-level tagging, say so and find a
   tagged text.
5. **Lexical evidence constrains; it does not conclude.** The entries above can rule a
   reading _out_ (a modern sense of "talent", "replenish", "charity", or "perfect" will
   not survive contact with the dictionary). They cannot rule a reading _in_. Every
   "therefore" in this document is marked as interpretation, and it should be marked the
   same way in whatever you write.
6. **Keep the two registers separate in your own notes.** Write "H7287 is glossed
   'subjugate'" and "therefore X" as two different sentences, under two different
   headings. The moment they fuse into one sentence, the inference inherits the
   authority of the dictionary and the argument becomes unfalsifiable.
