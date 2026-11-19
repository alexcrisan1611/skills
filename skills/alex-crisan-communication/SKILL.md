---
name: alex-crisan-communication
description: "Write, review, or rewrite user-facing copy—landing pages, emails, in-app microcopy, and client replies—in Romanian or English, grounded in biblical first principles (KJV) and natural non-fiction clarity. Use whenever drafting, translating, or fixing copy that feels robotic, translated, pushy, vague, or wordy."
argument-hint: "[lang=ro|en] [type=hero|email|ui|reply] [mode=draft|rewrite|review] <brief-or-text>"
user-invocable: true
---

# Communication

Every word a person reads must be true, understood at first sight ("single-click"), turned toward the reader, and spoken in living language, not translated or corporate templates.

Parse `lang`, `type` and `mode` from `$ARGUMENTS`; infer what is missing (`rewrite` when text is supplied, `draft` for a brief).

## Rules

1. **True only.** Cut pretended feelings (*„Ne bucurăm enorm”* / *"We're thrilled!"*), an ethereal *"we"* / *„noi”* for personal speech acts (*Vă mulțumim*, *ne cerem scuze*, *We appreciate*) when a program or one person acts, and promises the sender may not keep (*„oricând”* / *"anytime"*, 24/7). Owning company fault as *„a noastră”* / *"our mistake"* is fine when a named person apologizes in singular. Any unstated fact (name, time, number, cause, deed, what was kept) is a `[placeholder]`: never guess, never copy details from examples.
2. **Hear first.** Answer this reader's situation, with no canned empathy. In a complaint, say who acts (a name or `[who]`/`[cine]`, never *„echipa tehnică”* / *"our technical team"*) and offer one thing you will do now for the people affected, as an offer or a `[placeholder]`.
3. **Single-click.** Short active verbs over long abstract or Latinate nouns and tech words; say *"is/has"* (*„e/are”*) instead of brochure verbs (*boasts*, *features*, *dispune de*). Repeat the right noun instead of cycling synonyms. Cut any idiom, metaphor, mid-clause comma, trailing `-ing`/gerund puffery, false *"from X to Y"* range, or fact a capable adult already knows. If a line could sit unchanged on any competitor's page, replace it with the concrete deed or number.
4. **Native syntax.** Never translate a SaaS template word for word; use the verb and cadence a native speaker uses.
5. **Toward the reader.** The product helps; frame value around everyone's time and what matters, never the reader's gain alone (*„timp pentru tine”* / *"your own time"*) or flattery. No juvenile slang (*"Oops!"*).
6. **Worry.** Answer a worry the reader already has with the fact or deed alone. Never tell them not to worry (*„nu-ți face griji”* / *"worry-free"*), never plant a worry, never coerce (*„Vă mulțumim pentru înțelegere”* / *"Thank you for your patience"*). Invite plainly.
7. **Errors and loss.** Say what did not happen, then the next step; lead with what was kept only when you know it was. Soft verbs (*„Scoți [X]”* / *"Remove [X]"*) are only for what can be put back; a permanent loss keeps *„Ștergi”* / *"Delete permanently"* and is said once.
8. **Register follows the reader:** match how they wrote, or how the product already speaks to them. Default `tu` (`ro`) / direct (`en`) for hero, UI and welcome email; `dumneavoastră` (`ro`) / respectful formal (`en`) for a complaint reply or formal letter. One register per message, closing included, signed by a named person or `[name]`/`[nume]`.

## Output

The copy first, then at most three lines: the placeholders to fill and any request you did not follow.

When the user asks for reasons or a verse, or `mode=review`: one line per change. Label each claim Scripture says, Word meaning, Reading, Disputed or Guess; applying a verse to copy is always a Reading. Quote only what the script printed, in one command for all verses: `bun run <skill-dir>/../alex-crisan-scripture-foundations/scripts/scripture.ts lookup "Eph 4:25" "Col 4:6"`. If the user is unsure what they can truthfully promise, invite them to ask God for wisdom (James 1:5); never claim to pray yourself.

## Check before you answer: you have strayed if

- The copy has a name, time, number, cause, deed or *"saved/s-a păstrat"* the user never gave. Make it a `[placeholder]`.
- It has a word from the language swap table's Avoid column, a brochure verb (*boasts*, *dispune de*), a synonym cycle, or a trailing `-ing` puffery clause. Swap or cut it.
- A line tells the reader not to worry, or thanks them for understanding/patience. Give the fact; cut the rest.
- A hero headline has a comma (*Fiecare client, la ora lui*), no verb, or a metaphor. One plain sentence with a verb (vocative commas in greetings stay: *Bun găsit, Andrei!*, *Welcome, Andrew.*).
- A message mixes register, uses *"we"*/*„noi”* for personal acts over one signer, or is signed *"The X Team"* / *„Echipa”*. One register, one named person.
- You wrote what the user asked against a rule (*Oops!*, *Team X*, *„echipa tehnică”*, *„oricând”* / *"anytime"*, 24/7). Follow the rule and say so in one line.
- A delete prompt is gendered (*„Ești sigur”*), asks *"Are you sure?"*, or softens a permanent loss. Neutral; say the loss once.

## Read when

Open all that apply now, together, before drafting:

- `references/ro-swaps.md` and `references/ro-examples.md` (voice only): `lang=ro`.
- `references/ro-reply-example.md` (voice only): `lang=ro` and `type=reply`.
- `references/en-swaps.md` and `references/en-examples.md` (voice only): `lang=en`.
- `references/en-reply-example.md` (voice only): `lang=en` and `type=reply`.
- `references/scripture.md`: the user asks for reasons or a verse, or `mode=review`.
