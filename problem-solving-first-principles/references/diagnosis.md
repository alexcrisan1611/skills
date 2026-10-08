# The Diagnosis Procedure, Worked

Reference file for the `problem-solving-first-principles` skill.

This file runs the eight-step procedure on one recurring organizational failure. The case is
constructed. The verses and definitions come from
`../scripture-foundations/scripts/scripture.ts` and
`../scripture-foundations/scripts/lexicon.ts`.

The labels are Text states, Lexical, Inference, Contested, and Illustration. Illustration marks
constructed case data.

---

## Contents

- [The case](#the-case)
- [Step 1. Stabilize](#step-1-stabilize)
- [Step 2. State the symptom](#step-2-state-the-symptom)
- [Step 3. Locate the failure](#step-3-locate-the-failure)
- [Step 4. Trace the source](#step-4-trace-the-source)
- [Step 5. Establish the act](#step-5-establish-the-act)
- [Step 6. Classify the finding](#step-6-classify-the-finding)
- [Step 7. Name the test](#step-7-name-the-test)
- [Step 8. Assign the owner, the date, and the warning sign](#step-8-assign-the-owner-the-date-and-the-warning-sign)
- [What shows the diagnosis is wrong](#what-shows-the-diagnosis-is-wrong)
- [Traps in the procedure](#traps-in-the-procedure)
- [The question bank](#the-question-bank)

---

## The case

Illustration: A software firm of 120 people sells a product with many integrations to
enterprise buyers. The same failure returns every quarter.

The delivery lead states the complaint in these words: "Sales promises a date in the final two
weeks of the quarter, and we find out about the custom requirements after the contract is
signed. Then we miss the date, and the customer blames us."

Illustration: The complaint came up in four quarters, with four different enterprise accounts.
One pattern connects them, and nobody wrote it down.

---

## Step 1. Stabilize

The question: Is harm active now?

The work: Stop the harm before the interviews. Illustration: In this case, each open account
gets a named owner and a direct conversation. The delivery team stops accepting new work above
its stated capacity. This stays in place until the team reviews the current commitments again.

Why the order matters: Inference: During active harm, people protect themselves when they give
their account. The evidence also disappears fast. The related axiom is B10 in
`body-first-principles`, "Acute inflammation heals. Chronic inflammation destroys." Its
principle is that urgency must be time boxed. A crisis that never ends becomes the normal
operating condition.

The trap: The team diagnoses and does not stabilize. The interviewer gets a clear picture of a
situation that continues to get worse.

---

## Step 2. State the symptom

The question: What happened, with a measure and a date?

The rule: Write one sentence with one measure and one date. Rank the symptoms by cost. Then
choose the one to run.

The answer in this case:

> Illustration: Between Q1 and Q4, the firm delivered 11 of 14 enterprise deals later than the
> date in the contract. The median slip was 34 days. Four of the 14 accounts escalated, and two
> of them left.

Why this symptom is usable: It has a denominator, a distribution, and a cost. "Sales and
delivery do not communicate" is a mood, and it decides nothing.

Label: Illustration. In a real diagnosis, label this line "Records show:", because it comes from
the firm's own records. Also state the definition of "slip". If the definition changes during
the period, the series becomes invalid.

---

## Step 3. Locate the failure

The question (Genesis 3:9): "Where art thou?"

The work: Follow the sequence from the first contact with the customer to the delivered result.
Find the first point where the output is wrong. Do not stop at the point where the failure
became visible.

The sequence in this case:

| #   | Stage                    | Output                                  | Correct?                                        |
| --- | ------------------------ | --------------------------------------- | ----------------------------------------------- |
| 1   | Qualification            | Buyer and use case identified           | Yes                                             |
| 2   | Discovery                | Requirements list drafted               | Yes                                             |
| 3   | Scoping                  | Effort estimate produced                | Partly, the estimate covers standard scope only |
| 4   | Proposal and negotiation | Price and delivery date agreed          | No, the date is set here                        |
| 5   | Contract signature       | Commitment becomes binding              | No, the date is inherited                       |
| 6   | Kickoff                  | Delivery learns the custom requirements | No, it is late                                  |
| 7   | Build                    | Work proceeds                           | Late by inheritance                             |
| 8   | Delivery                 | Date missed                             | Visible failure                                 |

The location: Illustration: The first wrong output is at stage 4. The two parties agree the
date before anyone knows the requirements that set the date. Stage 7 and stage 8 are downstream.

Why this step matters: The complaint names stage 8, because the pain arrives at stage 8. A
diagnosis that starts at stage 8 produces a fix in delivery. The cause at stage 4 stays in
place.

Two questions make the location more exact:

1. What is the earliest point where the input to the next stage is already wrong? That point is
   the failure.
2. If someone prevents the visible failure, does the process still produce a wrong output? If
   the answer is yes, move the location upstream.

Label: Illustration.

---

## Step 4. Trace the source

The question (Genesis 3:11): "Who told thee that thou wast naked?"

The work: Ask what fed the failure. The source can be a person, a rule, an incentive, a tool, or
an absence. Text states: In Genesis 3, God asks this question (verse 11) before the question
about the act (verse 13). Inference: The question is about the input that produced the state.

What fed stage 4 in this case:

| Source      | Content                                                                            | Evidence                                                        |
| ----------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Incentive   | Account executives earn commission at signature, and the quarter closes at the end | Compensation plan, revised 18 months ago                        |
| Absence     | No requirement that a feasibility review happens before the date is quoted         | The deal desk checks price and terms, and not schedule          |
| Authority   | Account executives can quote a date without a delivery sign-off                    | Deal desk policy document                                       |
| Information | The quote does not include the requirements list from stage 2                      | Four sampled quote records, three without the list              |
| Pressure    | The end of the quarter concentrates the decisions                                  | All 11 slipped deals signed in the final two weeks of a quarter |

Illustration: the table above is case data.

The finding: Two things together feed the failure at stage 4. One is an incentive, and the other
is a missing gate. Neither one alone produces it. A commission plan that pays at signature is
normal. By itself, it is not a defect. The defect is that no gate stands between the incentive
and the commitment.

The rule for this step: Proverbs 18:17 states, "He that is first in his own cause seemeth just;
but his neighbour cometh and searcheth him." Text states: the first account seems right until
the neighbor examines it. Inference: The account executive gives the first account of the deal.
The delivery lead is the "neighbour" in the verse. The diagnosis needs both accounts. It also
needs the records, because the records have no interest in the result.

Label: Illustration for the case data. The verse is Text states.

---

## Step 5. Establish the act

The question (Genesis 3:13): "What is this that thou hast done?"

The work: State what was done, who did it, and which rule permitted it. This step produces a
finding. The finding is about the process, not about the character of a person.

The finding in this case:

> Illustration: An account executive quoted a delivery date and the contract made it binding.
> No feasibility review and no delivery sign-off came first, and the policy permitted this.

The rule that permitted it: The deal desk policy lists price floors and discount approvals. It
does not mention delivery dates. The omission is the permission.

The evidence: Four quote records, the policy document, the compensation plan, and separate
interviews with the two account teams.

The trap in this step: The team turns the act into a verdict on character. "The sales team is
dishonest" is not a finding. It is a judgment that comes before the diagnosis is complete.
Axiom A26 in `business-first-principles`, "Diagnose before you judge", names the correct
sequence. Text states: In Genesis 3:12-13, Adam and the woman both pass the cause to another.
Inference: The text shows the alternative for the diagnosis. The diagnosis records the transfer
of blame, but it does not accept it.

Label: Illustration.

---

## Step 6. Classify the finding

The question: What kind of failure is this?

Three tests sort the finding into the five classes in the table below. Each class has a different remedy.

Cycle or event: Run the test from the skill file.

| Test              | Result in this case                               | Read                    |
| ----------------- | ------------------------------------------------- | ----------------------- |
| Repetition        | Four consecutive quarters                         | Cycle                   |
| Period            | Quarterly, and concentrated at the quarter end    | Named period            |
| Upstream position | Signature is downstream of the quote              | Diagnosis sits upstream |
| Removal           | Removing one AE does not change the pattern       | Not an event            |
| Prediction        | A signature in the final two weeks predicts a slip | The cycle predicts      |

Verdict: cycle. Illustration. (AE means account executive.)

Structural friction or fixable friction: Run the test. Each row answers the question for that
test in the skill file.

| Test     | Question                                                      | Result in this case                                                                                                                                  | Read                                            |
| -------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Return   | Does it come back after a fix?                                | The handoff checklist existed in year two. The slips of the last four quarters came after the checklist lapsed, not while it was in use.             | Fixable, and the fix lapsed                     |
| Cause    | Does the fix remove the cause or only the instance?           | The gate is missing. Adding a gate removes the cause.                                                                                                | Fixable                                         |
| Location | Is it a property of the environment or of the local design?   | Local design. The firm's own deal desk policy lets a date go out with no delivery sign-off.                                                          | Fixable                                         |
| Sharing  | Does a well-run peer face the same friction?                  | Peers with a gate do not slip the same way. The tension between selling and delivering is permanent in every firm that sells custom work.            | Fixable for the slip, structural for the tension |
| Scaling  | Does the cost scale with activity or with a specific mistake? | The slip scales with the number of signatures at the end of the quarter.                                                                             | Fixable, and the volume drives it               |

Verdict: two findings, not one. Illustration. The missing gate is fixable. The tension between
the incentive to sign and the cost to deliver is structural. It belongs in the budget and in the
regular schedule, not in a one-time fix.

Decay or break: Illustration. The team maintained the handoff checklist for five quarters and
then dropped it. The last review was 14 months ago, and the owner left the company. This is
decay. The diagnosis points to the maintenance function, not to the checklist.

The classification sets the fix:

| Class               | The matching remedy                                                   |
| ------------------- | --------------------------------------------------------------------- |
| Cycle               | Predict the next occurrence and plan capacity for it                  |
| Event               | Find the specific actor or condition and remove it                    |
| Structural friction | Budget it, own it, and measure it                                     |
| Fixable friction    | Remove the cause, and test the removal                                |
| Decay               | Install a maintenance function with a name, a calendar, and a measure |

Label: Illustration, with the friction tests from the skill file.

---

## Step 7. Name the test

The question: Which storm or fire will prove the fix?

The work: Name the event and the measure before the change goes live. A fix with no test is only
a hope.

The test in this case:

> Illustration: For the next four quarters, match the date in each signed contract to a
> delivery sign-off record. This covers every deal, at any time in the quarter. A failure is a
> contract date with no sign-off.

Why this test: The measure is the failure itself, not a proxy. A proxy such as "handoff meetings
held" counts activity. The failure count counts the outcome.

The load: Inference: The end of each quarter in the four-quarter test period is the storm that
the fix must survive. The first load arrives at the end of the next quarter.

Labels: Illustration for the case. The pattern of naming the test in advance comes from two
texts. Text states: In Matthew 7:24-27, both houses meet the same rain, floods, and winds. Text
states: In 1 Corinthians 3:13, the fire tries the work "of what sort it is".

---

## Step 8. Assign the owner, the date, and the warning sign

The question: Who holds this, and how does the firm know that it is slipping again?

The assignments in this case:

| Item                                                                         | Owner                        | Date                | Warning sign                                     |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------- | ------------------------------------------------ |
| The gate: no quoted date without a delivery sign-off                         | Deal desk lead               | 30 days             | Any contract with a date and no sign-off record  |
| The threshold: non-standard terms above a stated size go up to the leadership | Delivery lead                | 30 days             | A rising count of exceptions                     |
| The maintenance function: quarterly review of the handoff artifact           | Named operations owner       | Every quarter       | Two consecutive quarters with no review recorded |
| The structural cost: budgeted delivery capacity for quarter-end volume       | Finance and delivery jointly | Next planning cycle | Slips concentrated in the final two weeks again  |

Illustration: the table above is case data.

The threshold rule comes from Exodus 18:22: "every great matter they shall bring unto thee, but
every small matter they shall judge". Text states: the great matters go up, and the small
matters stay with the lower judges. Inference: A stated threshold lets each tier do its work. An
implied threshold sends everything upward, and the top becomes exhausted.

The reporting rule comes from Acts 6:3-4. Text states: The seven men received real authority
"over this business", and the apostles stated what they kept. Inference: In this case the
leadership keeps pricing policy, the exception threshold, and capacity. It gives the date gate
to the deal desk.

Label: Illustration for the case, with labels on the cited texts.

---

## What shows the diagnosis is wrong

Inference: A falsifiable diagnosis names the observations that will end it. This diagnosis has
four:

1. The gate holds, and the slips continue. Then stage 4 is not the location. The requirements
   problem sits earlier, at stage 2 or stage 1.
2. The slipped deals have sign-offs. Then the failure is in capacity or in estimation, not in
   the gate.
3. Deals outside the quarter end slip at the same rate. Then the quarter boundary is not the
   driver, and the pressure finding is wrong.
4. A peer firm with the same gate slips the same way. Then the structural finding is larger than
   this diagnosis allows. The remedy changes from a policy to a capacity model.

If the same failure returns after the fix, run the classification again. Do not add a second
fix. A problem that returns usually means that the class was wrong.

---

## Traps in the procedure

| Trap                                     | What it looks like                                 | The correction                                   |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------------------ |
| Starting with the act                    | "Who approved this?" as the first question         | Ask where, then what source, then what act       |
| Interviewing one side                    | The account of the party that reported the problem | Get the neighbor, per Proverbs 18:17             |
| Fixing before classifying                | A remedy chosen in the first meeting               | The class determines the remedy                  |
| Treating a cycle as an event             | Blame on one actor or one bad deal                 | Test for repetition and period                   |
| Treating a fixable defect as weather     | "That is just how this industry works"             | Run the friction test, and name the peer         |
| Treating structural friction as a defect | A permanent cost chased with fix after fix         | Run the friction test in the other direction     |
| No test                                  | The fix ships and the meeting ends                 | Name the storm and the measure before the change |
| No owner                                 | A finding with a verb and no name                  | Assign the name and the date                     |
| The dishonest fix                        | A measure chosen because it improves               | Measure the failure, not the activity            |

---

## The question bank

These questions carry the procedure, in order.

Location:

1. Where is the first point in the sequence where the output is wrong?
2. What is the evidence that the output is wrong there, and what is normal there?
3. If someone prevents the visible failure, does the process still produce a wrong output?

Source:

4. What fed that point? Name the person, the rule, the incentive, the tool, or the absence.
5. Who made the choice, and what did they know at the time?
6. Who disagrees with this account, and what do they say?

Act:

7. What was done, and which rule permitted it?
8. Where is the rule written, and what does it leave out?
9. What happens to a person who refuses?

Classification:

10. Did it happen before, and with what period?
11. Does the fix remove the cause or the instance?
12. Does a well-run peer face the same friction?
13. Does the cost scale with activity or with a mistake?
14. Is this a break or a decay, and who owned the thing that decayed?

Test and ownership:

15. Which event will test the fix, and what does survival look like?
16. Who owns the fix, by when, and what is the warning sign of a return?
17. What observation will show that this diagnosis is wrong?
