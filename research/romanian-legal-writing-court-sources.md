# Romanian legal writing: court-tested public contracts, case law, and resolved statutory gaps

Companion to `research/romanian-legal-writing-sources.md`. Primary statutory, public-contract, and CJUE excerpts below were fetched by script on **2026-11-19** (normalized from cedilla ş/ţ to comma-below ș/ț). Case summaries from secondary legal commentary (where `iccj.ro` API returned 401) are explicitly marked **Secondary summary — verify full text on scj.ro/rejust.ro before citing verbatim**.

---

## 1. Statutory Romanian public contracts (verified verbatim on legislatie.just.ro)

### HG nr. 1/2018 — Anexa nr. 1 (Condiții generale pentru contracte de execuție lucrări, FIDIC-adapted)
- URL: https://legislatie.just.ro/Public/DetaliiDocument/282833 (base decree: `196640`; Anexa nr. 2 proiectare și execuție: `282834`; updated by HG 375/2022 and HG 965/2022). Fetched: 2026-11-19.
- Why it matters: Romania's flagship statutory public contract, litigated daily before Romanian courts and CACI-CCIR arbitral tribunals. Key drafting patterns to emulate:
  - **Clauza 4 (Comunicări):** written notices identifying contract name/number, sent by post, fax, digitally signed email, or personal delivery, with mandatory confirmation of receipt whenever a deadline applies.
  - **Clauza 53 (Plăți întârziate):** interest pegged directly to BNR reference rate (RON) or ECB rate (EUR) + 8 percentage points, matching OG 13/2011 art. 3(2^1) and L. 72/2013, running from due date to debit date.
  - **Clauza 63.2 (Notificarea de încălcare):** notice must reference the exact breached clause, set a reasonable cure period, and state that it is issued under that subclause (mirrors CC art. 1.522(3) and 1.553(3)).
  - **Clauza 64–65 vs Clauza 66.7:** strict separation between *reziliere* for breach (Clauza 64–65, 15-day reasoned notice) and *denunțare unilaterală* without breach (Clauza 66.7, with a 3-year bar on self-execution/re-tendering or compensation).
  - **Clauza 66 (Forță majoră și denunțare unilaterală):** explicitly covers *forță majoră* and *cazuri fortuite* (66.2), requires immediate notice of nature/duration/effect and mitigation duty (66.4), and terminates *de plin drept* after 180 days + 30-day notice (66.6).
  - **Clauza 68 (Riscuri și despăgubiri):** explicit risk list, bodily-injury indemnity carved out (68.3), specific indirect-loss exclusions (68.4: loss of another contract or financial loss other than defined Additional Costs).
  - **Clauza 70 (Dispute și arbitraj):** mandatory amicable settlement stage (70.2) before court or CACI-CCIR arbitration (70.2^1, 70.3).

### Ordinul ANAP nr. 1.554/2023 — Anexa (Model contract achiziție publică/sectorială de produse)
- URL: https://legislatie.just.ro/Public/DetaliiDocument/274322 (parent order: `274251`, MO nr. 803 din 6 septembrie 2023; repeals Ordin ANAP 1017/2019). Fetched: 2026-11-19.
- Key patterns:
  - **Clauza 23.10:** *„Penalitățile de întârziere datorate curg de drept din data scadenței obligațiilor asumate conform prezentului contract.”*
  - **Clauza 29 (Forța majoră):** explicitly pairs *forța majoră și cazul fortuit* under CC art. 1.351, requires proof, immediate written notice of start and end, and suspension without harming prior accrued rights.
  - **Clauza 7.2 (Soluționarea litigiilor):** 5-day reciprocal notice and response window for direct amicable negotiations before court.
- **Drafting bug caught in ANAP's own model:** the obsolescence exit clause writes *„notificare de denunțare unilaterală transmisă cu cel puțin 60 de zile înainte de data de reziliere propusă”* — mixing *denunțare unilaterală* and *reziliere* in one sentence. Do not imitate this slip.

### Empirical check of private Romanian market-leader public T&C (fetched 2026-11-19)
- **eMAG (`emag.ro/info/termeni-si-conditii`)** and **SmartBill (`smartbill.ro/termeni-si-conditii`)** were fetched as real-world benchmarks. Both lack diacritics in body text, use pre-2011 paraphrases of *forță majoră* instead of CC art. 1.351(2), and eMAG's T&C contains typos (*„reprezenta”*, *„aplicabe”*) plus a bare *„Prezentul document este supus legii romane”* without the CJUE C-191/15 Rome I art. 6(2) notice. **Inference:** popularity is not legal quality; benchmark against verified statutes, statutory public contracts, and court rulings, not scraped commercial T&C.

---

## 2. Binding CJUE judgments (fetched verbatim in Romanian from EU Cellar, 2026-11-19)

| Case | CELEX | Clauses tested | Outcome & drafting rule |
|---|---|---|---|
| **C-186/16 Andriciuc** (Banca Românească) | `62016CJ0186` | Art. 1(2) repayment in loan currency (CHF); art. 9(1), 10(3)(9) conversion | **WON (in principle):** core performance clause falls under Dir. 93/13 art. 4(2) / L. 193 art. 4(6) immunity *if* clear both formally/grammatically **and** in concrete economic consequences for an average consumer. |
| **C-621/17 Kiss** | `62017CJ0621` | Administration & disbursement fee clauses | **WON:** transparent fee clauses stating exact amount, calculation method, and due date satisfy clarity and do not automatically create significant imbalance even without itemizing every internal service. |
| **C-143/13 Matei** (Volksbank România) | `62013CJ0143` | Clauza 3(d) unilateral interest revision on *„schimbări semnificative pe piața monetară”*; Clauza 3.5 & 5 *„comision de risc”* | **LOST:** vague unilateral rate-change mechanism and unexplained risk fee fall outside art. 4(6) immunity and face full unfairness review. |
| **C-191/15 VKI v Amazon** | `62015CJ0191` | Bare choice-of-law clause in cross-border EU B2C e-commerce T&C | **LOST:** abusive under Dir. 93/13 art. 3(1) because it misleads consumers into thinking only seller's law applies, omitting mandatory residence-state protections under Rome I art. 6(2). |

---

## 3. Romanian Supreme Court (ÎCCJ) holdings

- **Verified verbatim on `legislatie.just.ro` (`227770`, MO nr. 611/13.07.2020) — ÎCCJ RIL Decizia nr. 10 din 6 aprilie 2020:** *„Respinge, ca inadmisibilă, sesizarea formulată de Colegiul de conducere al Curții de Apel Brașov...”* regarding L. 193/2000 art. 4(6) and bank fees. **Never cite as a merits ruling** (common hallucination in search summaries).
- **Secondary summaries — verify full text on `iccj.ro`/`rejust.ro` before citing verbatim** (`iccj.ro` WP REST API returned HTTP 401):
  - **ÎCCJ, Secția a II-a civilă, Decizia nr. 5141 din 27.11.2018 (WON):** explicit *pact comisoriu* stating *„contractul va înceta în mod automat”* operates *de plin drept* without an extra termination notice under CC art. 1.553(2); lower courts may not add formalities absent from the clause.
  - **ÎCCJ, Secția a II-a civilă, Decizia nr. 2144 din 04.11.2020 (WON):** express written acceptance under CC art. 1.203 covers the *denunțare unilaterală* clause itself (not each later exercise); *denunțare unilaterală* (CC 1.276) is distinct from *pact comisoriu* / *rezoluțiune* and requires no breach.
  - **ÎCCJ, Secția a II-a civilă, Decizia nr. 1461/2021 (LOST):** a *clauză penală* stipulated for delay (*moratorie*) under CC art. 1.538–1.539 cannot be extended implicitly to total non-performance or termination.
  - **ÎCCJ RIL Decizia nr. 19 din 20.05.2019 (LOST):** *clauză penală* in an individual employment contract (CIM) or addendum is struck by absolute nullity.

---

## 4. Statutory gaps & open questions resolved from `romanian-legal-writing-sources.md`

- **Resolved Open Question #6 (`clauză penală` vs `dobândă penalizatoare`):** fetched **OG nr. 13/2011 art. 10** (`131085`, `id_act=289463`): *„Dispozițiile art. 1.535 și art. 1.538-1.543 din Legea nr. 287/2009, republicată, sunt aplicabile dobânzii penalizatoare.”* Penalty interest is governed by the CC penalty-clause rules (including judicial reduction under art. 1.541).
- **Resolved B2C digital-conformity gap:** fetched **OUG nr. 141/2021** (`250054`, MO 1248/30.12.2021) — art. 4 (delivery), art. 6–7 (mandatory subjective/objective conformity including continuity, security, updates), art. 10–11 (5-year / continuous-period liability & trader burden of proof), art. 18 (unilateral digital service modifications require valid stated reason, zero extra cost, clear durable-medium notice, and 30-day free termination on negative impact), art. 24 (*caracter imperativ* — B2C waivers are not binding on the consumer). Also cataloged **OUG nr. 140/2021** (`250044`, B2C goods).
- **Resolved e-commerce gap:** fetched **Legea nr. 365/2002 (rep.)** (`77218`, `id_act=288595`) — art. 5 (mandatory permanent trader disclosures), art. 7–9 (electronic contract validity, technical steps, error correction, receipt confirmation).
- **Still open:**
  1. **CC art. 1.203 online acceptance:** doctrine and practice require un-prechecked dedicated acceptance (plus separate highlight/checkbox for unusual clauses and audit trail), rejecting passive browsewrap; no single binding ÎCCJ RIL/HP settles whether one checkbox suffices for all unusual clauses online.
  2. **BNR reference rate:** `bnr.ro` HTML table did not parse via simple regex; skill rule remains: never hardcode a percentage from memory—verify current BNR rate live or refer dynamically to *„rata dobânzii de referință a Băncii Naționale a României”* (as HG 1/2018 Clauza 53 does).
