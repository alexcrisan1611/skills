# Self-Grill

Finds the costly decisions hidden in a plan, architecture, or request, answers each one with a recommendation, and shows them as a Decision Ledger that you can accept or override.

## What it does

When a plan is ambiguous or underspecified, an agent usually either stops again and again to ask, or makes choices you never see.

The `self-grill` skill does neither:
1. It finds the hidden decisions in the plan.
2. It keeps the ones where a wrong choice is costly or hard to undo, at most about 10, ranked by cost. Cheap choices go in a short list of assumed defaults.
3. It orders the decisions so that each one comes after the decision that made it relevant.
4. It commits to one option for each decision, with a one-sentence reason.
5. It shows a numbered **Decision Ledger**, then the **Assumed defaults**, then the resulting **Plan**. You can accept it all or override single items, for example "Change D2 to B" or "Drop AD3".

## When to use it

Use this skill when:
- You ask to "self-grill", "auto-grill", or grill yourself on a plan, feature, or architecture.
- You want a full plan without rounds of questions and answers.
- You want the hidden trade-offs and decisions shown up front.

## Output structure

Each ledger entry has a number (`D1`, `D2`), its parent decision, the question, the options with their main trade-off, and the selected option with a reason. The assumed defaults are one line each (`AD1`, `AD2`). The plan comes last, followed by an invitation to approve or override by number.

## What is in this folder

- `SKILL.md`: The complete agent instructions and execution rules.
- `README.md`: This file.

## Example prompts

- "Self-grill this authentication architecture before implementation."
- "Auto-grill our migration plan to PostgreSQL."
- "Stress-test this feature proposal and give me a decision ledger."
