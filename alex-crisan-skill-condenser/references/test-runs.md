# Test runs: three arms, one batch

Small model: it follows the text literally, so a lost behavior shows there first.

Per prompt, start in parallel: old twice, new twice, no skill once. Two runs tell a real loss from a one-off miss.

Skill arm:
> Read the skill at `<path>/SKILL.md` and follow it, including the references it tells you to open. Do not explore any other part of the file system. Then answer this user message: "<prompt>"

No-skill arm:
> Answer from the message alone: do not use the Skill tool, do not read or search any file, and do not run any command. "<prompt>"

Without them a no-skill agent searched the user's other projects.

Score each expected behavior 1, 0.5 or 0: a version scores out of 36, the baseline out of 18. Compare median seconds, tokens and tool calls. About 50,000 tokens a run is fixed overhead.

Trigger test: list every description. Per skill: three prompts that should fire it, three near misses. One prompt a run: "Which one skill would you load for this message, or none?" Change a description only when a prompt is routed wrongly.

Commit no spec, prompt or result.
