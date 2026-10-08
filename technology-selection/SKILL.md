---
name: technology-selection
description: Choosing technology and deciding what to do with it. Use this when the user asks whether to adopt a specific tool, whether to build their own system, whether to migrate, or whether to rewrite. It covers the choice of stack, internal tools, platforms, frameworks, migrations, and automation, and the buy, build, borrow, or wait decision. It works from the specification and not from the tool. It prices the whole cost, including the cost to keep the system. It gates the decisions that nobody can reverse, and it asks for the smallest version that works. It rests on Scripture and on the axioms of business-first-principles, and it labels each application as an inference.
---

# Technology Selection

## What this skill is for

A technology decision is a decision about shape before it is a decision about a tool. The shape
is what the work must do. The tool is one way to do it. This skill keeps the two in order, prices
the whole cost, and gates the choices that nobody can undo.

Two rules govern the file:

1. Every business and technical application is an inference. The text reports what God told
   Moses and what Bezaleel did. A reading of Exodus 25 is the reading of a fallible person. Say
   "this suggests", not "the Bible commands".
2. No verse names a programming language, a vendor, or a platform. The text gives principles
   about specification, cost, maintenance, and reversibility. The application to a stack is
   derived, and the file shows the derivation.

## How to read the claims

- "Text states" means that the verse says it. The verse is quoted above the claim.
- "Lexical" means that the Strong's entry says it. The definition is copied from
  `../scripture-foundations/scripts/lexicon.ts`.
- "Inference" means that a reader drew it. The file shows the derivation.
- "Contested" means that serious practitioners disagree, or faithful readers disagree.

One tool limit applies to the whole file. The supplied Strong's data has no verse-level tagging.
A verse to Strong's mapping is a standard concordance association and not a tool finding.

## Shaping before filling

Text (Proverbs 24:3-4, KJV):

> 3 Through wisdom is an house builded; and by understanding it is established:
> 4 And by knowledge shall the chambers be filled with all precious and pleasant riches.

Text states: the verses give a sequence. Wisdom builds. Understanding establishes. Knowledge
fills.

Text states: the filling comes last, and it is the filling of chambers. The rooms exist before
the contents arrive.

Inference: the sequence applies to systems. People build a house, then make it stable, then
furnish it. A team specifies a system, then makes it reliable, then loads it with features and
data.

Inference: a tool that a team chooses before it understands the shape fills rooms that must not
exist. The features arrive before the container, and the container never forms. This violates
A5, "Formation precedes filling."

The practical test: before you compare tools, write one paragraph that says what the system is
for. If you cannot write the paragraph, the selection is premature.

## Sharpen the tool

Text (Ecclesiastes 10:10, KJV):

> If the iron be blunt, and he do not whet the edge, then must he put to more strength: but wisdom is profitable to direct.

Text states: the blunt tool has a cost. The worker must "put to more strength".

Text states: the remedy is to sharpen. The text says "whet the edge".

Text states: the result clause attaches to direction, not to the tool. The verse says "wisdom is
profitable to direct."

Inference: tooling is an investment with a return. The return arrives as less effort for the same
output, or the same effort for more output.

Inference: the verse attaches the return to direction. A sharp tool in the wrong direction
produces bad work faster. This is the failure mode of an adoption that the appeal of the tool
drives.

The practical test: state the labor that the tool removes, and estimate the hours. Then state who
directs the tool. If nobody directs it, the sharpening will not return its cost.

## Count the cost first

Text (Luke 14:28-30, KJV):

> 28 For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?
> 29 Lest haply, after he hath laid the foundation, and is not able to finish it, all that behold it begin to mock him,
> 30 Saying, This man began to build, and was not able to finish.

Text (Luke 14:31-32, KJV):

> 31 Or what king, going to make war against another king, sitteth not down first, and consulteth whether he be able with ten thousand to meet him that cometh against him with twenty thousand?
> 32 Or else, while the other is yet a great way off, he sendeth an ambassage, and desireth conditions of peace.

Text states: the builder counts before he builds. The count decides whether the work starts.

Text states: the failure case is a stopped project with a visible foundation. The cost of the
failure includes the mockery.

Text states: the second case is a comparison of forces. The king consults whether ten thousand
can meet twenty thousand. "Or else" he sends for "conditions of peace."

Inference: the text gives terms as the alternative when the count fails. It does not say that ten
thousand against twenty thousand always leads to terms. The result depends on the count.

Text states: the king acts before contact. He sends while the other is "yet a great way off."

Inference: both passages treat the estimate before the commitment as the decision point. The
second case adds an option. When the numbers are wrong, avoid the engagement.

Inference: the second case is the borrow option or the wait option. A decision that cannot win
becomes a negotiation or a delay.

### The full cost list

Inference: a technology decision carries seven costs. Name each one before the decision:

1. License or build cost. The purchase price, the subscription, or the engineering hours.
2. Integration cost. The work to connect the new thing to the current systems, the data, and the
   identity provider. Inference: this line is often large, and teams often omit it.
3. Training cost. The hours that every affected person needs to reach working competence on the
   new tool, plus the lost output during the learning curve.
4. Migration cost. The work to move existing data and existing behavior. Include the dual-running
   period, when both systems operate and both need support.
5. The maintenance burden. The keep cost from `references/total-cost.md`. This line recurs every
   year.
6. The exit cost. The work to leave, in hours and in dollars. Include the contract term, the data
   export, and the retraining.
7. The opportunity cost. The other work that the same people cannot do. This is A30, "Mortality
   makes time the binding constraint," applied to the finite hours of the team.

The failure mode: a team compares two license prices and calls it an analysis. The integration,
training, and keep lines are the decision, and the price page of the vendor does not show them.

## Build to a specification

Text (Exodus 25:9, KJV):

> According to all that I shew thee, after the pattern of the tabernacle, and the pattern of all the instruments thereof, even so shall ye make it.

Text (Exodus 25:40, KJV):

> And look that thou make them after their pattern, which was shewed thee in the mount.

Text (Hebrews 8:5, KJV):

> Who serve unto the example and shadow of heavenly things, as Moses was admonished of God when he was about to make the tabernacle: for, See, saith he, that thou make all things according to the pattern shewed to thee in the mount.

Lexical: H8403 _tabniyth_ is the standard word behind "pattern" in Exodus 25. The entry reads
"structure; by implication, a model, resemblance". The gloss list includes "figure", "form", and
"likeness".

Lexical: G5179 _typos_ stands behind "pattern" in Hebrews 8:5. The entry reads "a die (as
struck), i.e. (by implication) a stamp or scar; by analogy, a shape, i.e. a statue,
(figuratively) style or resemblance; specially, a sampler ("type"), i.e. a model (for imitation)
or instance (for warning)".

In this file, the word "specification" stands for what the KJV calls the "pattern": the model of
the work that the maker receives before the work starts.

Text states: God shows the "pattern" before the making begins. Exodus gives the instruction twice,
and Hebrews quotes it again.

Text states: the "pattern" covers the tabernacle and all its instruments. Exodus 25:9 says "the
pattern of the tabernacle, and the pattern of all the instruments thereof".

Text states (1 Chronicles 28:11-19): David gives Solomon the "pattern" of the house, the
chambers, the treasuries, and the courts. Verse 19 says "All this, said David, the LORD made me
understand in writing by his hand upon me, even all the works of this pattern."

Text states: the "pattern" arrives in writing.

Inference: the specification is the primary artifact, and the tool is the thing that implements
it. A system without a specification has no way to judge whether it is finished. This violates
A14, "Completion is a real state."

The practical test: the specification must name the parts, the boundaries between them, the data
that flows, and the behavior at the edges. A specification that names only the screens is not a
specification.

## Sequence the work

Text (Proverbs 24:27, KJV):

> Prepare thy work without, and make it fit for thyself in the field; and afterwards build thine house.

Text states: the order is preparation, then fit, then build.

Text states: the preparation happens "without", and the fit happens "in the field". Both come
before the house.

Inference: readiness comes before construction. The groundwork for a system is the data, the
process, and the people. The build starts when those are ready.

Inference: a system on unprepared ground inherits the disorder of the ground. The data will be
dirty, the process will be undefined, and the people will be untrained. The software then becomes
the container for the disorder.

## Do not hurry an adoption

Text (Isaiah 28:16, KJV):

> Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste.

Text states: the foundation is "tried", which means tested.

Text states: the verse states the result for the one who trusts it in the negative: "shall not
make haste."

A32 in `business-first-principles`, "Some states must not be allowed to become permanent," also
states that speed is for reversible decisions. The axiom rests on Genesis 3:22-23, where God
prevents a bad condition from becoming irreversible.

Inference: hurry is a symptom of a foundation that nobody trusts. It is not a property of the
work. This is the reading in `../business-first-principles/references/trends-and-timing.md`, Part
7.

Inference: the same logic gates technology decisions. A reversible decision can move fast. An
irreversible decision deserves the delay.

### The reversibility test

Inference: classify the decision before the choice.

| Class      | The test                                                 | The treatment                     |
| ---------- | -------------------------------------------------------- | --------------------------------- |
| Reversible | A swap takes days, and the exit cost is small            | Move fast, and learn by doing     |
| Costly     | A swap takes months, and the exit cost is real           | Pilot, then decide                |
| Permanent  | A swap touches the data, the contracts, or the ecosystem | Gate it, and delay the commitment |

Five questions classify the decision:

1. How long does exit take? Days, months, or never.
2. What is the exit cost? Include the data export, the contract term, and the retraining.
3. Does the decision create a format or a data store that others depend on? Data gravity makes a
   decision permanent without a signature.
4. How many systems must change with it? A change that forces five other changes is a migration
   in the clothes of a purchase order.
5. Can both systems run at once during a transition? A parallel run buys reversibility and costs
   double support.

Text states (Luke 14:31): the king with ten thousand assesses before contact.

Inference: the assessment is the reversibility test in narrative form.

## Compatibility

Text (Matthew 9:17, KJV):

> Neither do men put new wine into old bottles: else the bottles break, and the wine runneth out, and the bottles perish: but they put new wine into new bottles, and both are preserved.

Lexical: G779 _askos_ stands behind "bottles". The entry reads "a leathern (or skin) bag used as a
bottle".

Lexical: G3631 _oinos_ stands behind "wine". The entry reads "\"wine\" (literally or
figuratively)".

Text states: the failure destroys both. "the bottles break, and the wine runneth out, and the
bottles perish."

Text states: the remedy is a matched pair. "they put new wine into new bottles, and both are
preserved."

Inference: the image is a compatibility test. The container and the contents must match in their
behavior over time. New wine ferments, and the old skin cannot stretch.

Inference: the business reading is not "always replace everything". The reading is that the new
component forces the container to change. Name that change before the commitment.

### The compatibility questions

Inference: ask these questions before you add a component to a running system:

1. Does the new component share the data model, the identity model, and the deployment model?
2. Does the new component demand that an existing component change? If yes, the project is two
   projects.
3. Do the two have the same upgrade cadence? A fast-moving component beside a frozen one creates a
   permanent integration.
4. What happens at the version boundary? Name the failure when one side upgrades first.
5. Can the system run with both versions at once?

The failure mode: the new component works in the demonstration and fails in production, because
the container cannot stretch. The team then blames the component.

## Do not break what works

Text (Proverbs 22:28, KJV):

> Remove not the ancient landmark, which thy fathers have set.

Text (Proverbs 25:4, KJV):

> Take away the dross from the silver, and there shall come forth a vessel for the finer.

Lexical: H1366 _gebuwl_ is the standard word behind "landmark". The entry reads "properly, a cord
(as twisted), i.e. (by implication) a boundary; by extension the territory inclosed". The KJV
gloss list includes "border", "bound", "coast", and "landmark".

Lexical: H5509 _siyg_ is the standard word behind "dross". The entry reads "scoria". The KJV gloss
list gives "dross".

Text states: the landmark is a boundary that a previous generation set. The instruction is to
leave it.

Text states: the verse commands the removal of the dross, and the removal is the point.

Inference: the two verses do different work. One protects the boundary. The other commands the
removal of the waste.

Inference: the distinction is between the boundary and the waste. The boundary is what the system
is for. The waste is what the system accumulated.

The practical test: for every component that you plan to remove, answer two questions. Does this
component define the boundary of the system, or does it accumulate inside the boundary? Who
outside your team depends on it? An external dependency is a landmark, even when the code looks
like dross.

Text states (Proverbs 23:10): "Remove not the old landmark; and enter not into the fields of the
fatherless." The second clause links the boundary to the protection of someone else.

Contested: the line between a foundation and an encumbrance is a judgment call, and honest
engineers disagree on specific cases. The file does not settle a case from the text. It requires
that you ask the question and answer it in writing.

## Maintenance parity

Text (Genesis 2:15, KJV):

> And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.

Lexical: H5647 _abad_ stands behind "dress". The entry reads "to work (in any sense); by
implication, to serve, till, (causatively) enslave, etc." The gloss list includes "dress",
"keep", "labour", "serve", and "till".

Lexical: H8104 _shamar_ stands behind "keep". The entry reads "properly, to hedge about (as with
thorns), i.e. guard; generally, to protect, attend to, etc." The gloss list includes "keep(-er,
self)", "observe", "preserve", "regard", "reserve", and "watch(-man)".

Text states: the verse gives two verbs together as the job. God puts the man in the garden to
dress it and to keep it.

A17 in `business-first-principles`, "Building and keeping are equal partners," also states that
most businesses die of keep failure while they congratulate themselves on dress.

Inference: the total cost of ownership is the dress plus the keep. The build is the dress. The
maintenance, the support, the upgrades, the monitoring, and the eventual replacement are the
keep.

Inference: a system with no named keeper will decay. The decay is not a risk. It is the baseline,
and A2, "The default state is formless and empty," states it directly.

Inference: the keep cost recurs, and it does not end. A system that ships without a keeper
borrows against a future budget that nobody approved.

The full checklist of omitted costs is in `references/total-cost.md`.

## Build and defend at once

Text (Nehemiah 4:17-18, KJV):

> 17 They which builded on the wall, and they that bare burdens, with those that laded, every one with one of his hands wrought in the work, and with the other hand held a weapon.
> 18 For the builders, every one had his sword girded by his side, and so builded. And he that sounded the trumpet was by me.

Text states: the builders work and carry a weapon at the same time.

Text states: the trumpeter stands with Nehemiah, and the alarm has a stated meaning later in the
chapter (4:20, "our God shall fight for us").

Inference: a migration happens while the running system keeps serving. The team cannot stop
delivery to work on the replacement.

Inference: the defending hand needs a plan, a rotation, and an alarm. Name who answers a
production incident during the migration, because the migration consumes the people who usually
answer it.

Contested: some teams stop feature work for a migration, and some teams run both. The text
supports running both. It does not state a rule for how long that can continue, and the cost of
running both is high.

## Waste diagnosis

Text (Haggai 1:5-6, KJV):

> 5 Now therefore thus saith the LORD of hosts; Consider your ways.
> 6 Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are not filled with drink; ye clothe you, but there is none warm; and he that earneth wages earneth wages to put it into a bag with holes.

Text states: the instruction is to consider, which means to examine the ways of the work.

Text states: five symptoms appear in one verse:

1. Sowing much and bringing in little.
2. Eating without enough.
3. Drinking without being filled.
4. Clothing without warmth.
5. Wages put into a bag with holes.

Lexical: H6872 _tsrowr_ stands behind "bag". The entry reads "a parcel (as packed up); also a
kernel or particle (as if a package)".

Lexical: H5344 _naqab_ stands behind "holes" in the phrase. The entry reads "to puncture,
literally (to perforate, with more or less violence) or figuratively (to specify, designate,
libel)". The gloss list includes "bore", "with holes", and "pierce".

Text states: the wages go into the bag, and the bag does not hold them. The loss is not at the
earning. The loss is at the retaining.

### The symptoms in a system

Inference: a system that consumes effort and does not retain value shows these signs:

1. The same work repeats. The record is lost, so someone enters the input again.
2. People enter the same data more than once. Two systems both claim to be the source.
3. The handoff is manual. A person copies between systems, and the person is the integration.
4. Nobody uses the output. The system produces a report, and nobody reads it.
5. The workaround multiplies. People build private spreadsheets beside the official system.
6. The budget renews and the problem does not go away. The cost recurs and the symptom returns.

Inference: the diagnosis is at the retaining step, not the effort step. If you add effort to a
system with holes, you increase the wage and not the store.

## The limits of one great system

Text (Genesis 11:1-9, KJV):

> 1 And the whole earth was of one language, and of one speech.
> 2 And it came to pass, as they journeyed from the east, that they found a plain in the land of Shinar; and they dwelt there.
> 3 And they said one to another, Go to, let us make brick, and burn them thoroughly. And they had brick for stone, and slime had they for morter.
> 4 And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven; and let us make us a name, lest we be scattered abroad upon the face of the whole earth.
> 5 And the LORD came down to see the city and the tower, which the children of men builded.
> 6 And the LORD said, Behold, the people is one, and they have all one language; and this they begin to do: and now nothing will be restrained from them, which they have imagined to do.
> 7 Go to, let us go down, and there confound their language, that they may not understand one another's speech.
> 8 So the LORD scattered them abroad from thence upon the face of all the earth: and they left off to build the city.
> 9 Therefore is the name of it called Babel; because the LORD did there confound the language of all the earth: and from thence did the LORD scatter them abroad upon the face of all the earth.

Lexical: H1101 _balal_ is the standard word behind "confound". The entry reads "to overflow
(specifically with oil.); by implication, to mix; to fodder". The gloss list includes "confound",
"mingle", and "mix (self)".

Text states: verse 9 links the name Babel to "confound". This is wordplay in the text. It is not
a claim about the history of the word.

Text states: the project is unified. One language, one speech, one plan, one purpose.

Text states: the builders state two purposes. They want a name, "let us make us a name". They also
want protection, "lest we be scattered abroad".

Text states: the coordination worked. Verse 6: "nothing will be restrained from them, which they
have imagined to do."

Text states: the confusion of language is the means, and the dispersal is the result. Verse 7:
"that they may not understand one another's speech." Verse 8: "So the LORD scattered them
abroad", and "they left off to build the city."

Inference: a single unified system concentrates coordination. It also concentrates failure, and
it removes the boundaries between failure domains.

Inference: the text is a judgment, not a management textbook. The business inference is narrow
and specific. Total centralization buys coordination at the price of one shared failure mode.

Inference: modularity trades some efficiency for independent failure. A module can fail while the
rest of the system serves. A monolith fails once, everywhere.

Inference: the passage does not state the coordination cost of centralization. Teams observe it
in practice, and practitioners disagree about the trade-off. The file marks the trade-off as a
judgment call, not a rule.

The practical test: for a proposed consolidation, ask three questions. What does one failure now
stop? How many teams must coordinate to release a change? What is the boundary between the parts,
and does that boundary match a real seam in the business?

## Craft as serious work

Text (Exodus 31:1-5, KJV):

> 1 And the LORD spake unto Moses, saying,
> 2 See, I have called by name Bezaleel the son of Uri, the son of Hur, of the tribe of Judah:
> 3 And I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship,
> 4 To devise cunning works, to work in gold, and in silver, and in brass,
> 5 And in cutting of stones, to set them, and in carving of timber, to work in all manner of workmanship.

Text (Exodus 35:30-35, KJV):

> 30 And Moses said unto the children of Israel, See, the LORD hath called by name Bezaleel the son of Uri, the son of Hur, of the tribe of Judah;
> 31 And he hath filled him with the spirit of God, in wisdom, in understanding, and in knowledge, and in all manner of workmanship;
> 32 And to devise curious works, to work in gold, and in silver, and in brass,
> 33 And in the cutting of stones, to set them, and in carving of wood, to make any manner of cunning work.
> 34 And he hath put in his heart that he may teach, both he, and Aholiab, the son of Ahisamach, of the tribe of Dan.
> 35 Them hath he filled with wisdom of heart, to work all manner of work, of the engraver, and of the cunning workman, and of the embroiderer, in blue, and in purple, in scarlet, and in fine linen, and of the weaver, even of them that do any work, and of those that devise cunning work.

Text states: the LORD calls the craftsman by name.

Text states: the filling is with the spirit of God, and the content of the filling is wisdom,
understanding, knowledge, and workmanship.

Lexical: H2451 _chokmah_ is the standard word behind "wisdom". The entry reads "wisdom (in a good
sense)".

Lexical: H8394 _tebunah_ is the standard word behind "understanding" here. The entry reads
"intelligence; by implication, an argument; by extension, caprice". The gloss list includes
"discretion", "reason", "skilfulness", and "wisdom".

Lexical: H1847 _daath_ is the standard word behind "knowledge". The entry reads "knowledge".

Lexical: H4399 _melakah_ is the standard word behind "workmanship". The entry reads "properly,
deputyship, i.e. ministry; generally, employment (never servile) or work (abstractly or
concretely); also property (as the result of labor)".

Text states: the gift includes the ability to teach. 35:34: "he hath put in his heart that he may
teach."

Text states: verse 35 names several trades. The engraver, the cunning workman, the embroiderer,
and the weaver appear in one verse.

Inference: technical skill is a gift, and the text treats it as a serious calling. The trade is
not lesser work, and it is not a fallback.

Inference: the ability to teach is inside the gift. A system that only one person understands is
an incomplete gift, not a plan for job security.

Text states: God gives Bezaleel "all manner of workmanship" (31:3, 31:5). God also gives him
Aholiab, and puts wisdom in "all that are wise hearted" (31:6). Both men teach (35:34), and
others share the work (35:35).

Inference: a serious system needs several crafts and several people. The text does not say that
one generalist cannot carry the work. Bezaleel had every skill, and the work was still shared.

The practical test: ask who can teach the system, and to how many people. Count the people who
can repair it at the worst possible moment.

## Provisioning before building

Text (1 Chronicles 22:14-16, KJV):

> 14 Now, behold, in my trouble I have prepared for the house of the LORD an hundred thousand talents of gold, and a thousand thousand talents of silver; and of brass and iron without weight; for it is in abundance: timber also and stone have I prepared; and thou mayest add thereto.
> 15 Moreover there are workmen with thee in abundance, hewers and workers of stone and timber, and all manner of cunning men for every manner of work.
> 16 Of the gold, the silver, and the brass, and the iron, there is no number. Arise therefore, and be doing, and the LORD be with thee.

Text states: David gathers the materials before the work begins. The list includes gold, silver,
brass, iron, timber, and stone.

Text states: the people are provided too. Verse 15 names "workmen with thee in abundance".

Text states: verse 14 says that the preparation happened "in my trouble". David gathered the
materials under pressure.

Text states: the instruction to Solomon comes after the provision. "Arise therefore, and be
doing."

Inference: capital and people come before the build. This is A13, "Provision precedes
assignment."

Inference: one generation gathers the provision for the work of the next generation. A multiyear
infrastructure project often serves a horizon beyond the person who starts it.

Inference: the text states the abundance in weights and numbers. The provision is not a
sentiment. It is inventory.

The practical test: name the budget, the people, and the materials before the first commit. A
project with no provided keeper is a project with no provision.

## The cost that means something

Text (2 Samuel 24:24, KJV):

> And the king said unto Araunah, Nay; but I will surely buy it of thee at a price: neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing. So David bought the threshingfloor and the oxen for fifty shekels of silver.

Text states: David refuses a free offer. He says "Nay".

Text states: the verse states the reason: "neither will I offer burnt offerings unto the LORD my
God of that which doth cost me nothing."

Text states: the verse names the price. Fifty shekels of silver.

Lexical: H2600 _chinnam_ is the standard word behind the phrase "of that which doth cost me
nothing". The entry reads "gratis, i.e. devoid of cost, reason or advantage". The KJV gloss list
includes "without a cause (cost, wages)", "to cost nothing", "free(-ly)", "for nothing (nought,
in vain".

Inference: the passage is about sacrifice, and its use for tooling is an analogy. The analogy is
this: a free tool carries a cost somewhere else, and you must name the cost.

Inference: you pay for a free tool in attention, in data, in the roadmap of the vendor, in
support, or in the conversion cost later. The price moves. It does not go away.

Inference: a paid tool creates a claim. A customer with a contract has standing with the vendor.
A free user has a request.

Contested: some free and open tools carry no vendor strategy, and some carry a very active one.
The honest practice is to name the business model of the tool and the cost that it implies. Do
not assume that free means cheap.

---

## The decision framework

Six criteria. Name each one in writing for the decision at hand:

1. Core or context. Is this work a source of advantage, or is it a cost of doing business? Build
   and invest in the core. Buy the context, unless the market fails you badly.
2. Total cost including keeping. The seven lines from the cost list, plus the recurring keep cost
   from `references/total-cost.md`.
3. Reversibility and exit cost. The class from the reversibility table. A permanent decision gets
   the gate, the delay, and the second opinion.
4. How many people must understand it. The number of people who can operate it and repair it. A
   number of one is a risk. Exodus 35:34 puts the teaching inside the gift.
5. The failure mode. What happens when it fails, and when does failure hurt most? Name the worst
   time, and name the response.
6. The smallest version that works. The smallest scope that delivers the defined value. Ship that,
   then decide on the rest.

`references/decision-framework.md` holds the full buy, build, borrow, or wait framework, with a
worked example of each kind of decision.

## Questions before adoption

Inference: answer all fourteen questions in writing before you adopt anything:

1. What is the specification that this implements? (Exodus 25:9)
2. Is this core or context?
3. What is the total cost for three years, including keeping?
4. Who is the named keeper after it ships? (Genesis 2:15, A17)
5. What is the exit cost, and how long does exit take? (Isaiah 28:16, A32)
6. How many people must understand it to run it and to repair it? (Exodus 35:34)
7. What is the failure mode, and what happens at the worst time?
8. Does it fit the running system without forcing that system to change? (Matthew 9:17)
9. What does it remove, and is the removal dross or a landmark? (Proverbs 22:28, 25:4)
10. What is the smallest version that works?
11. What is the boring option, and why do you not choose it?
12. What is the test, the date, and the stopping rule?
13. What does this make permanent that must not become permanent? (A32)
14. What is the real price of the free option? (2 Samuel 24:24)

## Output format

When the user asks a technology question, answer in this shape:

1. The decision, stated precisely, with the real deadline.
2. The specification, in the words of the user, with the parts, the boundaries, and the data.
3. Core or context, with the reason.
4. The options table: buy, build, borrow, wait. Give the total cost for three years, the exit
   cost, and the class of reversibility for each.
5. The keeper and the maintenance plan, with the annual cost named.
6. The failure mode and the smallest version that works.
7. The recommendation, with the friction priced as a line item. Use A27, "Friction is
   structural," and name the specific resistance.
8. The test, the date, and the stopping rule.
9. Confidence, with each claim labeled as stated, inferred, contested, or unverified.

## Anti-patterns

| Anti-pattern                                 | Violates           | The bill arrives as                                     |
| -------------------------------------------- | ------------------ | ------------------------------------------------------- |
| Choosing the tool before the shape           | A5                 | Features in rooms that must not exist                   |
| Comparing license prices only                | Luke 14:28         | Integration and training costs discovered mid-project   |
| No named keeper                              | A17                | Rot, then a rewrite at a multiple of the original cost  |
| A permanent decision made quickly            | A32, Isaiah 28:16  | A decade on a platform chosen in a week                 |
| A new component forced into an old container | Matthew 9:17       | Both the component and the container perish             |
| Removing a boundary as if it were waste      | Proverbs 22:28     | Someone outside the team loses their dependency         |
| Effort added to a leaking system             | Haggai 1:6         | The wage grows and the store does not                   |
| One system for everything                    | Genesis 11:6-8     | One failure stops all, and every release needs everyone |
| A system only one person understands         | Exodus 35:34       | The gift dies with the person                           |
| Building before the provision                | 1 Chronicles 22:14 | Stopped work with a visible foundation (Luke 14:29-30)  |
| Adopting on the free tier and staying        | 2 Samuel 24:24     | A cost that arrives later with no budget line           |

## References

- `references/decision-framework.md` holds the full buy, build, borrow, or wait framework, the
  criteria, a worked build decision, a worked migration, and when to choose the boring option.
- `references/total-cost.md` covers the maintenance burden, Genesis 2:15 and A17, the checklist of
  omitted costs, and how to price the exit.

## How this skill connects

- `scripture-foundations` holds the text and the reading rules. Check every word there before you
  lean on it. The KJV is 1611 English.
- `business-first-principles` holds the axioms. This skill uses A2, A5, A13, A14, A17, A27, A30,
  and A32.
- `business-idea-generation` finds the opportunity. This skill decides what to build or buy for
  it.
- `body-first-principles` covers maintenance, waste, and flow at the level of systems. It extends
  the keep material in `references/total-cost.md`.
