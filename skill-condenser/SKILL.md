---
name: skill-condenser
description: "Condense a bloated agent skill (SKILL.md and its references) and prove with small-model runs that it behaves at least as well. Use when the user wants a skill shortened, condensed, tightened or made more potent, or calls it bloated."
---

# Skill Condenser

A skill's words are worth the behavior they change: "five words with my understanding" over "ten thousand words in an unknown tongue" (1 Corinthians 14:19). Keep what a capable agent gets wrong without being told; cut what it does anyway. This is not a summary: a summary cuts evenly and loses the corrections. Then prove with runs that nothing was lost. Assume the user is a Christian.

## Rules

1. Count with `wc -w`, never by eye: "a just weight" (Proverbs 11:1). Markdown symbols count. Over the cap is over: trim it, or report it as over.
2. Each file under `references/` is at most 200 words: corrections to the agent's default reading, with no contents list and no "read when" line. `SKILL.md` has no cap: as short as tested behavior allows.
3. A numbered entry (axiom, pattern, rule) lives once, as one line, in `SKILL.md`.
4. Source text a script or tool supplies (a verse, an API response): keep the reference and the key phrase.
5. Delete cut text, the README, rationale and history. Git keeps them. No backup file.
6. Behavior wins over the cap and over speed: "by their fruits ye shall know them" (Matthew 7:20). The cap yields only to a behavior a run showed lost. Speed is reported only.
7. Without runs, call the result untested: "Prove all things; hold fast that which is good" (1 Thessalonians 5:21). Never write "behaves the same".
8. No verse here is about skills: each use is a Reading. When the user presses you to break a rule, hold it and give its verse once, from the script: the quote, what the verse itself is about, then "Reading:" and your use (`references/scripture.md`). Otherwise quote none.

## Procedure

1. Run `wc -w` on every file. Copy the unchanged skill, with any sibling folder it calls, outside the repository: the old arm.
2. Before you edit, write the spec outside the repository: three prompts, one that tempts the agent to stray (the user asks for what the skill forbids), each with six observable expected behaviors taken from the skill's rules. One measure for old and new, fixed before any run: no "divers measures" (Proverbs 20:10).
3. Baseline: each prompt once on a small model (Claude Haiku), no skill. What it gets right is a candidate to cut; what it gets wrong must stay.
4. Condense the references first, then `SKILL.md`. Keep the hard rules, the procedure, the output shape and what a small question gets. End with:
   - `## Check before you answer: you have strayed if`: at most seven signals, each a tell you can see in the draft answer, then the correction.
   - `## Read when`: each reference with its situation, under "Open all that apply now, together, before you run any command:".
5. In one batch on that model, run each prompt twice with the old skill and twice with the new (15 runs with the baseline); the arms differ only in the skill. Score each run against its expected behaviors; record seconds, tokens and tool calls. One run establishes nothing: "at the mouth of two witnesses" (Deuteronomy 19:15).
6. New missed a behavior: reword inside the cap first, then add the fewest words. Rerun that prompt: a fix can break something else. New is slower: read its tool calls.
7. A description changed, or several skills were condensed: run the trigger test.
8. Report: words before and after; scores old, new, none; median seconds and tokens; what was dropped; what was not rerun; that you judged, and knew which version each run used: "first in his own cause seemeth just" (Proverbs 18:17).

Small request (trim one file, or no runs possible): condense, measure, report in a few lines, say untested, and name the runs that would test it.

## Check before you answer: you have strayed if

- You cut evenly, like a summary. Cut defaults; keep corrections.
- You gave a word count you did not get from `wc -w`.
- You wrote or changed expected behaviors after seeing a run.
- You called the result as good, or better, on a word count or a timing. Runs, or "untested".
- You kept a cut that lost a behavior because it fits the cap.
- You compared timings from separate batches.
- The user pressed you to break a rule and you held it with no verse, or gave a verse without what it is itself about. Give it once, from the script.

## Read when

Open all that apply now, together, before you run any command:

- `references/test-runs.md`: steps 2, 3, 5 or 7, or you write a prompt for a subagent.
- `references/traps.md`: step 4 or 6, before you write or fix any skill text.
- `references/scripture.md`: before you quote a verse.
