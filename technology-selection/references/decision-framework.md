# The Technology Decision Framework

The full framework for a technology choice: buy, build, borrow, or wait.

The figures in the two worked examples are invented. They show the arithmetic of the framework.
They are not market data, and no supplied tool can verify them.

## Method and labels

The labels are "Text states", "Lexical", "Inference", and "Contested". Verses come from
`../scripture-foundations/scripts/scripture.ts`. Strong's definitions come from
`../scripture-foundations/scripts/lexicon.ts` and are copied verbatim.

The letter A refers to the axiom numbers in `business-first-principles`. These axioms carry this
file:

- A5, Formation precedes filling
- A13, Provision precedes assignment
- A14, Completion is a real state
- A17, Building and keeping are equal partners
- A27, Friction is structural
- A30, Mortality makes time the binding constraint
- A32, Some states must not be allowed to become permanent

---

## Contents

- [Part 1. The four options](#part-1-the-four-options)
- [Part 2. The criteria](#part-2-the-criteria)
- [Part 3. Worked example: a build decision](#part-3-worked-example-a-build-decision)
- [Part 4. Worked example: a migration](#part-4-worked-example-a-migration)
- [Part 5. When to choose the boring option](#part-5-when-to-choose-the-boring-option)
- [Part 6. The decision record](#part-6-the-decision-record)
- [Appendix: verification log](#appendix-verification-log)

---

## Part 1. The four options

Inference: every technology choice is one of four options, or a combination. Name the option
before the argument, because the options have different failure modes.

| Option | What it means                                                                                     | When it fits                                                                      | The failure mode                                                          |
| ------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Buy    | Pay a vendor for a product that already exists                                                    | The work is context, the market has good products, and the shape is standard      | The roadmap and the pricing of the vendor control your future             |
| Build  | Create it in house                                                                                | The work is core, no product fits, and the shape is unusual in a way that matters | The keep cost lands on you, forever, and teams usually underestimate it   |
| Borrow | Use a component that someone else maintains, including open source, white label, or a partnership | The component is good, the community is active, and the integration is thin       | You inherit the decisions of the upstream and its abandonment risk        |
| Wait   | Defer the decision and keep the current arrangement                                               | The need is unproven, the trigger is far, and the cost of waiting is low          | The current arrangement decays, and the wait becomes permanent by default |

Text states (Proverbs 24:27): "Prepare thy work without, and make it fit for thyself in the
field; and afterwards build thine house." The sequence puts preparation and fit before the
build. Inference: a build option with no preparation is the project that stops with a visible
foundation (Luke 14:29-30).

Text states (Luke 14:31-32): the king with ten thousand "consulteth whether he be able". The
text then gives the alternative: "he sendeth an ambassage, and desireth conditions of peace."
Inference: the borrow option and the wait option are legitimate outcomes of the count.

Inference: waiting is a real option, and it carries a cost. Name the cost of the current
arrangement for each month of waiting. A wait with an unnamed cost is drift.

Inference: the four options combine at the level of the component, not only at the level of the
system. Buy the commodity parts, and build the thin layer that carries the advantage. The worked
build example in Part 3 shows the split.

### The evidence each option requires

Inference: each option needs different evidence before the decision:

- Buy. A trial of the actual product on your actual data. A reference customer in a similar
  situation. The exit path, stated by the vendor in writing.
- Build. An engineer who built one before. A keep estimate with a named keeper. A specification,
  as in Exodus 25:9.
- Borrow. The maintenance activity of the upstream, checked directly. The upgrade path. The
  license terms, read.
- Wait. A trigger date or condition, and a named cost of the wait.

The failure mode: a team argues the decision from a demonstration. A demonstration shows the
happy path with clean data. The decision rests on the unhappy path with your data.

---

## Part 2. The criteria

Inference: six criteria. State each one in writing for the decision at hand.

### 1. Core or context

The question: does this work create advantage, or is it a cost of doing business?

The rule: build and invest in the core. Buy the context, unless the market fails you badly.

The failure mode: a team builds context work because it wants to. The build consumes the
engineers who belong on the core, and the result is a maintained liability.

Contested: the line between core and context is a judgment, and it moves. A capability that is
context today can become core, and the reverse. Review the line each year.

### 2. Total cost including keeping

The question: what does this cost over three years, including the keep?

The rule: use the seven cost lines from the skill file: license or build, integration, training,
migration, maintenance, exit, and opportunity cost. Add the recurring keep from `total-cost.md`.

The failure mode: a team compares purchase prices. Inference: the integration and keep lines are
often large, and the price page does not show them.

### 3. Reversibility and exit cost

The question: how long does exit take, and what does it cost?

The rule: classify the decision as reversible, costly, or permanent. Use the five questions from
the skill file. Gate the permanent class, as A32 requires.

The failure mode: a team makes a permanent decision at the speed of a reversible one. The bill
arrives as a decade on a platform that no longer fits.

### 4. How many people must understand it

The question: how many people can operate it and repair it?

The rule: count them. One is a risk. Exodus 35:34 puts the teaching inside the gift.

The failure mode: one person understands the system, and that person leaves or takes a long
vacation. The knowledge is a single point of failure.

### 5. The failure mode

The question: what happens when this fails, and when does failure hurt most?

The rule: name the worst moment and the response. Put the response in writing before the system
goes live.

The failure mode: a plan for the steady state with no plan for the bad day.

### 6. The smallest version that works

The question: what is the smallest scope that delivers the defined value?

The rule: ship that version, then decide on the rest. This is A14 applied to scope.

The failure mode: a first release that attempts the full specification. The end date moves, the
feedback arrives late, and the team commits the cost of the whole before any part is proven.

### The criteria table

| Criterion         | The question                             | The evidence                            |
| ----------------- | ---------------------------------------- | --------------------------------------- |
| Core or context   | Does this create advantage?              | A stated answer, reviewed yearly        |
| Total cost        | What does three years cost?              | Seven cost lines, each estimated        |
| Reversibility     | How long does exit take?                 | The class, and the exit path in writing |
| Understandability | How many can run and repair it?          | A count, by name                        |
| Failure mode      | What breaks, and when does it hurt most? | The worst moment and the response       |
| Smallest version  | What is the least that works?            | A scope with a finish line              |

Text states (Proverbs 24:4): "And by knowledge shall the chambers be filled with all precious and
pleasant riches." The filling follows the building and the establishing. Inference: the smallest
version is the first chamber.

---

## Part 3. Worked example: a build decision

All figures in this example are invented. They show the arithmetic. Do not read them as market
data.

### The situation

A field service company has 40 technicians. Dispatch and scheduling happen on a whiteboard, a
phone, and a shared calendar. The company loses jobs to double booking and long travel gaps. The
operations lead proposes a custom dispatch system.

### The specification

Before you compare options, write the shape:

- The parts: job intake, technician assignment, route sequence, customer notification, and job
  records.
- The boundaries: the system does not do invoicing and does not do payroll.
- The data: each job has a location, a duration estimate, a skill requirement, and a customer
  contact.
- The edge behavior: what happens when a technician calls in sick in the middle of the day.

Inference: the specification shows the split. The notification, the calendar, and the job record
are standard. The assignment rules and the skill matching are specific to this company and its
niche.

### The options

| Line             | Buy                                    | Build                                      | Borrow                                   | Wait                                    |
| ---------------- | -------------------------------------- | ------------------------------------------ | ---------------------------------------- | --------------------------------------- |
| License or build | Subscription per technician per month  | Two engineers for nine months              | Open source scheduler plus own front end | Current tools, no new cost              |
| Integration      | Accounting link, identity, data import | All of it                                  | All of it                                | None                                    |
| Training         | Two days per dispatcher                | Two days, plus new tooling                 | More, because the front end is ours      | None                                    |
| Migration        | Import open jobs                       | Import open jobs                           | Import open jobs                         | None                                    |
| Keep             | Vendor                                 | Half an engineer, forever                  | Half an engineer, plus upstream tracking | The overtime and the lost jobs continue |
| Exit             | Data export, contract term             | Rewrite or abandon                         | Fork or replace                          | None                                    |
| Opportunity cost | Low                                    | Nine months of the two strongest engineers | Six months of one engineer               | The lost jobs                           |

Inference: the build option costs two engineers for nine months and a permanent half engineer.
The buy option costs a subscription and two days of training. On cost, buy wins by a wide margin.
The real argument is about fit.

### The decision

Inference: buy the standard parts. Build only the assignment rules, and keep them thin. The
allocation logic is core, because travel time and skill matching set the cost structure of the
company. The calendar, the notifications, and the job records are context.

The smallest version: buy the product, set it up, and run the assignment rules by hand for one
month. Measure the travel gaps. Then automate the two rules that carried the most value. The
first version is a product subscription, a spreadsheet of rules, and one integration.

The keeper: the operations lead owns the setup of the product. One engineer owns the
integration.

The failure mode: the vendor raises the price or changes the roadmap. The exit path is a data
export and a new setup on a competitor. The exit cost is moderate, because the data is standard
and the assignment rules stay in the company.

The test: thirty days of dispatch on the product. The threshold: travel gaps fall by a measured
margin, and the dispatchers prefer the product to the whiteboard. The stopping rule: if the
dispatchers go back to the whiteboard for two weeks in a row, stop and plan again.

### What the option table revealed

Inference: the build option looked cheap because the team counted only engineering hours. The
keep line, the opportunity cost, and the exit line changed the comparison. This is the Luke 14:28
count in practice.

---

## Part 4. Worked example: a migration

All figures in this example are invented. They show the arithmetic. Do not read them as market
data.

### The situation

A company runs its main application against a self-hosted database on hardware that is six years
old. The vendor ends support for the database version in fourteen months. The end of support is
the trigger, and it is the only real deadline in the decision.

### The trigger and the class

Inference: the trigger is external and dated. The decision is not urgent today, and it becomes a
hard constraint at the end of support. This fits A30. The deadline exists, and a late start
manufactures most of the urgency around it.

Inference: classify the decision. The data is portable if the schema avoids proprietary
features. The exit path exists, so the migration is costly, not permanent. The class allows a
pilot and a parallel run.

### The specification

- The parts: the database engine, the schema, the backup routine, the connection layer, and the
  reporting queries.
- The boundaries: the application code stays the same in this project. The reporting tools stay
  the same.
- The data: size, growth rate, and the largest table.
- The edge behavior: the cutover window, and the rollback condition.

Inference: the boundary that excludes the application code is the key decision. A migration that
also changes the application is two projects, and the second project hides inside the first.
This is the Matthew 9:17 compatibility test applied to scope.

### The cost list

1. License. A managed service subscription replaces the capital spending to refresh the hardware.
   It also replaces the running costs of the on-premises setup: power, space, and hardware
   support. Under US GAAP, the subscription is a service contract, and the company expenses it
   over the term. Some implementation costs of a hosted (cloud computing) arrangement can be
   capitalized under ASC 350-40, as amended by ASU 2018-15. The company then expenses them over
   the term of the hosting arrangement. The subscription does not replace depreciation as such.
   Depreciation is a non-cash expense, and six-year-old servers are often fully depreciated,
   because useful lives under ASC 360 are commonly three to five years.
2. Integration. Connection strings, private networking, and identity. In this example, this line
   is larger than the license line.
3. Training. The operations team learns the managed platform, not a new engine.
4. Migration. Two full rehearsals, a replication setup, and a cutover window.
5. Keep. Managed patching removes some keep work. Monitoring the new service adds some. The net
   change in the keep is small. State it honestly, and do not assume it is a saving.
6. Exit. The export path stays open, because the engine choice keeps the data portable.
7. Opportunity cost. The operations team cannot do other projects during the cutover month.

### The parallel run

Text states (Nehemiah 4:17): "every one with one of his hands wrought in the work, and with the
other hand held a weapon." Inference: the running system keeps serving while the team builds the
replacement.

Inference: replicate the data to the new system. Make sure that the copy is correct. Keep the old
system warm for thirty days after the cutover. The parallel period costs double operation, and it
buys the rollback.

### The test and the stopping rule

Inference:

- The test. A full restore rehearsal completes in a staging environment. The measured cutover
  window stays under four hours. The team runs the rollback path once, and does not only write
  it.
- The date. The rehearsal date is at least four months before the end of support. The cutover
  date is at least two months before the end of support.
- The stopping rule. If two rehearsals fail, buy extended support for one year and plan again. A
  failed rehearsal is information, and the extended support is the wait option with a price.

### What the example shows

Inference: the migration succeeds or fails on the rehearsal, the rollback, and the boundary. The
engine choice is secondary, because the data stays portable. The design keeps the exit line open,
and that design decision keeps the migration in the costly class and out of the permanent class.

---

## Part 5. When to choose the boring option

Inference: the boring option is the well-known tool with a long support life, an available labor
market, and no novelty. Choose it in these conditions:

1. The decision is permanent or costly to reverse. Novelty adds risk to a decision that nobody can
   undo. This is A32.
2. The team has no depth in the new option. A team that learns the tool and the domain at once
   makes both mistakes twice.
3. The work is context, not core. Do not pay a learning tax on a cost center.
4. The advantage of the new option is unproven in your conditions. A benchmark from the blog of a
   vendor is not evidence about your workload.
5. The system is load-bearing and the window is short. The migration window belongs to the
   business, and a novel tool makes the window longer and less predictable.
6. The team already changes three other things. Change has a budget, and the budget is attention.

Text (Ecclesiastes 10:10, KJV):

> If the iron be blunt, and he do not whet the edge, then must he put to more strength: but wisdom is profitable to direct.

Text states: the verse attaches the return to "wisdom" and to direction, not to the edge.

Inference: the boring option is a choice of direction, and the direction matters more than the
sharpness. A sharp novel tool in the wrong direction wastes the sharpness.

### The cost of boring, stated honestly

Inference: the boring option has a price. Name it:

1. The advantage of the new option comes later, and sometimes never. A competitor who adopts well
   takes the gain.
2. Debt accumulates. A stack that nobody chose can reach a state where nobody wants it.
3. The labor market can move. A tool that is boring today can be abandoned tomorrow when the
   vendor declines.
4. The team can stagnate. Good engineers leave when every choice is the safe one.

The rule: choose boring for the foundation and for context work. Choose carefully and on purpose
elsewhere. Set a review date, and write down what changes the answer.

Contested: practitioners disagree about how long to stay on a boring stack, and about how much
novelty a healthy team needs. The file states the trade-off and does not settle it.

Text states (Proverbs 25:4): "Take away the dross from the silver, and there shall come forth a
vessel for the finer." The verse commands the removal. Inference: the hard part is the judgment of
what counts as dross, and it is a judgment.

---

## Part 6. The decision record

Inference: write the decision down. The record is the instrument for the review, and it is the
only way to learn. Record these items:

1. The decision, and the date.
2. The specification, in one paragraph.
3. Core or context, with the reason.
4. The options table, with the total cost and the exit cost for each.
5. The reversibility class, and the reason.
6. The keeper, by name, with the annual keep cost.
7. The failure mode and the response.
8. The smallest version, with the finish line.
9. The test, the threshold, the date, and the stopping rule.
10. The confidence, with each claim labeled. Name the observation that changes the answer.

Text states (1 Chronicles 28:19): "All this, said David, the LORD made me understand in writing by
his hand upon me, even all the works of this pattern." The "pattern" arrives in writing.
Inference: the decision record is the same instrument at a smaller scale.

Text states (Proverbs 27:23): "Be thou diligent to know the state of thy flocks, and look well to
thy herds." Inference: people know the state by looking, and the record makes the looking
possible across years.

---

## Appendix: verification log

### Verses retrieved with `../scripture-foundations/scripts/scripture.ts`

Proverbs 24:3-4, Proverbs 24:27, Ecclesiastes 10:10, Luke 14:28-32, Exodus 25:9, Exodus 25:40,
Hebrews 8:5, 1 Chronicles 28:11-12, 1 Chronicles 28:18-19, Isaiah 28:16, Matthew 9:17, Proverbs
22:28, Proverbs 23:10, Proverbs 25:4, Genesis 2:15, Nehemiah 4:17-18, Haggai 1:5-6, Genesis
11:1-9, Exodus 31:1-11, Exodus 35:30-35, 1 Chronicles 22:14-16, 2 Samuel 24:24, Proverbs 27:23.

### Lexical claims verified with `../scripture-foundations/scripts/lexicon.ts`

| Number | Transliteration | Definition as returned (verbatim)                                                                                                                                                                                            |
| ------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H8403  | _tabniyth_      | "structure; by implication, a model, resemblance"                                                                                                                                                                            |
| G5179  | _typos_         | "a die (as struck), i.e. (by implication) a stamp or scar; by analogy, a shape, i.e. a statue, (figuratively) style or resemblance; specially, a sampler (\"type\"), i.e. a model (for imitation) or instance (for warning)" |
| G779   | _askos_         | "a leathern (or skin) bag used as a bottle"                                                                                                                                                                                  |
| G3631  | _oinos_         | "\"wine\" (literally or figuratively)"                                                                                                                                                                                       |
| H1366  | _gebuwl_        | "properly, a cord (as twisted), i.e. (by implication) a boundary; by extension the territory inclosed"                                                                                                                       |
| H5509  | _siyg_          | "scoria"                                                                                                                                                                                                                     |
| H5647  | _abad_          | "to work (in any sense); by implication, to serve, till, (causatively) enslave, etc."                                                                                                                                        |
| H8104  | _shamar_        | "properly, to hedge about (as with thorns), i.e. guard; generally, to protect, attend to, etc."                                                                                                                              |
| H6872  | _tsrowr_        | "a parcel (as packed up); also a kernel or particle (as if a package)"                                                                                                                                                       |
| H5344  | _naqab_         | "to puncture, literally (to perforate, with more or less violence) or figuratively (to specify, designate, libel)"                                                                                                           |
| H1101  | _balal_         | "to overflow (specifically with oil.); by implication, to mix; to fodder"                                                                                                                                                    |
| H2451  | _chokmah_       | "wisdom (in a good sense)"                                                                                                                                                                                                   |
| H8394  | _tebunah_       | "intelligence; by implication, an argument; by extension, caprice"                                                                                                                                                           |
| H1847  | _daath_         | "knowledge"                                                                                                                                                                                                                  |
| H4399  | _melakah_       | "properly, deputyship, i.e. ministry; generally, employment (never servile) or work (abstractly or concretely); also property (as the result of labor)"                                                                      |
| H2600  | _chinnam_       | "gratis, i.e. devoid of cost, reason or advantage"                                                                                                                                                                           |

### Claims I cannot verify with the supplied tools

1. All verse to Strong's mappings. The supplied data has no verse-level tagging. The definitions
   are verified. The placement in the verse is a standard concordance association.
2. Every figure and duration in the two worked examples. The engineer counts, the months, the
   thresholds, and the cutover windows are invented to show the arithmetic. No supplied tool can
   verify a cost or a market fact.
3. The line between core and context for any particular business. The line is a judgment. The
   file requires the judgment, and it does not make it.
4. The cost of the boring option. The four costs in the list are judgments from practice. They
   carry no measurement here.
5. The review period for core and context. The file says yearly, as a discipline. No text and no
   tool sets the period.
6. The US GAAP notes in Part 4. They summarize ASC 350-40, ASU 2018-15, and ASC 360 in general
   terms. No supplied tool verifies accounting standards. Ask an accountant for a specific case.
