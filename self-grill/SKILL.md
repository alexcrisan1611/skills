---
name: self-grill
description: Autonomously interrogate a plan, architecture, or request by traversing its decision tree, answering each question with the optimal recommendation, and outputting a complete Decision Ledger with all considered options for user review or override. Use when the user asks to self-grill, auto-grill, resolve ambiguities autonomously, or stress-test a plan without round-trip questioning.
---

# Self-Grill

Autonomously traverse the design decision tree of a plan or request. Formulate every necessary clarifying question, select the optimal recommended answer for each node to unblock dependent branches, and present a structured Decision Ledger at the end so the user can accept or override any choice.

## When to Use

- The user invokes `self-grill`, `auto-grill`, or asks you to grill yourself on a plan, feature, or architecture.
- The user wants a thorough specification or implementation plan without multi-turn Q&A round-trips.
- The user asks you to surface all hidden decisions, trade-offs, and options while committing to your own best recommendations up front.

## Steps

1. **Inspect Context First**: Read the workspace, codebase, or provided artifacts to resolve factual questions directly. Do not formulate questions for facts that exist in the context.
2. **Map the Decision Tree**: Identify all ambiguities, architectural forks, edge cases, and underspecified requirements. Organize them in topological dependency order (root decisions before child branches).
3. **Traverse and Self-Resolve**: Process each decision node sequentially:
   - Formulate a precise **Question** exposing the core design tension.
   - Enumerate mutually exclusive, concrete **Options** with brief trade-offs.
   - Commit to the optimal **Recommended Selection** and state a one-sentence **Rationale**.
   - Use that Recommended Selection as the established premise to unlock and evaluate downstream child decisions.
4. **Synthesize the Target Plan**: Produce the resulting specification, architecture, or actionable plan built upon all selected recommendations.
5. **Output the Decision Ledger**: Present every resolved node in a numbered structure so the user can ratify the defaults or override specific branches by number (for example, "Change D2 to Option B").

## Output Format

Use this exact structure for each node in the Decision Ledger:

```markdown
D1 - [Decision Title] (Parent: Root | D#)

Question: [Precise design question]
Options:
- [Option A]: [Description + key trade-off]
- [Option B]: [Description + key trade-off]
Selected: [Option X] - [Concise rationale]
```

### Resulting Plan

```markdown
[Concise, concrete synthesis or implementation plan governed by the selected decisions above. End with a one-line prompt inviting the user to approve or override specific decision IDs.]
```

## Gotchas

- **Do not ask trivia**: Only log genuine design forks where at least two viable options exist. Skip obvious boilerplate choices.
- **Respect causal dependencies**: Ensure child decisions explicitly reference the parent decision (`Parent: D1`) that made them relevant, so if the user overrides D1, you know which downstream nodes to recompute.
- **No hedging**: Commit decisively to one recommendation per node so the resulting plan is cohesive and immediately executable.
