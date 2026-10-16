# Self-Grill

Autonomously interrogate a plan, architecture, or request by traversing its decision tree, answering each question with the optimal recommendation, and outputting a complete Decision Ledger with all considered options for user review or override.

## What it does

When tackling an ambiguous plan, complex architecture, or underspecified task, standard workflows either halt repeatedly for user clarification or make hidden assumptions.

The `self-grill` skill autonomously interrogates the plan:
1. Surfaces all hidden assumptions, forks, and ambiguities.
2. Organizes them into a causal decision tree.
3. Decisively chooses the best recommendation for each decision point to unblock subsequent choices.
4. Outputs a structured, numbered **Decision Ledger** alongside the resulting plan, allowing the user to review, ratify, or selectively override any decision branch (e.g., "Change D2 to Option B").

## When to use it

Use this skill when:
- You ask to "self-grill", "auto-grill", or grill yourself on a plan, feature, or architecture.
- You want a thorough specification or implementation plan without multi-turn Q&A round-trips.
- You want all hidden trade-offs, options, and decisions exposed clearly up front.

## How it works

1. **Inspect Context First**: Check the workspace, codebase, and existing artifacts to resolve factual questions directly without asking.
2. **Map Decision Tree**: Identify all ambiguities and organize them in topological dependency order (parents before children).
3. **Traverse and Self-Resolve**:
   - Pose a core design question.
   - List viable, mutually exclusive options with trade-offs.
   - Select the recommended option with a clear rationale.
   - Use that choice to unlock downstream child decisions.
4. **Synthesize Target Plan**: Build an actionable plan based on all selected options.
5. **Output Decision Ledger**: Present each decision node with its ID (`D1`, `D2`, etc.) and parent relationship.

## Output structure

Each decision in the Decision Ledger uses this format:

```markdown
D1 - [Decision Title] (Parent: Root | D#)

Question: [Precise design question]
Options:
- [Option A]: [Description + key trade-off]
- [Option B]: [Description + key trade-off]
Selected: [Option X] - [Concise rationale]
```

Followed by the **Resulting Plan** and an invitation to approve or override specific decision IDs.

## What is in this folder

- `SKILL.md`: The complete agent instructions and execution rules.
- `README.md`: This file.

## Example prompts

- "Self-grill this authentication architecture before implementation."
- "Auto-grill our migration plan to PostgreSQL."
- "Stress-test this feature proposal and give me a decision ledger."
