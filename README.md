<p align="center"><img src="icon/icon.svg" alt="A stone wall built on its cornerstone" width="128"></p>

# Skills

This repository contains nine agent skills for business, reasoning, architecture, and Scripture-based work. A skill is a folder of instructions that an AI agent, such as Claude Code, loads when a task matches it.

Most of the biblical reasoning skills reason from Scripture. The `scripture-foundations` skill supplies the King James Version (KJV) text and the method that those skills use.

## The skills

| Skill | What it does |
|---|---|
| [ancient-secret-wealth-principle](ancient-secret-wealth-principle/) | Finds where an offer or a career sits on the Four Levels of Value of Myron Golden and moves it toward work with more reach. Use it when you name the Four Levels, trade time for money, or resist selling. |
| [business-first-principles](business-first-principles/) | Reasons about foundational business decisions from 34 axioms that come from Genesis 1-3 (cited as A1 to A34). It includes the body layer (B1 to B24). Other skills depend on it. |
| [business-idea-generation](business-idea-generation/) | Finds business opportunities and tests them with a seven-step procedure, from the change to the test. |
| [first-principles-reasoning](first-principles-reasoning/) | Derives an answer from what is given, not from convention, and tests the assumption that carries the load. Use it for a hard-to-reverse decision or a best practice that failed. |
| [problem-solving-first-principles](problem-solving-first-principles/) | Finds the root cause of a recurring failure in an organization or a process before anyone assigns blame. It is not for debugging code. |
| [renewing-the-mind](renewing-the-mind/) | Takes apart a belief or a habit of thought, tests it against Scripture, and replaces it. It is not medical or mental-health advice. |
| [scripture-foundations](scripture-foundations/) | Gives the agent a local, searchable KJV and scripts to look up and verify verses, and a method to derive principles from the text. |
| [self-grill](self-grill/) | Autonomously interrogates a plan, architecture, or request by traversing its decision tree, answering each question, and presenting a Decision Ledger. |
| [simplifier-multiplier](simplifier-multiplier/) | Turns the work of a simplifier into a multiplier (people, AI agents, an app, social media) on the pattern of Exodus 18:13-26: the written way, able multipliers, and a threshold for the great matters. |

Each skill folder has a `SKILL.md` file for the agent and a `README.md` file for people. The `icon` and `assets` folders hold the repository's icon and are not skills. Read the `README.md` of a skill for its triggers, steps, example prompts, and limits.

## Install

To install with the `skills` command line tool, run:

```bash
npx skills add alexcrisan1611/skills
```

To install by hand, copy each skill folder into `~/.claude/skills/`.

## Data for the Scripture scripts

The KJV text and the Strong's dictionary are not in this repository. The scripts in `scripture-foundations` look for them in `~/bible-kjv` and `~/strongs` by default. Download both data sets before you use the scripts. The [scripture-foundations README](scripture-foundations/README.md) gives the file format and the other locations that the scripts search.
