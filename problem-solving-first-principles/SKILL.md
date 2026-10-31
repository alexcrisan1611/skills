---
name: problem-solving-first-principles
description: "Root-cause diagnosis of recurring organizational or process failures (post-mortems, retros, crisis triage) using the Genesis 3 where/source/act method. Not for debugging code; use mattpocock-skills:diagnosing-bugs."
---

# Problem Solving First Principles

## What this skill is for

This skill is for diagnosis. It finds where a failure is, what produced it, and what act
carried it, in that order.

It does different work from `first-principles-reasoning`. That skill decides what to do.
This skill explains what went wrong. The decision can then rest on the cause and not on the
symptom.

Three rules govern the work:

1. Judgment comes after diagnosis, never before it. The business axioms state this as A26
   (Diagnose before you judge). Judgment that comes before the diagnosis gives the wrong
   verdict. It also teaches people to hide.
2. Blame is not the first finding. A name alone is not a cause. Record both the personal act
   and the system that permitted it. In Genesis 3, God holds each person to account for that
   person's own act (3:14, 3:17). Adam is the one who points to the system: "The woman whom
   thou gavest to be with me" (3:12). Do not let the act hide the system, or the system hide
   the act.
3. The diagnosis must end in a test. A cause that nobody can falsify is a story. Name in
   advance the event that will show whether the fix holds.

---

## When to use it, and when not

Use it for a root-cause diagnosis of a failure in an organization or a process: a post-mortem,
a retrospective, a complaint or a missed date that returns, a fix that did not hold, a slow
decline, or a crisis that needs triage.

Do not use it to debug code. For a bug in software, use `mattpocock-skills:diagnosing-bugs`.
Do not use it to decide what to do once the cause is known. That is `first-principles-reasoning`.

---

## The diagnosis procedure

Run these steps in order. Do steps 1 and 2 before you question anyone involved. You do not
question people directly: ask the user what they know, and give the user the questions to put to
the people involved (the question bank in `references/diagnosis.md`). Ask one question at a
time, and ask about the location before the source, and the source before the act.

1. Stabilize. If harm is active, stop it first. Diagnosis waits. See `references/crisis.md`.
2. State the symptom as an observation. Use one sentence, one measure, one date. Separate the
   symptoms from each other, and rank them by cost.
3. Locate the failure. Find the first point in the sequence where the output is wrong. This
   answers "Where art thou?" (Genesis 3:9) for the process.
4. Trace the source. Ask what fed that point, and who made the choice. This is "Who told
   thee?" (Genesis 3:11).
5. Find the act. State what was done, and by what rule the act was permitted. This is "Hast
   thou eaten of the tree...?" (Genesis 3:11) and "What is this that thou hast done?" (3:13).
6. Classify the finding. Decide three things: does it recur on a pattern or happen once (cycle
   or event), is it a lasting cost of operating or a defect that someone can remove (structural
   or fixable), and did it wear down slowly or fail at once (decay or break). The class decides
   the kind of fix.
7. Name the test. State which future event will put load on the fix, and what survival looks
   like (the storm test and the fire test in `references/cases-and-tests.md`).
8. Assign the owner, the date, and the warning sign. A diagnosis with no owner repeats.

`references/diagnosis.md` works through the steps in full, with the questions to ask at each
step.

---

## Output format

Use this shape for a diagnosis:

1. The symptom: one sentence with a measure and a date.
2. The location: the first point where the output goes wrong.
3. The source and the act: what fed the failure, and what was done.
4. The classification: cycle or event, structural or fixable, decay or break.
5. The evidence: each claim with its label.
6. The fix and its test: the change, the owner, the date, and the event that will test it.
7. What is not known: the open questions, and the limit of the diagnosis.
8. Confidence: what the evidence supports, and what rests on judgment.

Label every claim with the labels defined in `scripture-foundations`: Scripture says, Word
meaning, Reading, Disputed, Guess.

Deliver the diagnosis before the judgment. State the facts in the order that you found them.
Name the act and the system, and do not let a verdict on character replace either one. A finding
that starts with blame teaches the next person to hide the next failure. Aim the finding at
repair and restoration (Galatians 6:1). Not every failure is someone's sin (John 9:2-3):
record a cause in the system as a cause in the system.

Keep the answer short when the question is small. The format is for a real diagnosis, not a
ritual for a minor slip.

## Failure modes

`references/diagnosis.md` names the points where the diagnosis can go wrong at each step. Read
it before you deliver a diagnosis that will assign an owner.

---

## The cases and tests behind the procedure

The Scripture cases and the classification tests are in `references/cases-and-tests.md`. Read the
section that matches the step you are on:

- [The two supporting proverbs](references/cases-and-tests.md#the-two-supporting-proverbs): read before you draft questions for the user, to draw the account out one question at a time (Proverbs 18:13, 20:5).
- [Cycle or event: Genesis 41](references/cases-and-tests.md#cycle-or-event-genesis-41): read for step 6. It holds the test for separating a cycle from an event.
- [Structural friction and fixable friction](references/cases-and-tests.md#structural-friction-and-fixable-friction): read for step 6. It holds the test for telling the two apart (A27).
- [Triage and thresholds: Exodus 18](references/cases-and-tests.md#triage-and-thresholds-exodus-18): read when one person or one team carries every decision.
- [The first operational crisis: Acts 6:1-7](references/cases-and-tests.md#the-first-operational-crisis-acts-61-7): read when one group brings a complaint about administration against another.
- [Two responses to a threat, not one: Nehemiah 4](references/cases-and-tests.md#two-responses-to-a-threat-not-one-nehemiah-4): read when a threat needs both prayer and a watch.
- [Diagnosing decay: Proverbs 24:30-34](references/cases-and-tests.md#diagnosing-decay-proverbs-2430-34): read for a slow failure with no single event. It holds the questions for reading a slow failure.
- [The storm test and the fire test](references/cases-and-tests.md#the-storm-test-and-the-fire-test): read for step 7, to name the event that tests the fix before you write the fix.
- [The honest limit: 2 Chronicles 20:12](references/cases-and-tests.md#the-honest-limit-2-chronicles-2012): read when the diagnosis runs out of capacity or knowledge.
- [Trials as mechanism, not only as obstacle](references/cases-and-tests.md#trials-as-mechanism-not-only-as-obstacle): read when someone asks whether a hardship is doing work. The use in diagnosis is narrow.
- [The ignored warning: Acts 27](references/cases-and-tests.md#the-ignored-warning-acts-27): read when a warning was dismissed and the crisis arrived.

---

## References

- `references/interrogation.md` holds the reading of Genesis 3:9-13 behind the order of the
  questions, the answers as data, and the verdict with account and mercy (3:14-21).
- `references/cases-and-tests.md` holds the Scripture cases and the tests: cycle or event, structural
  or fixable friction, triage, decay, the storm and fire tests, the honest limit, and Acts 27.
- `references/diagnosis.md` works the full procedure through one recurring organizational
  failure, step by step. It gives the questions to ask at each step and the points where the
  diagnosis can go wrong.
- `references/crisis.md` covers crisis response from Acts 27 and Nehemiah 4. It separates the
  decisions that belong in the first hour from the decisions that wait.

## Related skills

- `first-principles-reasoning` is the general engine. It decides what to do. This skill explains
  what went wrong.
- `business-first-principles` holds the axioms. The most relevant are A26 (Diagnose before you
  judge), A27 (Friction is structural), A17 (Building and keeping are equal partners), and A25
  (Undisclosed failure produces hiding and blame).
- The body layer of `business-first-principles` (`../business-first-principles/references/body.md`)
  supplies B9 (Pain is a signal, and the signal must be preserved), B10 (Acute inflammation
  heals. Chronic inflammation destroys.), and B23 (Small failures kill the whole).
- `scripture-foundations` holds the text, the tools, and the reading rules. The KJV text is
  1611 English.
