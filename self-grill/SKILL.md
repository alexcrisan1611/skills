---
name: self-grill
description: "Autonomously interrogate a plan, architecture, or request by walking its decision tree, answering each question with the best recommendation, and output a Decision Ledger for review. Use when the user asks to self-grill, auto-grill, or stress-test a plan without round-trip questions."
---

# Self-Grill

Find the decisions hidden in a plan, answer each one yourself with your best recommendation,
and show the result as a Decision Ledger followed by the plan. The user can then accept the
whole thing or override single decisions by number. Do not stop to ask questions.

## When to use it

- The user says `self-grill` or `auto-grill`, or asks you to grill yourself on a plan, a
  feature, or an architecture.
- The user wants a full plan without rounds of questions and answers.
- The user wants every hidden decision and trade-off shown, with your choice for each.

## Steps

1. **Read the context first.** Read the workspace, the code, and anything the user supplied.
   Answer factual questions from it. Never log a decision for a fact you can look up.
2. **List the candidate decisions.** Find the open choices: forks in the design, unstated
   requirements, edge cases.
3. **Keep only the costly ones.** A decision goes in the ledger only if a wrong choice is
   costly or hard to undo, and at least two options are viable. Keep at most about 10, ranked
   by the cost of getting them wrong. Every other choice goes in the Assumed defaults list,
   one line each.
4. **Order them by dependency.** A decision that makes another one relevant comes first. The
   dependent decision names its parent.
5. **Resolve each decision in order.** State the question, the options with their main
   trade-off, your choice, and a one-sentence reason. Treat each choice as settled when you
   resolve the decisions that depend on it.
6. **Write the output:** the Decision Ledger, then Assumed defaults, then the plan.

## Output format

Give the output in this order.

**1. Decision Ledger.** One entry per decision, highest cost first, in this shape:

> **D1 · Decision title** (parent: none, or D#)
> Question: the design question.
> Options:
> - A: what it is, and its main trade-off.
> - B: what it is, and its main trade-off.
>
> Selected: A, because one-sentence reason.

**2. Assumed defaults.** One line each, numbered `AD1`, `AD2`, and so on: the choice, and a
few words on why it is the obvious default.

**3. Plan.** The specification, architecture, or step-by-step plan that follows from every
choice above. Keep it concrete and short.

End with one line that invites the user to approve, or to override by number, for example
"Change D2 to B" or "Drop AD3".

## Rules

- **Commit.** Choose one option per decision. No hedging, so the plan holds together and can
  be carried out at once.
- **Track parents.** Every dependent decision names its parent, so that if the user overrides
  D1, you know which decisions to redo. Redo them, and say which ones changed.
- **No trivia.** If a choice is cheap to change later, it belongs in Assumed defaults, not in
  the ledger.
