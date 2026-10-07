# Capital and Stewardship

This file covers money, debt, reserves, and the accounting of capital. It collects what Scripture states about each. It separates that from what I infer. It also names the friction that makes each inference hard to apply.

## Method and labels

This file uses the same labels as `axioms.md`:

- Text states: the verse says it.
- Lexical: the Strong's entry says it.
- Inference: I draw it from the text. Every business application is an inference.
- Contested: faithful readers read the text in more than one way.
- Speculation: the text gives little support.

The verses are quoted from the KJV as `scripture.ts` returns them. The Strong's definitions are quoted verbatim from `lexicon.ts`. In a block quote, the number at the start of each line is the verse number.

These axioms govern this file:

- A1 (All value is derived).
- A13 (Provision precedes assignment).
- A15 (Work is bounded; rest is structural).
- A31 (Recovery is provided, and it costs something that is not you).
- A2 (The default state is formless and empty). Decay is the baseline. That makes reserves a design requirement and not a preference.

One warning comes before the material. The economic passages of the Bible speak to an agrarian covenant community before coinage. The text uses money: "If thou lend money" (Exodus 22:25) and "all the money that was found in the land of Egypt" (Genesis 47:14). But that money was weighed metal, not minted coin. The passages also speak to persons far more often than to firms. A modern limited-liability company is not the addressee of Leviticus 25. I make the inferences in this file with that gap in view. Where the gap is large, I say so.

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
  - [Surety for a neighbor (Proverbs 6:1–5)](#surety-for-a-neighbor)
  - [No usury against the poor (Exodus 22:25–27, and Leviticus 25:35–37)](#no-usury-against-the-poor)
  - [The pledge and the millstone (Exodus 22:26–27, and Deuteronomy 24:6, 10–13)](#the-pledge-and-the-millstone)
  - [The year of release (Deuteronomy 15:1–11)](#the-year-of-release)
- [Part 5. Joseph and the seven-year cycle (Genesis 41 and 47)](#part-5-joseph-and-the-seven-year-cycle)
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

Text (Matthew 25:14–30, KJV):

> 14 For the kingdom of heaven is as a man travelling into a far country, who called his own servants, and delivered unto them his goods.
>
> 15 And unto one he gave five talents, to another two, and to another one; to every man according to his several ability; and straightway took his journey.
>
> 16 Then he that had received the five talents went and traded with the same, and made them other five talents.
>
> 17 And likewise he that had received two, he also gained other two.
>
> 18 But he that had received one went and digged in the earth, and hid his lord's money.
>
> 19 After a long time the lord of those servants cometh, and reckoneth with them.
>
> 20 And so he that had received five talents came and brought other five talents, saying, Lord, thou deliveredst unto me five talents: behold, I have gained beside them five talents more.
>
> 21 His lord said unto him, Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.
>
> 22 He also that had received two talents came and said, Lord, thou deliveredst unto me two talents: behold, I have gained two other talents beside them.
>
> 23 His lord said unto him, Well done, good and faithful servant; thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.
>
> 24 Then he which had received the one talent came and said, Lord, I knew thee that thou art an hard man, reaping where thou hast not sown, and gathering where thou hast not strawed:
>
> 25 And I was afraid, and went and hid thy talent in the earth: lo, there thou hast that is thine.
>
> 26 His lord answered and said unto him, Thou wicked and slothful servant, thou knewest that I reap where I sowed not, and gather where I have not strawed:
>
> 27 Thou oughtest therefore to have put my money to the exchangers, and then at my coming I should have received mine own with usury.
>
> 28 Take therefore the talent from him, and give it unto him which hath ten talents.
>
> 29 For unto every one that hath shall be given, and he shall have abundance: but from him that hath not shall be taken away even that which he hath.
>
> 30 And cast ye the unprofitable servant into outer darkness: there shall be weeping and gnashing of teeth.

### The word is a weight of money, not an ability

Lexical (verbatim): G5007 τάλαντον (_talanton_): "equivalent to G5342 (φέρω)); a balance (as supporting weights), i.e. (by implication) a certain weight (and thence a coin or rather sum of money) or 'talent'." Strong's derives it from the neuter of a presumed derivative of the original form of _tlao_ (to bear). The KJV renders it "talent."

Text states: the thing that the master delivers is "his goods" (v. 14) and "my money" (v. 27). The master calls it money twice. Whatever else the parable is about, the object in it is capital.

The popular reading of this parable is "use your God-given abilities." That reading rests on the English sense of the word _talent_. The sense "natural ability" came into English from this parable, and English used it before 1611. But the Greek word _talanton_ is a weight of metal used as money. That fact decides the point of the parable, whatever the English word meant in 1611.

The point of the parable is this: capital is entrusted, allocated unequally, and accounted for. That claim is sharper and more demanding than the one that readers usually draw from the parable. For the units of money in the KJV, see `../scripture-foundations/references/kjv-1611.md`.

What the lexicon does not establish: Strong's gives no figure. It does not say 6,000 denarii, and it does not mention denarii at all. A direct search of the Strong's source data finds no "denarii". A common figure is one talent ≈ 6,000 denarii ≈ about 20 years of the wages of a laborer. That figure is a historical and numismatic claim from outside these tools.

The figure agrees with one thing that Scripture states, in Matthew 20:2: "And when he had agreed with the labourers for a penny a day, he sent them into his vineyard." The "penny" there is G1220 δηνάριον (_denarion_), "a denarius (or ten asses)". It is a day's wage. If a talent were 6,000 denarii, then 6,000 days at 300 working days a year is 20 years. The arithmetic agrees, but the anchor figure is not verified here. Use the size only as a quality: this is very large money. Do not build an argument on the exact multiple.

Inference: the unit is very large, so the stakes of the parable are very large. Five talents is not a test of diligence with pocket change. The master allocates the capital of a working lifetime, three times over, to three servants.

### The allocation is unequal and stated as deliberate

Text states: "And unto one he gave five talents, to another two, and to another one; to every man according to his several ability" (v. 15).

Four observations:

1. Text states: the amounts differ: 5, 2, and 1. They are not equal.
2. Text states: the text explains the difference: "according to his several ability." The owner makes a deliberate judgment about capacity before anyone does any work.
3. Lexical: "ability" is G1411 δύναμις (_dynamis_): "force (literally or figuratively); specially, miraculous power (usually by implication, a miracle itself)." KJV: "ability, abundance, meaning, might(-ily, -y, -y deed), (worker of) miracle(-s), power, strength, violence, mighty (wonderful) work." This word means power or capacity, not skill. The allocation follows the capacity of each servant to deploy capital. That capacity is a different thing from diligence.
4. Text states: the master does not stay to supervise: "and straightway took his journey" (v. 15). The servants act without oversight.

Inference: three consequences follow.

- Unequal allocation is not injustice. The master has the right to allocate his own goods. The text presents the unequal allocation as the setup, not as the problem. The servant who received one talent does not complain about the allocation. He complains about the character of the master (v. 24). The text does not treat the complaint as valid.
- Allocation follows capacity, and the allocator judges the capacity. The servants did not choose their own amounts. An allocator who distributes equally without regard to capacity is not fair. That allocator refuses to make the judgment that the text shows.
- The absence of supervision is the design. The master leaves, and the servants work unobserved for "a long time" (v. 19). Genesis 39 has the same structure. Joseph is in charge, and nobody watches: "And he left all that he had in Joseph's hand" (Genesis 39:6). Trust shows itself as absence. The absence makes the accounting meaningful.

"Ability" and A11: the unequal allocation connects to the "after his kind" formula of A11. What is planted decides what comes up. The master allocates by capacity, and capacity is an inference about yield. A capital allocator does the same work.

### The accounting is the point

Text states: "After a long time the lord of those servants cometh, and reckoneth with them" (v. 19).

Lexical: "reckoneth" is G4868 συναίρω (_synairo_): "to make up together, i.e. (figuratively) to compute (an account)." KJV: "reckon, take." The phrase is "reckoneth with them". In the Greek, the object of the verb is G3056 λόγος (_logos_), the account. Strong's defines _logos_ as "something said (including the thought); by implication, a topic (subject of discourse), also reasoning (the mental faculty) or motive; by extension, a computation". Its KJV renderings include "account," "reason," and "+ reckon." The same word means both a word and a computation.

Text states (the structure of the reckoning):

- The two profitable servants report in the same way. Each says "thou deliveredst unto me" a number of talents, then "behold, I have gained" the same number again (vv. 20, 22).
- Both receive the same praise: "thou hast been faithful over a few things, I will make thee ruler over many things" (vv. 21, 23).
- The servant with two talents receives the same treatment as the servant with five. The words are the same, and the reward is the same.

Inference: the verdict follows faithfulness, not absolute return. This is the most important point of the parable, and readers seldom notice it. The servant with two talents produced 40% of the absolute gain of the servant with five. He received the same sentence. The master assessed the ratio of result to allocation, and the ratio was 100% in both cases.

Inference (business consequences):

- Assess allocation and performance together. A process that compares absolute returns across units of different sizes measures the wrong thing.
- A small unit that doubles does better than a large unit that adds 50%. The parable states this by its construction.
- The accounting is scheduled, not continuous. The text says "After a long time", so the reckoning has a date. This is A8 (Time is a created instrument) applied to capital. Without a scheduled reckoning, there is no accountability. Without accountability, nobody can correct the allocation.
- The accounting is face to face and spoken. The servants state their own numbers. Nobody audits them first. The pattern is self-reporting against a standard.

### Verse 27: even a bank deposit would have satisfied the master

Text states: "Thou oughtest therefore to have put my money to the exchangers, and then at my coming I should have received mine own with usury."

This verse is the key to the parable, and readers often skip it. The master states the minimum outcome that he accepts. He does not say that the servant had to trade and double the money. He says that the servant had to deposit it at least. Then the master gets his own back "with usury".

Lexical: "usury" here is G5110 τόκος (_tokos_): "interest on money loaned (as a produce)." It comes "from the base of G5088 (τίκτω)", a verb that means to bring forth. Inference: the word for interest is the word for bearing. Here the Greek word carries no moral charge. It is the yield on a deposit.

Text states (what the master does not say): he does not require the servant to match the other two. He requires only that the capital is not idle.

Inference: the sin is doing nothing. It is not underperformance, low ambition, or a low return. It is doing nothing at all with capital that someone entrusted to you, when even the most passive placement available can produce something. This is the sharp edge of the parable.

This changes how to read the whole parable. Read as a parable about abilities, it says "develop your gifts." Read as a parable about capital, which is what it is, it says that idle capital is a moral failure.

Inference: the floor that the master names is the yield of the most passive placement that he knew. In a modern treasury, the nearest analogue is a low-risk deposit yield. The analogy is not exact. The exchangers of the first century were not free of risk. A modern deposit is not the same instrument.

Inference (business consequences):

- Cash with no assignment is the talent in the ground. The parable sets its own floor at the yield of the exchangers. Operating cash is different. Cash held for a stated liquidity need, such as payroll or payables, has an assignment. Cash beyond the stated need that earns nothing falls below the floor of the master.
- Compare against the passive alternative, not against your peers. A capital project that returns less than a low-risk deposit destroys value relative to the passive option. The master condemned doing nothing, so the bar is higher than it first looks.
- "I preserved it" is the defense of the servant, and it fails. Verse 25 says: "lo, there thou hast that is thine." Preservation was the goal that the servant stated, and the master rejected it.
- The rule also applies to reserves, and this creates a tension. A31 says that reserves exist to pay for recovery. The parable condemns idle capital. The answer is that a reserve is allocated to a specific risk, so it does work. Hoarding is capital with no assignment. See Part 7.

### The reward is authority, not money

Text states: "thou hast been faithful over a few things, I will make thee ruler over many things" (vv. 21, 23). Verse 28 adds: "Take therefore the talent from him, and give it unto him which hath ten talents."

Two observations:

1. Text states: the reward is scope, which is rule over more. It is not consumption. The faithful servants do not receive the talents for themselves. They receive authority.
2. Text states: the master moves the talent of the unfaithful servant. He does not destroy it. The capital stays in the system and goes to a different manager.

Inference: the parable describes a feedback loop for capital allocation. Performance earns a larger allocation, and non-performance earns a smaller one. Verse 29 states the mechanism as a general rule: "For unto every one that hath shall be given, and he shall have abundance: but from him that hath not shall be taken away even that which he hath."

Inference (business consequences):

- Capital allocation must move in both directions. Most organizations increase allocations and never cut them. A funded project gets more, and an unfunded one never gets a second look. The parable explicitly moves capital away from the unproductive manager.
- The reallocation is not a punishment for its own sake. The capital goes to a manager who showed the ability to deploy it. The point is the capital, not the servant.
- Authority is the currency of the reward. Promotion as the reward for stewardship is the pattern here. It connects to A12 (Dominion is delegated and bounded). The master delegates more authority after the servant proves stewardship of a smaller authority.

---

## Part 2. The parable of the minas

Text (Luke 19:11–27, KJV):

> 11 And as they heard these things, he added and spake a parable, because he was nigh to Jerusalem, and because they thought that the kingdom of God should immediately appear.
>
> 12 He said therefore, A certain nobleman went into a far country to receive for himself a kingdom, and to return.
>
> 13 And he called his ten servants, and delivered them ten pounds, and said unto them, Occupy till I come.
>
> 14 But his citizens hated him, and sent a message after him, saying, We will not have this man to reign over us.
>
> 15 And it came to pass, that when he was returned, having received the kingdom, then he commanded these servants to be called unto him, to whom he had given the money, that he might know how much every man had gained by trading.
>
> 16 Then came the first, saying, Lord, thy pound hath gained ten pounds.
>
> 17 And he said unto him, Well, thou good servant: because thou hast been faithful in a very little, have thou authority over ten cities.
>
> 18 And the second came, saying, Lord, thy pound hath gained five pounds.
>
> 19 And he said likewise to him, Be thou also over five cities.
>
> 20 And another came, saying, Lord, behold, here is thy pound, which I have kept laid up in a napkin:
>
> 21 For I feared thee, because thou art an austere man: thou takest up that thou layedst not down, and reapest that thou didst not sow.
>
> 22 And he saith unto him, Out of thine own mouth will I judge thee, thou wicked servant. Thou knewest that I was an austere man, taking up that I laid not down, and reaping that I did not sow:
>
> 23 Wherefore then gavest not thou my money into the bank, that at my coming I might have required mine own with usury?
>
> 24 And he said unto them that stood by, Take from him the pound, and give it to him that hath ten pounds.
>
> 25 (And they said unto him, Lord, he hath ten pounds.)
>
> 26 For I say unto you, That unto every one which hath shall be given; and from him that hath not, even that he hath shall be taken away from him.
>
> 27 But those mine enemies, which would not that I should reign over them, bring hither, and slay them before me.

### A different allocation principle

Lexical: "pound" is G3414 μνᾶ (_mna_): "a mna (i.e. mina), a certain weight." KJV: "pound." Like the talent, it is a weight, but a different and much smaller one. A common ratio is 1 talent = 60 minas. Strong's does not state that ratio, and it is not verified here. What Strong's does verify is this: the mina is a weight of money, and the amounts differ from those in the parable of the talents.

Text states (the contrast with Matthew 25):

|                    | Matthew 25 (talents)               | Luke 19 (minas)                                  |
| ------------------ | ---------------------------------- | ------------------------------------------------ |
| Number of servants | 3, not named                       | 10                                               |
| Amount given       | 5, 2, 1 (unequal)                  | "ten pounds", one each (equal, v. 13)            |
| Basis stated       | "according to his several ability" | not stated                                       |
| Results            | 5→10, 2→4, 1→1                     | 1→10, 1→5, 1→1                                   |
| Reward             | "ruler over many things"           | "authority over ten cities" / "over five cities" |

Text states: in Luke, each of the ten servants receives the same amount. The results differ greatly: 10x, 5x, and 1x. The reward is in proportion to the result: ten cities for ten pounds, and five cities for five pounds.

Inference: the two parables describe two different allocation principles, and the text presents both as valid. This is the reason to read the two parables together.

- The principle in Matthew: allocate unequally, by capacity, and assess by faithfulness (the ratio).
- The principle in Luke: allocate equally, assess by result (the absolute gain), and reward in proportion.

This finding matters for a capital allocator. It goes against the common assumption that there is one right way to distribute resources. The text presents both. Six things stay the same across the two parables:

1. The owner delivers capital to servants. The servants do not own it. (Both.)
2. The owner leaves and returns. (Both.)
3. There is a reckoning. (Both.)
4. The master condemns idleness. (Both: Matthew 25:27 and Luke 19:23 give the same bank-deposit standard.)
5. The reward is authority over more. (Both.)
6. The master moves the capital of the unproductive manager. (Both.)

Inference (business consequences):

- The allocation principle is a design choice, not a doctrine. Unequal by capacity and equal by default are both defensible. Having no stated principle is not defensible.
- Equal allocation is a test of the managers, not a statement about them. In Luke, equal inputs with unequal outputs are the instrument of measurement. A controlled experiment works the same way.
- Unequal allocation is a statement of confidence. In Matthew, the allocation itself is a judgment. A portfolio bet works the same way.
- A business must know which principle it runs. Hire a group of ten, give each the same resources, and compare the results: that is the structure in Luke. Give the proven team five times the resources: that is the structure in Matthew. Both are in Scripture. When people confuse them, they make accusations of unfairness that have no basis in the text.

### The same accounting, the same verdict

Text states: Luke 19:15 says, "And it came to pass, that when he was returned, having received the kingdom, then he commanded these servants to be called unto him, to whom he had given the money, that he might know how much every man had gained by trading." The text states the purpose of the return as information.

Text states (the defense of the third servant and its answer): in verses 20–22, the servant excuses himself by the character of the master: "thou art an austere man." The master does not dispute that description. He accepts it for the sake of argument: "Out of thine own mouth will I judge thee... Thou knewest that I was an austere man". Then he makes the decisive point.

Inference: the point is this. If the servant believed that, his belief made his behavior worse, not better. A hard master requires at least the bank rate. Fear of a hard master is no reason to do nothing. It is a reason to do at least the minimum.

Inference: the error of the servant was not a wrong view of the master. He failed to reason consistently from his own view. This is a general failure mode in business. An operator believes that the market is brutal, and then acts as if it were forgiving.

### The two parables read together

Luke 19:11 states the occasion of the parable: "because they thought that the kingdom of God should immediately appear." Text states: the parable is explicitly about delay, "Occupy till I come" (v. 13), and about what happens in the interval. The enemies (v. 14, v. 27) make the delay hostile.

Inference: the interval between allocation and reckoning has three features:

1. It is long.
2. It has no supervision.
3. It is contested.

Capital stewardship happens in that environment.

---

## Part 3. Counting the cost

Text (Luke 14:28–32, KJV):

> 28 For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?
>
> 29 Lest haply, after he hath laid the foundation, and is not able to finish it, all that behold it begin to mock him,
>
> 30 Saying, This man began to build, and was not able to finish.
>
> 31 Or what king, going to make war against another king, sitteth not down first, and consulteth whether he be able with ten thousand to meet him that cometh against him with twenty thousand?
>
> 32 Or else, while the other is yet a great way off, he sendeth an ambassage, and desireth conditions of peace.

### The tower: sufficiency to finish

Observations:

1. Text states: the action is "sitteth not down first." The counting comes before the building. It is a separate act: the builder sits down and does not build.
2. Text states: the question is not whether the tower is worth building. The question is "whether he have sufficient to finish it". The test is enough to complete, not enough to start.
3. Text states: the failure mode is specific: "after he hath laid the foundation, and is not able to finish it." The foundation is laid. The failure is in the gap between foundation and completion.
4. Text states: the consequence is public mockery: "all that behold it begin to mock him." The cost of the failure includes reputation. Inference: the builder cannot recover that cost by quietly abandoning the project, because people can see the foundation.
5. Text states: the text presents the counting as obvious: "which of you... sitteth not down first". Inference: the rhetorical form implies that not counting is the surprising behavior, not the reverse.

Lexical: "counteth" is G5585 ψηφίζω (_psephizo_): "to use pebbles in enumeration, i.e. (generally) to compute." It comes "from G5586 (ψῆφος)", the pebble. KJV: "count." The verb is arithmetical, not deliberative. It is not a call to think about the project. It is a call to compute.

Inference: the unit of analysis is the whole project. The test is whether total resources cover total cost. The money in the foundation is the most visible and the least recoverable. That is why the text names this failure: the builder lays the foundation before he counts.

Inference (business consequences):

- Count to completion, not to the start. A project with 60% of its funding is not 60% funded. It is a foundation with no tower, and the 60% is stranded.
- The stranded cost is the visible one. Observation 4: the mockery comes because people can see the foundation. Abandoned projects are public in a way that projects never started are not.
- "Sufficient to finish" is a question of capital structure, not of budget. It includes the reserve for the overrun. That connects to A27 (Friction is structural) and to A31 (Recovery is provided, and it costs something that is not you).
- The rhetorical form is the challenge. The text presents counting as the obvious thing that everyone does. Most failed projects were not counted to completion. They were counted to the first milestone.

### The king: comparative assessment before engagement

Observations:

1. Text states: the king "sitteth not down first, and consulteth." It is the same prior act of sitting down, in the same sequence.
2. Text states: the assessment is comparative: "whether he be able with ten thousand to meet him that cometh against him with twenty thousand". The king sets his own force against the force of the other king, not against a plan.
3. Text states: the numbers are stated: ten thousand against twenty thousand. The assessment is quantitative.
4. Text states: the alternative to battle is a negotiated settlement: "he sendeth an ambassage, and desireth conditions of peace." The text presents this as a valid option, not as cowardice.
5. Text states: the timing of the decision matters: "while the other is yet a great way off". The settlement is available before the battle. Inference: the text implies that it is not available after.
6. Text states: the same construction introduces both examples ("which of you" and "Or what king"). Inference: they are parallel cases of one principle.

Inference: the two parables cover two different assessments.

- The tower is absolute sufficiency: do I have enough to finish?
- The king is relative sufficiency: do I have enough to win against this opponent?

Businesses skip the second one most often. A business plan can show that the plan is affordable without an assessment against the position of the competitor. That plan did the tower and skipped the king.

Inference (business consequences):

- Compare to the opponent, not to the plan. The question of the king is not "can I afford this war?" It is "can I beat this army?" A go-to-market plan with a budget and no comparison to the competition is the tower without the king.
- State the numbers. Observation 3 gives "ten thousand" against "twenty thousand". A comparative assessment without figures is not an assessment.
- Negotiation is a valid outcome of the assessment. Observation 4 matters: the text does not condemn the king who asks for terms. The assessment produces either commitment or settlement, and the text treats both as reasonable.
- The window closes. Observation 5: terms are available while the other is "yet a great way off." After the battle starts, the options narrow. This is A32 (Some states must not be allowed to become permanent) applied to competition.
- Both assessments come before the action, and neither is continuous. The text says "first." It does not describe a rolling reassessment. At one point the counting is done, and the building begins.

### What the two parables do not say

Readers often read three things into these parables:

1. The text does not say that the tower was a bad idea. It says that the builder failed to count. The merit of the project is not the subject.
2. The text does not say that the king must avoid war. It says that he must assess before the battle. It presents peace terms as an acceptable result of the assessment.
3. The text does not command a business to count costs. The parable is about the cost of discipleship (see Luke 14:25–27, 33 in context). The business application is an inference. The shape, "count before you commit", transfers. The command does not.

---

## Part 4. Debt and its instruments

### The borrower is servant to the lender

Text (Proverbs 22:7, KJV):

> 7 The rich ruleth over the poor, and the borrower is servant to the lender.

Observations:

1. Text states: the verse states the relationship as a fact, not as a prohibition. It does not say "do not borrow." It says what borrowing does.
2. Text states: the mechanism is servitude. The borrower becomes a servant. This is a change of status, not only a change of cash position.
3. Text states: the verse pairs it with "The rich ruleth over the poor." Both halves describe a rule relationship that economic position creates.
4. Inference (the wider context): Proverbs is a book of consequences, and this verse is in that mode. It describes an outcome.

Lexical: "servant" is H5650 עֶבֶד (_ebed_): "a servant," "from H5647 (עָבַד)". H5647 _abad_ is the verb for the work of Adam in the garden (A17). Inference: the verse puts the borrower in the position of the one who serves. It puts the lender in the position of the one who is served. The vocabulary connects the debt relationship to the work relationship.

Inference: two consequences follow.

- Debt transfers decision rights, not only money. The servitude is the real cost. Interest is the visible cost. The loss of discretion is the invisible one.
- The transfer is not always wrong, but you must price it. A business takes on debt and does not identify which decisions it gave up. That business did not price the instrument.

Text states (the ideal in Deuteronomy): Deuteronomy 15:6 states the desired position explicitly: "and thou shalt lend unto many nations, but thou shalt not borrow; and thou shalt reign over many nations, but they shall not reign over thee." The promise is framed as not borrowing, and the reason given is the reign relationship. The text pairs the two halves.

Inference (business consequences):

- Debt covenants make the servitude explicit. The covenant restricts some decisions: dividends, acquisitions, capital expenditures, hiring, and more debt. That list is the set of decisions that the lender now holds. Read the covenant as a list of authorities that you gave up.
- The servitude does not end in the same way that it starts. The borrower becomes a servant on the day that he draws the money. Repayment ends the servitude. But repayment does not give back the time in which the lender constrained the decisions.
- The claim in Proverbs is about the relationship, not the rate. A loan from a friend at zero interest still creates the servitude. The rate is not the mechanism.
- The ideal is not "never borrow." The text states the consequence of borrowing and describes a preferred position. It does not forbid borrowing. For the specific prohibitions, see the usury section in this part. They are narrower than a total ban.

### Surety for a neighbor

Text (Proverbs 6:1–5, KJV):

> 1 My son, if thou be surety for thy friend, if thou hast stricken thy hand with a stranger,
>
> 2 Thou art snared with the words of thy mouth, thou art taken with the words of thy mouth.
>
> 3 Do this now, my son, and deliver thyself, when thou art come into the hand of thy friend; go, humble thyself, and make sure thy friend.
>
> 4 Give not sleep to thine eyes, nor slumber to thine eyelids.
>
> 5 Deliver thyself as a roe from the hand of the hunter, and as a bird from the hand of the fowler.

Observations:

1. Text states: the condition is real: "if thou be surety for thy friend". The passage gives instruction for the case after it happens.
2. Text states: the mechanism is "the words of thy mouth". Verse 2 says it twice: "Thou art snared with the words of thy mouth, thou art taken with the words of thy mouth." The trap is made of words. Someone made a promise.
3. Text states: the text describes the status as capture: "snared," "taken," and "into the hand of thy friend." These are three images of being caught.
4. Text states: the remedy is urgency: "Give not sleep to thine eyes, nor slumber to thine eyelids" (v. 4). The images are of escape: "as a roe from the hand of the hunter, and as a bird from the hand of the fowler" (v. 5).
5. Text states: the remedy requires humility: "go, humble thyself, and make sure thy friend" (v. 3). Inference: the way out goes through an admission of the mistake to the person you promised.
6. Text states: no verse in this passage says "do not become surety." The passage is about what to do after you become surety.

Lexical: "surety" here is H6148 עָרַב (_arab_): "to braid, i.e. intermix; technically, to traffic (as if by barter); also or give to be security (as a kind of exchange)." KJV: "engage, (inter-) meddle (with), mingle (self), mortgage, occupy, give pledges, be(-come, put in) surety, undertake." The root image is braiding, a mixing together. Inference: the word carries the sense that one person's affairs are woven into another's. That is the trap.

Inference: the structure of the passage has three steps. A spoken commitment (v. 1) produces a capture (v. 2). The person must escape it urgently and humbly (vv. 3–5). The instruction does not forbid the practice. It treats the condition.

Inference (business consequences):

- The specific act under discussion is a guarantee of the debt of another person, and the text calls it a snare. Personal guarantees, cross-guarantees between related companies, parent guarantees of subsidiary obligations, and cosigning are all in view.
- Words create the trap, not money. Observation 2. The trap can exist before any money moves, and the speech of the guarantor creates it.
- The escape is urgent and embarrassing. Observations 4 and 5. Go immediately to the person you promised and unwind the promise, at the cost of your dignity. Delay increases the cost.
- Related passages state the risk in the same terms, and they are stronger:
  - Proverbs 11:15: "He that is surety for a stranger shall smart for it: and he that hateth suretiship is sure."
  - Proverbs 17:18: "A man void of understanding striketh hands, and becometh surety in the presence of his friend."
  - Proverbs 22:26–27: "Be not thou one of them that strike hands, or of them that are sureties for debts. If thou hast nothing to pay, why should he take away thy bed from under thee?"
- Text states: Proverbs 22:26 moves from treatment to prohibition: "Be not thou one of them". Verse 27 names a concrete consequence: the lender takes the bed. Proverbs 17:18 calls the man "void of understanding". That is a judgment on the act, not only a warning about it.
- Inference (the full picture): Proverbs 6 gives the treatment for a snare that the person already entered. Proverbs 17:18 and 22:26 forbid entering it. The two agree. Proverbs 6 speaks to someone who already struck hands, and Proverbs 22:26 speaks to someone who did not.
- The business application is about contingent liabilities. A guarantee is a liability that nobody sees until it is very large. The passage adds one point: the obligation starts at the moment of speech, not at the moment of default.

### No usury against the poor

Text (Exodus 22:25–27, KJV):

> 25 If thou lend money to any of my people that is poor by thee, thou shalt not be to him as an usurer, neither shalt thou lay upon him usury.
>
> 26 If thou at all take thy neighbour's raiment to pledge, thou shalt deliver it unto him by that the sun goeth down:
>
> 27 For that is his covering only, it is his raiment for his skin: wherein shall he sleep? and it shall come to pass, when he crieth unto me, that I will hear; for I am gracious.

Text (Leviticus 25:35–37, KJV):

> 35 And if thy brother be waxen poor, and fallen in decay with thee; then thou shalt relieve him: yea, though he be a stranger, or a sojourner; that he may live with thee.
>
> 36 Take thou no usury of him, or increase: but fear thy God; that thy brother may live with thee.
>
> 37 Thou shalt not give him thy money upon usury, nor lend him thy victuals for increase.

Text (Deuteronomy 23:19–20, KJV):

> 19 Thou shalt not lend upon usury to thy brother; usury of money, usury of victuals, usury of any thing that is lent upon usury:
>
> 20 Unto a stranger thou mayest lend upon usury; but unto thy brother thou shalt not lend upon usury: that the LORD thy God may bless thee in all that thou settest thine hand to in the land whither thou goest to possess it.

Lexical: Strong's lists six entries that the KJV renders "usury":

- G5110 τόκος (_tokos_): "interest on money loaned (as a produce)."
- H4855 מַשָּׁא (_mashsha_): "a loan; by implication, interest on a debt."
- H5378 נָשָׁא (_nasha_): "to lend on interest; by implication, to dun for debt."
- H5383 נָשָׁה (_nashah_): "to lend or (by reciprocity) borrow on security or interest."
- H5391 נָשַׁךְ (_nashak_): "to strike with a sting (as a serpent); figuratively, to oppress with interest on a loan." KJV: "bite, lend upon usury."
- H5392 נֶשֶׁךְ (_neshek_): "interest on a debt." It comes "from H5391".

Lexical: the most common Hebrew word for interest, H5392 _neshek_, comes from H5391 _nashak_, "to strike with a sting (as a serpent)."

Inference: the vocabulary does not carry the judgment by itself. Deuteronomy 23:20 uses the same verb, "lend upon usury", for lending to a stranger, and it permits that lending. The image of the sting is vivid, but the text applies the same word to permitted and forbidden loans. The judgment comes from the context: the borrower is poor, or the borrower is a brother.

Observations:

1. Text states: the prohibition is about the poor and the brother. Exodus 22:25 says "my people that is poor by thee." Leviticus 25:35 says "if thy brother be waxen poor, and fallen in decay with thee". Deuteronomy 23:19 says "to thy brother."
2. Text states: Deuteronomy 23:20 explicitly permits interest from a stranger: "Unto a stranger thou mayest lend upon usury". The prohibition is not universal.
3. Text states: the text gives the purpose: "that thy brother may live with thee" (Leviticus 25:36). Inference: the aim is that the borrower continues to live in the community, not only that he stays solvent.
4. Text states: the command rests on the fear of God: "but fear thy God; that thy brother may live with thee" (v. 36). Inference: the text names no court to enforce this obligation. Conscience before God is the enforcement that the text names.
5. Text states: Leviticus 25:35 includes the outsider: "yea, though he be a stranger, or a sojourner". Verse 36 then says "Take thou no usury of him". The word "him" in verse 36 refers back to the person in verse 35. So in Leviticus 25, both the relief duty and the ban on interest cover the stranger and the sojourner who fell poor.
6. Contested: Leviticus 25:35–36 forbids interest from the poor stranger, and Deuteronomy 23:20 permits interest from a stranger. Readers reconcile the two in different ways. One common reading is that the two passages mean different kinds of outsider: a resident who fell poor, against a foreign trader. The English text alone does not settle it.
7. Text states (the pledge rule): Exodus 22:26–27 requires the lender to return a pledged garment before nightfall. The reason is that it is the only covering of the person: "wherein shall he sleep?" The rule protects the minimum that a person needs to live.

Inference (the honest limit): the distinction between "brother" and "stranger" makes these statutes the law of a covenant community, not general commercial law. A modern company lends to a customer. An Israelite lent to a brother in the same covenant community. The two positions are not the same. That gap is real, and I do not smooth it over.

Inference: these points transfer from the text:

- The prohibition aims at a specific abuse: extraction from a person whose need makes him unable to refuse. The condition "poor by thee" and the purpose clause "that thy brother may live with thee" both point at the predatory character of the loan. They do not point at the interest rate as such.
- The pledge rule protects the survival minimum of the borrower. The garment must go back before nightfall, because otherwise the person is cold. Any collateral policy that takes the thing that the borrower needs to survive is directly in view.
- The duty reaches the outsider. Leviticus 25:35–36 requires relief for the poor stranger and the sojourner and forbids interest from him.

Inference (business consequences):

- The relevant question is not "is it wrong to charge interest?" It is "does this loan extract from someone who cannot refuse?" The conditions and purpose clauses of the text aim at the second question.
- The logic of the passage reaches modern cases: payday lending, wage-advance products at punitive rates, and debt sold to people who cannot evaluate it. Late fees set to profit from a customer's inability to pay on time are also in view.
- Collateral policy must have a survival floor. The pledged garment is the model. Some assets are exempt, because to take them is to take the ability of the person to live.
- Deuteronomy 24:6 states the floor more sharply: "No man shall take the nether or the upper millstone to pledge: for he taketh a man's life to pledge." Text states: the millstone is exempt because it is the means of life. Inference: the millstone grinds the grain, so it is also the means of earning. The principle is that a lender must not take the capacity of the borrower to produce as security. A modern analogue is to take the tools of a tradesperson or the seed of a farmer.

### The pledge and the millstone

Text (Deuteronomy 24:6, 10–13, KJV):

> 6 No man shall take the nether or the upper millstone to pledge: for he taketh a man's life to pledge.
>
> 10 When thou dost lend thy brother any thing, thou shalt not go into his house to fetch his pledge.
>
> 11 Thou shalt stand abroad, and the man to whom thou dost lend shall bring out the pledge abroad unto thee.
>
> 12 And if the man be poor, thou shalt not sleep with his pledge:
>
> 13 In any case thou shalt deliver him the pledge again when the sun goeth down, that he may sleep in his own raiment, and bless thee: and it shall be righteousness unto thee before the LORD thy God.

Observations:

1. Text states: the creditor must not enter the house of the debtor: "thou shalt not go into his house to fetch his pledge" (v. 10). "Thou shalt stand abroad" (v. 11). Inference: the law protects the dignity of the household of the debtor. It explicitly limits the physical power of the creditor over the space of the debtor.
2. Text states: the creditor must return the pledge at nightfall (v. 13). The text gives the reason: "that he may sleep in his own raiment".
3. Text states: the millstone is exempt because it is the means of life: "for he taketh a man's life to pledge" (v. 6).
4. Text states: the text calls compliance righteousness: "and it shall be righteousness unto thee before the LORD thy God" (v. 13). Inference: this is not a courtesy. It is a definition of right dealing.

Inference (business consequences):

- The dignity and the survival of the debtor limit the power of a lender. The text sets three specific limits:
  1. Do not enter the house.
  2. Do not take the means of production.
  3. Do not keep the thing that the debtor needs to sleep.
- Name the exempt set in collateral design in advance. Which assets will you never take, whatever the contract permits? That list is a stated boundary in the sense of A20 (Abundance precedes restriction; the boundary is few and stated in advance). You decide it before the pressure, not during it.
- The dignity rule is specific in operation. "Stand abroad" means: do not go into the house of the customer. In modern terms, do not go to the premises of the customer to collect. Do not use remedies in a way that is meant to humiliate.

### The year of release

Text (Deuteronomy 15:1–11, KJV):

> 1 At the end of every seven years thou shalt make a release.
>
> 2 And this is the manner of the release: Every creditor that lendeth ought unto his neighbour shall release it; he shall not exact it of his neighbour, or of his brother; because it is called the LORD's release.
>
> 3 Of a foreigner thou mayest exact it again: but that which is thine with thy brother thine hand shall release;
>
> 4 Save when there shall be no poor among you; for the LORD shall greatly bless thee in the land which the LORD thy God giveth thee for an inheritance to possess it:
>
> 5 Only if thou carefully hearken unto the voice of the LORD thy God, to observe to do all these commandments which I command thee this day.
>
> 6 For the LORD thy God blesseth thee, as he promised thee: and thou shalt lend unto many nations, but thou shalt not borrow; and thou shalt reign over many nations, but they shall not reign over thee.
>
> 7 If there be among you a poor man of one of thy brethren within any of thy gates in thy land which the LORD thy God giveth thee, thou shalt not harden thine heart, nor shut thine hand from thy poor brother:
>
> 8 But thou shalt open thine hand wide unto him, and shalt surely lend him sufficient for his need, in that which he wanteth.
>
> 9 Beware that there be not a thought in thy wicked heart, saying, The seventh year, the year of release, is at hand; and thine eye be evil against thy poor brother, and thou givest him nought; and he cry unto the LORD against thee, and it be sin unto thee.
>
> 10 Thou shalt surely give him, and thine heart shall not be grieved when thou givest unto him: because that for this thing the LORD thy God shall bless thee in all thy works, and in all that thou puttest thine hand unto.
>
> 11 For the poor shall never cease out of the land: therefore I command thee, saying, Thou shalt open thine hand wide unto thy brother, to thy poor, and to thy needy, in thy land.

Observations:

1. Text states: every seven years, creditors release debts within the covenant community: "Every creditor that lendeth ought unto his neighbour shall release it" (v. 2). Contested: many readers take this release as a cancellation of the debt. Others read it as a suspension of collection for the seventh year only. The text says "release" and does not settle which.
2. Text states: the release carries the name of the LORD: "because it is called the LORD's release" (v. 2). Inference: the institution belongs to God. It does not depend on the generosity of the creditor.
3. Text states: verse 3 repeats the distinction between brother and foreigner. That agrees with Deuteronomy 23:20.
4. Text states (the abuse, named in advance): verse 9 predicts that lenders will refuse new loans as the release year comes near: "The seventh year, the year of release, is at hand; and thine eye be evil against thy poor brother, and thou givest him nought". The law names the loophole behavior and forbids it.
5. Text states: verse 11 predicts that poverty continues: "For the poor shall never cease out of the land". The text states this as a fact. It is the reason for the permanent command: "therefore I command thee".
6. Text states: the command covers the attitude as well as the transaction: "thou shalt not harden thine heart, nor shut thine hand" (v. 7). Also: "thine heart shall not be grieved when thou givest unto him" (v. 10). The law governs the internal state together with the act.
7. Text states: verse 4 seems to conflict with verse 11. Verse 4 says "Save when there shall be no poor among you". Verse 11 says "the poor shall never cease out of the land." Inference: the condition in verse 4 describes the ideal, and verse 11 describes the actual.

Inference: the year of release is a structural limit on the accumulation of claims. It is not charity. It is a scheduled release that works whatever the creditor prefers. The law expects the workaround and forbids it.

Inference (business consequences):

- Model debt capacity against the cycle, not against the present. A business that lends into a community with a seven-year release must price that release. More generally, a lending model whose returns depend on collection without end is fragile.
- The named loophole is the useful part. Verse 9 is a case study in how people get around rules. They do not break the rule. They withdraw from the activity that the rule governs. Any policy design must ask what activity the rule suppresses, and decide whether that is acceptable.
- "The poor shall never cease" is a planning assumption, not despair. The text states it as the ground for a permanent obligation. A business that treats poverty as a solvable problem builds for a world that does not exist.
- The rules on attitude apply to how a business gives. "Thine heart shall not be grieved". A donation made with visible reluctance damages the relationship between the giver and the recipient.
- The release connects to the jubilee. The seven-year release and the fifty-year jubilee are the two reset instruments. See Part 6.

---

## Part 5. Joseph and the seven-year cycle

Text (Genesis 41:29–36, KJV):

> 29 Behold, there come seven years of great plenty throughout all the land of Egypt:
>
> 30 And there shall arise after them seven years of famine; and all the plenty shall be forgotten in the land of Egypt; and the famine shall consume the land;
>
> 31 And the plenty shall not be known in the land by reason of that famine following; for it shall be very grievous.
>
> 32 And for that the dream was doubled unto Pharaoh twice; it is because the thing is established by God, and God will shortly bring it to pass.
>
> 33 Now therefore let Pharaoh look out a man discreet and wise, and set him over the land of Egypt.
>
> 34 Let Pharaoh do this, and let him appoint officers over the land, and take up the fifth part of the land of Egypt in the seven plenteous years.
>
> 35 And let them gather all the food of those good years that come, and lay up corn under the hand of Pharaoh, and let them keep food in the cities.
>
> 36 And that food shall be for store to the land against the seven years of famine, which shall be in the land of Egypt; that the land perish not through the famine.

### The interpretation, and the refusal to take credit

Text (Genesis 41:16, KJV):

> 16 And Joseph answered Pharaoh, saying, It is not in me: God shall give Pharaoh an answer of peace.

Observations:

1. Text states: Pharaoh asks Joseph to interpret the dream after the butler vouches for him. The butler reports that the earlier interpretations of Joseph came true: "as he interpreted to us, so it was; me he restored unto mine office, and him he hanged" (41:13). The baker was hanged as his dream foretold. He did not die for a failed interpretation. Joseph stands before Pharaoh with a record of accurate interpretation.
2. Text states: the first move of Joseph is a disclaimer: "It is not in me". He does not claim the capability, and he does not hedge. He gives the answer to God before he knows what the answer is.
3. Text states (the contrast): the magicians and wise men of Egypt already failed: "but there was none that could interpret them unto Pharaoh" (41:8). The competition had no answer.
4. Text states: Joseph gives the interpretation and then immediately gives a plan (vv. 33–36). The same person gives the interpretation and the operational recommendation to the same audience.

Inference: the refusal to take credit is not modesty as a personal trait. It is an accurate statement about the source, and Joseph makes it before he knows the result. That timing matters. A disclaimer after success can be a rhetorical move. A disclaimer before the attempt is a commitment.

Inference (business consequences):

- The disclaimer comes before the result. A leader who gives credit correctly does it before he knows whether the outcome is good. The pattern here is not "credit God for success and blame circumstance for failure".
- Accurate credit is an issue of governance, not a personal virtue. A founder who believes that the insight was his own will believe that the next one is too. He will not build the process that catches the one that is wrong.
- Competence and accurate credit come as a package. Joseph does not refuse the task. He refuses the credit. The two are separable, and both are required.

### The storage plan

Text states (the parts of the plan, vv. 33–36):

1. A named owner: "let Pharaoh look out a man discreet and wise, and set him over the land of Egypt" (v. 33). One person is accountable.
2. A layer of officers: "let him appoint officers over the land" (v. 34). One person does not do everything. The plan is a hierarchy. (Compare Exodus 18 in `org-and-labor.md`.)
3. A stated rate: "take up the fifth part of the land of Egypt in the seven plenteous years" (v. 34). One fifth is 20%.
4. A stated method of collection: "let them gather all the food of those good years that come, and lay up corn under the hand of Pharaoh" (v. 35). The phrase "under the hand of Pharaoh" puts the store under a single authority. It is not distributed.
5. A stated policy for location: "let them keep food in the cities" (v. 35). Genesis 41:48 explains: "the food of the field, which was round about every city, laid he up in the same." The store is local, near where the food grew.
6. A stated purpose: "that food shall be for store to the land against the seven years of famine... that the land perish not through the famine" (v. 36).

Observations on the plan:

1. Text states: the rate is a fifth, for the seven years of plenty. Inference: the natural reading is a fifth of the harvest, not a fifth of a profit. The text does not define the base. See note 6 in the appendix.
2. Text states: Joseph presents the plan before the famine, in response to a forecast. The plan rests on a prediction, not on an event.
3. Text states (the reason for confidence): verse 32 says, "for that the dream was doubled unto Pharaoh twice; it is because the thing is established by God". Inference: the text gives the doubling as the evidence of certainty. The confidence in the forecast justifies the scale of the plan, and the text states the basis of that confidence.
4. Text states: the plan distributes authority (a man, then officers) before it distributes grain.
5. Inference: nothing in the plan requires the people to change their behavior. It is a public reserve that a levy funds. It is not a savings campaign.

Text states: the plan gives a rate (a fifth) and a duration (seven years). It does not derive the rate from the size of the shortfall. The store then grew beyond measure: "until he left numbering; for it was without number" (41:49).

Inference (business consequences):

- A fifth of the harvest for seven years is a very large reserve. The text gives no calculation that ties the rate to the famine. Do not read a reserve formula into the passage. The text gives a rate, a duration, and a result that was too large to count.
- Set the reserve against the scenario, not against convention. Most companies size reserves to a benchmark. Joseph sets his plan against a stated forecast: seven years of plenty, then seven years of famine. The transferable part is that the forecast drives the plan.
- The location of storage is a design decision. The store is local, near production, under central authority. That is a decision about resilience (distribution) and a decision about control (ownership), made together.
- The reserve has a single named owner. A reserve without an owner gets raided. See A17 (Building and keeping are equal partners).

### The execution and the countercyclical sale

Text (Genesis 41:47–57, KJV, selected verses):

> 47 And in the seven plenteous years the earth brought forth by handfuls.
>
> 48 And he gathered up all the food of the seven years, which were in the land of Egypt, and laid up the food in the cities: the food of the field, which was round about every city, laid he up in the same.
>
> 49 And Joseph gathered corn as the sand of the sea, very much, until he left numbering; for it was without number.
>
> 53 And the seven years of plenteousness, that was in the land of Egypt, were ended.
>
> 54 And the seven years of dearth began to come, according as Joseph had said: and the dearth was in all lands; but in all the land of Egypt there was bread.
>
> 55 And when all the land of Egypt was famished, the people cried to Pharaoh for bread: and Pharaoh said unto all the Egyptians, Go unto Joseph; what he saith to you, do.
>
> 56 And the famine was over all the face of the earth: And Joseph opened all the storehouses, and sold unto the Egyptians; and the famine waxed sore in the land of Egypt.
>
> 57 And all countries came into Egypt to Joseph for to buy corn; because that the famine was so sore in all lands.

Observations:

1. Text states: the text describes the store as unmeasured: "until he left numbering; for it was without number" (v. 49). Inference: at some point the counting stopped, because the volume was larger than the system was able to count.
2. Text states: the famine is general: "the dearth was in all lands" (v. 54) and "the famine was over all the face of the earth" (v. 56). Inference: the reserve is not insurance against a local event. It is insurance against a systemic one.
3. Text states: Joseph sells the store. He does not give it away: "Joseph opened all the storehouses, and sold unto the Egyptians" (v. 56).
4. Text states: Egypt had bread while others did not: "but in all the land of Egypt there was bread" (v. 54). Inference: the reserve gave Egypt the advantage in a time of scarcity.
5. Text states: one person holds the authority over distribution: "Go unto Joseph; what he saith to you, do" (v. 55).

Inference: the reserve did three things at the same time:

1. It kept the population alive.
2. It produced revenue.
3. It made Egypt the counterparty for every other nation.

Inference (business consequences):

- A reserve is a competitive position, not only a cushion. A company with cash in a downturn can buy, hire, and lend while others contract. That is the position of Joseph.
- The countercyclical sale is the mechanism. Joseph accumulated during plenty by a levy, and he sold during scarcity. Text states: the text gives both halves, the levy (41:34) and the sale (41:56). Joseph did not buy the grain. He took it as a fifth of the harvest.
- The ethics of the sale is a live question. The text does not settle it to modern satisfaction. Joseph built the store with a levy on the people during the years of plenty (v. 34, "take up the fifth part"). Then he sold it back to the same people during the famine. Contested: some readers call that prudent administration, and others call it exploitation. The text does not answer directly, and faithful readers differ. I do not invent certainty on it. The next section covers the consolidation that follows, which the text presents as painful.
- The reserve was a systemic hedge, not a local one. Observation 2. A reserve sized for an outage at one site does not cover a collapse of the whole market. The scenario drives the design.

### The painful consolidation

Text (Genesis 47:13–26, KJV):

> 13 And there was no bread in all the land; for the famine was very sore, so that the land of Egypt and all the land of Canaan fainted by reason of the famine.
>
> 14 And Joseph gathered up all the money that was found in the land of Egypt, and in the land of Canaan, for the corn which they bought: and Joseph brought the money into Pharaoh's house.
>
> 15 And when money failed in the land of Egypt, and in the land of Canaan, all the Egyptians came unto Joseph, and said, Give us bread: for why should we die in thy presence? for the money faileth.
>
> 16 And Joseph said, Give your cattle; and I will give you for your cattle, if money fail.
>
> 17 And they brought their cattle unto Joseph: and Joseph gave them bread in exchange for horses, and for the flocks, and for the cattle of the herds, and for the asses: and he fed them with bread for all their cattle for that year.
>
> 18 When that year was ended, they came unto him the second year, and said unto him, We will not hide it from my lord, how that our money is spent; my lord also hath our herds of cattle; there is not ought left in the sight of my lord, but our bodies, and our lands:
>
> 19 Wherefore shall we die before thine eyes, both we and our land? buy us and our land for bread, and we and our land will be servants unto Pharaoh: and give us seed, that we may live, and not die, that the land be not desolate.
>
> 20 And Joseph bought all the land of Egypt for Pharaoh; for the Egyptians sold every man his field, because the famine prevailed over them: so the land became Pharaoh's.
>
> 21 And as for the people, he removed them to cities from one end of the borders of Egypt even to the other end thereof.
>
> 22 Only the land of the priests bought he not; for the priests had a portion assigned them of Pharaoh, and did eat their portion which Pharaoh gave them: wherefore they sold not their lands.
>
> 23 Then Joseph said unto the people, Behold, I have bought you this day and your land for Pharaoh: lo, here is seed for you, and ye shall sow the land.
>
> 24 And it shall come to pass in the increase, that ye shall give the fifth part unto Pharaoh, and four parts shall be your own, for seed of the field, and for your food, and for them of your households, and for food for your little ones.
>
> 25 And they said, Thou hast saved our lives: let us find grace in the sight of my lord, and we will be Pharaoh's servants.
>
> 26 And Joseph made it a law over the land of Egypt unto this day, that Pharaoh should have the fifth part; except the land of the priests only, which became not Pharaoh's.

Observations (the sequence is the point):

1. Text states (stage 1): money goes for grain: "And Joseph gathered up all the money that was found in the land of Egypt" (v. 14).
2. Text states (stage 2): when the money fails, livestock goes for grain: "Give your cattle; and I will give you for your cattle" (v. 16).
3. Text states (stage 3): when the livestock is gone, land and labor go for grain: "buy us and our land for bread, and we and our land will be servants unto Pharaoh" (v. 19).
4. Text states: the sale is voluntary in form, and the people propose it: "Wherefore shall we die before thine eyes, both we and our land?" (v. 19).
5. Text states: the land "became Pharaoh's" (v. 20). Joseph moved the people: "he removed them to cities from one end of the borders of Egypt even to the other end thereof" (v. 21).
6. Text states: after the consolidation, the tax is one fifth of the increase: "ye shall give the fifth part unto Pharaoh, and four parts shall be your own" (v. 24). This is the same rate as the levy in 41:34.
7. Text states: the people judge the result as good: "Thou hast saved our lives" (v. 25).
8. Text states: the arrangement becomes permanent: "And Joseph made it a law over the land of Egypt unto this day" (v. 26).
9. Text states: the priests are exempt, because they had a separate provision (v. 22).

Inference: this passage is the hardest material in this file. Do not moralize it in either direction.

- One reading: a famine forced the transfer of all private wealth into a single sovereign holder. Money went first, then productive assets, then land and labor. The arrangement became permanent. That is a description of consolidation.
- Another reading: the alternative to the transfer was death. The people who lost the assets proposed the transfer. The new tax rate was the same rate that they paid before. Their own verdict was "Thou hast saved our lives."

Contested: the text supports both readings, and it does not judge between them. I do not pretend that it does. What the text states plainly is the sequence: money, then movable assets, then land, then labor. Inference: the sequence ran to its end within two years (vv. 17–18 count "that year" and "the second year").

Inference (business consequences):

- Transfers in distress run in a predictable order: cash, then movable assets, then productive assets, then control. A counterparty that acquires from a seller in distress can expect to move through these stages. It must decide in advance where it will stop. This is A20 (Abundance precedes restriction; the boundary is few and stated in advance): the boundary is stated before the pressure.
- The urgency of the seller sets the return of the buyer in a distress purchase, not the value of the asset. The split in verse 24 is four parts to one: one fifth to Pharaoh, four fifths to the farmer. It is a permanent claim on the increase, and the people accepted it.
- The consolidation was irreversible. Verse 26 says "a law over the land of Egypt unto this day." This is the category of A32 (Some states must not be allowed to become permanent), and here it became permanent. Whatever else you conclude, the text is explicit that it stuck.
- Exemptions show the structure of power. The priests kept their land (v. 22). Any consolidation has exempt categories. The list of exemptions is the map of who had standing.
- "Thou hast saved our lives" is the justification that the text records. Read it with care. A rescue that transfers permanent control is a real rescue and a real transfer. Both can be true.

---

## Part 6. Jubilee and the limits on accumulation

Text (Leviticus 25:1–34, KJV):

> 1 And the LORD spake unto Moses in mount Sinai, saying,
>
> 2 Speak unto the children of Israel, and say unto them, When ye come into the land which I give you, then shall the land keep a sabbath unto the LORD.
>
> 3 Six years thou shalt sow thy field, and six years thou shalt prune thy vineyard, and gather in the fruit thereof;
>
> 4 But in the seventh year shall be a sabbath of rest unto the land, a sabbath for the LORD: thou shalt neither sow thy field, nor prune thy vineyard.
>
> 5 That which groweth of its own accord of thy harvest thou shalt not reap, neither gather the grapes of thy vine undressed: for it is a year of rest unto the land.
>
> 6 And the sabbath of the land shall be meat for you; for thee, and for thy servant, and for thy maid, and for thy hired servant, and for thy stranger that sojourneth with thee,
>
> 7 And for thy cattle, and for the beast that are in thy land, shall all the increase thereof be meat.
>
> 8 And thou shalt number seven sabbaths of years unto thee, seven times seven years; and the space of the seven sabbaths of years shall be unto thee forty and nine years.
>
> 9 Then shalt thou cause the trumpet of the jubile to sound on the tenth day of the seventh month, in the day of atonement shall ye make the trumpet sound throughout all your land.
>
> 10 And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubile unto you; and ye shall return every man unto his possession, and ye shall return every man unto his family.
>
> 11 A jubile shall that fiftieth year be unto you: ye shall not sow, neither reap that which groweth of itself in it, nor gather the grapes in it of thy vine undressed.
>
> 12 For it is the jubile; it shall be holy unto you: ye shall eat the increase thereof out of the field.
>
> 13 In the year of this jubile ye shall return every man unto his possession.
>
> 14 And if thou sell ought unto thy neighbour, or buyest ought of thy neighbour's hand, ye shall not oppress one another:
>
> 15 According to the number of years after the jubile thou shalt buy of thy neighbour, and according unto the number of years of the fruits he shall sell unto thee:
>
> 16 According to the multitude of years thou shalt increase the price thereof, and according to the fewness of years thou shalt diminish the price of it: for according to the number of the years of the fruits doth he sell unto thee.
>
> 17 Ye shall not therefore oppress one another; but thou shalt fear thy God:for I am the LORD your God.
>
> 18 Wherefore ye shall do my statutes, and keep my judgments, and do them; and ye shall dwell in the land in safety.
>
> 19 And the land shall yield her fruit, and ye shall eat your fill, and dwell therein in safety.
>
> 20 And if ye shall say, What shall we eat the seventh year? behold, we shall not sow, nor gather in our increase:
>
> 21 Then I will command my blessing upon you in the sixth year, and it shall bring forth fruit for three years.
>
> 22 And ye shall sow the eighth year, and eat yet of old fruit until the ninth year; until her fruits come in ye shall eat of the old store.
>
> 23 The land shall not be sold for ever: for the land is mine; for ye are strangers and sojourners with me.
>
> 24 And in all the land of your possession ye shall grant a redemption for the land.
>
> 25 If thy brother be waxen poor, and hath sold away some of his possession, and if any of his kin come to redeem it, then shall he redeem that which his brother sold.
>
> 26 And if the man have none to redeem it, and himself be able to redeem it;
>
> 27 Then let him count the years of the sale thereof, and restore the overplus unto the man to whom he sold it; that he may return unto his possession.
>
> 28 But if he be not able to restore it to him, then that which is sold shall remain in the hand of him that hath bought it until the year of jubile: and in the jubile it shall go out, and he shall return unto his possession.
>
> 29 And if a man sell a dwelling house in a walled city, then he may redeem it within a whole year after it is sold; within a full year may he redeem it.
>
> 30 And if it be not redeemed within the space of a full year, then the house that is in the walled city shall be established for ever to him that bought it throughout his generations: it shall not go out in the jubile.
>
> 31 But the houses of the villages which have no wall round about them shall be counted as the fields of the country: they may be redeemed, and they shall go out in the jubile.
>
> 32 Notwithstanding the cities of the Levites, and the houses of the cities of their possession, may the Levites redeem at any time.
>
> 33 And if a man purchase of the Levites, then the house that was sold, and the city of his possession, shall go out in the year of jubile: for the houses of the cities of the Levites are their possession among the children of Israel.
>
> 34 But the field of the suburbs of their cities may not be sold; for it is their perpetual possession.

### The sabbath of the land

Observations:

1. Text states: the land rests every seventh year: "thou shalt neither sow thy field, nor prune thy vineyard" (v. 4). This forbids the work, not only the harvest.
2. Text states: the owner does not harvest what grows by itself: "thou shalt not reap, neither gather the grapes of thy vine undressed" (v. 5).
3. Text states: the produce of the fallow year goes to a specific list: "for thee, and for thy servant, and for thy maid, and for thy hired servant, and for thy stranger that sojourneth with thee, And for thy cattle, and for the beast that are in thy land" (vv. 6–7). The list runs from the owner down to the animals. It includes hired servants and resident foreigners.
4. Text states (the objection, with its answer): "And if ye shall say, What shall we eat the seventh year?" (v. 20). The text expects the objection. It answers with a promise that the sixth year brings "fruit for three years" (v. 21).
5. Text states: the provision is a store: "and eat yet of old fruit until the ninth year; until her fruits come in ye shall eat of the old store" (v. 22). Inference: the sabbath year runs on a reserve that the people gather in advance. This connects directly to the plan of Joseph (Part 5).
6. Text states: the rest of the land connects to the rest of the worker. Exodus 23:12 states the weekly sabbath with the same kind of purpose clause: "Six days thou shalt do thy work, and on the seventh day thou shalt rest: that thine ox and thine ass may rest, and the son of thy handmaid, and the stranger, may be refreshed."

Inference (business consequences):

- The fallow year requires a reserve. Observation 5 is the operational link. A business that cannot afford to stop cannot stop. So it cannot rest (A15) and cannot recover (A31).
- The provision during rest covers the whole workforce, not only the owner. Observation 3. A rest period in which only the owner rests is not a sabbath.
- Idle capacity is not always waste. An unplanted field prepares the yield of the next year. The modern analogue is deliberate slack.

### The jubilee: release, return, redemption

Observations:

1. Text states: the jubilee is the fiftieth year, after seven sabbaths of years, which is forty-nine years (vv. 8–10).
2. Text states: a trumpet proclaims it on the day of atonement: "in the day of atonement shall ye make the trumpet sound throughout all your land" (v. 9). Inference: the release starts on the day of national atonement, which is the day of forgiveness. The text ties the economic release to the spiritual one.
3. Text states: two commands open verse 10: "And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof".
4. Text states: the text states the content of the release twice, in the same terms: "ye shall return every man unto his possession, and ye shall return every man unto his family" (v. 10), and "In the year of this jubile ye shall return every man unto his possession" (v. 13).
5. Text states: the jubilee is also a fallow year: "ye shall not sow, neither reap that which groweth of itself in it" (v. 11). Inference: if the forty-ninth year was also a sabbath year, the fiftieth is a second fallow year in a row. That is a two-year gap in production, and it requires a large reserve.
6. Text states: redemption is available at any time, not only at the jubilee: "And in all the land of your possession ye shall grant a redemption for the land" (v. 24). A near kinsman can redeem (v. 25). The man himself can redeem if he is able (v. 26). He counts the years of the sale to set the amount (v. 27).

Inference (business consequences):

- A scheduled reset is a design feature, not a failure of the system. The text does not present the jubilee as a remedy for a broken economy. It is part of the design. Inference: an economy or a company with no reset mechanism has no way to correct an accumulated position, and accumulated position compounds.
- The reset covers both property and family. Observation 4. Land returns, and households come together again. The text names the two together. Inference: the economic reset and the social reset are one act.
- Redemption before the jubilee is the preferred path. Observation 6. The jubilee is the backstop. The family redeems early if it can. Inference: the design prefers voluntary restoration to a compulsory reset.
- The announcement is public: "throughout all your land" (v. 9). Everyone knows when the reset comes. That makes the pricing of every sale transparent (see the next section).

### No permanent alienation of the inheritance

Text states: "The land shall not be sold for ever: for the land is mine; for ye are strangers and sojourners with me" (v. 23).

Observations:

1. Text states: the rule rests on ownership: "for the land is mine". The prohibition follows from the claim of God, not from a policy preference.
2. Text states: the rule is about permanence: "shall not be sold for ever".
3. Text states: the reason includes the status of the Israelites themselves: "for ye are strangers and sojourners with me." Inference: this is the argument of A1. They hold the land as tenants, and a tenant cannot sell what he does not own.
4. Text states (the exception): houses in walled cities are different: "then the house that is in the walled city shall be established for ever to him that bought it throughout his generations: it shall not go out in the jubile" (v. 30). The exception is explicitly for urban property. Village houses and fields go out in the jubilee (v. 31).
5. Text states (the Levites): the Levites can redeem their city houses at any time (v. 32). Their suburban fields "may not be sold; for it is their perpetual possession" (v. 34). The Levites hold land on different terms.

Inference: the jubilee limits accumulation by design. The mechanism is that some kinds of property cannot leave the family for good. A person can become poor and sell. A person can become rich and buy. But the accumulation cannot become permanent.

Inference: this is the sharpest claim about capital in Leviticus 25, so I state it carefully. The text does not condemn the accumulation of wealth. It caps how long the accumulation lasts.

Inference (business consequences):

- Any long-lived business is the inheritance of someone. The land is the productive base, and the text forbids its permanent transfer out of the family. The modern analogue is not exact. But it raises a question: which assets, if lost for good, remove the ability of a family or a community to produce? Those are the assets to guard (A32).
- The urban exception teaches something. Houses in walled cities were the denser, more commercial property. Inference: the law protected the asset most where it was the means of production of the family. It protected the asset least where it was a dwelling that people traded. The design separates productive property from liquid property.
- The reason given is tenancy, not fairness (v. 23). A business that forgets that it holds as a tenant treats permanence as a right (A1).

### Pricing by the years remaining

Observations:

1. Text states: the rule for the price: "According to the multitude of years thou shalt increase the price thereof, and according to the fewness of years thou shalt diminish the price of it" (v. 16).
2. Text states: the reason: "for according to the number of the years of the fruits doth he sell unto thee" (v. 16). What the seller sells is not the land. It is the yield over a defined term.
3. Text states: the text states the prohibition on oppression twice, before and after the pricing rule: "ye shall not oppress one another" (v. 14) and "Ye shall not therefore oppress one another" (v. 17). Inference: the text presents the pricing rule as the mechanism that prevents oppression.
4. Text states: the fear of God is the enforcement: "but thou shalt fear thy God: for I am the LORD your God" (v. 17). Inference: the text names no court for this rule. The parties price the transaction correctly because they fear God.

Text states: the jubilee turns land from a permanent asset into a term contract. The price goes up and down with the number of years of harvest that remain. The text states no discount rate and no adjustment for time. It counts years.

Inference: the rule resembles a present-value calculation, because the price depends on the stream of yield that remains. But the text prices by the count of years only. Any discounting is my analogy, not a statement in the text.

Inference (business consequences):

- Price a term-based asset by the term, not by the asset. Observation 2. This is the direct statement of the principle.
- The pricing rule enforces the prohibition on oppression. Observation 3. Here "do not oppress" is not a vague exhortation. It means "price it by the years." Inference: in a commercial relationship, the specific rule is the ethics. "Be fair" gives no action. "Price by the years remaining" does.
- The rule implies disclosure. Observation 4, together with the public trumpet: both parties know the jubilee date, so both can compute the price. Inference: an opaque pricing term in a contract with a fixed end is the same kind of problem.

### What this implies about accumulation

This section brings Part 6 together. The text supports five claims, and it does not support a sixth.

Text states:

1. Work has a sabbath at three scales: the week (Exodus 23:12), the year (Leviticus 25:4), and the fiftieth year (Leviticus 25:11).
2. Debts are released on a schedule (Deuteronomy 15).
3. Land returns to its original holders on a schedule (Leviticus 25:10, 13).
4. Some property cannot leave its holders for good at all (Leviticus 25:23, 34).
5. During rest, the provision comes from a store that God blesses in advance (Leviticus 25:20–22).

What the text does not state: that the accumulation of wealth is wrong in itself. Leviticus 25 does not condemn the man with many fields. It limits how long he can keep them.

Inference (the axiom that this yields): a system with no reset mechanism concentrates. The concentration is an outcome of the design, not a moral failure of the participants. The jubilee is evidence that the design intends a reset. A business or an economy built without one can expect the concentration. It must decide in advance whether it accepts the result.

Inference (business consequences):

- Compensation design without a reset drifts. Equity with no refresh, ownership with no vesting reset, and pricing with no true-up all concentrate. This does not say that concentration is evil. It says that concentration is the default (A2) and requires a counterweight by design.
- The reserve makes the reset survivable. Observation 5 and Leviticus 25:20–22. A reset on a business with no reserve is not a rest. It is a crisis.
- The scale of the reset sets the scale of the reserve. Joseph sets a fifth for seven years against a forecast of seven years of famine. Israel receives a harvest for three years in the sixth year. Both tie the reserve to a stated scenario. Neither is a figure chosen for comfort.

---

## Part 7. Reserves, diversification, and the limits of hoarding

### Cast thy bread upon the waters

Text (Ecclesiastes 11:1–6, KJV):

> 1 Cast thy bread upon the waters: for thou shalt find it after many days.
>
> 2 Give a portion to seven, and also to eight; for thou knowest not what evil shall be upon the earth.
>
> 3 If the clouds be full of rain, they empty themselves upon the earth: and if the tree fall toward the south, or toward the north, in the place where the tree falleth, there it shall be.
>
> 4 He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap.
>
> 5 As thou knowest not what is the way of the spirit, nor how the bones do grow in the womb of her that is with child: even so thou knowest not the works of God who maketh all.
>
> 6 In the morning sow thy seed, and in the evening withhold not thine hand: for thou knowest not whether shall prosper, either this or that, or whether they both shall be alike good.

Observations:

1. Text states: the return comes late, and its timing is uncertain: "for thou shalt find it after many days" (v. 1). Inference: the return is not immediate, but it is certain.
2. Text states (the rule of diversification): "Give a portion to seven, and also to eight" (v. 2). The number is seven, and then also eight. Inference: the number deliberately goes past a round allocation.
3. Text states: the text gives the reason to diversify: "for thou knowest not what evil shall be upon the earth" (v. 2). The reason is not better returns. It is survival of an unknown event.
4. Text states: verse 3 states events that are sure to happen. Rain falls, and a tree lies where it falls. Inference: these events are irreversible and directional. The point is that they happen, and nobody can negotiate with them.
5. Text states (the rule against paralysis): "He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap" (v. 4). Waiting for certainty produces no harvest.
6. Text states: verse 5 grounds the uncertainty in the limits of knowledge: "As thou knowest not what is the way of the spirit... even so thou knowest not the works of God who maketh all."
7. Text states (the rule of parallel bets): "In the morning sow thy seed, and in the evening withhold not thine hand: for thou knowest not whether shall prosper, either this or that, or whether they both shall be alike good" (v. 6). There are two sowings, and both can be good.

Inference: verses 1–2 and verse 6 together give a consistent doctrine of capital:

- Deploy (cast the bread, sow in the morning).
- Diversify (a portion to seven, and also to eight).
- Do not wait for certainty (the observer of the wind).
- Expect the deployment to take time (after many days).
- Make parallel bets, and accept that either, both, or neither can prosper (v. 6).

Inference (business consequences):

- Concentration is a bet that the unknown evil does not happen. Verse 2 gives the unknown event, not the known risk, as the reason to diversify. A portfolio built against known risks is not diversified in the sense of this verse.
- "Seven, and also to eight" is a rule against over-optimization. A perfectly optimized allocation has no spare capacity for the unforeseen. The eighth portion is the one with no thesis.
- Waiting for certainty is a decision to have no harvest. Verse 4 is the axiom against paralysis. It pairs with `trends-and-timing.md`.
- Sow in the morning and in the evening. Verse 6 gives two attempts, with no requirement that either one is the one that works.
- Expect the delay. Verse 1 says "after many days." A capital deployment with a short expected horizon gets abandoned before it returns.

### A portion to seven, and also to eight

This line gets its own section because it is the most directly operational line in the passage.

Text states: "Give a portion to seven, and also to eight; for thou knowest not what evil shall be upon the earth."

Observations:

1. Text states: the verb is "give". The giver distributes the portions. He does not hold them.
2. Text states: the portions go to seven, then also to eight. Inference: the construction suggests a first allocation and a further one, not a single division into eight.
3. Text states: the text gives the purpose: the unknown evil.

Inference: the passage does not specify the amounts. It specifies that the distribution goes past the confident allocation. The eighth portion exists because the first seven were confident.

Inference (business consequences):

- Name the number of bets and the amount in each, in advance. The text gives the shape (seven, then eight) but not the weights. The weights are a judgment. Make the judgment before the pressure (A20).
- The extra portion has no thesis. By construction, the eighth bet is the one that you cannot justify on its merits. That is its purpose.
- This is not the same as a reserve. A reserve is capital allocated to a specific function of recovery (A31). The eighth portion is capital deployed into an unknown opportunity. You need both.

### He that loveth silver shall not be satisfied

Text (Ecclesiastes 5:10–11, KJV):

> 10 He that loveth silver shall not be satisfied with silver; nor he that loveth abundance with increase: this is also vanity.
>
> 11 When goods increase, they are increased that eat them: and what good is there to the owners thereof, saving the beholding of them with their eyes?

Observations:

1. Text states: the subject is the love of silver, not the possession of it. The verb is about affection, not ownership.
2. Text states: the mechanism: "nor he that loveth abundance with increase". Inference: increase does not satisfy. It feeds the appetite, and the appetite grows with the supply.
3. Text states: verse 11 gives a second mechanism. As goods increase, the number of people who consume them increases too. Inference: the share of the owner does not grow in proportion. The only benefit left is to look at the total.
4. Text states: the verdict is "this is also vanity". Ecclesiastes uses the same word throughout for things that do not deliver what they promise.

Inference: the passage separates capital as an instrument from capital as an end. It condemns the second. It does this by a description of the mechanism (the appetite scales), not by a moral assertion.

Inference (business consequences):

- The mechanism is the useful part. "When goods increase, they are increased that eat them" describes overhead, dependencies, and obligations that grow with revenue. A business whose costs grow one for one with revenue gets nothing from growth except the view.
- Growth targets set in absolute terms can never be satisfied. If the target is "more than last year," the appetite grows with each result.
- This passage pairs with 1 Timothy 6:6–19 (Part 9) and Luke 12:15–21 (below). All three name the same failure: accumulation with no end condition.

### Treasure and oil in the dwelling of the wise

Text (Proverbs 21:20, KJV):

> 20 There is treasure to be desired and oil in the dwelling of the wise; but a foolish man spendeth it up.

Observations:

1. Text states: the house of the wise holds both treasure and oil. Inference: treasure is a durable store, and oil is a consumable provision. The reserve has two parts: the long-term store and the working provision.
2. Text states: the text states the difference between the wise and the foolish as a verb: "spendeth it up." The text does not call the fool poor or unlucky. The fool consumes the store.
3. Text states: the treasure is "to be desired". Inference: the text presents the desire for a reserve as valid, not as greed.

Inference (business consequences):

- Treasure and oil correspond to long-term reserves and working capital. Both belong in the house, and one does not replace the other.
- The failure is a verb, not a condition: "spendeth it up." A company does not drift into having no reserve. It spends the reserve.
- The store in the house is the evidence of wisdom, not the size of the income.

### Know the state of thy flocks

Text (Proverbs 27:23–27, KJV):

> 23 Be thou diligent to know the state of thy flocks, and look well to thy herds.
>
> 24 For riches are not for ever: and doth the crown endure to every generation?
>
> 25 The hay appeareth, and the tender grass sheweth itself, and herbs of the mountains are gathered.
>
> 26 The lambs are for thy clothing, and the goats are the price of the field.
>
> 27 And thou shalt have goats' milk enough for thy food, for the food of thy household, and for the maintenance for thy maidens.

Observations:

1. Text states: the command is to know the state: "Be thou diligent to know the state of thy flocks, and look well to thy herds" (v. 23). The command is not to increase the flocks. It is to know their condition.
2. Text states: the text gives impermanence as the reason: "For riches are not for ever: and doth the crown endure to every generation?" (v. 24). The accounting is necessary because the assets do not last.
3. Text states (the sequence): verse 25 describes the seasonal cycle of hay, tender grass, and mountain herbs. Verse 26 describes how the flock turns into clothing and the price of a field. Verse 27 describes the ongoing consumption: milk for the household and for the maidens.
4. Inference: the flow is operational, not a store. The flock is a working asset. It produces clothing, capital (the price of the field), and food.
5. Text states: the provision covers the household and the staff: "for the food of thy household, and for the maintenance for thy maidens" (v. 27).

Inference: the financial instruction of the passage is awareness of the situation. The owner must know with diligence the condition of the productive assets. The reason is that none of it lasts.

Inference (business consequences):

- Know the state, not only the total. Observation 1 is about condition: which animals are healthy, which produce, and which age. An income statement shows totals. It does not show condition.
- The knowledge is a duty, and it requires diligence: "Be thou diligent to know". The diligence is in the knowing, not in the working.
- The reason is that the assets do not last. Observation 2. A business that tracks its flocks because it assumes that they will still be there missed the argument.
- The flock is a working asset, not a store. Observation 4. The question is not "what is it worth?" It is "what does it produce, and at what rate?"
- The provision reaches the staff. Observation 5. The list in verse 27 includes the maidens.

### Wages put into a bag with holes

Text (Haggai 1:5–6, KJV):

> 5 Now therefore thus saith the LORD of hosts; Consider your ways.
>
> 6 Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are not filled with drink; ye clothe you, but there is none warm; and he that earneth wages earneth wages to put it into a bag with holes.

Observations:

1. Text states: the command is "Consider your ways". Inference: it tells the people to examine the process, not the outcome. The problem is in the ways, not in the effort.
2. Text states (the pattern): five clauses have the same structure, much input and too little output. "Ye have sown much, and bring in little". "ye eat, but ye have not enough". "ye drink, but ye are not filled with drink". "ye clothe you, but there is none warm". "he that earneth wages earneth wages to put it into a bag with holes."
3. Inference: the effort is not in question. The people work. The failure is that the output does not stay.
4. Text states: the image is exact: "a bag with holes". Inference: the money is earned and the money is lost. The loss is continuous, and nobody notices it.
5. Text states (the context): verse 4 states the cause: "Is it time for you, O ye, to dwell in your cieled houses, and this house lie waste?" Inference: the labor goes into the wrong thing.

Inference: the passage describes leakage. Effort becomes value, and the value does not stay. The passage puts the cause in the ways, which is the structure of the activity, not in the amount of effort.

Inference (business consequences):

- "Consider your ways" is a mandate to review the process, not the effort. When little accumulates, examine the structure. Do not only work harder.
- A bag with holes is a leak, not a cost. A leak differs from a cost because nobody planned it and nobody measures it. You find a leak when you trace the flow, not when you read the budget.
- The five-clause pattern is a diagnostic. A business can see much go in and little come out in several areas at once. Then it has a systemic leak, not a set of separate problems. That is the signal that Haggai points at.
- Misallocated effort produces the same symptoms as too little effort. Observation 5. The people built their own houses while the temple lay waste. Effort spent on the wrong object looks like effort spent and lost.

### The rich fool's barns

Text (Luke 12:15–21, KJV):

> 15 And he said unto them, Take heed, and beware of covetousness: for a man's life consisteth not in the abundance of the things which he possesseth.
>
> 16 And he spake a parable unto them, saying, The ground of a certain rich man brought forth plentifully:
>
> 17 And he thought within himself, saying, What shall I do, because I have no room where to bestow my fruits?
>
> 18 And he said, This will I do: I will pull down my barns, and build greater; and there will I bestow all my fruits and my goods.
>
> 19 And I will say to my soul, Soul, thou hast much goods laid up for many years; take thine ease, eat, drink, and be merry.
>
> 20 But God said unto him, Thou fool, this night thy soul shall be required of thee: then whose shall those things be, which thou hast provided?
>
> 21 So is he that layeth up treasure for himself, and is not rich toward God.

Observations:

1. Text states: the harvest came from the ground: "The ground of a certain rich man brought forth plentifully" (v. 16). He did not produce it. The ground did. Inference: the setup of the passage already weakens his claim of ownership (A1).
2. Text states: his reasoning is internal and alone: "he thought within himself" (v. 17), "he said, This will I do" (v. 18), and "I will say to my soul" (v. 19). The man speaks only to himself. There is no counsel and no other party (A18).
3. Text states: the problem that he names is storage capacity: "I have no room where to bestow my fruits" (v. 17). His solution is more capacity (v. 18).
4. Text states: the text gives the horizon of the plan: "much goods laid up for many years" (v. 19). The plan is long-term, and he directs it for himself.
5. Inference: the failure is not the barns. It is what he says to his own soul: "Soul, thou hast much goods... take thine ease". He makes the store the ground of his security. The store has a term that he did not count (A30).
6. Text states: the verdict is "Thou fool". The reason given is the question of whose it will be: "then whose shall those things be, which thou hast provided?" (v. 20). Inference: the question is about succession, and nobody answers it.
7. Text states: verse 21 states the general principle: "So is he that layeth up treasure for himself, and is not rich toward God."

Inference: read against Part 5 (Joseph), this passage is the control case. Joseph also stored grain against a famine, and the text presents his storage as wise. The difference is not the barn. The text supplies these differences:

|             | Joseph (Genesis 41)                    | The rich fool (Luke 12)                    |
| ----------- | -------------------------------------- | ------------------------------------------ |
| Credit      | "It is not in me" (41:16)              | "I will say to my soul"                    |
| Counsel     | A plan reviewed and adopted by Pharaoh | "he thought within himself"                |
| Purpose     | "that the land perish not" (41:36)     | "take thine ease" (v. 19)                  |
| Succession  | Officers appointed, a system           | No answer: "whose shall those things be"   |

Inference: the sin is not the reserve. The sin is a reserve held for the self, planned alone, with no purpose beyond the ease of the owner, and with no named successor.

Inference (business consequences):

- A reserve needs a stated purpose beyond the comfort of the owner. Observation 5. "So that we survive a downturn" is a purpose. "So that we can relax" is the speech to the soul.
- Plan with counsel. Observation 2. The man speaks only to himself. This is the failure case of A18 (Aloneness is not good) in a financial setting.
- Name the successor. Observation 6. The unanswered question is the verdict. A founder with a large balance sheet and no answer to "whose shall those things be" has the same defect.
- More capacity is often the wrong answer. Observation 3. The problem he named was storage. His solution was more storage. The real problem was neither.
- This is not a prohibition on saving. Joseph saved. The text condemns a specific configuration, not the practice.

---

## Part 8. Stewardship as a category

### The word: G3623 oikonomos

Lexical (verbatim):

- G3623 οἰκονόμος (_oikonomos_): "a house-distributor (i.e. manager), or overseer, i.e. an employee in that capacity; by extension, a fiscal agent (treasurer); figuratively, a preacher (of the Gospel)." It comes "from G3624 (οἶκος) and the base of G3551 (νόμος)", house and law. KJV: "chamberlain, governor, steward."
- G3622 οἰκονομία (_oikonomia_): "administration (of a household or estate); specially, a (religious) 'economy'." It comes "from G3623". KJV: "dispensation, stewardship."
- G3621 οἰκονομέω (_oikonomeo_): "to manage (a house, i.e. an estate)." It comes "from G3623". KJV: "be steward."

Observations on the word:

1. Lexical: the compound is house plus law or rule. The steward is the one who runs the household by its rule.
2. Lexical: the glosses of the dictionary itself are manager, employee, fiscal agent, and treasurer. The steward is explicitly "an employee in that capacity", not the owner.
3. Inference: the word is the root of the modern word _economy_. The Greek word for the management of a household became the word for the management of everything.
4. Lexical: the same entry gives the figurative extension "a preacher (of the Gospel)". The word carried over into a sense that is not commercial.

Inference: "stewardship" is not a devotional word for money. It is the job title of the employee who runs an estate for the owner. The word carries three things at once: the status of an employee, delegated authority, and accountability to the owner.

### The accusation and the audit

Text (Luke 16:1–13, KJV):

> 1 And he said also unto his disciples, There was a certain rich man, which had a steward; and the same was accused unto him that he had wasted his goods.
>
> 2 And he called him, and said unto him, How is it that I hear this of thee? give an account of thy stewardship; for thou mayest be no longer steward.
>
> 3 Then the steward said within himself, What shall I do? for my lord taketh away from me the stewardship: I cannot dig; to beg I am ashamed.
>
> 4 I am resolved what to do, that, when I am put out of the stewardship, they may receive me into their houses.
>
> 5 So he called every one of his lord's debtors unto him, and said unto the first, How much owest thou unto my lord?
>
> 6 And he said, An hundred measures of oil. And he said unto him, Take thy bill, and sit down quickly, and write fifty.
>
> 7 Then said he to another, And how much owest thou? And he said, An hundred measures of wheat. And he said unto him, Take thy bill, and write fourscore.
>
> 8 And the lord commended the unjust steward, because he had done wisely: for the children of this world are in their generation wiser than the children of light.
>
> 9 And I say unto you, Make to yourselves friends of the mammon of unrighteousness; that, when ye fail, they may receive you into everlasting habitations.
>
> 10 He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much.
>
> 11 If therefore ye have not been faithful in the unrighteous mammon, who will commit to your trust the true riches?
>
> 12 And if ye have not been faithful in that which is another man's, who shall give you that which is your own?
>
> 13 No servant can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.

Observations:

1. Text states: a report starts the case: "and the same was accused unto him that he had wasted his goods" (v. 1). Lexical: "wasted" is G1287 διασκορπίζω (_diaskorpizo_): "to dissipate, i.e. (genitive case) to rout or separate; specially, to winnow; figuratively, to squander." KJV: "disperse, scatter (abroad), strew, waste." Inference: the image is scattering. The assets were dispersed, not conserved. That is the specific accusation.
2. Text states: the master demands an audit: "give an account of thy stewardship" (v. 2). Lexical: "account" is G3056 λόγος (_logos_). In Matthew 25:19, _logos_ is also the object of the verb "reckoneth" (G4868 _synairo_). Inference: the two parables use the same word for the account.
3. Text states: the text states the motive of the steward plainly, and it is not honorable: "that, when I am put out of the stewardship, they may receive me into their houses" (v. 4). He acts in his own interest.
4. Text states: the mechanism is a reduction of debt on the books of the master: "Take thy bill, and sit down quickly, and write fifty" (v. 6). The steward reduces what the debtors owe the master.
5. Text states: the master praises him: "And the lord commended the unjust steward, because he had done wisely" (v. 8). The praise is for wisdom. Lexical: "wisely" is G5430 φρονίμως (_phronimos_), "prudently." KJV: "wisely." The text in the same sentence calls him "unjust".
6. Text states: the text gives a comparative reason for the praise: "for the children of this world are in their generation wiser than the children of light" (v. 8).
7. Text states (the application): verses 10–12 give three tests that rise in scale. All three are on the same axis, faithfulness in small things:
   - v. 10: faithful in the least, faithful in much.
   - v. 11: faithful in unrighteous mammon, trusted with true riches.
   - v. 12: faithful in the things of another man, given your own.
8. Text states: verse 13 states the limit: "No servant can serve two masters... Ye cannot serve God and mammon."

### What the master commends, and what he does not

Readers often mishandle this passage in both directions, so I draw the line carefully.

Text states: the master praises the wisdom of the steward. Inference: that wisdom is his foresight. He turned an asset that he was about to lose into relationships that he was going to need. Text states: the master does not praise the dishonesty. The text calls him "the unjust steward" in the same sentence that records the praise.

Text states: the application that Jesus draws is not "be dishonest." It is this: "for the children of this world are in their generation wiser than the children of light". Inference: worldly people look further ahead about their own future than religious people look about theirs. The rebuke aims at the lack of foresight among the faithful, not at the ethics of the steward.

Inference (I label it so, because the passage is truly difficult):

- The element that transfers is the foresight, not the fraud. The steward looked ahead to the loss of his position and acted before it came. That is A19 (Doing the work reveals the need) and A27 (Friction is structural) in the form of a story.
- Verse 9 is the hardest line in the passage: "Make to yourselves friends of the mammon of unrighteousness; that, when ye fail, they may receive you into everlasting habitations." Contested: I read it like this. Use money for purposes that outlast it. The verse calls money "the mammon of unrighteousness", which is not a righteous thing in itself. But faithful readers differ on this verse, and I do not present one reading as the plain sense of the text.
- Verse 13 is the boundary that prevents the wrong reading. Whatever verse 9 means, verse 13 excludes the reading in which money becomes the master. The shrewdness of the steward is usable. His service to money does not transfer.

### Faithful in the least

Text states (the three tests, vv. 10–12): these are the verses that are useful in operation. The text states them as general rules.

| Verse | The test                                    | The stake                      |
| ----- | ------------------------------------------- | ------------------------------ |
| 10    | Faithful in the least, or unjust in it      | Faithfulness in much           |
| 11    | Faithful in unrighteous mammon              | Being trusted with true riches |
| 12    | Faithful in the things of another man       | Being given your own           |

Observations:

1. Text states: the tests rise in scale: from least to much, from mammon to true riches, from what belongs to another to your own.
2. Text states: each test is a prerequisite, stated as a rhetorical question: "If therefore ye have not been faithful in the unrighteous mammon, who will commit to your trust the true riches?" (v. 11). Inference: the answer is implied.
3. Text states: the smallest amount is the instrument of the test: "He that is faithful in that which is least is faithful also in much" (v. 10).
4. Text states: verse 12 explicitly separates the things of another man from your own. Inference: the passage assumes that the current holdings of the steward are not his. Faithfulness with them is the qualification for ownership.

Inference (business consequences):

- Small assignments are the qualification for large ones. The qualification is faithfulness, not brilliance. Observation 3.
- The test uses the assets of someone else. Observation 4. A manager who stewards the capital of the company is in an audition for capital of his own.
- A record of scattering disqualifies. The accusation was dissipation, the word _diaskorpizo_ (Observation 1 in the previous section). Someone who dispersed assets in the past is not a candidate for a larger allocation, whatever the explanation.
- Foresight is a valid competence, even when the world shows it better than the church does. This comes from the previous section. It is a rebuke to complacency, not an endorsement of the method.
- The category of stewardship is the status of an employee. The lexical work shows that the _oikonomos_ is a manager, a fiscal agent, an employee. The capital is not his. This is A1 stated as a job description.

---

## Part 9. Contentment and the charge to the rich

Text (1 Timothy 6:6–19, KJV):

> 6 But godliness with contentment is great gain.
>
> 7 For we brought nothing into this world, and it is certain we can carry nothing out.
>
> 8 And having food and raiment let us be therewith content.
>
> 9 But they that will be rich fall into temptation and a snare, and into many foolish and hurtful lusts, which drown men in destruction and perdition.
>
> 10 For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows.
>
> 11 But thou, O man of God, flee these things; and follow after righteousness, godliness, faith, love, patience, meekness.
>
> 12 Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses.
>
> 13 I give thee charge in the sight of God, who quickeneth all things, and before Christ Jesus, who before Pontius Pilate witnessed a good confession;
>
> 14 That thou keep this commandment without spot, unrebukeable, until the appearing of our Lord Jesus Christ:
>
> 15 Which in his times he shall shew, who is the blessed and only Potentate, the King of kings, and Lord of lords;
>
> 16 Who only hath immortality, dwelling in the light which no man can approach unto; whom no man hath seen, nor can see: to whom be honour and power everlasting. Amen.
>
> 17 Charge them that are rich in this world, that they be not highminded, nor trust in uncertain riches, but in the living God, who giveth us richly all things to enjoy;
>
> 18 That they do good, that they be rich in good works, ready to distribute, willing to communicate;
>
> 19 Laying up in store for themselves a good foundation against the time to come, that they may lay hold on eternal life.

Observations:

1. Text states: "godliness with contentment is great gain" (v. 6). Inference: the text presents contentment as a form of gain. That changes the whole accounting.
2. Text states: the text states the ground of contentment: "For we brought nothing into this world, and it is certain we can carry nothing out" (v. 7). Inference: the argument is A1. The assets were received, and the owner gives them up at death.
3. Text states: the text states the threshold of sufficiency: "And having food and raiment let us be therewith content" (v. 8). It names two items.
4. Text states (the warning, worded with care): "But they that will be rich fall into temptation and a snare" (v. 9). The subject is the will, not the wealth. The verb is about desire.
5. Text states: verse 10 names "the love of money" as "the root of all evil", not money itself. Lexical: "love of money" is G5365 φιλαργυρία (_philargyria_): "avarice." KJV: "love of money." Inference: the passage never condemns the possession of money. It condemns the desire for it.
6. Text states: the text states the mechanism: "which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows" (v. 10). There are three results: error, piercing, and sorrows. The harm is self-inflicted: "pierced themselves through".
7. Text states (the charge to the rich, vv. 17–19): there are four instructions, and none of them is "give it all away":
   - "that they be not highminded": humility.
   - "nor trust in uncertain riches, but in the living God": the object of trust, not the size of the holding.
   - "That they do good, that they be rich in good works, ready to distribute, willing to communicate": a readiness to give, not a mandated transfer.
   - "Laying up in store for themselves a good foundation against the time to come": the text permits accumulation and gives it a new frame. The store is "a good foundation". Matthew 25 does not use the phrase "laying up". The nearest contrast is Luke 12:21, "he that layeth up treasure for himself". The two passages use the same English verb for the condemned store and the permitted one. Inference: the difference is the object and the purpose of the store.
8. Text states: the text states the purpose of the store as eternal: "that they may lay hold on eternal life" (v. 19). Verse 17 adds "who giveth us richly all things to enjoy". The text affirms enjoyment. It does not condemn it.
9. Text states: the text does not tell the rich to become poor. The charge is to a specific set of attitudes and actions.

Inference: the passage has two halves. First comes a warning to those who want to be rich (vv. 9–10). Then comes a charge to those who are rich (vv. 17–19). The text addresses the two groups differently. The first half is a warning. The second half is a set of instructions, and the instructions permit continued ownership.

Inference (business consequences):

- "The love of money" and "money" are different objects, and the text keeps them separate. Observation 5. A business that needs capital does not violate the text. The warning is for a business that wants to be rich in the sense of verse 9. That desire has no limit.
- The text names the threshold of sufficiency: food and raiment. Observation 3. Whether a modern business has "food and raiment" is a judgment. The text gives a threshold, and the threshold is low.
- "Ready to distribute" is an attitude, not a quota. Observation 7. The instruction is about readiness and willingness. That is a standing posture, not a percentage.
- The text gives accumulation a new frame. It does not forbid it. Observation 7, the fourth instruction: "Laying up in store... a good foundation" is permitted language. Compare Luke 12:21, which condemns the man who lays up treasure "for himself". The difference is the object of the store.
- The text affirms enjoyment. Observation 8: "who giveth us richly all things to enjoy". A theology that treats all comfort as suspect does not come from this passage.
- The harm is self-inflicted. Observation 6: "pierced themselves through with many sorrows." This is a consequence, not a punishment. It pairs with A30 (Mortality makes time the binding constraint) and with A2 (The default state is formless and empty).

---

## Part 10. What is already in the house

Text (2 Kings 4:1–7, KJV):

> 1 Now there cried a certain woman of the wives of the sons of the prophets unto Elisha, saying, Thy servant my husband is dead; and thou knowest that thy servant did fear the LORD: and the creditor is come to take unto him my two sons to be bondmen.
>
> 2 And Elisha said unto her, What shall I do for thee? tell me, what hast thou in the house? And she said, Thine handmaid hath not any thing in the house, save a pot of oil.
>
> 3 Then he said, Go, borrow thee vessels abroad of all thy neighbours, even empty vessels; borrow not a few.
>
> 4 And when thou art come in, thou shalt shut the door upon thee and upon thy sons, and shalt pour out into all those vessels, and thou shalt set aside that which is full.
>
> 5 So she went from him, and shut the door upon her and upon her sons, who brought the vessels to her; and she poured out.
>
> 6 And it came to pass, when the vessels were full, that she said unto her son, Bring me yet a vessel. And he said unto her, There is not a vessel more. And the oil stayed.
>
> 7 Then she came and told the man of God. And he said, Go, sell the oil, and pay thy debt, and live thou and thy children of the rest.

Observations:

1. Text states (the situation): a widow faces a creditor who comes to take her two sons as bondmen (v. 1). The debt is real, and the collateral is labor: the children.
2. Text states (the first question): "tell me, what hast thou in the house?" (v. 2). The question comes before any provision. Inference: the help begins with an inventory of what is already there.
3. Text states (the answer): "Thine handmaid hath not any thing in the house, save a pot of oil" (v. 2). The woman judges that she has nothing. The text records the exception that she almost did not name.
4. Text states (the instruction): borrow empty vessels from the neighbors, "even empty vessels; borrow not a few" (v. 3). Inference: the size of the container sets the volume of the provision. The instruction to borrow many vessels is an instruction to enlarge the container.
5. Text states (the process): "thou shalt shut the door upon thee and upon thy sons" (v. 4). The work is private, and the sons take part.
6. Text states (the constraint): "And he said unto her, There is not a vessel more. And the oil stayed" (v. 6). The flow stopped when the vessels ran out, not when the supply ran out. The limit was the container, not the source.
7. Text states (the order of use): there are three instructions: "Go, sell the oil, and pay thy debt, and live thou and thy children of the rest" (v. 7). The order is sell, repay, then live on the remainder. She pays the debt first, and the family lives on what is left.

Inference: the financial teaching of the passage is this:

- Start with an inventory of what is already in the house. Observation 2. The provision came through the asset that was already there, which the owner called nothing.
- The binding constraint is usually capacity, not supply. Observation 6. The oil did not stop until the vessels ran out. This is A5 (Formation precedes filling) stated as an economic fact: the container limits the filling.
- Repayment of debt comes before consumption. Observation 7: "pay thy debt, and live thou and thy children of the rest". The text states the order.
- The asset was already there. Observation 3. The miracle did not create an asset. It multiplied one that existed. Inference: the first question in a cash crisis is not "how do we raise money?" It is "what do we already have?"

Inference (business consequences):

- The first question in a cash crisis is "what hast thou in the house?" It is not "what can we raise?" The inventory comes first.
- The owner's own assessment of the assets is unreliable. Observation 3: "not any thing in the house, save a pot of oil". The owner of an asset often does not count it, because it is not what he wishes he had.
- Secure capacity before volume. Observation 6. The widow borrowed the vessels before the oil flowed and before any sale. This connects to A13 (Provision precedes assignment).
- Repay the debt before you fund the lifestyle. Observation 7. The instruction is explicit, and it states the order.
- The work involved other people. Observation 5: the sons brought the vessels. A rescue that keeps the household out of the work is not the pattern here.
- Note the collateral in verse 1. The remedy of the creditor was the labor of the children. Parts 4 and 6 legislate against this situation, so read the passages together. The law forbids taking the means of life as security (Deuteronomy 24:6). Here, the means of life of the family is exactly what is at stake.

---

## Part 11. Working rules

These rules come from the material above. They are inferences, stated as working rules, not commands.

On deployment:

1. Do not leave capital idle (Matthew 25:27 and Luke 19:23). The master condemns idle capital. Inference: his floor is the yield of the most passive placement available, and in modern terms the nearest analogue is a low-risk deposit yield. Cash with no assignment is the talent in the ground. Operating cash held for a stated liquidity need has an assignment.
2. Allocate by a stated principle, and know which principle you run. Unequal by capacity (Matthew) and equal by default (Luke) are both in Scripture. If you confuse them, people make accusations that have no basis.
3. Assess the return against the allocation, not in absolute terms (Matthew 25:21, 23: the same praise for 100% and 100%).
4. Move capital away from unproductive managers (Matthew 25:28). A ratchet that only goes up is not an allocation process.
5. Diversify against the unknown event, not the known risk (Ecclesiastes 11:2).
6. Give a portion to seven, and also to eight. By design, the extra portion has no thesis.
7. Sow morning and evening. Make parallel bets under uncertainty (Ecclesiastes 11:6).
8. Do not wait for certainty (Ecclesiastes 11:4). The observer of the wind never sows.

On counting and completion:

9. Count to completion, not to the start (Luke 14:28–30). "Sufficient to finish" is the test.
10. Assess against the opponent, with numbers, before the battle (Luke 14:31–32). A negotiated settlement is a valid outcome of the assessment.
11. Set the date of the reckoning and keep it (Matthew 25:19: "After a long time"). Without scheduled accounting, there is no accountability.
12. Report your own numbers against a standard (Matthew 25:20, 22 and Luke 19:16, 18).

On debt:

13. Price the servitude, not only the interest (Proverbs 22:7). Read the covenant as a list of authorities that you gave up.
14. Treat a guarantee as a liability that starts at the moment of speech (Proverbs 6:1–2). If it was a mistake, unwind it urgently and humbly (vv. 3–5).
15. Do not extract from someone who cannot refuse (Exodus 22:25 and Leviticus 25:35–37). The prohibition targets the poor borrower and the brother, not interest as such. The Hebrew verb for lending on interest also covers the permitted loan to a stranger (Deuteronomy 23:20).
16. Set a survival floor on collateral (Exodus 22:26–27 and Deuteronomy 24:6, 10–13). Never take the means of production or the thing that a person needs to sleep.
17. Model debt against the cycle, not the present (Deuteronomy 15:1–11). The law expects the withdrawal behavior that the release year causes, and it forbids that behavior.
18. The preferred position is to lend and not borrow (Deuteronomy 15:6). The text states this as an ideal, not as a prohibition.

On reserves:

19. Set the reserve against the scenario, not against convention (Genesis 41:34–36: a fifth for seven years, against a forecast of seven years of famine). The text gives a rate and a duration but no derivation, and the store grew beyond counting (41:49).
20. Name one owner for the reserve (Genesis 41:33). A reserve without an owner gets raided.
21. Store near production, under central authority (Genesis 41:35, 48).
22. A reserve is a competitive position, not only a cushion (Genesis 41:54–57).
23. A reserve needs a purpose beyond the ease of the owner (Luke 12:19 against Genesis 41:36). The barns of Joseph and the barns of the rich fool differ in purpose, counsel, and named succession.
24. Know the state, not only the total (Proverbs 27:23). An income statement does not show condition.
25. A reserve is not idle capital (Part 1 against Part 7). A reserve is capital allocated to a specific function of recovery, and that is work. Hoarding is capital with no assignment.

On structure and limits:

26. Resets are a design feature, not a failure (Leviticus 25 and Deuteronomy 15). A system with no reset concentrates. That is the default, not a moral failure of the participants.
27. Cap durability, not accumulation (Leviticus 25:23). The text does not condemn the man with many fields. It limits how long he can hold them.
28. Transfers in distress run cash → movables → productive assets → control (Genesis 47:14–21). Decide in advance where you will stop (A20).
29. Name the exemptions before you need them. Every consolidation has them (Genesis 47:22), and the list is the map of who has standing.
30. Consider irreversibility explicitly (Genesis 47:26: "And Joseph made it a law over the land of Egypt unto this day"). This is A32 applied to capital: slow down the irreversible decisions.

On what is already there:

31. Start with "what hast thou in the house?" (2 Kings 4:2). The owner's own assessment is unreliable.
32. The binding constraint is usually capacity, not supply (2 Kings 4:6). The oil stopped when the vessels ran out.
33. Repay debt before you fund consumption (2 Kings 4:7). The text states the order.
34. "Consider your ways" (Haggai 1:5). A bag with holes is a structural leak. The response is a review of the process, not more effort.
35. Watch for drift in who gets the credit (Genesis 41:16: "It is not in me"). The disclaimer must come before the result to be worth anything.

---

## Appendix: verification log

### Verses retrieved with `scripture.ts`

Matthew 25:14–30, Luke 19:11–27, Luke 14:28–32, Proverbs 22:7, Proverbs 6:1–5, Genesis 41:1–57 (including 41:8, 41:13, 41:16, 41:29–36, 41:47–57), Genesis 47:13–26, Leviticus 25:1–37, Deuteronomy 15:1–11, Exodus 22:25–27, Exodus 23:12, Deuteronomy 23:19–20, Deuteronomy 24:6, 10–13, Ecclesiastes 11:1–6, Ecclesiastes 5:10–11, 1 Timothy 6:6–19, Proverbs 27:23–27, Haggai 1:4–6, Luke 16:1–13, Luke 12:15–21, 2 Kings 4:1–7. Also: Proverbs 21:20, Proverbs 11:15, Proverbs 17:18, Proverbs 22:26–27, Genesis 39:6, Matthew 20:2.

### Lexical claims verified with `lexicon.ts`

G5007 _talanton_, G3623 _oikonomos_, G3622 _oikonomia_, G3621 _oikonomeo_, G3414 _mna_, G1220 _denarion_, G1411 _dynamis_, G4868 _synairo_, G3056 _logos_, G5110 _tokos_, G5365 _philargyria_, G5585 _psephizo_ (see note 4 below), G1287 _diaskorpizo_ (see note 4 below), G5430 _phronimos_, H5650 _ebed_, H5647 _abad_, H6148 _arab_, H4855 _mashsha_, H5378 _nasha_, H5383 _nashah_, H5391 _nashak_, H5392 _neshek_.

### Claims I could NOT verify with the supplied tools

I state these explicitly and do not smooth them over.

1. The value of the talent (≈6,000 denarii, ≈20 years of the wages of a laborer). Strong's G5007 gives no figure and does not mention denarii at all. A direct search of the Strong's source data finds no "denarii" in `strongs-dictionary.xhtml`. The figure is a historical and numismatic claim from outside these tools. It agrees with Matthew 20:2, where a _denarion_ is a day's wage, but the anchor is not verified here. The file treats the size only as a quality.

2. The ratio of talent to mina (1 talent = 60 minas). Strong's does not state it. It defines G3414 _mna_ only as "a mna (i.e. mina), a certain weight." The ratio is not verified here. The file does not rely on it. The file relies only on two facts that the texts state directly. The amounts in Matthew are unequal, and the amounts in Luke are equal.

3. Proverbs 11:15, Proverbs 17:18, Proverbs 22:26–27. I retrieved these verses and quote them verbatim in Part 4, under "Surety for a neighbor."

4. G5585 _psephizo_, G1287 _diaskorpizo_, G5430 _phronimos_. I looked up all three and quote their definitions verbatim above. Strong's gives G5585 as "to use pebbles in enumeration, i.e. (generally) to compute". It gives G1287 as "to dissipate, i.e. (genitive case) to rout or separate; specially, to winnow; figuratively, to squander". It gives G5430 as "prudently".

5. The comparison of the barns of the rich fool (Luke 12) with the storage of Joseph, which the text presents as wise. This is my comparison, not a statement in either text. Part 7 labels it as an inference, and the four-row table is an inference throughout.

6. The base and the size of the levy in Genesis 41:34. The text gives a rate ("the fifth part") and a duration (seven years). By simple arithmetic, a fifth for seven years is 1.4 years of harvest, if the levy was on the gross harvest. That is my computation, not a claim in the text. The file does not claim that this amount covers seven years of famine. The text gives no such derivation, and it says that the store grew beyond counting (41:49). The text also does not state whether the levy was on the gross harvest or on some other base. I read it as gross production, which is the natural reading of "take up the fifth part of the land of Egypt in the seven plenteous years". But that is a reading.

7. The reading of Genesis 47 as a consolidation that was voluntary in form and forced in substance. The text states that the people proposed the sale and that they said "Thou hast saved our lives." It also states that the land became Pharaoh's and that the arrangement became law. Both are in the text. The characterization is mine, and Part 5 says that faithful readers differ.

8. The Greek of Matthew 25:19 and Luke 16:2. The KJV text in these tools carries no Strong's numbers. The claim that _logos_ is the object of "reckoneth" in Matthew 25:19 and the word for "account" in Luke 16:2 comes from the Greek text. These tools do not show it. The definitions of G4868 and G3056 are quoted from `lexicon.ts`.
