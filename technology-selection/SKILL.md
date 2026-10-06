---
name: technology-selection
description: Choosing technology and deciding what to do with it. Use this when the user asks whether to adopt a specific tool, whether to build their own system, whether to migrate, or whether to rewrite. It covers the choice of stack, internal tools, platforms, frameworks, migrations, and automation, and the buy, build, borrow, or wait decision. It works from the specification rather than the tool, prices the whole cost including keeping, gates the decisions that cannot be reversed, and asks for the smallest version that works. Grounded in Scripture and in the axioms of business-first-principles, with applications labelled as inferences.
---

# Technology Selection

## What this skill is for

A technology decision is a shape decision before it is a tool decision. The shape is what the
work must do. The tool is one way to do it. This skill keeps the two in order, prices the whole
cost, and gates the choices that cannot be undone.

Two rules govern the file.

First, every business and technical application is an inference. The text reports what Moses
was told and what Bezaleel did. A reading of Exodus 25 is the reading of a fallible person. Say
"this suggests", not "the Bible commands".

Second, no verse names a programming language, a vendor, or a platform. The text supplies
principles about specification, cost, maintenance, and reversibility. The application to a
stack is derived, and the derivation is shown.

## How to read the claims

- **Text states** means the verse says it. The verse is quoted above the claim.
- **Lexical** means the Strong's entry says it. The definition is copied from `skills/scripture-foundations/scripts/lexicon.ts`.
- **Inference** means a reader drew it. The derivation is shown.
- **Contested** means serious practitioners disagree, or faithful readers disagree.

One tool limit applies throughout. The supplied Strong's data has no verse-level tagging, so a
verse to Strong's mapping is a standard concordance association and not a tool finding.

## Shaping before filling

**Text (Proverbs 24:3-4, KJV)**

> 3. Through wisdom is an house builded; and by understanding it is established:
> 4. And by knowledge shall the chambers be filled with all precious and pleasant riches.

**Text states:** The verse gives a sequence. Wisdom builds. Understanding establishes. Knowledge
fills.

**Text states:** The filling comes last, and the filling is of chambers. The rooms exist before
the contents arrive.

**Inference:** the sequence applies to systems. A house is built, then made stable, then
furnished. A system is specified, then made reliable, then loaded with features and data.

**Inference:** a tool chosen before the shape is understood fills rooms that must not exist.
The features arrive before the container, and the container is never formed. This violates A5,
which states that formation precedes filling.

**The practical test.** Ask what the system is for, in one paragraph, before comparing tools.
If the paragraph cannot be written, the selection is premature.

## Sharpen the tool

**Text (Ecclesiastes 10:10, KJV)**

> If the iron be blunt, and he do not whet the edge, then must he put to more strength: but
> wisdom is profitable to direct.

**Text states:** The blunt tool has a cost. The worker puts to more strength.

**Text states:** The remedy is sharpening. The text says "whet the edge".

**Text states:** The result clause attaches to direction, not to the tool. The verse says
"wisdom is profitable to direct."

**Inference:** tooling is an investment with a return. The return arrives as less effort for the
same output, or the same effort for more output.

**Inference:** the verse attaches the return to direction. A sharp tool in the wrong direction
produces bad work faster. This is the failure mode of an adoption driven by the tool's appeal.

**The practical test.** State the labour the tool removes, and estimate the hours. Then state
who directs it. If no one directs it, the sharpening will not return its cost.

## Count the cost first

**Text (Luke 14:28-30, KJV)**

> 28. For which of you, intending to build a tower, sitteth not down first, and counteth the
>     cost, whether he have sufficient to finish it?
> 29. Lest haply, after he hath laid the foundation, and is not able to finish it, all that
>     behold it begin to mock him,
> 30. Saying, This man began to build, and was not able to finish.

**Text (Luke 14:31-32, KJV)**

> 31. Or what king, going to make war against another king, sitteth not down first, and
>     consulteth whether he be able with ten thousand to meet him that cometh against him with
>     twenty thousand?
> 32. Or else, while the other is yet a great way off, he sendeth an ambassage, and desireth
>     conditions of peace.

**Text states:** The builder counts before building. The count decides whether the work starts.

**Text states:** The failure case is a stopped project with a visible foundation. The cost of
the failure includes the mockery.

**Text states:** The second case is a comparison of forces. Ten thousand against twenty thousand
leads to terms, not to battle.

**Text states:** The king acts before contact. He sends while the other is "yet a great way
off."

**Inference:** both passages treat the pre-commitment estimate as the decision point. The second
case adds an option: avoid the engagement when the numbers are wrong.

**Inference:** the second case is the borrow or wait option. A decision that cannot win becomes
a negotiation or a delay.

### The full cost list

**Inference.** A technology decision carries seven costs. Name each one before the decision.

1. **Licence or build cost.** The purchase price, the subscription, or the engineering hours.
2. **Integration cost.** The work to connect the new thing to the current systems, the data,
   and the identity provider. This line is usually the largest, and it is usually omitted.
3. **Training cost.** The hours for every affected person to reach working competence on the
   new tool, plus the lost output during the learning curve.
4. **Migration cost.** The work to move existing data and existing behaviour. Include the
   dual-running period, when both systems operate and both need support.
5. **The maintenance burden.** The keep cost from `references/total-cost.md`. This line recurs
   every year.
6. **The exit cost.** The work to leave, stated in hours and in money. Include the contract
   term, the data export, and the retraining.
7. **The opportunity cost.** The other work the same people cannot do. This is A30 applied to
   the team's finite hours.

**The failure mode.** A decision compares two licence prices and calls it an analysis. The
integration, training, and keeping lines are the decision, and they are invisible on the
vendor's price page.

## Build to a pattern

**Text (Exodus 25:9, KJV)**

> According to all that I shew thee, after the pattern of the tabernacle, and the pattern of all
> the instruments thereof, even so shall ye make it.

**Text (Exodus 25:40, KJV)**

> And look that thou make them after their pattern, which was shewed thee in the mount.

**Text (Hebrews 8:5, KJV)**

> Who serve unto the example and shadow of heavenly things, as Moses was admonished of God when
> he was about to make the tabernacle: for, See, saith he, that thou make all things according
> to the pattern shewed to thee in the mount.

**Lexical:** H8403 _tabniyth_ is the standard word behind "pattern" in Exodus 25. The entry
reads "structure; by implication, a model, resemblance". The gloss list includes "figure",
"form", and "likeness".

**Lexical:** G5179 _typos_ stands behind "pattern" in Hebrews 8:5. The entry reads "a die (as
struck), i.e. (by implication) a stamp or scar; by analogy, a shape, i.e. a statue,
(figuratively) style or resemblance; specially, a sampler ("type"), i.e. a model (for
imitation) or instance (for warning)".

**Text states:** The pattern is shown before the making begins. The instruction is repeated
twice in Exodus and quoted again in Hebrews.

**Text states:** The pattern covers the tabernacle and all its instruments. Exodus 25:9 says
"the pattern of the tabernacle, and the pattern of all the instruments thereof".

**1 Chronicles 28:11-19.** **Text states:** David gives Solomon the pattern of the house, the
chambers, the treasuries, and the courts. Verse 19 says "All this, said David, the LORD made me
understand in writing by his hand upon me, even all the works of this pattern."

**Text states:** The pattern arrives in writing.

**Inference:** the specification is the primary artifact, and the tool is the thing that
implements it. A system built without a specification has no way to judge whether it is
finished, which violates A14.

**The practical test.** The pattern must name the parts, the boundaries between them, the data
that flows, and the behaviour at the edges. A pattern that names only the screens is not a
pattern.

## Sequence the work

**Text (Proverbs 24:27, KJV)**

> Prepare thy work without, and make it fit for thyself in the field; and afterwards build thine
> house.

**Text states:** The order is preparation, then fit, then build.

**Text states:** The preparation happens "without", and the fit happens "in the field". Both come
before the house.

**Inference:** readiness precedes construction. The groundwork for a system is the data, the
process, and the people. The build starts when those are ready.

**Inference:** a system built on unprepared ground inherits the disorder of the ground. The
data will be dirty, the process will be undefined, and the people will be untrained. The
software then becomes the container for the disorder.

## Do not hurry an adoption

**Text (Isaiah 28:16, KJV)**

> Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried
> stone, a precious corner stone, a sure foundation: he that believeth shall not make haste.

**Text states:** The foundation is "tried", which means tested.

**Text states:** The consequence for the one who trusts it is stated in the negative. "shall not
make haste."

**A32** in `business-first-principles` states that some states must not become permanent. A32
also states that speed is for reversible decisions. The axiom rests on Genesis 3:22-23, where a
bad condition is prevented from becoming irreversible.

**Inference:** hurry is a symptom of an untrusted foundation, not a property of the work. This
is the reading in `skills/business-first-principles/references/trends-and-timing.md`, Part 7.

**Inference:** the same logic gates technology decisions. A reversible decision can move fast.
An irreversible one deserves the delay.

### The reversibility test

**Inference.** Classify the decision before the choice.

| Class      | The test                                                 | The treatment                     |
| ---------- | -------------------------------------------------------- | --------------------------------- |
| Reversible | A swap takes days, and the exit cost is small            | Move fast, and learn by doing     |
| Costly     | A swap takes months, and the exit cost is real           | Pilot, then decide                |
| Permanent  | A swap touches the data, the contracts, or the ecosystem | Gate it, and delay the commitment |

Five questions classify the decision.

1. **How long does exit take?** Days, months, or never.
2. **What is the exit cost?** Include the data export, the contract term, and the retraining.
3. **Does the decision create a format or a data store that others depend on?** Data gravity
   makes a decision permanent without a signature.
4. **How many systems must change with it?** A change that forces five other changes is a
   migration wearing a purchase order.
5. **Can both systems run at once during a transition?** A parallel run buys reversibility and
   costs double support.

**Text states (Luke 14:31).** The king with ten thousand assesses before contact.

**Inference.** The assessment is the reversibility test in narrative form.

## Compatibility

**Text (Matthew 9:17, KJV)**

> Neither do men put new wine into old bottles: else the bottles break, and the wine runneth
> out, and the bottles perish: but they put new wine into new bottles, and both are preserved.

**Lexical:** G779 _askos_ stands behind "bottles". The entry reads "a leathern (or skin) bag
used as a bottle".

**Lexical:** G3631 _oinos_ stands behind "wine". The entry reads "\"wine\" (literally or
figuratively)".

**Text states:** The failure destroys both. "the bottles break, and the wine runneth out, and
the bottles perish."

**Text states:** The remedy is a matched pair. "they put new wine into new bottles, and both are
preserved."

**Inference:** the image is a compatibility test. The container and the contents must match in
their behaviour over time. New wine ferments and the old skin cannot stretch.

**Inference:** the business reading is not "always replace everything". The reading is that the
new component forces the container to change. Name that change before the commitment.

### The compatibility questions

**Inference.** Ask these before adding a component to a running system.

1. Does the new component share the data model, the identity model, and the deployment model?
2. Does the new component demand that an existing component change? If yes, the project is two
   projects.
3. Do the two have the same upgrade cadence? A fast-moving component beside a frozen one
   creates a permanent integration.
4. What happens at the version boundary? Name the failure when one side upgrades first.
5. Can the system run with both versions at once?

**The failure mode.** The new component works in the demonstration and fails in production,
because the container cannot stretch. The team then blames the component.

## Do not break what works

**Text (Proverbs 22:28, KJV)**

> Remove not the ancient landmark, which thy fathers have set.

**Text (Proverbs 25:4, KJV)**

> Take away the dross from the silver, and there shall come forth a vessel for the finer.

**Lexical:** H1366 _gebuwl_ is the standard word behind "landmark". The entry reads "properly,
a cord (as twisted), i.e. (by implication) a boundary; by extension the territory inclosed". The
KJV gloss list includes "border", "bound", "coast", and "landmark".

**Lexical:** H5509 _siyg_ is the standard word behind "dross". The entry reads "scoria". The
KJV gloss list gives "dross".

**Text states:** The landmark is a boundary that a previous generation set. The instruction is
to leave it.

**Text states:** The dross is removed, and the removal is the point. The verse commands the
removal.

**Inference:** the two verses do different work. One protects the boundary. The other commands
the removal of the waste.

**Inference:** the distinction is between the boundary and the waste. The boundary is what the
system is for. The waste is what the system accumulated.

**The practical test.** For every component you plan to remove, answer two questions. Does this
define the boundary of the system, or does it accumulate inside the boundary? Who depends on it
from outside your team? An external dependency is a landmark, even when the code looks like
dross.

**Text states (Proverbs 23:10).** "Remove not the old landmark; and enter not into the fields
of the fatherless." The second clause links the boundary to someone else's protection.

**Contested.** The line between a foundation and an encumbrance is a judgement call, and honest
engineers disagree on specific cases. The file does not settle a case from the text. It requires
the question to be asked and answered in writing.

## Maintenance parity

**Text (Genesis 2:15, KJV)**

> And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.

**Lexical:** H5647 _abad_ stands behind "dress". The entry reads "to work (in any sense); by
implication, to serve, till, (causatively) enslave, etc." The gloss list includes "dress",
"keep", "labour", "serve", and "till".

**Lexical:** H8104 _shamar_ stands behind "keep". The entry reads "properly, to hedge about (as
with thorns), i.e. guard; generally, to protect, attend to, etc." The gloss list includes
"keep(-er, self)", "observe", "preserve", "regard", "reserve", and "watch(-man)".

**Text states:** Two verbs are given together as the job. The man is placed to dress the garden
and to keep it.

**A17** in `business-first-principles` states that building and keeping are equal partners, and
that most businesses die of keep failure while congratulating themselves on dress.

**Inference:** the total cost of ownership is the dress plus the keep. The build is the dress.
The maintenance, the support, the upgrades, the monitoring, and the eventual replacement are
the keep.

**Inference:** a system with no named keeper will decay. The decay is not a risk. It is the
baseline, and A2 states it directly.

**Inference:** the keep cost is recurring, and it does not end. A system that ships without a
keeper has borrowed against a future budget that no one has approved.

The full checklist of omitted costs sits in `references/total-cost.md`.

## Build and defend at once

**Text (Nehemiah 4:17-18, KJV)**

> 17. They which builded on the wall, and they that bare burdens, with those that laded, every
>     one with one of his hands wrought in the work, and with the other hand held a weapon.
> 18. For the builders, every one had his sword girded by his side, and so builded. And he that
>     sounded the trumpet was by me.

**Text states:** The builders work and carry a weapon at the same time.

**Text states:** The trumpet is placed with Nehemiah, and the alarm has a stated meaning later
in the chapter (4:20, "our God shall fight for us").

**Inference:** a migration happens while the running system keeps serving. The team cannot stop
delivering to work on the replacement.

**Inference:** the defending hand needs a plan, a rotation, and an alarm. Name who answers the
production incident while the migration runs, because the migration consumes the people who
usually answer it.

**Contested.** Some teams stop feature work for a migration and some run both. The text supports
running both. It does not state a rule for how long that can continue, and the cost of running
both is high.

## Waste diagnosis

**Text (Haggai 1:5-6, KJV)**

> 5. Now therefore thus saith the LORD of hosts; Consider your ways.
> 6. Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye
>    are not filled with drink; ye clothe you, but there is none warm; and he that earneth wages
>    earneth wages to put it into a bag with holes.

**Text states:** The instruction is to consider, which means to examine the pattern of the work.

**Text states:** Six symptoms appear in one verse. Sowing much and bringing in little. Eating
without enough. Drinking without being filled. Clothing without warmth. Wages placed in a bag
with holes.

**Lexical:** H6872 _tsrowr_ stands behind "bag". The entry reads "a parcel (as packed up); also
a kernel or particle (as if a package)".

**Lexical:** H5344 _naqab_ stands behind "holes" in the phrase. The entry reads "to puncture,
literally (to perforate, with more or less violence) or figuratively (to specify, designate,
libel)". The gloss list includes "bore", "with holes", and "pierce".

**Text states:** The wages go into the bag, and the bag does not hold them. The loss is not at
the earning. The loss is at the retaining.

### The symptoms in a system

**Inference.** A system that consumes effort without retaining value shows these signs.

1. **The same work is repeated.** The record is lost, so the input is entered again.
2. **The same data is entered more than once.** Two systems both claim to be the source.
3. **The handoff is manual.** A person copies between systems, and the person is the
   integration.
4. **The output is not used.** A report is produced and nobody reads it.
5. **The workaround multiplies.** People build private spreadsheets beside the official system.
6. **The budget is renewed and the problem is not.** The cost recurs and the symptom returns.

**Inference:** the diagnosis is the retaining step, not the effort step. Add effort to a
system with holes and you increase the wage, not the store.

## The limits of one great system

**Text (Genesis 11:1-9, KJV)**

> 1. And the whole earth was of one language, and of one speech.
> 2. And it came to pass, as they journeyed from the east, that they found a plain in the land
>    of Shinar; and they dwelt there.
> 3. And they said one to another, Go to, let us make brick, and burn them thoroughly. And they
>    had brick for stone, and slime had they for morter.
> 4. And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven;
>    and let us make us a name, lest we be scattered abroad upon the face of the whole earth.
> 5. And the LORD came down to see the city and the tower, which the children of men builded.
> 6. And the LORD said, Behold, the people is one, and they have all one language; and this they
>    begin to do: and now nothing will be restrained from them, which they have imagined to do.
> 7. Go to, let us go down, and there confound their language, that they may not understand one
>    another's speech.
> 8. So the LORD scattered them abroad from thence upon the face of all the earth: and they left
>    off to build the city.
> 9. Therefore is the name of it called Babel; because the LORD did there confound the language
>    of all the earth: and from thence did the LORD scatter them abroad upon the face of all the
>    earth.

**Lexical:** H1101 _balal_ is the standard word behind "confound". The entry reads "to overflow
(specifically with oil.); by implication, to mix; to fodder". The gloss list includes
"confound", "mingle", and "mix (self)". The name Babel comes from the same sound.

**Text states:** The project is unified. One language, one speech, one plan, one purpose.

**Text states:** The stated purpose is self-protection. "lest we be scattered abroad".

**Text states:** The coordination was effective. Verse 6: "nothing will be restrained from
them, which they have imagined to do."

**Text states:** The cost of the dispersal is named as confusion. Verse 7: "that they may not
understand one another's speech." Verse 8: "they left off to build the city."

**Inference:** a single unified system concentrates coordination. It also concentrates failure,
and it removes the boundaries between failure domains.

**Inference:** the text is a judgement, not a management textbook. The business inference is
narrow and specific. Total centralisation buys coordination at the price of one shared failure
mode. The price is named in the text.

**Inference:** modularity trades some efficiency for independent failure. A module can fail
while the rest serves. A monolith fails once, everywhere.

**Inference:** the coordination cost of centralisation is not stated in the passage. It is
observed in practice, and practitioners disagree about the trade-off. The file marks the
trade-off as a judgement call, not a rule.

**The practical test.** For a proposed consolidation, ask what one failure now stops. Ask how
many teams must coordinate to release a change. Ask what the boundary is between the parts, and
whether that boundary matches a real seam in the business.

## Craft as serious work

**Text (Exodus 31:1-5, KJV, selected)**

> 1. And the LORD spake unto Moses, saying,
> 2. See, I have called by name Bezaleel the son of Uri, the son of Hur, of the tribe of Judah:
> 3. And I have filled him with the spirit of God, in wisdom, and in understanding, and in
>    knowledge, and in all manner of workmanship,
> 4. To devise cunning works, to work in gold, and in silver, and in brass,
> 5. And in cutting of stones, to set them, and in carving of timber, to work in all manner of
>    workmanship.

**Text (Exodus 35:30-35, KJV, selected)**

> 30. And Moses said unto the children of Israel, See, the LORD hath called by name Bezaleel the
>     son of Uri, the son of Hur, of the tribe of Judah;
> 31. And he hath filled him with the spirit of God, in wisdom, in understanding, and in
>     knowledge, and in all manner of workmanship;
> 32. And to devise curious works, to work in gold, and in silver, and in brass,
> 33. And in the cutting of stones, to set them, and in carving of wood, to make any manner of
>     cunning work.
> 34. And he hath put in his heart that he may teach, both he, and Aholiab, the son of Ahisamach,
>     of the tribe of Dan.
> 35. Them hath he filled with wisdom of heart, to work all manner of work, of the engraver, and
>     of the cunning workman, and of the embroiderer, in blue, and in purple, in scarlet, and in
>     fine linen, and of the weaver, even of them that do any work, and of those that devise cunning
>     work.

**Text states:** The craftsman is called by name, and the LORD speaks the call.

**Text states:** The filling is with the spirit of God, and the content of the filling is
wisdom, understanding, knowledge, and workmanship.

**Lexical:** H2451 _chokmah_ is the standard word behind "wisdom". The entry reads "wisdom (in
a good sense)".

**Lexical:** H8394 _tebunah_ is the standard word behind "understanding" here. The entry reads
"intelligence; by implication, an argument; by extension, caprice". The gloss list includes
"discretion", "reason", "skilfulness", and "wisdom".

**Lexical:** H1847 _daath_ is the standard word behind "knowledge". The entry reads
"knowledge".

**Lexical:** H4399 _melakah_ is the standard word behind "workmanship". The entry reads
"properly, deputyship, i.e. ministry; generally, employment (never servile) or work (abstractly
or concretely); also property (as the result of labor)".

**Text states:** The gift includes the ability to teach. 35:34: "he hath put in his heart that
he may teach."

**Text states:** Verse 35 names several trades. The engraver, the cunning workman, the
embroiderer, and the weaver appear in one verse.

**Inference:** technical skill is a gift, and the text treats it as a serious calling. The trade
is not lesser work, and it is not a fallback.

**Inference:** the ability to teach is inside the gift. The system that only one person
understands is an incomplete gift, not a job security plan.

**Inference:** the work needs several crafts. A single generalist cannot carry a serious system,
and the text says so by naming the trades.

**The practical test.** Ask who can teach the system, and to how many people. Count the number
who can repair it at the worst possible moment.

## Provisioning before building

**Text (1 Chronicles 22:14-16, KJV)**

> 14. Now, behold, in my trouble I have prepared for the house of the LORD an hundred thousand
>     talents of gold, and a thousand thousand talents of silver; and of brass and iron without
>     weight; for it is in abundance: timber also and stone have I prepared; and thou mayest add
>     thereto.
> 15. Moreover there are workmen with thee in abundance, hewers and workers of stone and timber,
>     and all manner of cunning men for every manner of work.
> 16. Of the gold, the silver, and the brass, and the iron, there is no number. Arise therefore,
>     and be doing, and the LORD be with thee.

**Text states:** The materials are gathered before the work begins. The list includes gold,
silver, brass, iron, timber, and stone.

**Text states:** The people are provisioned too. Verse 15 names "workmen with thee in
abundance".

**Text states:** Verse 14 says the preparation happened "in my trouble". David gathered the
materials under pressure.

**Text states:** The instruction to Solomon comes after the provision. "Arise therefore, and be
doing."

**Inference:** capital and people are provisioned before the build. This is A13, which states
that provision precedes assignment.

**Inference:** the provision is gathered by one generation for the next generation's work. A
multiyear infrastructure project often serves a horizon beyond the person who starts it.

**Inference:** the abundance is stated in weights and numbers. The provision is not a
sentiment. It is inventory.

**The practical test.** Name the budget, the people, and the materials before the first commit.
A project with no provisioned keeper is a project with no provision.

## The cost that means something

**Text (2 Samuel 24:24, KJV)**

> And the king said unto Araunah, Nay; but I will surely buy it of thee at a price: neither will
> I offer burnt offerings unto the LORD my God of that which doth cost me nothing. So David
> bought the threshingfloor and the oxen for fifty shekels of silver.

**Text states:** A free offer is refused. David says "Nay".

**Text states:** The reason is stated. "neither will I offer burnt offerings unto the LORD my God
of that which doth cost me nothing."

**Text states:** The price is named. Fifty shekels of silver.

**Lexical:** H2600 _chinnam_ is the standard word behind the phrase "of that which doth cost me
nothing". The entry reads "gratis, i.e. devoid of cost, reason or advantage". The KJV gloss list
includes "without a cause (cost, wages)", "to cost nothing", "free(-ly)", "for nothing (nought,
in vain".

**Inference:** the passage is about sacrifice, and the application to tooling is an analogy.
The analogy is this: a free tool carries a cost elsewhere, and the cost must be named.

**Inference:** the price of a free tool is paid in attention, in data, in the vendor's roadmap,
in support, or in the conversion cost later. The price is shifted, and it is not removed.

**Inference:** a paid tool creates a claim. A customer with a contract has standing with the
vendor. A free user has a request.

**Contested.** Some free and open tools carry no vendor strategy, and some carry a very active
one. The honest practice is to name the business model of the tool and the cost it implies. Do
not assume that free means cheap.

---

## The decision framework

Five criteria. Name each one in writing for the decision at hand.

1. **Core or context.** Is this work a source of advantage, or is it a cost of doing business?
   Build and invest in the core. Buy the context, unless the market is failing you badly.
2. **Total cost including keeping.** The seven lines from the cost list, plus the recurring keep
   cost from `references/total-cost.md`.
3. **Reversibility and exit cost.** The class from the reversibility table. A permanent decision
   gets the gate, the delay, and the second opinion.
4. **How many people must understand it.** The number of people who can operate it and repair
   it. A number of one is a risk, and the text calls the teaching part of the gift.
5. **The failure mode.** What happens when it fails, and when does failure hurt most? Name the
   worst time, and name the response.
6. **The smallest version that works.** The smallest scope that delivers the defined value.
   Ship that, then decide on the rest.

The full buy, build, borrow, or wait framework, with a worked example of each kind of decision,
sits in `references/decision-framework.md`.

## Questions before adoption

**Inference.** Answer all fourteen in writing before adopting anything.

1. What is the specification this implements? (Exodus 25:9)
2. Is this core or context?
3. What is the total cost for three years, including keeping?
4. Who is the named keeper after it ships? (Genesis 2:15, A17)
5. What is the exit cost, and how long does exit take? (Isaiah 28:16, A32)
6. How many people must understand it to run it and to repair it? (Exodus 35:34)
7. What is the failure mode, and what happens at the worst time?
8. Does it fit the running system without forcing that system to change? (Matthew 9:17)
9. What does it remove, and is the removal dross or a landmark? (Proverbs 22:28, 25:4)
10. What is the smallest version that works?
11. What is the boring option, and why is it not chosen?
12. What is the test, the date, and the stopping rule?
13. What does this make permanent that must not become permanent? (A32)
14. What is the real price of the free option? (2 Samuel 24:24)

## Output format

When the user asks a technology question, answer in this shape.

1. **The decision**, stated precisely, with the real deadline.
2. **The specification**, in the user's own words, with the parts, the boundaries, and the data.
3. **Core or context**, with the reason.
4. **The options table**: buy, build, borrow, wait. Total cost for three years, exit cost, and
   the class of reversibility for each.
5. **The keeper** and the maintenance plan, with the annual cost named.
6. **The failure mode** and the smallest version that works.
7. **The recommendation**, with the friction priced as a line item. Use A27 and name the
   specific resistance.
8. **The test**, the date, and the stopping rule.
9. **Confidence**, with each claim labelled as stated, inferred, contested, or unverified.

## Anti-patterns

| Anti-pattern                                 | Violates           | The bill arrives as                                     |
| -------------------------------------------- | ------------------ | ------------------------------------------------------- |
| Choosing the tool before the shape           | A5                 | Features in rooms that must not exist                   |
| Comparing licence prices only                | Luke 14:28         | Integration and training costs discovered mid-project   |
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
- `references/total-cost.md` covers the maintenance burden, Genesis 2:15 and A17, the checklist
  of omitted costs, and how to price the exit.

## How this skill connects

- `scripture-foundations` holds the text and the reading rules. Check every word there before
  you lean on it. The KJV is 1611 English.
- `business-first-principles` holds the axioms. The ones used here are A2, A5, A13, A14, A17,
  A27, A30, and A32.
- `business-idea-generation` finds the opportunity. This skill decides what to build or buy for
  it.
- `body-first-principles` covers maintenance, waste, and flow at the systems level, and it
  extends the keep material in `references/total-cost.md`.
