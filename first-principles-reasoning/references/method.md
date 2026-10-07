# The Derivation Ladder, Worked

Reference file for the `first-principles-reasoning` skill.

Verses are quoted from the local KJV with `../scripture-foundations/scripts/scripture.ts`. Hebrew
and Greek definitions are copied from `../scripture-foundations/scripts/lexicon.ts`. The labels
are "Text states", "Lexical", "Inference", "Contested", and "Illustration". "Illustration" marks
constructed example data.

The examples below are constructed. They show the shape of the climb. The numbers in them are not
real observations from any firm or person.

---

## Contents

- [The four rungs](#the-four-rungs)
- [How to climb](#how-to-climb)
- [How to spot a skipped rung](#how-to-spot-a-skipped-rung)
- [When the ladder stops below an axiom](#when-the-ladder-stops-below-an-axiom)
- [Example 1. A business question](#example-1-a-business-question)
- [Example 2. A personal question](#example-2-a-personal-question)
- [The comparison](#the-comparison)

---

## The four rungs

| Rung        | The question it answers          | What it needs                           | Failure when it is missing                                    |
| ----------- | -------------------------------- | --------------------------------------- | ------------------------------------------------------------- |
| Observation | What happened?                   | A measure, a date, a source             | The argument runs on memory and impression                    |
| Pattern     | What keeps happening?            | Repetition across time or cases         | One incident becomes a general rule                           |
| Principle   | What rule explains the pattern?  | A general claim that predicts new cases | The rule fits this case only, and nobody says so              |
| Axiom       | What does the principle rest on? | A claim that cannot be reduced further  | The principle rests on nothing, and it moves with the weather |

The rungs have an order. A pattern needs observations under it. A principle needs patterns. An
axiom is the rung that ends the climb.

## How to climb

Step 1. Collect observations that carry a number and a date. "Revenue is down" is not an
observation. "Net revenue fell 4 percent in the last two quarters, and new logos fell 30 percent"
is an observation.

Step 2. Test each observation for source and for definition. Ask where the number came from and
what it counts. If the definition changed in the middle of the period, the series is not valid.

Step 3. Look for repetition. Sort the observations by time. Look for the same movement more than
once. A pattern can also run across units, such as markets, teams, or accounts, and not only
across time.

Step 4. State the pattern as a sentence with a condition in it. "We lose accounts when the
support handoff fails at renewal" is a pattern with a condition. "Support is bad" is a mood.

Step 5. Ask what rule produces the pattern, and state it in general terms. The rule must cover
the observed cases and predict cases that did not happen yet. A rule that fits only the past is a
description, and a description does not decide anything.

Step 6. Ask what the rule rests on. Stop when the answer is outside the subject. Climb until the
next "why" leaves the subject matter. The last answer is the axiom for this climb. Name it, and
keep its label.

Step 7. Write the practice. The practice is the observable change in behavior that follows. If
the climb produces no change in behavior, the climb was an exercise.

## How to spot a skipped rung

| Symptom                                                    | The rung that is missing      | The repair                                                 |
| ---------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------- |
| A vivid single story drives the conclusion                 | Pattern                       | Ask for the other cases. Count them.                       |
| The conclusion is stated as a law of human nature          | Observation and pattern       | Ask for the measurement that supports the law              |
| The rule fits the case but nobody can say what it excludes | Principle                     | Ask what case the rule predicts will fail                  |
| Two competent people hold opposite conclusions             | Shared axiom, usually unnamed | Ask what both sides assume. Test that.                     |
| The argument gets stronger the more it is repeated         | Any                           | Repetition is not evidence. Ask for the first observation. |

## When the ladder stops below an axiom

Not every question justifies a climb to the top. Three stop points are legitimate:

1. The decision is reversible and cheap. Stop at the principle, act, and measure.
2. The pattern is strong and nobody knows the mechanism. Stop at the pattern, state what you do
   not know, and act with a review date.
3. The question is narrow, and someone else already supplies a known practice for it. Apply the
   known practice from `business-first-principles`, and save the climb for a hard question.

The climb is expensive. So record where it stopped and why.

---

## Example 1. A business question

The question: "Growth has stalled. Do we launch a second product?"

The scene: a firm of 40 people sells one software product to operations teams. Revenue was flat
for six quarters. (Illustration)

### Rung 1. Observations

| #   | Observation                                | Value                                              |
| --- | ------------------------------------------ | -------------------------------------------------- |
| O1  | Net revenue, six quarters                  | Flat within 2 percent                              |
| O2  | New logos per quarter                      | Down 30 percent over the same period               |
| O3  | Expansion revenue inside existing accounts | Up 40 percent over the same period                 |
| O4  | Median sales cycle                         | Up from 45 days to 70 days                         |
| O5  | Competitors with a second product          | Three of the top five, added in the last two years |

### Rung 2. Patterns

- P1. Where a customer buys a second module, renewal is strong. The accounts that expand stay.
  (Illustration)
- P2. Every stalled quarter in the history of the firm followed a release that added surface
  area and did not deepen the core workflow. There were two prior stalls. One came after the
  reporting release, and one came after the mobile release. (Illustration)
- P3. New logos fall when the evaluation period grows. The sales cycle and the logo count moved
  together for six quarters. (Illustration)
- P4. The second products of the competitors are mostly integrations of an adjacent tool. No
  public evidence of their revenue exists. (Illustration)

### Rung 3. Principle

Inference: a firm grows in two ways. An existing customer buys more, or the firm finds more
customers. Where acquisition efficiency falls and expansion rises, the constraint sits in the
offer and the account relationship. It does not sit in the market size.

This principle covers P1, P2, and P3. It predicts that a second product will sell well to
existing accounts and poorly to new ones, because it does not touch the problem of the new
buyer.

### Rung 4. Axiom

Two axioms govern the decision:

- A5, "Formation precedes filling." Inference from Genesis 1: days 1 to 3 form domains, and days
  4 to 6 fill them. The container comes before the contents. A second product is contents. The
  container here is the core workflow and the account relationship.
- A6, "Distinction precedes order." "And God divided the light from the darkness" (Genesis 1:4).
  A category that nobody divided has no meaning. The firm did not state what it is not, so a
  second product is an addition and not a division.

### The practice

The climb does not produce "do not launch". It produces a sequence and a test:

1. Write one page that states what the firm is not. Name the buyers that it will refuse and the
   work that it will not do. (A6)
2. Instrument the expansion path first, because the principle says that the demand is already
   there. Measure the accounts that expanded and the reason that they gave. (A5)
3. Run one bounded integration as a test of the container, with a decision date and a stated
   measure of success.
4. Read the logo count again at the decision date. If new logos stay down and expansion stays
   up, the second product treats a symptom.

### The skipped-rung version

The shortcut answer sounds like this: "Three of our top five competitors launched a second
product. We need one too."

The climb shows three separate failures in that sentence:

- O5 became a pattern by itself. One data point about other firms is not a pattern.
- The firm treated the move of a competitor as evidence about itself, but the competitor is a
  different firm with different constraints.
- Nobody observed the results of the competitors. A launch is not a result.

### What moves the answer

Inference: if expansion revenue falls and acquisition holds, the principle points the other way.
The constraint then sits in the account relationship and not in new demand.

---

## Example 2. A personal question

The question: "Why do I keep agreeing to work I cannot finish?"

The scene: a manager with a full portfolio and a calendar that shows 12 weeks. (Illustration)

### Rung 1. Observations

| #   | Observation                                  | Value            |
| --- | -------------------------------------------- | ---------------- |
| O1  | Scheduled meeting hours per week             | 22 to 26         |
| O2  | Unplanned requests accepted per week         | 5 to 8           |
| O3  | Personal commitments missed this quarter     | 3                |
| O4  | Work completed after the agreed date         | 6 of 14 items    |
| O5  | The same three colleagues, share of requests | About 70 percent |

### Rung 2. Patterns

- P1. Requests arrive on Tuesdays and Thursdays. These are the two days with open agenda space.
  (Illustration)
- P2. The three colleagues who send most requests also send the most urgent ones.
  (Illustration)
- P3. Every missed personal commitment falls in a week with three or more accepted requests.
  (Illustration)
- P4. A refusal costs a short, awkward conversation. An acceptance costs several days of work.
  The two costs sit in different weeks. The calendar shows the second cost only after the
  manager commits to it. (Illustration)

### Rung 3. Principle

Inference: a yes to one thing is a no to something else, and commitments that nobody measures
become invisible. The week has a fixed capacity. A person who does not keep a capacity number
will treat that number as unlimited.

The principle covers P1, P3, and P4. It makes a forward test. Next quarter, if the manager still
keeps no capacity number, missed commitments will again fall in the weeks with three or more
accepted requests. If the manager keeps the number and holds to it, the misses will drop in
those weeks. If misses next quarter fall in light weeks instead, the principle is wrong.

### Rung 4. Axiom

- A30, "Mortality makes time the binding constraint." "Till thou return unto the ground" (Genesis
  3:19). Text states the verse. Inference for the application: finite time is the base constraint
  under every plan, and opportunity cost is the real cost.
- A15, "Work is bounded; rest is structural." "And on the seventh day God ended his work"
  (Genesis 2:2). Inference: God gives the ratio, and nobody earns it.
- A20, "Abundance precedes restriction; the boundary is few and stated in advance." "Of every
  tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil,
  thou shalt not eat of it" (Genesis 2:16-17). Inference: a rule that a person invents after the
  pressure arrives is a negotiation.
- A18, "Aloneness is not good." Genesis 2:18 says, "And the LORD God said, It is not good that the
  man should be alone; I will make him an help meet for him." Inference: the three colleagues are
  not the problem by themselves. The problem is that the group has no shared rule for requests.

### The practice

1. Keep one visible capacity number, in hours per week, and update it on Friday. (A30)
2. State a default for new requests before the next one arrives. "Requests over two hours go to a
   written ask with a date." (A20)
3. Decide requests on Friday for the next week, so that you do not decide in the moment. (A20)
4. Book the rest first and the work second, because A15 makes rest structural and not residual.
5. Raise the pattern with the three colleagues together. Do not refuse each request separately.
   (A18)

### The skipped-rung version

"I need to be more disciplined."

That sentence is an axiom about character with no observation and no pattern under it. It
produces no measurable change, and it turns a system problem into a personal verdict. The climb
shows the same problem as a capacity number, an arrival schedule, and a small group of people.

### What moves the answer

Inference: if the missed commitments trace to one colleague or one recurring meeting, the fix is
a boundary with that source. A capacity system comes second.

---

## The comparison

|             | Business example                                    | Personal example                                      |
| ----------- | --------------------------------------------------- | ----------------------------------------------------- |
| Observation | Six quarters of revenue, logo, and cycle data       | Twelve weeks of calendar and request data             |
| Pattern     | Expansion holds while acquisition falls             | Missed work clusters in high-request weeks            |
| Principle   | The constraint sits in the offer and the account    | Commitments that nobody measures become invisible     |
| Axiom       | A5, A6                                              | A30, A15, A20, A18                                    |
| Practice    | State what the firm is not, then test the container | One capacity number, a Friday decision, a shared rule |

Both climbs follow the same order. Neither climb starts with a conclusion. Both end with a
practice, a test, and a statement of what will change the answer.
