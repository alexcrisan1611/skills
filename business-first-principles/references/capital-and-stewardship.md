# Capital and Stewardship

Money, debt, reserves, and the accounting of capital. This file collects what Scripture states
about each, separates that from what I infer, and names the friction that makes the inference
hard to apply.

## Method and labels

Same convention as `axioms.md`: **Text states** / **Lexical** / **Inference** / **Speculation**.
Verses are quoted from the KJV as returned by `scripture.ts`. Strong's definitions are quoted
verbatim from `lexicon.ts`.

The governing axioms for this file are **A1** (all value is derived), **A13** (provision precedes
assignment), **A15** (work is bounded; rest is structural), **A31** (recovery is provided, and it
costs something that is not you), and **A2** (the default state is formless and empty — decay is
the baseline, which is what makes reserves a design requirement rather than a preference).

**One warning before the material.** The Bible's economic passages are addressed to a
pre-monetary, agrarian, covenant community, and they are addressed to _persons_ far more often
than to _firms_. A modern limited-liability company is not the addressee of Leviticus 25. The
inferences in this file are made with that gap visible. Where the gap is large, it is flagged.

---

## Contents

- [Part 1. The parable of the talents (Matthew 25:14–30)](#part-1-the-parable-of-the-talents)
  - [The word is a weight of money, not an ability](#the-word-is-a-weight-of-money-not-an-ability)
  - [The allocation is unequal and stated as deliberate](#the-allocation-is-unequal-and-stated-as-deliberate)
  - [The accounting is the point](#the-accounting-is-the-point)
  - [Verse 27: even a bank deposit would have satisfied the master](#verse-27-even-a-bank-deposit-would-have-satisfied-the-master)
  - [The reward is authority, not money](#the-reward-is-authority-not-money)
- [Part 2. The parable of the minas (Luke 19:11–27)](#part-2-the-parable-of-the-minas)
  - [A different allocation principle](#a-different-allocation-principle)
  - [The same accounting, the same verdict](#the-same-accounting-the-same-verdict)
  - [The two parables read together](#the-two-parables-read-together)
- [Part 3. Counting the cost (Luke 14:28–32)](#part-3-counting-the-cost)
  - [The tower: sufficiency to finish](#the-tower-sufficiency-to-finish)
  - [The king: comparative assessment before engagement](#the-king-comparative-assessment-before-engagement)
  - [What the two parables do not say](#what-the-two-parables-do-not-say)
- [Part 4. Debt and its instruments](#part-4-debt-and-its-instruments)
  - [The borrower is servant to the lender (Proverbs 22:7)](#the-borrower-is-servant-to-the-lender)
  - [Surety for a neighbour (Proverbs 6:1–5)](#surety-for-a-neighbour)
  - [No usury against the poor (Exodus 22:25–27; Leviticus 25:35–37)](#no-usury-against-the-poor)
  - [The pledge and the millstone (Exodus 22:26–27; Deuteronomy 24:6, 10–13)](#the-pledge-and-the-millstone)
  - [The year of release (Deuteronomy 15:1–11)](#the-year-of-release)
- [Part 5. Joseph and the seven-year cycle (Genesis 41; 47)](#part-5-joseph-and-the-seven-year-cycle)
  - [The interpretation, and the refusal to take credit (41:16)](#the-interpretation-and-the-refusal-to-take-credit)
  - [The storage plan (41:33–36)](#the-storage-plan)
  - [The execution and the countercyclical sale (41:47–57)](#the-execution-and-the-countercyclical-sale)
  - [The painful consolidation (47:13–26)](#the-painful-consolidation)
- [Part 6. Jubilee and the limits on accumulation (Leviticus 25)](#part-6-jubilee-and-the-limits-on-accumulation)
  - [The sabbath of the land](#the-sabbath-of-the-land)
  - [The jubilee: release, return, redemption](#the-jubilee-release-return-redemption)
  - [No permanent alienation of the inheritance](#no-permanent-alienation-of-the-inheritance)
  - [Pricing by the years remaining](#pricing-by-the-years-remaining)
  - [What this implies about accumulation](#what-this-implies-about-accumulation)
- [Part 7. Reserves, diversification, and the limits of hoarding](#part-7-reserves-diversification-and-the-limits-of-hoarding)
  - [Cast thy bread upon the waters (Ecclesiastes 11:1–6)](#cast-thy-bread-upon-the-waters)
  - [A portion to seven, and also to eight](#a-portion-to-seven-and-also-to-eight)
  - [He that loveth silver shall not be satisfied (Ecclesiastes 5:10–11)](#he-that-loveth-silver-shall-not-be-satisfied)
  - [Treasure and oil in the dwelling of the wise (Proverbs 21:20)](#treasure-and-oil-in-the-dwelling-of-the-wise)
  - [Know the state of thy flocks (Proverbs 27:23–27)](#know-the-state-of-thy-flocks)
  - [Wages put into a bag with holes (Haggai 1:5–6)](#wages-put-into-a-bag-with-holes)
  - [The rich fool's barns (Luke 12:15–21)](#the-rich-fools-barns)
- [Part 8. Stewardship as a category (Luke 16:1–13)](#part-8-stewardship-as-a-category)
  - [The word: G3623 oikonomos](#the-word-g3623-oikonomos)
  - [The accusation and the audit](#the-accusation-and-the-audit)
  - [What the master commends, and what he does not](#what-the-master-commends-and-what-he-does-not)
  - [Faithful in the least](#faithful-in-the-least)
- [Part 9. Contentment and the charge to the rich (1 Timothy 6:6–19)](#part-9-contentment-and-the-charge-to-the-rich)
- [Part 10. What is already in the house (2 Kings 4:1–7)](#part-10-what-is-already-in-the-house)
- [Part 11. Working rules](#part-11-working-rules)
- [Appendix: verification log](#appendix-verification-log)

---

## Part 1. The parable of the talents

**Text (Matthew 25:14–30, KJV)**

> 14. For the kingdom of heaven is as a man travelling into a far country, who called his own
>     servants, and delivered unto them his goods.
> 15. And unto one he gave five talents, to another two, and to another one; to every man
>     according to his several ability; and straightway took his journey.
> 16. Then he that had received the five talents went and traded with the same, and made them
>     other five talents.
> 17. And likewise he that had received two, he also gained other two.
> 18. But he that had received one went and digged in the earth, and hid his lord's money.
> 19. After a long time the lord of those servants cometh, and reckoneth with them.
> 20. And so he that had received five talents came and brought other five talents, saying, Lord,
>     thou deliveredst unto me five talents: behold, I have gained beside them five talents more.
> 21. His lord said unto him, Well done, thou good and faithful servant: thou hast been faithful
>     over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.
> 22. He also that had received two talents came and said, Lord, thou deliveredst unto me two
>     talents: behold, I have gained two other talents beside them.
> 23. His lord said unto him, Well done, good and faithful servant; thou hast been faithful over a
>     few things, I will make thee ruler over many things: enter thou into the joy of thy lord.
> 24. Then he which had received the one talent came and said, Lord, I knew thee that thou art an
>     hard man, reaping where thou hast not sown, and gathering where thou hast not strawed:
> 25. And I was afraid, and went and hid thy talent in the earth: lo, there thou hast that is
>     thine.
> 26. His lord answered and said unto him, Thou wicked and slothful servant, thou knewest that I
>     reap where I sowed not, and gather where I have not strawed:
> 27. Thou oughtest therefore to have put my money to the exchangers, and then at my coming I
>     should have received mine own with usury.
> 28. Take therefore the talent from him, and give it unto him which hath ten talents.
> 29. For unto every one that hath shall be given, and he shall have abundance: but from him that
>     hath not shall be taken away even that which he hath.
> 30. And cast ye the unprofitable servant into outer darkness: there shall be weeping and
>     gnashing of teeth.

### The word is a weight of money, not an ability

**Lexical (verbatim).** **G5007 τάλαντον (_talanton_)** — "equivalent to G5342 (φέρω)); a balance
(as supporting weights), i.e. (by implication) a certain weight (and thence a coin or rather sum
of money) or 'talent'." From the neuter of a presumed derivative of the original form of _tlao_
(to bear). KJV rendering: "talent."

**Text states:** The thing delivered is "his goods" (v. 14) and "my money" (v. 27). The master
calls it money twice. Whatever else the parable is about, the object in it is capital.

**The anachronism.** The popular reading of this parable — "use your God-given abilities" — rests
on a modern sense of the English word _talent_. In 1611, and in the Greek, a _talanton_ is a
weight of metal used as money. The sense "natural aptitude" is a later development in English,
derived from this very parable. Reading the parable back through its own later influence is
circular.

This is stated plainly in `skills/scripture-foundations/SKILL.md`, and it is worth repeating here
because it changes the parable's point: **the parable is about capital entrusted, allocated
unequally, and accounted for** — a sharper and more demanding claim than the one usually drawn
from it.

**What the lexicon does not establish.** Strong's gives no figure. It does not say 6,000 denarii,
and it does not mention denarii at all (verified by direct search of the Strong's source data —
no occurrence of "denarii"). The commonly cited equivalence — one talent ≈ 6,000 denarii ≈ about
20 years of a labourer's wages — is a **historical and numismatic claim from outside these
tools**. It is consistent with one thing Scripture does state, namely Matthew 20:2: "And when he
had agreed with the labourers for a penny a day, he sent them into his vineyard." The "penny"
there is G1220 δηνάριον (_denarion_) — "a denarius (or ten asses)" — a day's wage. If a talent
were 6,000 denarii, then 6,000 days at 300 working days a year is 20 years. The arithmetic
coheres; the anchor figure is unverified here. **Use the magnitude qualitatively — this is very
large money — and do not build an argument on the precise multiple.**

**Inference:** because the unit is enormous, the parable's stakes are enormous. Five talents is
not a test of diligence with pocket change. It is the allocation of a working lifetime's worth of
capital, three times over, to three servants.

### The allocation is unequal and stated as deliberate

**Text states:** "And unto one he gave five talents, to another two, and to another one; to every
man according to his several ability" (v. 15).

Four observations:

1. **Text states:** The amounts differ. 5 / 2 / 1. Not equal.
2. **Text states:** The difference is _explained_: "according to his several ability." The
   allocation is a deliberate judgment about capacity, made by the owner, before any work is
   done.
3. **Lexical:** "ability" is **G1411 δύναμις (_dynamis_)** — "force (literally or figuratively);
   specially, miraculous power (usually by implication, a miracle itself)." KJV: "ability,
   abundance, meaning, might(-ily, -y, -y deed), (worker of) miracle(-s), power, strength,
   violence, mighty (wonderful) work." Note that this is _power_ or _capacity_, not skill. The
   allocation tracks the servants' _capacity to deploy_, which is a different thing from their
   diligence.
4. **Text states:** The master does not stay to supervise. "And straightway took his journey"
   (v. 15). The servants act without oversight.

**Inference.** Three consequences follow.

- **Unequal allocation is not injustice.** The master is entitled to allocate his own goods, and
  the text presents the differentiated allocation as the setup, not as the problem. The servant
  who received one does not complain about the allocation; he complains about the master's
  character (v. 24). The text does not treat the complaint as legitimate.
- **Allocation tracks capacity, and capacity is the allocator's judgment.** The servants did not
  self-select their amounts. A capital allocator who distributes equally regardless of capacity
  is not being fair; they are declining to make the judgment the text shows being made.
- **Absence of supervision is the design.** The master leaves. The servants work unobserved for
  "a long time" (v. 19). This is the same structure as Genesis 39: Joseph is left in charge with
  nobody watching (Genesis 39:6, "he left all that he had in Joseph's hand"). Trust is expressed
  as absence, and absence is what makes the accounting meaningful.

**Note on "ability" and A11.** The differentiated allocation connects to the "after his kind"
formula (A11): what is planted determines what comes up. The master allocates according to
capacity, which is an _inference about yield_. This is what a capital allocator does.

### The accounting is the point

**Text states:** "After a long time the lord of those servants cometh, and reckoneth with them"
(v. 19).

**Lexical:** "reckoneth" is the accounting verb — G3056 λόγος (_logos_) in its commercial sense.
Strong's: "something said (including the thought); by implication, a topic (subject of
discourse), also reasoning (the mental faculty) or motive; **by extension, a computation**…" KJV
renderings include "account," "reckoning," "reason," "reckon." Note the double life of the word:
it is _word_ and it is _computation_. The same term carries both.

**Text states (the structure of the reckoning):**

- Both profitable servants report the same way: "thou deliveredst unto me X talents: behold, I
  have gained beside them X more" (vv. 20, 22).
- Both receive the same commendation: "Well done, thou good and faithful servant: thou hast been
  faithful over a few things, I will make thee ruler over many things" (vv. 21, 23).
- The 2-talent servant receives _identical_ treatment to the 5-talent servant. Same words, same
  reward.

**Inference.** This is the parable's most important and least noticed point: **the verdict tracks
faithfulness, not absolute return.** The 2-talent servant produced 40% of the 5-talent servant's
absolute gain and received the same sentence. What was assessed was the ratio of result to
allocation, and the ratio was 100% in both cases.

**Business consequences:**

- **Allocation and performance must be assessed together.** A capital allocation process that
  compares absolute returns across differently-sized units is measuring the wrong thing.
- **A small unit that doubles is not underperforming a large unit that adds 50%.** It is
  outperforming. The parable states this by construction.
- **The accounting is scheduled, not continuous.** "After a long time." The reckoning has a date.
  This is A8 (cadence) applied to capital: without a scheduled reckoning, there is no
  accountability, and without accountability the allocation cannot be corrected.
- **The accounting is face-to-face and verbal.** The servants state their numbers themselves.
  They are not audited first. Self-reporting before a standard is the pattern.

### Verse 27: even a bank deposit would have satisfied the master

**Text states:** "Thou oughtest therefore to have put my money to the exchangers, and then at my
coming I should have received mine own with usury."

This verse is the key to the parable and it is routinely skipped. The master is explicit about
the _minimum_ acceptable outcome. He does not say "you should have traded and doubled it." He
says: you should at least have deposited it, so that I would have received my own back _with
usury_.

**Lexical:** "usury" here is **G5110 τόκος (_tokos_)** — "interest on money loaned (as a
produce)." From the base of G5088 τίκτω (_tikto_), "to bring forth." The word for interest is the
word for _bearing_. The Greek carries no moral charge here; it is simply the yield on a deposit.

**Text states (what the master does _not_ say):** He does not require the servant to have matched
the other two. He requires only that the capital not have been _idle_.

**Inference — and this is the parable's sharp edge:** the sin is **doing nothing**. Not
underperformance. Not insufficient ambition. Not a low return. Doing nothing at all with capital
entrusted to you, when even the most passive available instrument would have produced something.

**This reframes the whole parable.** Read as a parable about abilities, it says "develop your
gifts." Read as a parable about capital — which is what it is — it says: **idle capital is a
moral failure, and the minimum standard is the risk-free rate.**

**Business consequences:**

- **Cash sitting in a non-interest-bearing account is not prudence; it is the one talent in the
  ground.** The parable's own standard is the bank rate. A treasury policy that leaves operating
  cash uninvested is below the master's floor.
- **The comparison set is not your peers; it is the passive alternative.** A capital project that
  returns less than the risk-free rate destroyed value relative to doing nothing, and doing
  nothing was the _condemned_ option. The bar is therefore higher than it first appears.
- **"I preserved it" is the servant's defence and it fails.** Verse 25: "lo, there thou hast that
  is thine." Preservation was the stated goal, and it was rejected.
- **It applies to reserves too, and this is a tension.** A31 says reserves exist to pay for
  recovery. The parable says idle capital is condemned. The resolution is that a reserve is
  _allocated to a specific risk_ — it is doing work — whereas hoarding is capital with no
  assignment. See Part 7.

### The reward is authority, not money

**Text states:** "thou hast been faithful over a few things, I will make thee ruler over many
things" (vv. 21, 23). And verse 28: "Take therefore the talent from him, and give it unto him
which hath ten talents."

Two observations:

1. **Text states:** The reward is _scope_ — rulership over more — not consumption. The faithful
   servants do not receive the talents for themselves; they receive _authority_.
2. **Text states:** The unfaithful servant's talent is _reallocated_, not destroyed. The capital
   is not withdrawn from the system; it is moved to a different manager.

**Inference:** the parable describes a _capital allocation feedback loop_ — performance is
rewarded with increased allocation, and non-performance with decreased allocation. Verse 29
states the mechanism as a general rule: "For unto every one that hath shall be given, and he
shall have abundance: but from him that hath not shall be taken away even that which he hath."

**Business consequences:**

- **Capital allocation should be a ratchet in both directions.** Most organisations ratchet up
  and never down: a funded project gets more, and an unfunded one never gets considered again.
  The parable reallocates _away_ from the unproductive manager, explicitly.
- **The reallocation is not a punishment for its own sake.** The capital goes to a manager who
  has demonstrated the ability to deploy it. The point is the capital, not the servant.
- **Authority is the reward currency.** Promotion as the reward for stewardship is the pattern
  here, and it connects to A12: authority delegated, in response to demonstrated stewardship of
  a smaller authority.

---

## Part 2. The parable of the minas

**Text (Luke 19:11–27, KJV)**

> 11. And as they heard these things, he added and spake a parable, because he was nigh to
>     Jerusalem, and because they thought that the kingdom of God should immediately appear.
> 12. He said therefore, A certain nobleman went into a far country to receive for himself a
>     kingdom, and to return.
> 13. And he called his ten servants, and delivered them ten pounds, and said unto them, Occupy
>     till I come.
> 14. But his citizens hated him, and sent a message after him, saying, We will not have this man
>     to reign over us.
> 15. And it came to pass, that when he was returned, having received the kingdom, then he
>     commanded these servants to be called unto him, to whom he had given the money, that he might
>     know how much every man had gained by trading.
> 16. Then came the first, saying, Lord, thy pound hath gained ten pounds.
> 17. And he said unto him, Well, thou good servant: because thou hast been faithful in a very
>     little, have thou authority over ten cities.
> 18. And the second came, saying, Lord, thy pound hath gained five pounds.
> 19. And he said likewise to him, Be thou also over five cities.
> 20. And another came, saying, Lord, behold, here is thy pound, which I have kept laid up in a
>     napkin:
> 21. For I feared thee, because thou art an austere man: thou takest up that thou layedst not
>     down, and reapest that thou didst not sow.
> 22. And he saith unto him, Out of thine own mouth will I judge thee, thou wicked servant. Thou
>     knewest that I was an austere man, taking up that I laid not down, and reaping that I did not
>     sow:
> 23. Wherefore then gavest not thou my money into the bank, that at my coming I might have
>     required mine own with usury?
> 24. And he said unto them that stood by, Take from him the pound, and give it to him that hath
>     ten pounds.
> 25. (And they said unto him, Lord, he hath ten pounds.)
> 26. For I say unto you, That unto every one which hath shall be given; and from him that hath
>     not, even that he hath shall be taken away from him.
> 27. But those mine enemies, which would not that I should reign over them, bring hither, and
>     slay them before me.

### A different allocation principle

**Lexical:** "pound" is **G3414 μνᾶ (_mna_)** — "a mna (i.e. mina), a certain weight." KJV
rendering: "pound." Note: it is a _weight_, like the talent, but a different and much smaller
one. The commonly cited ratio (1 talent = 60 minas) is **not stated in Strong's** and is
**unverified here**. What is verifiable: it is a weight of money, and the amounts differ from the
talent parable's.

**Text states (the contrast with Matthew 25):**

|                    | Matthew 25 (talents)               | Luke 19 (minas)                                  |
| ------------------ | ---------------------------------- | ------------------------------------------------ |
| Number of servants | 3 named                            | 10                                               |
| Amount given       | 5 / 2 / 1 — **unequal**            | "ten pounds" — **equal** (v. 13)                 |
| Basis stated       | "according to his several ability" | not stated                                       |
| Results            | 5→10, 2→4, 1→1                     | 1→10, 1→5, 1→1                                   |
| Reward             | "ruler over many things"           | "authority over ten cities" / "over five cities" |

**Text states:** In Luke the ten servants each receive the _same_ amount. The results differ
enormously (10x, 5x, 1x). And the reward is _proportional to the result_: ten cities for ten
pounds, five cities for five pounds.

**Inference — and this is the point of reading the two parables together:** the two parables
describe two different allocation principles, and both are presented as legitimate.

- **Matthew's principle:** allocate _unequally_, according to capacity, and assess by
  faithfulness (ratio).
- **Luke's principle:** allocate _equally_, and assess by result (absolute gain), rewarding
  proportionally.

**This is a genuinely important finding for a capital allocator**, and it cuts against the common
assumption that there is one right way to distribute resources. The text presents both. What is
constant across the two parables is:

1. **Capital is delivered to servants, not owned by them.** Both.
2. **The owner leaves and returns.** Both.
3. **There is a reckoning.** Both.
4. **Idleness is condemned.** Both (Matthew 25:27; Luke 19:23 — the same bank-deposit standard).
5. **The reward is authority over more.** Both.
6. **The unproductive manager's capital is reallocated.** Both.

**Business consequences:**

- **The allocation principle is a design choice, not a doctrine.** Unequal-by-capacity and
  equal-by-default are both defensible. What is not defensible is having no stated principle.
- **Equal allocation is a test of the managers, not a statement about them.** In Luke, equal
  inputs with unequal outputs is the _measurement instrument_. That is what a controlled
  experiment is.
- **Unequal allocation is a statement of confidence.** In Matthew, the allocation itself is a
  judgment. That is what a portfolio bet is.
- **A business should know which one it is running.** Hiring a cohort of ten and giving each the
  same resources, then comparing results, is Luke's structure. Giving the proven team five times
  the resources is Matthew's. Both are in Scripture; confusion between them produces accusations
  of unfairness that have no basis in the text.

### The same accounting, the same verdict

**Text states:** Luke 19:15 — "And it came to pass, that when he was returned, having received the
kingdom, then he commanded these servants to be called unto him, to whom he had given the money,
that he might know how much every man had gained by trading." The purpose of the return is stated as
_information_.

**Text states (the third servant's defence and its refutation):** Verses 20–22. The servant's
excuse is the master's _character_: "thou art an austere man." The master does not dispute the
characterisation; he adopts it for the sake of argument — "Out of thine own mouth will I judge
thee… Thou knewest that I was an austere man" — and then makes the decisive point: **if that is
what you believed, it made your behaviour worse, not better.** A hard master would have required
at least the bank rate. Fear of a hard master is not a reason to do nothing; it is a reason to do
the minimum.

**Inference:** the servant's error was not a wrong view of the master. It was the failure to
reason consistently from his own view. **This is a general failure mode in business: an operator
who believes the market is brutal and then behaves as if it were forgiving.**

### The two parables read together

A note on the surrounding material, since Luke 19:11 states the parable's occasion: "because they
thought that the kingdom of God should immediately appear." **Text states:** the parable is
explicitly about _delay_ — "Occupy till I come" (v. 13) — and about what happens in the interval.
The insertion of the enemies (v. 14, v. 27) makes the delay adversarial.

**Inference:** the operational reading is that the interval between allocation and reckoning is
(a) long, (b) unsupervised, and (c) contested. That is the environment in which capital
stewardship happens.

---

## Part 3. Counting the cost

**Text (Luke 14:28–32, KJV)**

> 28. For which of you, intending to build a tower, sitteth not down first, and counteth the
>     cost, whether he have sufficient to finish it?
> 29. Lest haply, after he hath laid the foundation, and is not able to finish it, all that behold
>     it begin to mock him,
> 30. Saying, This man began to build, and was not able to finish.
> 31. Or what king, going to make war against another king, sitteth not down first, and consulteth
>     whether he be able with ten thousand to meet him that cometh against him with twenty thousand?
> 32. Or else, while the other is yet a great way off, he sendeth an ambassage, and desireth
>     conditions of peace.

### The tower: sufficiency to finish

**Observations:**

1. **Text states:** The action is "sitteth not down first." The counting is _prior_ to the
   building, and it is a distinct act — sitting down, not building.
2. **Text states:** The question is not "is the tower worth building" but "**whether he have
   sufficient to finish it**." The test is sufficiency to _completion_, not sufficiency to
   _start_.
3. **Text states:** The failure mode is specific: "after he hath laid the foundation, and is not
   able to finish it." The foundation is laid. The failure is at the gap between foundation and
   completion.
4. **Text states:** The consequence is _public mockery_ — "all that behold it begin to mock him."
   The cost of the failure includes reputation, and it is not recoverable by abandoning the
   project quietly, because the foundation is visible.
5. **Text states:** The counting is presented as _obvious_ — "which of you… sitteth not down
   first?" The rhetorical form implies that not counting is the surprising behaviour, not the
   reverse.

**Lexical:** "counteth" is **G5585 ψηφίζω (_psephizo_)** — from _psephos_, a pebble used for
reckoning. It is a _calculation_ verb. KJV: "count." **Text states:** the verb is arithmetical,
not deliberative. This is not a call to think about it; it is a call to compute.

**Inference:** the unit of analysis is the _whole project_, and the required test is whether
total resources cover total cost. The foundation is where the money is most visible and least
recoverable, which is why laying it before counting is the specific failure named.

**Business consequences:**

- **Count to completion, not to start.** A project funded to 60% is not 60% funded; it is a
  foundation with no tower, and the 60% is stranded.
- **The stranded cost is the visible one.** Observation 4: the mockery is because the foundation
  can be seen. Abandoned projects are public in a way that unstarted ones are not.
- **"Sufficient to finish" is a capital structure question, not a budget question.** It includes
  the reserve for the overrun, which connects to A27 (friction is structural) and A31 (recovery
  costs something).
- **The rhetorical form is the challenge.** The text presents counting as the obvious thing
  everyone does. Most failed projects were not counted to completion; they were counted to the
  first milestone.

### The king: comparative assessment before engagement

**Observations:**

1. **Text states:** The king "sitteth not down first, and consulteth." The same prior act of
   sitting down, the same sequence.
2. **Text states:** The assessment is _comparative_: "whether he be able with ten thousand to
   meet him that cometh against him with twenty thousand." His own force against the other's
   force. Not his own force against a plan.
3. **Text states:** The numbers are _stated_. Ten thousand against twenty thousand. The
   assessment is quantitative.
4. **Text states:** The alternative to fighting is _negotiated settlement_: "he sendeth an
   ambassage, and desireth conditions of peace." The text presents this as a legitimate option,
   not as cowardice.
5. **Text states:** The timing of the decision matters: "while the other is yet a great way off."
   The settlement is available _before_ the engagement, and the text implies it is not available
   after.
6. **Text states:** Both examples are introduced by the same construction — "Or what king…" —
   making them parallel cases of one principle.

**Inference.** The two parables cover two different assessments:

- **The tower: absolute sufficiency.** Do I have enough to finish?
- **The king: relative sufficiency.** Do I have enough to win against _this_ opponent?

The second is the one businesses most often skip. A business plan that shows the plan is
affordable, without an assessment against the competitor's position, has done the tower and
skipped the king.

**Business consequences:**

- **Compare to the opponent, not to the plan.** The king's question is not "can I afford this
  war?" It is "can I beat this army?" A go-to-market plan with a budget and no competitive
  comparison is the tower without the king.
- **Numbers, stated.** Observation 3. "Ten thousand to meet… twenty thousand." A comparative
  assessment without figures is not an assessment.
- **Negotiation is a legitimate outcome of the assessment.** Observation 4 is important: the text
  does not condemn the king who seeks terms. It presents the assessment as the thing that
  produces either commitment or settlement, and both as reasonable.
- **The window closes.** Observation 5. Terms are available while the other is "yet a great way
  off." Once engaged, the options narrow. This is A32 (irreversibility) applied to competition.
- **Both assessments are made before, and neither is made continuously.** The text says "first."
  It does not describe a rolling reassessment. There is a point at which the counting is done and
  the building begins.

### What the two parables do not say

Three things worth stating, because they are commonly read in.

1. **The text does not say the tower was a bad idea.** It says the builder failed to count. The
   project's merit is not the subject.
2. **The text does not say the king should avoid war.** It says he should assess before engaging,
   and it presents peace terms as an acceptable result of the assessment.
3. **The text does not command a business to count costs.** It is a parable about the cost of
   discipleship (see Luke 14:25–27, 33 in context), and the business application is an inference.
   The _shape_ — count before you commit — transfers; the _command_ does not.

---

## Part 4. Debt and its instruments

### The borrower is servant to the lender

**Text (Proverbs 22:7, KJV)**

> The rich ruleth over the poor, and the borrower is servant to the lender.

**Observations:**

1. **Text states:** The relationship is stated as a fact, not a prohibition. It does not say "do
   not borrow." It says what borrowing _does_.
2. **Text states:** The mechanism is _servitude_. The borrower becomes a servant. This is a
   change of status, not merely a change of cash position.
3. **Text states:** The parallel construction pairs it with "the rich ruleth over the poor." Both
   halves describe a rule relationship created by economic position.
4. **Text states (the wider context):** Proverbs is a book of consequences, and this verse is in
   that mode. It describes an outcome.

**Lexical:** "servant" is **H5650 עֶבֶד (_ebed_)** — the noun from the same root as H5647 עָבַד
(_abad_), the verb used of Adam's work in the garden (A17). **Inference:** the borrower is placed
in the position of the one who _serves_, and the lender in the position of the one _served_. The
vocabulary connects the debt relationship to the work relationship.

**Inference.** Two consequences:

- **Debt is a transfer of decision rights, not merely a transfer of money.** The servitude is the
  real cost. Interest is the visible cost; the loss of discretion is the invisible one.
- **The transfer is not always wrong, but it must be priced.** A business that takes on debt
  without identifying which decisions it has just surrendered has not priced the instrument.

**Text states (the Deuteronomic ideal):** Deuteronomy 15:6 states the desired position
explicitly — "and thou shalt lend unto many nations, but thou shalt not borrow; and thou shalt
reign over many nations, but they shall not reign over thee." **Text states:** the promise is
framed as _not borrowing_, and the reason given is the reign relationship. The two halves are
paired.

**Business consequences:**

- **Debt covenants are the servitude made explicit.** What the covenant restricts — dividends,
  acquisitions, capex, hiring, additional debt — is the list of decisions the lender now holds.
  Read the covenant as a list of surrendered authorities; that is what it is.
- **The servitude is asymmetric with repayment.** The borrower becomes a servant on the day the
  money is drawn. Repayment ends the servitude, but it does not restore the time in which the
  decisions were constrained.
- **The Proverbs claim is about the _relationship_, not the _rate_.** A zero-interest loan from a
  friend still creates the servitude. The rate is not the mechanism.
- **The ideal is not "never borrow."** The text states the _consequence_ of borrowing and
  describes a _preferred_ position. It does not forbid. See Part 4's usury section for the
  specific prohibitions, which are narrower than a blanket ban.

### Surety for a neighbour

**Text (Proverbs 6:1–5, KJV)**

> 1. My son, if thou be surety for thy friend, if thou hast stricken thy hand with a stranger,
> 2. Thou art snared with the words of thy mouth, thou art taken with the words of thy mouth.
> 3. Do this now, my son, and deliver thyself, when thou art come into the hand of thy friend; go,
>    humble thyself, and make sure thy friend.
> 4. Give not sleep to thine eyes, nor slumber to thine eyelids.
> 5. Deliver thyself as a roe from the hand of the hunter, and as a bird from the hand of the
>    fowler.

**Observations:**

1. **Text states:** The condition is real, not hypothetical in the sense of impossible — "if thou
   be surety for thy friend." The passage is instruction for when it has happened.
2. **Text states:** The mechanism is _the words of thy mouth_. Twice in verse 2: "Thou art snared
   with the words of thy mouth, thou art taken with the words of thy mouth." The trap is
   linguistic. A promise was made.
3. **Text states:** The status is described as _captivity_: "snared," "taken," "in the hand of thy
   friend." Three images of being caught.
4. **Text states:** The remedy is _urgency_: "Give not sleep to thine eyes, nor slumber to thine
   eyelids" (v. 4). And the images are of _escape_: "as a roe from the hand of the hunter, and as
   a bird from the hand of the fowler" (v. 5).
5. **Text states:** The remedy involves _humility_: "go, humble thyself, and make sure thy
   friend" (v. 3). The escape route runs through admitting the mistake to the person you promised.
6. **Text states:** There is no verse here that says "do not become surety." The passage is about
   what to do once you have.

**Lexical:** "surety" here is **H6148 עָרַב (_arab_)** — "to braid, i.e. intermix; technically, to
traffic (as if by barter); also or give to be security (as a kind of exchange)." KJV renderings:
"engage, (inter-) meddle (with), mingle (self), mortgage, occupy, give pledges, be(-come, put in)
surety, undertake." **Text states:** the root image is _braiding_ — an intermingling. The word
carries the sense of having one's affairs _woven into_ another's. That is the trap.

**Inference.** The passage's structure is: a verbal commitment (v. 1) produces a captivity (v. 2)
that must be escaped urgently and humbly (vv. 3–5). The instruction is not the prohibition of the
practice; it is the treatment of the condition.

**Business consequences:**

- **Guaranteeing another's debt is the specific act under discussion, and it is described as a
  snare.** Personal guarantees, cross-guarantees between related companies, parent guarantees of
  subsidiary obligations, and cosigning are all in view.
- **The trap is created by words, not by money.** Observation 2. This means the trap can be
  created before any money moves, and it is created by the guarantor's own speech.
- **The escape is urgent and embarrassing.** Observations 4 and 5. The remedy is to go to the
  person you promised and unwind it — immediately, and at the cost of your dignity. Waiting
  increases the cost.
- **The related passages state the risk in the same terms, and they are stronger.**
  Proverbs 11:15 — "He that is surety for a stranger shall smart for it: and he that hateth
  suretiship is sure."
  Proverbs 17:18 — "A man void of understanding striketh hands, and becometh surety in the
  presence of his friend."
  Proverbs 22:26–27 — "Be not thou one of them that strike hands, or of them that are sureties for
  debts. If thou hast nothing to pay, why should he take away thy bed from under thee?"
  **Text states:** Proverbs 22:26 moves from treatment to _prohibition_ — "Be not thou one of
  them." And verse 27 names the consequence concretely: the bed is taken. **Text states:** the
  man in Proverbs 17:18 is called "void of understanding," which is a judgment on the act, not
  merely a warning about it.
  **Text states (the resulting picture):** Proverbs 6 gives the treatment for a snare already
  entered; Proverbs 17:18 and 22:26 prohibit entering it. The two are consistent — Proverbs 6 is
  addressed to someone who has already struck hands, and Proverbs 22:26 to someone who has not.
- **The business application is about _contingent_ liabilities.** A guarantee is a liability that
  is invisible until it is enormous. The passage's contribution is that the obligation was
  created at the moment of speech, not at the moment of default.

### No usury against the poor

**Text (Exodus 22:25–27, KJV)**

> 25. If thou lend money to any of my people that is poor by thee, thou shalt not be to him as an
>     usurer, neither shalt thou lay upon him usury.
> 26. If thou at all take thy neighbour's raiment to pledge, thou shalt deliver it unto him by
>     that the sun goeth down:
> 27. For that is his covering only, it is his raiment for his skin: wherein shall he sleep? and
>     it shall come to pass, when he crieth unto me, that I will hear; for I am gracious.

**Text (Leviticus 25:35–37, KJV)**

> 35. And if thy brother be waxen poor, and fallen in decay with thee; then thou shalt relieve
>     him: yea, though he be a stranger, or a sojourner; that he may live with thee.
> 36. Take thou no usury of him, or increase: but fear thy God; that thy brother may live with
>     thee.
> 37. Thou shalt not give him thy money upon usury, nor lend him thy victuals for increase.

**Text (Deuteronomy 23:19–20, KJV)**

> 19. Thou shalt not lend upon usury to thy brother; usury of money, usury of victuals, usury of
>     any thing that is lent upon usury:
> 20. Unto a stranger thou mayest lend upon usury; but unto thy brother thou shalt not lend upon
>     usury: that the LORD thy God may bless thee in all that thou settest thine hand to in the land
>     whither thou goest to possess it.

**Lexical.** Strong's lists six entries rendered "usury" in the KJV:

- **G5110 τόκος (_tokos_)** — "interest on money loaned (as a produce)."
- **H4855 מַשָּׁא (_mashsha_)** — "a loan; by implication, interest on a debt."
- **H5378 נָשָׁא (_nasha_)** — "to lend on interest; by implication, to dun for debt."
- **H5383 נָשָׁה (_nashah_)** — "to lend or (by reciprocity) borrow on security or interest."
- **H5391 נָשַׁךְ (_nashak_)** — "to strike with a sting (as a serpent); **figuratively, to oppress
  with interest on a loan**."
- **H5392 נֶשֶׁךְ (_neshek_)** — "interest on a debt."

**Text states:** The most common Hebrew word for interest, H5392 _neshek_, is built on H5391
_nashak_, "to strike with a sting (as a serpent)." **Inference:** the vocabulary itself carries
the judgment. Interest on a loan to a poor person is described in the language of a snakebite.

**Observations:**

1. **Text states:** The prohibition is specifically about the _poor_ and the _brother_. Exodus
   22:25: "my people that is poor by thee." Leviticus 25:35–36: "if thy brother be waxen poor,
   and fallen in decay with thee." Deuteronomy 23:19: "to thy brother."
2. **Text states:** Deuteronomy 23:20 explicitly _permits_ interest to a stranger: "Unto a
   stranger thou mayest lend upon usury." The prohibition is not universal.
3. **Text states:** The purpose clause is stated: "that thy brother may live with thee"
   (Leviticus 25:36). The aim is the _continued existence_ of the borrower in the community, not
   merely their solvency.
4. **Text states:** The command is grounded in the fear of God: "but fear thy God; that thy
   brother may live with thee" (v. 36). The obligation is not enforced by a court.
5. **Text states:** Leviticus 25:35 extends the duty beyond the brother: "yea, though he be a
   stranger, or a sojourner." The _relief_ duty covers the outsider, even where the _interest_
   rule uses the brother language.
6. **Text states (the pledge rule):** Exodus 22:26–27 requires the return of a pledged garment
   before nightfall, on the ground that it is the person's only covering: "wherein shall he
   sleep?" The rule protects the minimum needed to live.

**Inference — and the honest limit.** The distinction between "brother" and "stranger" makes
these statutes _covenant-community_ law, not general commercial law. A modern company lending to
a customer is not in the position of an Israelite lending to a brother in the same covenant
community. That gap is real and should not be smoothed over.

What _does_ transfer, and what the text states directly:

- **The prohibition is aimed at a specific abuse: extracting from someone whose need makes them
  unable to refuse.** The word choice (_nashak_, to sting) and the purpose clause ("that thy
  brother may live with thee") both point at the _predatory_ character of the loan, not at the
  interest rate as such.
- **The pledge rule protects the borrower's survival minimum.** The garment must go back before
  nightfall because otherwise the person will be cold. Any collateral policy that takes the
  thing the borrower needs to survive is directly in view.
- **The relief duty extends to the stranger.** Leviticus 25:35 requires relieving the sojourner,
  even though the interest rule is framed in brother language.

**Business consequences:**

- **The relevant question is not "is charging interest wrong" but "is this loan extracting from
  someone who cannot refuse?"** The text's own vocabulary and purpose clauses aim at the second
  question.
- **Payday lending, wage advance products at punitive rates, and debt sold to people who cannot
  evaluate it** are the modern instances the passage's logic reaches. So are late fees calibrated
  to a customer's inability to pay on time.
- **Collateral policy should have a survival floor.** The pledged garment is the model: some
  assets are exempt because taking them is taking the person's ability to live.
- **Deuteronomy 24:6 states the floor more sharply:** "No man shall take the nether or the upper
  millstone to pledge: for he taketh a man's life to pledge." **Text states:** the millstone is
  exempt because it is the means of earning. **Inference:** the principle is that you may not
  take the borrower's _capacity to produce_ as security. A modern analogue is taking a
  tradesperson's tools or a farmer's seed.

### The pledge and the millstone

**Text (Deuteronomy 24:6, 10–13, KJV)**

> 6. No man shall take the nether or the upper millstone to pledge: for he taketh a man's life to
>    pledge.
> 7. When thou dost lend thy brother any thing, thou shalt not go into his house to fetch his
>    pledge.
> 8. Thou shalt stand abroad, and the man to whom thou dost lend shall bring out the pledge
>    abroad unto thee.
> 9. And if the man be poor, thou shalt not sleep with his pledge:
> 10. In any case thou shalt deliver him the pledge again when the sun goeth down, that he may
>     sleep in his own raiment, and bless thee: and it shall be righteousness unto thee before the
>     LORD thy God.

**Observations:**

1. **Text states:** The creditor may not enter the debtor's house. "Thou shalt stand abroad"
   (v. 11). The _dignity_ of the debtor's household is protected, and the creditor's physical
   power over the debtor's space is explicitly limited.
2. **Text states:** The pledge must be returned at nightfall (v. 13), with the stated reason:
   "that he may sleep in his own raiment."
3. **Text states:** The millstone is exempt on the ground that it is the means of life: "for he
   taketh a man's life to pledge" (v. 6).
4. **Text states:** Compliance is called _righteousness_: "and it shall be righteousness unto
   thee before the LORD thy God" (v. 13). **Inference:** this is not a courtesy; it is a
   definition of right dealing.

**Business consequences:**

- **A lender's power is bounded by the debtor's dignity and survival.** Two specific limits:
  don't enter the house, don't take the means of production, and don't keep the thing they need
  to sleep.
- **Collateral design should name the exempt set in advance.** Which assets will you never take,
  regardless of what the contract permits? That list is a _stated boundary_ in the sense of A20 —
  decided before the pressure, not during it.
- **The dignity rule is operationally specific.** "Stand abroad." Do not go into the customer's
  house. In modern terms: do not show up at the customer's premises to collect; do not exercise
  remedies in a way designed to humiliate.

### The year of release

**Text (Deuteronomy 15:1–11, KJV)**

> 1. At the end of every seven years thou shalt make a release.
> 2. And this is the manner of the release: Every creditor that lendeth ought unto his neighbour
>    shall release it; he shall not exact it of his neighbour, or of his brother; because it is
>    called the LORD's release.
> 3. Of a foreigner thou mayest exact it again: but that which is thine with thy brother thine
>    hand shall release;
> 4. Save when there shall be no poor among you; for the LORD shall greatly bless thee in the
>    land which the LORD thy God giveth thee for an inheritance to possess it:
> 5. Only if thou carefully hearken unto the voice of the LORD thy God, to observe to do all
>    these commandments which I command thee this day.
> 6. For the LORD thy God blesseth thee, as he promised thee: and thou shalt lend unto many
>    nations, but thou shalt not borrow; and thou shalt reign over many nations, but they shall not
>    reign over thee.
> 7. If there be among you a poor man of one of thy brethren within any of thy gates in thy land
>    which the LORD thy God giveth thee, thou shalt not harden thine heart, nor shut thine hand from
>    thy poor brother:
> 8. But thou shalt open thine hand wide unto him, and shalt surely lend him sufficient for his
>    need, in that which he wanteth.
> 9. Beware that there be not a thought in thy wicked heart, saying, The seventh year, the year of
>    release, is at hand; and thine eye be evil against thy poor brother, and thou givest him nought;
>    and he cry unto the LORD against thee, and it be sin unto thee.
> 10. Thou shalt surely give him, and thine heart shall not be grieved when thou givest unto him:
>     because that for this thing the LORD thy God shall bless thee in all thy works, and in all that
>     thou puttest thine hand unto.
> 11. For the poor shall never cease out of the land: therefore I command thee, saying, Thou shalt
>     open thine hand wide unto thy brother, to thy poor, and to thy needy, in thy land.

**Observations:**

1. **Text states:** Debts among the covenant community are released every seven years. "Every
   creditor that lendeth ought unto his neighbour shall release it" (v. 2). This is a _cancellation_,
   not a restructuring.
2. **Text states:** The release is named after the LORD: "because it is called the LORD's
   release" (v. 2). The institution belongs to God, not to the creditor's generosity.
3. **Text states:** The distinction between brother and foreigner is repeated (v. 3), consistent
   with Deuteronomy 23:20.
4. **Text states (the foreseen abuse, named in advance):** Verse 9 predicts that the approach of
   the release year will make lenders refuse new loans: "The seventh year, the year of release,
   is at hand; and thine eye be evil against thy poor brother, and thou givest him nought." The
   law _names the loophole behaviour and forbids it_.
5. **Text states:** The prediction in verse 11 is that poverty will persist: "For the poor shall
   never cease out of the land." This is stated as a fact, and it is the _reason_ for the
   permanent command — "therefore I command thee."
6. **Text states:** The command is about _posture_, not only about the transaction: "thou shalt
   not harden thine heart, nor shut thine hand" (v. 7); "thine heart shall not be grieved when
   thou givest" (v. 10). The internal state is legislated alongside the act.
7. **Text states:** Verse 4 contains an apparent tension with verse 11: "Save when there shall be
   no poor among you" against "the poor shall never cease out of the land." The conditional in
   verse 4 describes the ideal; verse 11 describes the actual.

**Inference.** The year of release is a **structural limit on the accumulation of claims**. It is
not charity; it is a scheduled cancellation that operates regardless of the creditor's
preference, and the law anticipates and forbids the workaround.

**Business consequences:**

- **Debt capacity should be modelled against the cycle, not against the present.** If a business
  is lending into a community with a seven-year cancellation, it must price that. More
  generally: a lending model whose returns depend on perpetual collection is not resilient.
- **The named loophole is the interesting part.** Verse 9 is a case study in how rules get
  circumvented: not by violating them, but by withdrawing from the activity they govern. Any
  policy design should ask what activity the rule will _suppress_, and decide whether that
  suppression is acceptable.
- **"The poor shall never cease" is a planning assumption, not a counsel of despair.** The text
  states it as the ground for a permanent obligation. A business that treats poverty as a
  solvable problem will build for a world that does not exist.
- **The posture rules apply to how a business gives.** Not grudgingly. "Thine heart shall not be
  grieved." A donation made with visible reluctance costs the giver's relationship with the
  recipient.
- **It connects to the jubilee.** The seven-year release and the fifty-year jubilee are the two
  reset instruments. See Part 6.

---

## Part 5. Joseph and the seven-year cycle

**Text (Genesis 41:29–36, KJV)**

> 29. Behold, there come seven years of great plenty throughout all the land of Egypt:
> 30. And there shall arise after them seven years of famine; and all the plenty shall be
>     forgotten in the land of Egypt; and the famine shall consume the land;
> 31. And the plenty shall not be known in the land by reason of that famine following; for it
>     shall be very grievous.
> 32. And for that the dream was doubled unto Pharaoh twice; it is because the thing is
>     established by God, and God will shortly bring it to pass.
> 33. Now therefore let Pharaoh look out a man discreet and wise, and set him over the land of
>     Egypt.
> 34. Let Pharaoh do this, and let him appoint officers over the land, and take up the fifth part
>     of the land of Egypt in the seven plenteous years.
> 35. And let them gather all the food of those good years that come, and lay up corn under the
>     hand of Pharaoh, and let them keep food in the cities.
> 36. And that food shall be for store to the land against the seven years of famine, which shall
>     be in the land of Egypt; that the land perish not through the famine.

### The interpretation, and the refusal to take credit

**Text (Genesis 41:16, KJV)**

> And Joseph answered Pharaoh, saying, It is not in me: God shall give Pharaoh an answer of peace.

**Observations:**

1. **Text states:** Joseph is asked to interpret a dream in a context where failure means death
   (the butler's account, 41:13: "me he restored unto mine office, and him he hanged").
2. **Text states:** His first move is a disclaimer: "It is not in me." He does not claim the
   capability, and he does not hedge. He attributes the answer to God before he knows what the
   answer is.
3. **Text states (the contrast):** The magicians and wise men of Egypt had already failed
   (41:8: "there was none that could interpret them unto Pharaoh"). The competition had no
   answer.
4. **Text states:** Joseph delivers the interpretation and then immediately delivers a _plan_
   (vv. 33–36). The interpretation and the operational recommendation come from the same person
   in the same audience.

**Inference.** The refusal to take credit is not modesty as a personality trait; it is an
accurate statement about the source, made _before_ the result is known. That timing matters: a
disclaimer after success can be a rhetorical move; a disclaimer before the attempt is a
commitment.

**Business consequences:**

- **The disclaimer precedes the result.** A leader who attributes outcomes correctly will do it
  before knowing whether the outcome is good. Attributing success to God and failure to
  circumstance is not the pattern here.
- **Attribution accuracy is a governance issue, not a personal virtue.** A founder who believes
  the insight was theirs will believe the next one is too, and will not build the process that
  catches the one that is not.
- **Competence plus attribution is the package.** Joseph does not refuse the task. He refuses the
  credit. The two are separable and both are required.

### The storage plan

**Text states (the plan's components, vv. 33–36):**

1. **A named owner.** "Let Pharaoh look out a man discreet and wise, and set him over the land of
   Egypt" (v. 33). One person, accountable.
2. **A layer of officers.** "Let him appoint officers over the land" (v. 34). The plan is not one
   person doing everything; it is a hierarchy. (Compare Exodus 18, `org-and-labour.md`.)
3. **A stated rate.** "Take up the fifth part of the land of Egypt in the seven plenteous years"
   (v. 34). **Text states:** one fifth — 20%.
4. **A stated collection method.** "Let them gather all the food of those good years that come,
   and lay up corn under the hand of Pharaoh" (v. 35). Note "under the hand of Pharaoh" — the
   store is under a single authority, not distributed.
5. **A stated location policy.** "Let them keep food in the cities" (v. 35). **Text states:** the
   food is stored in the cities, and 41:48 explains: "the food of the field, which was round
   about every city, laid he up in the same." Local storage, near where it was grown.
6. **A stated purpose.** "That food shall be for store to the land against the seven years of
   famine… that the land perish not through the famine" (v. 36).

**Observations on the plan:**

1. **Text states:** The reserve rate is 20% of production, for seven years. Not 20% of profit —
   20% of the _harvest_.
2. **Text states:** The plan is presented _before_ the famine arrives, in response to a
   _forecast_. It is a plan built on a prediction, not on an event.
3. **Text states (the reason for confidence):** Verse 32 — "for that the dream was doubled unto
   Pharaoh twice; it is because the thing is established by God." **Inference:** the doubling is
   given as the evidence of certainty. The plan's scale is justified by the confidence in the
   forecast, and the confidence has a stated basis.
4. **Text states:** The plan includes _distribution of authority_ (a man, officers) before it
   includes _distribution of grain_.
5. **Text states:** Nothing in the plan requires the population to change their behaviour. It is
   a public-sector reserve, funded by a levy, not a savings campaign.

**Business consequences:**

- **20% of production for seven years is a very large reserve.** The arithmetic: seven years at
  20% equals 1.4 years of production. **Inference:** the plan accumulates the equivalent of
  roughly 1.4 years of output, which is what it takes to cover seven years of zero yield. The
  rate is not a round number chosen for comfort; it is derived from the duration and depth of the
  forecast shortfall.
- **The reserve rate should be derived from the scenario, not from convention.** Most companies
  hold reserves sized to a benchmark. Joseph's 20% is sized to _fourteen years of forecast_. The
  derivation is the transferable part.
- **Storage location is a design decision.** Local storage near production, under central
  authority. This is a resilience decision (distribution) and a control decision (ownership),
  made together.
- **The reserve has a single named owner.** A reserve without an owner gets raided. See A17.

### The execution and the countercyclical sale

**Text (Genesis 41:47–57, KJV — selected)**

> 47. And in the seven plenteous years the earth brought forth by handfuls.
> 48. And he gathered up all the food of the seven years, which were in the land of Egypt, and
>     laid up the food in the cities: the food of the field, which was round about every city, laid he
>     up in the same.
> 49. And Joseph gathered corn as the sand of the sea, very much, until he left numbering; for it
>     was without number.
> 50. And the seven years of plenteousness, that was in the land of Egypt, were ended.
> 51. And the seven years of dearth began to come, according as Joseph had said: and the dearth
>     was in all lands; but in all the land of Egypt there was bread.
> 52. And when all the land of Egypt was famished, the people cried to Pharaoh for bread: and
>     Pharaoh said unto all the Egyptians, Go unto Joseph; what he saith to you, do.
> 53. And the famine was over all the face of the earth: And Joseph opened all the storehouses, and
>     sold unto the Egyptians; and the famine waxed sore in the land of Egypt.
> 54. And all countries came into Egypt to Joseph for to buy corn; because that the famine was so
>     sore in all lands.

**Observations:**

1. **Text states:** The accumulation is described as _unmeasured_: "until he left numbering; for
   it was without number" (v. 49). At some point the accounting was abandoned because the volume
   exceeded the system.
2. **Text states:** The famine is _general_: "the dearth was in all lands" (v. 54), "the famine
   was over all the face of the earth" (v. 56). The reserve is not insurance against a local
   event; it is against a systemic one.
3. **Text states:** The store is _sold_, not given: "Joseph opened all the storehouses, and sold
   unto the Egyptians" (v. 56).
4. **Text states:** Egypt had bread while others did not: "but in all the land of Egypt there was
   bread" (v. 54). The reserve created a position of _scarcity advantage_.
5. **Text states:** The authority over distribution is centralized in one person: "Go unto
   Joseph; what he saith to you, do" (v. 55).

**Inference.** The reserve performed three functions simultaneously: it kept the population
alive, it generated revenue, and it made Egypt the counterparty for every other nation.

**Business consequences:**

- **A reserve is a competitive position, not just a cushion.** A company with cash in a downturn
  can buy, hire, and lend while others contract. That is Joseph's position.
- **The countercyclical sale is the mechanism.** Buy low (accumulate during plenty), sell high
  (distribute during scarcity). The text states both halves.
- **The ethics of the sale is a live question, and the text does not resolve it to modern
  satisfaction.** The store was accumulated by a _levy_ on the population during the plenty
  years (v. 34, "take up the fifth part"), and then _sold back_ to the same population during the
  famine. Whether that is prudent administration or exploitation is a question the text does not
  answer directly, and faithful readers differ. **I am not going to manufacture certainty on it.**
  See Part 5's next section for the consolidation that follows, which the text presents as
  painful.
- **The reserve was a systemic hedge, not a local one.** Observation 2. A reserve sized for a
  single-site outage will not cover a market-wide collapse. The scenario drives the design.

### The painful consolidation

**Text (Genesis 47:13–26, KJV)**

> 13. And there was no bread in all the land; for the famine was very sore, so that the land of
>     Egypt and all the land of Canaan fainted by reason of the famine.
> 14. And Joseph gathered up all the money that was found in the land of Egypt, and in the land of
>     Canaan, for the corn which they bought: and Joseph brought the money into Pharaoh's house.
> 15. And when money failed in the land of Egypt, and in the land of Canaan, all the Egyptians
>     came unto Joseph, and said, Give us bread: for why should we die in thy presence? for the money
>     faileth.
> 16. And Joseph said, Give your cattle; and I will give you for your cattle, if money fail.
> 17. And they brought their cattle unto Joseph: and Joseph gave them bread in exchange for horses,
>     and for the flocks, and for the cattle of the herds, and for the asses: and he fed them with
>     bread for all their cattle for that year.
> 18. When that year was ended, they came unto him the second year, and said unto him, We will not
>     hide it from my lord, how that our money is spent; my lord also hath our herds of cattle; there
>     is not ought left in the sight of my lord, but our bodies, and our lands:
> 19. Wherefore shall we die before thine eyes, both we and our land? buy us and our land for
>     bread, and we and our land will be servants unto Pharaoh: and give us seed, that we may live, and
>     not die, that the land be not desolate.
> 20. And Joseph bought all the land of Egypt for Pharaoh; for the Egyptians sold every man his
>     field, because the famine prevailed over them: so the land became Pharaoh's.
> 21. And as for the people, he removed them to cities from one end of the borders of Egypt even
>     to the other end thereof.
> 22. Only the land of the priests bought he not; for the priests had a portion assigned them of
>     Pharaoh, and did eat their portion which Pharaoh gave them: wherefore they sold not their lands.
> 23. Then Joseph said unto the people, Behold, I have bought you this day and your land for
>     Pharaoh: lo, here is seed for you, and ye shall sow the land.
> 24. And it shall come to pass in the increase, that ye shall give the fifth part unto Pharaoh,
>     and four parts shall be your own, for seed of the field, and for your food, and for them of your
>     households, and for food for your little ones.
> 25. And they said, Thou hast saved our lives: let us find grace in the sight of my lord, and we
>     will be Pharaoh's servants.
> 26. And Joseph made it a law over the land of Egypt unto this day, that Pharaoh should have the
>     fifth part; except the land of the priests only, which became not Pharaoh's.

**Observations (the sequence, which is the point):**

1. **Text states (stage 1):** Money is exchanged for grain. "Joseph gathered up all the money
   that was found in the land" (v. 14).
2. **Text states (stage 2):** When money fails, livestock is exchanged for grain. "Give your
   cattle; and I will give you for your cattle" (v. 16).
3. **Text states (stage 3):** When livestock fails, land and labour are exchanged for grain.
   "Buy us and our land for bread, and we and our land will be servants unto Pharaoh" (v. 19).
4. **Text states:** The sale is _voluntary in form_ — the people propose it: "Wherefore shall we
   die before thine eyes, both we and our land?" (v. 19).
5. **Text states:** The land "became Pharaoh's" (v. 20), and the people were relocated: "he
   removed them to cities from one end of the borders of Egypt even to the other end thereof"
   (v. 21).
6. **Text states:** The tax rate after the consolidation is 20% of the increase: "ye shall give
   the fifth part unto Pharaoh, and four parts shall be your own" (v. 24). **Text states:** this
   is the same 20% as the accumulation rate in 41:34.
7. **Text states:** The people's own assessment is positive: "Thou hast saved our lives" (v. 25).
8. **Text states:** The arrangement is made permanent: "Joseph made it a law over the land of
   Egypt unto this day" (v. 26).
9. **Text states:** The priests are exempted, because they had a separate provision (v. 22).

**Inference.** This passage is the hardest material in this file, and it should not be
moralised in either direction.

- **Read one way:** a famine forced the transfer of all private wealth — money, then productive
  assets, then land and labour — into a single sovereign holder, and the arrangement was made
  permanent. That is a description of consolidation.
- **Read another way:** the alternative to the transfer was death, the transfer was proposed by
  the affected parties, the resulting tax rate was the same as the rate they had already been
  paying, and their own verdict was "thou hast saved our lives."

**Both readings are available from the text, and the text does not adjudicate.** I am not going
to pretend it does. What the text states plainly is the _sequence_ — money, then movable assets,
then land, then labour — and that the sequence ran to completion within two years.

**Business consequences (stated as inferences):**

- **Distress transfers run in a predictable order: cash, then movable assets, then productive
  assets, then control.** Any counterparty acquiring from a distressed seller should expect to
  move through these stages, and should decide in advance where they will stop. This is A20: the
  boundary stated before the pressure.
- **The buyer's rate of return on a distress purchase is set by the seller's urgency, not by the
  asset's value.** The five-to-one split in verse 24 is a _permanent_ claim on the increase, and
  it was accepted.
- **The consolidation was irreversible.** Verse 26: "a law over the land of Egypt unto this day."
  This is A32's category — a state that must not be allowed to become permanent — and here it was
  allowed. Whatever else one concludes, the text is explicit that it stuck.
- **Exemptions reveal the power structure.** The priests kept their land (v. 22). Any
  consolidation will have exempt categories, and the list of exemptions is the map of who had
  standing.
- **"Thou hast saved our lives" is the stated justification, and it should be read with care.** A
  rescue that transfers permanent control is a real rescue and a real transfer. Both can be true.

---

## Part 6. Jubilee and the limits on accumulation

**Text (Leviticus 25:1–34, KJV — selected)**

> 1. And the LORD spake unto Moses in mount Sinai, saying,
> 2. Speak unto the children of Israel, and say unto them, When ye come into the land which I give
>    you, then shall the land keep a sabbath unto the LORD.
> 3. Six years thou shalt sow thy field, and six years thou shalt prune thy vineyard, and gather in
>    the fruit thereof;
> 4. But in the seventh year shall be a sabbath of rest unto the land, a sabbath for the LORD:
>    thou shalt neither sow thy field, nor prune thy vineyard.
> 5. That which groweth of its own accord of thy harvest thou shalt not reap, neither gather the
>    grapes of thy vine undressed: for it is a year of rest unto the land.
> 6. And the sabbath of the land shall be meat for you; for thee, and for thy servant, and for thy
>    maid, and for thy hired servant, and for thy stranger that sojourneth with thee,
> 7. And for thy cattle, and for the beast that are in thy land, shall all the increase thereof be
>    meat.
> 8. And thou shalt number seven sabbaths of years unto thee, seven times seven years; and the
>    space of the seven sabbaths of years shall be unto thee forty and nine years.
> 9. Then shalt thou cause the trumpet of the jubile to sound on the tenth day of the seventh
>    month, in the day of atonement shall ye make the trumpet sound throughout all your land.
> 10. And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all
>     the inhabitants thereof: it shall be a jubile unto you; and ye shall return every man unto his
>     possession, and ye shall return every man unto his family.
> 11. A jubile shall that fiftieth year be unto you: ye shall not sow, neither reap that which
>     groweth of itself in it, nor gather the grapes in it of thy vine undressed.
> 12. For it is the jubile; it shall be holy unto you: ye shall eat the increase thereof out of the
>     field.
> 13. In the year of this jubile ye shall return every man unto his possession.
> 14. And if thou sell ought unto thy neighbour, or buyest ought of thy neighbour's hand, ye shall
>     not oppress one another:
> 15. According to the number of years after the jubile thou shalt buy of thy neighbour, and
>     according unto the number of years of the fruits he shall sell unto thee:
> 16. According to the multitude of years thou shalt increase the price thereof, and according to
>     the fewness of years thou shalt diminish the price of it: for according to the number of the
>     years of the fruits doth he sell unto thee.
> 17. Ye shall not therefore oppress one another; but thou shalt fear thy God: for I am the LORD
>     your God.
> 18. Wherefore ye shall do my statutes, and keep my judgments, and do them; and ye shall dwell in
>     the land in safety.
> 19. And the land shall yield her fruit, and ye shall eat your fill, and dwell therein in safety.
> 20. And if ye shall say, What shall we eat the seventh year? behold, we shall not sow, nor gather
>     in our increase:
> 21. Then I will command my blessing upon you in the sixth year, and it shall bring forth fruit
>     for three years.
> 22. And ye shall sow the eighth year, and eat yet of old fruit until the ninth year; until her
>     fruits come in ye shall eat of the old store.
> 23. The land shall not be sold for ever: for the land is mine; for ye are strangers and sojourners
>     with me.
> 24. And in all the land of your possession ye shall grant a redemption for the land.
> 25. If thy brother be waxen poor, and hath sold away some of his possession, and if any of his
>     kin come to redeem it, then shall he redeem that which his brother sold.
> 26. And if the man have none to redeem it, and himself be able to redeem it;
> 27. Then let him count the years of the sale thereof, and restore the overplus unto the man to
>     whom he sold it; that he may return unto his possession.
> 28. But if he be not able to restore it to him, then that which is sold shall remain in the hand
>     of him that hath bought it until the year of jubile: and in the jubile it shall go out, and he
>     shall return unto his possession.
> 29. But the field of the suburbs of their cities may not be sold; for it is their perpetual
>     possession.

### The sabbath of the land

**Observations:**

1. **Text states:** The land rests every seventh year. "Thou shalt neither sow thy field, nor
   prune thy vineyard" (v. 4). This is a prohibition on _work_, not merely on harvest.
2. **Text states:** What grows of itself is not to be harvested commercially: "thou shalt not reap,
   neither gather the grapes of thy vine undressed" (v. 5).
3. **Text states:** The produce of the fallow year belongs to a specific list: "for thee, and for
   thy servant, and for thy maid, and for thy hired servant, and for thy stranger that sojourneth
   with thee, And for thy cattle, and for the beast that are in thy land" (vv. 6–7). **Text
   states:** the list is ordered from the owner down to the animals, and it _includes_ hired
   servants and resident foreigners.
4. **Text states (the objection, answered):** "And if ye shall say, What shall we eat the seventh
   year?" (v. 20). The text anticipates the objection and answers it with a promise of a
   triple harvest in the sixth year (v. 21).
5. **Text states:** The provision is _storage_: "ye shall eat yet of old fruit until the ninth
   year; until her fruits come in ye shall eat of the old store" (v. 22). **Inference:** the
   sabbath year is operated on a reserve, accumulated in advance. This connects directly to
   Joseph's plan (Part 5).
6. **Text states:** The rest of the land connects to the rest of the worker. Exodus 23:12 states
   the daily version with the same purpose clause: "that thine ox and thine ass may rest, and the
   son of thy handmaid, and the stranger, may be refreshed."

**Business consequences:**

- **The fallow year requires a reserve.** Observation 5 is the operational link. A business that
  cannot afford to stop cannot stop, which means it cannot rest (A15) and cannot recover (A31).
- **The provision during rest covers the whole workforce, not just the owner.** Observation 3.
  A rest period during which only the owner rests is not a sabbath.
- **Idle capacity is not always waste.** An unplanted field is producing next year's yield. The
  modern analogue is deliberate slack.

### The jubilee: release, return, redemption

**Observations:**

1. **Text states:** The jubilee is the fiftieth year, after seven sabbaths of years — forty-nine
   (vv. 8–10).
2. **Text states:** It is proclaimed by _trumpet_, on the day of atonement: "in the day of
   atonement shall ye make the trumpet sound throughout all your land" (v. 9). **Inference:** the
   release is announced on the day of national atonement — the day of forgiveness. The economic
   release is tied to the spiritual one.
3. **Text states:** Three verbs, all operative: "ye shall hallow the fiftieth year, and proclaim
   liberty throughout all the land unto all the inhabitants thereof" (v. 10).
4. **Text states:** The content of the release is stated twice, in identical terms: "ye shall
   return every man unto his possession, and ye shall return every man unto his family" (v. 10);
   "In the year of this jubile ye shall return every man unto his possession" (v. 13).
5. **Text states:** It is also a fallow year: "ye shall not sow, neither reap that which groweth
   of itself in it" (v. 11). **Inference:** the fiftieth year is a _second consecutive_ fallow
   year if the forty-ninth was also one. That is a two-year production gap, which requires a
   substantial reserve.
6. **Text states:** Redemption is available _at any time_, not only at jubilee: "in all the land
   of your possession ye shall grant a redemption for the land" (v. 24). A near kinsman may
   redeem (v. 25); the man himself may redeem if able (v. 26); and the price is calculated by the
   years remaining (v. 27).

**Business consequences:**

- **A scheduled reset is a design feature, not a failure of the system.** The jubilee is not
  presented as a remedy for a broken economy. It is part of the design. **Inference:** an economy
  (or a company) designed with no reset mechanism has no way to correct accumulated position, and
  accumulated position compounds.
- **The reset covers both property and family.** Observation 4. Land returns and households are
  reunited. The two are named together, which suggests the economic and the social resets are one
  act.
- **Redemption before jubilee is encouraged.** Observation 6. The jubilee is the backstop; the
  preferred path is early redemption by the family. **Inference:** the design prefers voluntary
  restoration to compulsory reset.
- **The announcement is public.** "Throughout all your land" (v. 9). Everyone knows when the
  reset comes. This makes the pricing of everything transparent (see the next section).

### No permanent alienation of the inheritance

**Text states:** "The land shall not be sold for ever: for the land is mine; for ye are strangers
and sojourners with me" (v. 23).

**Observations:**

1. **Text states:** The ground of the rule is ownership: "the land is mine." The prohibition
   follows from God's claim, not from a policy preference.
2. **Text states:** The rule is about _permanence_: "shall not be sold for ever."
3. **Text states:** The rationale includes the Israelites' own status: "for ye are strangers and
   sojourners with me." **Inference:** the same argument as A1 — they hold as tenants, and a
   tenant cannot sell what they do not own.
4. **Text states (the exception):** Houses in walled cities are different: "then the house that is
   in the walled city shall be established for ever to him that bought it throughout his
   generations: it shall not go out in the jubile" (v. 30). **Text states:** the rule has an
   exception, and the exception is explicitly for _urban_ property. Village houses and fields go
   out in the jubilee (v. 31).
5. **Text states (the Levites):** The Levites' city property may be redeemed at any time (v. 32),
   and their suburban fields "may not be sold; for it is their perpetual possession" (v. 34).
   **Text states:** the Levites hold a different tenure.

**Inference.** The jubilee limits accumulation **by design**, and the mechanism is that certain
kinds of property cannot be permanently alienated. A person can become poor and sell; a person
can become rich and buy; but the accumulation cannot become permanent.

**This is the sharpest capital claim in Leviticus 25**, and it deserves to be stated carefully:
the text does not condemn wealth accumulation. It caps its _durability_.

**Business consequences:**

- **Any long-lived business is someone's inheritance.** The land is the productive base, and the
  prohibition is on its permanent transfer out of the family. The modern analogue is not exact,
  but the question it raises is: which assets, if permanently alienated, would remove a family's
  or a community's ability to produce? Those are the assets to gate (A32).
- **The urban exception is instructive.** Walled-city houses were the denser, more commercial
  property. **Inference:** the law's protection was strongest where the asset was the family's
  means of production, and weakest where it was a tradeable dwelling. The design distinguishes
  _productive_ from _liquid_ property.
- **The reason given is tenancy, not fairness.** Verse 23. A business that forgets it holds as a
  tenant will treat permanence as an entitlement (A1).

### Pricing by the years remaining

**Observations:**

1. **Text states:** The rule for pricing: "According to the multitude of years thou shalt increase
   the price thereof, and according unto the fewness of years thou shalt diminish the price of it"
   (v. 16).
2. **Text states:** The reason: "for according to the number of the years of the fruits doth he
   sell unto thee" (v. 16). **Text states:** what is being sold is not the land but the _yield
   over a defined term_.
3. **Text states:** The prohibition on oppression is stated twice, bracketing the pricing rule:
   "ye shall not oppress one another" (v. 14) and "Ye shall not therefore oppress one another"
   (v. 17). **Inference:** the pricing rule is presented as the _mechanism_ by which oppression is
   avoided.
4. **Text states:** The fear of God is the enforcement: "but thou shalt fear thy God: for I am the
   LORD your God" (v. 17). **Inference:** no court enforces this; the transaction is priced
   correctly because the parties fear God.

**Inference.** The jubilee converts land from a _perpetual asset_ into a _term contract_. The
price is the discounted value of the remaining years of yield. This is a functioning
present-value calculation, stated in the text.

**Business consequences:**

- **Term-based assets should be priced by the term, not by the asset.** Observation 2. This is the
  direct statement of the principle.
- **The prohibition on oppression is enforced by the pricing rule.** Observation 3. "Do not
  oppress" is not a vague exhortation here; it means "price it by the years." **Inference:** in a
  commercial relationship, the specific rule _is_ the ethics. "Be fair" is not actionable; "price
  by the years remaining" is.
- **Disclosure is implied.** Observation 4 plus the public trumpet. Both parties know the jubilee
  date, so both can compute the price. **Inference:** an opaque pricing term in a contract with a
  fixed end is structurally the same problem.

### What this implies about accumulation

Pulling Part 6 together. Five claims the text supports, and one it does not.

**Text states:**

1. Work has a sabbath, at the day, the year, and the half-century scale.
2. Debts are released on a schedule (Deuteronomy 15).
3. Land returns to its original holders on a schedule (Leviticus 25:10, 13).
4. Certain property cannot be permanently alienated at all (Leviticus 25:23, 34).
5. Provision during rest is by accumulated reserve, blessed in advance (Leviticus 25:20–22).

**What the text does not state:** that wealth accumulation is itself wrong. Leviticus 25 does not
condemn the man with many fields. It limits how long he can keep them.

**Inference — the axiom this yields:** _a system with no reset mechanism will concentrate, and
concentration is a design outcome, not a moral failure of the participants._ The jubilee is
evidence that the design intends a reset. A business or an economy built without one should
expect the concentration and should decide, in advance, whether it accepts the result.

**Business consequences:**

- **Compensation design without a reset drifts.** Equity with no refresh, ownership with no
  vesting reset, and pricing with no true-up all concentrate. This is not a claim that
  concentration is evil; it is a claim that it is the default (A2) and requires a designed
  counterweight.
- **The reserve is what makes the reset survivable.** Observation 5 and Leviticus 25:20–22. A
  reset imposed on a business with no reserve is not a rest; it is a crisis.
- **The scale of the reserve is set by the scale of the reset.** Joseph's 20% for seven years;
  Israel's triple harvest in the sixth year. Both are derived from the scenario, not chosen for
  comfort.

---

## Part 7. Reserves, diversification, and the limits of hoarding

### Cast thy bread upon the waters

**Text (Ecclesiastes 11:1–6, KJV)**

> 1. Cast thy bread upon the waters: for thou shalt find it after many days.
> 2. Give a portion to seven, and also to eight; for thou knowest not what evil shall be upon the
>    earth.
> 3. If the clouds be full of rain, they empty themselves upon the earth: and if the tree fall
>    toward the south, or toward the north, in the place where the tree falleth, there it shall be.
> 4. He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap.
> 5. As thou knowest not what is the way of the spirit, nor how the bones do grow in the womb of
>    her that is with child: even so thou knowest not the works of God who maketh all.
> 6. In the morning sow thy seed, and in the evening withhold not thine hand: for thou knowest not
>    whether shall prosper, either this or that, or whether they both shall be alike good.

**Observations:**

1. **Text states:** The return is _delayed and uncertain in timing_: "thou shalt find it after
   many days" (v. 1). Not immediately, but certainly.
2. **Text states (the diversification rule):** "Give a portion to seven, and also to eight"
   (v. 2). **Text states:** seven, and then _also_ eight — the number is deliberately beyond a
   round allocation.
3. **Text states:** The reason for diversification is stated: "for thou knowest not what evil
   shall be upon the earth" (v. 2). Not "to optimise returns." To survive an unknown event.
4. **Text states:** Verse 3 is a statement of inevitability: rain falls, trees fall in the
   direction they fall. **Inference:** these are irreversible and directional events; the point is
   that they will happen and cannot be negotiated.
5. **Text states (the anti-paralysis rule):** "He that observeth the wind shall not sow; and he
   that regardeth the clouds shall not reap" (v. 4). Waiting for certainty produces no harvest.
6. **Text states:** Verse 5 grounds the uncertainty in the limits of knowledge: "thou knowest not
   what is the way of the spirit… even so thou knowest not the works of God who maketh all."
7. **Text states (the parallel-bets rule):** "In the morning sow thy seed, and in the evening
   withhold not thine hand: for thou knowest not whether shall prosper, either this or that, or
   whether they both shall be alike good" (v. 6). Two sowings, both possibly good.

**Inference.** Verses 1–2 and verse 6 together give a coherent capital doctrine:

- **Deploy** (cast the bread; sow in the morning).
- **Diversify** (a portion to seven, and also to eight).
- **Do not wait for certainty** (the observer of the wind).
- **Expect the deployment to take time** (after many days).
- **Make parallel bets, and accept that either, both, or neither may prosper** (v. 6).

**Business consequences:**

- **Concentration is a bet that the evil you do not know about will not happen.** Verse 2 states
  the reason for diversification as the _unknown_ event, not the known risk. A portfolio built
  against known risks is not diversified in the sense of this verse.
- **"Seven, and also to eight" is a rule against over-optimisation.** A perfectly optimised
  allocation is one that has no spare capacity for the unforeseen. The eighth portion is the one
  with no thesis.
- **Waiting for certainty is a decision to have no harvest.** Verse 4 is the anti-paralysis
  axiom, and it pairs with `trends-and-timing.md`.
- **Sow in the morning and the evening.** Verse 6. Two attempts, with no requirement that either
  be the one that works.
- **The delay is expected.** Verse 1: "after many days." A capital deployment with a short
  horizon expectation will be abandoned before it returns.

### A portion to seven, and also to eight

Stated separately because it is the most directly operational line in the passage.

**Text states:** "Give a portion to seven, and also to eight; for thou knowest not what evil shall
be upon the earth."

**Observations:**

1. **Text states:** The verb is "give" — the portions are distributed, not held.
2. **Text states:** The portions go to _seven_, then _also to eight_. The construction suggests a
   primary allocation and a further one, not a single division into eight.
3. **Text states:** The purpose is stated: the unknown evil.

**Inference:** the passage does not specify the amounts. It specifies that the distribution should
exceed the confident allocation — the eighth portion exists because the first seven were
confident.

**Business consequences:**

- **Name the number of bets and the amount in each, in advance.** The text gives the shape
  (seven, then eight) but not the weights; the weights are a judgment. The judgment should be
  made before the pressure (A20).
- **The extra portion has no thesis.** By construction, the eighth bet is the one you cannot
  justify on the merits. That is what it is for.
- **This is not the same as a reserve.** A reserve is capital allocated to a specific recovery
  function (A31). The eighth portion is capital deployed into an unknown _opportunity_. Both are
  needed.

### He that loveth silver shall not be satisfied

**Text (Ecclesiastes 5:10–11, KJV)**

> 10. He that loveth silver shall not be satisfied with silver; nor he that loveth abundance with
>     increase: this is also vanity.
> 11. When goods increase, they are increased that eat them: and what good is there to the owners
>     thereof, saving the beholding of them with their eyes?

**Observations:**

1. **Text states:** The subject is _loving_ silver, not having it. The verb is affection, not
   possession.
2. **Text states:** The mechanism: "nor he that loveth abundance with increase." Increase does not
   satisfy; it feeds the appetite. **Text states:** the appetite grows with the supply.
3. **Text states:** Verse 11 gives a second mechanism: as goods increase, the number of consumers
   increases with them. **Inference:** the owner's _share_ does not grow proportionally, and the
   only benefit left is looking at the total.
4. **Text states:** The verdict is "this is also vanity" — the same word used throughout
   Ecclesiastes for the things that do not deliver what they promise.

**Inference:** the passage distinguishes between capital as an instrument and capital as an end.
It condemns the second, and it does so by describing the mechanism (the appetite scales) rather
than by moral assertion.

**Business consequences:**

- **The mechanism is the useful part.** "When goods increase, they are increased that eat them"
  is an observation about overhead, dependencies, and obligations growing alongside revenue. A
  business whose costs scale one-for-one with revenue has no benefit from growth except the view.
- **Growth targets set in absolute terms are structurally insatiable.** If the target is "more
  than last year," the appetite scales with the achievement.
- **This pairs with 1 Timothy 6:6–19 (Part 9) and Luke 12:15–21 (below).** All three name the same
  failure: the accumulation that has no terminal condition.

### Treasure and oil in the dwelling of the wise

**Text (Proverbs 21:20, KJV)**

> There is treasure to be desired and oil in the dwelling of the wise; but a foolish man spendeth
> it up.

**Observations:**

1. **Text states:** The wise man's house contains both _treasure_ (a durable store) and _oil_ (a
   consumable provision). **Inference:** the reserve has two components — the long-duration store
   and the working provision.
2. **Text states:** The difference between the wise and the foolish is stated as a _verb_:
   "spendeth it up." The fool is not described as poor or unlucky. The fool consumes the store.
3. **Text states:** The treasure is "to be desired" — the desire for a reserve is presented as
   legitimate, not as greed.

**Business consequences:**

- **The distinction between treasure and oil is the distinction between the balance sheet and
  working capital.** Both belong in the house; they are not substitutes.
- **The failure is a verb, not a condition.** "Spendeth it up." A company does not become
  unreserved; it spends the reserve.
- **The presence of the store is the evidence of wisdom.** Not the size of the income.

### Know the state of thy flocks

**Text (Proverbs 27:23–27, KJV)**

> 23. Be thou diligent to know the state of thy flocks, and look well to thy herds.
> 24. For riches are not for ever: and doth the crown endure to every generation?
> 25. The hay appeareth, and the tender grass sheweth itself, and herbs of the mountains are
>     gathered.
> 26. The lambs are for thy clothing, and the goats are the price of the field.
> 27. And thou shalt have goats' milk enough for thy food, for the food of thy household, and for
>     the maintenance for thy maidens.

**Observations:**

1. **Text states:** The command is to _know the state_. "Be thou diligent to know the state of thy
   flocks, and look well to thy herds" (v. 23). Not to increase them; to _know their condition_.
2. **Text states:** The reason given is impermanence: "For riches are not for ever: and doth the
   crown endure to every generation?" (v. 24). The accounting is necessary _because_ the assets do
   not persist.
3. **Text states (the sequence):** Verse 25 describes the seasonal cycle — hay, tender grass,
   mountain herbs. Verse 26 describes the conversion of the flock into clothing and land. Verse 27
   describes the ongoing consumption: milk for the household and the servants.
4. **Text states:** The flow is _operational_, not accumulative. The flock is a _working_ asset
   that produces clothing, capital (the price of the field), and food.
5. **Text states:** The provision covers the household _and_ the staff: "for the food of thy
   household, and for the maintenance for thy maidens" (v. 27).

**Inference:** the passage's financial instruction is _situational awareness_ — the diligent
knowledge of the condition of the productive assets — grounded in the impermanence of all of it.

**Business consequences:**

- **Know the state, not just the total.** Observation 1 is about _condition_: which animals are
  healthy, which are producing, which are ageing. A P&L shows totals; it does not show condition.
- **The knowledge is a duty, and it is diligent.** "Be thou diligent to know." The diligence is
  in the knowing, not in the working.
- **The reason is that the assets do not persist.** Observation 2. A business that knows the state
  of its flocks because it assumes they will still be there has missed the argument.
- **The flock is a working asset, not a store.** Observation 4. The question is not "how much is
  it worth" but "what is it producing, and at what rate."
- **The provision extends to the staff.** Observation 5. Verse 27's list includes the maidens.

### Wages put into a bag with holes

**Text (Haggai 1:5–6, KJV)**

> 5. Now therefore thus saith the LORD of hosts; Consider your ways.
> 6. Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are
>    not filled with drink; ye clothe you, but there is none warm; and he that earneth wages earneth
>    wages to put it into a bag with holes.

**Observations:**

1. **Text states:** The command is _"Consider your ways"_ — an instruction to examine the
   _process_, not the outcome. The problem is in the ways, not in the effort.
2. **Text states (the pattern):** Five clauses, each with the same structure: a lot of input, an
   insufficient output. "Sown much… bring in little." "Eat… not enough." "Drink… not filled."
   "Clothe… none warm." "Earneth wages… bag with holes."
3. **Text states:** The effort is not in question. The people are working. The failure is that the
   output does not accumulate.
4. **Text states:** The image is precise: _a bag with holes_. The money is earned and the money is
   lost, and the loss is continuous and unnoticed.
5. **Text states (the context):** The book's cause is stated in verse 4: "Is it time for you, O ye,
   to dwell in your cieled houses, and this house lie waste?" The labour is going into the wrong
   thing.

**Inference.** The passage describes **leakage** — a system in which effort converts to value and
the value does not stay. And it locates the cause not in the amount of effort but in the _ways_ —
the structure of the activity.

**Business consequences:**

- **"Consider your ways" is a mandate for process review, not effort review.** The response to
  poor accumulation is to examine the structure, not to work harder.
- **A bag with holes is a leak, not a cost.** Leaks are distinguished from costs by being
  unplanned and unmeasured. They are found by tracing the flow, not by reading the budget.
- **The five-clause pattern is diagnostic.** A business that sees "a lot in, little out" across
  _several_ domains at once has a systemic leak, not a set of independent problems. That is the
  signal Haggai is pointing at.
- **Misallocated effort produces the same symptoms as insufficient effort.** Observation 5. The
  people were building their own houses while the temple lay waste. Effort spent on the wrong
  object looks like effort spent and lost.

### The rich fool's barns

**Text (Luke 12:15–21, KJV)**

> 15. And he said unto them, Take heed, and beware of covetousness: for a man's life consisteth not
>     in the abundance of the things which he possesseth.
> 16. And he spake a parable unto them, saying, The ground of a certain rich man brought forth
>     plentifully:
> 17. And he thought within himself, saying, What shall I do, because I have no room where to
>     bestow my fruits?
> 18. And he said, This will I do: I will pull down my barns, and build greater; and there will I
>     bestow all my fruits and my goods.
> 19. And I will say to my soul, Soul, thou hast much goods laid up for many years; take thine ease,
>     eat, drink, and be merry.
> 20. But God said unto him, Thou fool, this night thy soul shall be required of thee: then whose
>     shall those things be, which thou hast provided?
> 21. So is he that layeth up treasure for himself, and is not rich toward God.

**Observations:**

1. **Text states:** The man's harvest was _given_: "The ground of a certain rich man brought forth
   plentifully" (v. 16). He did not produce it; the ground did. **Inference:** the passage's setup
   already undermines the ownership claim (A1).
2. **Text states:** His reasoning is _internal and solitary_: "he thought within himself" (v. 17),
   "he said, This will I do" (v. 18), "I will say to my soul" (v. 19). Four first-person
   statements. There is no counsel, no counterpart (A18).
3. **Text states:** The problem he identifies is _storage capacity_: "I have no room where to
   bestow my fruits" (v. 17). His solution is more capacity (v. 18).
4. **Text states:** The plan's horizon is stated: "much goods laid up for many years" (v. 19).
   **Text states:** The plan is long-horizon and self-directed.
5. **Text states:** The failure is not the barns. It is the _address to his own soul_: "Soul, thou
   hast much goods… take thine ease." He has made the store the ground of his security, and the
   store has a term he did not count (A30).
6. **Text states:** The verdict is "Thou fool" and the reason given is _whose it will be_: "then
   whose shall those things be, which thou hast provided?" (v. 20). The question is about
   succession, and it is unanswered.
7. **Text states:** Verse 21 states the general principle: "So is he that layeth up treasure for
   himself, and is not rich toward God."

**Inference.** Read against Part 5 (Joseph), this passage is the _control case_. Joseph also
stored grain against a famine, and his storage was commended. The difference is not the barn. The
differences the text supplies are:

|             | Joseph (Genesis 41)                    | The rich fool (Luke 12)                    |
| ----------- | -------------------------------------- | ------------------------------------------ |
| Attribution | "It is not in me" (41:16)              | "I will say to my soul"                    |
| Counsel     | A plan reviewed and adopted by Pharaoh | "he thought within himself"                |
| Purpose     | "that the land perish not" (41:36)     | "take thine ease" (v. 19)                  |
| Succession  | Officers appointed; a system           | Unanswered: "whose shall those things be?" |

**Inference:** the sin is not the reserve. It is the reserve held for the self, planned in
isolation, with no purpose beyond the owner's ease, and with no successor named.

**Business consequences:**

- **A reserve needs a stated purpose beyond the owner's comfort.** Observation 5. "So we can
  survive a downturn" is a purpose. "So we can relax" is the address to the soul.
- **Plan with counsel.** Observation 2. Four first-person statements and no second party. This is
  A18's failure case in a financial setting.
- **Name the succession.** Observation 6. The unanswered question is the verdict. A founder with
  a large balance sheet and no answer to "whose shall those things be?" has the same defect.
- **More capacity is often the wrong answer.** Observation 3. The identified problem was storage;
  the solution was more storage; the actual problem was none of that.
- **This is not a prohibition on saving.** Joseph saved. The text condemns a specific
  configuration, not the practice.

---

## Part 8. Stewardship as a category

### The word: G3623 oikonomos

**Lexical (verbatim).**

- **G3623 οἰκονόμος (_oikonomos_)** — "a house-distributor (i.e. manager), or overseer, i.e. an
  employee in that capacity; by extension, a fiscal agent (treasurer); figuratively, a preacher
  (of the Gospel)." From G3624 οἶκος (house) and the base of G3551 νόμος (law). KJV renderings:
  "chamberlain, governor, steward."
- **G3622 οἰκονομία (_oikonomia_)** — "administration (of a household or estate); specially, a
  religious 'economy'." From G3623. KJV renderings: "dispensation, stewardship."
- **G3621 οἰκονομέω (_oikonomeo_)** — "to manage (a house, i.e. an estate)." From G3623. KJV
  rendering: "be steward."

**Observations on the word:**

1. **Lexical:** The compound is _house_ + _law/rule_. The steward is the one who administers the
   household according to its rule.
2. **Lexical:** The dictionary's own glosses are _employee_, _manager_, _fiscal agent_,
   _treasurer_. The steward is explicitly an employee in that capacity, not the owner.
3. **Lexical:** The word is the root of the modern term _economy_. The Greek word for the
   management of a household became the word for the management of everything.
4. **Lexical:** The figurative extension to "a preacher (of the Gospel)" is given in the same
   entry. The word carried over into a non-commercial sense.

**Inference:** "stewardship" is not a devotional term for money. It is the _job title_ of the
employee who runs an estate on the owner's behalf. The word carries employee status, delegated
authority, and accountability to the owner — all three at once.

### The accusation and the audit

**Text (Luke 16:1–13, KJV)**

> 1. And he said also unto his disciples, There was a certain rich man, which had a steward; and
>    the same was accused unto him that he had wasted his goods.
> 2. And he called him, and said unto him, How is it that I hear this of thee? give an account of
>    thy stewardship; for thou mayest be no longer steward.
> 3. Then the steward said within himself, What shall I do? for my lord taketh away from me the
>    stewardship: I cannot dig; to beg I am ashamed.
> 4. I am resolved what to do, that, when I am put out of the stewardship, they may receive me into
>    their houses.
> 5. So he called every one of his lord's debtors unto him, and said unto the first, How much
>    owest thou unto my lord?
> 6. And he said, An hundred measures of oil. And he said unto him, Take thy bill, and sit down
>    quickly, and write fifty.
> 7. Then said he to another, And how much owest thou? And he said, An hundred measures of wheat.
>    And he said unto him, Take thy bill, and write fourscore.
> 8. And the lord commended the unjust steward, because he had done wisely: for the children of
>    this world are in their generation wiser than the children of light.
> 9. And I say unto you, Make to yourselves friends of the mammon of unrighteousness; that, when
>    ye fail, they may receive you into everlasting habitations.
> 10. He that is faithful in that which is least is faithful also in much: and he that is unjust in
>     the least is unjust also in much.
> 11. If therefore ye have not been faithful in the unrighteous mammon, who will commit to your
>     trust the true riches?
> 12. And if ye have not been faithful in that which is another man's, who shall give you that
>     which is your own?
> 13. No servant can serve two masters: for either he will hate the one, and love the other; or
>     else he will hold to the one, and despise the other. Ye cannot serve God and mammon.

**Observations:**

1. **Text states:** The trigger is a _report_: "the same was accused unto him that he had wasted
   his goods" (v. 1). **Lexical:** "wasted" is **G1287 διασκορπίζω (_diaskorpizo_)** — "to
   dissipate, i.e. (genitive case) to rout or separate; specially, to winnow; figuratively, to
   squander." KJV: "disperse, scatter (abroad), strew, waste." **Inference:** the image is
   _scattering_ — the assets dispersed rather than conserved. That is the specific accusation.
2. **Text states:** The audit is demanded: "give an account of thy stewardship" (v. 2). **Lexical:**
   "account" is **G3056 λόγος (_logos_)** — the same word as "reckoneth" in Matthew 25:19. The
   accounting vocabulary is consistent across the two parables.
3. **Text states:** The steward's motive is stated plainly and is not honourable: "that, when I am
   put out of the stewardship, they may receive me into their houses" (v. 4). He is acting in his
   own interest.
4. **Text states:** The mechanism is debt reduction on the master's books: "Take thy bill, and sit
   down quickly, and write fifty" (v. 6). The steward reduces what the debtors owe the master.
5. **Text states:** The master _commends_ him: "the lord commended the unjust steward, because he
   had done wisely" (v. 8). **Text states:** the commendation is for _wisdom_. **Lexical:** G5430
   φρονίμως (_phronimos_), "prudently," KJV rendering "wisely." The text immediately labels him
   "unjust."
6. **Text states:** The stated reason for the commendation is comparative: "for the children of
   this world are in their generation wiser than the children of light" (v. 8).
7. **Text states (the application):** Verses 10–12 give three escalating tests, all on the same
   axis — _faithfulness in small things_:
   - v. 10: faithful in least ↔ faithful in much.
   - v. 11: faithful in unrighteous mammon ↔ trusted with true riches.
   - v. 12: faithful in another man's things ↔ given one's own.
8. **Text states:** Verse 13 states the limit: "No servant can serve two masters… Ye cannot serve
   God and mammon."

### What the master commends, and what he does not

**This passage is commonly mishandled in both directions, so the line needs to be drawn
carefully.**

**Text states:** The master commends the steward's _wisdom_ — his foresight in converting an
asset he was about to lose into relationships he would need. The master does not commend the
dishonesty, and the text calls him "the unjust steward" in the very sentence that records the
commendation.

**Text states:** The application Jesus draws is _not_ "be dishonest." It is: "the children of this
world are in their generation wiser than the children of light" — i.e., worldly people are more
foresighted about their own future than religious people are about theirs. The rebuke is aimed at
the _lack of foresight among the faithful_, not at the steward's ethics.

**Inference (stated as an inference, because the passage is genuinely difficult):**

- **The transferable element is foresight, not the fraud.** The steward looked ahead to the
  consequence of losing his position and acted before it arrived. That is A19 (execution reveals
  need) and A27 (price the thorns) in narrative form.
- **Verse 9 is the hardest line in the passage.** "Make to yourselves friends of the mammon of
  unrighteousness; that, when ye fail, they may receive you into everlasting habitations." I read
  it as: use money — which is described here as _unrighteous mammon_, i.e. not a righteous thing
  in itself — for purposes that outlast it. But faithful readers differ on this verse, and I am
  not going to present one reading as the text's plain sense.
- **Verse 13 is the boundary that prevents the wrong reading.** Whatever verse 9 means, verse 13
  rules out the reading where money becomes the master. The steward's shrewdness is usable; his
  service is not transferable.

### Faithful in the least

**Text states (the three tests, vv. 10–12):** These are the operationally useful verses, and they
are stated as general rules.

| Verse | The test                              | The stake                      |
| ----- | ------------------------------------- | ------------------------------ |
| 10    | Faithful in least vs. unjust in least | Faithfulness in much           |
| 11    | Faithful in unrighteous mammon        | Being trusted with true riches |
| 12    | Faithful in another man's things      | Being given your own           |

**Observations:**

1. **Text states:** The tests are _escalating_. Least → much; mammon → true riches; another's →
   your own.
2. **Text states:** Each test is a _prerequisite_, stated as a rhetorical question. "If therefore
   ye have not been faithful in the unrighteous mammon, who will commit to your trust the true
   riches?" (v. 11). The answer is implied.
3. **Text states:** The smallest denomination is the _test instrument_. "He that is faithful in
   that which is least is faithful also in much" (v. 10).
4. **Text states:** Verse 12 makes an explicit distinction between _another man's_ things and
   _your own_. **Inference:** the passage assumes that the steward's current holdings are not his,
   and that faithfulness with them is the qualification for owning.

**Business consequences:**

- **Small assignments are the qualification for large ones, and the qualification is
  faithfulness, not brilliance.** Observation 3.
- **The test is conducted on someone else's assets.** Observation 4. A manager's stewardship of
  the company's capital is the audition for their own.
- **A track record of scatter is disqualifying.** Observation 1 and the word _diaskorpizo_: the
  accusation was dissipation. Someone who has dispersed assets in the past is not a candidate for
  a larger allocation, regardless of their explanation.
- **Foresight is a legitimate competence, even when the world demonstrates it better than the
  church does.** Observation in the previous section. This is a rebuke to complacency, not an
  endorsement of the method.
- **The stewardship category is employee status.** From the lexical work: the _oikonomos_ is a
  manager, a fiscal agent, an employee. The capital is not his. This is A1 stated as a job
  description.

---

## Part 9. Contentment and the charge to the rich

**Text (1 Timothy 6:6–19, KJV)**

> 6. But godliness with contentment is great gain.
> 7. For we brought nothing into this world, and it is certain we can carry nothing out.
> 8. And having food and raiment let us be therewith content.
> 9. But they that will be rich fall into temptation and a snare, and into many foolish and hurtful
>    lusts, which drown men in destruction and perdition.
> 10. For the love of money is the root of all evil: which while some coveted after, they have
>     erred from the faith, and pierced themselves through with many sorrows.
> 11. But thou, O man of God, flee these things; and follow after righteousness, godliness, faith,
>     love, patience, meekness.
> 12. Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and
>     hast professed a good profession before many witnesses.
> 13. I give thee charge in the sight of God, who quickeneth all things, and before Christ Jesus,
>     who before Pontius Pilate witnessed a good confession;
> 14. That thou keep this commandment without spot, unrebukeable, until the appearing of our Lord
>     Jesus Christ:
> 15. Which in his times he shall shew, who is the blessed and only Potentate, the King of kings,
>     and Lord of lords;
> 16. Who only hath immortality, dwelling in the light which no man can approach unto; whom no man
>     hath seen, nor can see: to whom be honour and power everlasting. Amen.
> 17. Charge them that are rich in this world, that they be not highminded, nor trust in uncertain
>     riches, but in the living God, who giveth us richly all things to enjoy;
> 18. That they do good, that they be rich in good works, ready to distribute, willing to
>     communicate;
> 19. Laying up in store for themselves a good foundation against the time to come, that they may
>     lay hold on eternal life.

**Observations:**

1. **Text states:** "Godliness with contentment is great gain" (v. 6). **Inference:** contentment
   is presented as a _form of gain_, which reframes the whole accounting.
2. **Text states:** The ground of contentment is stated: "For we brought nothing into this world,
   and it is certain we can carry nothing out" (v. 7). **Inference:** the argument is A1 — the
   assets were received and will be surrendered.
3. **Text states:** The sufficiency threshold is stated: "having food and raiment let us be
   therewith content" (v. 8). Two items, named.
4. **Text states (the warning, precisely worded):** "they that **will** be rich fall into
   temptation and a snare" (v. 9). **Text states:** the subject is the _will_, not the wealth. The
   verb is volitional.
5. **Text states:** Verse 10 names "the **love of** money" as "the root of all evil" — not money.
   The Greek is φιλαργυρία, _philargyria_ — the love of silver. **Inference:** the passage never
   condemns the possession of money; it condemns the desire for it.
6. **Text states:** The mechanism is stated: "which while some coveted after, they have erred from
   the faith, and pierced themselves through with many sorrows" (v. 10). Three results: error,
   piercing, sorrows. **Text states:** the harm is _self-inflicted_ — "pierced themselves through."
7. **Text states (the charge to the rich, vv. 17–19):** Four instructions, and none of them is
   "give it away":
   - **"be not highminded"** — humility.
   - **"nor trust in uncertain riches, but in the living God"** — the object of trust, not the
     quantity of the holding.
   - **"that they do good, that they be rich in good works, ready to distribute, willing to
     communicate"** — a disposition of readiness, not a mandated transfer.
   - **"Laying up in store for themselves a good foundation against the time to come"** —
     accumulation is _permitted and reframed_: the store is a "good foundation," and the phrase
     is a direct echo of the talent parable's "laying up."
8. **Text states:** The stated purpose of the store is eschatological: "that they may lay hold on
   eternal life" (v. 19). **Text states:** verse 17 adds "who giveth us richly all things to
   enjoy" — enjoyment is affirmed, not condemned.
9. **Text states:** The rich are _not told to become poor._ The charge is to a specific set of
   dispositions and actions.

**Inference.** The passage's structure is: a warning to those who _want_ to be rich (vv. 9–10),
then a charge to those who _are_ rich (vv. 17–19). The two are addressed differently. The first
is a warning; the second is a set of instructions, and the instructions permit continued
ownership.

**Business consequences:**

- **"The love of money" and "money" are different objects, and the text keeps them separate.**
  Observation 5. A business that needs capital is not in violation. A business that _wants_ to be
  rich in the sense of verse 9 — the volitional, unbounded desire — is the subject of the warning.
- **The sufficiency threshold is named: food and raiment.** Observation 3. Whether a modern
  business can be described as having "food and raiment" is a judgment; the text gives a
  threshold, and it is low.
- **"Ready to distribute" is a disposition, not a quota.** Observation 7. The instruction is
  about readiness and willingness, which is a standing posture rather than a percentage.
- **Accumulation is reframed, not forbidden.** Observation 7, the fourth instruction. "Laying up
  in store… a good foundation" is permitted language. Compare Luke 12:21, which condemns laying up
  treasure _for himself_. The difference is the object of the store.
- **Enjoyment is affirmed.** Observation 8: "who giveth us richly all things to enjoy." A
  theology that treats all comfort as suspect does not come from this passage.
- **The harm is self-inflicted.** Observation 6: "pierced themselves through with many sorrows."
  This is a consequence, not a punishment, and it is the kind of claim that pairs with A30
  (opportunity cost) and A2 (drift).

---

## Part 10. What is already in the house

**Text (2 Kings 4:1–7, KJV)**

> 1. Now there cried a certain woman of the wives of the sons of the prophets unto Elisha, saying,
>    Thy servant my husband is dead; and thou knowest that thy servant did fear the LORD: and the
>    creditor is come to take unto him my two sons to be bondmen.
> 2. And Elisha said unto her, What shall I do for thee? tell me, what hast thou in the house? And
>    she said, Thine handmaid hath not any thing in the house, save a pot of oil.
> 3. Then he said, Go, borrow thee vessels abroad of all thy neighbours, even empty vessels; borrow
>    not a few.
> 4. And when thou art come in, thou shalt shut the door upon thee and upon thy sons, and shalt
>    pour out into all those vessels, and thou shalt set aside that which is full.
> 5. So she went from him, and shut the door upon her and upon her sons, who brought the vessels to
>    her; and she poured out.
> 6. And it came to pass, when the vessels were full, that she said unto her son, Bring me yet a
>    vessel. And he said, There is not a vessel more. And the oil stayed.
> 7. Then she came and told the man of God. And he said, Go, sell the oil, and pay thy debt, and
>    live thou and thy children of the rest.

**Observations:**

1. **Text states (the situation):** A widow, a creditor, and the threat of her sons being taken as
   bondmen (v. 1). **Text states:** The debt is real and the collateral is _labour_ — the
   children.
2. **Text states (the first question):** "tell me, what hast thou in the house?" (v. 2). The
   question precedes any provision. **Inference:** the intervention begins with an inventory of
   what is already present.
3. **Text states (the answer):** "Thine handmaid hath not any thing in the house, save a pot of
   oil" (v. 2). **Text states:** The woman's own assessment is _nothing_ — and the text records
   the exception she almost did not name.
4. **Text states (the instruction):** Borrow empty vessels from the neighbours, "even empty
   vessels; borrow not a few" (v. 3). **Inference:** the capacity of the _container_ determines
   the volume of the provision. The instruction to borrow many vessels is an instruction to
   enlarge the container.
5. **Text states (the process):** "shut the door upon thee and upon thy sons" (v. 4). The work is
   private, and the sons are participants.
6. **Text states (the constraint):** "And he said, There is not a vessel more. And the oil stayed"
   (v. 6). **Text states:** The flow stopped when the vessels ran out — not when the supply ran
   out. The limit was the container, not the source.
7. **Text states (the disposition):** Three instructions: "sell the oil, and pay thy debt, and
   live thou and thy children of the rest" (v. 7). **Text states:** In order — sell, repay, live
   on the remainder. The debt is retired first, and the family lives on what is left.

**Inference.** The passage's financial teaching, stated as an inference:

- **Start with an inventory of what is already in the house.** Observation 2. The provision came
  through the asset already present, which the owner had described as nothing.
- **The binding constraint is usually capacity, not supply.** Observation 6. The oil did not stop;
  the vessels ran out. This is A5 (formation precedes filling) stated as an economic fact: the
  container limits the filling.
- **Debt retirement precedes consumption.** Observation 7. "Pay thy debt, and live thou and thy
  children of the rest." The order is stated.
- **The asset was already there.** Observation 3. The miracle was not the creation of an asset; it
  was the multiplication of one that existed. **Inference:** the first question in a cash crisis
  is not "how do we raise money" but "what do we already have."

**Business consequences:**

- **The first question in a cash crisis is "what hast thou in the house?"** Not "what can we
  raise." The inventory comes first.
- **The owner's own assessment of their assets is unreliable.** Observation 3: "not any thing…
  save a pot of oil." The owner of an asset frequently does not count it, because it is not what
  they wish they had.
- **Capacity investment precedes volume.** Observation 6. Borrowing vessels is a capital
  expenditure that has to happen before the revenue arrives, which connects to A13 (provision
  precedes assignment).
- **The debt is retired before the lifestyle is funded.** Observation 7. The instruction is
  explicit and ordered.
- **The work involved other people.** Observation 5: the sons brought the vessels. A rescue that
  excludes the household from the work is not the pattern here.
- **Note the collateral in verse 1.** The creditor's remedy was the children's labour. This is the
  situation Parts 4 and 6 legislate against, and it is worth reading the three passages together:
  the law forbids taking the means of life as security (Deuteronomy 24:6), and here the family's
  means of life is exactly what is at stake.

---

## Part 11. Working rules

Distilled from the material above. These are inferences, stated as working rules, not commands.

**On deployment**

1. **Idle capital is the condemned option, and the minimum standard is the risk-free rate**
   (Matthew 25:27; Luke 19:23). Cash with no assignment is the talent in the ground.
2. **Allocate by a stated principle, and know which one you are running.** Unequal-by-capacity
   (Matthew) and equal-by-default (Luke) are both in Scripture. Confusing them produces
   accusations with no basis.
3. **Assess return against allocation, not in absolute terms** (Matthew 25:21, 23 — identical
   commendation for 100% and 100%).
4. **Reallocate away from unproductive managers** (Matthew 25:28). A ratchet that only goes up is
   not an allocation process.
5. **Diversify against the unknown event, not the known risk** (Ecclesiastes 11:2).
6. **Give a portion to seven, and also to eight.** The extra portion has no thesis by design.
7. **Sow morning and evening.** Parallel bets under uncertainty (Ecclesiastes 11:6).
8. **Do not wait for certainty** (Ecclesiastes 11:4). The observer of the wind never sows.

**On counting and completion**

9. **Count to completion, not to start** (Luke 14:28–30). "Sufficient to finish" is the test.
10. **Assess against the opponent, with numbers, before engaging** (Luke 14:31–32). Negotiated
    settlement is a legitimate outcome of the assessment.
11. **Define the reckoning date and hold it** (Matthew 25:19 — "after a long time"). No scheduled
    accounting, no accountability.
12. **Self-report before a standard** (Matthew 25:20, 22; Luke 19:16, 18).

**On debt**

13. **Price the servitude, not just the interest** (Proverbs 22:7). Read the covenant as a list of
    surrendered authorities.
14. **Treat a guarantee as a liability created at the moment of speech** (Proverbs 6:1–2), and
    unwind it urgently and humbly if it was a mistake (vv. 3–5).
15. **Do not extract from someone who cannot refuse** (Exodus 22:25; Leviticus 25:35–37). The
    Hebrew for interest is built on a word for a snakebite.
16. **Set a survival floor on collateral** (Exodus 22:26–27; Deuteronomy 24:6, 10–13). Never take
    the means of production or the thing a person needs to sleep.
17. **Model debt against the cycle, not the present** (Deuteronomy 15:1–11). The law anticipates
    and forbids the withdrawal behaviour the release year would otherwise cause.
18. **The preferred position is to lend and not borrow** (Deuteronomy 15:6) — stated as an ideal,
    not a prohibition.

**On reserves**

19. **Derive the reserve rate from the scenario, not from convention** (Genesis 41:34 — 20% for
    seven years, which accumulates ~1.4 years of output).
20. **Name one owner for the reserve** (Genesis 41:33). A reserve without an owner gets raided.
21. **Store near production under central authority** (Genesis 41:35, 48).
22. **The reserve is a competitive position, not just a cushion** (Genesis 41:54–57).
23. **A reserve needs a purpose beyond the owner's ease** (Luke 12:19 vs. Genesis 41:36). The
    difference between Joseph's barns and the rich fool's is the purpose, the counsel, and the
    named succession.
24. **Know the state, not just the total** (Proverbs 27:23). Condition is not shown by a P&L.
25. **A reserve is not idle capital** (Part 1 vs. Part 7). The resolution: a reserve is capital
    allocated to a specific recovery function, which is work. Hoarding is capital with no
    assignment.

**On structure and limits**

26. **Resets are a design feature, not a failure** (Leviticus 25; Deuteronomy 15). A system with
    no reset concentrates; that is the default, not a moral failure of the participants.
27. **Cap durability, not accumulation** (Leviticus 25:23). The text does not condemn the man with
    many fields; it limits how long he can hold them.
28. **Distress transfers run cash → movables → productive assets → control** (Genesis 47:14–21).
    Decide in advance where you will stop (A20).
29. **Name the exemptions before you need them.** Every consolidation has them (Genesis 47:22),
    and the list is the map of who has standing.
30. **Consider irreversibility explicitly** (Genesis 47:26 — "Joseph made it a law over the land of
    Egypt unto this day"). A32 applied
    to capital: slow the irreversible decisions down.

**On what is already there**

31. **Start with "what hast thou in the house?"** (2 Kings 4:2). The owner's own assessment is
    unreliable.
32. **The binding constraint is usually capacity, not supply** (2 Kings 4:6). The oil stopped when
    the vessels ran out.
33. **Retire debt before funding consumption** (2 Kings 4:7). The order is stated.
34. **"Consider your ways"** (Haggai 1:5). A bag with holes is a structural leak; the response is
    process review, not more effort.
35. **Watch for attribution drift** (Genesis 41:16 — "It is not in me"). The disclaimer must
    precede the result to be worth anything.

---

## Appendix: verification log

### Verses retrieved with `scripture.ts`

Matthew 25:14–30; Luke 19:11–27; Luke 14:28–32; Proverbs 22:7; Proverbs 6:1–5; Genesis 41:1–57
(including 41:16, 41:33–36, 41:47–57); Genesis 47:13–26; Leviticus 25:1–34; Deuteronomy 15:1–11;
Exodus 22:25–27; Leviticus 25:35–37; Deuteronomy 23:19–20; Deuteronomy 24:6, 10–13; Ecclesiastes
11:1–6; Ecclesiastes 5:10–11; 1 Timothy 6:6–19; Proverbs 27:23–27; Haggai 1:5–6; Luke 16:1–13;
Luke 12:15–21; 2 Kings 4:1–7. Also: Proverbs 21:20; Proverbs 13:11; Proverbs 10:22; Proverbs
3:9–10; Malachi 3:10; Proverbs 11:24–26; Proverbs 28:8; Proverbs 19:17; Proverbs 14:31; Nehemiah
5:14–19; Psalm 112:5; Luke 6:34–35; Romans 13:7–8; 2 Corinthians 8:13–15; Proverbs 16:16; Proverbs
23:4–5; Genesis 41:53–57; Matthew 20:2.

### Lexical claims verified with `lexicon.ts`

G5007 _talanton_; G3623 _oikonomos_; G3622 _oikonomia_; G3621 _oikonomeo_; G3414 _mna_; G1220
_denarion_; G1411 _dynamis_; G3056 _logos_; G5110 _tokos_; G5585 _psephizo_ (see note 4 below);
G1287 _diaskorpizo_ (see note 4 below); H5650 _ebed_; H5647 _abad_; H6148 _arab_; H4855
_mashsha_; H5378 _nasha_; H5383 _nashah_; H5391 _nashak_; H5392 _neshek_.

### Claims I could NOT verify with the supplied tools

Stated explicitly rather than smoothed over.

1. **The talent's value (≈6,000 denarii, ≈20 years of a labourer's wages).** Strong's G5007 gives
   no figure and does not mention denarii at all (verified by direct search of the Strong's source
   data — the string "denarii" does not occur in `strongs-dictionary.xhtml`). The figure is a
   historical/numismatic claim from outside these tools. It coheres with Matthew 20:2 (a
   _denarion_ is a day's wage), but the anchor is **unverified here**. The file treats the
   magnitude qualitatively.

2. **The talent-to-mina ratio (1 talent = 60 minas).** Not stated in Strong's. G3414 _mna_ is
   defined only as "a mna (i.e. mina), a certain weight." **Unverified here.** The file does not
   rely on the ratio; it relies only on the fact that Matthew's amounts are unequal and Luke's are
   equal, which the texts state directly.

3. **Proverbs 11:15, Proverbs 17:18, Proverbs 22:26–27.** These were retrieved and are quoted
   verbatim in Part 4 under "Surety for a neighbour."

4. **G5585 _psephizo_, G1287 _diaskorpizo_, G5430 _phronimos_.** All three were looked up and
   their definitions quoted verbatim above. Strong's gives G5585 as "to use pebbles in
   enumeration, i.e. (generally) to compute"; G1287 as "to dissipate, i.e. (genitive case) to rout
   or separate; specially, to winnow; figuratively, to squander"; G5430 as "prudently."

5. **The identification of the rich man's barns (Luke 12) as a _commended_ practice in Joseph's
   case.** This is my comparison, not a statement in either text. It is labelled as an inference
   in Part 7, and the four-row table is an inference throughout.

6. **The "20% for seven years = ~1.4 years of output" arithmetic.** This is my computation from
   the text's stated rate (Genesis 41:34, "the fifth part") and stated duration (seven years). It
   is arithmetic on the text, not a claim in the text. Note also that the text does not state
   whether the levy was on the gross harvest or on some other base; I have read it as gross
   production, which is the natural reading of "take up the fifth part of the land of Egypt in the
   seven plenteous years," but it is a reading.

7. **The reading of Genesis 47 as a voluntary-but-coercive consolidation.** The text states that
   the people proposed the sale and that they said "Thou hast saved our lives." It also states
   that the land became Pharaoh's and the arrangement was made law. Both are in the text; the
   characterisation is mine, and Part 5 flags that faithful readers differ.

8. **`scripture-foundations` reference files.** The skill's SKILL.md cites
   `skills/scripture-foundations/references/original-language.md`, `skills/scripture-foundations/references/kjv-1611.md`, `skills/scripture-foundations/references/chapter-map.md`, and
   `skills/scripture-foundations/references/genesis-1-3.md`. None are present in the installed skill directory (verified — the
   folder contains `SKILL.md` and `scripts/` only). Lexical content here was taken from
   `lexicon.ts` output directly.
