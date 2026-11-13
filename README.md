<p align="center"><img src="icon/icon.svg" alt="A stone wall built on its cornerstone" width="128"></p>

# Skills

Agent skills for reasoning from Scripture about business, decisions and habits of thought. A skill is a folder of instructions that an AI agent, such as Claude Code, loads when a task matches it. Each folder in `skills/` holds a `SKILL.md`.

## Install

```bash
npx skills add alexcrisan1611/skills
```

To install by hand, copy each folder in `skills/` into `~/.claude/skills/`.

## Data for the Scripture scripts

The King James Version (KJV) text and the Strong's dictionary are not in this repository. The scripts in `skills/alex-crisan-scripture-foundations` run on [Bun](https://bun.sh) and look for them in `~/bible-kjv` and `~/strongs` by default. Download both before you use the scripts. The file `skills/alex-crisan-scripture-foundations/scripts/lib/paths.ts` lists the other places the scripts search.
