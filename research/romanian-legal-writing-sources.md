# Romanian legal writing: sources and verified text

Research for `skills/alex-crisan-romanian-legal-writing/`. Every quote below was fetched by script on **2026-11-14**. Nothing is quoted from memory. Article numbers come from the fetched page headings. Where I infer something, I label it **Inference**.

---

## Verdict on fetchability

**The design holds.** legislatie.just.ro serves full consolidated acts as static HTML over plain HTTP, with no browser and no JavaScript. Articles can be pulled out cleanly by their heading.

- **Primary source, Romanian acts:** `https://legislatie.just.ro/Public/DetaliiDocument/<baseId>`. The base ID always renders the **latest** consolidation. Every act below came back with status 200.
- **Primary source, GDPR (Romanian):** EU Publications Office (Cellar), consolidated text with the corrigendum applied:
  `https://publications.europa.eu/resource/celex/02016R0679-20160504` with `Accept: application/xhtml+xml` and `Accept-Language: ron`.
- **Fallback, GDPR:** legislatie.just.ro `DetaliiDocument/201834`. It matched the Cellar consolidated text word for word on art. 6, 13 and 15-22.
- **Fallback, Romanian acts:** I found no second official source that serves consolidated text. The web service returns the **original** text, not the consolidated one (checked on L. 193/2000). The monitoruloficial.ro home page loads (200), but I did not test whether issue texts can be fetched. Recommended fallback: keep a dated local snapshot of the last good fetch. Quote from it only with a "snapshot from <date>" label.
- **EUR-Lex HTML is not usable by script.** Every `eur-lex.europa.eu/legal-content/...` and `/eli/...` URL returned `302` to `/TodayOJ/index.html`, both with a plain and with a browser User-Agent. Cellar works.

### URL pattern and IDs

| Act | Base ID (renders latest) | Consolidation shown | ID of that consolidation (`id_act`) | Republication ID used for the currency check |
|---|---|---|---|---|
| Codul civil (L. 287/2009) | 109884 | 03.05.2026 | 309285 | 130143 (Republicarea 1) |
| Codul de procedură civilă (L. 134/2010) | 140271 | 14.12.2025 | 304485 | 167140 (Republicarea din 10.04.2015) |
| L. 24/2000 | 21698 | 15.12.2022 | 262035 | 118116 (Republicarea din 21.04.2010) |
| L. 193/2000 | 24922 | 28.05.2022 | 254145 | 140214 (Republicarea 3) |
| OUG 34/2014 | 158913 | 27.03.2026 | n/a | 158913 |
| L. 190/2018 | 203151 | 01.12.2019 | n/a | 203151 |
| OG 13/2011 | 131085 | 07.08.2024 | n/a | 131085 |
| L. 72/2013 | 146555 | 01.02.2016 | n/a | 146555 |
| OUG 18/2026 (amends OUG 34/2014) | 308474 | n/a | n/a | n/a |
| Reg. (UE) 2016/679 (portal copy) | 201834 | no consolidation list | n/a | n/a |

Notes on IDs:
- Base ID 109884 is the **Code** (`COD CIVIL`). ID 109883 is the promulgating `LEGE nr. 287`. Use 109884 for the Civil Code.
- Base ID 120644 is the CPC's promulgating `LEGE nr. 134`. It is 56 KB and holds no articles. The Code itself is 140271.
- Each consolidation has its own ID, listed under "istoric consolidări" with `title='Consolidarea din DD.MM.YYYY'` and an `href` to `DetaliiDocument/<id>`. On the base page the latest entry is the one styled `color:red`. The hidden input `id="id_act"` gives the ID of the consolidation being shown. Pin that ID next to every quote.
- **Do not trust `<title>`.** For 309285 (the 03.05.2026 consolidation), `<title>` read `COD CIVIL (A) 04/07/2016`. Read the consolidation date from the history list instead.

### Finding IDs: the official web service

- SOAP at `https://legislatie.just.ro/apiws/FreeWebService.svc/SOAP`. The WSDL is at `.../FreeWebService.svc?wsdl`. The documentation page is `https://legislatie.just.ro/ServiciulWebLegislatie.htm`.
- You call `GetToken`, then `Search` with `NumarPagina`, `RezultatePagina`, `SearchAn`, `SearchNumar`, `SearchTitlu` and `SearchText`. Results include `LinkHtml` (`http://legislatie.just.ro/Public/DetaliiDocument/<id>`), `TipAct`, `Numar`, `DataVigoare`, `Titlu` and `Text`.
- `SearchAn` + `SearchNumar` alone returns many act types. Add `SearchTitlu`, for example `"drepturile consumatorilor"`, or raise `RezultatePagina`. With 20 results per page, OUG 34/2014 and OG 13/2011 fell off the first page.
- The `Text` field is the **original** act. For L. 193/2000 it returned the 2000 text, without the 2022 changes. Use the service only to find IDs. Never quote from it.

### Extraction approach (proved on every act above)

- Each article is `<span class="S_ART">` containing `S_ART_TTL` ("Articolul N"), `S_ART_DEN` (the heading, often empty, in which case the heading is the first body line) and `S_ART_BDY`. Paragraphs are `S_ALN`, letters are `S_LIT`, and annexes are `S_ANX`.
- **Key on the heading text, not on HTML ids.** The ids are internal sequence numbers: `id_artA26` is art. 1 of the Civil Code.
- Number formats in headings: `Articolul 1.270` (thousands dot), `Articolul 6^1` (inserted article), `Articolul IV` (Roman numerals in amending acts).
- Drop these when extracting: `S_NTA` (editor's notes), any `*_SHORT` span and `TAG_COLLAPSED` (they hold "..." and "+" toggles), and `display:none` spans.
- Amendment markers sit inline as plain text, for example `(la 28-05-2022, Alineatul (1) din Articolul 13 ... a fost modificat de ...)`. Keep them apart from the norm, but keep them: they date each paragraph.
- **Nested quoted articles.** Amending provisions quote other acts' articles. OUG 34/2014 art. 29 contains `Articolul 17^1`, `51`, `52` and others from other laws. Key only top-level `S_ART` spans.
- Page sizes: Civil Code about 6.3 MB (about 5 s), CPC about 3.7 MB, the rest under 1 MB. An 8-request burst on one page returned 200 every time in about 0.6-0.9 s. No `robots.txt` exists (it returns 302 to `/Error`).
- The prototype extractors are throwaway files in my scratchpad: `art.py` (portal HTML), `eu.py` (Cellar XHTML), `ws.py` (SOAP) and `as2.py` (currency check). They may be cleared. The rules above are enough to rebuild them in `scripts/`.

### Encoding of ș/ț

- Current consolidations use **comma-below**: U+0219 ș, U+021B ț. Civil Code 03.05.2026: 6,441 ș and 15,610 ț, but still **464 cedilla ţ (U+0163)** left over.
- **Older consolidations use cedilla.** The Civil Code consolidation of 04.02.2016 (ID 175630) had 6,104 ş (U+015F) and 15,669 ţ.
- Cellar GDPR: comma-below only.
- Web-service `Titlu`/`Text`: cedilla (`comercianţi şi consumatori`).
- **Rule for the script:** normalize ş→ș and ţ→ț (capitals too) before searching or comparing. Quote the normalized text and say so.

### Currency check

- Endpoint: `POST https://legislatie.just.ro/Public/actiuniSuferite` with form field `contor=<id>`. It returns JSON `{"acte": "<html table>"}` with one row per change: section, operation, amending act and its date.
- Query the **latest republication's** ID. Changes after a republication attach to that ID. Querying 24922 (L. 193/2000) returned only 2002 changes, while 140214 returned the 2022 ones. Querying a consolidation ID (for example 254145) returns "Nu exista actiuni suferite".
- Result: in every case the latest amending act predates the consolidation date.

| Act | Latest amending act in the portal's index | Consolidation shown | Consistent |
|---|---|---|---|
| Codul civil | Legea 57 din 30/04/2026 (art. 375, 376, 383) | 03.05.2026 | yes |
| CPC | Legea 216 din 11/12/2025 (art. 150) | 14.12.2025 | yes |
| L. 24/2000 | Legea 343 din 09/12/2022 (Cap. 6) | 15.12.2022 | yes |
| L. 193/2000 | OUG 58 din 28/04/2022 | 28.05.2022 | yes |
| OUG 34/2014 | OUG 18 din 19/03/2026 | 27.03.2026 | yes |
| L. 190/2018 | Legea 233 din 27/11/2019 (art. 8) | 01.12.2019 | yes |
| OG 13/2011 | Circulara 35 din 07/08/2024 (art. 3) | 07.08.2024 | yes, see risks |
| L. 72/2013 | Decizia CCR 745 din 03/11/2015 (art. 21) | 01.02.2016 | yes |

### Risks

1. **Consolidated text is unofficial.** The portal says so (fetched from `https://legislatie.just.ro/Public/Termeni`):
   > Versiunile consolidate ale actelor normative reprezintă reproducerea neoficială a unor acte ce au suferit modificări de-a lungul timpului, însă nu au fost republicate în Monitorul Oficial al României.

   > În cazul în care există deosebiri între versiunea electronica a actelor normative prezentate şi textul tiparit, este considerat autentic doar textul tipărit şi publicat in Monitorul Oficial al României.

   The same page permits reuse: "este posibila reutilizarea textelor legale, in limita celor prezentate mai sus." The skill should label every quote "consolidated version as of <date>, unofficial".
2. **The currency check only proves the portal agrees with itself.** An amending act published in Monitorul Oficial but not yet indexed would not show up.
3. **An inline amendment date is not the date a rule starts to apply.** OUG 34/2014 art. 11^1 is marked `(la 26-03-2026, ...)`, but OUG 18/2026 art. IV says that point applies only from 19 June 2026 (quoted below). The script must open the amending act's final provisions before saying a rule is "in force".
4. **A plain `curl` is blocked.** An empty User-Agent and `curl/8.0` got 403. `Mozilla/5.0`, a custom string and Bun's default `fetch` UA got 200. Send an explicit, honest UA such as `alex-crisan-romanian-legal-writing/<version>`.
5. **The source contains typos.** OUG 34/2014 art. 9(1) reads `dintrun` in the raw HTML. Quote it as returned, marked [sic]. Do not silently fix it.
6. **The original GDPR text differs from the corrected one.** `celex/32016R0679` (OJ L 119, 4.5.2016, RO) lacks the 2018 Romanian corrigendum. It differs at art. 17(3) and 21(1). Always use `02016R0679-20160504` or the portal copy. See the GDPR section.

---

## Codul civil (Legea nr. 287/2009, republicată)

- URL: https://legislatie.just.ro/Public/DetaliiDocument/109884 (consolidation ID 309285)
- Fetched: 2026-11-14. Consolidation shown: **03.05.2026**. Header: "CODUL CIVIL din 17 iulie 2009 (**republicat**) (Legea nr. 287/2009**)", MONITORUL OFICIAL nr. 505 din 15 iulie 2011.
- The terms-of-art provisions are quoted in the next section. Two general ones:

**Art. 1.270 – Forța obligatorie**
> (1) Contractul valabil încheiat are putere de lege între părțile contractante.
> (2) Contractul se modifică sau încetează numai prin acordul părților ori din cauze autorizate de lege.

**Art. 1.268 – Interpretarea clauzelor îndoielnice** (excerpt)
> (1) Clauzele susceptibile de mai multe înțelesuri se interpretează în sensul ce se potrivește cel mai bine naturii și obiectului contractului.
> [...]
> (3) Clauzele se interpretează în sensul în care pot produce efecte, iar nu în acela în care nu ar putea produce niciunul.
> (4) Contractul nu cuprinde decât lucrul asupra căruia părțile și-au propus a contracta, oricât de generali ar fi termenii folosiți.
> (5) Clauzele destinate să exemplifice sau să înlăture orice îndoială asupra aplicării contractului la un caz particular nu îi restrâng aplicarea în alte cazuri care nu au fost expres prevăzute.

**Art. 1.269 – Regulile subsidiare de interpretare**
> (1) Dacă, după aplicarea regulilor de interpretare, contractul rămâne neclar, acesta se interpretează în favoarea celui care se obligă.
> (2) Stipulațiile înscrise în contractele de adeziune se interpretează împotriva celui care le-a propus.

**Art. 1.271 – Impreviziunea** (excerpt)
> (1) Părțile sunt ținute să își execute obligațiile, chiar dacă executarea lor a devenit mai oneroasă, fie datorită creșterii costurilor executării propriei obligații, fie datorită scăderii valorii contraprestației.
> (2) Cu toate acestea, dacă executarea contractului a devenit excesiv de oneroasă datorită unei schimbări excepționale a împrejurărilor care ar face vădit injustă obligarea debitorului la executarea obligației, instanța poate să dispună:
> a) adaptarea contractului, pentru a distribui în mod echitabil între părți pierderile și beneficiile ce rezultă din schimbarea împrejurărilor;
> b) încetarea contractului, la momentul și în condițiile pe care le stabilește.

## Codul de procedură civilă (Legea nr. 134/2010, republicată)

- URL: https://legislatie.just.ro/Public/DetaliiDocument/140271 (consolidation ID 304485)
- Fetched: 2026-11-14. Consolidation shown: **14.12.2025**. Header: "CODUL DE PROCEDURĂ CIVILĂ din 1 iulie 2010 (**republicat**)", MONITORUL OFICIAL nr. 247 din 10 aprilie 2015.

**Art. 121 – Cererile împotriva unui consumator**
> Cererile formulate de un profesionist împotriva unui consumator pot fi introduse numai la instanța domiciliului consumatorului. Dispozițiile art. 126 alin. (2) rămân aplicabile.

**Art. 126 – Alegerea de competență**
> (1) Părțile pot conveni în scris sau, în cazul litigiilor născute, și prin declarație verbală în fața instanței ca procesele privitoare la bunuri și la alte drepturi de care acestea pot să dispună să fie judecate de alte instanțe decât acelea care, potrivit legii, ar fi competente teritorial să le judece, în afară de cazul când această competență este exclusivă.
> (2) În litigiile din materia protecției drepturilor consumatorilor, precum și în alte cazuri prevăzute de lege, părțile pot conveni alegerea instanței competente, în condițiile prevăzute la alin. (1), numai după nașterea dreptului la despăgubire. Orice convenție contrară este considerată ca nescrisă.

**Art. 113 – Competența teritorială alternativă** (excerpt)
> (1) În afară de instanțele prevăzute la art. 107-112, mai sunt competente:
> [...]
> 3. instanța locului prevăzut în contract pentru executarea, fie chiar în parte, a obligației, în cazul cererilor privind executarea, anularea, rezoluțiunea sau rezilierea unui contract;
> [...]
> 8. instanța domiciliului consumatorului, în cererile având ca obiect executarea, constatarea nulității absolute, anularea, rezoluțiunea, rezilierea sau denunțarea unilaterală a contractului încheiat cu un profesionist sau în cererile având ca obiect repararea pagubelor produse consumatorilor;

**Art. 548 – Forma scrisă** (excerpt)
> (1) Convenția arbitrală se încheie în scris, sub sancțiunea nulității. Condiția formei scrise se consideră îndeplinită atunci când recurgerea la arbitraj a fost convenită prin schimb de corespondență, indiferent de forma acesteia, sau schimb de acte procedurale.

**Art. 550 – Clauza compromisorie** (excerpt)
> (1) Prin clauza compromisorie părțile convin ca litigiile ce se vor naște din contractul în care este stipulată sau în legătură cu acesta să fie soluționate pe calea arbitrajului, arătându-se, sub sancțiunea nulității, modalitatea de numire a arbitrilor. În cazul arbitrajului instituționalizat este suficientă referirea la instituția sau regulile de procedură ale instituției care organizează arbitrajul.
> (2) Validitatea clauzei compromisorii este independentă de valabilitatea contractului în care a fost înscrisă.

## Legea nr. 24/2000 (normele de tehnică legislativă), republicată

- URL: https://legislatie.just.ro/Public/DetaliiDocument/21698 (consolidation ID 262035)
- Fetched: 2026-11-14. Consolidation shown: **15.12.2022**. Header: "LEGE nr. 24 din 27 martie 2000 (**republicată**) privind normele de tehnică legislativă pentru elaborarea actelor normative", MONITORUL OFICIAL nr. 260 din 21 aprilie 2010.

**Does it bind private contracts?** Art. 3 lists who it binds: drafts of laws, government ordinances and decisions, and normative acts of other authorities. **Inference:** it does not bind private contracts or T&C. It is still a good style authority: art. 36-37 state the consistency rule plainly. The binding consistency and clarity rules for consumer contracts come from L. 193/2000 art. 1 and OUG 34/2014 art. 6. For the interpretation risk of inconsistent terms, see CC art. 1.268-1.269.

**Art. 3**
> (1) Normele de tehnică legislativă sunt obligatorii la elaborarea proiectelor de lege de către Guvern și a propunerilor legislative aparținând deputaților, senatorilor sau cetățenilor, în cadrul exercitării dreptului la inițiativă legislativă, la elaborarea și adoptarea ordonanțelor și hotărârilor Guvernului, precum și la elaborarea și adoptarea actelor normative ale celorlalte autorități cu asemenea atribuții.
> (2) Normele de tehnică legislativă se aplică, în mod corespunzător, și la elaborarea și adoptarea proiectelor de ordine, instrucțiuni și de alte acte normative emise de conducătorii organelor administrației publice centrale de specialitate, precum și la elaborarea și adoptarea actelor cu caracter normativ emise de autoritățile administrației publice locale.

**Art. 36**
> (1) Actele normative trebuie redactate într-un limbaj și stil juridic specific normativ, concis, sobru, clar și precis, care să excludă orice echivoc, cu respectarea strictă a regulilor gramaticale și de ortografie.
> (2) Este interzisă folosirea neologismelor, dacă există un sinonim de largă răspândire în limba română. În cazurile în care se impune folosirea unor termeni și expresii străine, se va alătura, după caz, corespondentul lor în limba română.
> (3) Termenii de specialitate pot fi utilizați numai dacă sunt consacrați în domeniul de activitate la care se referă reglementarea.
> (4) Redactarea textelor se face prin folosirea cuvintelor în înțelesul lor curent din limba română modernă, cu evitarea regionalismelor. Redactarea este subordonată dezideratului înțelegerii cu ușurință a textului de către destinatarii acestuia.

**Art. 37** (terminology consistency and defined terms)
> (1) În limbajul normativ aceleași noțiuni se exprimă numai prin aceiași termeni.
> (2) Dacă o noțiune sau un termen nu este consacrat sau poate avea înțelesuri diferite, semnificația acestuia în context se stabilește prin actul normativ ce le instituie, în cadrul dispozițiilor generale sau într-o anexă destinată lexicului respectiv, și devine obligatoriu pentru actele normative din aceeași materie.
> (3) Exprimarea prin abrevieri a unor denumiri sau termeni se poate face numai prin explicitare în text, la prima folosire.

**Art. 38**
> (1) Textul articolelor trebuie să aibă caracter dispozitiv, să prezinte norma instituită fără explicații sau justificări.
> (2) În redactarea actului normativ, de regulă, verbele se utilizează la timpul prezent, forma afirmativă, pentru a se accentua caracterul imperativ al dispoziției respective.
> (3) Utilizarea unor explicații prin norme interpretative este permisă numai în măsura în care ele sunt strict necesare pentru înțelegerea textului. Nu este permisă prezentarea unor explicații prin folosirea parantezelor.

## Legea nr. 193/2000 (clauzele abuzive), republicată

- URL: https://legislatie.just.ro/Public/DetaliiDocument/24922 (consolidation ID 254145)
- Fetched: 2026-11-14. Consolidation shown: **28.05.2022**. Header: "LEGE nr. 193 din 6 noiembrie 2000 (**republicată**) privind clauzele abuzive din contractele încheiate între profesioniști și consumatori", MONITORUL OFICIAL nr. 543 din 3 august 2012.

**Art. 1** (clear and comprehensible terms)
> (1) Orice contract încheiat între profesioniști și consumatori pentru vânzarea de bunuri sau prestarea de servicii va cuprinde clauze contractuale clare, fără echivoc, pentru înțelegerea cărora nu sunt necesare cunoștințe de specialitate.
> (2) În caz de dubiu asupra interpretării unor clauze contractuale, acestea vor fi interpretate în favoarea consumatorului.
> (3) Se interzice profesioniștilor stipularea de clauze abuzive în contractele încheiate cu consumatorii.

**Art. 4** (test for an abusive term; excerpt, amendment note removed)
> (1) O clauză contractuală care nu a fost negociată direct cu consumatorul va fi considerată abuzivă dacă, prin ea însăși sau împreună cu alte prevederi din contract, creează, în detrimentul consumatorului și contrar cerințelor bunei-credințe, un dezechilibru semnificativ între drepturile și obligațiile părților.
> (2) O clauză contractuală va fi considerată ca nefiind negociată direct cu consumatorul dacă aceasta a fost stabilită fără a da posibilitate consumatorului să influențeze natura ei, cum ar fi contractele standard preformulate sau condițiile generale de vânzare practicate de profesioniști*) pe piața produsului sau serviciului respectiv.
> [...]
> (4) Lista cuprinsă în anexa care face parte integrantă din prezenta lege redă, cu titlu de exemplu, clauzele considerate ca fiind abuzive.
> [...]
> (6) Evaluarea naturii abuzive a clauzelor nu se asociază nici cu definirea obiectului principal al contractului, nici cu calitatea de a satisface cerințele de preț și de plată, pe de o parte, nici cu produsele și serviciile oferite în schimb, pe de altă parte, în măsura în care aceste clauze sunt exprimate într-un limbaj ușor inteligibil.

**Art. 6**
> Clauzele abuzive cuprinse în contract și constatate fie personal, fie prin intermediul organelor abilitate prin lege nu vor produce efecte asupra consumatorului, iar contractul se va derula în continuare, cu acordul consumatorului, numai dacă după eliminarea acestora mai poate continua.

**Art. 7**
> În măsura în care contractul nu își mai poate produce efectele după înlăturarea clauzelor considerate abuzive, consumatorul este îndreptățit să ceară rezilierea contractului, putând solicita, după caz, și daune-interese.

**Art. 13 alin. (7)** (added in 2022 by OUG 58/2022)
> (7) Prin derogare de la prevederile Codului civil ce reglementează prescripția extinctivă, formularea unei acțiuni în constatarea existenței clauzelor abuzive este imprescriptibilă.

**Anexă – the list of terms considered abusive** (in full, as returned; collapsed "..." toggles removed. The source has no letter q.)
> LISTA
> cuprinzând clauzele considerate ca fiind abuzive
> (1) Sunt considerate clauze abuzive acele prevederi contractuale care:
> a) dau dreptul profesionistului de a modifica unilateral clauzele contractului, fără a avea un motiv întemeiat care să fie precizat în contract.
> Prevederile acestei litere nu se opun clauzelor în temeiul cărora un furnizor de servicii financiare își rezervă dreptul de a modifica rata dobânzii plătibile de către consumator ori datorată acestuia din urmă sau valoarea altor taxe pentru servicii financiare, fără o notificare prealabilă, dacă există o motivație întemeiată, în condițiile în care profesionistul este obligat să informeze cât mai curând posibil despre aceasta celelalte părți contractante și acestea din urmă au libertatea de a rezilia imediat contractul.
> Prevederile acestei litere nu se opun, de asemenea, clauzelor prin care profesionistul își rezervă dreptul de a modifica unilateral clauzele unui contract cu durată nedeterminată, în condițiile în care profesionistul are obligația de a-l informa pe consumator, printr-o notificare prealabilă transmisă în termen rezonabil, pentru ca acesta din urmă să aibă libertatea de a rezilia contractul;
> b) obligă consumatorul să se supună unor condiții contractuale despre care nu a avut posibilitatea reală să ia cunoștință la data semnării contractului;
> c) obligă consumatorul să își îndeplinească obligațiile contractuale, chiar și în situațiile în care profesionistul nu și le-a îndeplinit pe ale sale;
> d) dau dreptul profesionistului să prelungească automat un contract încheiat pentru o perioadă determinată, prin acordul tacit al consumatorului, dacă perioada-limită la care acesta putea să își exprime opțiunea a fost insuficientă;
> e) dau dreptul profesionistului să modifice unilateral, fără acordul consumatorului, clauzele privind caracteristicile produselor și serviciilor care urmează să fie furnizate sau termenul de livrare a unui produs ori termenul de executare a unui serviciu;
> f) dau dreptul profesionistului să constate unilateral conformitatea produselor și serviciilor furnizate cu prevederile contractuale;
> g) dau dreptul exclusiv profesionistului să interpreteze clauzele contractuale;
> h) restrâng sau anulează dreptul consumatorului să pretindă despăgubiri în cazurile în care profesionistul nu își îndeplinește obligațiile contractuale;
> i) obligă consumatorul la plata unor sume disproporționat de mari în cazul neîndeplinirii obligațiilor contractuale de către acesta, comparativ cu pagubele suferite de profesionist;
> j) restrâng sau anulează dreptul consumatorului de a denunța sau de a rezilia unilateral contractul, în cazurile în care:– profesionistul a modificat unilateral clauzele prevăzute la lit. e);– profesionistul nu și-a îndeplinit obligațiile contractuale;– profesionistul a impus consumatorului, prin contract, clauze referitoare la plata unei sume fixe în cazul denunțării unilaterale;
> k) exclud sau limitează răspunderea legală a profesionistului în cazul vătămării sau decesului consumatorului, ca rezultat al unei acțiuni sau omisiuni a profesionistului privind utilizarea produselor și serviciilor;
> l) exclud dreptul consumatorului de a întreprinde o acțiune legală sau de a exercita un alt remediu legal, solicitându-i în același timp rezolvarea disputelor în special prin arbitraj;
> m) permit în mod nejustificat impunerea unor restricții în administrarea probelor evidente de care dispune consumatorul sau solicitarea unor probe care, potrivit legii, fac obiectul unei alte părți din contract;
> n) dau dreptul profesionistului să transfere obligațiile contractuale unei terțe persoane - agent, mandatar etc. -, fără acordul consumatorului, dacă acest transfer servește la reducerea garanțiilor sau a altor răspunderi față de consumator;
> o) interzic consumatorului să compenseze o datorie către profesionist cu o creanță pe care el ar avea-o asupra profesionistului;
> p) prevăd că prețul produselor este determinat la momentul livrării sau permit vânzătorilor de produse ori furnizorilor de servicii dreptul de a crește prețurile, fără ca, în ambele cazuri, să acorde consumatorului dreptul de a anula contractul în cazul în care prețul final este prea mare în raport cu prețul convenit la momentul încheierii contractului.
> Prevederile acestei litere nu se opun clauzelor de indexare a prețurilor, atât timp cât sunt legale, cu condiția ca metoda prin care prețurile variază să fie descrisă în mod explicit;
> r) permit profesionistului obținerea unor sume de bani de la consumator, în cazul neexecutării sau finalizării contractului de către acesta din urmă, fără a prevedea existența compensațiilor în sumă echivalentă și pentru consumator, în cazul neexecutării contractului de către profesionist;
> s) dau dreptul profesionistului să anuleze contractul în mod unilateral, fără să prevadă același drept și pentru consumator;
> t) dau dreptul profesionistului să înceteze contractul încheiat pentru o durată nedeterminată fără o notificare prealabilă rezonabilă, cu excepția unor motive întemeiate.
> Prevederile acestei litere nu se opun clauzelor prin care furnizorul de servicii financiare își rezervă dreptul de a dispune în mod unilateral încetarea unui contract încheiat pe o perioadă nedeterminată și fără o notificare prealabilă în cazul unui motiv întemeiat, cu condiția ca furnizorul să fie obligat să informeze imediat celelalte părți contractante.

## OUG nr. 34/2014 (drepturile consumatorilor, contracte la distanță)

- URL: https://legislatie.just.ro/Public/DetaliiDocument/158913
- Fetched: 2026-11-14. Consolidation shown: **27.03.2026** (the previous one is 26.03.2026). Header: "ORDONANȚĂ DE URGENȚĂ nr. 34 din 4 iunie 2014 privind drepturile consumatorilor în cadrul contractelor încheiate cu profesioniștii, ...", MONITORUL OFICIAL nr. 427 din 11 iunie 2014.
- Latest amending act: OUG 18/2026 (MO nr. 236 din 26 martie 2026). **Its points apply from staggered dates. See the OUG 18/2026 subsection.**

**Art. 6 – Cerințe de informare pentru contractele la distanță și cele în afara spațiilor comerciale** (excerpt; amendment notes removed; omitted letters marked [...])
> (1) Înainte ca un contract la distanță sau în afara spațiilor comerciale sau orice ofertă similară să producă efecte obligatorii asupra consumatorului, profesionistul trebuie să îi furnizeze consumatorului următoarele informații în mod clar și inteligibil:
> a) principalele caracteristici ale bunurilor sau serviciilor, având în vedere mediul de comunicare și bunurile sau serviciile în cauză;
> b) identitatea profesionistului, cum ar fi denumirea sa comercială;
> c) pentru a-i permite consumatorului să ia rapid legătura cu profesionistul și să comunice cu acesta în mod eficient: sediul profesionistului, precum și numărul său de telefon și adresa sa de e-mail și, dacă este cazul, adresa poștală și identitatea profesionistului în numele căruia acționează; [...]
> [...]
> e^1) acolo unde este cazul, faptul că prețul a fost personalizat pe baza unui proces decizional automatizat;
> [...]
> h) în cazul în care există un drept de retragere, condițiile, termenele și procedurile de exercitare a dreptului respectiv, în conformitate cu prevederile art. 11 alin. (1), formularul tipizat de retragere, prevăzut în anexă la partea B, precum și, după caz, informații cu privire la existența și amplasarea funcției de retragere prevăzute la art. 11^1;
> [...]
> k) în cazul în care dreptul de retragere nu este prevăzut în conformitate cu art. 16, informația conform căreia consumatorul nu va beneficia de un drept de retragere sau, după caz, circumstanțele în care consumatorul își pierde dreptul de retragere;
> [...]
> l^2) o mențiune referitoare la existența unei garanții legale de conformitate pentru conținutul digital și serviciile digitale;
> [...]
> o) durata contractului, după caz, sau, dacă contractul este încheiat pe durată nedeterminată sau urmează să fie prelungit în mod automat, condițiile de încetare a contractului, inclusiv penalitățile aplicabile, dacă este cazul;
> [...]
> (5) Informațiile menționate la alin. (1) fac parte integrantă din contractul la distanță sau din contractul în afara spațiilor comerciale și nu pot fi modificate decât în cazul în care părțile contractante decid altfel în mod explicit.
> (6) În cazul în care profesionistul nu îndeplinește cerințele în materie de informare cu privire la costuri suplimentare, conform celor menționate la alin. (1) lit. e), sau la costurile aferente returnării bunurilor, conform celor menționate la alin. (1) lit. i), consumatorul nu suportă respectivele costuri.
> (7) Informațiile contractuale se prezintă în limba română într-o formă accesibilă, astfel încât acestea să fie înțelese cu ușurință de consumator, fără a exclude prezentarea acestora și în alte limbi.
> [...]
> (10) Sarcina probei în ceea ce privește îndeplinirea cerințelor în materie de informare stabilite în prezentul capitol revine profesionistului.

**Art. 8 alin. (2)** (the order button)
> (2) Dacă un contract la distanță care urmează să fie încheiat prin mijloace electronice obligă consumatorul să plătească, profesionistul aduce la cunoștința consumatorului de o manieră clară și foarte vizibilă, imediat înainte ca acesta să plaseze comanda, informațiile prevăzute la art. 6 alin. (1) lit. a), e), l^1), o) și p). Profesionistul se asigură că, atunci când consumatorul face comanda, acesta din urmă recunoaște în mod explicit că această comandă implică o obligație de a plăti. Dacă pentru a face comanda este necesar să se activeze un buton sau o funcție similară, butonul sau funcția similară este etichetat/tă de o manieră lizibilă doar cu mențiunea "comandă ce implică o obligație de plată" sau o formulare neambiguă corespunzătoare, care să indice că a face comanda implică obligația de a plăti profesionistului. Dacă profesionistul încalcă prevederile prezentului alineat, consumatorul nu are nicio obligație în temeiul contractului sau al comenzii.

**Art. 8 alin. (9)**
> (9) Momentul încheierii contractului la distanță îl constituie momentul confirmării, pe un suport durabil, de către profesionist a acceptării comenzii transmise de consumator.

**Art. 9 – Dreptul de retragere** (excerpt; "dintrun" is in the source [sic])
> (1) Cu excepția cazurilor prevăzute la art. 16, consumatorul beneficiază de o perioadă de 14 zile pentru a se retrage dintrun contract la distanță sau dintr-un contract în afara spațiilor comerciale, fără a fi nevoit să justifice decizia de retragere și fără a suporta alte costuri decât cele prevăzute la art. 13 alin. (3) și la art. 14. [...]
> (2) Fără a aduce atingere art. 10, perioadele de retragere menționate la alin. (1) expiră în termen de 14 zile sau 30 de zile, după caz, de la:
> a) data încheierii contractului, în cazul contractelor de prestări de servicii;
> [...]
> c) data încheierii contractului, în cazul contractelor pentru furnizarea de apă, gaze naturale, energie electrică, atunci când acestea nu prevăd vânzarea într-un volum limitat sau cantitate stabilită, de energie termică sau de conținuturi digitale care nu sunt livrate pe un suport material.

**Art. 10 alin. (1)** (missing withdrawal information)
> (1) În cazul în care profesionistul nu a transmis consumatorului informațiile privind dreptul de retragere conform art. 6 alin. (1) lit. h), perioada de retragere expiră la 12 luni de la sfârșitul perioadei inițiale de retragere, prevăzută la art. 9 alin. (1).

**Art. 11 alin. (1)**
> (1) Înainte de expirarea perioadei de retragere, consumatorul informează profesionistul cu privire la decizia sa de retragere din contract. În acest scop, consumatorul poate alege una dintre următoarele variante:
> a) de a folosi modelul de formular de retragere prevăzut în partea B din anexă;
> b) de a face orice altă declarație neechivocă în care își exprimă decizia de retragere din contract.

**Art. 11^1 – Exercitarea dreptului de retragere din contractele la distanță încheiate prin intermediul unei interfețe online** (excerpt; applies from 19 June 2026, see OUG 18/2026)
> (1) În cazul contractelor la distanță încheiate prin intermediul unei interfețe online, profesionistul se asigură că există posibilitatea retragerii din contract a consumatorului utilizând o funcție de retragere.
> (2) Profesionistul are obligația etichetării funcției de retragere din contract prin utilizarea mesajului «retrageți-vă din contract aici» sau a unei formulări similare, lipsită de ambiguitate, într-un mod ușor de citit, disponibilă în permanență pe toată durata perioadei de retragere, afișată în mod vizibil pe interfața online și ușor accesibilă consumatorului.
> [...]
> (6) Profesionistul are obligația punerii la dispoziția consumatorului a unei funcții de confirmare ușor de citit, lipsită de ambiguitate și ușor de vizualizat, prin utilizarea mențiunii «confirmați retragerea».
> (7) Odată ce consumatorul activează funcția de confirmare, profesionistul trimite consumatorului, fără întârzieri nejustificate, o confirmare de primire a retragerii pe un suport durabil, inclusiv conținutul acesteia, precum și data și ora transmiterii acesteia.

**Art. 16 alin. (1)** (exceptions; excerpt, only the letters relevant to apps)
> Sunt exceptate de la dreptul de retragere prevăzut la art. 9-15 în ceea ce privește contractele la distanță și contractele în afara spațiilor comerciale următoarele:
> a) contractele de servicii, după prestarea integrală a serviciilor și, în cazul în care contractul dă naștere unei obligații de plată pentru consumator, dacă executarea a început cu acordul prealabil expres al consumatorului și după ce acesta a confirmat că a luat cunoștință de faptul că își va pierde dreptul de retragere după executarea integrală a contractului de către profesionist;
> [...]
> m) contractele de furnizare de conținut digital care nu este livrat pe un suport material, dacă executarea a început și, în cazul în care contractul dă naștere unei obligații de plată pentru consumator, în condițiile în care:
> (i) consumatorul și-a dat acordul prealabil expres pentru începerea executării în cursul perioadei de retragere;
> (ii) consumatorul a confirmat că a luat cunoștință de faptul că își va pierde dreptul de retragere în consecință;
> (iii) profesionistul a furnizat confirmarea încheierii contractului, în conformitate cu art. 7 alin. (2) sau cu art. 8 alin. (7).

### OUG nr. 18/2026 (application dates of the 2026 changes)

- URL: https://legislatie.just.ro/Public/DetaliiDocument/308474. Fetched: 2026-11-14. MONITORUL OFICIAL nr. 236 din 26 martie 2026. No consolidation list on the page.

**Art. III**
> Prevederile art. I și art. II pct. 1, 4-7, 9-12 și 16 din prezenta ordonanță de urgență intră în vigoare la data de 27 martie 2026.

**Art. IV**
> (1) Prevederile art. II pct. 2-3, 8, 13-15 și 17-18 din prezenta ordonanță de urgență se aplică începând cu data de 19 iunie 2026.
> (2) Prevederile art. I și art. II pct. 1, 4-7, 9-12 și 16 din prezenta ordonanță de urgență se aplică începând cu data de 27 septembrie 2026.

The OUG 34/2014 page attributes art. 11^1 to "Punctul 13., Articolul II" and art. 6(1)(h) to "Punctul 8.". So both apply from 19 June 2026. Art. 6(1)(g), (l), (l^1)-(l^3), (ț), (u) and art. 8(2), first sentence, come from points 7, 9-12, so they apply from 27 September 2026. Today (2026-11-14) all of them apply.

## Reg. (UE) 2016/679 (GDPR), Romanian text

- **Primary:** https://publications.europa.eu/resource/celex/02016R0679-20160504 (Accept `application/xhtml+xml`, Accept-Language `ron`). It resolved to `.../cellar/5f2552c2-cc45-11e6-ad7c-01aa75ed71a1.0008.03/DOC_1`, title "TEXT consolidat: 32016R0679 — RO — 04.05.2016", generated 2025-03-20. It contains ▼C1 markers for the corrigendum. Fetched: 2026-11-14.
- **Do not use** `celex/32016R0679` (the original OJ L 119/1, file `L_2016119RO.01000101.xml`). It predates the Romanian corrigendum.
- **Romanian corrigendum:** `celex/32016R0679R%2802%29` gives OJ L 127/2, 23.5.2018 (`L_2018127RO.01000201.xml`). It corrects, among other things:
  > La pagina 44, la articolul 17 alineatul (3): în loc de: „(3) Alineatele (1) și (2a) nu se aplică în măsura în care prelucrarea este necesară:”, se citește: „(3) Alineatele (1) și (2) nu se aplică în măsura în care prelucrarea este necesară:”.

  It corrects art. 21(1) from "dreptul de a se opune ... litera (e) sau (f) sau al articolului 6 alineatul (1) a datelor" to the text quoted below. R(01) and R(03)-R(09) returned 404 in Romanian.
- **Fallback:** https://legislatie.just.ro/Public/DetaliiDocument/201834 (header "REGULAMENT (UE) nr. 679 din 27 aprilie 2016", JURNAL OFICIAL L nr. 119 din 4 mai 2016). After ş/ţ normalization it matched the consolidated Cellar text word for word on art. 6, 13 and 15-22 (difflib ratio 1.0). It has 32 leftover cedilla ţ.
- Extraction from Cellar: `<div class="eli-subdivision" id="art_N">` up to the next `art_` div. Strip `▼B`/`▼C1` markers. Section headings that follow an article ("Secțiunea 3 / Rectificare și ștergere") fall into that article's tail, so trim them.

**Art. 6 alin. (1) – Legalitatea prelucrării**
> (1) Prelucrarea este legală numai dacă și în măsura în care se aplică cel puțin una dintre următoarele condiții:
> (a) persoana vizată și-a dat consimțământul pentru prelucrarea datelor sale cu caracter personal pentru unul sau mai multe scopuri specifice;
> (b) prelucrarea este necesară pentru executarea unui contract la care persoana vizată este parte sau pentru a face demersuri la cererea persoanei vizate înainte de încheierea unui contract;
> (c) prelucrarea este necesară în vederea îndeplinirii unei obligații legale care îi revine operatorului;
> (d) prelucrarea este necesară pentru a proteja interesele vitale ale persoanei vizate sau ale altei persoane fizice;
> (e) prelucrarea este necesară pentru îndeplinirea unei sarcini care servește unui interes public sau care rezultă din exercitarea autorității publice cu care este învestit operatorul;
> (f) prelucrarea este necesară în scopul intereselor legitime urmărite de operator sau de o parte terță, cu excepția cazului în care prevalează interesele sau drepturile și libertățile fundamentale ale persoanei vizate, care necesită protejarea datelor cu caracter personal, în special atunci când persoana vizată este un copil.
> Litera (f) din primul paragraf nu se aplică în cazul prelucrării efectuate de autorități publice în îndeplinirea atribuțiilor lor.

**Art. 7 alin. (2)-(3)** (consent; not asked for, but needed for T&C that bundle consent)
> (2) În cazul în care consimțământul persoanei vizate este dat în contextul unei declarații scrise care se referă și la alte aspecte, cererea privind consimțământul trebuie să fie prezentată într-o formă care o diferențiază în mod clar de celelalte aspecte, într-o formă inteligibilă și ușor accesibilă, utilizând un limbaj clar și simplu. Nicio parte a respectivei declarații care constituie o încălcare a prezentului regulament nu este obligatorie.
> (3) Persoana vizată are dreptul să își retragă în orice moment consimțământul. Retragerea consimțământului nu afectează legalitatea prelucrării efectuate pe baza consimțământului înainte de retragerea acestuia. Înainte de acordarea consimțământului, persoana vizată este informată cu privire la acest lucru. Retragerea consimțământului se face la fel de simplu ca acordarea acestuia.

**Art. 12 alin. (1) and (3)** (plain language; one-month deadline)
> (1) Operatorul ia măsuri adecvate pentru a furniza persoanei vizate orice informații menționate la articolele 13 și 14 și orice comunicări în temeiul articolelor 15-22 și 34 referitoare la prelucrare, într-o formă concisă, transparentă, inteligibilă și ușor accesibilă, utilizând un limbaj clar și simplu, în special pentru orice informații adresate în mod specific unui copil. [...]
> (3) Operatorul furnizează persoanei vizate informații privind acțiunile întreprinse în urma unei cereri în temeiul articolelor 15-22, fără întârzieri nejustificate și în orice caz în cel mult o lună de la primirea cererii. Această perioadă poate fi prelungită cu două luni atunci când este necesar, ținându-se seama de complexitatea și numărul cererilor. [...]

**Art. 13 – Informații care se furnizează în cazul în care datele cu caracter personal sunt colectate de la persoana vizată** (in full)
> (1) În cazul în care datele cu caracter personal referitoare la o persoană vizată sunt colectate de la aceasta, operatorul, în momentul obținerii acestor date cu caracter personal, furnizează persoanei vizate toate informațiile următoare:
> (a) identitatea și datele de contact ale operatorului și, după caz, ale reprezentantului acestuia;
> (b) datele de contact ale responsabilului cu protecția datelor, după caz;
> (c) scopurile în care sunt prelucrate datele cu caracter personal, precum și temeiul juridic al prelucrării;
> (d) în cazul în care prelucrarea se face în temeiul articolului 6 alineatul (1) litera (f), interesele legitime urmărite de operator sau de o parte terță;
> (e) destinatarii sau categoriile de destinatari ai datelor cu caracter personal;
> (f) dacă este cazul, intenția operatorului de a transfera date cu caracter personal către o țară terță sau o organizație internațională și existența sau absența unei decizii a Comisiei privind caracterul adecvat sau, în cazul transferurilor menționate la articolul 46 sau 47 sau la articolul 49 alineatul (1) al doilea paragraf, o trimitere la garanțiile adecvate sau corespunzătoare și la mijloacele de a obține o copie a acestora, în cazul în care acestea au fost puse la dispoziție.
> (2) În plus față de informațiile menționate la alineatul (1), în momentul în care datele cu caracter personal sunt obținute, operatorul furnizează persoanei vizate următoarele informații suplimentare necesare pentru a asigura o prelucrare echitabilă și transparentă:
> (a) perioada pentru care vor fi stocate datele cu caracter personal sau, dacă acest lucru nu este posibil, criteriile utilizate pentru a stabili această perioadă;
> (b) existența dreptului de a solicita operatorului, în ceea ce privește datele cu caracter personal referitoare la persoana vizată, accesul la acestea, rectificarea sau ștergerea acestora sau restricționarea prelucrării sau a dreptului de a se opune prelucrării, precum și a dreptului la portabilitatea datelor;
> (c) atunci când prelucrarea se bazează pe articolul 6 alineatul (1) litera (a) sau pe articolul 9 alineatul (2) litera (a), existența dreptului de a retrage consimțământul în orice moment, fără a afecta legalitatea prelucrării efectuate pe baza consimțământului înainte de retragerea acestuia;
> (d) dreptul de a depune o plângere în fața unei autorități de supraveghere;
> (e) dacă furnizarea de date cu caracter personal reprezintă o obligație legală sau contractuală sau o obligație necesară pentru încheierea unui contract, precum și dacă persoana vizată este obligată să furnizeze aceste date cu caracter personal și care sunt eventualele consecințe ale nerespectării acestei obligații;
> (f) existența unui proces decizional automatizat incluzând crearea de profiluri, menționat la articolul 22 alineatele (1) și (4), precum și, cel puțin în cazurile respective, informații pertinente privind logica utilizată și privind importanța și consecințele preconizate ale unei astfel de prelucrări pentru persoana vizată.
> (3) În cazul în care operatorul intenționează să prelucreze ulterior datele cu caracter personal într-un alt scop decât cel pentru care acestea au fost colectate, operatorul furnizează persoanei vizate, înainte de această prelucrare ulterioară, informații privind scopul secundar respectiv și orice informații suplimentare relevante, în conformitate cu alineatul (2).
> (4) Alineatele (1), (2) și (3) nu se aplică dacă și în măsura în care persoana vizată deține deja informațiile respective.

**Art. 15 alin. (1) and (3) – Dreptul de acces al persoanei vizate**
> (1) Persoana vizată are dreptul de a obține din partea operatorului o confirmare că se prelucrează sau nu date cu caracter personal care o privesc și, în caz afirmativ, acces la datele respective și la următoarele informații:
> (a) scopurile prelucrării;
> (b) categoriile de date cu caracter personal vizate;
> (c) destinatarii sau categoriile de destinatari cărora datele cu caracter personal le-au fost sau urmează să le fie divulgate, în special destinatari din țări terțe sau organizații internaționale;
> (d) acolo unde este posibil, perioada pentru care se preconizează că vor fi stocate datele cu caracter personal sau, dacă acest lucru nu este posibil, criteriile utilizate pentru a stabili această perioadă;
> (e) existența dreptului de a solicita operatorului rectificarea sau ștergerea datelor cu caracter personal ori restricționarea prelucrării datelor cu caracter personal referitoare la persoana vizată sau a dreptului de a se opune prelucrării;
> (f) dreptul de a depune o plângere în fața unei autorități de supraveghere;
> (g) în cazul în care datele cu caracter personal nu sunt colectate de la persoana vizată, orice informații disponibile privind sursa acestora;
> (h) existența unui proces decizional automatizat incluzând crearea de profiluri, menționat la articolul 22 alineatele (1) și (4), precum și, cel puțin în cazurile respective, informații pertinente privind logica utilizată și privind importanța și consecințele preconizate ale unei astfel de prelucrări pentru persoana vizată.
> [...]
> (3) Operatorul furnizează o copie a datelor cu caracter personal care fac obiectul prelucrării. Pentru orice alte copii solicitate de persoana vizată, operatorul poate percepe o taxă rezonabilă, bazată pe costurile administrative. În cazul în care persoana vizată introduce cererea în format electronic și cu excepția cazului în care persoana vizată solicită un alt format, informațiile sunt furnizate într-un format electronic utilizat în mod curent.

**Art. 16 – Dreptul la rectificare**
> Persoana vizată are dreptul de a obține de la operator, fără întârzieri nejustificate, rectificarea datelor cu caracter personal inexacte care o privesc. Ținându-se seama de scopurile în care au fost prelucrate datele, persoana vizată are dreptul de a obține completarea datelor cu caracter personal care sunt incomplete, inclusiv prin furnizarea unei declarații suplimentare.

**Art. 17 – Dreptul la ștergerea datelor („dreptul de a fi uitat”)** (alin. (1) chapeau and the corrected alin. (3) chapeau)
> (1) Persoana vizată are dreptul de a obține din partea operatorului ștergerea datelor cu caracter personal care o privesc, fără întârzieri nejustificate, iar operatorul are obligația de a șterge datele cu caracter personal fără întârzieri nejustificate în cazul în care se aplică unul dintre următoarele motive:
> [...]
> (3) Alineatele (1) și (2) nu se aplică în măsura în care prelucrarea este necesară:

**Art. 18 alin. (1) – Dreptul la restricționarea prelucrării** (chapeau)
> (1) Persoana vizată are dreptul de a obține din partea operatorului restricționarea prelucrării în cazul în care se aplică unul din următoarele cazuri:

**Art. 19 – Obligația de notificare privind rectificarea sau ștergerea datelor cu caracter personal sau restricționarea prelucrării**
> Operatorul comunică fiecărui destinatar căruia i-au fost divulgate datele cu caracter personal orice rectificare sau ștergere a datelor cu caracter personal sau restricționare a prelucrării efectuate în conformitate cu articolul 16, articolul 17 alineatul (1) și articolul 18, cu excepția cazului în care acest lucru se dovedește imposibil sau presupune eforturi disproporționate. Operatorul informează persoana vizată cu privire la destinatarii respectivi dacă persoana vizată solicită acest lucru.

**Art. 20 alin. (1) – Dreptul la portabilitatea datelor** (chapeau)
> (1) Persoana vizată are dreptul de a primi datele cu caracter personal care o privesc și pe care le-a furnizat operatorului într-un format structurat, utilizat în mod curent și care poate fi citit automat și are dreptul de a transmite aceste date altui operator, fără obstacole din partea operatorului căruia i-au fost furnizate datele cu caracter personal, în cazul în care:

**Art. 21 – Dreptul la opoziție** (alin. (1)-(4); alin. (1) as corrected)
> (1) În orice moment, persoana vizată are dreptul să se opună, din motive legate de situația particulară în care se află, prelucrării în temeiul articolului 6 alineatul (1) litera (e) sau (f), a datelor cu caracter personal care o privesc, inclusiv creării de profiluri pe baza respectivelor dispoziții. Operatorul nu mai prelucrează datele cu caracter personal, cu excepția cazului în care operatorul demonstrează că are motive legitime și imperioase care justifică prelucrarea și care prevalează asupra intereselor, drepturilor și libertăților persoanei vizate sau că scopul este constatarea, exercitarea sau apărarea unui drept în instanță.
> (2) Atunci când prelucrarea datelor cu caracter personal are drept scop marketingul direct, persoana vizată are dreptul de a se opune în orice moment prelucrării în acest scop a datelor cu caracter personal care o privesc, inclusiv creării de profiluri, în măsura în care este legată de marketingul direct respectiv.
> (3) În cazul în care persoana vizată se opune prelucrării în scopul marketingului direct, datele cu caracter personal nu mai sunt prelucrate în acest scop.
> (4) Cel târziu în momentul primei comunicări cu persoana vizată, dreptul menționat la alineatele (1) și (2) este adus în mod explicit în atenția persoanei vizate și este prezentat în mod clar și separat de orice alte informații.

**Art. 22 – Procesul decizional individual automatizat, inclusiv crearea de profiluri** (alin. (1)-(3))
> (1) Persoana vizată are dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată, inclusiv crearea de profiluri, care produce efecte juridice care privesc persoana vizată sau o afectează în mod similar într-o măsură semnificativă.
> (2) Alineatul (1) nu se aplică în cazul în care decizia:
> (a) este necesară pentru încheierea sau executarea unui contract între persoana vizată și un operator de date;
> (b) este autorizată prin dreptul Uniunii sau dreptul intern care se aplică operatorului și care prevede, de asemenea, măsuri corespunzătoare pentru protejarea drepturilor, libertăților și intereselor legitime ale persoanei vizate; sau
> (c) are la bază consimțământul explicit al persoanei vizate.
> (3) În cazurile menționate la alineatul (2) literele (a) și (c), operatorul de date pune în aplicare măsuri corespunzătoare pentru protejarea drepturilor, libertăților și intereselor legitime ale persoanei vizate, cel puțin dreptul acesteia de a obține intervenție umană din partea operatorului, de a-și exprima punctul de vedere și de a contesta decizia.

## Legea nr. 190/2018 (GDPR implementing law) and the supervisory authority

- URL: https://legislatie.just.ro/Public/DetaliiDocument/203151
- Fetched: 2026-11-14. Consolidation shown: **01.12.2019**. MONITORUL OFICIAL nr. 651 din 26 iulie 2018.
- **Official name of the supervisory authority:** *Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal* (in the law: "Autoritatea națională de supraveghere"). Source: art. 2(1)(c) below. The same name is on https://www.dataprotection.ro/ (fetched 2026-11-14, status 200). **Inference:** the acronym ANSPDCP is common usage. I did not see it in the fetched law text.

**Art. 2 alin. (1) lit. b) și c)**
> b) număr de identificare național - numărul prin care se identifică o persoană fizică în anumite sisteme de evidență și care are aplicabilitate generală, cum ar fi: codul numeric personal, seria și numărul actului de identitate, numărul pașaportului, al permisului de conducere, numărul de asigurare socială de sănătate;
> c) plan de remediere - anexă la procesul-verbal de constatare și sancționare a contravenției, întocmit în condițiile prevăzute la art. 11, prin care Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, denumită în continuare Autoritatea națională de supraveghere, stabilește măsuri și un termen de remediere;

**Art. 4** (national identification number, for example a CNP collected by an app)
> (1) Prelucrarea unui număr de identificare național, inclusiv prin colectarea sau dezvăluirea documentelor ce îl conțin, se poate efectua în situațiile prevăzute de art. 6 alin. (1) din Regulamentul general privind protecția datelor.
> (2) Prelucrarea unui număr de identificare național, inclusiv prin colectarea sau dezvăluirea documentelor ce îl conțin, în scopul prevăzut la art. 6 alin. (1) lit. f) din Regulamentul general privind protecția datelor, respectiv al realizării intereselor legitime urmărite de operator sau de o parte terță, se efectuează cu instituirea de către operator a următoarelor garanții:
> a) punerea în aplicare de măsuri tehnice și organizatorice adecvate pentru respectarea, în special, a principiului reducerii la minimum a datelor, precum și pentru asigurarea securității și confidențialității prelucrărilor de date cu caracter personal, conform dispozițiilor art. 32 din Regulamentul general privind protecția datelor;
> b) numirea unui responsabil pentru protecția datelor, în conformitate cu prevederile art. 10 din prezenta lege;
> c) stabilirea de termene de stocare în funcție de natura datelor și scopul prelucrării, precum și de termene specifice în care datele cu caracter personal trebuie șterse sau revizuite în vederea ștergerii;
> d) instruirea periodică cu privire la obligațiile ce le revin a persoanelor care, sub directa autoritate a operatorului sau a persoanei împuternicite de operator, prelucrează date cu caracter personal.

## OG nr. 13/2011 (dobânda legală) and Legea nr. 72/2013 (late payment between professionals)

**Which act governs late-payment interest:** OG 13/2011 defines *dobânda penalizatoare* and sets the legal rate. L. 72/2013 applies only to contracts between professionals, or with a contracting authority (art. 1). It refers back to OG 13/2011 art. 3 for the rate (art. 4). CC art. 1.535 sets the general rule that moratory damages run without proof of loss.

### OG 13/2011
- URL: https://legislatie.just.ro/Public/DetaliiDocument/131085
- Fetched: 2026-11-14. Consolidation shown: **07.08.2024**. MONITORUL OFICIAL nr. 607 din 29 august 2011.

**Art. 1**
> (1) Părțile sunt libere să stabilească, în convenții, rata dobânzii atât pentru restituirea unui împrumut al unei sume de bani, cât și pentru întârzierea la plata unei obligații bănești.
> (2) Dobânda datorată de debitorul obligației de a da o sumă de bani la un anumit termen, calculată pentru perioada anterioară împlinirii termenului scadenței obligației, este denumită dobândă remuneratorie.
> (3) Dobânda datorată de debitorul obligației bănești pentru neîndeplinirea obligației respective la scadență este denumită dobândă penalizatoare.
> (4) Dacă nu se precizează altfel, termenul dobândă din prezenta ordonanță privește atât dobânda remuneratorie, cât și dobânda penalizatoare.
> (5) Prin dobândă se înțelege nu numai sumele socotite în bani cu acest titlu, ci și alte prestații, sub orice titlu sau denumire, la care debitorul se obligă drept echivalent al folosinței capitalului.

**Art. 2**
> În cazul în care, potrivit dispozițiilor legale sau prevederilor contractuale, obligația este purtătoare de dobânzi remuneratorii și/sau penalizatoare, după caz, și în absența stipulației exprese a nivelului acestora de către părți, se va plăti dobânda legală aferentă fiecăreia dintre acestea.

**Art. 3** (amendment note removed)
> (1) Rata dobânzii legale remuneratorii se stabilește la nivelul ratei dobânzii de referință a Băncii Naționale a României, care este rata dobânzii de politică monetară stabilită prin hotărâre a Consiliului de administrație al Băncii Naționale a României.
> (2) Rata dobânzii legale penalizatoare se stabilește la nivelul ratei dobânzii de referință plus 4 puncte procentuale.
> (2^1) În raporturile dintre profesioniști și între aceștia și autoritățile contractante, dobânda legală penalizatoare se stabilește la nivelul ratei dobânzii de referință plus 8 puncte procentuale*).
> (3) În raporturile juridice care nu decurg din exploatarea unei întreprinderi cu scop lucrativ, în sensul art. 3 alin. (3) din Legea nr. 287/2009 privind Codul civil, republicată, rata dobânzii legale se stabilește potrivit prevederilor alin. (1), respectiv alin. (2), diminuat cu 20%.
> (4) Nivelul ratei dobânzii de referință a Băncii Naționale a României va fi publicat în Monitorul Oficial al României, Partea I, prin grija Băncii Naționale a României, ori de câte ori nivelul ratei dobânzii de politică monetară se va modifica.

**Art. 5**
> (1) În raporturile juridice care nu decurg din exploatarea unei întreprinderi cu scop lucrativ, în sensul art. 3 alin. (3) din Legea nr. 287/2009 privind Codul civil, republicată, dobânda nu poate depăși dobânda legală cu mai mult de 50% pe an.
> (2) Orice clauză prin care se încalcă dispozițiile alin. (1) este nulă de drept. În acest caz, creditorul este decăzut din dreptul de a pretinde dobânda legală.
> (3) Valabilitatea nivelului dobânzii convenționale se determină prin raportare la dobânda legală în vigoare la data stipulării.

### Legea nr. 72/2013
- URL: https://legislatie.just.ro/Public/DetaliiDocument/146555
- Fetched: 2026-11-14. Consolidation shown: **01.02.2016**. MONITORUL OFICIAL nr. 182 din 2 aprilie 2013.

**Art. 1 – Domeniul de aplicare**
> (1) Prezenta lege se aplică creanțelor certe, lichide și exigibile, constând în obligații de plată a unor sume de bani care rezultă dintr-un contract încheiat între profesioniști sau între aceștia și o autoritate contractantă, contractul având ca obiect furnizarea de bunuri sau prestarea de servicii, inclusiv proiectarea și execuția lucrărilor publice, a clădirilor și a lucrărilor de construcții civile.
> (2) Nu sunt incluse în sfera de aplicare a prezentei legi:
> a) creanțele înscrise la masa credală în cadrul unei proceduri de insolvență și creanțele ce fac obiectul unui mandat ad-hoc, concordat preventiv ori al unei înțelegeri încheiate ca urmare a unei negocieri extrajudiciare de restructurare a datoriilor unei societăți;
> b) contractele încheiate între profesioniști și consumatori.

**Art. 3 alin. (1)-(2) – Determinarea dobânzii**
> (1) În raporturile dintre profesioniști, creanța constând în prețul bunurilor livrate sau tariful serviciilor prestate produce dobânzi penalizatoare în cazul în care:
> a) creditorul, inclusiv subcontractații acestuia, și-au îndeplinit obligațiile contractuale;
> b) creditorul nu a primit suma datorată la scadență, cu excepția cazului în care debitorului nu îi este imputabilă întârzierea.
> (2) Dobânda penalizatoare curge de la scadență până la momentul plății, în condițiile dispozițiilor art. 1.535 din Legea nr. 287/2009 privind Codul civil, republicată, cu modificările ulterioare.

**Art. 4 – Dobânda legală penalizatoare**
> Dacă părțile nu au stabilit nivelul dobânzii pentru plata cu întârziere, se va aplica dobânda legală penalizatoare, calculată potrivit art. 3 din Ordonanța Guvernului nr. 13/2011 privind dobânda legală remuneratorie și penalizatoare pentru obligații bănești, precum și pentru reglementarea unor măsuri financiar-fiscale în domeniul bancar, aprobată prin Legea nr. 43/2012 . Rata de referință a dobânzii legale în vigoare în prima zi calendaristică a semestrului se aplică pe întregul semestru.

**Art. 5 – Termenul contractual de plată**
> (1) În raporturile dintre profesioniști, termenul de plată nu poate fi mai mare de 60 de zile calendaristice. Prin excepție, părțile pot stipula în contract un termen de plată mai mare, sub rezerva ca această clauză să nu fie abuzivă, potrivit art. 12.
> (2) Părțile pot conveni efectuarea plății în mod eșalonat, în acest caz, dobânzile penalizatoare și celelalte despăgubiri prevăzute de prezenta lege se calculează prin raportare la suma scadentă.
> (3) Părțile nu pot conveni cu privire la data emiterii/primirii facturii. Orice clauză prin care se stipulează un termen de emitere/primire a facturii este lovită de nulitate absolută.

**Art. 10 alin. (1) – Daune-interese minimale**
> (1) Fără a aduce atingere drepturilor prevăzute la art. 9, dacă sunt întrunite condițiile întârzierii la plată, creditorul poate pretinde debitorului plata contravalorii în lei la data plății a sumei de 40 euro, reprezentând daune-interese suplimentare minimale.

---

## Terms of art (Codul civil, consolidation 03.05.2026, unless noted)

### Quotes not given above

**Art. 1.175 – Contractul de adeziune**
> Contractul este de adeziune atunci când clauzele sale esențiale sunt impuse ori sunt redactate de una dintre părți, pentru aceasta sau ca urmare a instrucțiunilor sale, cealaltă parte neavând decât să le accepte ca atare.

**Art. 1.201 – Clauze externe**
> Dacă prin lege nu se prevede altfel, părțile sunt ținute de clauzele extrinseci la care contractul face trimitere.

**Art. 1.202 – Clauze standard**
> (1) Sub rezerva prevederilor art. 1.203, dispozițiile prezentei secțiuni se aplică în mod corespunzător și atunci când la încheierea contractului sunt utilizate clauze standard.
> (2) Sunt clauze standard stipulațiile stabilite în prealabil de una dintre părți pentru a fi utilizate în mod general și repetat și care sunt incluse în contract fără să fi fost negociate cu cealaltă parte.
> (3) Clauzele negociate prevalează asupra clauzelor standard.
> (4) Atunci când ambele părți folosesc clauze standard și nu ajung la o înțelegere cu privire la acestea, contractul se încheie totuși pe baza clauzelor convenite și a oricăror clauze standard comune în substanța lor, cu excepția cazului în care una dintre părți notifică celeilalte părți, fie anterior momentului încheierii contractului, fie ulterior și de îndată, că nu intenționează să fie ținută de un astfel de contract.

**Art. 1.203 – Clauze neuzuale**
> Clauzele standard care prevăd în folosul celui care le propune limitarea răspunderii, dreptul de a denunța unilateral contractul, de a suspenda executarea obligațiilor sau care prevăd în detrimentul celeilalte părți decăderea din drepturi ori din beneficiul termenului, limitarea dreptului de a opune excepții, restrângerea libertății de a contracta cu alte persoane, reînnoirea tacită a contractului, legea aplicabilă, clauze compromisorii sau prin care se derogă de la normele privitoare la competența instanțelor judecătorești nu produc efecte decât dacă sunt acceptate, în mod expres, în scris, de cealaltă parte.

**Art. 1.276 – Denunțarea unilaterală**
> (1) Dacă dreptul de a denunța contractul este recunoscut uneia dintre părți, acesta poate fi exercitat atât timp cât executarea contractului nu a început.
> (2) În contractele cu executare succesivă sau continuă, acest drept poate fi exercitat cu respectarea unui termen rezonabil de preaviz, chiar și după începerea executării contractului, însă denunțarea nu produce efecte în privința prestațiilor executate sau care se află în curs de executare.
> (3) Dacă s-a stipulat o prestație în schimbul denunțării, aceasta produce efecte numai atunci când prestația este executată.
> (4) Dispozițiile prezentului articol se aplică în lipsă de convenție contrară.

**Art. 1.350 – Răspunderea contractuală**
> (1) Orice persoană trebuie să își execute obligațiile pe care le-a contractat.
> (2) Atunci când, fără justificare, nu își îndeplinește această îndatorire, ea este răspunzătoare de prejudiciul cauzat celeilalte părți și este obligată să repare acest prejudiciu, în condițiile legii.
> (3) Dacă prin lege nu se prevede altfel, niciuna dintre părți nu poate înlătura aplicarea regulilor răspunderii contractuale pentru a opta în favoarea altor reguli care i-ar fi mai favorabile.

**Art. 1.351 – Forța majoră și cazul fortuit**
> (1) Dacă legea nu prevede altfel sau părțile nu convin contrariul, răspunderea este înlăturată atunci când prejudiciul este cauzat de forță majoră sau de caz fortuit.
> (2) Forța majoră este orice eveniment extern, imprevizibil, absolut invincibil și inevitabil.
> (3) Cazul fortuit este un eveniment care nu poate fi prevăzut și nici împiedicat de către cel care ar fi fost chemat să răspundă dacă evenimentul nu s-ar fi produs.
> (4) Dacă, potrivit legii, debitorul este exonerat de răspundere contractuală pentru un caz fortuit, el este, de asemenea, exonerat și în caz de forță majoră.

**Art. 1.355 – Clauze privind răspunderea**
> (1) Nu se poate exclude sau limita, prin convenții sau acte unilaterale, răspunderea pentru prejudiciul material cauzat altuia printr-o faptă săvârșită cu intenție sau din culpă gravă.
> (2) Sunt valabile clauzele care exclud răspunderea pentru prejudiciile cauzate, printr-o simplă imprudență sau neglijență, bunurilor victimei.
> (3) Răspunderea pentru prejudiciile cauzate integrității fizice sau psihice ori sănătății nu poate fi înlăturată ori diminuată decât în condițiile legii.
> (4) Declarația de acceptare a riscului producerii unui prejudiciu nu constituie, prin ea însăși, renunțarea victimei la dreptul de a obține plata despăgubirilor.

**Art. 1.356 – Anunțuri privitoare la răspundere**
> (1) Un anunț care exclude sau limitează răspunderea contractuală, indiferent dacă este adus ori nu la cunoștința publicului, nu are niciun efect decât dacă acela care îl invocă face dovada că cel prejudiciat cunoștea existența anunțului la momentul încheierii contractului.
> (2) Printr-un anunț nu poate fi exclusă sau limitată răspunderea delictuală pentru prejudiciile cauzate victimei. Un asemenea anunț poate avea însă valoarea semnalării unui pericol, fiind aplicabile, după împrejurări, dispozițiile art. 1.371 alin. (1).

**Art. 1.516 – Drepturile creditorului**
> (1) Creditorul are dreptul la îndeplinirea integrală, exactă și la timp a obligației.
> (2) Atunci când, fără justificare, debitorul nu își execută obligația și se află în întârziere, creditorul poate, la alegerea sa și fără a pierde dreptul la daune-interese, dacă i se cuvin:
> 1. să ceară sau, după caz, să treacă la executarea silită a obligației;
> 2. să obțină, dacă obligația este contractuală, rezoluțiunea sau rezilierea contractului ori, după caz, reducerea propriei obligații corelative;
> 3. să folosească, atunci când este cazul, orice alt mijloc prevăzut de lege pentru realizarea dreptului său.

**Art. 1.521 – Moduri**
> Punerea în întârziere a debitorului poate opera de drept sau la cererea creditorului.

**Art. 1.522 – Punerea în întârziere de către creditor**
> (1) Debitorul poate fi pus în întârziere fie printr-o notificare scrisă prin care creditorul îi solicită executarea obligației, fie prin cererea de chemare în judecată.
> (2) Dacă prin lege sau prin contract nu se prevede altfel, notificarea se comunică debitorului prin executor judecătoresc sau prin orice alt mijloc care asigură dovada comunicării.
> (3) Prin notificare trebuie să se acorde debitorului un termen de executare, ținând seama de natura obligației și de împrejurări. Dacă prin notificare nu se acordă un asemenea termen, debitorul poate să execute obligația într-un termen rezonabil, calculat din ziua comunicării notificării.
> (4) Până la expirarea termenului prevăzut la alin. (3), creditorul poate suspenda executarea propriei obligații, poate cere daune-interese, însă nu poate exercita celelalte drepturi prevăzute la art. 1.516, dacă prin lege nu se prevede altfel. Creditorul poate exercita aceste drepturi dacă debitorul îl informează că nu va executa obligațiile în termenul stabilit sau dacă, la expirarea termenului, obligația nu a fost executată.
> (5) Cererea de chemare în judecată formulată de creditor, fără ca anterior debitorul să fi fost pus în întârziere, conferă debitorului dreptul de a executa obligația într-un termen rezonabil, calculat de la data când cererea i-a fost comunicată. Dacă obligația este executată în acest termen, cheltuielile de judecată rămân în sarcina creditorului.

**Art. 1.523 – Întârzierea de drept în executarea obligației** (excerpt)
> (1) Debitorul se află de drept în întârziere atunci când s-a stipulat că simpla împlinire a termenului stabilit pentru executare produce un asemenea efect.
> (2) De asemenea, debitorul se află de drept în întârziere în cazurile anume prevăzute de lege, precum și atunci când:
> [...]
> c) debitorul și-a manifestat în mod neîndoielnic față de creditor intenția de a nu executa obligația sau când, fiind vorba de o obligație cu executare succesivă, refuză ori neglijează să își execute obligația în mod repetat;
> d) nu a fost executată obligația de a plăti o sumă de bani, asumată în exercițiul activității unei întreprinderi;
> [...]
> (4) Cazurile în care debitorul se află de drept în întârziere trebuie dovedite de creditor. Orice declarație sau stipulație contrară se consideră nescrisă.

**Art. 1.530 – Dreptul la daune-interese**
> Creditorul are dreptul la daune-interese pentru repararea prejudiciului pe care debitorul i l-a cauzat și care este consecința directă și necesară a neexecutării fără justificare sau, după caz, culpabile a obligației.

**Art. 1.531 – Repararea integrală**
> (1) Creditorul are dreptul la repararea integrală a prejudiciului pe care l-a suferit din faptul neexecutării.
> (2) Prejudiciul cuprinde pierderea efectiv suferită de creditor și beneficiul de care acesta este lipsit. La stabilirea întinderii prejudiciului se ține seama și de cheltuielile pe care creditorul le-a făcut, într-o limită rezonabilă, pentru evitarea sau limitarea prejudiciului.
> (3) Creditorul are dreptul și la repararea prejudiciului nepatrimonial.

**Art. 1.535 – Daunele moratorii în cazul obligațiilor bănești**
> (1) În cazul în care o sumă de bani nu este plătită la scadență, creditorul are dreptul la daune moratorii, de la scadență până în momentul plății, în cuantumul convenit de părți sau, în lipsă, în cel prevăzut de lege, fără a trebui să dovedească vreun prejudiciu. În acest caz, debitorul nu are dreptul să facă dovada că prejudiciul suferit de creditor ca urmare a întârzierii plății ar fi mai mic.
> (2) Dacă, înainte de scadență, debitorul datora dobânzi mai mari decât dobânda legală, daunele moratorii sunt datorate la nivelul aplicabil înainte de scadență.
> (3) Dacă nu sunt datorate dobânzi moratorii mai mari decât dobânda legală, creditorul are dreptul, în afara dobânzii legale, la daune-interese pentru repararea integrală a prejudiciului suferit.

**Art. 1.538 – Clauza penală**
> (1) Clauza penală este aceea prin care părțile stipulează că debitorul se obligă la o anumită prestație în cazul neexecutării obligației principale.
> (2) În caz de neexecutare, creditorul poate cere fie executarea silită în natură a obligației principale, fie clauza penală.
> (3) Debitorul nu se poate libera oferind despăgubirea convenită.
> (4) Creditorul poate cere executarea clauzei penale fără a fi ținut să dovedească vreun prejudiciu.
> (5) Dispozițiile privitoare la clauza penală sunt aplicabile convenției prin care creditorul este îndreptățit ca, în cazul rezoluțiunii sau rezilierii contractului din culpa debitorului, să păstreze plata parțială făcută de acesta din urmă. Sunt exceptate dispozițiile privitoare la arvună.

**Art. 1.539 – Cumulul penalității cu executarea în natură**
> Creditorul nu poate cere atât executarea în natură a obligației principale, cât și plata penalității, afară de cazul în care penalitatea a fost stipulată pentru neexecutarea obligațiilor la timp sau în locul stabilit. În acest din urmă caz, creditorul poate cere atât executarea obligației principale, cât și a penalității, dacă nu renunță la acest drept sau dacă nu acceptă, fără rezerve, executarea obligației.

**Art. 1.540 – Nulitatea clauzei penale**
> (1) Nulitatea obligației principale o atrage pe aceea a clauzei penale. Nulitatea clauzei penale nu o atrage pe aceea a obligației principale.
> (2) Penalitatea nu poate fi cerută atunci când executarea obligației a devenit imposibilă din cauze neimputabile debitorului.

**Art. 1.541 – Reducerea cuantumului penalității**
> (1) Instanța nu poate reduce penalitatea decât atunci când:
> a) obligația principală a fost executată în parte și această executare a profitat creditorului;
> b) penalitatea este vădit excesivă față de prejudiciul ce putea fi prevăzut de părți la încheierea contractului.
> (2) În cazul prevăzut la alin. (1) lit. b), penalitatea astfel redusă trebuie însă să rămână superioară obligației principale.
> (3) Orice stipulație contrară se consideră nescrisă.

**Art. 1.549 – Dreptul la rezoluțiune sau reziliere**
> (1) Dacă nu cere executarea silită a obligațiilor contractuale, creditorul are dreptul la rezoluțiunea sau, după caz, rezilierea contractului, precum și la daune-interese, dacă i se cuvin.
> (2) Rezoluțiunea poate avea loc pentru o parte a contractului, numai atunci când executarea sa este divizibilă. De asemenea, în cazul contractului plurilateral, neîndeplinirea de către una dintre părți a obligației nu atrage rezoluțiunea contractului față de celelalte părți, cu excepția cazului în care prestația neexecutată trebuia, după circumstanțe, să fie considerată esențială.
> (3) Dacă nu se prevede altfel, dispozițiile referitoare la rezoluțiune se aplică și în cazul rezilierii.

**Art. 1.550 – Modul de operare**
> (1) Rezoluțiunea poate fi dispusă de instanță, la cerere, sau, după caz, poate fi declarată unilateral de către partea îndreptățită.
> (2) De asemenea, în cazurile anume prevăzute de lege sau dacă părțile au convenit astfel, rezoluțiunea poate opera de plin drept.

**Art. 1.551 – Reducerea prestațiilor**
> (1) Creditorul nu are dreptul la rezoluțiune atunci când neexecutarea este de mică însemnătate. În cazul contractelor cu executare succesivă, creditorul are dreptul la reziliere, chiar dacă neexecutarea este de mică însemnătate, însă are un caracter repetat. Orice stipulație contrară este considerată nescrisă.
> (2) El are însă dreptul la reducerea proporțională a prestației sale dacă, după împrejurări, aceasta este posibilă.
> (3) Dacă reducerea prestațiilor nu poate avea loc, creditorul nu are dreptul decât la daune-interese.

**Art. 1.552 – Rezoluțiunea unilaterală** (excerpt)
> (1) Rezoluțiunea sau rezilierea contractului poate avea loc prin notificarea scrisă a debitorului atunci când părțile au convenit astfel, când debitorul se află de drept în întârziere ori când acesta nu a executat obligația în termenul fixat prin punerea în întârziere.
> (2) Declarația de rezoluțiune sau de reziliere trebuie făcută în termenul de prescripție prevăzut de lege pentru acțiunea corespunzătoare acestora.
> [...]
> (4) Declarația de rezoluțiune este irevocabilă de la data comunicării ei către debitor sau, după caz, de la data expirării termenului prevăzut la alin. (1).

**Art. 1.553 – Pactul comisoriu**
> (1) Pactul comisoriu produce efecte dacă prevede, în mod expres, obligațiile a căror neexecutare atrage rezoluțiunea sau rezilierea de drept a contractului.
> (2) În cazul prevăzut la alin. (1), rezoluțiunea sau rezilierea este subordonată punerii în întârziere a debitorului, afară de cazul în care s-a convenit că ea va rezulta din simplul fapt al neexecutării.
> (3) Punerea în întârziere nu produce efecte decât dacă indică în mod expres condițiile în care pactul comisoriu operează.

**Art. 1.554 – Efectele rezoluțiunii și ale rezilierii**
> (1) Contractul desființat prin rezoluțiune se consideră că nu a fost niciodată încheiat. Dacă prin lege nu se prevede altfel, fiecare parte este ținută, în acest caz, să restituie celeilalte părți prestațiile primite.
> (2) Rezoluțiunea nu produce efecte asupra clauzelor referitoare la soluționarea diferendelor ori asupra celor care sunt destinate să producă efecte chiar în caz de rezoluțiune.
> (3) Contractul reziliat încetează doar pentru viitor.

**Art. 1.556 – Excepția de neexecutare** (excerpt)
> (1) Atunci când obligațiile născute dintr-un contract sinalagmatic sunt exigibile, iar una dintre părți nu execută sau nu oferă executarea obligației, cealaltă parte poate, într-o măsură corespunzătoare, să refuze executarea propriei obligații, afară de cazul în care din lege, din voința părților sau din uzanțe rezultă că cealaltă parte este obligată să execute mai întâi.

**Art. 1.557 – Imposibilitatea de executare** (excerpt)
> (1) Atunci când imposibilitatea de executare este totală și definitivă și privește o obligație contractuală importantă, contractul este desființat de plin drept și fără vreo notificare, chiar din momentul producerii evenimentului fortuit. Dispozițiile art. 1.274 alin. (2) sunt aplicabile în mod corespunzător.

### Table

The drafting traps are my reading of the quoted text. Each one cites the paragraph it rests on. Where a trap goes beyond the text, it is marked **Inference**.

| Term | Governing provisions (fetched) | Drafting trap: what changes if the wrong term is used |
|---|---|---|
| **reziliere** vs **rezoluțiune** | CC 1.549, 1.551(1), 1.554(1) and (3) | Rezoluțiune voids the contract as if never concluded and triggers mutual restitution (1.554(1)). Reziliere ends it only for the future (1.554(3)). **Inference:** for a subscription or other contract with successive performance, write "reziliere". "Rezoluțiune" invites a claim that past payments must be returned. |
| **denunțare unilaterală** vs **reziliere** | CC 1.276, 1.549 | Denunțare is a right to walk away without breach. For successive contracts it needs a "termen rezonabil de preaviz" (1.276(2)). Reziliere is a remedy for non-performance (1.549(1)). **Inference:** a convenience exit labelled "reziliere" reads as if it needs a breach. In standard terms, a denunțare right for the drafter needs express written acceptance (1.203). |
| **forță majoră** vs **caz fortuit** | CC 1.351 | Forța majoră is "absolut invincibil și inevitabil". Cazul fortuit is the wider "nu poate fi prevăzut și nici împiedicat" (1.351(2)-(3)). Excusing caz fortuit also excuses force majeure, not the reverse (1.351(4)). A clause that names only "forță majoră" leaves the debtor liable for caz fortuit. The default excuses both, unless the parties agree otherwise (1.351(1)). |
| **daune-interese** | CC 1.530, 1.531, 1.535 | Damages cover "pierderea efectiv suferită" and "beneficiul de care acesta este lipsit", plus non-pecuniary loss (1.531(2)-(3)). For money debts, moratory damages run from the due date without proof of loss (1.535(1)). A cap or exclusion must say which heads it limits. In B2C it must not restrict the right to compensation (L. 193/2000 Anexă (1)(h)). |
| **clauză penală** | CC 1.538-1.541 | It is owed without proof of loss (1.538(4)). The creditor gets either performance or the penalty, not both, unless the penalty is stipulated "pentru neexecutarea obligațiilor la timp sau în locul stabilit" (1.539). A court can reduce it only in the two cases of 1.541(1), and never below the principal obligation (1.541(2)). A clause letting the creditor keep part-payment on termination is a clauză penală (1.538(5)). In B2C, disproportionate sums are abusive (Anexă (1)(i)). |
| **pact comisoriu** (termination de plin drept, without court) | CC 1.550(2), 1.552(1), 1.553 | "Se reziliază de drept în caz de neexecutare" in general terms has no effect. The clause must name "în mod expres, obligațiile" (1.553(1)). Default notice is still required unless the clause says termination follows "din simplul fapt al neexecutării" (1.553(2)). The notice must state the clause's conditions (1.553(3)). |
| **punerea în întârziere** | CC 1.521-1.523 | Without a clause saying "simpla împlinire a termenului" puts the debtor in default (1.523(1)), the creditor must send a written notice with a deadline and cannot terminate before it expires (1.522(3)-(4)). An unpaid money debt "asumată în exercițiul activității unei întreprinderi" is in default by law (1.523(2)(d)). A clause shifting the burden of proving default by law "se consideră nescrisă" (1.523(4)). |
| **clauze standard** / **clauze neuzuale** (T&C accepted by use) | CC 1.175, 1.202, 1.203, 1.269(2); L. 193/2000 art. 4(2), Anexă (1)(b) | Limitation of liability, unilateral termination or suspension, tacit renewal, governing law, arbitration and choice of court in standard terms "nu produc efecte decât dacă sunt acceptate, în mod expres, în scris" (1.203). **Inference:** "acceptance by continued use" does not meet "în mod expres, în scris". Each such clause needs its own express acceptance step. Whether one tick-box for the whole T&C is enough is an open question. Unclear standard terms are read against the drafter (1.269(2)). |
| **exclusion / limitation of liability** | CC 1.355, 1.356; L. 193/2000 Anexă (1)(h) and (k) | It cannot cover "intenție sau din culpă gravă" (1.355(1)). Harm to health only as the law allows (1.355(3)). A posted notice (for example in-app text) has no effect unless the user knew of it when the contract was made (1.356(1)), and it never limits tort liability (1.356(2)). In standard terms it also needs express written acceptance (1.203). In B2C, excluding liability for death or injury is listed as abusive (Anexă (1)(k)). |
| **dobânda penalizatoare** (late-payment interest) | OG 13/2011 art. 1-3, 5; L. 72/2013 art. 1, 3, 4, 10; CC 1.535 | Bare "dobândă" means both remuneratory and penalty interest (OG 13 art. 1(4)). The B2B legal penalty rate is reference rate + 8 pp (art. 3(2^1)). Otherwise it is + 4 pp (art. 3(2)), and 20% lower outside business activity (art. 3(3)). Outside business activity, a rate more than 50% a year above the legal rate is void, and the creditor then loses even the legal interest (art. 5(1)-(2)). L. 72/2013 does not apply to B2C (art. 1(2)(b)). In B2B it adds EUR 40 minimum damages (art. 10(1)). |
| **contract de adeziune**, interpretation | CC 1.175, 1.269(2); L. 193/2000 art. 1(2) | Using two words for one concept creates the doubt that 1.269(2) and L. 193 art. 1(2) resolve against the drafter. L. 24/2000 art. 37(1) states the rule "aceleași noțiuni se exprimă numai prin aceiași termeni", but it binds only normative acts (art. 3). |
| **alegerea instanței** (choice of court) | CPC 121, 126; CC 1.203 | In consumer matters, choice of court is valid only "după nașterea dreptului la despăgubire". A prior clause "este considerată ca nescrisă" (CPC 126(2)). A professional may sue a consumer only at the consumer's domicile (CPC 121). B2B in standard terms: needs express written acceptance (CC 1.203). |

---

## Open questions

1. **Second official source for consolidated Romanian text.** None verified. monitoruloficial.ro's home page loads (200). I did not test whether issue texts or PDFs can be fetched by script. Should the fallback be a dated local snapshot? (Recommended.)
2. **Indexing lag.** The currency check proves only that the portal agrees with itself. How fast does the portal index new MO acts? Not measured. One option: also compare the newest act in the web service for the current year against the history list.
3. **OG 13/2011 reference rate.** The latest indexed change is BNR Circulara 35 of 07/08/2024. I did not check bnr.ro for later rate changes. The skill must fetch the current rate from BNR and never state a percentage from the portal.
4. **CC 1.203 "în mod expres, în scris" online.** Does a checkbox or click satisfy it, and must each unusual clause be accepted separately? The fetched text does not say. This needs case law or doctrine, which I did not fetch. I did not fetch L. 365/2002 (comerț electronic) art. 7-9, which OUG 34/2014 art. 8(10) cross-refers to.
5. **OG 13/2011 art. 5 in B2C.** It applies to relations "care nu decurg din exploatarea unei întreprinderi". Whether a B2C contract falls under it, since the consumer's side is non-business, is unresolved in the fetched text.
6. **Clauză penală vs dobândă penalizatoare.** "Penalități de întârziere X%/zi" could be read as either, and the caps differ. Not resolved by the text.
7. **GDPR corrigenda.** Only R(02) exists in Romanian on Cellar. R(01) and R(03) returned 404 in Romanian. They may exist in other languages. I did not check whether they affect the Romanian text.
8. **Web-service details not tested:** the token lifetime, and whether `SearchText` searches full text.
9. **Old consolidations by ID** (for example 175630) render cedilla text, while the base ID renders comma-below. Normalization covers this. I did not check whether old IDs ever change.
10. **Acronym "ANSPDCP".** Not found in the fetched law text. Use the full name from L. 190/2018 art. 2(1)(c).
