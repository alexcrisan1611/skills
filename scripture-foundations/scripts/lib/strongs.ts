/**
 * Strong's Hebrew and Greek dictionaries.
 *
 * The upstream files are JavaScript object literals rather than JSON:
 *
 *   var strongsGreekDictionary = { "G26": { ... }, ... };
 *
 * They are read as text and the object literal is sliced out, because the file has
 * no module exports and `import` cannot load it.
 */

import { join } from 'node:path'

export type StrongsKind = 'greek' | 'hebrew'

export type StrongsId = `G${number}` | `H${number}`

export type StrongsEntry = {
  readonly lemma?: string
  readonly translit?: string
  readonly strongs_def?: string
  readonly derivation?: string
  readonly kjv_def?: string
}

type DictionaryFile = {
  readonly kind: StrongsKind
  readonly relativePath: string
}

/** Only these two files are required. The upstream repository ships more formats. */
const FILES = {
  greek: { kind: 'greek', relativePath: join('greek', 'strongs-greek-dictionary.js') },
  hebrew: { kind: 'hebrew', relativePath: join('hebrew', 'strongs-hebrew-dictionary.js') },
} as const satisfies Record<StrongsKind, DictionaryFile>

const cache = new Map<StrongsKind, ReadonlyMap<StrongsId, StrongsEntry>>()

async function readDictionary(
  kind: StrongsKind,
  dataDir: string,
): Promise<ReadonlyMap<StrongsId, StrongsEntry>> {
  const cached = cache.get(kind)
  if (cached) return cached

  const file = Bun.file(join(dataDir, FILES[kind].relativePath))
  if (!(await file.exists())) {
    throw new Error(`Missing dictionary file: ${file.name}`)
  }

  const text = await file.text()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`No object literal found in ${file.name}`)
  }

  const parsed = JSON.parse(text.slice(start, end + 1)) as Record<string, StrongsEntry>
  const table = new Map<StrongsId, StrongsEntry>()
  for (const [key, entry] of Object.entries(parsed)) {
    table.set(key as StrongsId, entry)
  }

  cache.set(kind, table)
  return table
}

export async function loadDictionary(
  kind: StrongsKind,
  dataDir: string,
): Promise<ReadonlyMap<StrongsId, StrongsEntry>> {
  return readDictionary(kind, dataDir)
}

/**
 * Normalise anything a reader might type into a canonical identifier.
 * `h7225`, `7225`, and `H07225` all become `H7225`.
 */
export function normaliseId(value: string): StrongsId {
  const upper = value.trim().toUpperCase()
  const letter = upper.startsWith('G') || upper.startsWith('H') ? upper[0] : 'H'
  const digits = upper.replaceAll(/\D/g, '')
  if (digits.length === 0) {
    throw new Error(`Not a Strong's number: ${JSON.stringify(value)}`)
  }
  return `${letter}${Number.parseInt(digits, 10)}` as StrongsId
}

export function kindOf(id: StrongsId): StrongsKind {
  return id.startsWith('G') ? 'greek' : 'hebrew'
}

/** Render one entry as readable text. */
export function formatEntry(id: StrongsId, entry: StrongsEntry): string {
  const language = kindOf(id) === 'greek' ? 'Greek' : 'Hebrew'
  const head = [id, entry.translit, entry.lemma, `(${language})`]
    .filter((part) => part !== undefined && part !== '')
    .join('  ')

  const lines = [head]
  const fields = [
    ['  def:  ', entry.strongs_def],
    ['  from: ', entry.derivation],
    ['  KJV:  ', entry.kjv_def],
  ] as const

  for (const [prefix, value] of fields) {
    const trimmed = value?.trim()
    if (trimmed) lines.push(prefix + trimmed)
  }
  return lines.join('\n')
}

/** Fold a `kjv_def` field into comparable tokens. */
export function glossTokens(value: string): ReadonlySet<string> {
  const tokens = new Set<string>()
  for (const chunk of value.split(',')) {
    const cleaned = chunk
      .toLowerCase()
      .replaceAll(/\(.*?\)/g, ' ')
      .replaceAll(/[^a-z' ]+/g, ' ')
      .replaceAll(/\s+/g, ' ')
      .trim()
    if (!cleaned) continue
    tokens.add(cleaned)
    for (const word of cleaned.split(' ')) {
      if (word.length > 2) tokens.add(word)
    }
  }
  return tokens
}

/** Sort identifiers in canonical order: Hebrew first, then Greek, each numeric. */
export function compareIds(a: StrongsId, b: StrongsId): number {
  if (a[0] !== b[0]) return a < b ? -1 : 1
  return Number.parseInt(a.slice(1), 10) - Number.parseInt(b.slice(1), 10)
}

export type DictionaryTotals = {
  readonly hebrew: number
  readonly greek: number
}

export async function totals(dataDir: string): Promise<DictionaryTotals> {
  const [hebrew, greek] = await Promise.all([
    readDictionary('hebrew', dataDir),
    readDictionary('greek', dataDir),
  ])
  return { hebrew: hebrew.size, greek: greek.size }
}
