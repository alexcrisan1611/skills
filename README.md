# Skills

This repository contains ten agent skills for business, reasoning, architecture, and Scripture-based work. A skill is a folder of instructions that an AI agent, such as Claude Code, loads when a task matches it.

Most of the biblical reasoning skills reason from Scripture. The `scripture-foundations` skill supplies the King James Version (KJV) text and the method that those skills use.

## The skills

| Skill | What it does |
|---|---|
| [ancient-secret-wealth-principle](ancient-secret-wealth-principle/) | Finds where your work sits on the Four Levels of Value of Myron Golden and moves your offer toward work with more reach. |
| [body-first-principles](body-first-principles/) | Uses the healthy human body as a model for questions about organizations and systems, with Scripture as the final authority. |
| [business-first-principles](business-first-principles/) | Reasons about business decisions from 34 axioms that come from Genesis 1-3. Other skills depend on it. |
| [business-idea-generation](business-idea-generation/) | Finds business opportunities, tests them, and turns them into a decision. |
| [first-principles-reasoning](first-principles-reasoning/) | Reasons from the ground up and finds the hidden assumption under a belief. |
| [problem-solving-first-principles](problem-solving-first-principles/) | Diagnoses a failure, a recurring problem, or a crisis before anyone assigns blame. |
| [renewing-the-mind](renewing-the-mind/) | Finds a false pattern of thought, tests it, and replaces it with a pattern built on biblical first principles. |
| [scripture-foundations](scripture-foundations/) | Gives the agent a local, searchable KJV, a map of the foundation chapters, and a method to derive principles from the text. |
| [self-grill](self-grill/) | Autonomously interrogates a plan, architecture, or request by traversing its decision tree, answering each question, and presenting a Decision Ledger. |
| [technology-selection](technology-selection/) | Helps you decide whether to buy, build, borrow, or wait on a technology, and prices the full cost first. |

Each folder has a `SKILL.md` file for the agent and a `README.md` file for people. Read the `README.md` of a skill for its triggers, steps, example prompts, and limits.

## Install

To install with the `skills` command line tool, run:

```bash
npx skills add alexcrisan1611/skills
```

To install by hand, copy each skill folder into `~/.claude/skills/`.

## Data for the Scripture scripts

The KJV text and the Strong's dictionary are not in this repository. The scripts in `scripture-foundations` look for them in `~/bible-kjv` and `~/strongs` by default. Download both data sets before you use the scripts. The [scripture-foundations README](scripture-foundations/README.md) gives the file format and the other locations that the scripts search.
