#!/usr/bin/env bun
/**
 * Live Romanian statute, statutory public contract, GDPR, and CJUE lookup CLI.
 * Primary sources: legislatie.just.ro (consolidated HTML + SOAP ID search) and EU Cellar (GDPR + CJUE in Romanian).
 * Always normalizes cedilla ş/ţ to comma-below ș/ț and labels portal texts as unofficial consolidations.
 */

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const UA = "alex-crisan-romanian-legal-writing/1.0";
const CACHE_DIR = join(tmpdir(), "ro-law-cache");
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

interface ActInfo {
  name: string;
  baseId: string;
  repubId: string;
  kind?: "art" | "clauza";
}

const ACTS: Record<string, ActInfo> = {
  cc: { name: "Codul civil (L. 287/2009, rep.)", baseId: "109884", repubId: "130143" },
  cpc: { name: "Codul de procedură civilă (L. 134/2010, rep.)", baseId: "140271", repubId: "167140" },
  l24: { name: "Legea nr. 24/2000 (tehnică legislativă, rep.)", baseId: "21698", repubId: "118116" },
  l193: { name: "Legea nr. 193/2000 (clauze abuzive, rep.)", baseId: "24922", repubId: "140214" },
  l365: { name: "Legea nr. 365/2002 (comerț electronic, rep.)", baseId: "77218", repubId: "77218" },
  og13: { name: "OG nr. 13/2011 (dobânda legală)", baseId: "131085", repubId: "131085" },
  l72: { name: "Legea nr. 72/2013 (întârzierea plății B2B)", baseId: "146555", repubId: "146555" },
  oug34: { name: "OUG nr. 34/2014 (drepturile consumatorilor)", baseId: "158913", repubId: "158913" },
  l190: { name: "Legea nr. 190/2018 (aplicare GDPR)", baseId: "203151", repubId: "203151" },
  oug140: { name: "OUG nr. 140/2021 (vânzare bunuri B2C)", baseId: "250044", repubId: "250044" },
  oug141: { name: "OUG nr. 141/2021 (conținut și servicii digitale B2C)", baseId: "250054", repubId: "250054" },
  oug18_2026: { name: "OUG nr. 18/2026 (modificare OUG 34/2014)", baseId: "308474", repubId: "308474" },
  hg1: { name: "HG nr. 1/2018 Anexa 1 (contract public lucrări)", baseId: "282833", repubId: "282833", kind: "clauza" },
  anap1554: { name: "Ordin ANAP nr. 1.554/2023 Anexa (contract public produse)", baseId: "274322", repubId: "274322", kind: "clauza" },
};

const CJUE_CASES: Record<string, { label: string; celex: string }> = {
  "c186-16": { label: "CJUE C-186/16 Andriciuc (Banca Românească — transparența obiectului principal)", celex: "62016CJ0186" },
  "c143-13": { label: "CJUE C-143/13 Matei (Volksbank România — modificare unilaterală și comision de risc)", celex: "62013CJ0143" },
  "c621-17": { label: "CJUE C-621/17 Kiss (comisioane clare — cuantum, metodă de calcul, scadență)", celex: "62017CJ0621" },
  "c191-15": { label: "CJUE C-191/15 VKI v Amazon (lege aplicabilă B2C + Roma I art. 6(2))", celex: "62015CJ0191" },
};

function normRo(s: string): string {
  return s.replace(/ş/g, "ș").replace(/Ş/g, "Ș").replace(/ţ/g, "ț").replace(/Ţ/g, "Ț");
}

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

function cleanHtml(html: string): string {
  let out = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<span[^>]*class="[^"]*(?:S_NTA|_SHORT|TAG_COLLAPSED)[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "")
    .replace(/<span[^>]*style="[^"]*display\s*:\s*none[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(?:p|div|li|tr|h[1-6])>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  out = normRo(decodeEntities(out));
  return out.replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{2,}/g, "\n").trim();
}

async function cachedFetch(key: string, url: string, headers: Record<string, string>, fresh: boolean): Promise<{ text: string; fetchedAt: string }> {
  mkdirSync(CACHE_DIR, { recursive: true });
  const file = join(CACHE_DIR, `${key.replace(/[^a-zA-Z0-9_-]/g, "_")}.cache`);
  if (!fresh && existsSync(file)) {
    const st = statSync(file);
    if (Date.now() - st.mtimeMs < CACHE_TTL_MS) {
      return { text: readFileSync(file, "utf8"), fetchedAt: st.mtime.toISOString().slice(0, 10) };
    }
  }
  const res = await fetch(url, { headers: { "User-Agent": UA, ...headers } });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const text = await res.text();
  writeFileSync(file, text, "utf8");
  return { text, fetchedAt: new Date().toISOString().slice(0, 10) };
}

function parsePortalMeta(html: string, baseId: string) {
  const idAct = html.match(/id=['"]id_act['"][^>]*value=['"](\d+)['"]/)?.[1] ?? baseId;
  const cons =
    html.match(/title=['"](Consolidarea din [^'"]+)['"][^>]*style=['"][^'"]*color\s*:\s*red/i)?.[1] ??
    html.match(/style=['"][^'"]*color\s*:\s*red[^'"]*['"][^>]*title=['"]([^'"]+)['"]/i)?.[1] ??
    "original / unlisted consolidation";
  return { idAct, consolidation: cons };
}

function formatArtKey(raw: string): string {
  const trimmed = raw.trim().replace(/\./g, "");
  // Add Romanian thousands dot for 4-digit article numbers (e.g. 1203 -> 1.203)
  return trimmed.replace(/^(\d)(\d{3})(?=$|\^)/, "$1.$2");
}

function extractPortalArticle(html: string, rawNum: string): string | null {
  const bodyIdx = html.indexOf("Forma printabil");
  const slice = bodyIdx >= 0 ? html.slice(bodyIdx) : html;

  if (/^anex/i.test(rawNum)) {
    const m = slice.match(/<span[^>]*class="S_ANX"[^>]*>([\s\S]*?)(?=<div[^>]*class="[^"]*footer|<\/form>|$)/i);
    return m ? cleanHtml(m[1]).slice(0, 8000) : null;
  }

  const normalized = formatArtKey(rawNum);
  const candidates = [...new Set([rawNum.trim(), normalized])];

  // Walk top-level S_ART spans (track nested span depth so amending quotes don't collide)
  const artStarts = [...slice.matchAll(/<span[^>]*class="S_ART"[^>]*>/gi)];
  for (let i = 0; i < artStarts.length; i++) {
    const startPos = artStarts[i].index!;
    // Find matching closing </span>
    let depth = 1;
    let pos = startPos + artStarts[i][0].length;
    const tagRe = /<(\/?)span\b[^>]*>/gi;
    tagRe.lastIndex = pos;
    let endPos = slice.length;
    let m: RegExpExecArray | null;
    while ((m = tagRe.exec(slice))) {
      depth += m[1] === "/" ? -1 : 1;
      if (depth === 0) {
        endPos = m.index + m[0].length;
        break;
      }
    }
    const block = slice.slice(startPos, endPos);
    // Check if this S_ART is nested inside an earlier S_ART: check preceding 200 chars for S_MOD/S_CIT or simply match first top-level
    const ttlMatch = block.match(/<span[^>]*class="S_ART_TTL"[^>]*>([\s\S]*?)<\/span>/i);
    if (!ttlMatch) continue;
    const ttl = cleanHtml(ttlMatch[1]).replace(/\s+/g, " ");
    for (const c of candidates) {
      const re = new RegExp(`^Articolul\\s+${c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\b|$)`, "i");
      if (re.test(ttl)) {
        // Ensure we didn't grab a nested quoted article inside S_MOD
        const before = slice.slice(Math.max(0, startPos - 600), startPos);
        if (/(?:se modifică|se completează|va avea următorul cuprins|se introduce)/i.test(before) && !/<\/span>\s*<span[^>]*class="S_ART"/.test(before.slice(-120))) {
          continue;
        }
        return cleanHtml(block);
      }
    }
  }
  return null;
}

function extractClauza(html: string, clauseNum: string): string | null {
  const bodyIdx = html.indexOf("Forma printabil");
  const txt = cleanHtml(bodyIdx >= 0 ? html.slice(bodyIdx) : html);
  const esc = clauseNum.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Match either "Clauza N " (HG 1/2018) or "\nN. " (ANAP 1554/2023)
  const re = new RegExp(`(?:Clauza\\s+${esc}\\b|\\n${esc}\\.\\s+[A-ZĂÂÎȘȚ]{3,})`, "g");
  const m = re.exec(txt);
  if (!m) return null;
  const start = m.index;
  const nextRe = /\n(?:Clauza\s+\d+\b|\d+\.\s+[A-ZĂÂÎȘȚ]{3,})/g;
  nextRe.lastIndex = start + 25;
  const next = nextRe.exec(txt);
  const end = next ? Math.min(next.index, start + 4500) : start + 4500;
  return txt.slice(start, end).trim();
}

function extractGdprArticle(xhtml: string, artNum: string): string | null {
  const esc = artNum.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `<div[^>]*class="eli-subdivision"[^>]*id="art_${esc}"[^>]*>([\\s\\S]*?)(?=<div[^>]*class="eli-subdivision"[^>]*id="(?:art_|cpt_|sct_)|$)`,
    "i"
  );
  const m = xhtml.match(re);
  if (!m) return null;
  return cleanHtml(m[1])
    .replace(/▼[BC]\d*/g, "")
    .replace(/◄/g, "")
    .replace(/\n(?:Secțiunea|Capitolul)\s+\d+[\s\S]*$/i, "")
    .trim();
}

async function cmdLookup(specs: string[], fresh: boolean) {
  for (const spec of specs) {
    const [aliasRaw, listRaw] = spec.split(":");
    const alias = aliasRaw.toLowerCase();
    const items = (listRaw ?? "").split(",").filter(Boolean);
    if (!items.length) {
      console.error(`Invalid spec "${spec}". Use alias:art1,art2 (e.g. cc:1203,1553 or gdpr:6,13).`);
      continue;
    }

    if (alias === "gdpr") {
      try {
        const { text, fetchedAt } = await cachedFetch(
          "gdpr_cellar",
          "https://publications.europa.eu/resource/celex/02016R0679-20160504",
          { Accept: "application/xhtml+xml", "Accept-Language": "ron" },
          fresh
        );
        console.log(`\n=== Reg. (UE) 2016/679 (GDPR) | Source: EU Cellar 02016R0679-20160504 (corrigendum RO applied) | fetched ${fetchedAt} | normalized ș/ț ===`);
        for (const a of items) {
          const out = extractGdprArticle(text, a);
          console.log(`\n[GDPR Art. ${a}]\n${out ?? "(not found)"}`);
        }
      } catch (err) {
        const { text, fetchedAt } = await cachedFetch("leg_201834", "https://legislatie.just.ro/Public/DetaliiDocument/201834", {}, fresh);
        console.log(`\n=== Reg. (UE) 2016/679 (GDPR) | Fallback: legislatie.just.ro/201834 | fetched ${fetchedAt} | normalized ș/ț ===`);
        for (const a of items) {
          console.log(`\n[GDPR Art. ${a}]\n${extractPortalArticle(text, a) ?? "(not found)"}`);
        }
      }
      continue;
    }

    const act = ACTS[alias] ?? (/^\d+$/.test(alias) ? { name: `Act ID ${alias}`, baseId: alias, repubId: alias } : null);
    if (!act) {
      console.error(`Unknown act alias "${alias}". Known: ${Object.keys(ACTS).join(", ")}, gdpr, or numeric DetaliiDocument ID.`);
      continue;
    }

    const url = `https://legislatie.just.ro/Public/DetaliiDocument/${act.baseId}`;
    const { text, fetchedAt } = await cachedFetch(`leg_${act.baseId}`, url, {}, fresh);
    const meta = parsePortalMeta(text, act.baseId);
    console.log(`\n=== ${act.name} | ${url} | id_act=${meta.idAct} | ${meta.consolidation} (unofficial) | fetched ${fetchedAt} | normalized ș/ț ===`);
    for (const a of items) {
      const out = act.kind === "clauza" ? extractClauza(text, a) : extractPortalArticle(text, a);
      console.log(`\n[${alias.toUpperCase()} ${act.kind === "clauza" ? "Clauza" : "Art."} ${a}]\n${out ?? "(not found)"}`);
    }
  }
}

async function cmdCase(keys: string[], fresh: boolean) {
  for (const k of keys) {
    const info = CJUE_CASES[k.toLowerCase()];
    const celex = info ? info.celex : k;
    const label = info ? info.label : `CJUE ${k}`;
    const url = `https://publications.europa.eu/resource/celex/${celex}`;
    const { text, fetchedAt } = await cachedFetch(`cjue_${celex}`, url, { Accept: "application/xhtml+xml, text/html", "Accept-Language": "ron" }, fresh);
    const clean = cleanHtml(text);
    const dispIdx = clean.indexOf("Pentru aceste motive");
    const litIdx = clean.indexOf("Litigiul principal");
    console.log(`\n=== ${label} | ${url} | fetched ${fetchedAt} | normalized ș/ț ===`);
    if (dispIdx >= 0) console.log("\n[DISPOZITIV]\n" + clean.slice(dispIdx, dispIdx + 2400));
    if (litIdx >= 0) console.log("\n[CLAUZE / LITIGIU]\n" + clean.slice(litIdx, litIdx + 1600));
  }
}

async function cmdSearch(year: string, num: string, title = "") {
  const tokenRes = await fetch("https://legislatie.just.ro/apiws/FreeWebService.svc/SOAP", {
    method: "POST",
    headers: { "Content-Type": "text/xml; charset=utf-8", SOAPAction: "http://tempuri.org/IFreeWebService/GetToken", "User-Agent": UA },
    body: `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soap:Body><tem:GetToken/></soap:Body></soap:Envelope>`,
  });
  const token = (await tokenRes.text()).match(/<GetTokenResult>([^<]+)<\/GetTokenResult>/)?.[1];
  if (!token) throw new Error("Failed to get SOAP token");

  const searchRes = await fetch("https://legislatie.just.ro/apiws/FreeWebService.svc/SOAP", {
    method: "POST",
    headers: { "Content-Type": "text/xml; charset=utf-8", SOAPAction: "http://tempuri.org/IFreeWebService/Search", "User-Agent": UA },
    body: `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:sch="http://schemas.datacontract.org/2004/07/FreeWebService"><soap:Body><tem:Search><tem:SearchModel><sch:NumarPagina>0</sch:NumarPagina><sch:RezultatePagina>30</sch:RezultatePagina><sch:SearchAn>${year}</sch:SearchAn><sch:SearchNumar>${num}</sch:SearchNumar>${title ? `<sch:SearchTitlu>${title}</sch:SearchTitlu>` : ""}</tem:SearchModel><tem:tokenKey>${token}</tem:tokenKey></tem:Search></soap:Body></soap:Envelope>`,
  });
  const xml = await searchRes.text();
  const items = [...xml.matchAll(/<a:Legi>([\s\S]*?)<\/a:Legi>/g)].map((m) => {
    const g = (t: string) => normRo((m[1].match(new RegExp(`<a:${t}>([\\s\\S]*?)<\\/a:${t}>`))?.[1] ?? "").replace(/\s+/g, " ").trim());
    return { tip: g("TipAct"), nr: g("Numar"), link: g("LinkHtml"), titlu: g("Titlu") };
  });
  console.log(`Found ${items.length} results. NOTE: Use IDs only — never quote SOAP Text; run "lookup <id>:<art>" for consolidated text.`);
  for (const it of items.slice(0, 15)) {
    const id = it.link.match(/(\d+)$/)?.[1] ?? it.link;
    console.log(`  ID=${id} | [${it.tip} ${it.nr}] ${it.titlu.slice(0, 140)}`);
  }
}

async function cmdCurrency(alias: string) {
  const act = ACTS[alias.toLowerCase()];
  const contor = act ? act.repubId : alias;
  const res = await fetch("https://legislatie.just.ro/Public/actiuniSuferite", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA },
    body: `contor=${encodeURIComponent(contor)}`,
  });
  const j = (await res.json()) as { acte?: string };
  const rows = [...(j.acte ?? "").matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((m) => cleanHtml(m[1]).replace(/\n+/g, " | "))
    .filter(Boolean);
  console.log(`=== Currency check (${act?.name ?? contor}, contor=${contor}) — ${rows.length} rows ===`);
  for (const r of rows.slice(-8)) console.log(" ", r);
}

const args = process.argv.slice(2);
const fresh = args.includes("--fresh");
const positional = args.filter((a) => a !== "--fresh");
const cmd = positional[0];

if (!cmd || cmd === "help") {
  console.log(`Usage:
  bun run ro-law.ts lookup [--fresh] <alias>:<art1,art2> [...]
  bun run ro-law.ts case [--fresh] <c186-16|c143-13|c621-17|c191-15|celex> [...]
  bun run ro-law.ts search <year> <number> [title]
  bun run ro-law.ts currency <alias|repubId>
Aliases: ${Object.keys(ACTS).join(", ")}, gdpr`);
  process.exit(0);
}

if (cmd === "lookup") await cmdLookup(positional.slice(1), fresh);
else if (cmd === "case") await cmdCase(positional.slice(1), fresh);
else if (cmd === "search") await cmdSearch(positional[1] ?? "", positional[2] ?? "", positional.slice(3).join(" "));
else if (cmd === "currency") await cmdCurrency(positional[1] ?? "");
else {
  console.error(`Unknown command: ${cmd}`);
  process.exit(1);
}
