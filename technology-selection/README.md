# Technology Selection

This skill helps you decide whether to buy, build, borrow, or wait on a technology, and it prices the whole cost before you commit.

## What it does

The skill makes Claude reason about a technology choice from the specification, not from the tool. A specification is a written model of what the system must do. The skill writes the specification first, then compares the options against it.

The skill does four things:

1. It counts the full cost of each option, including the cost to keep the system running every year.
2. It classifies the decision as reversible, costly, or permanent, and it slows down the permanent ones.
3. It asks for a named keeper. A keeper is the person who owns the maintenance after launch.
4. It asks for the smallest version that works, with a test, a date, and a stopping rule.

The skill rests on Scripture (KJV) and on the axioms of the sibling skill `business-first-principles`. Each business or technical application is labeled as an inference. No verse names a language, a vendor, or a platform. The skill shows how it derives each principle from the text.

## When to use it

Use the skill when you:

- Ask whether to adopt a specific tool, framework, or platform.
- Ask whether to build your own system or buy a product.
- Plan a migration, for example a database that reaches end of support.
- Ask whether to rewrite a system or to keep it.
- Choose a stack, an internal tool, or an automation.
- Want to know the real cost of a free tool.

## How it works

1. The skill states the decision and its real deadline.
2. It writes the specification: the parts, the boundaries, the data, and the behavior at the edges.
3. It decides if the work is core (a source of advantage) or context (a cost of doing business).
4. It builds an options table for buy, build, borrow, and wait. Each option gets a three-year total cost, an exit cost, and a reversibility class.
5. It names the keeper and the annual maintenance cost.
6. It names the failure mode and the smallest version that works.
7. It gives a recommendation, with the friction priced as a line item.
8. It sets the test, the date, and the stopping rule.
9. It states its confidence, and it labels each claim as stated, inferred, contested, or unverified.

The full cost list has seven lines: license or build, integration, training, migration, maintenance, exit, and opportunity cost. The skill also gives 14 questions to answer in writing before you adopt anything, and a table of anti-patterns with the cost each one causes.

## What is in this folder

- `SKILL.md`: The skill itself. It holds the Scripture readings, the cost list, the reversibility test, the compatibility questions, the six decision criteria, the 14 questions, the output format, and the anti-patterns.
- `references/decision-framework.md`: The full buy, build, borrow, or wait framework. It has the evidence that each option needs, a worked build decision (a dispatch system for 40 field technicians), a worked database migration, guidance on when to choose the boring option, and a template for a decision record.
- `references/total-cost.md`: The cost of keeping a system. It lists 12 categories of maintenance work, a five-part keep budget, a checklist of 20 costs that teams often omit, the symptoms of keep failure, the lines of an exit cost, and 10 working rules.
- `README.md`: This file.

The skill depends on sibling skills in this repository:

- `../scripture-foundations/`: The KJV text, the Strong's lexicon, and the reading rules.
- `../business-first-principles/`: The axioms that the skill uses (A2, A5, A13, A14, A17, A27, A30, and A32).
- `../business-idea-generation/`: Finds the opportunity. This skill decides what to build or buy for it.
- `../body-first-principles/`: Covers maintenance, waste, and flow at the level of systems.

## Example prompts

- "Should we build our own scheduling system or buy one? We have 40 technicians and a whiteboard."
- "Our database version loses vendor support in 14 months. How do we plan the migration?"
- "The team wants to rewrite the billing service in a new framework. Is that a good idea?"
- "This tool has a free tier. What does it really cost us over three years?"

## Limits

- The figures in the worked examples are invented. They show the arithmetic. They are not market data.
- The skill does not give cost benchmarks. Its method measures your own system.
- The skill does not decide the line between core and context for your business. It requires you to make that judgment in writing.
- The skill marks some trade-offs as contested, for example how long to stay on a boring stack. It does not settle them.
- The US GAAP notes (ASC 350-40, ASU 2018-15, ASC 360) are general summaries. The cost of keeping in `references/total-cost.md` is a cash view, not an accounting view. Ask an accountant about a specific case.
- The mapping from a verse to a Strong's number is a standard concordance association. The supplied tools do not verify it.
- The skill does not present a business application as a command of Scripture.
