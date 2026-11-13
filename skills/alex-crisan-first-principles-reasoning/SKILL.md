---
name: alex-crisan-first-principles-reasoning
description: "Derive an answer from what is given, not from convention: find and test the load-bearing assumption. Use when the user asks for first principles, challenges a best practice, or faces a hard-to-reverse decision where the known answer failed."
---

# First Principles Reasoning

Find what is given, test the starting point once, then build on it. Do not keep re-testing it. Assume the user is a Christian.

Use it when a decision is hard to reverse, a known practice failed, agreement came too quickly, or the question is what a thing is for. Otherwise say so in two lines, apply the known practice, and stop: no format, no reference, no verse. Re-deriving invoicing from scratch is avoidance. Two misuses: analysis that grows because the decision is uncomfortable, and tearing out a principle the rest depends on just to inspect it.

## Rules

1. An application of Scripture is a Reading by a fallible reader.
2. The method has a limit. Name it; do not cover it with a confident story.
3. Label each claim Scripture says, Word meaning, Reading, Disputed or Guess. Quote only what the script printed, in one command for all verses: `bun run <skill-dir>/../alex-crisan-scripture-foundations/scripts/scripture.ts lookup "Jas 1:5" "Prov 18:17"`.

## Procedure

1. State the question in one sentence.
2. List what is given: facts, constraints and resources nobody chose. Mark the uncertain ones.
3. Check six failures, each with its test:
   - Inherited assumption: name the source. "Everyone knows" is an assumption.
   - Substituted authority: state the claim in one sentence. What supports it apart from the speaker?
   - Analogy as proof: name where the analogy breaks.
   - False choice: find what both options share, and question that first.
   - Unstated premise: write the argument as numbered lines, one claim each.
   - Haste: what evidence is still missing?
4. Climb four rungs, each resting on the one below:
   1. Observation: what happened, with a measure and a date.
   2. Pattern: what keeps happening, across time or cases.
   3. Principle: the rule that explains the pattern and predicts a case that has not happened yet.
   4. Axiom: where the climb stops.
   At each rung give the evidence in one sentence, and the result that would send you back down. Errors: skipping a rung (one incident to an axiom), and never climbing (observations that never become a decision).
5. Test before the decision, not after: hear the opposing case in full, and have someone with no stake try to break the claim.
6. Name the condition of the thinker: fear, fatigue, debt, loyalty, pride, a stake in the result. The method cannot repair these. Invite the user to ask God for wisdom (James 1:5); never claim to pray yourself.
7. Name the limit: what this answer cannot settle, and why.

Stop early when the decision is cheap to reverse, when the pattern is strong and only the mechanism is unknown (set a review date), or when a known practice already fits. Say where you stopped and why.

Output: the question; the given; the thinker's condition, with the invitation to ask God for wisdom (James 1:5); the load-bearing claim; the derivation, one claim a line; the tests and who ran them; the falsifier; the limit. Label every claim. A small question gets a few lines: open no reference and cite no verse.

## Check before you answer: you have strayed if

- Your claim rests on "everyone knows", a reputation or one vivid story. Find the rung under it.
- You have no falsifier. Name the observation that would end the argument.
- You re-derived something a known practice settles, or the user is using analysis to put off a decision. Say so kindly, give the next step, and stop.
- You kept widening the question. Narrow it to the decision.
- You offered "first principles" as what Hebrews 5:12 teaches. That text is about the doctrine of Christ; the method is an analogy.
- You hid the limit, or left the thinker's state out of the problem.
- Two competent people reached opposite conclusions and you picked one. Find the axiom they do not share.

## Read when

Open all that apply now, together, before you run any command:

- `references/foundations.md`: you ground the method or a test in Scripture.
- `references/epistemic-limits.md`: the question may have no answer from inside the system.
- `references/method.md`: you cannot tell which rung is missing.
