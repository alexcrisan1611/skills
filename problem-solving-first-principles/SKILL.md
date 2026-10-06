---
name: problem-solving-first-principles
description: Diagnose a failure before anyone assigns blame. Use this whenever the user asks for a root cause analysis, brings a recurring problem, asks why something keeps breaking, wants a post-mortem or a retrospective on a failure, faces a crisis that needs triage, or needs to debug a process, an organization, or a system that fails the same way twice. The center of the method is the interrogation in Genesis 3, which asks where, then what source, then what act, and only then judges. Reach for this skill when the same outage, complaint, or missed date returns, when a fix was applied and the problem came back, when a slow decline has no single event to investigate, or when a warning was dismissed and the crisis arrived anyway. It covers triage, the difference between structural and fixable friction, the storm test, and the honest limit of diagnosis.
---

# Problem Solving First Principles

## What this skill is for

This skill is for diagnosis. It finds where a failure is, what produced it, and what act
carried it, in that order.

It is not the same work as `first-principles-reasoning`. That skill decides what to do.
This skill explains what went wrong, so the decision can rest on the cause rather than on the
symptom.

Three rules govern the work.

**Judgment comes after diagnosis, never before it.** The business axioms state this as A26.
Judgment that outruns diagnosis produces the wrong verdict and teaches people to hide.

**Blame is not a finding.** A name is not a cause. "The operator was careless" explains
nothing until the system that permitted the carelessness is described.

**The diagnosis must end in a test.** A cause that cannot be falsified is a story. The storm
test and the fire test in this skill name the test in advance.

---

## The interrogation: Genesis 3:9, 3:11, 3:13

The first failure in Scripture is met with three questions, asked in a fixed order.

- Genesis 3:9: "And the LORD God called unto Adam, and said unto him, Where art thou?"
- Genesis 3:11: "And he said, Who told thee that thou wast naked? Hast thou eaten of the tree,
  whereof I commanded thee that thou shouldest not eat?"
- Genesis 3:13: "And the LORD God said unto the woman, What is this that thou hast done? And
  the woman said, The serpent beguiled me, and I did eat."

**(Text states)** Three items are established in sequence.

| Order | Question             | What it establishes | Function                           |
| ----- | -------------------- | ------------------- | ---------------------------------- |
| 1     | Where art thou?      | Location and state  | Find the failure before judging it |
| 2     | Who told thee?       | Source              | Trace what fed the state           |
| 3     | What hast thou done? | Act                 | Establish the deed and its rule    |

The order carries information. **(Inference)** A question about the act asked first produces a
defended account. The state question is cheap and it locates the subject. The source question
comes before the act question because the act was produced by something. Only after all three
does the verdict arrive, and in the text it arrives in verses 3:14-19 rather than in verses
3:9-13.

The answers are also data. **(Text states)** Adam answers the location question with fear and
hiding: "I heard thy voice in the garden, and I was afraid, because I was naked; and I hid
myself" (3:10). He answers the act question with a transferred cause: "The woman whom thou
gavest to be with me, she gave me of the tree, and I did eat" (3:12). The woman answers in the
same shape: "The serpent beguiled me, and I did eat" (3:13). The diagnosis records the
evasions without treating them as the finding.

- **Lexical:** "Where" in 3:9 is among the renderings of H335 _ay_, defined as "where? hence
  how?"
- **Lexical:** "beguiled" in 3:13 is among the renderings of H5377 _nasha_, "to lead astray,
  i.e. (mentally) to delude, or (morally) to seduce".

### The two supporting proverbs

Proverbs 18:13 states the cost of skipping the first question: "He that answereth a matter
before he heareth it, it is folly and shame unto him." **(Text states)**

Proverbs 20:5 states the difficulty: "Counsel in the heart of man is like deep water; but a man
of understanding will draw it out." **(Text states)**

- **Lexical:** "draw it out" is among the renderings of H1802 _dalah_, defined as "properly, to
  dangle, i.e. to let down a bucket (for drawing out water); figuratively, to deliver".
- **Lexical:** "counsel" is among the renderings of H6098 _etsah_, "advice; by implication,
  plan; also prudence".

The inference from the proverb is practical. The account of a failure sits below the surface,
and the person holding it often cannot state it directly. The interrogator lowers a bucket
rather than asking for a summary. **(Inference)**

---

## Cycle or event: Genesis 41

Pharaoh sees a single famine in a dream. Joseph reads a fourteen year cycle behind it.

Genesis 41:25-27 records the reading: "And Joseph said unto Pharaoh, The dream of Pharaoh is
one: God hath shewed Pharaoh what he is about to do. The seven good kine are seven years; and
the seven good ears are seven years: the dream is one. And the seven thin and ill favoured kine
that came up after them are seven years; and the seven empty ears blasted with the east wind
shall be seven years of famine." **(Text states)**

Three features of that passage matter for diagnosis.

1. **Text states:** the two dreams are one. Verse 41:26 says so twice. Repetition in the
   evidence is a signal about the structure of the thing.
2. **Text states:** the unit is a period, not an incident. The subject changes from a famine to
   a fourteen year cycle with two halves.
3. **Text states:** the doubling has a stated meaning. Verse 41:32 reads, "And for that the
   dream was doubled unto Pharaoh twice; it is because the thing is established by God, and God
   will shortly bring it to pass."
4. **Text states:** the response is positioned before the need. Genesis 41:34 orders a fifth
   part gathered during the plenty, and 41:53-57 records the store holding when the second half
   arrived.

### The test for separating a cycle from an event

| Test              | Question                                                        | If yes                               |
| ----------------- | --------------------------------------------------------------- | ------------------------------------ |
| Repetition        | Has this happened before in the record?                         | Treat it as a cycle                  |
| Period            | Does the interval repeat with roughly regular spacing?          | Name the period before acting        |
| Upstream position | Is the visible incident downstream of something slower?         | Move the diagnosis upstream          |
| Removal           | Does the incident disappear when one actor or one tool changes? | Treat it as an event                 |
| Prediction        | Does the cycle predict the next occurrence?                     | Use the prediction, and set a review |

**Inference:** the diagnosis is right when it predicts. Joseph's interpretation was tested by
the second half of the cycle, and the text records the test.

The honest note belongs here too. Not every symptom sits on a cycle. A firm that explains every
bad quarter as a cycle never diagnoses anything. Run the test, and record the result when the
answer is "event".

---

## Structural friction and fixable friction

Genesis 3:17-19 establishes that some resistance is permanent. "Cursed is the ground for thy
sake; in sorrow shalt thou eat of it all the days of thy life; Thorns also and thistles shall
it bring forth to thee; and thou shalt eat the herb of the field; In the sweat of thy face
shalt thou eat bread, till thou return unto the ground." **(Text states)**

The phrase "all the days of thy life" sets the duration. **(Text states)** Thorns are a cost of
operating, and not a problem to be solved once. The business axiom is A27.

Some friction is not structural. Some of it is a defect, and it goes away when someone fixes
it. Treating a fixable defect as weather is how organizations lose years.

### The test for telling the two apart

| Test     | Question                                                      | Structural    | Fixable      |
| -------- | ------------------------------------------------------------- | ------------- | ------------ |
| Return   | Does it come back after a fix?                                | Returns       | Stops        |
| Cause    | Does the fix remove the cause or only the instance?           | Instance only | Cause        |
| Location | Is it a property of the environment or of the local design?   | Environment   | Local design |
| Sharing  | Does a well-run peer face the same friction?                  | Yes           | No           |
| Scaling  | Does the cost scale with activity or with a specific mistake? | Activity      | Mistake      |

A structural cost gets a budget line, an owner, and a measure. A fixable defect gets a
diagnosis and a removal. **(Inference)** The common error runs in both directions. A firm
spends its best engineers on a structural cost and calls it progress. A firm calls a broken
process "just how the industry works" and stops looking.

---

## Triage and thresholds: Exodus 18

Moses sits as the single judge for a whole nation, and the load exceeds his capacity. Jethro
diagnoses it in one sentence.

Exodus 18:18 reads, "Thou wilt surely wear away, both thou, and this people that is with thee:
for this thing is too heavy for thee; thou art not able to perform it thyself alone." **(Text
states)**

Note the diagnosis. The problem is stated as weight and duration rather than as attitude.
**(Text states)** The remedy has four parts.

1. **Text states:** a tier structure, in Exodus 18:21, with "rulers of thousands, and rulers of
   hundreds, rulers of fifties, and rulers of tens".
2. **Text states:** selection criteria, in the same verse: "able men, such as fear God, men of
   truth, hating covetousness".
3. **Text states:** a threshold rule, in Exodus 18:22: "every great matter they shall bring
   unto thee, but every small matter they shall judge".
4. **Text states:** the leader keeps a defined post, in Exodus 18:19-20: to be for the people
   toward God, to bring the causes to God, and to teach the ordinances and laws.

Exodus 18:26 records the operating result: "And they judged the people at all seasons: the hard
causes they brought unto Moses, but every small matter they judged themselves."

- **Lexical:** "too heavy" is among the renderings of H3515 _kaved_, defined as "heavy;
  figuratively in a good sense (numerous) or in a bad sense (severe, difficult, stupid)". The
  same root H3513 carries "glorify, honour" and "grievous, harden". Weight and honour share a
  root in Hebrew. **(Lexical)**
- **Lexical:** "wear away" is among the renderings of H5034 _nabel_, "to wilt; generally, to
  fall away, fail, faint".
- **Lexical:** "great" is among the renderings of H1419 _gadol_, and "small" of H6996 _qatan_.
  Both modify H1697 _dabar_, "a word; by implication, a matter (as spoken of) or thing;
  adverbially, a cause".

**Inference:** a tier structure without a stated threshold is decorative. The load rises to the
top regardless, because the size of the matter is decided by whoever sends it. The threshold is
the load-bearing part of Jethro's plan, and it must be written where both tiers can see it.

---

## The first operational crisis: Acts 6:1-7

The first recorded conflict in the church is administrative. It is not doctrinal.

Acts 6:1 states the complaint: "And in those days, when the number of the disciples was
multiplied, there arose a murmuring of the Grecians against the Hebrews, because their widows
were neglected in the daily ministration." **(Text states)** Note the shape. Growth produced the
failure, the failure had a named group, and the complaint was specific.

The response has a fixed shape, and every part of it is worth copying.

| Verse | Move                                           | Content                                                                         |
| ----- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| 6:2   | Convene the whole body, and state the trade    | "It is not reason that we should leave the word of God, and serve tables."      |
| 6:3   | Set criteria, and let the body choose          | "seven men of honest report, full of the Holy Ghost and wisdom"                 |
| 6:3   | Give the delegate real authority over the work | "whom we may appoint over this business"                                        |
| 6:4   | Record what leadership keeps                   | "we will give ourselves continually to prayer, and to the ministry of the word" |
| 6:6   | Appoint publicly and with prayer               | "when they had prayed, they laid their hands on them"                           |
| 6:7   | Report the outcome                             | "the word of God increased; and the number of the disciples multiplied"         |

- **Lexical:** "leave" in 6:2 is among the renderings of G2641 _kataleipo_, "to leave down,
  i.e. behind; by implication, to abandon, have remaining".
- **Lexical:** "give ourselves continually" in 6:4 is G4342 _proskartereo_, "to be earnest
  towards, i.e. (to a thing) to persevere, be constantly diligent, or (in a place) to attend
  assiduously all the exercises, or (to a person) to adhere closely to (as a servitor)".
- **Inference:** the trade in verse 2 is the diagnosis, and the trade in verse 4 is the
  prescription. Both are stated openly. A leader who delegates without naming what he keeps is
  not delegating. He is drifting.

---

## Two responses to a threat, not one: Nehemiah 4

Nehemiah 4:9 states the pair in one sentence: "Nevertheless we made our prayer unto our God,
and set a watch against them day and night, because of them." **(Text states)** The verse joins
two responses with "and" rather than offering a choice between them.

The chapter then works the practical half in detail.

- **Text states:** the defenders were posted where the exposure was. Verse 4:13 reads, "Therefore
  set I in the lower places behind the wall, and on the higher places, I even set the people
  after their families with their swords, their spears, and their bows."
- **Text states:** both tasks ran at once. Verse 4:16 divides the servants in two. Verses 4:17-18
  read, "They which builded on the wall, and they that bare burdens, with those that laded,
  every one with one of his hands wrought in the work, and with the other hand held a weapon.
  For the builders, every one had his sword girded by his side, and so builded."
- **Text states:** the leader addressed the fear directly. Verse 4:14 reads, "Be not ye afraid of
  them: remember the LORD, which is great and terrible, and fight for your brethren, your sons,
  and your daughters, your wives, and your houses."
- **Text states:** there was a rally rule for separated workers. Verses 4:19-20 record the
  spread-out work and the instruction: "In what place therefore ye hear the sound of the
  trumpet, resort ye thither unto us: our God shall fight for us."
- **Text states:** the strain was sustained rather than momentary. Verse 4:21 reads, "So we
  laboured in the work: and half of them held the spears from the rising of the morning till the
  stars appeared." Verse 4:23 records that nobody took off his clothes except for washing.
- **Text states:** the internal report is in the chapter too. Verse 4:10 reads, "The strength of
  the bearers of burdens is decayed, and there is much rubbish; so that we are not able to build
  the wall." The exhaustion is an internal failure mode, and it sits beside the external threat.
- **Text states:** the warning was repeated. Verse 4:12 reads, "the Jews which dwelt by them
  said unto us ten times, From all places whence ye shall return unto us they will be upon you."

**Inference:** a response plan that names only one of the two halves is incomplete. The text
presents prayer and preparation as a pair, and it preserves the practical detail at the same
length as the spiritual.

---

## Diagnosing decay: Proverbs 24:30-34

Some failures have no event to investigate. The field is simply gone.

Proverbs 24:30-34 reads, "I went by the field of the slothful, and by the vineyard of the man
void of understanding; And, lo, it was all grown over with thorns, and nettles had covered the
face thereof, and the stone wall thereof was broken down. Then I saw, and considered it well: I
looked upon it, and received instruction. Yet a little sleep, a little slumber, a little folding
of the hands to sleep: So shall thy poverty come as one that travelleth; and thy want as an
armed man." **(Text states)**

The scene contains a diagnosis, and the diagnosis is the phrase "yet a little sleep". The
failure has no single decision in it. It has a rate.

- **Lexical:** "grown over" is among the renderings of H5927 _alah_, "to ascend... grow (over)
  increase". The word is the ordinary verb for going up.
- **Lexical:** "broken down" is among the renderings of H6555 _parats_, "to break out (in many
  applications, direct and indirect, literal and figurative)".
- **Note on the tools:** the reverse map for the phrase "broken down" does not return H6555,
  because the gloss list separates "break" and "down" with other words in between. The reverse
  map searches glosses as strings and it can miss a real match. Read its output rather than
  trusting its count. **(Lexical, negative result.)**

### Reading a slow failure

| Question                                                             | Why it matters                                                       |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| What is the rate of change, not the state?                           | A state can look acceptable while the rate is fatal                  |
| What is the baseline period?                                         | Decay is measured against a known-good season, not against last week |
| Who owns the asset, and when did they last look?                     | Unowned things decay without a decision                              |
| What is the maintenance cadence, and how many intervals were missed? | Count the misses. The count is the diagnosis                         |
| What does the wall enclose?                                          | The loss of function follows the loss of boundary                    |

**Inference:** a slow failure cannot be fixed by an event. A maintenance function with a name,
a calendar, and a measure is the only repair that matches the cause. A single burst of effort
produces a clean field, and the thorns return.

Note the observer's posture in verse 24:32. "Then I saw, and considered it well: I looked upon
it, and received instruction." **(Text states)** Reading decay takes a deliberate stop.

---

## The storm test and the fire test

A foundation is tested by what it survives. Name the test before you name the fix.

Matthew 7:24-27 records the two houses. "And the rain descended, and the floods came, and the
winds blew, and beat upon that house; and it fell not: for it was founded upon a rock... And
the rain descended, and the floods came, and the winds blew, and beat upon that house; and it
fell: and great was the fall of it." **(Text states)**

- **Text states:** both houses receive the same weather. The text repeats the three elements
  word for word.
- **Text states:** the difference is in the foundation, and it appears only under load.
- **Lexical:** "beat upon" is G4363 _prospipto_, "to fall towards, i.e. (gently) prostrate
  oneself... or (violently) to rush upon (in storm)".

1 Corinthians 3:10-15 adds the second test. Verse 3:13 reads, "Every man's work shall be made
manifest: for the day shall declare it, because it shall be revealed by fire; and the fire
shall try every man's work of what sort it is." Verse 3:15 reads, "If any man's work shall be
burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."

- **Lexical:** "try" is among the renderings of G1381 _dokimazo_, defined as "to test
  (literally or figuratively); by implication, to approve".
- **Text states:** the fire tests the work and not the person. Verse 3:15 keeps the person and
  burns the work.
- **Text states:** the materials are named in 3:12: "gold, silver, precious stones, wood, hay,
  stubble". The test sorts them.

**Inference:** the diagnostic question is not whether a fix worked yesterday. It is which
event will test it, and what evidence of survival looks like. A fix that has never been loaded
is a plan.

---

## The honest limit: 2 Chronicles 20:12

Some situations exhaust both the capacity and the knowledge of the people in them. The text
records that condition as a legitimate move rather than as a failure of nerve.

2 Chronicles 20:12 reads, "O our God, wilt thou not judge them? for we have no might against
this great company that cometh against us; neither know we what to do: but our eyes are upon
thee." **(Text states)**

The verse has three clauses, and each one is a separate admission: no capacity, no plan, and a
fixed orientation. **(Text states)** Proverbs 3:5-6 states the same posture: "Trust in the LORD
with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge
him, and he shall direct thy paths."

What follows in 20:15-17 is narrative, and it must be labelled as such. "Be not afraid nor
dismayed by reason of this great multitude; for the battle is not yours, but God's... Ye shall
not need to fight in this battle: set yourselves, stand ye still, and see the salvation of the
LORD with you." **(Text states)** A leader who reads this as a standing instruction to do
nothing in a crisis has misread the genre. **(Inference)** What carries over is the posture in
20:12, which is an honest report of the limit plus a decision about where to look. The
deliverance in the chapter is specific to a promise given to a specific king, and the text says
so.

---

## Trials as mechanism, not only as obstacle

Some problems do work. The texts say so plainly, and the diagnostic use of that claim is
narrow.

- James 1:2-4: "My brethren, count it all joy when ye fall into divers temptations; Knowing
  this, that the trying of your faith worketh patience. But let patience have her perfect work,
  that ye may be perfect and entire, wanting nothing."
- Romans 5:3-5: "but we glory in tribulations also: knowing that tribulation worketh patience;
  And patience, experience; and experience, hope: And hope maketh not ashamed; because the love
  of God is shed abroad in our hearts by the Holy Ghost which is given unto us."
- Hebrews 12:11: "Now no chastening for the present seemeth to be joyous, but grievous:
  nevertheless afterward it yieldeth the peaceable fruit of righteousness unto them which are
  exercised thereby."

**(Text states)** The chain in Romans 5 is a sequence with named outputs. The texts do not say
that the trial is pleasant. James 1:2 uses the word "count", and Hebrews 12:11 calls the
experience grievous.

- **Lexical:** "trying" in James 1:3 is G1383 _dokimion_, "a testing; by implication,
  trustworthiness".
- **Lexical:** "exercised" in Hebrews 12:11 is G1128 _gymnaso_, "to practise naked (in the
  games), i.e. train (figuratively)".
- **Inference:** the diagnostic question that follows is: what capacity does this failure leave
  behind? A failure that produced a stronger process, a trained team, or a found limit has done
  work. A failure that produced only a story has not.

**A guard belongs with this section.** The texts say that trials produce endurance. They do not
grant anyone the right to inflict trials on other people. Matthew 18:6 states the warning
against causing the failure: "But whoso shall offend one of these little ones which believe in
me, it were better for him that a millstone were hanged about his neck, and that he were
drowned in the depth of the sea." **(Text states)** A leader who manufactures hardship in order
to build character has left the teaching and joined the other category.

---

## The ignored warning: Acts 27

The last voyage of Paul to Rome is a case study in a warning that arrives before the evidence.

- **Text states:** the warning. Acts 27:9-10 reads, "Now when much time was spent, and when
  sailing was now dangerous, because the fast was now already past, Paul admonished them, And
  said unto them, Sirs, I perceive that this voyage will be with hurt and much damage, not only
  of the lading and ship, but also of our lives." Verse 27:9 names the season, and the fast is a
  calendar marker.
- **Text states:** the rejection, and its reason. Verse 27:11 reads, "Nevertheless the centurion
  believed the master and the owner of the ship, more than those things which were spoken by
  Paul." The warning lost to title and to ownership interest.
- **Text states:** the crisis. Verse 27:20 reads, "And when neither sun nor stars in many days
  appeared, and no small tempest lay on us, all hope that we should be saved was then taken
  away." The storm is named Euroclydon in 27:14.
- **Text states:** the word in the crisis. Verses 27:22-26 record the message: no loss of life,
  a shipwreck ahead, and a reason for confidence outside the situation.
- **Text states:** the escape attempt and the correction. Verses 27:30-32 record that the
  sailors tried to leave the ship in the boat, and Paul's instruction to the centurion, "Except
  these abide in the ship, ye cannot be saved."
- **Text states:** the people are restored for the work. Verses 27:33-36 record the meal, "for
  this is for your health", and the effect: "Then were they all of good cheer, and they also took
  some meat."
- **Text states:** the crisis response is what saves them. Verses 27:42-44 record the soldiers'
  plan to kill the prisoners, the centurion's intervention to save Paul, and the outcome:
  "And so it came to pass, that they escaped all safe to land."

- **Lexical:** "taken away" in 27:20 is G4014 _periaireo_, "to remove all around, i.e. unveil,
  cast off (anchor); figuratively, to expiate".

**Inference:** a warning can be correct and still be rejected when it arrives before the
evidence is complete. Four practices follow.

1. Record the warning at the time, with a date and a name. The centurion's decision is in the
   text, and so is Paul's warning.
2. Act on a warning where the cost of acting is small and the downside is existential. This is
   the class of decision that deserves first-principles work.
3. When the failure arrives, change the question. The question moves from who was right to what
   saves the people.
4. In the crisis, the leader keeps the people together. The escape boat in 27:30 is the
   recurring shape of a collapse, because the people with access to the exit leave first.

---

## The diagnosis procedure

Run these steps in order. Steps 1 and 2 come before any interview.

1. **Stabilise.** If harm is active, stop it first. Diagnosis waits. See
   `references/crisis.md`.
2. **State the symptom as an observation.** One sentence, one measure, one date. Separate
   symptoms from each other and rank them by cost.
3. **Locate the failure.** Find the first point in the sequence where the output is wrong.
   Answer the "Where art thou?" question for the process.
4. **Trace the source.** Ask what fed that point, and who made the choice. This is the "Who
   told thee?" question.
5. **Establish the act.** State what was done and by what rule it was permitted. This is the
   "What is this that thou hast done?" question.
6. **Classify the finding.** Cycle or event. Structural or fixable. Decay or break. The class
   determines the kind of fix.
7. **Name the test.** State which storm or fire will prove the fix, and what survival looks
   like.
8. **Assign the owner, the date, and the warning sign.** A diagnosis with no owner repeats.

The steps are worked through in full, with the questions asked at each step, in
`references/diagnosis.md`.

---

## Output format

Use this shape for a diagnosis.

1. **The symptom.** One sentence with a measure and a date.
2. **The location.** The first point where the output goes wrong.
3. **The source and the act.** What fed the failure, and what was done.
4. **The classification.** Cycle or event, structural or fixable, decay or break.
5. **The evidence.** Each claim with its label, and the label on the inference.
6. **The fix and its test.** The change, the owner, the date, and the event that will test it.
7. **What is not known.** The open questions, and the limit of the diagnosis.
8. **Confidence.** What the evidence supports, and what rests on judgement.

Deliver the diagnosis before the judgment. State the facts in the order they were established.
Keep the blame out of the finding, because blame inside a finding teaches the next person to
hide the next failure.

---

## References

- `references/diagnosis.md` holds the full procedure worked through one recurring organizational
  failure, step by step, with the questions asked at each step and the points where the
  diagnosis can go wrong.
- `references/crisis.md` covers crisis response from Acts 27 and Nehemiah 4, with the decisions that
  belong in the first hour separated from the decisions that wait.

## Related skills

- `first-principles-reasoning` is the general engine. It decides what to do. This skill explains
  what went wrong.
- `business-first-principles` holds the axioms, especially A26 (diagnose before you judge), A27
  (friction is structural), A17 (building and keeping), and A25 (undisclosed failure produces
  hiding and blame).
- `body-first-principles` supplies B9 on pain as a signal, B10 on time-boxed urgency, and B23 on small
  failures that kill the whole.
- `scripture-foundations` holds the text, the tools, and the reading rules. The KJV is 1611 English.
