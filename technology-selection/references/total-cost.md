# The Total Cost of Keeping

The maintenance burden of a technology decision, and the costs that teams routinely omit.

No figure in this file is a benchmark. The method measures your own system. A published
percentage from another company measures that company.

## Method and labels

**Text states** / **Lexical** / **Inference** / **Contested**. Verses come from `skills/scripture-foundations/scripts/scripture.ts`.
Strong's definitions come from `skills/scripture-foundations/scripts/lexicon.ts` and are copied verbatim.

Governing axiom: **A17** in `business-first-principles`. A17 states that building and keeping
are equal partners, and that most businesses die of keep failure while congratulating themselves
on dress.

---

## Contents

- [Part 1. Two verbs, one job](#part-1-two-verbs-one-job)
- [Part 2. What the keep contains](#part-2-what-the-keep-contains)
- [Part 3. The keep budget](#part-3-the-keep-budget)
- [Part 4. The omitted cost checklist](#part-4-the-omitted-cost-checklist)
- [Part 5. Symptoms of keep failure](#part-5-symptoms-of-keep-failure)
- [Part 6. Pricing the exit](#part-6-pricing-the-exit)
- [Part 7. The keeper](#part-7-the-keeper)
- [Part 8. Working rules](#part-8-working-rules)
- [Appendix: verification log](#appendix-verification-log)

---

## Part 1. Two verbs, one job

**Text (Genesis 2:15, KJV)**

> And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.

**Lexical:** H5647 _abad_ stands behind "dress". The entry reads "to work (in any sense); by
implication, to serve, till, (causatively) enslave, etc." The gloss list includes "dress",
"keep", "labour", "serve", and "till".

**Lexical:** H8104 _shamar_ stands behind "keep". The entry reads "properly, to hedge about (as
with thorns), i.e. guard; generally, to protect, attend to, etc." The gloss list includes
"keep(-er, self)", "observe", "preserve", "regard", "reserve", and "watch(-man)".

**Text states:** Two verbs are given together as the job. The text does not rank them.

**Text states:** The man is placed in the garden to dress it and to keep it.

**Inference:** the keep is protection of a thing that already exists.

**Inference:** for a system, the dress is the build, the features, and the new work. The keep
is the patching, the support, the monitoring, the backup, the upgrade, and the replacement.

**Inference:** A17 applies to systems directly. Most systems die of keep failure. The wall falls
down while the new wing goes up.

**Inference:** the keep is not junior work. The word behind "keep" is a guarding word, and the
text gives it equal standing with the work of cultivation.

**Text states (2 Chronicles 24:13).** "So the workmen wrought, and the work was perfected by
them, and they set the house of God in his state, and strengthened it." The text names the
strengthening as part of the work.

**Text states (Matthew 7:25).** The house on the rock stands because "it was founded upon a
rock." The test of the foundation arrives as weather, not as a plan.

**Inference:** the keep is tested by events. A backup that has never been restored is a plan,
not a foundation.

---

## Part 2. What the keep contains

**Inference.** The keep is a list of recurring work. Write the list for the actual system,
because the list differs by system. The categories below are the ones that apply most often.

1. **Patches and upgrades.** Operating system, runtime, library, and framework updates. The
   dependency list is the largest recurring surface.
2. **Security response.** The work to read an advisory, assess the exposure, and ship the fix.
   This work arrives on someone else's schedule.
3. **Monitoring and alerting.** The dashboards, the alert rules, and the on-call rotation that
   answers them.
4. **Backups and restores.** The scheduled backup, plus the rehearsal that proves the restore
   works. The rehearsal is the part that gets skipped.
5. **Certificates, domains, and credentials.** The renewal calendar and the rotation procedure.
6. **Capacity and cost management.** The growth in data, traffic, and spend, and the work to
   keep the cost line flat.
7. **Vendor management.** Renewals, negotiations, licence true-ups, and the review of the
   vendor's roadmap changes.
8. **Documentation.** The drift between the written description and the running system, and the
   work to close the drift.
9. **Training.** The new staff who join, and the existing staff who need the new version.
10. **Data hygiene.** The deduplication, the archival, the deletion schedule, and the privacy
    requests.
11. **Compliance evidence.** The audits, the reports, and the access reviews.
12. **End of life.** The replacement project that arrives at the end of every system's life,
    including the ones chosen with a long support window.

**Inference:** items 2, 4, 6, and 12 arrive on a schedule that the team does not choose. This
is A27, which states that friction is structural. The keep must be planned as a standing
capacity, not as a series of surprises.

---

## Part 3. The keep budget

**Inference.** The keep budget has five parts. Build it from the work list, not from a
percentage.

1. **The recurring labour.** List the tasks and their frequency per month. Estimate the hours
   for each. Use the loaded hourly cost of the person who does the work.
2. **The incident load.** The historical incident count and duration for the system, plus the
   growth factor for added users. If there is no history, use the pilot period and state the
   uncertainty.
3. **The vendor and licence line.** The subscription, the support contract, and the usage based
   charges. Add the renewal escalator if the contract states one.
4. **The replacement reserve.** A monthly set-aside for the eventual replacement, sized to the
   expected life of the system. A14 states that completion is a real state, and every system
   reaches it.
5. **The coordination cost.** The meetings, the review, the vendor calls, and the planning that
   the system requires. This line is real and it is invisible.

**Text states (Proverbs 27:23).** "Be thou diligent to know the state of thy flocks, and look
well to thy herds." The count precedes the budget.

**The method.** Ask the person who does the keep work to write the list. The person who does the
work knows the list. The person who approved the purchase usually does not.

**Inference:** compare the keep figure to the build figure. When the keep exceeds the build,
the system is in the keep phase, and A17 says it will die there unless the keep is resourced.

**Contested.** Organisations account for the keep in different ways. Some put it in the
engineering budget, some in operations, and some in the vendor line. The accounting location
does not change the cost, and it can hide the cost.

---

## Part 4. The omitted cost checklist

**Inference.** These are the lines that teams routinely leave out. Each row names the line, the
reason it is omitted, and where to find the real number.

| Cost line                         | Why it is omitted                            | Where to find it                                                                |
| --------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------- |
| Integration labour                | It has no line on the price page             | The engineering estimate, with the unfamiliar system's documentation read first |
| Training time for non-users       | Only the primary team is counted             | Ask every team that touches the output                                          |
| The learning curve loss           | It looks temporary                           | The measured output drop in the first month of a similar change                 |
| Data cleanup                      | It is assumed to be part of the migration    | A sample of the real data, with the error rate measured                         |
| Dual running                      | It is treated as a transition week           | The calendar of both systems, both supported, for the real period               |
| On-call and pager load            | It belongs to the operations budget          | The rotation, with the new system's alert count added                           |
| Dependency upgrades               | The dependencies are invisible               | The dependency list, and the release cadence of each item                       |
| Backup restore drills             | The backup passes, so the restore is assumed | The last successful restore, dated                                              |
| Security patching time            | It arrives as a surprise                     | The advisory volume for the stack, over the last year                           |
| Renewal negotiation               | The first price is treated as the price      | The contract, with the renewal clause read                                      |
| Licence growth                    | The pilot has five users                     | The pricing table at the expected user count                                    |
| The de facto administrator        | One helpful person absorbs the work          | The person who answers the questions, named                                     |
| The staging and test environments | Only production is budgeted                  | The environment list, with its full cost                                        |
| Egress and usage charges          | The base plan looks sufficient               | The metered lines in the contract                                               |
| Documentation drift               | It is nobody's task                          | The difference between the runbook and the last incident                        |
| The exit cost                     | The exit is not planned                      | `Part 6` below                                                                  |
| The rare skill premium            | The current team looks sufficient            | The job market for the tool, and the time to hire                               |
| The free tier upgrade             | Free is treated as permanent                 | The vendor's pricing page, at the limit of the free tier                        |
| The abandoned dependency          | Nobody checks the activity                   | The last release date and the open issue count                                  |
| The opportunity cost              | The team's hours look elastic                | The other projects that stop during the same quarter                            |

**The rule.** A purchase decision without the first six rows is not a cost analysis.

---

## Part 5. Symptoms of keep failure

**Text (Haggai 1:6, KJV)**

> Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are
> not filled with drink; ye clothe you, but there is none warm; and he that earneth wages
> earneth wages to put it into a bag with holes.

**Text states:** The wages are earned and the bag loses them. The loss is at the retaining.

**Text (Proverbs 24:30-34, KJV)**

> 30. I went by the field of the slothful, and by the vineyard of the man void of understanding;
> 31. And, lo, it was all grown over with thorns, and nettles had covered the face thereof, and
>     the stone wall thereof was broken down.
> 32. Then I saw, and considered it well: I looked upon it, and received instruction.
> 33. Yet a little sleep, a little slumber, a little folding of the hands to sleep:
> 34. So shall thy poverty come as one that travelleth; and thy want as an armed man.

**Text states:** Two failures appear together. The field is overgrown, and the wall is broken
down. The growth is the dress failure. The broken wall is the keep failure.

**Text states:** The diagnosis is small and repeated. "Yet a little sleep, a little slumber".

**Text states:** The outcome arrives as a traveller and as an armed man. It comes at a pace and
with force.

**Inference:** the symptoms in this file are the visible signs of the slow period. Name them,
and check for them on a schedule.

The symptoms:

1. The same incident recurs, and each time it is fixed by hand.
2. The patch queue grows faster than it clears.
3. The team is afraid to upgrade, so the versions stay old.
4. Documentation is wrong, and the newest person learns from a colleague instead.
5. The build is celebrated and nobody is assigned to the keep.
6. The backup has not been restored in a year.
7. The expert is one person, and the person is tired.
8. No one can state the annual keep cost, and everyone says the system works.

**Inference:** the last symptom is the most reliable. A system with an unknown keep cost is a
system whose keep is paid in unpaid attention.

---

## Part 6. Pricing the exit

**Inference.** Price the exit before the purchase, per A32. State the exit in hours and in
money, and name the trigger that starts it.

The lines of an exit:

1. **Data export.** The format, the completeness, and the verification that the export matches
   the source.
2. **Contract term.** The remaining months, the notice period, and the early termination terms.
3. **Retraining.** The hours for every user to learn the replacement.
4. **Integration rewrite.** Every connection the system holds, rebuilt.
5. **The parallel run.** Both systems operate during the transition, with double support.
6. **Lost features.** The features that have no equivalent in the replacement, and the work to
   accept the loss or rebuild them.
7. **The migration rehearsal.** The time to prove the move works before the cutover.
8. **The institutional memory.** The configuration, the special cases, and the exceptions that
   live in one person's head.

**The classification, repeated from the skill file.**

| Class      | Exit time                                                  | Treatment                                   |
| ---------- | ---------------------------------------------------------- | ------------------------------------------- |
| Reversible | Days, and the exit cost is small                           | Move fast                                   |
| Costly     | Months, and the exit cost is real                          | Pilot, then decide                          |
| Permanent  | The exit touches the data, the contracts, or the ecosystem | Gate the decision, and delay the commitment |

**Text states (Proverbs 22:28).** "Remove not the ancient landmark, which thy fathers have set."
Some connections are landmarks. An exit plan must identify which ones are boundaries and which
ones are waste.

**Inference:** the exit cost is a design choice. A standard data format, an open protocol, and a
short contract term keep the decision in the reversible class. A proprietary format and a long
term move it toward permanent.

**Inference:** write the exit trigger before the purchase. A person who cannot state the exit
trigger has made a permanent decision without saying so.

---

## Part 7. The keeper

**Inference.** A17 requires a named keeper with calendar time and equal status. Three things
follow.

1. **The name.** One person owns the keep. The person reports the state of the system on a
   schedule, in the same forum where new work is reported.
2. **The calendar.** The keep gets real time. Book the patching window, the restore drill, and
   the dependency review as standing appointments. Work that has no calendar slot does not
   happen.
3. **The status.** The keep is reported and rewarded as real work. A17 states that keeping is
   not junior work. A culture that celebrates only the build will lose the keep.

**Text states (Genesis 2:15).** The keeper is placed in the garden. The placement is an
assignment, not an afterthought.

**Text states (Exodus 35:34).** The gift includes the ability to teach. A keeper who cannot
teach the system leaves a single point of failure behind.

**The practical test.** Ask who the keeper is. Ask when the keeper reports. Ask what the keeper
is measured on. If any answer is missing, the system has no keeper, and A17 says the outcome is
decay.

---

## Part 8. Working rules

**Inference.**

1. Name the keeper before the build, not after the launch.
2. Count the keep cost before the purchase, using the work list rather than a percentage.
3. Budget the replacement reserve from the first month.
4. Book the restore drill, the patch window, and the dependency review on the calendar.
5. Read the renewal clause and the exit terms before signing.
6. Keep the data in a portable format, so the exit stays cheap.
7. Measure the keep annually, and compare it to the original estimate. Write down the
   difference.
8. Report the keep in the same forum as the build.
9. Treat a recurring incident as a keep failure, not as an operations nuisance.
10. Retire systems on purpose. A14 states that completion is a real state, and a system with no
    retirement date has no completion.

**Text states (Isaiah 28:16).** "he that believeth shall not make haste." A foundation that was
tested by restores, drills, and rehearsals removes the hurry. An untested foundation produces
it.

---

## Appendix: verification log

### Verses retrieved with `skills/scripture-foundations/scripts/scripture.ts`

Genesis 2:15; 2 Chronicles 24:13; Matthew 7:24-27; Proverbs 24:30-34; Proverbs 27:23; Haggai
1:5-6; Genesis 41:29-36; Luke 14:28-30; Isaiah 28:16; Exodus 35:30-35; Proverbs 22:28; Proverbs
25:4.

### Lexical claims verified with `skills/scripture-foundations/scripts/lexicon.ts`

| Number | Transliteration | Definition as returned (verbatim)                                                               |
| ------ | --------------- | ----------------------------------------------------------------------------------------------- |
| H5647  | _abad_          | "to work (in any sense); by implication, to serve, till, (causatively) enslave, etc."           |
| H8104  | _shamar_        | "properly, to hedge about (as with thorns), i.e. guard; generally, to protect, attend to, etc." |

### Claims I cannot verify with the supplied tools

1. **The verse to Strong's mappings for Genesis 2:15.** The verse-level association is a
   standard concordance mapping. The definitions are verified, and the placement is not
   verified by these tools. The `scripture-foundations` skill states the same mapping in its
   own table.
2. **Every cost category and every method in Part 3.** No supplied tool verifies a cost. The
   categories come from practice, and the method measures your own system.
3. **The five-part keep budget.** The partition is a synthesis. Other partitions exist, and the
   file marks the accounting debate as **Contested**.
4. **The claim that a system with an unknown keep cost pays it in unpaid attention.** This is
   an inference from the symptoms. It has no measurement behind it.
5. **The exit cost lines.** The list is a synthesis from practice. No text and no tool verifies
   the completeness of the list.
