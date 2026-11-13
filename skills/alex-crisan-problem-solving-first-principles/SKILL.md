---
name: alex-crisan-problem-solving-first-principles
description: "Root-cause diagnosis of recurring organizational or process failures (post-mortems, retros, crisis triage) using the Genesis 3 where/source/act method. Not for debugging code; use mattpocock-skills:diagnosing-bugs."
---

# Problem Solving First Principles

Diagnosis: where a failure is, what fed it, and what act carried it, in that order. Not for code bugs (`mattpocock-skills:diagnosing-bugs`), and not for deciding what to do once the cause is known (`alex-crisan-first-principles-reasoning`).

## Rules

1. Judgment comes after diagnosis. A verdict first is wrong, and it teaches people to hide.
2. Record both the act and the system that permitted it. God holds each person to account for their own act (Genesis 3:14, 17); Adam points at the system (3:12). Let neither hide the other. Not every failure is someone's sin (John 9:2-3).
3. End in a test. A cause nobody can falsify is a story.
4. Aim at restoration (Galatians 6:1).

## Procedure

You do not question the people involved. Ask the user what they know, one question at a time, and give them the questions to put to others: location before source, source before act.

1. Stabilize. If harm is active, stop it first (`references/crisis.md`).
2. Symptom: one sentence, one measure, one date. Rank several by cost.
3. Location: the earliest point where the output is wrong, not where the failure became visible. "Where art thou?" (Genesis 3:9).
4. Source: what fed that point, and who chose. "Who told thee?" (3:11). No answer is also a result.
5. Act: what was done, and what rule permitted it (3:11, 13). An evasive answer is data, not the finding.
6. Classify, because the class picks the fix: cycle or event; structural cost or removable defect; decay or break (`references/cases-and-tests.md`).
7. Test: name, before you write the fix, the future event that will load it and what survival looks like. Measure the failure, not activity.
8. Owner, date, warning sign.

A failure that returns: rerun step 6. The class was probably wrong.

Output: symptom; location; source and act; class; fix with owner, date and test; what is not known. Label each claim Scripture says, Word meaning, Reading, Disputed or Guess. Quote only what the script printed, in one command for all verses: `bun run <skill-dir>/../alex-crisan-scripture-foundations/scripts/scripture.ts lookup "Gen 3:9-13"`. A minor slip gets a few lines: open no reference and cite no verse.

## Check before you answer: you have strayed if

- You named a person or a character flaw as the cause. Name the act and the rule that permitted it.
- You excused the act by the system, or the system by the act. Record both.
- You gave a cause from one account. Ask for the other side, and for a record nobody wrote to defend themselves (Proverbs 18:17).
- You located the failure where it became visible. Walk back to the first wrong output.
- You proposed a fix with no test, or a test that counts activity.
- You diagnosed while harm was still active. Stabilize first.
- You wrote the questions as if you would interview the staff. Hand them to the user.

## Read when

Open all that apply now, together, before you run any command:

- `references/diagnosis.md`: you need the questions to put to people, or the traps at each step.
- `references/cases-and-tests.md`: step 6 or 7, or you cite a Scripture case.
- `references/crisis.md`: harm is active, or a warning was ignored.
- `references/interrogation.md`: you rely on the order of the questions in Genesis 3.
