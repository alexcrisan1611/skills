# The Axioms: Full Derivation

This is the working derivation behind the 34 axioms listed in `SKILL.md`. It is a reference
document, not a devotional. Its job is to make the chain from text to business consequence
inspectable, so that a reader can find the weak link and attack it.

## Method and labels

Four steps, from `scripture-foundations`: **text → observation → axiom → application**. The
observation step is where most "biblical business" writing fails — it jumps from a verse to a
conclusion without saying what is actually happening in the passage.

Every claim below carries one of four labels. The labels are load-bearing; do not strip them.

| Label           | Meaning                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| **Text states** | The passage says this, in these words. Checkable against the KJV.                |
| **Lexical**     | A claim about the underlying Hebrew or Greek, verified against Strong's.         |
| **Inference**   | My reasoning from the text. A fallible reader's move. Disagreeable.              |
| **Speculation** | Beyond what the text and the lexicon will carry. Flagged so it can be discarded. |

Two rules govern everything here:

1. **Applications are inferences, not Scripture.** Genesis states what God did. The business
   consequence is derived by a fallible reader. "Genesis 1 suggests" is honest; "the Bible
   commands you to" is not, unless the text actually commands it.
2. **Verify before inferring.** The KJV is 1611 English. Where a word does argumentative work,
   the underlying Hebrew or Greek was checked. Where the lexicon would not support an
   inference, the inference is not here.

## Quotation conventions

KJV wording is quoted exactly as returned by `scripture.ts`. The source data uses curly
apostrophes; they are rendered here as straight apostrophes. Wording, punctuation, and
capitalisation are otherwise unaltered. Strong's definitions are quoted verbatim from
`lexicon.ts` output, including its own abbreviations (`i.e.`, `etc.`, bracketed KJV renderings).

## A note on what "axiom" means here

These are not axioms in the mathematical sense — self-evident propositions from which
everything else follows deductively. They are _load-bearing observations_: things the text
shows, stated at the level of generality where they stop needing justification, and from which
a decision can be derived. Axioms are for deriving, not for reciting. Quoting A17 is not an
argument for funding maintenance. Showing that A17 governs _this_ maintenance decision, and
what follows from it _here_, is the argument.

---

## Contents

- [Group I — The source and the substrate (A1–A3, Genesis 1:1–2)](#group-i--the-source-and-the-substrate)
  - [A1. All value is derived](#a1-all-value-is-derived)
  - [A2. The default state is formless and empty](#a2-the-default-state-is-formless-and-empty)
  - [A3. Presence precedes production](#a3-presence-precedes-production)
- [Group II — The method of making (A4–A14, Genesis 1:3–31 through 2:1)](#group-ii--the-method-of-making)
  - [A4. Making is by word](#a4-making-is-by-word)
  - [A5. Formation precedes filling](#a5-formation-precedes-filling)
  - [A6. Distinction precedes order](#a6-distinction-precedes-order)
  - [A7. Naming is an act of authority](#a7-naming-is-an-act-of-authority)
  - [A8. Time is a created instrument](#a8-time-is-a-created-instrument)
  - [A9. The maker evaluates the work](#a9-the-maker-evaluates-the-work)
  - [A10. Whole-system review is not the sum of part-reviews](#a10-whole-system-review-is-not-the-sum-of-part-reviews)
  - [A11. Multiplication is commanded, and it reproduces after its kind](#a11-multiplication-is-commanded-and-it-reproduces-after-its-kind)
  - [A12. Dominion is delegated and bounded](#a12-dominion-is-delegated-and-bounded)
  - [A13. Provision precedes assignment](#a13-provision-precedes-assignment)
  - [A14. Completion is a real state](#a14-completion-is-a-real-state)
- [Group III — The rhythm (A15–A21, Genesis 2:1–3, 2:15–25)](#group-iii--the-rhythm)
  - [A15. Work is bounded; rest is structural](#a15-work-is-bounded-rest-is-structural)
  - [A16. Work precedes the fall](#a16-work-precedes-the-fall)
  - [A17. Building and keeping are equal partners](#a17-building-and-keeping-are-equal-partners)
  - [A18. Aloneness is not good](#a18-aloneness-is-not-good)
  - [A19. Doing the work reveals the need](#a19-doing-the-work-reveals-the-need)
  - [A20. Abundance precedes restriction; the boundary is few and stated in advance](#a20-abundance-precedes-restriction-the-boundary-is-few-and-stated-in-advance)
  - [A21. Commitment requires leaving and cleaving](#a21-commitment-requires-leaving-and-cleaving)
- [Group IV — The fracture and how to operate in it (A22–A34, Genesis 3)](#group-iv--the-fracture-and-how-to-operate-in-it)
  - [A22. Trust in the stated word is the first target](#a22-trust-in-the-stated-word-is-the-first-target)
  - [A23. Deception works by denying consequence and promising autonomy](#a23-deception-works-by-denying-consequence-and-promising-autonomy)
  - [A24. Desire runs on three channels](#a24-desire-runs-on-three-channels)
  - [A25. Undisclosed failure produces hiding and blame](#a25-undisclosed-failure-produces-hiding-and-blame)
  - [A26. Diagnose before you judge](#a26-diagnose-before-you-judge)
  - [A27. Friction is structural](#a27-friction-is-structural)
  - [A28. Fruitfulness continues, but delivery costs](#a28-fruitfulness-continues-but-delivery-costs)
  - [A29. Authority gets contested](#a29-authority-gets-contested)
  - [A30. Mortality makes time the binding constraint](#a30-mortality-makes-time-the-binding-constraint)
  - [A31. Recovery is provided, and it costs something that is not you](#a31-recovery-is-provided-and-it-costs-something-that-is-not-you)
  - [A32. Some states must not be allowed to become permanent](#a32-some-states-must-not-be-allowed-to-become-permanent)
  - [A33. Access is guarded, and the guard is a feature](#a33-access-is-guarded-and-the-guard-is-a-feature)
  - [A34. There is a permanent adversary, and the victory is asymmetric](#a34-there-is-a-permanent-adversary-and-the-victory-is-asymmetric)
- [Appendix: verification log](#appendix-verification-log)

---

## Group I — The source and the substrate

Genesis 1:1–2. Three verses that establish who acts, on what, and in what condition the
material starts.

### A1. All value is derived

**Grounding text**

> Genesis 1:1 — "In the beginning God created the heaven and the earth."

**Lexical**

- **H7225 רֵאשִׁית (_reshith_)** — "the first, in place, time, order or rank (specifically, a
  firstfruit)." KJV renders it "beginning, chief(-est), first(-fruits, part, time), principal
  thing." The word carries _firstfruits_, not merely "a starting point" — a first portion that
  stands for and precedes the rest.
- **H1254 בָּרָא (_bara_)** — "(absolutely) to create; (qualified) to cut down (a wood),
  select, feed (as formative processes)." Note that Strong's glosses it as _formative_ work,
  not ex nihilo manufacture — the "out of nothing" idea is a theological inference drawn from
  the passage as a whole, not something this dictionary entry states.
- **H776 אֶרֶץ (_erets_)** — "the earth (at large, or partitively a land)."
- **H8064 שָׁמַיִם (_shamayim_)** — "the sky (as aloft; the dual perhaps alluding to the visible
  arch in which the clouds move, as well as to the higher ether where the celestial bodies
  revolve)."

**Observations**

1. **Text states:** The chapter opens with an actor and a product. There is no account of the
   actor's origin. The universe is the thing made; it is not self-originating.
2. **Text states:** The verb is _create_ — a making, not a discovery or a rearrangement by a
   pre-existing agent. Whatever the material is, it comes into being by decision.
3. **Text states:** Nothing in verses 1–31 credits any created thing with its own existence.
   The heavens, the earth, the light, the plants, the animals, and man are all objects of the
   verb, never its subject.
4. **Text states (structure):** The chapter is a chain of dependencies. Light depends on the
   word (v. 3). Land depends on the gathering of waters (v. 9). Vegetation depends on land
   (v. 11). Man depends on dust and on breath (2:7). Nothing in the account is presented as
   independent.

**Derivation**

_Inference._ If nothing in the account is self-originating, then ownership in the ordinary
commercial sense is a delegated arrangement rather than a natural right. The maker retains
the claim; the holder holds. This is the derivation: **the entity that did not make itself
cannot claim absolute title over itself, and therefore cannot claim absolute title over
anything it holds.**

The text does not say "own nothing." It shows a grant (1:29, "Behold, I have given you…") and
an assignment (2:15, the man is _put_ into the garden). A grant is real — the recipient has
genuine use of it. But a grant is a grant.

The same claim is made explicitly elsewhere, which is why this is an axiom and not an
impression:

> Psalm 24:1 — "The earth is the LORD's, and the fulness thereof; the world, and they that
> dwell therein."

> 1 Chronicles 29:14 — "But who am I, and what is my people, that we should be able to offer so
> willingly after this sort? for all things come of thee, and of thine own have we given thee."

> 1 Corinthians 4:7 — "For who maketh thee to differ from another? and what hast thou that thou
> didst not receive? now if thou didst receive it, why dost thou glory, as if thou hadst not
> received it?"

> Deuteronomy 8:17–18 — "And thou say in thine heart, My power and the might of mine hand hath
> gotten me this wealth. But thou shalt remember the LORD thy God: for it is he that giveth
> thee power to get wealth…"

> James 1:17 — "Every good gift and every perfect gift is from above, and cometh down from the
> Father of lights, with whom is no variableness, neither shadow of turning."

**Business consequences**

- **Ownership is stewardship.** The correct posture toward an asset is responsibility for it,
  not possession of it. This changes what a founder thinks they are doing when they sell a
  company, shut a division, or spend a reserve.
- **Entitlement is a factual error, not merely a vice.** It is not that the entitled founder is
  rude; it is that they have misdescribed the situation, and the misdescription produces
  downstream errors. A person who believes they earned the market they were born into cannot
  see when the market changes, because they have no model in which the market was ever a gift.
- **The "self-made" narrative is expensive.** It removes the feedback loop. If the outcome was
  owed to me, then a bad outcome is owed to someone else. Learning requires the admission that
  the inputs were received.
- **It sets the correct attitude to inheritance, windfall, and luck.** The substrate inventory
  in the procedure (`SKILL.md` step 2) exists because the first thing to get right is what was
  given and not chosen.

**Failure mode when violated**

The failure is not moral grandiosity; it is **inability to learn and inability to be
grateful** — and in organisations, a specific pathology: founders who cannot hear that the
market changed, because their model has no place for the market having been given. The
companion failure is the inverse, and it is just as common: a founder who, having correctly
concluded that everything is received, draws the conclusion that nothing they do matters.
The text supports neither. The man is _put_ in the garden _to work it_ (2:15).

**Extending verses**

- Psalm 115:16 — "The heaven, even the heavens, are the LORD's: but the earth hath he given to
  the children of men." (The grant is real and to men.)
- Deuteronomy 8:11–20 — the full passage: prosperity, then forgetting, then the warning.
- Proverbs 10:22 — "The blessing of the LORD, it maketh rich, and he addeth no sorrow with it."
- Haggai 2:8 — "The silver is mine, and the gold is mine, saith the LORD of hosts."
- Matthew 25:14 — the goods are _delivered_ to servants; see `capital-and-stewardship.md`.

---

### A2. The default state is formless and empty

**Grounding text**

> Genesis 1:2 — "And the earth was without form, and void; and darkness was upon the face of
> the deep. And the Spirit of God moved upon the face of the waters."

**Lexical**

- **H8414 תֹּהוּ (_tohu_)** — "a desolation (of surface), i.e. desert; figuratively, a worthless
  thing; adverbially, in vain." KJV: "confusion, empty place, without form, nothing, (thing of)
  nought, vain, vanity, waste, wilderness."
- **H922 בֹּהוּ (_bohu_)** — "a vacuity, i.e. (superficially) an undistinguishable ruin." KJV:
  "emptiness, void." Note the pairing: _tohu_ is a _desolation of surface_ — a waste; _bohu_ is
  an _undistinguishable_ ruin — formlessness so complete that parts cannot be told apart.
- **H2822 חֹשֶׁךְ (_choshek_)** — "the dark; hence (literally) darkness; figuratively, misery,
  destruction, death, ignorance, sorrow, wickedness."
- **H7307 רוּחַ (_ruach_)** — "wind; by resemblance breath, i.e. a sensible (or even violent)
  exhalation; figuratively, life, anger, unsubstantiality; by extension, a region of the sky; by
  resemblance spirit, but only of a rational being…"

**Observations**

1. **Text states:** Three conditions are named before anything is made: formlessness (_tohu_),
   emptiness (_bohu_), and darkness. They are the description of the starting material.
2. **Text states:** The three conditions are not condemned in this verse. No judgment is passed
   on them. They are simply the state of things.
3. **Text states (sequence):** Order arrives _after_. Light (v. 3), division (v. 4), naming
   (v. 5), and so on, are all subsequent acts. Nothing in the chapter describes order as the
   natural condition that occasionally gets disturbed.
4. **Text states:** The chapter ends with the whole evaluated as "very good" (1:31). So
   formlessness is not evil; it is _unfinished_. The distinction matters and is easy to lose.

**Derivation**

_Inference._ If the unformed state is the starting condition rather than an anomaly, then
**decay is the baseline** and order is the thing that requires input. Every system — a
codebase, a relationship, a margin, a supply chain, a culture — drifts toward disorder unless
something continuously opposes the drift.

This is a claim about _what to expect_, not a command to be pessimistic. The text states the
condition; the business consequence is mine.

The New Testament makes the same claim about the created order in stronger terms:

> Romans 8:20–22 — "For the creature was made subject to vanity, not willingly, but by reason
> of him who hath subjected the same in hope, Because the creature itself also shall be
> delivered from the bondage of corruption into the glorious liberty of the children of God.
> For we know that the whole creation groaneth and travaileth in pain together until now."

> Hebrews 1:10–12 — "And, Thou, Lord, in the beginning hast laid the foundation of the earth;
> and the heavens are the works of thine hands: They shall perish; but thou remainest; and they
> all shall wax old as doth a garment; And as a vesture shalt thou fold them up, and they shall
> be changed: but thou art the same, and thy years shall not fail."

> Isaiah 51:6 — "…for the heavens shall vanish away like smoke, and the earth shall wax old like
> a garment, and they that dwell therein shall die in like manner…"

**Business consequences**

- **Budget for entropy.** Maintenance is not an admission of poor design; it is the cost of
  having a design at all. A plan that assumes a stable baseline is assuming a state the text
  says does not exist.
- **"Unexpected" is usually a category error.** Churn, cost overrun, and delay are not
  surprises if the baseline is decay. Naming the drift rate converts a recurring shock into a
  line item.
- **Freshly created things decay too.** The created order is described as _waxing old_
  (Hebrews 1:11), not as having been badly made. Ageing is not failure.
- **It reframes the "clean slate" instinct.** Reorganisations, rewrites, and relaunches are
  attractive because they reset the disorder. But they reset it to a _different_ starting
  disorder, not to zero, and the drift resumes. The text gives no example of a state that
  stays ordered without continued action.

**Failure mode when violated**

Plans that assume stability. The bill arrives as "unexpected" churn, cost, and delay every
quarter, followed by an explanation that treats each one as a one-off. The organisation
develops a permanent surprise reflex: every miss is a story about a specific bad actor or a
specific unlucky event, and no one ever prices the drift.

**Extending verses**

- Ecclesiastes 10:18 — "By much slothfulness the building decayeth; and through idleness of the
  hands the house droppeth through."
- Proverbs 24:30–34 — the field grown over with thorns, the broken wall, the diagnosis.
- Matthew 7:24–27 — the house on the rock versus the house on the sand; both are tested, and
  the test is the same storm.
- Nehemiah 2:13 — "…and viewed the walls of Jerusalem, which were broken down, and the gates
  thereof were consumed with fire." The wall decayed while nobody was looking.

---

### A3. Presence precedes production

**Grounding text**

> Genesis 1:2 — "…And the Spirit of God moved upon the face of the waters."

**Lexical**

- **H7363 רָחַף (_rachaph_)** — "to brood; by implication, to be relaxed." KJV: "flutter, move,
  shake." The image is of a bird over a nest — _brooding_, not merely travelling. The
  "moved upon" of the KJV is weaker than the dictionary.

**Observations**

1. **Text states (sequence):** The Spirit moves _before_ anything is said. Verse 2 has the
   brooding; verse 3 has the first word. The order is: presence, then speech, then product.
2. **Text states:** The brooding is _upon the face of the waters_ — over the chaotic material,
   not apart from it. It is attention directed at the actual situation, including its
   formlessness.
3. **Text states:** Nothing is produced during the brooding. No output is recorded for it. It
   is an act with no deliverable.
4. **Text states (vocabulary):** The verb is not a planning verb, a commanding verb, or a
   measuring verb. It is a _brooding_ verb — an image of sustained, quiet proximity.

**Derivation**

_Inference._ If attention over the chaos precedes the word that orders it, then **the cheapest
hour in any project is the one spent understanding the situation before acting.** The maker who
speaks first and examines later pays for it in rework.

This is an inference from sequence. The text does not say "examine before acting." It shows an
order of operations and leaves the reader to notice it.

The same shape recurs:

> Psalm 46:10 — "Be still, and know that I am God…" (stillness before knowledge)
> Exodus 33:14 — "And he said, My presence shall go with thee, and I will give thee rest."
> (presence before rest, and rest before the journey)

**Business consequences**

- **Rushing to visible output is the most common way to be slow.** Visible output is
  legible to others; understanding is not. That asymmetry systematically rewards premature
  production.
- **"Discovery" is not a phase you can skip by being senior.** The brooding is what the
  account gives before the first command. Skipping it does not remove the work; it moves the
  work into rework, where it costs more.
- **It argues for a specific budget line.** Time spent reading the codebase, watching the
  customer, reading the contracts, walking the site, and sitting with the data has no artifact.
  It therefore gets cut first. The axiom says it should be protected first.
- **It distinguishes attention from analysis.** Brooding is not a report. It is sustained
  proximity to the material. A dashboard is not the same thing as looking.

**Failure mode when violated**

Rework — the most expensive form of labour, because it is the only kind that pays twice for
the same result. Second-order failure: teams learn that the way to be rewarded is to produce
something, so they produce something before they understand the problem, and the organisation
becomes efficient at building the wrong thing.

**Extending verses**

- Proverbs 18:13 — "He that answereth a matter before he heareth it, it is folly and shame unto
  him."
- Proverbs 18:17 — "He that is first in his own cause seemeth just; but his neighbour cometh
  and searcheth him."
- Luke 14:28 — "For which of you, intending to build a tower, sitteth not down first, and
  counteth the cost, whether he have sufficient to finish it?" (Sitting down _first_ is the
  same sequence.)
- Nehemiah 2:12–16 — the night reconnaissance before the public announcement.

---

## Group II — The method of making

Genesis 1:3–31 through 2:1. Eleven axioms on how the work is done. This group carries the most
business weight, because it is the only place in Scripture where a complete production process
is shown end to end with its sequence intact.

### A4. Making is by word

**Grounding text**

> Genesis 1:3 — "And God said, Let there be light: and there was light."

**Text states (repetition, verified by search):** The phrase "And God said" occurs **ten times**
in Genesis 1 — verses 3, 6, 9, 11, 14, 20, 24, 26, 28, 29. Ten instances, one chapter. In a
chapter with no other repeated formula at that density, the repetition is the author marking
what to notice.

**Observations**

1. **Text states (sequence):** In every case the speech precedes the result. "And God said, Let
   there be…" then "…and there was." Never the reverse.
2. **Text states:** The speech is _specification_, not persuasion. It does not argue with the
   darkness or negotiate with the waters. It states what shall be.
3. **Text states:** The speech is addressed to no one in particular. It is not a request, a
   prayer, or a command to a subordinate. It is a declaration of what will be.
4. **Text states (result):** The result matches the specification. There is no gap in the
   chapter between what was said and what appeared — "and it was so" recurs as the confirmation
   formula (vv. 7, 9, 11, 15, 24, 30).
5. **Text states (vocabulary, John 1):** The New Testament identifies the word as a person and
   as the agent of creation: "All things were made by him; and without him was not any thing
   made that was made" (John 1:3).

**Derivation**

_Inference._ If specification precedes manifestation in every instance, then **the quality of
the output is bounded by the clarity of the specification.** You cannot produce more precision
than you specified. Briefs, specs, contracts, promises, and names are production tools, not
paperwork.

The chain is tight: an unclear word is not a soft problem. It _guarantees_ an unclear result,
because the result is generated from the word. There is no other input described.

**Business consequences**

- **Ambiguity in the brief is not resolved downstream; it is amplified.** Each person who reads
  an unclear spec supplies their own reading. Three readers produce three products.
- **Contracts, scopes, and definitions are manufacturing equipment.** They belong in the
  budget alongside the tools. A team that treats a spec as overhead is treating the mould as
  overhead while pouring metal.
- **"Let there be" is a test of specificity.** A useful spec can be checked: what would count as
  _it was so_? If nothing observable would confirm or falsify the brief, it is not a spec.
- **Naming things in advance is part of this.** A7 develops it; the point here is that the word
  is the instrument.

**Failure mode when violated**

Rework. The anti-pattern table in `SKILL.md` names it: "Specifying by implication → rework —
the most expensive form of labour." The second-order failure is worse: organisations that
chronically under-specify learn to treat rework as normal, and then cannot estimate anything.

**Extending verses**

- Psalm 33:9 — "For he spake, and it was done; he commanded, and it stood fast."
- Isaiah 55:10–11 — "…So shall my word be that goeth forth out of my mouth: it shall not return
  unto me void, but it shall accomplish that which I please, and it shall prosper in the thing
  whereto I sent it."
- Hebrews 11:3 — "Through faith we understand that the worlds were framed by the word of God…"
- Proverbs 18:21 — "Death and life are in the power of the tongue: and they that love it shall
  eat the fruit thereof."
- Proverbs 30:5–6 — "Every word of God is pure… Add thou not unto his words, lest he reprove
  thee, and thou be found a liar." (The specification is not to be edited by the implementer.)
- John 1:1–3 — the word as person and agent.

---

### A5. Formation precedes filling

This axiom gets the longest treatment in this file, because the two-pass structure is the
single most transferable thing in Genesis 1 and the easiest to get wrong.

**Grounding text**

> Genesis 1:3–31 — the six days of work, in order.

**Text states (the structure, laid out)**

| Day | Forming (days 1–3)                                               | Text   | Filling (days 4–6)                                         | Text    |
| --- | ---------------------------------------------------------------- | ------ | ---------------------------------------------------------- | ------- |
| 1   | Light divided from darkness; day and night named                 | 1:3–5  | Lights placed to rule day and night                        | 1:14–19 |
| 2   | Firmament made, dividing waters above from waters below          | 1:6–8  | Fish filling the waters; fowl flying in the open firmament | 1:20–23 |
| 3   | Dry land made to appear; seas gathered; vegetation brought forth | 1:9–13 | Land animals and man; the herbs and trees given for meat   | 1:24–31 |

**Observations**

1. **Text states:** Days 1–3 each establish a _domain_ and its boundaries. The verbs are
   dividing verbs: "divided the light from the darkness" (1:4), "let it divide the waters from
   the waters" (1:6), "let the waters under the heaven be gathered together unto one place, and
   let the dry land appear" (1:9). **Text states (search, verified):** the root for
   divide/divided appears five times in Genesis 1 — verses 4, 6, 7, 14, 18 — and four of the
   five are in the forming days.
2. **Text states:** Days 4–6 each _populate_ a domain established earlier. The verbs are
   filling verbs: "let there be lights" (1:14), "let the waters bring forth abundantly" (1:20),
   "let the earth bring forth the living creature" (1:24).
3. **Text states (correspondence):** The pairing is one-to-one and in order. Day 4 fills day 1
   (lights rule the day and night that were divided on day 1 — 1:16, 18). Day 5 fills day 2
   (fowl fly "in the open firmament" — the exact domain named on day 2 — 1:20; creatures fill
   the waters that were divided). Day 6 fills day 3 (land animals and man on the dry land that
   appeared; and their food is the herbs and trees that day 3 brought forth — 1:29–30).
4. **Text states (the end):** Only after both passes is the whole called "very good" (1:31).
   Each pass was called good in its parts; the _very_ good attaches to the completed assembly.
5. **Text states (the one wrinkle, stated honestly):** Day 3 includes vegetation — which is
   arguably _contents_, not _container_. The pattern is not perfectly clean at that point. Two
   readings are available: (a) the vegetation is part of the land's forming, since it is what
   the land characteristically brings forth and it is the provision the day-6 occupants eat;
   (b) the pattern is a strong tendency rather than a rigid scheme. Faithful readers differ.
   I hold (a), and I flag that it is a reading, not a statement.

**Derivation**

_Inference._ If the domains are established before the occupants, then **structure first,
contents second — two passes, not one.** Build the container before the contents. Platform
before features. Roles before people. Chart of accounts before spending. Outline before prose.

The derivation rests on the correspondence, which is the argument. The order of the days is not
incidental; the author took care to line them up. A reader who accepts the correspondence has
to reckon with the claim that filling-before-forming is a category error, not merely a
sequencing preference.

Scripture states the same shape a second time, in a book of practical wisdom:

> Proverbs 24:3–4 — "Through wisdom is an house builded; and by understanding it is
> established: And by knowledge shall the chambers be filled with all precious and pleasant
> riches."

Three verbs, three stages: **built → established → filled.** The KJV uses "builded" for the
first and "established" for the second, and only then does filling happen. This is the same
two-pass shape stated as a proverb, which is the strongest form of corroboration available
short of a command.

**Business consequences**

- **Filling before forming does not produce a full thing — it produces clutter.** This is the
  axiom's sharpest claim and it is worth stating plainly. Clutter is not a partial version of
  order; it is a distinct state that is _harder to fix than emptiness_. An empty directory is
  trivially organised. A directory with four hundred badly-named files is a project.
- **The container is usually cheap and invisible.** Schema, chart of accounts, information
  architecture, role definitions, the outline. None of these produce a demo. All of them
  determine what can be demoed later.
- **It is the diagnosis for a specific class of stuck company.** A company with many features
  and no platform, many hires and no roles, many products and no portfolio logic, is not
  "further along" than an empty one. It is in the clutter state, and the work of forming still
  has to be done — now against resistance, because the contents are already committed.
- **It applies to the second pass too.** The filling pass has its own discipline: it fills _the
  domains that were formed_, in the order they were formed. Day 4 does not fill day 3's land
  with lights.

**Failure mode when violated**

Clutter — and then, specifically, **features that cannot be evaluated**, because there is no
domain in which to judge whether they fit. The anti-pattern table lists this directly:
"Filling before forming → clutter; features that cannot be evaluated."

A second failure is subtler and worth naming: a team that has never built a container does not
know that containers are buildable. It experiences every structural problem as an unavoidable
property of the world.

**Extending verses**

- Exodus 25:9 — "According to all that I shew thee, after the pattern of the tabernacle, and
  the pattern of all the instruments thereof, even so shall ye make it." (The pattern precedes
  the making.)
- Hebrews 8:5 — "…for, See, saith he, that thou make all things according to the pattern shewed
  to thee in the mount."
- Proverbs 24:27 — "Prepare thy work without, and make it fit for thyself in the field; and
  afterwards build thine house." (Preparation before building, in a farming frame.)
- Luke 14:28–30 — the tower: the counting comes before the laying of the foundation, and the
  failure is specifically a _foundation laid without the means to finish_.
- Nehemiah 3 — the wall is assigned _by section_ before anyone builds. The divisions exist
  before the work does.

---

### A6. Distinction precedes order

**Grounding text**

> Genesis 1:4 — "And God saw the light, that it was good: and God divided the light from the
> darkness."

**Observations**

1. **Text states:** The division happens _after_ the evaluation of the light and _before_ the
   naming. Sequence: made → judged good → divided → named.
2. **Text states:** What is divided is not light-and-nothing but light-and-darkness. Both
   terms are needed. The division is between two things, not between a thing and its absence.
3. **Text states (search, verified):** "Divide/divided" recurs through the chapter — 1:4, 6, 7,
   14, 18. Boundaries are a repeated instrument, not a one-off act.
4. **Text states:** The division is a _making_ of a boundary, not a discovery of one that
   already existed. "God divided" — an act.

**Derivation**

_Inference._ If things become definable when separated from what they are not, then **meaning
requires boundaries**. You must be able to say what something is _not_.

The negative space is the argument. Light was already "good" in verse 4 before the division;
what the division adds is _definability_. Before it, there is light and darkness; after it,
there is Day and Night (v. 5). The category exists only on the far side of the cut.

**Business consequences**

- **Scope, segment, and positioning are acts of division.** They are not descriptions of
  existing categories; they are the cuts that create categories.
- **A category that has not been divided has no meaning.** "We serve businesses" is not a
  segment. "We serve multi-site veterinary practices with 3–20 locations" is a segment, and its
  meaning comes from what it excludes.
- **A business that will not say "no" has not said "yes" to anything.** This is the operational
  form of the axiom. The customer you refuse defines the customer you serve.
- **Boundary work is senior work.** It is the one thing that cannot be delegated downward,
  because it is the definition of what the organisation is. This is why the anti-pattern table
  pairs "growth with no stated boundary" with A6 and A20 together.

**Failure mode when violated**

Scope explosion, followed by an inability to say what the business is. The bill arrives
concretely: sales cannot qualify, product cannot prioritise, and hiring cannot specify, because
there is no shared cut to reason from. The anti-pattern table: "Growth with no stated boundary →
scope explosion; you can no longer say what you are."

**Extending verses**

- Leviticus 10:10 — "And that ye may put difference between holy and unholy, and between
  unclean and clean." (Distinction as a _duty_ of the priest.)
- Ezekiel 22:26 — the failure: "they have put no difference between the holy and profane,
  neither have they shewed difference between the unclean and the clean." The failure to divide
  is described as a violation, and its consequence is that the holy is profaned.
- 2 Corinthians 6:14–17 — "Be ye not unequally yoked together with unbelievers: for what
  fellowship hath righteousness with unrighteousness? and what communion hath light with
  darkness?" A series of _divisions_ used to define a boundary.
- Genesis 1:6–7 — the firmament dividing waters from waters: a boundary inside a single
  substance, not merely between two obvious ones.

---

### A7. Naming is an act of authority

**Grounding text**

> Genesis 1:5 — "And God called the light Day, and the darkness he called Night. And the
> evening and the morning were the first day."

**Observations**

1. **Text states:** The maker names what he has made. He does not ask the light what it is
   called.
2. **Text states (repetition):** Naming recurs at every forming step: Day and Night (1:5),
   Heaven (1:8), Earth and Seas (1:10). Naming is part of the forming pass, not an appendix.
3. **Text states:** The name sticks. There is no subsequent revision. Day and Night are still
   Day and Night at the end of the chapter and through the rest of Scripture.
4. **Text states (Genesis 2):** The pattern is _delegated_ to man: "whatsoever Adam called
   every living creature, that was the name thereof" (2:19). Authority to name is granted, not
   retained exclusively.

**Derivation**

_Inference._ If naming is how the maker establishes what a thing is, then **names are
decisions, not labels.** Whoever names the category defines the terms of competition within it.

The delegation in 2:19 is the sharp part. The text states that Adam's names stand — not that
they were provisional or subject to review. Naming authority is real authority.

**Business consequences**

- **The namer of the category sets the terms.** If you define "spend management software," you
  have decided what the comparison set is, and therefore what you are compared on.
- **Metric definitions are naming acts.** "Active user," "churn," "gross margin," "on-time."
  Each definition silently sets what people believe is true, and each one is a decision made by
  someone. Most organisations have several conflicting definitions running at once, which is a
  failure to exercise the authority rather than a shortage of authority.
- **Role titles are naming acts.** What a role is called determines what candidates think they
  are applying for and what incumbents think they are permitted to do.
- **Renaming is expensive because it means re-founding.** A rename is not a change of label; it
  is a change of what the thing is, and the old name keeps its claims alive in contracts,
  habits, and data.

**Failure mode when violated**

The failure is not having bad names; it is **having no one responsible for names.** The bill
arrives as definitional drift: three teams report three different churn numbers, a rebrand is
undertaken to fix a positioning problem that was actually a naming problem, and nobody can
answer "what business are we in?" with a sentence everyone accepts.

**Extending verses**

- Genesis 2:19–20 — naming delegated to the man, and the names stand.
- Genesis 17:5 — "Neither shall thy name any more be called Abram, but thy name shall be
  Abraham; for a father of many nations have I made thee." The name carries the identity.
- Genesis 32:28 — "Thy name shall be called no more Jacob, but Israel…" Renaming marks a
  re-founding.
- Matthew 16:18 — "…thou art Peter, and upon this rock I will build my church…" The name is
  given with the assignment.
- Revelation 2:17 — "…and will give him a white stone, and in the stone a new name written,
  which no man knoweth saving he that receiveth it."

---

### A8. Time is a created instrument

**Grounding text**

> Genesis 1:14 — "And God said, Let there be lights in the firmament of the heaven to divide the
> day from the night; and let them be for signs, and for seasons, and for days, and years."

**Lexical**

- **H4150 מוֹעֵד (_moed_)** — "properly, an appointment, i.e. a fixed time or season;
  specifically, a festival; conventionally a year; by implication, an assembly (as convened for
  a definite purpose); technically the congregation; by extension, the place of meeting; also a
  signal (as appointed beforehand)." Rendered here as "seasons." Note the compound: an
  _appointment_, a _signal appointed beforehand_, and an _assembly_ are the same word. A season
  is a scheduled meeting, not merely a stretch of weather.
- **H216 אוֹר (_or_)** — "illumination or (concrete) luminary (in every sense, including
  lightning, happiness, etc.)"
- **H3117 יוֹם (_yom_)** — "a day (as the warm hours), whether literal (from sunrise to sunset,
  or from one sunset to the next), or figurative (a space of time defined by an associated
  term)." Note the second half of the definition: a _space of time defined by an associated
  term_. The unit is not fixed by nature; it is defined by what it is attached to.

**Observations**

1. **Text states:** The lights are made, and they are made _for_ something. They are
   instruments with stated purposes.
2. **Text states:** The purposes are enumerated: signs, seasons, days, years. All four are
   _measurement_ functions.
3. **Text states:** The instruments are created on day 4, _after_ the day-and-night division on
   day 1 and after three days have already been counted. Time was being reckoned before the
   clock was installed.
4. **Text states (the counting formula):** "And the evening and the morning were the Nth day" —
   **six times**, verified by search (1:5, 8, 13, 19, 23, 31). The day is counted by a formula,
   not observed from the sky.

**Derivation**

_Inference._ If calendars, cycles, and seasons are _made things_ given for a purpose, then
**cadence is a design choice, not a natural fact.** Review rhythm, release rhythm, planning
horizon, and the fiscal year are instruments you get to shape.

Observation 3 is the argument for this. Time was being counted on days 1–3 by a formula,
before the sun and moon existed to define it. The formula is a convention that the maker
established. If the reckoning of days is conventional at the very origin of the world, then the
reckoning of quarters and sprints plainly is too.

**Business consequences**

- **A business with no cadence has no memory and no rhythm of correction.** Cadence is what
  makes review possible: without a fixed interval, there is no point at which anyone is
  obligated to look.
- **The instruments are chosen, so they can be chosen badly.** An annual planning cycle in a
  market that moves monthly is a badly chosen instrument, not bad luck.
- **Different clocks for different things.** Weekly for delivery, monthly for cash, quarterly
  for strategy, annually for the covenant. Genesis 1 has one day-unit; it does not follow that
  every business process needs the same one.
- **"Seasons" are appointments.** The _moed_ definition includes "an assembly (as convened for
  a definite purpose)." A season in the business sense is a meeting that has been scheduled in
  advance, which is why the axiom connects to A20 (state the boundary before the pressure).

**Failure mode when violated**

No rhythm of correction. Problems accumulate silently between the rare moments when anyone
looks. The anti-pattern table's entry is adjacent rather than direct — "A plan with no stopping
rule → endless projects, no learning, no exit" — and the mechanism is the same: without a
cadence, there is no scheduled moment at which a decision can be revisited.

**Extending verses**

- Genesis 8:22 — "While the earth remaineth, seedtime and harvest, and cold and heat, and
  summer and winter, and day and night shall not cease." (See `trends-and-timing.md`.)
- Psalm 104:19 — "He appointed the moon for seasons: the sun knoweth his going down."
- Ecclesiastes 3:1 — "To every thing there is a season, and a time to every purpose under the
  heaven."
- Exodus 20:8–11 — the sabbath command is explicitly grounded in the creation week's rhythm.
- Galatians 4:4 — "But when the fulness of the time was come, God sent forth his Son…" The
  timing is a chosen instrument, not an accident.
- Daniel 2:21 — "And he changeth the times and the seasons: he removeth kings, and setteth up
  kings…"

---

### A9. The maker evaluates the work

**Grounding text**

> Genesis 1:4 — "And God saw the light, that it was good."

**Text states (repetition, verified by search):** "God saw … good" occurs **seven times** in
Genesis 1 — verses 4, 10, 12, 18, 21, 25, and 31. The seventh is different: "And God saw every
thing that he had made, and, behold, it was very good."

**Lexical**

- **H2896 טוֹב (_towb_)** — "good (as an adjective) in the widest sense; used likewise as a
  noun… also as an adverb (well)." KJV: "beautiful, best, better, bountiful, cheerful, at ease,
  fair (word), favour, fine, glad, good… pleasant, precious, prosperity, ready, sweet, wealth,
  welfare, (be) well(-favoured)."
- Note what _towb_ covers. It is not "morally correct" alone. It includes _beautiful_, _fit_,
  _pleasant_, _ready_. **Inference:** the evaluation being performed is not only an ethical
  audit; it is also an aesthetic and a fitness judgment.

**Observations**

1. **Text states (structure):** The evaluation is _interior_ to the making. It is not a phase
   after the six days; it recurs inside them.
2. **Text states:** The evaluator is the maker. Not a customer, not a committee, not a
   downstream consumer. The person who made it judges it.
3. **Text states:** The judgment is made _against an intention_, not against a benchmark. "That
   it was good" — good for what it was for. The lights were made for signs, seasons, days, and
   years (v. 14), and they are judged in relation to that.
4. **Text states:** The judgment is repeated. Each day's work gets its own assessment. The
   maker does not save up judgment for the end.
5. **Text states:** The judgment is _stated_. It is recorded. It is not an unspoken impression.

**Derivation**

_Inference._ If evaluation is interior, repeated, and performed by the maker against an
intention, then **judgment is part of production, and taste is a deliverable.**

The strongest form of the derivation: the person who builds without assessing is not building —
they are accumulating. Accumulation and production differ precisely in whether anything has
been judged. A pile of work is not a product until someone says "that is good" and means
something by it.

**Business consequences**

- **Build the assessment into the act.** If review happens only at the end, the maker is
  building blind for the whole duration.
- **Taste is a hire criterion and a trainable skill.** Because _towb_ includes _beautiful_ and
  _fit_, the evaluation includes whether the thing is well-made, not only whether it is
  functional. An organisation that can only judge function will ship things that work and are
  hated.
- **"Who judges, and against what intention?" is a required question.** `SKILL.md` step 9.
  Without a stated intention, "good" is unanswerable.
- **Self-assessment does not remove external assessment.** The maker judges here, but the
  customer also judges later, and the two can disagree. The axiom says judgment belongs inside
  the process; it does not say the maker's judgment is final.

**Failure mode when violated**

Accumulation without assessment. Work ships because it is finished, not because it is good.
The bill arrives as a portfolio of features nobody would defend individually, and as a team
that has no vocabulary for saying a thing is badly made.

**Extending verses**

- 1 Timothy 4:4 — "For every creature of God is good, and nothing to be refused, if it be
  received with thanksgiving."
- 1 Corinthians 11:28 — "But let a man examine himself…" (Examination as a prerequisite to
  participation.)
- 2 Corinthians 13:5 — "Examine yourselves, whether ye be in the faith; prove your own selves."
- 1 Corinthians 9:24–27 — the runner, the wrestler, and the discipline of self-assessment:
  "But I keep under my body, and bring it into subjection: lest that by any means, when I have
  preached to others, I myself should be a castaway."

---

### A10. Whole-system review is not the sum of part-reviews

**Grounding text**

> Genesis 1:31 — "And God saw every thing that he had made, and, behold, it was very good. And
> the evening and the morning were the sixth day."

**Observations**

1. **Text states (the asymmetry):** The parts are called **good**. Only the whole is called
   **very good**. The intensifier is applied exactly once, and it is applied to the assembly.
2. **Text states:** The object of the final evaluation is "every thing that he had made" — the
   complete set, not a sample and not a sum.
3. **Text states:** The final evaluation comes _after_ the last item is made. It is not
   interleaved; it is a distinct act at the end of the sequence.
4. **Text states (the counting formula):** The sixth day is counted _after_ the whole is
   evaluated. The completion of the work and the evaluation of the work happen before the day
   closes.
5. **Text states:** Nothing in the chapter tells us how the parts compose. The chapter shows
   parts judged good, then the whole judged very good — and does not claim that the second
   follows from the first.

**Derivation**

_Inference._ If the whole receives an evaluation that no part received, then **local
correctness can compose into a global failure.** Seven good parts can make one bad product.

Observation 5 is the load-bearing one. The text does not say the whole is very good _because_
the parts were good. It says the maker looked at everything and pronounced a different verdict.
That leaves the possibility open that a set of individually-good parts composes badly — and the
existence of a separate whole-system review is evidence that the maker did not assume
otherwise.

**Business consequences**

- **Review the assembly, not just the components.** End-to-end testing, integrated P&L,
  portfolio-level review, the whole customer journey.
- **"Every part passed" is not a shipping criterion.** Each component can meet its spec while
  the product is unusable: the API is fast, the UI is clear, and the two disagree about what a
  customer is.
- **Someone must own the whole.** Component owners will not, by construction, notice composition
  failures, because a composition failure is invisible from inside a component.
- **It justifies the expensive review.** Whole-system review costs more per unit of coverage
  than part review. The axiom says it is not redundant, which is the argument that pays for it.

**Failure mode when violated**

The anti-pattern table gives the shape: a portfolio of locally-correct things that no one can
use. The bill arrives as integration cost discovered late, and as a specific form of executive
frustration — every team reports green and the product does not work.

**Extending verses**

- 1 Corinthians 12:12–27 — the body: "If the whole body were an eye, where were the hearing?"
  and "the eye cannot say unto the hand, I have no need of thee." Parts that are each
  functioning do not automatically form a working body.
- Ephesians 4:16 — "From whom the whole body fitly joined together and compacted by that which
  every joint supplieth, according to the effectual working in the measure of every part, maketh
  increase of the body…" Note "fitly joined together" — a joining that is separate from the
  parts' own function.
- James 2:10 — "For whosoever shall keep the whole law, and yet offend in one point, he is
  guilty of all." The whole is not the sum.
- 1 Corinthians 3:13 — "Every man's work shall be made manifest: for the day shall declare it,
  because it shall be revealed by fire; and the fire shall try every man's work of what sort it
  is." Note _what sort it is_ — a whole-thing judgment.

---

### A11. Multiplication is commanded, and it reproduces after its kind

**Grounding text**

> Genesis 1:28 — "And God blessed them, and God said unto them, Be fruitful, and multiply, and
> replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the
> fowl of the air, and over every living thing that moveth upon the earth."

**Text states (the "after his kind" formula, verified):** The phrase recurs at 1:11–12 (the herb
and the fruit tree, twice), 1:21 (the sea creatures and the fowl), and 1:24–25 (the living
creature, the beast, the cattle, and the creeping thing — twice). Seven occurrences of the
formula in the chapter.

**Lexical**

- **H4390 מָלֵא (_male_)** — "to fill or (intransitively) be full of, in a wide application
  (literally and figuratively)." Rendered "replenish."
- **H3533 כָּבַשׁ (_kabash_)** — "to tread down; hence, negatively, to disregard; positively, to
  conquer, subjugate, violate." KJV: "bring into bondage, force, keep under, subdue, bring into
  subjection."
- **H7287 רָדָה (_radah_)** — "to tread down, i.e. subjugate; specifically, to crumble off."

**Observations**

1. **Text states:** Multiplication is _commanded_. It is in the imperative. "Be fruitful, and
   multiply."
2. **Text states:** It is commanded _with a blessing attached_: "And God blessed them, and God
   said unto them…" The command and the blessing are given in the same breath.
3. **Text states (the kind formula):** What is planted determines what comes up. "Whose seed is
   in itself… after his kind." The seed carries the species.
4. **Text states:** The mechanism is _internal_ — the seed is _in itself_. Reproduction is a
   property of the thing that reproduces, not an external process applied to it.
5. **Text states:** The command is given to plants (1:11), to sea creatures and fowl (1:22), and
   to man (1:28). It is a property of created life generally, not a special instruction to
   humanity.

**Derivation**

_Inference._ Two conclusions, and they are separate.

**First: growth is intrinsic to the design.** A business that does not reproduce is not being
prudent; it is failing a mandate. The command is not "grow if conditions permit." It is
"multiply."

**Second: what you plant is what you get.** Because the seed is _in itself_ and the yield is
_after his kind_, culture, standards, and character replicate in hires and subsidiaries with
high fidelity. You cannot scale a thing you would not want more of.

The second conclusion is the operationally important one. It says growth is not neutral with
respect to quality: scaling a bad process produces a bad process at scale, faithfully. The
"after his kind" formula is the reason.

**Business consequences**

- **Growth is a mandate, not an option.** This does not mean growth at any cost or growth in any
  direction — A6 and A20 constrain the _what_. It means a business with no reproduction
  mechanism is incomplete by design, not merely unambitious.
- **Audit what replicates before you replicate it.** Culture, hiring bar, code quality,
  customer expectations, pricing discipline. These are seeds.
- **Franchises, subsidiaries, and second products are fidelity tests.** Whatever the parent
  does will be reproduced, including the things the parent does not want reproduced.
- **The seed is internal.** You cannot outsource the property of reproducing. A growth strategy
  that depends on an external agent to do the reproducing is not the same thing as a business
  that reproduces.

**Failure mode when violated**

Culture rot, replicated faithfully at scale — the anti-pattern table's entry. The bill arrives
as a company that has grown and become a worse version of itself in exactly the ways its
founders would have recognised, and did not act on, at ten people.

The inverse failure is worth naming: refusing to multiply because the thing being multiplied is
not yet perfect. The text commands multiplication of things that will need to be _subdued_
(v. 28) and that will later fall. Perfection is not the precondition.

**Extending verses**

- Genesis 8:22 — "While the earth remaineth, seedtime and harvest, and cold and heat, and summer and
  winter, and day and night shall not cease."
- Galatians 6:7–8 — "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall
  he also reap. For he that soweth to his flesh shall of the flesh reap corruption; but he that
  soweth to the Spirit shall of the Spirit reap life everlasting."
- Hosea 8:7 — "For they have sown the wind, and they shall reap the whirlwind…"
- Matthew 7:16–20 — "Ye shall know them by their fruits. Do men gather grapes of thorns, or figs
  of thistles?" — the kind formula applied to people.
- 2 Timothy 2:2 — "And the things that thou hast heard of me among many witnesses, the same
  commit thou to faithful men, who shall be able to teach others also." Four generations of
  transmission in one sentence.
- Proverbs 13:11 — "Wealth gotten by vanity shall be diminished: but he that gathereth by labour
  shall increase."

---

### A12. Dominion is delegated and bounded

This axiom and A17 carry the most weight in this group after A5. The lexical work matters here
more than anywhere else in the file, because the KJV English "dominion" _understates_ the
Hebrew — and the temptation is to overcorrect.

**Grounding text**

> Genesis 1:26 — "And God said, Let us make man in our image, after our likeness: and let them
> have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and
> over all the earth, and over every creeping thing that creepeth upon the earth."

> Genesis 1:28 — "…and subdue it: and have dominion over the fish of the sea, and over the fowl
> of the air, and over every living thing that moveth upon the earth."

**Lexical (verbatim from Strong's)**

- **H7287 רָדָה (_radah_)** — "**to tread down, i.e. subjugate**; specifically, to crumble off."
  From a primitive root. KJV renderings: "(come to, make to) have dominion, prevail against,
  reign, (bear, make to) rule,(-r, over), take."
- **H3533 כָּבַשׁ (_kabash_)** — "**to tread down; hence, negatively, to disregard; positively,
  to conquer, subjugate, violate.**" KJV renderings: "bring into bondage, force, keep under,
  subdue, bring into subjection."
- **H6754 צֶלֶם (_tselem_)** — "a phantom, i.e. (figuratively) illusion, resemblance; hence, a
  representative figure, especially an idol."
- **H1823 דְּמוּת (_demuth_)** — "resemblance; concretely, model, shape; adverbially, like."

**What the lexicon establishes, and what it does not**

It establishes that both verbs are _stronger_ than "custodianship." _Radah_ is "to tread down,
i.e. subjugate"; _kabash_ is "to conquer, subjugate, violate." A reading that renders the grant
as gentle gardening has to explain why the text chose these verbs.

It does **not** establish that Genesis 1 commands aggressive resource extraction. Per the
warning in `scripture-foundations`: "The Hebrew is stronger than 'dominion' suggests" is a fair
claim with the dictionary open. "The Hebrew proves Genesis 1 commands aggressive resource
extraction" is not. Two constraints hold the overcorrection in check, and both are in the same
three verses:

1. **Text states:** The grant is _given_. "Let them have dominion" — it is a permission, not a
   seizure. Whatever the strength of the verb, the authority is received.
2. **Text states:** The grant is _bounded_. It is enumerated: fish of the sea, fowl of the air,
   cattle, all the earth, every creeping thing. And it sits under the image-of-God frame stated
   one verse later (1:27, "So God created man in his own image"). Authority exercised _as the
   image of God_ is authority exercised under a description.

So: the verbs are stronger than the English, and the _scope_ is narrower than the verbs alone
would suggest. Both halves are needed.

**Observations**

1. **Text states (structure of the grant):** Three elements, each present. (a) An _agent_ — the
   man, plural "them." (b) A _domain_ — enumerated. (c) A _grantor_ — "Let them have."
2. **Text states:** The grant is to "them" — plural. It is not an individual possession.
3. **Text states:** The grant covers _living things_ and _the earth_, not the sky or the
   heavenly bodies. The lights (v. 14) are not in the grant. The boundary is drawn.
4. **Text states:** The grant is given _before_ the fall. There is no curse in it and no
   coercion in it.
5. **Text states:** The image of God is the ground of the grant. Verse 26 gives the reason
   ("Let us make man in our image… and let them have dominion"), and verse 27 restates the
   image immediately after. The authority is derivative of the resemblance.

**Derivation**

_Inference._ Two things follow, and they are in tension by design.

**First: authority is real.** It is not a fiction, a license, or a courtesy. The verbs are
strong. A reading that reduces dominion to "stewardship" in the weak sense — care without
authority — does not survive the lexicon.

**Second: authority is bounded, and it is delegated.** It is real _over a domain_ and _under a
law_. It is granted, not seized. Genesis 1 supplies the domain list; Genesis 2:16–17 supplies
the law.

**Therefore:** delegate actual authority, with actual limits, and **state both**. Authority
without limits becomes tyranny; limits without authority becomes paralysis. The most expensive
misunderstanding in a growing company is which of the two is being granted.

**Business consequences**

- **Write both halves down.** A role description that names only responsibilities and not
  limits is not a grant; it is a liability. A role description that names only limits is not a
  grant either.
- **The domain list matters.** A grant is over _specific_ things. "Own the product" is not a
  domain; "own the product roadmap for the SMB segment, excluding pricing and packaging" is.
- **Authority is derivative, and the derivation is stated.** The ground of the grant is the
  image of God — resemblance. In organisational terms, authority is grounded in what the
  holder _is_ in relation to the thing governed, which is why granting authority to someone who
  does not understand the domain fails regardless of how clearly the limits are written.
- **The grant is plural.** "Let them have dominion." Dominion is a corporate holding, not a
  personal one. This connects to A18 (aloneness) and to the org-design material in
  `org-and-labour.md`.

**Failure mode when violated**

Two distinct failures, and they are opposites.

- **Authority without limits → tyranny.** The holder does whatever they can, and the
  organisation discovers the boundaries of the grant by finding where it broke.
- **Limits without authority → paralysis.** The holder escalates everything, because nothing is
  actually theirs to decide. This failure is more common in growing companies and harder to
  see, because it looks like diligence.

The anti-pattern table does not list A12 directly, which is worth noting: this is an axiom whose
violation shows up as an org-chart pathology rather than a project pathology.

**Extending verses**

- Psalm 8:4–8 — "Thou madest him to have dominion over the works of thy hands; thou hast put
  all things under his feet." The grant is restated and extended.
- Psalm 115:16 — "The heaven, even the heavens, are the LORD's: but the earth hath he given to
  the children of men." (The grant is real; the sky is not included.)
- Matthew 28:18 — "All power is given unto me in heaven and in earth." (Authority, again,
  _given_.)
- Romans 13:1 — "…there is no power but of God: the powers that be are ordained of God."
- John 19:11 — "Thou couldest have no power at all against me, except it were given thee from
  above…" (Even hostile authority is derivative.)
- Mark 10:42–45 — the correction of the pagan model of authority: "whosoever will be great
  among you, shall be your minister."

---

### A13. Provision precedes assignment

**Grounding text**

> Genesis 1:29 — "And God said, Behold, I have given you every herb bearing seed, which is upon
> the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed;
> to you it shall be for meat."

**Text states (sequence):** The provision is given in verse 29, after the command to multiply
and subdue in verse 28, and _before_ the work of tilling in Genesis 2:15. Within chapter 1 the
grant of food precedes the close of the sixth day.

**Observations**

1. **Text states:** The verb is _give_: "Behold, I have given you." Not "you may purchase," not
   "you may earn." Given.
2. **Text states:** The provision is enumerated and specific: every herb bearing seed, every
   tree with fruit yielding seed. The grant is not "whatever you can find."
3. **Text states:** The provision covers the animals too (v. 30): "And to every beast of the
   earth… I have given every green herb for meat."
4. **Text states:** The provision is given _before_ the man does any recorded work. The first
   work in the account is Genesis 2:15, and it comes after the food.
5. **Text states (Genesis 2:7):** The man is formed from dust and given breath _before_ he is
   placed in the garden (2:15) and before the command about the trees (2:16–17). Provision,
   then placement, then assignment.

**Derivation**

_Inference._ If the resources are granted before the work is required of the worker, then
**capitalise before you operate. Fund the work before you demand from it.**

A model that requires output before inputs is not disciplined, it is starving. The distinction
matters: "disciplined" implies the inputs exist and are being withheld deliberately for good
reason. The text gives no example of withheld inputs as a technique.

Paul applies the principle to wages directly, and does so by quoting the law:

> Deuteronomy 25:4 — "Thou shalt not muzzle the ox when he treadeth out the corn."

> 1 Corinthians 9:9–10 — "For it is written in the law of Moses, Thou shalt not muzzle the mouth
> of the ox that treadeth out the corn. Doth God take care for oxen? Or saith he it altogether
> for our sakes? For our sakes, no doubt, this is written: that he that ploweth should plow in
> hope; and that he that thresheth in hope should be partaker of his hope."

> 1 Timothy 5:18 — "For the scripture saith, Thou shalt not muzzle the ox that treadeth out the
> corn. And, The labourer is worthy of his reward."

**Text states:** Paul reads the ox law as being written "altogether for our sakes," and applies
it to the worker's access to the fruit of the work while the work is happening. The ox eats
_while_ it treads. That is the sharpest form of the axiom.

**Business consequences**

- **Working capital is a design input, not a financing afterthought.** A plan that requires
  revenue before it can pay for the inputs is a plan that has assumed away the axiom.
- **The ox eats while treading.** Payment during the work, not only at the end, is the pattern
  the law establishes. Commission-only, equity-only, and deferred-compensation structures are
  not forbidden by the text, but they are in tension with it and require justification.
- **Founders are not exempt.** The most common violation of A13 is self-inflicted: a founder
  who works for nothing for two years and calls it discipline. The text gives provision first
  to the one who works.
- **Provision includes the means, not just the output.** "Every herb bearing seed" — provision
  includes the seed, which is to say the _reproductive_ capacity. Capital that cannot be
  reinvested is not provision; it is consumption.

**Failure mode when violated**

Starvation, and specifically the failure mode of starving the best asset. The anti-pattern table
does not list A13, but the mechanism appears under A17 and A27: underfunded maintenance, and
"every plan must price the thorns." The same reasoning applies — the plan that cannot fund its
own inputs is not a hard plan, it is a broken one.

**Extending verses**

- Matthew 6:33 — "But seek ye first the kingdom of God, and his righteousness; and all these
  things shall be added unto you." (Provision follows the priority, but it is promised.)
- Philippians 4:19 — "But my God shall supply all your need according to his riches in glory by
  Christ Jesus."
- Psalm 37:25 — "I have been young, and now am old; yet have I not seen the righteous forsaken,
  nor his seed begging bread."
- 1 Kings 17:4–6 — "…I have commanded the ravens to feed thee there." Provision precedes and
  accompanies the assignment.
- Proverbs 3:9–10 — honour with the _firstfruits_: "So shall thy barns be filled with plenty…"

---

### A14. Completion is a real state

**Grounding text**

> Genesis 2:1 — "Thus the heavens and the earth were finished, and all the host of them."
> Genesis 2:2 — "And on the seventh day God ended his work which he had made; and he rested on
> the seventh day from all his work which he had made."

**Observations**

1. **Text states:** There is a _finish_. The word is "finished" and then "ended." Two different
   verbs in two consecutive verses, both declaring termination.
2. **Text states:** The finish is _declared_. It is not inferred from the absence of further
   activity; it is stated.
3. **Text states:** The finish is _total_: "all the host of them." Nothing is left partially
   made.
4. **Text states:** The work stops and _rest begins_. Rest is only possible because the work
   ended. The seventh day is a different kind of day precisely because the six are over.
5. **Text states:** The pattern repeats at the end of the account of the tabernacle and at the
   end of the temple. It is a formula, not an accident of narration.
6. **Text states (the New Testament echo):** Jesus uses the same word at the end of his work:
   "It is finished" (John 19:30). And Revelation 21:6 — "It is done."

**Derivation**

_Inference._ If completion is a declared state with a boundary on both sides — work on one
side, rest on the other — then **"done" must be defined before you start, and meant.**

Scope creep is not ambition; it is a refusal to accept designed limits. A thing that is never
finished cannot be evaluated (A9, A10), shipped, celebrated, or built upon. The axiom is not
about discipline in the abstract: it is that the _function_ of evaluation and the _function_ of
rest both depend on a termination point existing.

**Business consequences**

- **Define "done" before you start, and mean it.** `SKILL.md` step 8: what observable condition
  means done, and who declares it? A "done" that no one is authorised to declare is not a
  definition.
- **A stopping rule is part of the specification.** The anti-pattern table pairs A10 and A14:
  "A plan with no stopping rule → endless projects, no learning, no exit." The mechanism is
  that with no finish, evaluation never becomes binding, so learning never happens.
- **Rest requires completion.** A15 depends on A14. You cannot rest from an unfinished thing;
  you can only stop, which is different.
- **Shipping is an act of closure, not an admission of incompleteness.** The text declares the
  work finished even though the story continues (there is a fall in chapter 3, and a flood, and
  a tabernacle). Finished means the _designed scope_ is complete.

**Failure mode when violated**

Endless projects, no learning, no exit. The secondary failure is more corrosive: an organisation
that never declares anything finished never experiences the closure that makes the next thing
possible, and its people stop believing that anything will ever be done.

**Extending verses**

- John 19:30 — "When Jesus therefore had received the vinegar, he said, It is finished: and he
  bowed his head, and gave up the ghost."
- Revelation 21:6 — "And he said unto me, It is done. I am Alpha and Omega, the beginning and
  the end…"
- Ecclesiastes 3:1 — "To every thing there is a season, and a time to every purpose under the
  heaven." Purposes have times, which means they have ends.
- Genesis 1:31 — the sixth day closes after the whole is evaluated. Evaluation and completion
  are adjacent in the sequence.
- Hebrews 4:3 — "For we which have believed do enter into rest, as he said, As I have sworn in
  my wrath, if they shall enter into my rest: although the works were finished from the
  foundation of the world."

---

## Group III — The rhythm

Genesis 2:1–3 and 2:15–25. Seven axioms on the working pattern: rest, work, maintenance,
partnership, discovery, boundary, and commitment.

### A15. Work is bounded; rest is structural

**Grounding text**

> Genesis 2:2 — "And on the seventh day God ended his work which he had made; and he rested on
> the seventh day from all his work which he had made."

> Genesis 2:3 — "And God blessed the seventh day, and sanctified it: because that in it he had
> rested from all his work which God created and made."

**Lexical**

- **H7676 שַׁבָּת (_shabbath_)** — "intermission, i.e (specifically) the Sabbath." From H7673
  שָׁבַת (_shabath_), intensive. The root sense is _cessation_, not _refreshment_. The day is
  defined by what does not happen on it.
- **H7673 שָׁבַת (_shabath_)** — the root; "to repose, i.e. desist from exertion."

**Observations**

1. **Text states (ratio):** Six days of work, one of cessation. The ratio is given, not earned.
   Nothing in the text conditions the seventh day on the completion of a quota.
2. **Text states:** The day is _blessed_ and _sanctified_. It is not merely permitted; it is
   set apart. Rest is an institution, established before any human being exists to need it.
3. **Text states (search, verified):** The pattern is restated in the fourth commandment with
   the same grounding: Exodus 20:11 — "For in six days the LORD made heaven and earth, the sea,
   and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath
   day, and hallowed it."
4. **Text states:** The command extends the rest to others and to animals: Exodus 20:10 names
   "thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle,
   nor thy stranger that is within thy gates." Rest is not a personal privilege; it is a
   structural provision for everyone in the system.
5. **Text states:** The rest is from _work_, and the work was _finished_ (A14). The two are
   paired in the same verse.

**Derivation**

_Inference._ If the ratio is given rather than earned, then **capacity planning must include
rest, or the plan is wrong.** A plan that only works at full throttle forever is not a plan.

The derivation has a sharp edge: rest is not a reward for good performance. It is not
contingent. That means it belongs in the plan as a fixed input, the way a machine's duty cycle
belongs in a manufacturing plan — not as a variable to be squeezed when the schedule slips.

Scripture extends the same logic beyond the week to the _year_ and the _half-century_:

> Exodus 23:10–12 — "And six years thou shalt sow thy land, and shalt gather in the fruits
> thereof: But the seventh year thou shalt let it rest and lie still; that the poor of thy
> people may eat: and what they leave the beasts of the field shall eat. In like manner thou
> shalt deal with thy vineyard, and with thy oliveyard. Six days thou shalt do thy work, and on
> the seventh day thou shalt rest: that thine ox and thine ass may rest, and the son of thy
> handmaid, and the stranger, may be refreshed."

> Leviticus 25 — the sabbath of the land and the jubilee. See `capital-and-stewardship.md` for
> the capital consequences of the fifty-year reset.

**Business consequences**

- **Burnout is a design violation, not a character flaw.** This reframing is the axiom's main
  contribution. If rest is structural, then a person who breaks under a full-throttle plan is
  evidence that the plan was wrong, not that the person was weak. Treating it as a character
  flaw guarantees the same plan is run again on the next person.
- **Rest is provisioned for the whole system, not just the principal.** Exodus 20:10 names the
  servants, the animals, and the resident foreigner. In business terms: contractors, on-call
  staff, and the people with the least ability to refuse.
- **The fallow year is a capacity instrument.** An idle quarter is not necessarily waste; it may
  be the seventh year. The question is whether it is _planned_ or _accidental_.
- **Duty cycle, not heroism.** A team that can only hit a date by working every weekend has a
  plan whose duty cycle exceeds 100%, which is not a plan.
- **Jubilee limits accumulation.** Leviticus 25's release of land and debts is a _structural_
  limit on compounding advantage. This is discussed at length in
  `capital-and-stewardship.md`.

**Failure mode when violated**

Burnout, attrition, and a cliff — the anti-pattern table's entry for "full-throttle plans with
no rest." The cliff is the important part: attrition is linear, but the loss of the people who
were holding the plan together is not. The bill arrives as a sudden, unrecoverable collapse
rather than a gradual decline.

**Extending verses**

- Exodus 20:8–11 — the fourth commandment, grounded in the creation week.
- Exodus 23:10–12 — the sabbath year and the sabbath day, with "that thine ox and thine ass may
  rest… and be refreshed."
- Leviticus 25:4 — "But in the seventh year shall be a sabbath of rest unto the land, a sabbath
  for the LORD: thou shalt neither sow thy field, nor prune thy vineyard."
- Leviticus 25:20–22 — the provision question answered: "And if ye shall say, What shall we eat
  the seventh year?… Then I will command my blessing upon you in the sixth year, and it shall
  bring forth fruit for three years."
- Mark 6:31 — "And he said unto them, Come ye yourselves apart into a desert place, and rest a
  while: for there were many coming and going, and they had no leisure so much as to eat." The
  rest is commanded _in the middle of demand_, not after it.
- Ecclesiastes 10:10 — "If the iron be blunt, and he do not whet the edge, then must he put to
  more strength: but wisdom is profitable to direct." Note the structure: the blunt tool costs
  _more strength_ for the same output, and the correction is a matter of direction, not effort.
  Whetstone time is unproductive time that makes production possible.

---

### A16. Work precedes the fall

**Grounding text**

> Genesis 2:15 — "And the LORD God took the man, and put him into the garden of Eden to dress it
> and to keep it."

**Text states (sequence):** This verse is in Genesis 2. The curse on the ground is in Genesis
3:17–19. The work assignment is given _before_ the fall, in the garden, as part of the design.
The curse changes the _conditions_ of work; it does not introduce work.

**Lexical**

- **H3240 יָנַח (_yanach_)** — "to deposit; by implication, to allow to stay." Rendered "put."
  KJV: "bestow, cast down, lay (down, up), leave (off), let alone (remain), pacify, place, put,
  set (down), suffer, withdraw, withhold."
- **H5647 עָבַד (_abad_)** — see A17.
- **H8104 שָׁמַר (_shamar_)** — see A17.
- **H127 אֲדָמָה (_adamah_)** — "soil (from its general redness)." Note the wordplay: _adam_
  (man) is taken from the _adamah_ (ground). The man and the material he works share a name.

**Observations**

1. **Text states:** Work is assigned in the garden, before any curse. The garden is not a
   resort; it is a workplace with a job description.
2. **Text states:** The verb for placement is a _depositing_ verb. The man is deposited, as
   something placed in the care of a location. **Inference:** the placement is the beginning of
   a custodial relationship, not merely a change of address.
3. **Text states:** The job is stated before the prohibition (2:15 before 2:16–17). Work comes
   before the boundary.
4. **Text states:** The garden is described as _abundant_ — "every tree that is pleasant to the
   sight, and good for food" (2:9), with a river system (2:10–14), and gold (2:11–12). Work is
   assigned in a place that already has everything needed. **Inference:** work is not
   primarily a survival mechanism in the design; it is what a provided-for person does.
5. **Text states:** The curse alters the ground ("cursed is the ground for thy sake," 3:17) and
   the yield ("in sorrow shalt thou eat of it," 3:17) and adds thorns (3:18) and sweat (3:19).
   It does not add the job.

**Derivation**

_Inference._ If work is assigned before the fall, then **work is not the punishment and not
merely the price of survival. It is where meaning is produced.**

The derivation rests on observation 5: the curse modifies conditions, not the existence of the
task. If work were the curse, then the curse would have introduced it. It did not.

This has a consequence that cuts against two opposite errors:

- Against the error that work is a curse to be escaped: a business that treats work as
  something to be minimised for everyone has misread the design.
- Against the error that work is the whole of a person: the same chapter that assigns the work
  also gives the sabbath (2:2–3) and the counterpart (2:18–24). Work is one of three.

**Business consequences**

- **A business that only pays — that makes nothing anyone could love — will hold people with
  money and lose them anyway.** This is the axiom's central business claim. If work is where
  meaning is produced, then a job that produces no meaning is competing on price alone, which
  is a losing position against anyone who offers both.
- **Craft is not a luxury.** The garden is described in aesthetic terms (2:9, "pleasant to the
  sight") as well as functional ones ("good for food"). Both are named.
- **The work has to be worth doing, not just paid for.** This is the case for caring what the
  product is, not only what it earns.
- **Provision is not the absence of work.** Observation 4 matters here: the man is given an
  abundant place _and_ a job. The two are not alternatives.

**Failure mode when violated**

An organisation that has reduced work to a transaction. The bill arrives as a workforce that
leaves for a ten-percent raise, and as an inability to attract anyone who cares about the
craft — because nothing in the offer is about craft.

The inverse failure is worth naming: treating work as the whole of meaning, so that rest (A15)
and partnership (A18) are treated as interruptions.

**Extending verses**

- Ecclesiastes 2:24 — "There is nothing better for a man, than that he should eat and drink, and
  that he should make his soul enjoy good in his labour. This also I saw, that it was from the
  hand of God."
- Ecclesiastes 3:22 — "Wherefore I perceive that there is nothing better, than that a man should
  rejoice in his own works; for that is his portion…"
- Ecclesiastes 9:10 — "Whatsoever thy hand findeth to do, do it with thy might; for there is no
  work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest."
- John 5:17 — "But Jesus answered them, My Father worketh hitherto, and I work."
- Colossians 3:23 — "And whatsoever ye do, do it heartily, as to the Lord, and not unto men."
- Genesis 2:5 — "…for the LORD God had not caused it to rain upon the earth, and there was not
  a man to till the ground." Note: the absence of a man to work is presented as a _deficiency_
  in the pre-fall state, parallel to the absence of rain.

---

### A17. Building and keeping are equal partners

This is one of the two axioms in this group that carries the most operational weight, and it
rests on two distinct Hebrew verbs that the KJV translates with two ordinary English words.

**Grounding text**

> Genesis 2:15 — "And the LORD God took the man, and put him into the garden of Eden to dress it
> and to keep it."

**Lexical (verbatim from Strong's)**

- **H5647 עָבַד (_abad_)** — "**to work (in any sense); by implication, to serve, till,
  (causatively) enslave, etc.**" From a primitive root. KJV renderings include: "[idiom] be,
  keep in bondage, be bondmen, bond-service, compel, do, **dress**, ear, execute, [phrase]
  husbandman, keep, labour(-ing man, bring to pass, (cause to, make to) serve(-ing, self), (be,
  become) servant(-s), do (use) service, till(-er), transgress (from margin), (set a) work, be
  wrought, **worshipper**."
  - Note the KJV list: _dress_ and _worshipper_ are renderings of the same root. The word for
    tending a garden is the word for serving God.
  - Note also that the same root yields H5650 עֶבֶד (_ebed_), "servant." The gardener's verb and
    the servant's noun are the same word.
- **H8104 שָׁמַר (_shamar_)** — "**properly, to hedge about (as with thorns), i.e. guard;
  generally, to protect, attend to, etc.**" From a primitive root. KJV renderings: "beward, be
  circumspect, take heed (to self), **keep**(-er, self), mark, look narrowly, observe, preserve,
  regard, reserve, save (self), sure, (that lay) wait (for), **watch(-man)**."
  - Note: the definition itself uses _thorns_ as the image — "to hedge about (as with thorns)."
    A hedge is a protective boundary. The curse in Genesis 3:18 turns thorns into the ground's
    resistance. The word for _keeping_ and the material of the curse are the same image.
  - Note also: the same root yields the noun for a watchman. Keeping is a _post_, not an
    activity.

**Observations**

1. **Text states:** Two verbs, two duties, given together as the job. Not one verb with two
   aspects — two distinct words, joined by "and."
2. **Text states:** Both are given to the same person, at the same moment, as the same job. There
   is no ranking in the sentence.
3. **Text states:** The first verb (_abad_) is _productive_: it works, tills, serves, brings
   forth. The second (_shamar_) is _protective_: it hedges, guards, watches, preserves.
4. **Text states (search, verified):** _Shamar_ is the verb used of the cherubim placed to guard
   the way to the tree of life: Genesis 3:24 — "…to keep the way of the tree of life." Same
   word. The same verb that describes the gardener's second duty describes the guard at the gate
   after the fall.
5. **Text states:** Nothing in the verse, and nothing in the surrounding narrative, treats
   _shamar_ as the lesser duty. The man is not told to dress the garden and, as a secondary
   matter, also not to lose it.
6. **Text states (Proverbs, the failure case):** Proverbs 24:30–34 gives the consequence of
   neglecting the second verb, in exactly the vocabulary of a farm.

**Derivation**

_Inference._ If the two verbs are given together as the same job, then **creation and
maintenance are co-equal. Maintenance is not junior work.**

The derivation rests on observation 2: the two duties are given in one sentence, to one person,
at one time. A hierarchy would have to be supplied from outside the verse. It is not there.

The failure pattern is stated elsewhere in Scripture in the same shape:

> Proverbs 24:30–34 — "I went by the field of the slothful, and by the vineyard of the man void
> of understanding; And, lo, it was all grown over with thorns, and nettles had covered the face
> thereof, and the stone wall thereof was broken down. Then I saw, and considered it well: I
> looked upon it, and received instruction. Yet a little sleep, a little slumber, a little
> folding of the hands to sleep: So shall thy poverty come as one that travelleth; and thy want
> as an armed man."

**Text states:** The field is still a field. The vineyard is still a vineyard. What has failed
is the _shamar_ — the wall is broken down, and the thorns have taken the ground. Note that the
diagnosis is not idleness in the absolute sense; it is "a little sleep, a little slumber." The
failure is incremental and small at each step.

The positive image is Nehemiah:

> Nehemiah 4:17 — "They which builded on the wall, and they that bare burdens, with those that
> laded, every one with one of his hands wrought in the work, and with the other hand held a
> weapon."

**Text states:** Build and defend at once. Not build, then later defend. Both, simultaneously,
by the same people, with the two hands named separately.

**Business consequences**

- **Most businesses die of _keep_ failure while congratulating themselves on _dress_.** This is
  the axiom's main claim and it is deliberately unflattering. The wall falls down while the new
  wing goes up.
- **Give "keep" named owners, calendar time, and equal status.** The three are a package. An
  owner with no calendar time is a name on a list. Calendar time with no owner is unallocated
  hours. Either without equal status gets traded away in the first prioritisation conflict.
- **Maintenance is invisible and therefore underfunded in every incentive system.** This is the
  friction, and naming it does not automatically fix it. Someone must hold the line, which means
  someone must be accountable for a thing whose success looks like nothing happening.
- **The failure is incremental.** Proverbs 24's "a little sleep, a little slumber" is the
  mechanism. There is no moment at which a company decides to stop maintaining something. There
  is a series of quarters in which nobody got to it.
- **Build-and-defend is a staffing model, not a metaphor.** Nehemiah 4:16 splits his servants
  in half: "the half of my servants wrought in the work, and the other half of them held both
  the spears." Two functions, two allocations, both real.

**Failure mode when violated**

The anti-pattern table states it directly: "Shipping with no owner for maintenance → rot, then
a rewrite at 5–10× cost."

The 5–10× figure is the _inference_, not a scriptural number — it is a common engineering
observation and it is included in `SKILL.md` as an estimate, not a claim from the text. What
the text supplies is the _shape_: the field reverts, and the wall must be rebuilt rather than
repaired.

The secondary failure: an organisation that cannot distinguish building from keeping will
describe maintenance as "not real work," which means the people doing it are not credited for
it, which means it stops being done by anyone who has a choice.

**Extending verses**

- Nehemiah 4:17–18 — the two-handed image.
- Proverbs 24:30–34 — the neglected field and wall.
- Genesis 3:24 — _shamar_ at the gate, after the fall: "…to keep the way of the tree of life."
- Song of Solomon 2:15 — "Take us the foxes, the little foxes, that spoil the vines: for our
  vines have tender grapes." Small, specific, continuous threats to a growing thing.
- Matthew 24:43 — "But know this, that if the goodman of the house had known in what watch the
  thief would come, he would have watched, and would not have suffered his house to be broken
  up." The failure is a failure to _watch_, not a failure to build.
- 1 Chronicles 9:19 — "And Shallum the son of Kore, the son of Ebiasaph, the son of Korah, and
  his brethren, of the house of his father, the Korahites, were over the work of the service,
  keepers of the gates of the tabernacle: and their fathers, being over the host of the LORD,
  were keepers of the entry." Guarding access is an inherited office with a named lineage.
- 1 Corinthians 3:10–15 — build with care, because the work will be tested: "But let every man
  take heed how he buildeth thereupon."

---

### A18. Aloneness is not good

**Grounding text**

> Genesis 2:18 — "And the LORD God said, It is not good that the man should be alone; I will
> make him an help meet for him."

**Lexical (verbatim from Strong's)**

- **H5828 עֵזֶר (_ezer_)** — "**aid.**" From H5826 עָזַר (_azar_), "to surround, i.e. protect or
  aid." KJV rendering of H5828: "help." Singular noun.
- **H5048 נֶגֶד (_neged_)** — "a front, i.e. part opposite; **specifically a counterpart, or
  mate**; usually (adverbial, especially with preposition) over against or before." KJV
  renderings: "about, (over) against, [idiom] aloof, [idiom] far (off), [idiom] from, over,
  presence, [idiom] other side, sight, [idiom] to view."
- The KJV phrase "an help meet for him" renders _ezer kenegdo_: an _aid_ who is a
  _counterpart_ — literally, one "over against" him.

**Text states (the negative space):** This is the first "not good" in the Bible. In a chapter
that repeatedly calls things good — and in a book whose first chapter ends with "very good" —
the first deficiency identified is _isolation_.

**Observations**

1. **Text states:** The judgment is _not good_. It is not "unfortunate" or "suboptimal." It is
   the same evaluative vocabulary used in chapter 1, with the negation attached.
2. **Text states:** The problem is _the man's aloneness_, and the solution is stated before the
   man himself notices it. God says it, and then acts, and only then does Adam discover the gap
   (2:20, "but for Adam there was not found an help meet for him"). The need was declared before
   it was felt.
3. **Text states:** The remedy is not a subordinate. The KJV "help meet" is _ezer kenegdo_ — an
   aid who is a _counterpart_, one set over against him. **Lexical:** the dictionary gloss for
   _neged_ explicitly includes "a counterpart, or mate."
4. **Text states (the sequence):** The declaration of the deficiency (v. 18) comes before the
   naming of the animals (vv. 19–20), and the provision (vv. 21–22) comes after. So the man
   works, discovers the gap, and then receives the counterpart.
5. **Lexical — the _ezer_ usage, stated with its limits.** Strong's defines H5828 as "aid" and
   records it as a component of names applied to God: **Eliezer** ("God of help," H410 + H5828),
   **Azriel** ("help of God," H5828 + H410), and **Ebenezer** ("stone of the help," H68 +
   H5828). Exodus 18:4 glosses the name Eliezer directly: "And the name of the other was
   Eliezer; for the God of my father, said he, was mine help, and delivered me from the sword of
   Pharaoh."
   - **What this establishes:** _ezer_ is not a subordinate-assistant word. It is used of God in
     the names of God's own help, and it is used in the Psalms where God is Israel's help.
   - **What this does not establish:** The supplied tooling has no verse-level Strong's tagging,
     so I could not verify at the word level that Psalm 121:2, Psalm 124:8, or Deuteronomy 33:29
     use H5828. The KJV English of those verses is: "My help cometh from the LORD, which made
     heaven and earth" (Psalm 121:2); "Our help is in the name of the LORD, who made heaven and
     earth" (Psalm 124:8); "the shield of thy help" (Deuteronomy 33:29). The _name-derivation_
     evidence above is verified; the concordance claim is not. Treat the concordance claim as
     strongly supported but unverified here.

**Derivation**

_Inference._ If the earliest deficiency identified in the design is a person without a
counterpart, then **partnership and counsel are not luxuries for the insecure — they are the
correction of a stated defect.**

Two derivations follow, and they are distinct:

**First, the deficit is structural.** Aloneness is not a mood or a preference. It is named as
_not good_ in the design evaluation. An organisation built around a single decisive person is
therefore built around a stated deficiency, regardless of how capable that person is.

**Second, the counterpart is a counterpart, not an assistant.** _Ezer kenegdo_ carries
"counterpart" and "mate." An assistant takes direction. A counterpart stands opposite and
speaks. The word choice rules out the reading where the remedy for aloneness is someone to do
what you say.

**Text states (the corroboration):**

> Proverbs 15:22 — "Without counsel purposes are disappointed: but in the multitude of
> counsellors they are established."

**Business consequences**

- **Solo decision-making is a stated defect, not a heroic style.** The founders who most need
  this axiom are the ones who find it least persuasive, because their results have been good so
  far.
- **A counterpart must be able to disagree.** If the second person cannot say no, the deficiency
  is not corrected. This is the operational test: has this person ever changed the principal's
  mind on something material?
- **The need is declared before it is felt.** Observation 2 is the practical point. Adam did not
  ask for help; the deficiency was named over him. Founders rarely feel under-counselled, because
  the cost of no counsel is invisible until it is paid.
- **Discovery comes through work.** See A19: the gap surfaced while Adam was naming the animals.
  Partnership requirements are often discovered by doing the work, not by planning the org.

**Failure mode when violated**

A single point of judgment that cannot be corrected from inside. The bill arrives as a decision
no one could have stopped, followed by an organisation that cannot explain what happened,
because the reasoning was never externalised.

**Extending verses**

- Proverbs 15:22 — "Without counsel purposes are disappointed: but in the multitude of
  counsellors they are established."
- Proverbs 20:18 — "Every purpose is established by counsel: and with good advice make war."
- Ecclesiastes 4:9–12 — "Two are better than one; because they have a good reward for their
  labour. For if they fall, the one will lift up his fellow: but woe to him that is alone when
  he falleth; for he hath not another to help him up. Again, if two lie together, then they have
  heat: but how can one be warm alone? And if one prevail against him, two shall withstand him;
  and a threefold cord is not quickly broken."
- Exodus 17:12 — "But Moses' hands were heavy; and they took a stone, and put it under him, and
  he sat thereon; and Aaron and Hur stayed up his hands, the one on the one side, and the other
  on the other side; and his hands were steady until the going down of the sun." Two people, one
  on each side.
- Numbers 11:16–17 — the seventy elders: "…and they shall bear the burden of the people with
  thee, that thou bear it not thyself alone." God states the problem in the same terms as
  Genesis 2:18.

---

### A19. Doing the work reveals the need

**Grounding text**

> Genesis 2:19 — "And out of the ground the LORD God formed every beast of the field, and every
> fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever
> Adam called every living creature, that was the name thereof."

> Genesis 2:20 — "And Adam gave names to all cattle, and to the fowl of the air, and to every
> beast of the field; but for Adam there was not found an help meet for him."

**Text states (sequence):** The declaration of the deficiency (v. 18) precedes the work; the
_discovery_ of the deficiency (v. 20) follows it. "But for Adam there was not found an help meet
for him" — the negative result is reported as a finding.

**Observations**

1. **Text states:** Adam performs a real task — naming every living creature — and the task has
   a genuine output ("whatsoever Adam called every living creature, that was the name thereof").
2. **Text states:** The task produces an _unexpected_ negative result. The gap was not visible
   from outside the work. It surfaced by doing it.
3. **Text states:** The work is _delegated_ by God ("brought them unto Adam to see what he would
   call them") and the result is left to Adam. God does not pre-announce what the naming will
   reveal.
4. **Text states:** The discovery is stated as a _failure to find_: "there was not found."
   Not "Adam realised." The vocabulary is of search and result.
5. **Text states:** The provision follows immediately (vv. 21–22). The discovery is what makes
   the provision intelligible.

**Derivation**

_Inference._ If the need surfaced only in the doing, then **execution is an instrument of
discovery, not merely of delivery.**

The derivation is precise: the _content_ of the need (a counterpart, not another creature) could
only be established by exhaustively testing the alternatives. Naming the animals was the test.
The conclusion "not found" required the work.

**Business consequences**

- **The real problem is usually adjacent to the one you set out to solve, and it appears only
  once you are in motion.** This is the axiom's core claim.
- **This is the case for prototypes and for shipping a smaller version sooner.** A prototype is
  not a cheaper version of the product; it is the instrument that reveals what the product
  needs to be. Its value is the discovery, not the artifact.
- **Research is not a substitute.** Adam did not theorise about whether a counterpart existed.
  He worked through the set. Reading about a market is not the same as selling into it.
- **It reframes "waste."** A prototype that is thrown away is not waste if it produced the
  finding. The finding is the deliverable. This is only true if the finding is actually captured
  — which means the work must be _designed_ to produce findings, not merely performed.
- **It connects to A5.** The discovery often reveals that the container was wrong, which is the
  argument for building a smaller container first.

**Failure mode when violated**

Analysis paralysis, and its mirror image: shipping something enormous without ever having tested
whether it was the right thing. Both failures come from the same error — treating the work as
delivery only, and never as the instrument that tells you what to deliver.

**Extending verses**

- Proverbs 27:23 — "Be thou diligent to know the state of thy flocks, and look well to thy
  herds." Knowledge of the state comes from attending to the actual flock.
- Luke 14:28–30 — the tower-builder counts first; the failure is discovered by building.
- Acts 16:6–10 — "…they assayed to go into Bithynia: but the Spirit suffered them not." The
  direction was found in the attempt, not in the plan.
- James 4:13–15 — "…ye know not what shall be on the morrow." Planning is conditioned by
  discovery.
- Nehemiah 2:14 — "…but there was no place for the beast that was under me to pass." A finding
  from the reconnaissance: a physical constraint discovered by riding the route.

---

### A20. Abundance precedes restriction; the boundary is few and stated in advance

**Grounding text**

> Genesis 2:16 — "And the LORD God commanded the man, saying, Of every tree of the garden thou
> mayest freely eat:"

> Genesis 2:17 — "But of the tree of the knowledge of good and evil, thou shalt not eat of it:
> for in the day that thou eatest thereof thou shalt surely die."

**Text states (the shape):** A wide yes ("of every tree… thou mayest freely eat"), then one
clear no ("but of the tree… thou shalt not eat of it"). The prohibition is stated _before_ the
serpent arrives in chapter 3.

**Observations**

1. **Text states (proportion):** One prohibition, in a garden full of trees. The permission is
   general and emphatic — "freely eat" — and the restriction is a single named exception.
2. **Text states:** The exception is _specific_. One tree, named. Not "some trees," not "trees
   the LORD has not approved."
3. **Text states:** The consequence is _stated with the rule_: "in the day that thou eatest
   thereof thou shalt surely die." Rule and consequence are given together.
4. **Text states (timing):** The rule is given in chapter 2. The pressure arrives in chapter 3.
   **Text states:** The serpent's opening move is to _change the rule's wording_: "Yea, hath God
   said, Ye shall not eat of every tree of the garden?" (3:1). The attack is on the rule as
   stated, which is why the rule being stated precisely matters.
5. **Text states (Daniel, the pattern):** Daniel 1:8 — "But Daniel purposed in his heart that he
   would not defile himself with the portion of the king's meat, nor with the wine which he
   drank: therefore he requested of the prince of the eunuchs that he might not defile himself."
   **Text states:** The decision is made _before_ the food is set before him — "purposed in his
   heart" precedes the request.

**Derivation**

_Inference._ If the restriction is few and given in advance, then **default to generous
permission and keep prohibitions few, explicit, and unambiguous. A rule invented after the
temptation arrives is not a rule; it is a negotiation.**

The last clause is the derivation's force. The serpent does not argue about whether the tree
should be forbidden; he argues about _what God said_. A rule stated in advance has a fixed text
to defend. A rule invented at the moment of pressure has no text, only the judgement of the
person under pressure — which is the least reliable instrument available.

**Business consequences**

- **Few rules, clearly stated, stated early.** A policy manual with three hundred rules is not
  a strong boundary; it is a boundary that has been diluted until nobody can hold it in mind.
- **The default should be generous permission.** The garden is mostly yes. Organisations that
  default to no get compliance and lose initiative.
- **Rules must have consequences attached.** Verse 17 states the penalty in the same breath as
  the prohibition. A rule with no stated consequence is a preference.
- **The rule must be legible to the person under pressure.** If the person who will face the
  temptation cannot recite the rule, it was not stated in advance in any useful sense.
- **Decide the ethics before the deal.** This is the operational form, and it is the reason
  `ethics.md` ends with "write down the boundary in advance." Daniel is the model.

**Failure mode when violated**

The anti-pattern table: "Growth with no stated boundary → scope explosion; you can no longer say
what you are." The ethics failure is the sharper one: a boundary negotiated under pressure is
not a boundary, so the organisation discovers its actual limits by exceeding them.

**Extending verses**

- Daniel 1:8 — purposed in his heart beforehand.
- Deuteronomy 30:19 — "I call heaven and earth to record this day against you, that I have set
  before you life and death, blessing and cursing: therefore choose life, that both thou and thy
  seed may live." The options are stated before the choice.
- Joshua 24:15 — "…choose you this day whom ye will serve; whether the gods which your fathers
  served that were on the other side of the flood, or the gods of the Amorites, in whose land ye
  dwell: but as for me and my house, we will serve the LORD." Stated, then chosen, then
  declared in advance of the outcome.
- Psalm 119:105 — "Thy word is a lamp unto my feet, and a light unto my path." The rule
  illuminates the ground ahead, which is the whole point of stating it before you walk.
- Genesis 3:1 — the serpent's opening move against the wording. The rule's precision is what
  gets attacked, which is evidence of its value.

---

### A21. Commitment requires leaving and cleaving

**Grounding text**

> Genesis 2:24 — "Therefore shall a man leave his father and his mother, and shall cleave unto
> his wife: and they shall be one flesh."

**Observations**

1. **Text states (structure):** Three elements, in order: **leave**, **cleave**, **be one
   flesh.** The union is the third step, not the first.
2. **Text states:** The leaving is _specific_ — "his father and his mother." Not "his prior
   life." A named attachment must be exited.
3. **Text states:** The cleaving is a _binding_ — the word carries adhesion. The two are not
   parallel options; one is an exit and the other is an attachment.
4. **Text states:** The formula is stated as a general principle ("Therefore shall a man…"),
   immediately after the specific case of Adam and Eve. It is presented as the pattern for all
   subsequent unions, not as a description of the first one.
5. **Text states:** The union is described as a _new identity_: "they shall be one flesh." Not a
   partnership between two intact parties, but a new single thing.

**Derivation**

_Inference._ If a new union requires a real exit and a binding attachment, then **new ventures
fail when founders try to keep every prior option open.**

The sequence is the argument. Leave comes before cleave, and cleave comes before one flesh. A
venture that has not required anyone to leave anything has not reached the first step, which
means it cannot reach the third.

**Second derivation: covenant structure produces behaviour that a contract cannot.** The text
uses "one flesh," which is an identity claim, not a terms claim. A contract governs the
behaviour of two separate parties. A covenant changes what the parties are. The behaviour that
follows from identity — sacrifice, patience, absorbing cost without renegotiating — is not
producible by terms alone.

**Business consequences**

- **If you are not willing to leave something, you have not started anything.** The test is
  concrete: what did this commitment cost me in foregone alternatives? A founder who is still
  consulting two days a week has not left.
- **"Leaving" must be named.** Father and mother are named, not gestured at. Founders who
  describe their exit as "winding down my other things" have not named what they are leaving,
  which means nobody can tell whether it happened.
- **Covenant structures outperform contracts where commitment is the bottleneck.** Founder
  agreements, equity with real vesting, non-competes with teeth, and public commitments all
  operate on identity rather than terms. The text suggests why they work when contracts alone do
  not.
- **The union is a new thing, not an alliance.** "One flesh" argues against the
  two-independent-companies-with-a-shared-roadmap model of partnership, at least for the
  commitments that need to survive pressure.

**Failure mode when violated**

The anti-pattern table: "Avoiding commitment to keep options open → no venture, only a permanent
option-holding cost."

The option-holding cost is the key insight. Keeping options open is not free; it is a
continuous payment, and the payment is attention. A person with five open options has one fifth
of the attention available for any of them.

**Extending verses**

- Ruth 1:16 — "And Ruth said, Intreat me not to leave thee, or to return from following after
  thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people
  shall be my people, and thy God my God." Leaving stated explicitly, then cleaving.
- Luke 9:62 — "And Jesus said unto him, No man, having put his hand to the plough, and looking
  back, is fit for the kingdom of God."
- 2 Timothy 2:4 — "No man that warreth entangleth himself with the affairs of this life; that he
  may please him who hath chosen him to be a soldier."
- 1 Kings 19:19–21 — Elisha's call, and his response: "And he returned back from him, and took
  a yoke of oxen, and slew them, and boiled their flesh with the instruments of the oxen, and
  gave unto the people, and they did eat. Then he arose, and went after Elijah, and ministered
  unto him." The oxen are killed — the prior occupation is not kept as a fallback.
- Genesis 12:1 — "Now the LORD had said unto Abram, Get thee out of thy country, and from thy
  kindred, and from thy father's house, unto a land that I will shew thee." The leaving is
  named in three descending circles.

---

## Group IV — The fracture and how to operate in it

Genesis 3. Thirteen axioms on failure, friction, and operating in a broken environment. Note the
genre shift: chapters 1–2 are mostly _description of what was made_. Chapter 3 is _narrative of
what went wrong_, plus consequences that are declared. Per `scripture-foundations`: "Genesis 3
describes the curse. It does not command thorns. It tells you to expect them." Almost every
axiom in this group is an _expectation_, not a command.

### A22. Trust in the stated word is the first target

**Grounding text**

> Genesis 3:1 — "Now the serpent was more subtil than any beast of the field which the LORD God
> had made. And he said unto the woman, Yea, hath God said, Ye shall not eat of every tree of
> the garden?"

**Observations**

1. **Text states:** The attack opens on _what was said_, not on anything material. The first
   recorded question in the Bible is a question about the reliability of a statement.
2. **Text states:** The question is a _distortion_. God said "of every tree of the garden thou
   mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of
   it" (2:16–17). The serpent's version is "Ye shall not eat of every tree of the garden" —
   which inverts the permission into a prohibition.
3. **Text states:** The distortion is _plausible_. It is close enough to the original that the
   woman has to correct it, which means the attack succeeded in starting a discussion about the
   text rather than about the tree.
4. **Text states:** The woman's reply (3:2–3) adds to the original: "neither shall ye touch it,
   lest ye die." God's stated rule did not include touching. **Inference:** the drift had already
   begun before the serpent spoke.
5. **Text states:** Nothing material is taken in verse 1. No fruit is eaten. The whole first
   move is an attack on the credibility of the word.

**Derivation**

_Inference._ If the attack opens on the reliability of what was said, then **the integrity of
your promises is the asset most worth defending and the easiest to damage.**

**Second derivation, and it is the operationally important one: reputation is attacked with
questions, not with facts, which means it cannot be defended with facts alone.** The serpent did
not assert a falsehood; he asked a question. A question cannot be refuted. It can only be
answered, and answering it concedes that the matter was open.

**Business consequences**

- **Say what you will do, do what you said, and correct the record plainly when you cannot.**
  The three-part discipline. The third part is the one that gets skipped, and it is the one that
  matters, because the alternative to correcting the record is letting a distortion stand.
- **Questions are the attack vector, so the defence is a track record, not a rebuttal.** A
  company with a decade of kept promises does not have to answer whether it keeps promises.
- **Precision in the original statement is a defence.** Observation 2 is the argument. The
  serpent's distortion worked because the original was long enough to be paraphrased. Short,
  checkable promises are harder to distort than long, qualified ones.
- **Drift is a separate failure from attack.** Observation 4 matters: the woman's addition to
  the rule was not the serpent's doing. Organisations drift from their own stated commitments
  without any adversary, through repetition and paraphrase.

**Failure mode when violated**

Reputation damage that cannot be repaired by producing evidence, because the damage is to the
disposition to believe evidence. The bill arrives as a permanent discount on everything the
company says, which shows up as higher due diligence costs, longer sales cycles, and terms that
assume bad faith.

**Extending verses**

- Matthew 4:3–6 — the same attack, run against Jesus, and answered from the text: "It is
  written." Note that the second temptation _quotes Scripture_ (Psalm 91) — the attack uses the
  text, not merely against it.
- John 8:44 — "…When he speaketh a lie, he speaketh of his own: for he is a liar, and the father
  of it."
- Proverbs 30:5–6 — "Every word of God is pure… Add thou not unto his words, lest he reprove
  thee, and thou be found a liar." (The woman's addition, in the light of this proverb.)
- 2 Peter 3:3–4 — "…there shall come in the last days scoffers… And saying, Where is the promise
  of his coming?" The attack on the promise is the same attack, repeated.
- Genesis 3:4 — the escalation, from question to flat denial.

---

### A23. Deception works by denying consequence and promising autonomy

**Grounding text**

> Genesis 3:4 — "And the serpent said unto the woman, Ye shall not surely die:"
> Genesis 3:5 — "For God doth know that in the day ye eat thereof, then your eyes shall be
> opened, and ye shall be as gods, knowing good and evil."

**Observations**

1. **Text states (two levers, both present):** (a) _Consequence denied_ — "Ye shall not surely
   die." (b) _Autonomy promised_ — "ye shall be as gods."
2. **Text states:** The two levers are joined by a causal connector: "For God doth know that…"
   The denial of consequence is presented as the _reason_ the autonomy is available. The
   structure is: nothing bad will happen, and you will be free.
3. **Text states:** The autonomy claim is _specific_ about the mechanism: "your eyes shall be
   opened… knowing good and evil." It is not a vague promise of improvement; it is a claim about
   a new capability.
4. **Text states:** The autonomy claim also _imputes a motive to the current authority_: "God
   doth know" — implying God is withholding something. The offer of freedom is paired with an
   accusation against the one who set the boundary.
5. **Text states:** Both levers are _false_. The consequence arrives (3:16–19), and the autonomy
   arrives as expulsion from the garden (3:23–24) followed by a new set of masters.

**Derivation**

_Inference._ If both levers appear together in the first deception, then **an opportunity
presented with no downside is being sold. An offer of pure autonomy always conceals a new
master.**

The second clause is derived from observation 5. The promised autonomy produced, in the actual
event, subjection to a curse. What was on offer was not freedom from authority but a change of
authority — which is why the phrase "conceals a new master" is the right one.

**These two signals are the fastest available test for a bad deal, a bad hire, or a bad
partner.** Both are checkable in a single conversation: what is the downside, and who holds
authority over me afterward?

**Business consequences**

- **A pitch with no downside has a hidden one.** Every real opportunity has a cost, a risk, or a
  trade. A pitch that names none of them is not optimistic; it is incomplete, and the omission
  is the tell.
- **"You will be your own boss" is a claim about a new boss.** The autonomy offer is
  structurally suspicious because autonomy is never absolute. The correct question is: authority
  over _what_, and subject to _whose_ terms?
- **Apply the test to hires and partners, not only deals.** A candidate who describes their last
  three roles as everyone else's fault is running lever (a). A partner who proposes a structure
  in which nothing constrains them is running lever (b).
- **Apply it to yourself.** The most dangerous version is the deal you are pitching. If your own
  deck has no downside and no constraints, you are running the play.

**Failure mode when violated**

The bad deal that looked clean. The bill arrives as an obligation nobody priced — the personal
guarantee, the lock-in, the new controlling shareholder, the covenant that triggers.

**Extending verses**

- Proverbs 14:12 — "There is a way which seemeth right unto a man, but the end thereof are the
  ways of death."
- 2 Timothy 3:13 — "But evil men and seducers shall wax worse and worse, deceiving, and being
  deceived."
- 2 Corinthians 11:13–15 — "For such are false apostles, deceitful workers, transforming
  themselves into the apostles of Christ. And no marvel; for Satan himself is transformed into
  an angel of light." The presentation is attractive; that is the mechanism.
- 1 Timothy 6:9 — "But they that will be rich fall into temptation and a snare, and into many
  foolish and hurtful lusts, which drown men in destruction and perdition." Note _snare_ — a trap
  that presents as opportunity.
- Genesis 3:6 — the woman's own evaluation: "good for food… pleasant to the eyes… to be desired
  to make one wise." The pitch was accepted on all three channels (A24).

---

### A24. Desire runs on three channels

**Grounding text**

> Genesis 3:6 — "And when the woman saw that the tree was good for food, and that it was pleasant
> to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did
> eat, and gave also unto her husband with her; and he did eat."

**Observations**

1. **Text states (three distinct clauses):** (a) "good for food" — appetite. (b) "pleasant to the
   eyes" — beauty. (c) "to be desired to make one wise" — status or standing.
2. **Text states:** The three are given in sequence, as a chain of "and." The evaluation is
   compound, not singular.
3. **Text states:** The evaluation precedes the act. "And when the woman saw… she took." The
   three-channel assessment is what produced the decision.
4. **Text states (the New Testament echo):** 1 John 2:16 — "For all that is in the world, the
   lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but
   is of the world." **Text states:** The same three categories, in the same order: flesh
   (appetite), eyes (beauty), pride of life (status). This is the strongest available
   corroboration that the threefold structure is deliberate.
5. **Text states:** The act is _shared_: "and gave also unto her husband with her." The decision
   propagated immediately.

**Derivation**

_Inference._ If every purchase, hire, and commitment is being decided on all three channels at
once, then **appeal only to need and you lose to whoever appeals to beauty; satisfy need and
beauty but ignore status and you lose to whoever offers standing.**

The derivation rests on observation 2. The three clauses are conjoined — all three are
present in a single evaluation. A seller who addresses one channel is competing against sellers
who address three.

**This cuts both ways** — and this is the axiom's most useful property. It is the diagnostic for
what you sell _and_ for how a bad decision is being sold to you. The same three questions apply
to your own product and to the deal on your desk.

**Business consequences**

- **Product, brand, and positioning are three channels, not one.** Feature parity plus good
  design plus no status story loses to a worse product with all three.
- **Status is the most commonly neglected channel in B2B.** "It works and it's cheap" addresses
  appetite only. The buyer's standing inside their own organisation is channel (c).
- **Use it as an audit on your own decisions.** Before signing: which channel is doing the work
  here? If the honest answer is (b) or (c), the analysis has not been done.
- **It explains why good deals get rejected.** A superior offer that addresses only appetite
  loses to an inferior offer that also makes the buyer look good.
- **It is not a licence to manipulate.** Per `scripture-foundations`: "Never use Scripture to
  justify harm, exploitation, or the overriding of someone's conscience." The three channels
  describe how decisions are made; they do not authorise exploiting the weaknesses they reveal.

**Failure mode when violated**

Losing to worse products. The bill arrives as a recurring, inexplicable pattern of losses to
competitors the team regards as inferior, and an internal explanation that blames the customer's
irrationality rather than the offer's incompleteness.

**Extending verses**

- 1 John 2:16 — the same three, named.
- James 1:14–15 — "But every man is tempted, when he is drawn away of his own lust, and enticed.
  Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth
  forth death." The mechanism: desire, then act, then consequence.
- Joshua 7:21 — Achan's account of the same three-channel sequence: "When I saw among the spoils
  a goodly Babylonish garment, and two hundred shekels of silver, and a wedge of gold of fifty
  shekels weight, then I coveted them, and took them…" Seeing, coveting, taking.
- Proverbs 6:25 — "Lust not after her beauty in thine heart; neither let her take thee with her
  eyelids." Channel (b), named as a channel.
- 1 Timothy 6:9–10 — the desire for riches as the mechanism, not the riches.

---

### A25. Undisclosed failure produces hiding and blame

**Grounding text**

> Genesis 3:10 — "And he said, I heard thy voice in the garden, and I was afraid, because I was
> naked; and I hid myself."
> Genesis 3:12 — "And the man said, The woman whom thou gavest to be with me, she gave me of the
> tree, and I did eat."

**Observations**

1. **Text states (the chain):** Fear → hiding → blame. Verse 10 gives the first two, verse 12
   the third. The sequence is explicit.
2. **Text states:** The hiding is _physical and specific_: "I hid myself" among the trees (3:8).
   Concealment is an action, not a feeling.
3. **Text states:** The blame is _redistributed in two directions at once_: to the woman ("she
   gave me") and to God ("the woman whom thou gavest to be with me"). The second is the more
   revealing: the failure is attributed to the design.
4. **Text states (the contrast):** Adam had previously made a different kind of statement about
   the same person: "This is now bone of my bones, and flesh of my flesh" (2:23). The same
   relationship, re-described as a liability.
5. **Text states:** The concealment _costs more than the failure would have_. Verse 7 has the
   fig leaves; verse 8 has the hiding; verse 21 has God making coats. The failure was covered
   anyway, at God's cost, after the concealment added fear and blame to it.
6. **Text states (the wisdom contrast):** Proverbs 28:13 — "He that covereth his sins shall not
   prosper: but whoso confesseth and forsaketh them shall have mercy."

**Derivation**

_Inference._ If shame leads to concealment, concealment to blame, and blame destroys the ability
to learn, then **the reporting of failure must be cheap and the person must survive it. A culture
that punishes the messenger pays for the silence later.**

The derivation's engine is the last clause of observation 3: blaming the design. Once the failure
has been attributed to the system rather than the decision, there is nothing to learn, because
there is no decision to examine. The blame chain is not merely unfair; it is _epistemically
terminal_.

**Blame is not accountability.** This distinction is the axiom's sharpest contribution.
Accountability is owning your part without redistributing it. Blame is the redistribution. An
organisation that demands "accountability" while rewarding blame gets more blame and less
accountability.

**Business consequences**

- **Make the reporting of failure cheap, and make the reporter survive it.** Both halves. Cheap
  reporting without survival is an interrogation.
- **Separate the failure from the reporting, explicitly and in public.** The first person to
  report a serious problem in front of the whole company is the one who sets the price of
  reporting for the next year.
- **Watch for blame directed at the design.** "The process was wrong," "the market changed,"
  "leadership set impossible targets" — sometimes true, and always a signal that the speaker has
  not examined their own part. The two claims can both be true; the question is whether the
  speaker names their own.
- **Note that concealment had a cost.** Observation 5. The failure was going to be covered; the
  concealment only added fear, blame, and a longer delay.

**Failure mode when violated**

The anti-pattern table: "Punishing the bearer of bad news → late discovery, and the discovery is
worse."

The mechanism is a delay, not a denial. Nobody decides to hide a problem permanently; they
decide to hide it until they have fixed it, which is exactly the interval during which the
organisation could have helped.

**Extending verses**

- Proverbs 28:13 — the cover/confess contrast.
- Psalm 32:3–5 — the physical cost of concealment and the relief of confession: "When I kept
  silence, my bones waxed old through my roaring all the day long… I acknowledged my sin unto
  thee, and mine iniquity have I not hid."
- 1 John 1:9 — "If we confess our sins, he is faithful and just to forgive us our sins, and to
  cleanse us from all unrighteousness."
- Acts 5:1–11 — Ananias and Sapphira: the failure was the concealment, not the withholding.
  Peter says explicitly: "Whiles it remained, was it not thine own? and after it was sold, was it
  not in thine own power?" (5:4). The lie was the sin.
- Joshua 7 — Achan's concealment and its cost to the whole camp.

---

### A26. Diagnose before you judge

**Grounding text**

> Genesis 3:9 — "And the LORD God called unto Adam, and said unto him, Where art thou?"
> Genesis 3:11 — "And he said, Who told thee that thou wast naked? Hast thou eaten of the tree,
> whereof I commanded thee that thou shouldest not eat?"
> Genesis 3:13 — "And the LORD God said unto the woman, What is this that thou hast done? And
> the woman said, The serpent beguiled me, and I did eat."

**Observations**

1. **Text states (the sequence):** Three questions, in order: _Where art thou?_ (location) —
   _Who told thee?_ and _Hast thou eaten?_ (source and act) — _What is this that thou hast
   done?_ (act, to the second party). Location, then source, then act.
2. **Text states:** The questions are _open_. They are not accusations phrased as questions. Each
   one requests information the questioner does not have.
3. **Text states:** The judgment comes _after_ the answers. The curse is pronounced in verses
   14–19, after all three parties have spoken. Nothing is pronounced before the questioning is
   complete.
4. **Text states:** The questions are addressed to _each party in turn_ — the man, then the
   woman, then the serpent. Each gets their own account.
5. **Text states:** The questioning does not change the outcome. Adam's blame-shifting does not
   prevent the curse. **Inference:** diagnosis is for accuracy, not for leniency. The purpose is
   a correct verdict, not a reduced one.

**Derivation**

_Inference._ If the first response to failure is a sequence of questions establishing location,
source, and act, then **establish facts before assigning responsibility, and separate the two
questions. Judgment that outruns diagnosis produces the wrong verdict and teaches people to
hide.**

The last clause connects to A25. A wrong verdict is a cost; a wrong verdict that is _visible as
wrong_ is worse, because it teaches the organisation that the process is arbitrary and that
concealment is rational.

**Text states (the corroboration):**

> Proverbs 18:13 — "He that answereth a matter before he heareth it, it is folly and shame unto
> him."

> Proverbs 18:17 — "He that is first in his own cause seemeth just; but his neighbour cometh and
> searcheth him."

> John 7:51 — "Doth our law judge any man, before it hear him, and know what he doeth?"

> Deuteronomy 1:16–17 — "And I charged your judges at that time, saying, Hear the causes between
> your brethren, and judge righteously between every man and his brother, and the stranger that
> is with him. Ye shall not respect persons in judgment; but ye shall hear the small as well as
> the great; ye shall not be afraid of the face of man; for the judgment is God's…"

**Business consequences**

- **Ask, then weigh.** The two activities are separate and must be sequenced.
- **Ask about location first.** "Where art thou?" is not a rhetorical question; it establishes
  the facts of the situation before anything else. In a post-mortem, the equivalent is: what
  actually happened, and when did we know?
- **Take each account separately.** Observation 4. A group post-mortem where everyone speaks in
  front of everyone produces performances. The Genesis pattern is individual, then collective.
- **Diagnosis is not leniency.** Observation 5 is important and often lost. The purpose of
  diagnosis is a correct verdict, which may be a harsh one.
- **The failure to diagnose is a management failure, not a person failure.** If a manager
  pronounces before hearing, the wrong verdict is the manager's fault, and so is the culture of
  hiding that follows.

**Failure mode when violated**

The anti-pattern table: "Judging without diagnosing → wrong verdicts, and a team that hides."

The secondary failure is the loss of the diagnostic capability itself. An organisation that
punishes accurate reports learns to produce inaccurate ones, and then cannot tell what is
happening.

**Extending verses**

- Proverbs 18:13, 18:17 — above.
- John 7:51 — above.
- Deuteronomy 1:16–17 — above.
- Deuteronomy 19:15 — "One witness shall not rise up against a man for any iniquity, or for any
  sin, in any sin that he sinneth: at the mouth of two witnesses, or at the mouth of three
  witnesses, shall the matter be established." (Multiple accounts required.)
- 1 Timothy 5:19 — "Against an elder receive not an accusation, but before two or three
  witnesses." (The rule applied to leadership.)

---

### A27. Friction is structural

**Grounding text**

> Genesis 3:17 — "And unto Adam he said, Because thou hast hearkened unto the voice of thy wife,
> and hast eaten of the tree, of which I commanded thee, saying, Thou shalt not eat of it: cursed
> is the ground for thy sake; in sorrow shalt thou eat of it all the days of thy life;"
> Genesis 3:18 — "Thorns also and thistles shall it bring forth to thee; and thou shalt eat the
> herb of the field;"
> Genesis 3:19 — "In the sweat of thy face shalt thou eat bread, till thou return unto the
> ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return."

**Observations**

1. **Text states:** The ground is cursed _for thy sake_. The resistance is directed at the
   worker, and it is stated as being _for_ him — the KJV "for thy sake." This is a strange
   phrase and worth noticing rather than smoothing.
2. **Text states:** The ground still produces. It is not barren. It brings forth "thorns also and
   thistles" — in addition to the herb of the field. The yield continues; the ratio changes.
3. **Text states (duration):** "all the days of thy life." The resistance is permanent. It is not
   a phase, a consequence that expires, or a condition that better technique removes.
4. **Text states:** The effort is named: "in the sweat of thy face." The cost is _exertion_, not
   merely poor outcomes.
5. **Text states:** The curse is _decelerated_. The ground resists; it does not refuse. Effort
   still yields bread — just not the bread it would have yielded.
6. **Text states (the positive promise inside it):** The herb of the field is still eaten. The
   curse is a change in the terms of exchange, not a cancellation of the exchange.

**Derivation**

_Inference._ If the environment resists and the resistance is permanent, then **every plan must
price the thorns.** Name the specific friction — the churn, the compliance cost, the recruiting
drag, the technical debt — as a line item, not a surprise. ROI must cover the weeds. A model that
only works in uncursed ground is not a model.

The derivation's engine is observation 3. If friction were temporary, a plan could reasonably
assume it would clear. Since it is "all the days of thy life," a plan that does not include it is
a plan for a world that does not exist.

Observation 2 is the second half, and it prevents overcorrection. The ground still yields. A
plan that prices the thorns _and then assumes nothing will grow_ is equally wrong. The correct
model is: the yield is real, and the ratio is worse than the design.

**Business consequences**

- **Price the friction, numerically if possible.** `SKILL.md` step 5: what will resist this, what
  will it cost per month, and what is the plan for it?
- **Name the specific thorn.** Generic risk registers are useless. "Churn runs at 1.8% monthly
  and the replacement cost is $14k per seat" is a priced thorn.
- **ROI must cover the weeds.** A margin model built on gross-of-friction economics is a model
  of a different business.
- **Do not confuse the thorn with a broken thing.** A27's resistance is expected and permanent;
  A28's pain of delivery is different again. Distinguishing them is the skill.
- **Watch for friction that is invisible because it is distributed.** Churn, coordination
  overhead, and context-switching are real costs that never appear on a line because they are
  spread across everything.

**Failure mode when violated**

The anti-pattern table: "Assuming a stable baseline → 'unexpected' churn, cost, and delay every
quarter."

The characteristic symptom is an organisation that has a _story_ for each miss and no _rate_ for
the class of miss. Once the rate is named, it becomes plannable. Until then, every quarter is a
surprise.

**Extending verses**

- Matthew 7:24–27 — the storm is not a punishment for the bad builder; both houses get the same
  storm. The difference is the foundation.
- 1 Corinthians 3:12–15 — "Every man's work shall be made manifest: for the day shall declare it,
  because it shall be revealed by fire; and the fire shall try every man's work of what sort it
  is." The test is universal.
- James 1:2–4 — "My brethren, count it all joy when ye fall into divers temptations; Knowing this,
  that the trying of your faith worketh patience. But let patience have her perfect work, that ye
  may be perfect and entire, wanting nothing." Note: the trial is assumed, not exceptional, and
  the process is meant to run to completion (A14).
- Ecclesiastes 10:10 — the blunt iron: resistance is a property of the tool, and it must be
  managed with sharpening.
- Romans 8:22 — "For we know that the whole creation groaneth and travaileth in pain together
  until now." The resistance is cosmic, not local.

---

### A28. Fruitfulness continues, but delivery costs

**Grounding text**

> Genesis 3:16 — "Unto the woman he said, I will greatly multiply thy sorrow and thy conception;
> in sorrow thou shalt bring forth children; and thy desire shall be to thy husband, and he shall
> rule over thee."

**Observations**

1. **Text states (the asymmetry):** "I will greatly multiply thy sorrow **and thy conception**."
   Both are multiplied. The output increases _and_ the pain increases. The curse does not reduce
   fruitfulness; it multiplies both terms.
2. **Text states:** The pain is located at _delivery_: "in sorrow thou shalt bring forth
   children." Not in the conception, not in the existence of the child. In the bringing forth.
3. **Text states:** The output still arrives. Children are still born. The text does not say the
   fruit is lost.
4. **Text states (the New Testament reading of it):** John 16:21 — "A woman when she is in travail
   hath sorrow, because her hour is come: but as soon as she is delivered of the child, she
   remembereth no more the anguish, for joy that a man is born into the world." **Text states:**
   Jesus uses this as the model for the disciples' grief turning to joy — the pain is real and
   time-bounded, and the joy is attached to the delivery.
5. **Text states (the pattern applied to work):** Galatians 4:19 — "My little children, of whom I
   travail in birth again until Christ be formed in you." Paul applies the same image to
   formation work.

**Derivation**

_Inference._ If the output still comes and the pain is at the bringing-forth, then **pain is not
evidence that a course is wrong — every real thing has a hard delivery. But neither is pain a
licence to ignore the signal. Distinguish the pain of producing from the pain of a broken thing.
The first is the cost of the work; the second is information.**

The derivation turns on observation 2 — the _location_ of the pain. Pain at delivery is
structural. Pain at other points is not described in the curse and therefore requires a
different explanation.

**Business consequences**

- **Hard launches, hard fundraises, hard hires, hard migrations are normal.** They are the
  travail. An organisation that reads difficulty as a signal to stop will not finish anything.
- **But a specific, diagnosable pain is information.** The test is whether the pain is at the
  delivery or elsewhere. Pain in the middle of a process that should be routine is not travail;
  it is a symptom.
- **Do not use A28 to justify grinding.** The axiom says delivery costs. It does not say the cost
  is unbounded, or that every cost is legitimate. That is A27's discipline: price the thorns, and
  if the price exceeds the yield, the model is wrong.
- **The joy is attached to the delivery.** John 16:21 is explicit: the anguish is forgotten "as
  soon as she is delivered." This is an argument for finishing (A14) — unfinished travail is pain
  with no compensating event.

**Failure mode when violated**

Two opposite failures:

- **Quitting at the travail.** Abandoning things that are working because they are hard.
- **Grinding through a broken thing.** Enduring pain that is not travail but a symptom, and
  calling the endurance virtue.

The distinguishing question is A28's own: is this the pain of producing, or the pain of a broken
thing? The first has a delivery date and a known shape. The second does not.

**Extending verses**

- John 16:21 — travail and joy, in one sentence.
- Galatians 4:19 — travail as formation.
- Acts 14:22 — "…that we must through much tribulation enter into the kingdom of God."
- 1 Peter 1:6–7 — "…though now for a season, if need be, ye are in heaviness through manifold
  temptations: That the trial of your faith, being much more precious than of gold that
  perisheth, though it be tried with fire, might be found unto praise and honour and glory…"
  Note "if need be" and "for a season" — the pain is bounded and purposeful.
- Hebrews 12:11 — "Now no chastening for the present seemeth to be joyous, but grievous:
  nevertheless afterward it yieldeth the peaceable fruit of righteousness unto them which are
  exercised thereby." Note _afterward_, and note _exercised_ — the yield is conditioned on
  undergoing the process, not merely on the process occurring.

---

### A29. Authority gets contested

**Grounding text**

> Genesis 3:16 — "…and thy desire shall be to thy husband, and he shall rule over thee."

**Observations**

1. **Text states:** The statement follows the fall. It is part of the declaration of
   consequences. It describes a _change_, not the original design — in Genesis 2 the counterpart
   is an _ezer kenegdo_, a corresponding strength, with no ruling language.
2. **Text states:** Two things are named together: a desire directed at the other, and a rule
   exercised over the other. The two are in the same sentence, which suggests they are related.
3. **Text states (the disputed part):** The phrase "thy desire shall be to thy husband" is
   genuinely difficult, and faithful readers differ on whether it describes longing, or a desire
   to control, or something else. The same construction appears in Genesis 4:7 ("unto thee shall
   be his desire"). I will not manufacture certainty here: the text is not clear enough to settle
   it, and the axiom does not depend on the resolution.
4. **Text states:** Whatever the exact sense, the result is a _hierarchy that is a site of
   struggle_. The verse pairs a desire with a rule, and the history that follows — Sarai and
   Hagar, Rachel and Leah, Hannah and Peninnah, and every subsequent account — is a record of
   contest.
5. **Text states (the New Testament correction):** The New Testament does not abolish authority
   but redefines its exercise. Mark 10:42–45 and 1 Peter 5:1–4 both name the pagan model
   ("exercise lordship," "being lords over God's heritage") and forbid it.

**Derivation**

_Inference._ If hierarchy after the fall becomes a site of struggle rather than a smooth order,
then **expect the contest and design for it. Authority that is not legitimated by service becomes
domination, and domination produces resistance rather than followership.**

The derivation's force is in the word _expect_. The verse describes what is, not what ought to
be. A leader who is surprised by resistance has misread the environment, the same way a plan that
ignores thorns has misread the ground (A27).

**Text states (the correction):**

> Mark 10:42–45 — "But Jesus called them to him, and saith unto them, Ye know that they which are
> accounted to rule over the Gentiles exercise lordship over them; and their great ones exercise
> authority upon them. But so shall it not be among you: but whosoever will be great among you,
> shall be your minister: And whosoever of you will be the chiefest, shall be servant of all. For
> even the Son of man came not to be ministered unto, but to minister, and to give his life a
> ransom for many."

> 1 Peter 5:2–3 — "Feed the flock of God which is among you, taking the oversight thereof, not by
> constraint, but willingly; not for filthy lucre, but of a ready mind; Neither as being lords
> over God's heritage, but being ensamples to the flock."

**Business consequences**

- **Expect the contest.** Authority will be tested. That is not a hiring problem or a culture
  problem; it is the stated condition.
- **Service is the legitimating mechanism.** Both passages give the same alternative: the one who
  leads serves, and by serving becomes an _example_ rather than a lord. This is not a soft
  recommendation; it is the only alternative the text offers to domination.
- **Domination produces resistance, not followership.** The mechanism is worth stating: a person
  who complies because they must will comply only while watched, and will actively work against
  the arrangement wherever they can do so safely.
- **"Being ensamples" is a specific requirement.** 1 Peter 5:3 says the leader is to be an
  example. An example is something people can see and copy, which means the leader's actual
  behaviour is the management instrument.
- **The disputed phrase is not load-bearing.** Observation 3 matters for honesty. The axiom
  stands on the contest, which is plain, not on the resolution of the difficult clause.

**Failure mode when violated**

Authority that has to be continuously enforced. The bill arrives as compliance without
initiative, high turnover in the roles closest to the leader, and an organisation that cannot
function when the leader is absent.

**Extending verses**

- Mark 10:42–45 — above.
- 1 Peter 5:1–4 — above.
- John 13:1–17 — the footwashing: "If I then, your Lord and Master, have washed your feet; ye
  also ought to wash one another's feet. For I have given you an example, that ye should do as I
  have done to you." See `org-and-labour.md`.
- 3 John 1:9–10 — "I wrote unto the church: but Diotrephes, who loveth to have the preeminence
  among them, receiveth us not. Wherefore, if I come, I will remember his deeds which he doeth,
  prating against us with malicious words: and not content therewith, neither doth he himself
  receive the brethren, and forbiddeth them that would, and casteth them out of the church." The
  failure case in the New Testament: authority contested, then used to exclude.
- Numbers 16 — Korah's rebellion: the contest in its extreme form.
- 1 Samuel 8 — Israel demands a king; the contest between the requested authority and the actual
  one.

---

### A30. Mortality makes time the binding constraint

**Grounding text**

> Genesis 3:19 — "In the sweat of thy face shalt thou eat bread, till thou return unto the
> ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return."

**Observations**

1. **Text states:** The sentence has a _terminus_: "till thou return unto the ground." The
   working life is bounded by an end that is stated as certain.
2. **Text states:** The terminus applies to the worker, not the work. The ground remains; the man
   returns to it. The work outlives the worker.
3. **Text states (the pairing):** The verse joins labour and mortality in a single sentence. The
   two are not separate topics; the finitude is what makes the labour a bounded quantity.
4. **Text states (the wisdom literature's response):** Psalm 90:12 — "So teach us to number our
   days, that we may apply our hearts unto wisdom." **Text states:** The prayer is not for more
   days; it is for the ability to _count_ them.
5. **Text states (the failure case):** Luke 12:16–21 — the rich man plans barns with no account
   of his own end, and is called a fool: "But God said unto him, Thou fool, this night thy soul
   shall be required of thee: then whose shall those things be, which thou hast provided?"

**Derivation**

_Inference._ If finite time is the base constraint under every plan, then **opportunity cost is
the real cost of everything. The correct question is rarely "is this good?" but "is this the best
use of the years it will consume?"**

The derivation rests on observation 2: the work outlives the worker. That means every commitment
is a _transfer_ of a slice of a finite life into a thing that will persist after the slice is
gone. The cost of the commitment is the slice; the question is whether the thing is worth it.

**Business consequences**

- **Opportunity cost is the unit of account.** Not cash, not headcount. Cash is replenishable;
  years are not.
- **The real deadline is the one that exists.** `SKILL.md` step 1: distinguish the deadline that
  exists from the one that feels urgent. Most urgency is manufactured by someone else's poor
  planning. The anti-pattern: "Decision by urgency rather than by deadline → you spend your life
  on other people's fires."
- **Luke 12:16–21 is the failure mode.** The man is not condemned for planning or for building.
  He is condemned for planning without an account of his own end, and for addressing his own soul
  with a plan that had no term: "Soul, thou hast much goods laid up for many years."
- **Numbering days is a discipline, not a mood.** Psalm 90:12 asks for the _ability_, which means
  it is a skill. Budgeting years the way you budget money is the practice.
- **It applies to the founder's own tenure.** A founder who will not name their own end date has
  the same defect as the rich fool.

**Failure mode when violated**

Spending the finite resource on someone else's urgency. The bill arrives as a career that was
busy and produced nothing the person would name as theirs.

**Extending verses**

- Psalm 90:12 — "So teach us to number our days…"
- Psalm 39:4–5 — "LORD, make me to know mine end, and the measure of my days, what it is: that I
  may know how frail I am. Behold, thou hast made my days as an handbreadth…"
- James 4:14 — "Whereas ye know not what shall be on the morrow. For what is your life? It is
  even a vapour, that appeareth for a little time, and then vanisheth away."
- Ephesians 5:15–16 — "See then that ye walk circumspectly, not as fools, but as wise, Redeeming
  the time, because the days are evil."
- John 9:4 — "I must work the works of him that sent me, while it is day: the night cometh, when
  no man can work."
- Luke 12:15 — "…for a man's life consisteth not in the abundance of the things which he
  possesseth."

---

### A31. Recovery is provided, and it costs something that is not you

**Grounding text**

> Genesis 3:21 — "Unto Adam also and to his wife did the LORD God make coats of skins, and clothed
> them."

**Observations**

1. **Text states:** The covering is _made_ and _given_. "The LORD God make coats of skins, and
   clothed them." The man did not make it and did not ask for it.
2. **Text states (the cost):** Coats of _skins_ require animals. The text does not say which
   animals or how many, but the material is stated. **Inference:** the covering required a death
   that is not the man's.
3. **Text states (the contrast):** In verse 7 the man made himself aprons of fig leaves. The
   contrast is explicit — a self-made covering, then a provided one. The provided one is the one
   that persists.
4. **Text states (the sequence):** The covering comes _after_ the judgment (vv. 14–19) and
   _before_ the expulsion (v. 23). It is given to a person who has already failed and already
   been sentenced.
5. **Text states:** The covering is not conditional on anything the man does. There is no
   request, no confession, and no penance recorded between verse 20 and verse 21.

**Derivation**

_Inference._ If failure is covered and the covering required a life, then **failure is
survivable, and recovery is never free; something or someone pays for it. Reserves exist to be
the thing that pays.**

The derivation has two halves and both are needed:

- **Failure is survivable.** Observation 4. The covering comes after the sentencing. A person who
  has already failed is still clothed.
- **Recovery is never free.** Observation 2. The coat cost an animal.

The business application follows from the second half: a reserve is the thing that pays. Build it
before you need it, and treat it as the cost of being allowed to fail, not as idle capital.

**Text states (the doctrinal extension):** Scripture states the pattern explicitly in the New
Testament, applying it to a different kind of covering:

> Leviticus 17:11 — "For the life of the flesh is in the blood: and I have given it to you upon
> the altar to make an atonement for your souls: for it is the blood that maketh an atonement for
> the soul."

> Hebrews 9:22 — "And almost all things are by the law purged with blood; and without shedding of
> blood is no remission."

The business inference is not that a company's reserve is a sacrifice. It is that the _structure_
— covering costs something, and the something is not the person covered — recurs, and that a
company which expects recovery to be free has misread the pattern.

**Business consequences**

- **Build reserves before you need them.** A reserve assembled during the crisis is not a reserve;
  it is a distress sale.
- **Treat the reserve as the cost of being allowed to fail, not as idle capital.** This reframing
  is the axiom's contribution to the reserve debate. Capital held for recovery is not
  underperforming; it is performing the function it was set aside for.
- **Name what pays.** The reserve, the insurance policy, the parent company, the customer
  contract, the patient shareholder. If nothing is named, nothing will pay.
- **The self-made covering is the first instinct.** Observation 3. Fig leaves are what the
  organisation reaches for: a statement, a restructure, a rebrand. They do not persist.
- **Failure is survivable.** This is the counterweight, and it is needed. An organisation that
  believes failure is terminal will conceal it (A25) and will never attempt anything with a real
  chance of failure (A11).

**Failure mode when violated**

An uncovered failure, and specifically a failure whose cost lands on the wrong party — the
supplier, the employee, the customer, the family. The anti-pattern table does not list A31, but
the mechanism is visible in A25 and A32.

**Extending verses**

- Isaiah 53:5–6 — "But he was wounded for our transgressions, he was bruised for our iniquities:
  the chastisement of our peace was upon him; and with his stripes we are healed. All we like
  sheep have gone astray…" The covering is borne by another.
- 2 Corinthians 5:21 — "For he hath made him to be sin for us, who knew no sin; that we might be
  made the righteousness of God in him."
- Romans 5:8 — "But God commendeth his love toward us, in that, while we were yet sinners, Christ
  died for us."
- Psalm 49:7–8 — "None of them can by any means redeem his brother, nor give to God a ransom for
  him: (For the redemption of their soul is precious, and it ceaseth for ever:)" The cost is
  beyond what the person can pay.
- Leviticus 17:11; Hebrews 9:22 — above.

---

### A32. Some states must not be allowed to become permanent

**Grounding text**

> Genesis 3:22 — "And the LORD God said, Behold, the man is become as one of us, to know good and
> evil: and now, lest he put forth his hand, and take also of the tree of life, and eat, and live
> for ever:"
> Genesis 3:23 — "Therefore the LORD God sent him forth from the garden of Eden, to till the
> ground from whence he was taken."

**Observations**

1. **Text states (the stated reason):** "lest he put forth his hand, and take also of the tree of
   life, and eat, and live for ever." The expulsion is explained by what it _prevents_.
2. **Text states:** The action taken is _preventive_, not punitive. The sentence has already been
   pronounced in verses 14–19. The expulsion is a separate act, and its stated purpose is to stop
   a condition from becoming irreversible.
3. **Text states:** The condition being prevented is _permanent life in a fallen state_. The
   problem is not the life; it is the permanence.
4. **Text states:** The prevention is immediate — "therefore." No delay is described between the
   decision and the act.
5. **Text states (the permanence that does apply):** Other consequences in this chapter are
   explicitly permanent: "all the days of thy life" (v. 17), "till thou return unto the ground"
   (v. 19). **Inference:** the text distinguishes between permanent _consequences_ that are
   declared and permanent _states_ that are prevented. Only the second is gated.

**Derivation**

_Inference._ If a bad condition was prevented from becoming irreversible, then **identify the
actions that cannot be undone and gate them — irreversible deletions, runaway obligations,
contracts without exit, architectures you can never migrate off. Slow these down on purpose.
Speed is for reversible decisions.**

The derivation rests on observation 1: the reason for the act is stated, and the reason is
permanence. A reader who accepts the reason has the principle.

**Business consequences**

- **Sort decisions by reversibility, and set the speed accordingly.** This is the axiom's
  operational form and it is the single most useful thing in this file for day-to-day management.
  Reversible decisions should be made fast by the people closest to them. Irreversible decisions
  should be slowed, escalated, and reviewed.
- **Name the irreversible set explicitly.** Data deletion, publishing to customers, signing
  without an exit, hiring into a role with no removal path, architecture commitments, public
  statements, personal guarantees, and equity issuance.
- **Add friction, not prohibition.** The text does not say the tree of life was destroyed; the
  way was guarded (3:24). The design pattern is _gated access_, not elimination. This connects
  directly to A33.
- **A contract without an exit is an irreversible decision with a signature.** The exit clause is
  the gate.
- **The anti-pattern is not "moving fast."** It is moving fast _on the irreversible set_, which
  is the only place where speed is genuinely dangerous.

**Failure mode when violated**

An irreversible state entered casually. The bill arrives as a commitment that cannot be unwound,
a migration that cannot be reversed, a disclosure that cannot be recalled, or a deletion that
cannot be restored — and always with the same accompanying sentence: "we didn't realise it was
permanent."

**Extending verses**

- Hebrews 9:27 — "And as it is appointed unto men once to die, but after this the judgment." Some
  events are once-only.
- Luke 16:26 — "And beside all this, between us and you there is a great gulf fixed: so that they
  which would pass from hence to you cannot; neither can they pass to us, that would come from
  thence." A state past which movement is impossible.
- Proverbs 4:23 — "Keep thy heart with all diligence; for out of it are the issues of life."
  Guarding the source.
- Matthew 7:6 — "Give not that which is holy unto the dogs, neither cast ye your pearls before
  swine, lest they trample them under their feet, and turn again and rend you." An irreversible
  disclosure.
- Revelation 22:11 — "He that is unjust, let him be unjust still: and he which is filthy, let him
  be filthy still: and he that is righteous, let him be righteous still: and he that is holy, let
  him be holy still." A point at which the state is fixed.

---

### A33. Access is guarded, and the guard is a feature

**Grounding text**

> Genesis 3:24 — "So he drove out the man; and he placed at the east of the garden of Eden
> Cherubims, and a flaming sword which turned every way, to keep the way of the tree of life."

**Lexical**

- **H8104 שָׁמַר (_shamar_)** — "properly, to hedge about (as with thorns), i.e. guard; generally,
  to protect, attend to, etc." Rendered "keep." **Text states:** This is the same verb used of the
  man's second duty in the garden (Genesis 2:15, "to dress it and to keep it"). The verb that
  describes the gardener's protective work describes the guard at the gate.

**Observations**

1. **Text states:** The guard is _placed_, deliberately, by the same agent who made the garden.
   It is not a consequence that emerged; it is an act.
2. **Text states:** The guard has a _specific function_: "to keep the way of the tree of life."
   Not to punish, not to intimidate. To keep a way — an access route.
3. **Text states:** The guard is _permanent and active_: "a flaming sword which turned every
   way." The description is of continuous motion. It is not a locked door; it is a watched one.
4. **Text states:** The guarded thing is the _means of life_, not the garden as such. The man is
   expelled from the garden (v. 23), but the specific object of the guard is the tree of life.
5. **Text states:** Access control is established in the narrative _before_ any human institution
   exists. It is not an accommodation to a fallen society; it is part of the order that follows
   the fall, established by God.

**Derivation**

_Inference._ If security and access control are established in the good order, not only against
evil, then **permissions, locks, and limits belong in the design.**

The derivation has two halves:

**First, guarding is not a symptom of distrust.** Observation 5. The guard was placed by the
maker, and its function is stated positively — to keep a way. A company that treats access
control as an insult to its people has misread the model.

**Second, the real permanent cost of failure is lost access.** Observation 4 and the phrase
itself: "to keep the way." What was lost in Genesis 3 was not primarily comfort or a garden; it
was _the way in_. Guard the way back in — to the garden, the market, the account, the trust.

**Business consequences**

- **Permissions, locks, and limits belong in the design.** They are design elements, not
  afterthoughts bolted on after an incident.
- **The guard is active, not passive.** "A flaming sword which turned every way." A static
  permission granted once and never reviewed is not a guard.
- **The guarded asset should be named.** What is the tree of life in your business? The
  production database, the signing keys, the customer list, the brand, the ability to ship.
  Guard that, specifically.
- **Lost access is the permanent cost.** Trust, once lost, is a closed way. This is the reason
  A22 matters so much: reputation is an access route.
- **Guarding is _shamar_ — the same word as A17's "keep."** Building and keeping are the same
  duty (A17), and keeping includes guarding access. The two axioms are one instruction seen from
  two angles.

**Failure mode when violated**

Open access in the name of speed or trust. The bill arrives as an incident, and then a second
bill — the loss of the access itself, which cannot be restored by fixing the first problem.

**Extending verses**

- Matthew 7:6 — "Give not that which is holy unto the dogs…"
- Revelation 22:14–15 — "Blessed are they that do his commandments, that they may have right to
  the tree of life, and may enter in through the gates into the city. For without are dogs, and
  sorcerers…" Access is explicitly a right, and it is explicitly gated.
- Proverbs 4:23 — "Keep thy heart with all diligence; for out of it are the issues of life."
- Matthew 25:10–12 — "…and the door was shut… But he answered and said, Verily I say unto you, I
  know you not." Access can close permanently.
- 1 Corinthians 9:24–27 — "But I keep under my body, and bring it into subjection: lest that by
  any means, when I have preached to others, I myself should be a castaway." Guarding one's own
  access.
- Nehemiah 2:20 — "…but ye have no portion, nor right, nor memorial, in Jerusalem." Access is
  explicitly denied to parties with no standing.

---

### A34. There is a permanent adversary, and the victory is asymmetric

**Grounding text**

> Genesis 3:15 — "And I will put enmity between thee and the woman, and between thy seed and her
> seed; it shall bruise thy head, and thou shalt bruise his heel."

**Observations**

1. **Text states:** The enmity is _established by God_: "I will put enmity." It is not a natural
   rivalry that arose; it is declared.
2. **Text states:** The enmity is _ongoing and generational_: "between thy seed and her seed." It
   is a permanent feature, not a single event.
3. **Text states (the asymmetry):** Two strikes, at two different targets. _Head_ and _heel_.
   Different anatomical targets, different severities. The head-strike is decisive; the
   heel-strike is painful and survivable.
4. **Text states:** The one who receives the head-strike delivers the heel-strike. The same
   sentence assigns both. The wound and the victory are connected.
5. **Text states:** The verse is spoken to the serpent, in the middle of the judgments. It is
   the first promise in Scripture, and it is addressed to the enemy rather than to the man.
6. **Text states (the New Testament identification):** Revelation 12:9 — "And the great dragon
   was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world."
   **Text states:** Romans 16:20 — "And the God of peace shall bruise Satan under your feet
   shortly." The same verb, the same asymmetry, applied.

**Derivation**

_Inference._ If conflict is not a phase and the promised win is to the head while the cost is to
the heel, then **competition and opposition are enduring, not transitional. Expect the heel-wound
as the price of the head-crush — and aim at the head. The long game is the only game.**

The derivation's engine is observation 3. If the two strikes were equivalent, the instruction
would be to trade blows. Because they are not equivalent, the correct strategy is to accept the
heel and target the head — which is a statement about what to absorb and what to attack.

**Business consequences**

- **Opposition is permanent.** A business that expects competition to end — after the next
  release, the next raise, the next regulation — has misread the environment. There is no
  configuration of the market in which opposition stops.
- **Expect the heel-wound.** Being copied, undercut, criticised, sued, and misrepresented are the
  price. They are not evidence that the strategy is wrong. A strategy that produces no
  opposition is either trivial or already dead.
- **Aim at the head.** The heel is survivable; the head is decisive. In competitive terms: attack
  the thing that determines whether the competitor can continue — their economics, their
  distribution, their key constraint — not the thing that merely annoys them.
- **Do not confuse the adversary with a person.** Ephesians 6:12 is explicit: "For we wrestle not
  against flesh and blood, but against principalities, against powers, against the rulers of the
  darkness of this world, against spiritual wickedness in high places." A competitor is not the
  enemy, and treating a competitor as the enemy produces both bad strategy and bad ethics.
- **The long game is the only game.** Observation 2: the enmity is generational. A plan that
  requires the conflict to resolve within a quarter is not a plan.

**Failure mode when violated**

Two opposite failures, and both are common:

- **Expecting opposition to end.** The bill arrives as a strategy built on a temporary advantage
  that was assumed to be permanent.
- **Trading blows at the wrong level.** Retaliating in kind — matching a price cut, answering a
  smear — which is a heel-strike exchange in a contest that is decided at the head.

**Extending verses**

- 1 Peter 5:8 — "Be sober, be vigilant; because your adversary the devil, as a roaring lion,
  walketh about, seeking whom he may devour."
- Revelation 12:9 — the identification of the serpent.
- Ephesians 6:12 — not flesh and blood.
- Matthew 10:16 — "Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise
  as serpents, and harmless as doves." Both qualities, simultaneously.
- 2 Corinthians 2:11 — "Lest Satan should get an advantage of us: for we are not ignorant of his
  devices." The devices are knowable, which means the defence is preparable.
- 1 John 3:8 — "…For this purpose the Son of God was manifested, that he might destroy the works
  of the devil." The head-strike, stated.
- Romans 16:20 — "And the God of peace shall bruise Satan under your feet shortly."

---

## Appendix: verification log

Every verse quoted in this file was retrieved with `scripture.ts lookup` or `scripture.ts
search`. Every Hebrew and Greek claim was retrieved with `lexicon.ts`. This appendix records what
was verified, what was counted, and what could not be verified with the available tools.

### Counts verified by search

| Claim                                             | Method                                                         | Result                                                                               |
| ------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| "And God said" appears ten times in Genesis 1     | `scripture.ts search "And God said" --book Genesis`            | **10** occurrences in Genesis 1: vv. 3, 6, 9, 11, 14, 20, 24, 26, 28, 29             |
| "God saw … good" appears seven times in Genesis 1 | `scripture.ts search "God saw" --book Genesis`                 | **7** occurrences in Genesis 1: vv. 4, 10, 12, 18, 21, 25, 31 (v. 31 is "very good") |
| "Evening and the morning" appears six times       | `scripture.ts search "evening and the morning" --book Genesis` | **6** occurrences: 1:5, 8, 13, 19, 23, 31                                            |
| Divide/divided recurs in Genesis 1                | `scripture.ts search "divid" --regex --book Genesis`           | **5** occurrences in Genesis 1: vv. 4, 6, 7, 14, 18                                  |
| "After his kind" recurs in Genesis 1              | `scripture.ts lookup "Genesis 1:11-12, 21, 24-25"`             | **7** occurrences across those verses                                                |

### Lexical claims verified with `lexicon.ts`

H7225 _reshith_, H1254 _bara_, H776 _erets_, H8064 _shamayim_, H8414 _tohu_, H922 _bohu_,
H2822 _choshek_, H7307 _ruach_, H7363 _rachaph_, H2896 _towb_, H6754 _tselem_, H1823 _demuth_,
H4390 _male_, H3533 _kabash_, H7287 _radah_, H3240 _yanach_, H5647 _abad_, H8104 _shamar_,
H5828 _ezer_, H5048 _neged_, H4150 _moed_, H216 _or_, H3117 _yom_, H7676 _shabbath_, H127
_adamah_, H4941 _mishpat_, H2617 _chesed_, H6800 _tsana_, G5007 _talanton_, G3623 _oikonomos_,
G3414 _mna_, G1220 _denarion_, G4102 _pistis_, G4151 _pneuma_, G5287 _hypostasis_, G1411
_dynamis_, G3140 _martyreo_, G4678 _sophia_. All definitions quoted verbatim.

### Claims I could NOT verify with the supplied tools

These are stated explicitly rather than papered over.

1. **The concordance claim for H5828 _ezer_.** The claim is that _ezer_ is "also used of God as
   Israel's help." What the tools verify: Strong's defines H5828 as "aid"; H5828 appears as a
   component in the names Eliezer ("God of help," H410 + H5828), Azriel ("help of God," H5828 +
   H410), and Ebenezer ("stone of the help," H68 + H5828); and Exodus 18:4 glosses the name
   Eliezer as "the God of my father… was mine help." What the tools do **not** provide: the
   supplied Strong's data is a dictionary with no verse-level tagging, and the bundled KJV JSON
   has no Strong's numbers attached. So I could not confirm at the word level that Psalm 121:2,
   Psalm 124:8, Deuteronomy 33:29, or Psalm 33:20 use H5828. The KJV English of those verses
   does speak of God as help, and the name-derivation evidence is strong, but the concordance
   claim is **unverified here**. Treat it as well-supported, not proven.

2. **The talent's value (≈6,000 denarii, ≈20 years of a labourer's wages).** Strong's G5007
   _talanton_ is defined as "a balance (as supporting weights), i.e. (by implication) a certain
   weight (and thence a coin or rather sum of money) or 'talent'." The dictionary contains no
   figure in denarii, and no occurrence of "denarii" at all (checked by direct search of the
   Strong's source data). The 6,000-denarii figure is a historical/numismatic claim from outside
   these tools. It is consistent with Scripture in one respect that _is_ verifiable: Matthew 20:2
   shows a penny (_denarion_, G1220, "a denarius") as a day's wage, so 6,000 denarii would be
   roughly 20 years of working days. But the anchor figure itself is **unverified here**. See
   `capital-and-stewardship.md`, where the point is made carefully.

3. **The talent-to-mina ratio (1 talent = 60 minas).** Not stated in Strong's. G3414 _mna_ is
   defined only as "a mna (i.e. mina), a certain weight." The ratio is **unverified here**.

4. **Genesis 3:16, "thy desire shall be to thy husband."** The Hebrew construction is disputed
   among faithful readers. I have not resolved it and the axiom does not depend on the
   resolution. See A29, observation 3.

5. **The "5–10× rewrite cost" figure.** This is an engineering estimate carried in `SKILL.md`,
   not a scriptural number. It is labelled as an inference in A17.

6. **Referenced files that do not exist.** `skills/scripture-foundations/SKILL.md` cites
   `skills/scripture-foundations/references/original-language.md`, `skills/scripture-foundations/references/kjv-1611.md`, `skills/scripture-foundations/references/chapter-map.md`, and
   `skills/scripture-foundations/references/genesis-1-3.md`. None of those files are present in the installed skill directory
   (checked: the skill folder contains `SKILL.md` and `scripts/` only). The lexical content they
   would carry was therefore taken directly from `lexicon.ts` output instead.
