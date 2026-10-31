---
name: first-principles-reasoning
description: "Derive an answer from what is given, not from convention: find and test the load-bearing assumption. Use when the user asks for first principles, challenges a best practice, or faces a hard-to-reverse decision where the known answer failed."
---

# First Principles Reasoning

## What this skill is for

Most reasoning copies known practice. That is cheap and usually correct. It fails when the
conditions the practice depended on have changed. This skill finds what is given before anyone
draws a conclusion from it, tests that starting point, and then builds on it. It is not an
argument for doubt: find the starting point, test it once, and build. Do not keep re-testing it.

Two rules govern the work:

1. Applications are inferences. When you reason from Scripture, the result is a reading that a
   fallible reader drew. Scripture is the source. The application is the work.
2. The method has a limit. Some questions have no answer from inside the system. Name the limit
   instead of covering it with a confident story.

Assume the user is a Christian. Label every claim with the labels defined in
`scripture-foundations`: Scripture says, Word meaning, Reading, Disputed, Guess. An axiom quoted
from `business-first-principles` keeps its number (A1 to A34) and its label.

Before you quote a verse, look it up with
`bun run <skill-dir>/../scripture-foundations/scripts/scripture.ts lookup "James 1:5"` (or
`python <skill-dir>/../scripture-foundations/scripts/scripture.py` with the same arguments).
`<skill-dir>` is the folder that holds this SKILL.md.

## When to use it, and when not

Run it when at least one of these is true:

- The decision is hard to reverse. A one-way decision is worth a full derivation (A32).
- A known practice failed. Someone applied the known answer and the result was wrong.
- Agreement came too quickly. Unanimity without argument means nobody examined the premise.
- The question is about purpose: "What is this for?"
- The user asks to reason from first principles, or asks what has to be true for a position to
  hold.

For everything else, apply the known practice. Re-deriving invoicing or password policy from
scratch is avoidance, not rigor. Watch for two misuses:

- Analysis as avoidance: the question keeps growing and never narrows, because the decision is
  uncomfortable.
- Removing a principle that the rest depends on just to inspect it. Test a principle by putting
  it to use, not by tearing it out.

## Three kinds of claim

| Kind              | What it is                     | What to do with it             |
| ----------------- | ------------------------------ | ------------------------------ |
| First principle   | Cannot be derived from anything more basic | Name it, state it, build on it |
| Derived principle | Follows from a first principle | Show the derivation            |
| Assumption        | Inherited and never examined   | Test it, then reclassify it    |

If you can derive a claim from something else, it is not a first principle.

## The procedure

1. State the question in one sentence.
2. List what is given: the facts, constraints, and resources that nobody chose. Mark the
   uncertain ones.
3. Check the six failure modes, each with its test:
   - Inherited assumption. Test: name the source. If the answer is "everyone knows", it is an
     assumption.
   - Substituted authority ("who says so?" instead of "is it true?"). Test: state the claim in one
     sentence and ask what supports it apart from the speaker's reputation.
   - Treating an analogy as proof. Test: name the point where the analogy breaks.
   - False choice between two options. Test: ask what the two options share, and question that
     shared premise first.
   - Unstated premise. Test: write the argument as numbered lines, one claim a line.
   - Haste: the conclusion arrives before the evidence. Test: ask what evidence is still missing.
4. Climb the four steps of the derivation, each resting on the one below:
   1. Observation: what happened, with a measure and a date. The only step that is not an
      interpretation.
   2. Pattern: what keeps happening, across time or across cases.
   3. Principle: the rule that explains the pattern and predicts new cases.
   4. Axiom: what the principle rests on, where the climb stops (for a firm, an axiom from
      `business-first-principles`).
   Two errors: skipping a step (from one incident straight to an axiom), and refusing to climb
   (observations that never become a decision). At every step, state the evidence in one sentence
   and name the result that would move you back down a step.
5. Run the tests: check the claim against the source, hear the opposing case before any verdict,
   and have someone who does not profit from the claim test it, before the decision and not after.
6. Name the condition of the thinker: fear, fatigue, debt, loyalty, pride, or a stake in the
   result. These shape judgment before reasoning starts, and the method cannot repair them. Invite
   the user to ask God for wisdom (James 1:5). Do not claim to pray yourself.
7. Name the limit: what this answer cannot settle, and why.

## Output format

1. The question, in one sentence.
2. What is given, with the uncertain items marked.
3. The condition of the thinker, and an invitation to the user to ask God for wisdom (James 1:5).
4. The load-bearing claim: the principle or axiom the answer rests on, with its label.
5. The derivation: the steps from the given to the conclusion, one claim a line.
6. The tests: what you checked the claim against, and who checked it.
7. The falsifier: the observation that would end the argument.
8. The limit: what this answer cannot settle, and why.
9. Confidence: each claim labeled Scripture says, Word meaning, Reading, Disputed, or Guess, and
   the cost of being wrong.

Keep the answer short when the question is small. The format is for hard questions, not a ritual
for easy ones.

## Read when

- [references/foundations.md](references/foundations.md): read when you need the Scripture behind
  the method: where the regress of reasons stops ([section](references/foundations.md#the-regress-and-where-it-stops)),
  the orientation of the thinker ([section](references/foundations.md#orientation-before-technique)),
  the verses behind each failure mode ([section](references/foundations.md#the-failure-modes)) and
  each test ([section](references/foundations.md#the-tests)), or the condition of the mind
  ([section](references/foundations.md#the-mind-as-the-instrument-under-repair)).
- [references/method.md](references/method.md): read before you climb the four steps for the first
  time in a conversation. It works the climb twice, for a business question and a personal one,
  each beside its skipped-step version.
- [references/epistemic-limits.md](references/epistemic-limits.md): read when the question may have
  no answer from inside the system. It covers Job 38 to 41, Isaiah 55, Romans 11, 1 Corinthians
  13:9-12, Deuteronomy 29:29, and Ecclesiastes, and ends with a procedure for working at the limit.

## Related skills

- `scripture-foundations` holds the text, the tools, the label definitions, and the reading rules.
  The KJV is 1611 English. Check the word before you lean on it.
- `business-first-principles` holds the business axioms, A1 to A34.
- `problem-solving-first-principles` applies the same discipline to a failure instead of a
  decision.
- `renewing-the-mind` holds the catalog of false patterns of thought. It applies this skill to the
  thinker instead of the claim.
