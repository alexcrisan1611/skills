---
name: problem-solving-first-principles
description: Diagnose a failure before anyone assigns blame. Use this skill when the user asks for a root cause analysis, brings a recurring problem, asks why something keeps breaking, wants a post-mortem or a retrospective on a failure, faces a crisis that needs triage, or needs to debug a process, an organization, or a system that fails the same way twice. The core of the method is the interrogation in Genesis 3. It asks where, then what source, then what act, and only then judges. Use this skill when the same outage, complaint, or missed date returns, when a team applied a fix and the problem came back, when a slow decline has no single event to investigate, or when someone dismissed a warning and the crisis arrived anyway. It covers triage, the difference between structural and fixable friction, the storm test, and the honest limit of diagnosis.
---

# Problem Solving First Principles

## What this skill is for

This skill is for diagnosis. It finds where a failure is, what produced it, and what act
carried it, in that order.

It does different work from `first-principles-reasoning`. That skill decides what to do.
This skill explains what went wrong. The decision can then rest on the cause and not on the
symptom.

Three rules govern the work:

1. Judgment comes after diagnosis, never before it. The business axioms state this as A26
   (Diagnose before you judge). Judgment that comes before the diagnosis gives the wrong
   verdict. It also teaches people to hide.
2. Blame is not a finding. A name is not a cause. "The operator was careless" explains nothing
   until you describe the system that permitted the carelessness.
3. The diagnosis must end in a test. A cause that nobody can falsify is a story. The storm test
   and the fire test in this skill name the test in advance.

---

## The interrogation: Genesis 3:9, 3:11, 3:13

God meets the first failure in Scripture with questions. The text gives them in this order:

- Genesis 3:9: "And the LORD God called unto Adam, and said unto him, Where art thou?"
- Genesis 3:11: "And he said, Who told thee that thou wast naked? Hast thou eaten of the tree,
  whereof I commanded thee that thou shouldest not eat?"
- Genesis 3:13: "And the LORD God said unto the woman, What is this that thou hast done? And
  the woman said, The serpent beguiled me, and I did eat."

Text states: verse 3:9 asks for the location. Verse 3:11 asks two questions together. The
first asks for the source ("Who told thee that thou wast naked?"). The second asks about the
act ("Hast thou eaten of the tree...?"). Verse 3:13 then turns to the woman and asks about her
act.

| Order | Question                                     | Verse | What it finds      | Function                           |
| ----- | -------------------------------------------- | ----- | ------------------ | ---------------------------------- |
| 1     | Where art thou?                              | 3:9   | Location and state | Find the failure before judging it |
| 2     | Who told thee that thou wast naked?          | 3:11  | Source             | Trace what fed the state           |
| 3     | Hast thou eaten of the tree...?              | 3:11  | Act                | Find the deed and its rule         |
| 3     | What is this that thou hast done? (to the woman) | 3:13 | Act            | Find the deed and its rule         |

Inference: this skill uses the order where, then source, then act, as its diagnostic method.
The text does not separate source and act into two steps. Verse 3:11 asks them together. The
method separates them because a question about the act asked first gets a defended account.
The question about the state costs little, and it locates the subject. The question about the
source comes before the act, because something produced the act. The verdict comes only after
the questions. In the text it comes in verses 3:14-19 and not in verses 3:9-13.

The answers are also data.

- Text states: Adam answers the location question with fear and hiding: "I heard thy voice in
  the garden, and I was afraid, because I was naked; and I hid myself" (3:10).
- Text states: Adam answers only the act question. He gives a transferred cause: "The woman
  whom thou gavest to be with me, she gave me of the tree, and I did eat" (3:12).
- Text states: the text records no answer to the source question.
- Text states: the woman answers in the same shape: "The serpent beguiled me, and I did eat"
  (3:13).

Inference: the diagnosis records the evasions, and it does not treat them as the finding. A
question that gets no answer is also a result.

- Lexical: "Where" in 3:9 is one of the renderings of H335 _ay_, defined as "where? hence
  how?"
- Lexical: "beguiled" in 3:13 is one of the renderings of H5377 _nasha_, "to lead astray,
  i.e. (mentally) to delude, or (morally) to seduce".

### The two supporting proverbs

Text states: Proverbs 18:13 states the cost of skipping the first question: "He that answereth
a matter before he heareth it, it is folly and shame unto him."

Text states: Proverbs 20:5 states the difficulty: "Counsel in the heart of man is like deep
water; but a man of understanding will draw it out."

- Lexical: "draw it out" is one of the renderings of H1802 _dalah_, defined as "properly, to
  dangle". The definition names letting down a bucket for water, and it adds "figuratively, to
  deliver".
- Lexical: "counsel" is one of the renderings of H6098 _etsah_, "advice; by implication,
  plan; also prudence".

Inference: the account of a failure is below the surface. The person who holds it often cannot
state it directly. The interrogator draws the account out with questions, one at a time. A
request for a summary does not get it.

---

## Cycle or event: Genesis 41

Pharaoh sees two dreams. Joseph reads them as one fourteen-year cycle.

Text states: Genesis 41:1-7 records the two dreams. In each dream, seven good things come
first, and seven bad things come after them and eat them up.

Text states: Genesis 41:25-27 records the reading: "And Joseph said unto Pharaoh, The dream of
Pharaoh is one: God hath shewed Pharaoh what he is about to do. The seven good kine are seven
years; and the seven good ears are seven years: the dream is one. And the seven thin and ill
favoured kine that came up after them are seven years; and the seven empty ears blasted with
the east wind shall be seven years of famine."

Four features of that passage matter for diagnosis:

1. Text states: the two dreams are one. The words "is one" occur once in 41:25 and once in
   41:26. Inference: repetition in the evidence is a signal about the structure of the thing.
2. Inference: the unit is a period, not an incident. The subject changes from a famine to a
   fourteen-year cycle with two halves.
3. Text states: the doubling has a stated meaning. Verse 41:32 reads, "And for that the dream
   was doubled unto Pharaoh twice; it is because the thing is established by God, and God will
   shortly bring it to pass."
4. Text states: the response comes before the need. Genesis 41:34 orders officers to take up a
   fifth part of the land during the years of plenty. Genesis 41:53-57 records that the
   storehouses held food when the second half arrived.

### The test for separating a cycle from an event

| Test              | Question                                                     | If yes                               |
| ----------------- | ------------------------------------------------------------ | ------------------------------------ |
| Repetition        | Did this happen before in the record?                        | Treat it as a cycle                  |
| Period            | Does the interval repeat with about the same spacing?        | Name the period before you act       |
| Upstream position | Is the visible incident downstream of something slower?      | Move the diagnosis upstream          |
| Removal           | Does the incident stop when one actor or one tool changes?   | Treat it as an event                 |
| Prediction        | Does the cycle predict the next occurrence?                  | Use the prediction, and set a review |

Inference: the diagnosis is right when it predicts. The second half of the cycle tested the
reading of Joseph, and the text records the test (41:54).

Not every symptom is part of a cycle. A firm that explains every bad quarter as a cycle never
diagnoses anything. Run the test. When the answer is "event", record that result.

---

## Structural friction and fixable friction

Text states: Genesis 3:17-19 shows that some resistance is permanent. "cursed is the ground for
thy sake; in sorrow shalt thou eat of it all the days of thy life; Thorns also and thistles
shall it bring forth to thee; and thou shalt eat the herb of the field; In the sweat of thy face
shalt thou eat bread, till thou return unto the ground"

Text states: the phrase "all the days of thy life" sets the duration. Inference: thorns are a
cost of operation. They are not a problem that you solve once. The business axiom is A27
(Friction is structural).

Some friction is not structural. Some of it is a defect, and it stops when someone fixes it.
Organizations lose years when they treat a fixable defect as permanent.

### The test for telling the two apart

| Test     | Question                                                      | Structural    | Fixable      |
| -------- | ------------------------------------------------------------- | ------------- | ------------ |
| Return   | Does it come back after a fix?                                | Returns       | Stops        |
| Cause    | Does the fix remove the cause or only the instance?           | Instance only | Cause        |
| Location | Is it a property of the environment or of the local design?   | Environment   | Local design |
| Sharing  | Does a well-run peer face the same friction?                  | Yes           | No           |
| Scaling  | Does the cost scale with activity or with a specific mistake? | Activity      | Mistake      |

Inference: a structural cost gets a budget line, an owner, and a measure. A fixable defect gets
a diagnosis and a removal. The common error goes in both directions. One firm puts its best
engineers on a structural cost and calls it progress. Another firm calls a broken process "just
how the industry works" and stops the search.

---

## Triage and thresholds: Exodus 18

Moses sits as the only judge for a whole nation. The load is more than he can carry. Jethro
diagnoses the problem in one sentence.

Text states: Exodus 18:18 reads, "Thou wilt surely wear away, both thou, and this people that is
with thee: for this thing is too heavy for thee; thou art not able to perform it thyself alone."

Text states: the diagnosis names weight and duration, not attitude. The remedy has four parts:

1. Text states: a tier structure. Exodus 18:21 names "rulers of thousands, and rulers of
   hundreds, rulers of fifties, and rulers of tens".
2. Text states: selection criteria. The same verse names "able men, such as fear God, men of
   truth, hating covetousness".
3. Text states: a threshold rule. Exodus 18:22 reads, "every great matter they shall bring unto
   thee, but every small matter they shall judge".
4. Text states: the leader keeps a defined post. In Exodus 18:19-20, Moses stands for the
   people before God, brings the causes to God, and teaches the ordinances and laws.

Text states: Exodus 18:26 records the result in operation: "And they judged the people at all
seasons: the hard causes they brought unto Moses, but every small matter they judged
themselves."

- Lexical: "too heavy" is one of the renderings of H3515 _kaved_, defined as "heavy;
  figuratively in a good sense (numerous) or in a bad sense (severe, difficult, stupid)". The
  root H3513 has the renderings "glorify", "honour", "be grievous", and "harden". In Hebrew,
  weight and honor share a root.
- Lexical: "wear away" is one of the renderings of H5034 _nabel_, "to wilt; generally, to
  fall away, fail, faint".
- Lexical: "great" is one of the renderings of H1419 _gadol_, and "small" is one of the
  renderings of H6996 _qatan_. Both describe H1697 _dabar_, "a word; by implication, a matter
  (as spoken of) or thing; adverbially, a cause".

Inference: a tier structure without a stated threshold does no work. The load still rises to
the top, because the person who sends a matter decides its size. The threshold is the part of
the plan of Jethro that carries the load. Write it where both tiers can see it.

---

## The first operational crisis: Acts 6:1-7

The first recorded internal complaint in the church is about administration, not doctrine.
Acts 5:1-11 records an earlier failure, the lie of Ananias and Sapphira. Acts 6 is the first
complaint that one group in the church brings against another.

Text states: Acts 6:1 states the complaint: "And in those days, when the number of the
disciples was multiplied, there arose a murmuring of the Grecians against the Hebrews, because
their widows were neglected in the daily ministration." Inference: growth produced the failure.
The failure had a named group, and the complaint was specific.

The response has a fixed shape. Each part of it is a model to copy.

| Verse | Move                                           | Content                                                                         |
| ----- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| 6:2   | Call the whole body together, and state the trade | "It is not reason that we should leave the word of God, and serve tables."   |
| 6:3   | Set criteria, and let the body choose          | "seven men of honest report, full of the Holy Ghost and wisdom"                 |
| 6:3   | Give the delegate real authority over the work | "whom we may appoint over this business"                                        |
| 6:4   | Record what leadership keeps                   | "we will give ourselves continually to prayer, and to the ministry of the word" |
| 6:6   | Appoint in public and with prayer              | "when they had prayed, they laid their hands on them"                           |
| 6:7   | Report the outcome                             | "the word of God increased; and the number of the disciples multiplied"         |

- Lexical: "leave" in 6:2 is one of the renderings of G2641 _kataleipo_, "to leave down,
  i.e. behind; by implication, to abandon, have remaining".
- Lexical: "give ourselves continually" in 6:4 is G4342 _proskartereo_, "to be earnest
  towards, i.e. (to a thing) to persevere, be constantly diligent, or (in a place) to attend
  assiduously all the exercises, or (to a person) to adhere closely to (as a servitor)".
- Inference: the trade in verse 2 is the diagnosis, and the trade in verse 4 is the
  prescription. The apostles state both openly. A leader who delegates and does not name what
  he keeps is not delegating. He is drifting.

---

## Two responses to a threat, not one: Nehemiah 4

Text states: Nehemiah 4:9 states the pair in one sentence: "Nevertheless we made our prayer
unto our God, and set a watch against them day and night, because of them." The verse joins
two responses with "and". It does not offer a choice between them.

The chapter then gives the practical half in detail:

- Text states: the defenders stood where the exposure was. Verse 4:13 reads, "Therefore set I
  in the lower places behind the wall, and on the higher places, I even set the people after
  their families with their swords, their spears, and their bows."
- Text states: both tasks ran at the same time. Verse 4:16 divides the servants in two. Verses
  4:17-18 read, "They which builded on the wall, and they that bare burdens, with those that
  laded, every one with one of his hands wrought in the work, and with the other hand held a
  weapon. For the builders, every one had his sword girded by his side, and so builded."
- Text states: the leader spoke to the fear directly. Verse 4:14 reads, "Be not ye afraid of
  them: remember the LORD, which is great and terrible, and fight for your brethren, your sons,
  and your daughters, your wives, and your houses."
- Text states: there was a rally rule for workers who were far apart. Verses 4:19-20 record
  the spread-out work and the instruction: "In what place therefore ye hear the sound of the
  trumpet, resort ye thither unto us: our God shall fight for us."
- Text states: the strain lasted. It was not one moment. Verse 4:21 reads, "So we laboured in
  the work: and half of them held the spears from the rising of the morning till the stars
  appeared." Verse 4:23 records that nobody took off his clothes except for washing.
- Text states: the chapter also contains the internal report. Verse 4:10 reads, "The strength
  of the bearers of burdens is decayed, and there is much rubbish; so that we are not able to
  build the wall." Inference: the exhaustion is an internal failure mode. It sits next to the
  external threat.
- Text states: the warning came again and again. Verse 4:12 reads, "the Jews which dwelt by
  them came, they said unto us ten times, From all places whence ye shall return unto us they
  will be upon you."

Inference: a response plan that names only one of the two halves is incomplete. The text gives
prayer and preparation as a pair. It gives the practical detail at the same length as the
spiritual detail.

---

## Diagnosing decay: Proverbs 24:30-34

Some failures have no event to investigate. The field is gone, and nobody can point to the day
it went.

Text states: Proverbs 24:30-34 reads, "I went by the field of the slothful, and by the vineyard
of the man void of understanding; And, lo, it was all grown over with thorns, and nettles had
covered the face thereof, and the stone wall thereof was broken down. Then I saw, and considered
it well: I looked upon it, and received instruction. Yet a little sleep, a little slumber, a
little folding of the hands to sleep: So shall thy poverty come as one that travelleth; and thy
want as an armed man."

Inference: the scene contains a diagnosis, and the diagnosis is the phrase "Yet a little
sleep". The failure has no single decision in it. It has a rate.

- Lexical: "grown over" is one of the renderings of H5927 _alah_, defined as "to ascend". Its
  list of renderings includes "grow (over) increase". The word is the ordinary verb for going
  up.
- Lexical: "broken down" in 24:31 is H2040 _haras_, "to pull down or in pieces, break,
  destroy". Its renderings include "break (down, through)" and "pull down".

### Reading a slow failure

| Question                                                             | Why it matters                                                       |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| What is the rate of change, not the state?                           | A state can look acceptable while the rate is fatal                  |
| What is the baseline period?                                         | Measure decay against a known-good season, not against last week     |
| Who owns the asset, and when did they last look?                     | Things without an owner decay without a decision                     |
| What is the maintenance cadence, and how many intervals were missed? | Count the misses. The count is the diagnosis                         |
| What does the wall enclose?                                          | The loss of function follows the loss of boundary                    |

Inference: one event cannot fix a slow failure. Only a maintenance function with a name, a
calendar, and a measure matches the cause. A single burst of effort gives a clean field, and
then the thorns return.

Text states: verse 24:32 shows how the observer works: "Then I saw, and considered it well: I
looked upon it, and received instruction." Inference: to read decay, you must stop on purpose
and look.

---

## The storm test and the fire test

A foundation is tested by what it survives. Name the test before you name the fix.

Text states: Matthew 7:24-27 records the two houses. "And the rain descended, and the floods
came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a
rock... And the rain descended, and the floods came, and the winds blew, and beat upon that
house; and it fell: and great was the fall of it."

- Text states: both houses get the same weather. The text repeats the three elements word for
  word.
- Text states: the difference is in the foundation. Inference: the difference shows only under
  load.
- Lexical: "beat upon" in 7:25 is G4363 _prospipto_, "to fall towards, i.e. (gently)
  prostrate oneself... or (violently) to rush upon (in storm)".
- Lexical: "beat upon" in 7:27 is G4350 _proskopto_, "to strike at, i.e. surge against (as
  water); specially, to stub on, i.e. trip up (literally or figuratively)". The English is the
  same in both verses, but the Greek verb is different.

1 Corinthians 3:10-15 adds the second test. Verse 3:13 reads, "Every man's work shall be made
manifest: for the day shall declare it, because it shall be revealed by fire; and the fire
shall try every man's work of what sort it is." Verse 3:15 reads, "If any man's work shall be
burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."

- Lexical: "try" is one of the renderings of G1381 _dokimazo_, defined as "to test
  (literally or figuratively); by implication, to approve".
- Text states: the fire tests the work and not the person. Verse 3:15 keeps the person and
  burns the work.
- Text states: verse 3:12 names the materials: "gold, silver, precious stones, wood, hay,
  stubble". The test sorts them.

Inference: the diagnostic question is not whether a fix worked yesterday. Ask which event will
test it, and what evidence of survival looks like. A fix that never carried a load is a plan.

---

## The honest limit: 2 Chronicles 20:12

Some situations use up both the capacity and the knowledge of the people in them. The text
records that condition as a legitimate move, not as a failure of nerve.

Text states: 2 Chronicles 20:12 reads, "O our God, wilt thou not judge them? for we have no
might against this great company that cometh against us; neither know we what to do: but our
eyes are upon thee."

Text states: the verse has four clauses:

1. An appeal: "wilt thou not judge them?"
2. No capacity: "we have no might against this great company".
3. No plan: "neither know we what to do".
4. A fixed direction: "our eyes are upon thee".

Text states: Proverbs 3:5-6 states the same posture: "Trust in the LORD with all thine heart;
and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct
thy paths."

Text states: 20:15-17 is narrative. Verse 20:15 speaks to "all Judah, and ye inhabitants of
Jerusalem, and thou king Jehoshaphat". The message reads, "Be not afraid nor dismayed by reason
of this great multitude; for the battle is not yours, but God's... Ye shall not need to fight
in this battle: set yourselves, stand ye still, and see the salvation of the LORD with you".
Verses 20:16-17 also order the people to move: "To morrow go ye down against them" and "to
morrow go out against them".

Inference: a leader who reads this as a standing instruction to do nothing in a crisis misreads
the genre. The promise was for one people in one battle, and even that promise ordered them to
go out. What carries over is the posture in 20:12. It is an honest report of the limit, plus a
decision about where to look.

---

## Trials as mechanism, not only as obstacle

Some problems do work. The texts say so plainly, and the use of that claim in diagnosis is
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

Text states: the chain in Romans 5 is a sequence with named outputs. The texts do not say that
the trial is pleasant. James 1:2 uses the word "count", and Hebrews 12:11 calls the experience
grievous.

- Lexical: "trying" in James 1:3 is G1383 _dokimion_, "a testing; by implication,
  trustworthiness".
- Lexical: "exercised" in Hebrews 12:11 is G1128 _gymnazo_, "to practise naked (in the
  games), i.e. train (figuratively)".
- Inference: the diagnostic question that follows is this: what capacity does this failure
  leave behind? A failure that produced a stronger process, a trained team, or a found limit
  did work. A failure that produced only a story did not.

This section needs a guard. The texts say that trials produce endurance. They do not give
anyone the right to put trials on other people. Text states: Matthew 18:6 warns against the
person who causes the fall of a believer: "But whoso shall offend one of these little ones
which believe in me, it were better for him that a millstone were hanged about his neck, and
that he were drowned in the depth of the sea." Inference: the verse speaks of "these little
ones which believe in me", not of employees. Applied to a workplace, a manager who makes
hardship on purpose to build character leaves the teaching on trials. He joins the person whom
Matthew 18:6 warns.

---

## The ignored warning: Acts 27

The last voyage of Paul to Rome is a case study. It shows a warning that arrives before the
evidence.

- Text states: the warning. Acts 27:9-10 reads, "Now when much time was spent, and when
  sailing was now dangerous, because the fast was now already past, Paul admonished them, And
  said unto them, Sirs, I perceive that this voyage will be with hurt and much damage, not only
  of the lading and ship, but also of our lives." Verse 27:9 names the season. Inference: the
  fast is a calendar marker.
- Text states: the rejection, and the reasons the text gives. Verse 27:11 reads, "Nevertheless
  the centurion believed the master and the owner of the ship, more than those things which were
  spoken by Paul." Verse 27:12 adds, "because the haven was not commodious to winter in, the
  more part advised to depart thence also". Verse 27:13 adds, "when the south wind blew softly,
  supposing that they had obtained their purpose".
- Inference: the text gives four reasons. The centurion trusted the master and the owner more
  than Paul. The harbor was poor for the winter. The majority advised to sail. The wind was
  soft. The standing of the speakers was one reason among four. The evidence of a gentle south
  wind also argued against the warning.
- Text states: the crisis. Verse 27:20 reads, "And when neither sun nor stars in many days
  appeared, and no small tempest lay on us, all hope that we should be saved was then taken
  away." Verse 27:14 names the storm Euroclydon.
- Text states: Paul names the rejected warning in the middle of the storm. Verse 27:21 reads,
  "Sirs, ye should have hearkened unto me, and not have loosed from Crete, and to have gained
  this harm and loss."
- Text states: the word in the crisis. Verses 27:22-26 record the message: no loss of life, a
  shipwreck ahead, and a reason for confidence from outside the situation.
- Text states: the escape attempt and the correction. Verses 27:30-32 record that the sailors
  tried to leave the ship in the boat. They also record the instruction of Paul to the
  centurion: "Except these abide in the ship, ye cannot be saved."
- Text states: the people get their strength back for the work. Verses 27:33-36 record the
  meal, "for this is for your health", and the effect: "Then were they all of good cheer, and
  they also took some meat."
- Text states: all reach land. Verses 27:42-44 record the plan of the soldiers to kill the
  prisoners, and the centurion who stops them, "willing to save Paul". They record the outcome:
  "And so it came to pass, that they escaped all safe to land."
- Text states: the text credits the rescue to the promise of God in 27:24, "God hath given thee
  all them that sail with thee", and to the will of the centurion to save Paul in 27:43.
  Inference: the instructions of Paul in the crisis are part of the account. The text does not
  name them as the cause of the rescue.

- Lexical: "taken away" in 27:20 is G4014 _periaireo_, "to remove all around, i.e. unveil,
  cast off (anchor); figuratively, to expiate".

Inference: a warning can be correct, and people can still reject it when it comes before the
evidence is complete. Four practices follow:

1. Record the warning at the time, with a date and a name. The text records the decision of
   the centurion, and it also records the warning of Paul.
2. Act on a warning when the cost of acting is small and the downside is existential. This is
   the class of decision that needs first-principles work.
3. When the failure arrives, change the question. The question moves from who was right to what
   saves the people. Paul is a counter-case. He raises the question of who was right in the
   middle of the crisis (27:21). He raises it to restore trust in his next instruction (27:22),
   and then he moves on. Raise it only for that purpose, and only briefly.
4. In the crisis, the leader keeps the people together. The escape boat in 27:30 shows the
   usual shape of a collapse. The people with access to the exit leave first.

---

## The diagnosis procedure

Run these steps in order. Do steps 1 and 2 before any interview.

1. Stabilize. If harm is active, stop it first. Diagnosis waits. See `references/crisis.md`.
2. State the symptom as an observation. Use one sentence, one measure, one date. Separate the
   symptoms from each other, and rank them by cost.
3. Locate the failure. Find the first point in the sequence where the output is wrong. This
   answers the "Where art thou?" question for the process.
4. Trace the source. Ask what fed that point, and who made the choice. This is the "Who told
   thee?" question.
5. Find the act. State what was done, and by what rule the act was permitted. This is the
   "Hast thou eaten of the tree...?" question of 3:11. Verse 3:13 puts it to the woman as "What
   is this that thou hast done?"
6. Classify the finding. Decide cycle or event, structural or fixable, decay or break. The class
   decides the kind of fix.
7. Name the test. State which storm or fire will prove the fix, and what survival looks like.
8. Assign the owner, the date, and the warning sign. A diagnosis with no owner repeats.

`references/diagnosis.md` works through the steps in full, with the questions to ask at each
step.

---

## Output format

Use this shape for a diagnosis:

1. The symptom: one sentence with a measure and a date.
2. The location: the first point where the output goes wrong.
3. The source and the act: what fed the failure, and what was done.
4. The classification: cycle or event, structural or fixable, decay or break.
5. The evidence: each claim with its label, including the label on each inference.
6. The fix and its test: the change, the owner, the date, and the event that will test it.
7. What is not known: the open questions, and the limit of the diagnosis.
8. Confidence: what the evidence supports, and what rests on judgment.

Deliver the diagnosis before the judgment. State the facts in the order that you found them.
Keep the blame out of the finding. Blame inside a finding teaches the next person to hide the
next failure.

---

## References

- `references/diagnosis.md` works the full procedure through one recurring organizational
  failure, step by step. It gives the questions to ask at each step and the points where the
  diagnosis can go wrong.
- `references/crisis.md` covers crisis response from Acts 27 and Nehemiah 4. It separates the
  decisions that belong in the first hour from the decisions that wait.

## Related skills

- `first-principles-reasoning` is the general engine. It decides what to do. This skill explains
  what went wrong.
- `business-first-principles` holds the axioms. The most relevant are A26 (Diagnose before you
  judge), A27 (Friction is structural), A17 (Building and keeping are equal partners), and A25
  (Undisclosed failure produces hiding and blame).
- `body-first-principles` supplies B9 (Pain is a signal, and the signal must be preserved), B10
  (Acute inflammation heals. Chronic inflammation destroys.), and B23 (Small failures kill the
  whole). B9 covers pain as a signal, B10 covers urgency with a time limit, and B23 covers small
  failures that kill the whole.
- `scripture-foundations` holds the text, the tools, and the reading rules. The KJV text is
  1611 English.
