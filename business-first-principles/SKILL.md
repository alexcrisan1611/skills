---
name: business-first-principles
description: "Biblical axioms (Genesis 1-3, A1-A34) for foundational business decisions: strategy, capital, org design, hiring, pricing, succession. Use when the user wants a business choice reasoned from Scripture or first principles, not convention."
---

# Business First Principles

## What this skill is for

Most business advice is a pattern: what worked somewhere else, generalized. Patterns are cheap and often fine. They fail in a new market, after a changed constraint, and in a business that is dying for reasons nobody can name. Then you need the principles under the patterns. This skill supplies 34 of them, drawn from Genesis 1-3, and a procedure to apply them.

Three rules govern every use:

1. The axioms are readings, not Scripture. Genesis states what God did. A fallible reader draws the business consequence. Say "Genesis 1 suggests", not "the Bible commands". The method and guardrails are in `../scripture-foundations/SKILL.md`.
2. Derive, don't recite. Quoting an axiom is not an argument. Show why the axiom governs this decision and what follows from it here.
3. Christ is the foundation, and love governs every use (1 Corinthians 3:11, 13:1-3). The axioms are not a second foundation. A reading that produces harm or exploitation has a mistake in it.

Label every claim with the labels defined in `scripture-foundations`: Scripture says, Word meaning, Reading, Disputed, Guess.

Quote verses only from the script, never from memory: `bun run <skill-dir>/../scripture-foundations/scripts/scripture.ts lookup "Genesis 2:15"`, where `<skill-dir>` is the folder of this skill. Without Bun, use `python <skill-dir>/../scripture-foundations/scripts/scripture.py` with the same arguments.

## When to use it, and when not

Use it for a foundational business decision: strategy, capital, org design, hiring, pricing, succession, or a business that fails for reasons nobody can name.

Do not use it for a factual or tactical question. Answer that directly, with no structure. For finding a new opportunity, use `business-idea-generation`. For diagnosing a recurring failure, use `problem-solving-first-principles`.

## The axioms

Cite the heading `### AN.` in `references/axioms.md` as `AN` (for example, A26). Every skill in this repository uses these numbers, so never renumber them. Each line gives the plain consequence. `references/axioms.md` has the text, the derivation, and the limits of each one.

Group I. The source (Genesis 1:1-2)
- A1. All value is derived: you received the material, the market, and the moment, so treat assets as a responsibility, not a possession.
- A2. The default state is formless and empty: everything drifts toward disorder without attention, so budget for decay.
- A3. Presence precedes production: understand the situation before you act; the hour spent understanding is the cheapest.

Group II. The method of making (Genesis 1:3-2:1)
- A4. Making is by word: the clarity of the specification limits the quality of the result.
- A5. Formation precedes filling: build the structure before the contents (platform before features, roles before people).
- A6. Distinction precedes order: say what something is not; scope and positioning are acts of division.
- A7. Naming is an act of authority: names, titles, and metric definitions set the terms, so choose them as decisions.
- A8. Time is a created instrument: cadence (reviews, releases, planning horizons) is a design choice.
- A9. The maker evaluates the work: build assessment into the making, against a stated intention.
- A10. Whole-system review is not the sum of part-reviews: review the assembly, not only the components.
- A11. Multiplication is commanded, and it reproduces after its kind: what you plant replicates, so do not scale what you do not want more of. Growth is permitted, not a duty.
- A12. Dominion is delegated and bounded: give real authority with stated limits; it does not extend to rule over people.
- A13. Provision precedes assignment: fund the work before you demand output from it.
- A14. Completion is a real state: define "done" before you start.

Group III. The rhythm (Genesis 2)
- A15. Work is bounded; rest is structural: plans must include rest; burnout is a design fault.
- A16. Work precedes the fall: work is where meaning is made, not only a cost.
- A17. Building and keeping are equal partners: maintenance needs named owners, time, and equal status.
- A18. Aloneness is not good: partnership and counsel correct a stated defect.
- A19. Doing the work reveals the need: ship small versions sooner, because the real problem shows up in motion.
- A20. Abundance precedes restriction; the boundary is few and stated in advance: permit by default, and set few, clear rules before the pressure arrives.
- A21. Commitment requires leaving and cleaving: a venture needs a real exit from what came before.

Group IV. The fracture (Genesis 3)
- A22. Trust in the stated word is the first target: keep promises, and correct the record plainly.
- A23. Deception works by denying consequence and promising autonomy: an offer with no downside and total freedom is a warning sign.
- A24. Desire runs on three channels: appetite, beauty, and status. Serve real need and real beauty; never sell status.
- A25. Undisclosed failure produces hiding and blame: make reporting failure cheap and safe.
- A26. Diagnose before you judge: establish the facts before you assign responsibility.
- A27. Friction is structural: name the specific resistance and its cost as a line item.
- A28. Fruitfulness continues, but delivery costs: tell the pain of hard work apart from the pain of a broken thing.
- A29. Authority gets contested: expect the struggle; authority that will not serve drifts into domination.
- A30. Mortality makes time the binding constraint: ask first whether a thing is good, then whether it is the best use of the years.
- A31. Recovery is provided, and it costs something that is not you: hold cash reserves before you need them.
- A32. Some states must not be allowed to become permanent: put a gate on irreversible actions and slow them down.
- A33. Access is guarded, and the guard is a feature: design permissions and limits in.
- A34. There is an adversary for this age, and the victory is asymmetric: opposition lasts; aim at the root cause, not at a competitor.

## Which structure to run

- Factual or tactical question: no structure. Answer it.
- Default: the short form.
- Hard-to-reverse decision (A32): the full procedure.
- Whichever you ran, show the answer in the output format.

### The short form

1. What here is given, and not made by me? (A1)
2. What has no structure yet, and what structure will I give it? (A2, A5)
3. Who maintains this after it ships, and at what cost? (A17)
4. What specific friction will resist this, and what does it cost? (A27)
5. What is the boundary, and is it stated before the pressure arrives? (A6, A20)
6. What does "finished" mean, and who declares it? (A14)
7. What will this make permanent that must not be permanent? (A32)

### The full procedure

1. Name the decision and its real deadline (A30). Separate the real deadline from one that only feels urgent.
2. Separate what is given from what is chosen (A1): the market, the capital, the team, the constraints, the timing.
3. Find the one or two governing axioms, and say why. If none applies, the decision is not foundational: use a known pattern.
4. Derive the consequence, one step a line. A step you cannot state is an assumption. Then test it: does it love God and neighbor (Matthew 22:37-39)? For a hard ethical call, run the Micah 6:8 test in `references/ethics.md`.
5. Name the specific friction (A27), with numbers where you can, and the plan for it.
6. Name the owner of upkeep and its yearly cost (A17). No owner means it will decay.
7. State the boundary (A6, A20): what this is not, and the few rules, set in advance.
8. Define "finished" (A14): an observable condition, and who declares it.
9. Assign who reviews it, against what standard, at the level of the parts and of the whole (A9, A10).
10. Set the review cadence and the stopping rule (A8, A14): what result makes you stop, and what stopping costs.

## Anti-patterns

| Anti-pattern | Violates | The cost |
| --- | --- | --- |
| Shipping with no owner for maintenance | A17 | Decay, then a costly rewrite |
| Contents before structure | A5 | Clutter, and features nobody can evaluate |
| A plan with no stopping rule | A8, A14 | Endless projects, no learning, no exit |
| Growth with no stated boundary | A6, A20 | You can no longer say what you are |
| Assuming things stay stable | A2, A27 | "Unexpected" churn, cost, and delay every quarter |
| Punishing the bearer of bad news | A25 | Late discovery, and worse |
| Specifying by implication | A4 | Rework: paying twice for one result |
| Judging without diagnosing | A26 | Wrong verdicts, and a team that hides |
| Keeping every option open | A21 | No venture, only the cost of holding options |
| Full-throttle plans with no rest | A15 | Burnout, attrition, and a cliff |
| Growing a thing you do not want more of | A11 | Bad culture, copied at scale |
| Deciding by urgency, not by deadline | A30 | A life spent on other people's emergencies |

## Output format

1. The decision, restated precisely, with the real deadline.
2. What is given, and not chosen.
3. The governing axioms, with the derivation to this situation.
4. The conclusion, stated plainly.
5. The specific friction and its cost.
6. The owner of upkeep, and the boundary: what it is not.
7. Confidence: each claim labeled (Scripture says, Word meaning, Reading, Disputed, Guess), and what would change the answer.

Keep the answer short when the question is small. The structure is for hard questions, not a ritual for easy ones.

## Read when

- `references/axioms.md`: before you rely on an axiom. It has the text, derivation, failure mode, and extending verses for A1-A34.
- `references/canon-survey.md`: when the decision needs Scripture beyond Genesis 1-3 (purpose, integrity, leadership, money, resilience, communication). Read it as analogy; where it overlaps the axioms, the axioms win.
- `references/capital-and-stewardship.md`: money, debt, cash reserves, the talents, Joseph's seven-year cycle, the limits of the jubilee.
- `references/org-and-labor.md`: delegation (Exodus 18), org design (Acts 6), building while defending (Nehemiah), succession, paying workers, counsel.
- `references/ethics.md`: an ethical call, honest measures, the golden rule in commerce, and the Micah 6:8 test.
- `references/trends-and-timing.md`: reading the times, cycles, sowing and reaping, action under uncertainty.
- `references/body.md`: when the user asks how an organization is like a body, or a decision turns on structure, feedback, flow, growth, maintenance, waste, rest, limits, or resilience. It holds principles B1-B24, the places the analogy misleads (M1-M8), and its own procedure. Its detail files are in `references/body/`. Never use it for a personal health question; it is not medical guidance.

## Related skills

- `scripture-foundations`: the KJV text, the scripts, the reading rules, and the label definitions.
- `first-principles-reasoning`: the general method for reasoning from what is given.
- `problem-solving-first-principles`: diagnosis of a recurring failure.
- `business-idea-generation`: finding and testing a new opportunity.
