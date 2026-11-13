# The way: the path and the task

Exodus 18:20 names three parts of the way: the rules ("ordinances and laws"), the path ("the way wherein they must walk") and the task ("the work that they must do"). For an idea that becomes a product, the rules are the idea gate (`idea-gate.md`). This file holds the path and the task. Quote the verse from the lookup script when you use it.

## Contents

- The path: from first thought to approved
- The idea file
- The task: what a spec must hold
- The done ladder

## The path: from first thought to approved

1. Capture. The idea is caught where it arrives, in one action that costs the owner almost nothing: a phone message or voice note away from the desk, or a line in a conversation with an agent at the desk. Ideas that live only in someone's head cannot be screened.
2. File. An agent writes the idea file (below). An idea for an existing project goes in that project's `.tasks/ideas/`. An idea for a new product goes in the `.tasks/ideas/` of the repository that oversees all the projects.
3. Screen. The agent runs the idea gate: it researches the criteria an agent can check and drafts the ones the owner confirms, and it writes the results into the idea file.
4. Rule. The agent asks the owner the questions only they can answer, one at a time, through whatever channel notifies them. The owner rules pass, refine or no.
5. Hand over. A pass becomes a spec (below): tasks in the project's `.tasks/`, or the first plan of a new repository. A no moves to `.tasks/trash/` with the date and one line on why. Keep it: "Gather up the fragments that remain, that nothing be lost" (John 6:12). Every no is evidence for sharpening the gate.

## The idea file

`.tasks/ideas/<kebab-case-slug>.md`. The folder must be named `ideas`, plural.

```md
---
name: <a short title>
captured: YYYY-MM-DD
from: <where it arrived: a phone note, a thread, a person's name>
for: <the repository it belongs to, or "new product">
gate: open | refine
---
# <title>

<The idea in the owner's own words, as captured. Do not polish it.>

## Gate

| # | Criterion | Result | Evidence |
|---|---|---|---|
| 1 | First-hand need | owner rules | |
| 2 | Purpose beyond the market | drafted, owner confirms | |
| 3 | Existing tools fail | | |
| 4 | Seen whole | owner rules | |
| 5 | Lasting | drafted, owner confirms | |
| 6 | Not a feature in waiting | | |

## Open questions

<One line each. What would close each open criterion.>
```

`gate: open` means not yet screened or ruled. `gate: refine` means at least one criterion is open, with the questions listed. A pass leaves this folder as a spec, and a no leaves it for `trash/`, so the folder only ever holds ideas that are still waiting.

## The task: what a spec must hold

A spec is "the work that they must do." Its test is Habakkuk 2:2: the builder runs with it and does not come back to ask. When builders keep coming back with the same kind of question, the spec is missing a section. Add it here.

```md
## Problem
Who has it, first-hand, and what it costs them now. Carried over from the gate.

## Core flow
The one path that must work immediately, step by step, from opening the product to the result.

## Out of scope
What not to build, stated in advance (A6, A20).

## Feel
How this product should move: two or three words (for example calm, unhurried, reverent; or quick, crisp, light) and the two or three interactions that must feel right in the hand. The motion skills give the craft. This section gives the intent.

## Voice
How this product speaks: three words for its tone, three sample lines (a button, an empty state, an error), and words to avoid. The writing skills give the craft. This section gives the intent.

## Done
The done ladder below, with the specific flow each layer checks.
```

The core flow and the scope are usually the simplifier's strength. Feel and voice are usually missing, because the simplifier judges them by sight once the product exists. Write them down before the build, even roughly. A rough intent can be corrected. A missing one gets guessed.

## The done ladder

Done is four layers, checked in order. Each catches what the layer before it cannot, the way the cell's copying is checked in layers (`nature.md`).

| Layer | The check | What it proves | Who |
|---|---|---|---|
| 1 | Checks are green: tests, lint, the stack and UI reviews | Perfectly: no error the tools can find | The multiplier (a small matter) |
| 2 | The demonstration passes: a before-and-after or walkthrough shows it working at once, with nothing to explain | Immediately | The multiplier (a small matter) |
| 3 | The owner uses it on their own device and it feels and sounds right | The feel and the voice | The owner (a great matter, until the record moves it, Luke 16:10) |
| 4 | Someone else uses it without help | Completely: it compels by working | A real user |

The standard behind the ladder: "they did all eat, and were filled" (Mark 6:42). Layer 4 is the only proof that the product compels by itself. Do not multiply its reach (social media, built-in sharing) until layer 4 has passed.
