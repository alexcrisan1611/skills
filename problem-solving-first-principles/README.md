# Problem Solving First Principles

This skill finds where a failure is, what produced it, and what act carried it, before anyone assigns blame.

## What it does

The skill is for diagnosis, not for decisions. It explains what went wrong, so that the next decision rests on the cause and not on the symptom. The `first-principles-reasoning` skill decides what to do. This skill gives that decision a cause to work from.

Three rules govern the work:

1. Judgment comes after diagnosis, never before it.
2. Blame is not a finding. A name is not a cause.
3. The diagnosis must end in a test that can prove it wrong.

The method comes from the questions in Genesis 3. God asks "Where art thou?" (3:9), then "Who told thee that thou wast naked?" and "Hast thou eaten of the tree...?" (3:11), and then "What is this that thou hast done?" (3:13). The verdict comes later, in 3:14-19. The skill uses that order: where, then source, then act, then judgment.

## When to use it

Use the skill in these situations:

- You want a root cause analysis, a post-mortem, or a retrospective on a failure.
- The same outage, complaint, or missed date returns.
- A team applied a fix and the problem came back.
- Something declines slowly and no single event explains it.
- Someone dismissed a warning and the crisis arrived anyway.
- A crisis is active and you must decide what to do first.
- A process, an organization, or a system fails the same way twice.

## How it works

The skill runs eight steps in order. Steps 1 and 2 come before any interview.

1. Stabilize. If harm is active, stop it first.
2. State the symptom in one sentence, with one measure and one date.
3. Locate the failure. Find the first point in the sequence where the output is wrong.
4. Trace the source. Find what fed that point: a person, a rule, an incentive, a tool, or an absence.
5. Find the act. State what was done and which rule permitted it.
6. Classify the finding: cycle or event, structural or fixable friction, decay or break.
7. Name the test. State which event will prove the fix, and what survival looks like.
8. Assign the owner, the date, and the warning sign of a return.

Each class gets a different remedy. A cycle gets a prediction and planned capacity. Structural friction (a permanent cost of operation) gets a budget, an owner, and a measure. Fixable friction gets a removal and a test. Decay gets a maintenance function with a name, a calendar, and a measure.

The skill draws each tool from a Bible passage:

- Genesis 41 gives the test that separates a cycle from an event.
- Genesis 3:17-19 gives the difference between structural and fixable friction.
- Exodus 18 gives triage, tiers, and a stated threshold for what goes up.
- Acts 6:1-7 gives a model for a growth failure and real delegation.
- Nehemiah 4 gives the pair of prayer and practical preparation against a threat.
- Proverbs 24:30-34 gives a way to read slow decay by its rate.
- Matthew 7:24-27 and 1 Corinthians 3:10-15 give the storm test and the fire test.
- 2 Chronicles 20:12 gives the honest limit, when nobody knows what to do.
- James 1, Romans 5, and Hebrews 12 ask what capacity a failure leaves behind.
- Acts 27 gives the case of a warning that people rejected.

Each claim in the skill carries a label. "Text states" marks what the verse says. "Lexical" marks a Strong's word definition. "Inference" marks a conclusion that the skill draws. The reference files also use "Contested" and "Illustration".

The output is a diagnosis in eight parts: symptom, location, source and act, classification, evidence, fix and its test, what is not known, and confidence. The diagnosis comes before the judgment, and it keeps blame out of the finding.

## What is in this folder

- `SKILL.md`: The full method, the Bible passages, the tests, the eight-step procedure, and the output format.
- `references/diagnosis.md`: The eight steps worked through one constructed case, a software firm that misses delivery dates every quarter. It includes a list of traps, the signs that the diagnosis is wrong, and a bank of 17 questions.
- `references/crisis.md`: Crisis response from Acts 27 and Nehemiah 4. It separates the decisions for the first hour from the decisions that wait. It also covers the crisis log, the rule for ending an emergency, common failure modes, and the order of work after the crisis.

The skill quotes the King James Version (KJV). The verses and word definitions come from the `scripture-foundations` skill, which must be in the same parent folder.

## Example prompts

- "Our deploys fail every few weeks with the same error. We fixed it twice. Do a root cause analysis."
- "Write a post-mortem for last week's outage. Keep blame out of it."
- "Customer churn rose slowly for a year and nobody can say why. Help me diagnose it."
- "We are in a crisis right now. What must we decide in the first hour, and what can wait?"

## Related skills

- `first-principles-reasoning`: Decides what to do after this skill finds the cause.
- `business-first-principles`: Holds the business axioms. The skill uses A17, A25, A26, and A27.
- `body-first-principles`: Supplies B9, B10, and B23 on pain as a signal, time limits on urgency, and small failures.
- `scripture-foundations`: Holds the KJV text, the lexicon tools, and the rules for reading them.

## Limits

The skill explains a failure. It does not choose the fix strategy by itself, and it does not replace the judgment that follows the diagnosis.

A diagnosis is only as good as its evidence. The skill asks for records and for more than one account, and it records the evasions. It cannot produce facts that nobody wrote down.

Not every symptom is a cycle, and not every friction is permanent. The skill runs the tests and records the result, including "event" or "fixable".

The skill names a limit to diagnosis itself. Some situations use up both the capacity and the knowledge of the people in them. In that case, the skill reports the limit honestly and does not invent a cause.

The teaching on trials does not give anyone the right to make hardship for other people. The skill states this guard directly.
