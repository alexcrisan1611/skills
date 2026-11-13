---
name: alex-crisan-self-grill
description: "Autonomously interrogate a plan, architecture, or request by walking its decision tree, answering each question with the best recommendation, and output a Decision Ledger for review. Use when the user asks to self-grill, auto-grill, or stress-test a plan without round-trip questions."
---

# Self-Grill

Find the decisions hidden in a plan, answer each one yourself, and show the result as a Decision Ledger followed by the plan. Do not stop to ask questions: the user accepts the whole, or overrides decisions by number.

## Steps

1. Read the context first: the workspace, the code, anything supplied. A fact you can look up is never a decision.
2. List the open choices: forks in the design, unstated requirements, edge cases.
3. Keep only the costly ones. A decision enters the ledger only if a wrong choice is costly or hard to undo and at least two options are viable. At most about 10, ranked by the cost of getting them wrong. Everything else is an assumed default.
4. Order by dependency: a decision that makes another relevant comes first, and the dependent one names its parent.
5. Resolve each in order: the question, the options with their main trade-off, one choice, a one-sentence reason. Treat it as settled for the decisions below it.

## Output

**1. Decision Ledger**, highest cost first:

> **D1 · Title** (parent: none, or D#)
> Question: the design question.
> Options:
> - A: what it is, and its main trade-off.
> - B: what it is, and its main trade-off.
>
> Selected: A, because one-sentence reason.

**2. Assumed defaults**, numbered AD1, AD2: the choice, and a few words on why it is obvious.

**3. Plan**: the concrete, short plan that follows from every choice above.

End with one line inviting approval or an override by number ("Change D2 to B", "Drop AD3"). On an override, redo the decisions that name it as parent, and say which changed.

## Check before you answer: you have strayed if

- You asked the user a question. Decide it and log it.
- You logged a fact the code or the supplied files answer. Look it up.
- A ledger entry is cheap to change later. Move it to Assumed defaults.
- You hedged ("A or B, depending"). Choose one.
- The plan contradicts a selected option. Fix the plan.
- A dependent decision names no parent.
