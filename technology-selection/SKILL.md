---
name: technology-selection
description: "Buy/build/borrow/wait decisions for platforms, internal tools, migrations and rewrites, priced on total cost and reversibility. Not for routine library picks or Solar Enterprise stack choices (use solar-enterprise-stack)."
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

## When to use it, and when not

Use it when the user must decide whether to buy, build, borrow, or wait on a platform, an
internal tool, a framework, a migration, a rewrite, or automation.

Do not use it for a routine library pick inside a stack that is already chosen. Apply the
known practice. Do not use it for the stack of a Solar Enterprise project. Use
`solar-enterprise-stack`. To find the opportunity in the first place, use
`business-idea-generation`.

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
5. What is the exit cost, and how long does exit take? (A32)
6. How many people must understand it to run it and to repair it? (Exodus 35:34)
7. What is the failure mode, and what happens at the worst time?
8. Does it fit the running system without forcing that system to change? (Matthew 9:17)
9. What does it remove, and is the removal dross or a landmark? (Proverbs 22:28, 25:4)
10. What is the smallest version that works?
11. What is the boring option, and why do you not choose it?
12. What is the test, the date, and the stopping rule?
13. What does this make permanent that must not become permanent? (A32)
14. What is the real price of the free option? (2 Samuel 24:24)

## The working tools

The decision framework uses three tools: the cost list, the reversibility test, and the
compatibility questions. The Scripture readings behind them are in
`references/scripture-readings.md`.

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

| Anti-pattern                                 | Drawn from (inference) | The bill arrives as                                     |
| -------------------------------------------- | ---------------------- | ------------------------------------------------------- |
| Choosing the tool before the shape           | A5                     | Features in rooms that must not exist                   |
| Comparing license prices only                | Luke 14:28             | Integration and training costs discovered mid-project   |
| No named keeper                              | A17                    | Rot, then a rewrite at a multiple of the original cost  |
| A permanent decision made quickly            | A32                    | A decade on a platform chosen in a week                 |
| A new component forced into an old container | Matthew 9:17           | Both the component and the container perish             |
| Removing a boundary as if it were waste      | Proverbs 22:28         | Someone outside the team loses their dependency         |
| Effort added to a leaking system             | Haggai 1:6 (analogy)   | The wage grows and the store does not                   |
| One system for everything                    | Genesis 11 (analogy)   | One failure stops all, and every release needs everyone |
| A system only one person understands         | Exodus 35:34           | The gift dies with the person                           |
| Building before the provision                | 1 Chronicles 22:14     | Stopped work with a visible foundation (Luke 14:29-30)  |
| Adopting on the free tier and staying        | 2 Samuel 24:24 (analogy) | A cost that arrives later with no budget line         |

Each entry in the second column is a source that the file draws an inference from. A business
anti-pattern does not violate a verse. Where the column says "analogy", the verse has another
subject, and the file says so above.

## The Scripture readings behind the framework

The Scripture readings that ground the framework are in `references/scripture-readings.md`. Read the
section that matches the decision:

- [Shaping before filling](references/scripture-readings.md#shaping-before-filling): read when the user starts from a tool and not from the shape of the work (Proverbs 24:3-4).
- [Sharpen the tool](references/scripture-readings.md#sharpen-the-tool): read when the question is whether to invest in better tools (Ecclesiastes 10:10).
- [Count the cost first](references/scripture-readings.md#count-the-cost-first): read when you price the options. The full cost list is above (Luke 14:28-31).
- [Build to a specification](references/scripture-readings.md#build-to-a-specification): read before you write the specification for output line 2 (Exodus 25:9, 25:40).
- [Sequence the work](references/scripture-readings.md#sequence-the-work): read when you decide what to prepare before you build (Proverbs 24:27).
- [Do not hurry an adoption](references/scripture-readings.md#do-not-hurry-an-adoption): read for a costly or permanent decision. The reversibility test is above (Isaiah 28:16).
- [Compatibility](references/scripture-readings.md#compatibility): read before you add a component to a running system (Matthew 9:17).
- [Do not break what works](references/scripture-readings.md#do-not-break-what-works): read before a removal, a cleanup, or a rewrite (Proverbs 22:28, 25:4).
- [Maintenance parity](references/scripture-readings.md#maintenance-parity): read when you name the keeper and the keep cost (Genesis 2:15, A17).
- [Build and defend at once](references/scripture-readings.md#build-and-defend-at-once): read when a migration must run while the current system keeps serving (Nehemiah 4:17-18).
- [Waste diagnosis](references/scripture-readings.md#waste-diagnosis): read when effort goes in and output does not come out (Haggai 1:5-6).
- [The limits of one great system](references/scripture-readings.md#the-limits-of-one-great-system): read when someone proposes one system for everything (Genesis 11:1-9).
- [Craft as serious work](references/scripture-readings.md#craft-as-serious-work): read when the question is who can do the work and who can teach it (Exodus 31, 35).
- [Provisioning before building](references/scripture-readings.md#provisioning-before-building): read before a build starts without the resources in hand (1 Chronicles 22:14-16).
- [The cost that means something](references/scripture-readings.md#the-cost-that-means-something): read when a free tier or a free option is on the table (2 Samuel 24:24).

## References

- `references/scripture-readings.md` holds the Scripture readings behind the framework: shape, cost,
  specification, sequence, haste, compatibility, maintenance, waste, and provision.
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
