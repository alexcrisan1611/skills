---
name: alex-crisan-communication
description: "Write, review, or rewrite user-facing copy—landing pages, emails, in-app microcopy, and client replies—grounded in biblical first principles (KJV) and natural non-fiction clarity. Supports language and context parameters (Romanian calibrated; plain-English fallback). Use whenever drafting, translating, or fixing copy that feels robotic, translated, pushy, vague, or wordy."
argument-hint: "[lang=ro|en] [type=hero|email|ui|reply] [mode=draft|rewrite|review] <brief-or-text>"
user-invocable: true
---

# Communication

Every word a person reads must be true, understood at first sight ("single-click"), turned toward the reader, and spoken in living language, not translated templates.

Parse `lang`, `type` and `mode` from `$ARGUMENTS`; infer what is missing (`rewrite` when text is supplied, `draft` for a brief). For `lang=en`, apply Rules 1–8 in plain English and skip Romanian references until an English swap table is added.

## Rules

1. **True only.** Cut pretended feelings (*„Ne bucurăm enorm”*), an ethereal *„noi”* for personal speech acts (*„Vă mulțumim”*, *„ne cerem scuze”*, *„Te rugăm”*) when a program or one person acts, and promises the sender may not keep (*„oricând”*, 24/7). Owning company fault as *„a noastră”* is fine when a named person apologizes in singular (`eu`). Any unstated fact (name, time, number, cause, deed, what was kept) is a `[placeholder]`: never guess, never copy details from examples.
2. **Hear first.** Answer this reader's situation, with no canned empathy. In a complaint, offer immediate personal help you can name and say who acts: a name or `[cine]`, never *„echipa tehnică”*.
3. **Single-click.** Short active verbs over long abstract nouns and tech words. Cut any idiom, metaphor, mid-clause comma or filler that makes a native reader pause, and anything a capable adult already knows.
4. **No calques.** Never translate a SaaS template word for word; use the verb a native would say.
5. **Toward the reader.** The product helps; frame value around everyone's time and what matters (*„timpul fiecăruia”*), never the reader's gain alone (*„timp pentru tine”*) or flattery. No juvenile slang (*„Oops!”*).
6. **Worry.** Answer a worry the reader already has with the fact or deed alone. Never tell them not to worry (*„nu-ți face griji”*), never plant a worry, never coerce (*„Vă mulțumim pentru înțelegere”*). Invite plainly.
7. **Errors and loss.** Say what did not happen, then the next step; lead with what was kept only when you know it was. *„Scoți [X]”* is only for what can be put back; a permanent loss keeps *„Ștergi”* and is said once.
8. **Register follows the reader:** the form they used, or the one the product already uses with them. Default `tu` (`ro`) / direct (`en`) for hero, UI and welcome email; `dumneavoastră` (`ro`) / respectful formal (`en`) for a complaint reply or formal letter. One register per message, closing included, signed by a named person or `[nume]`.

## Output

The copy first, then at most three lines: the placeholders to fill and any request you did not follow.

When the user asks for reasons or a verse, or `mode=review`: one line per change. Label each claim Scripture says, Word meaning, Reading, Disputed or Guess; applying a verse to copy is always a Reading. Quote only what the script printed, in one command for all verses: `bun run <skill-dir>/../alex-crisan-scripture-foundations/scripts/scripture.ts lookup "Eph 4:25" "Col 4:6"`. If the user is unsure what they can truthfully promise, invite them to ask God for wisdom (James 1:5); never claim to pray yourself.

## Check before you answer: you have strayed if

- The copy has a name, time, number, cause, deed or *„s-a păstrat”* the user never gave. Make it a `[placeholder]`.
- It has a word from the swap table's Avoid column, a long noun or a tech word. Swap in the spoken verb.
- A line tells the reader not to worry, or thanks them for understanding. Give the fact; cut the rest.
- A hero headline has a comma (*Fiecare client, la ora lui*), no verb, or a metaphor. One plain sentence with a verb (vocative commas in greetings stay: *Bun găsit, Andrei!*).
- A message mixes `tu` and `dumneavoastră`, uses *„noi”* for personal acts (*Vă mulțumim*, *ne cerem scuze*) over one signer, or is signed *„Echipa”*. One register, one named person.
- You wrote what the user asked against a rule (*Oops!*, *Echipa X*, *echipa tehnică*, *oricând*, 24/7). Follow the rule and say so in one line.
- A delete prompt says *„Ești sigur”* or softens a permanent loss. Neutral; say the loss once.

## Read when

Open all that apply now, together, before drafting:

- `references/romanian-calques-and-swaps.md` and `references/examples.md` (voice only): `lang=ro`.
- `references/reply-example.md` (voice only): `lang=ro` and `type=reply`.
- `references/scripture-principles.md`: the user asks for reasons or a verse, or `mode=review`.
