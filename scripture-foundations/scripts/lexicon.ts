#!/usr/bin/env bun
/**
 * Look up Strong's Hebrew and Greek entries, and reverse-map KJV English words.
 *
 * Why this exists: the King James Version is a 1611 translation. Words such as
 * "charity", "let", "prevent", "conversation", "careful", and "talent" do not mean
 * what they mean in modern English. No inference from the KJV is safe until the
 * underlying Hebrew or Greek has been checked. This tool makes that check cheap.
 *
 * Usage:
 *   lexicon.ts lookup G26
 *   lexicon.ts lookup H7225 H7287 G3624
 *   lexicon.ts english dominion
 *   lexicon.ts english "help meet"
 *   lexicon.ts search "to tread down"
 *   lexicon.ts stats
 */

import { fail, parseArgs } from './lib/cli'
import { findDataDir } from './lib/paths'
import {
  compareIds,
  formatEntry,
  glossTokens,
  kindOf,
  loadDictionary,
  normaliseId,
  totals,
  type StrongsEntry,
  type StrongsId,
  type StrongsKind,
} from './lib/strongs'

const USAGE = `Look up Strong's Hebrew and Greek entries.

Commands:
  lookup <id...>     Show entries by Strong's number. Accepts h7225, 7225, or G26.
  english <word>     Reverse map. Show every entry the KJV renders with that word.
  search <text>      Search definitions, derivations, and glosses.
  stats              Count Hebrew and Greek entries.

Options:
  --dir <path>       Directory holding the strongs checkout.
  --limit <n>        Maximum entries to print. Default 25.

Examples:
  bun run lexicon lookup H7225 H7287
  bun run lexicon english talent
  bun run lexicon search "to tread down"`

function entryFor(
  id: StrongsId,
  table: ReadonlyMap<StrongsId, StrongsEntry>,
): StrongsEntry | undefined {
  return table.get(id)
}

async function runLookup(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir'])
  if (parsed.positionals.length === 0) {
    fail(`lookup needs at least one Strong's number.\n\n${USAGE}`)
  }

  const dataDir = findDataDir('strongs', parsed.last('dir'))

  for (const raw of parsed.positionals) {
    let id: StrongsId
    try {
      id = normaliseId(raw)
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error))
      continue
    }

    const kind = kindOf(id)
    const table = await loadDictionary(kind, dataDir)
    const entry = entryFor(id, table)

    if (!entry) {
      console.log(`${raw}: not found in the ${kind} dictionary\n`)
      continue
    }
    console.log(formatEntry(id, entry))
    console.log()
  }
}

async function runEnglish(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir', 'limit'])
  const phrase = parsed.positionals[0]
  if (phrase === undefined) {
    fail(`english needs a word or phrase.\n\n${USAGE}`)
  }

  const dataDir = findDataDir('strongs', parsed.last('dir'))
  const limit = parsed.int('limit') ?? 25
  const needle = phrase.trim().toLowerCase().replaceAll(/\s+/g, ' ')

  const hits: { id: StrongsId; entry: StrongsEntry }[] = []
  for (const kind of ['hebrew', 'greek'] as const satisfies readonly StrongsKind[]) {
    const table = await loadDictionary(kind, dataDir)
    for (const [id, entry] of table) {
      if (glossTokens(entry.kjv_def ?? '').has(needle)) hits.push({ id, entry })
    }
  }

  hits.sort((a, b) => compareIds(a.id, b.id))

  if (hits.length === 0) {
    console.log(`No Strong's entry is glossed with "${phrase}" in the KJV.`)
    return
  }

  console.log(`${hits.length} entr(y/ies) the KJV renders as "${phrase}":\n`)
  for (const [index, hit] of hits.entries()) {
    if (index >= limit) {
      console.log(`... ${hits.length - limit} more (raise --limit)`)
      break
    }
    console.log(formatEntry(hit.id, hit.entry))
    console.log()
  }
}

async function runSearch(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir', 'limit'])
  const text = parsed.positionals[0]
  if (text === undefined) {
    fail(`search needs some text.\n\n${USAGE}`)
  }

  const dataDir = findDataDir('strongs', parsed.last('dir'))
  const limit = parsed.int('limit') ?? 25
  const needle = text.trim().toLowerCase()

  const matches: { id: StrongsId; entry: StrongsEntry }[] = []
  for (const kind of ['hebrew', 'greek'] as const satisfies readonly StrongsKind[]) {
    const table = await loadDictionary(kind, dataDir)
    for (const [id, entry] of table) {
      const haystack = [
        entry.strongs_def,
        entry.derivation,
        entry.kjv_def,
        entry.translit,
        entry.lemma,
      ]
        .map((value) => value ?? '')
        .join(' ')
        .toLowerCase()
      if (haystack.includes(needle)) matches.push({ id, entry })
    }
  }

  matches.sort((a, b) => compareIds(a.id, b.id))

  for (const match of matches.slice(0, limit)) {
    console.log(formatEntry(match.id, match.entry))
    console.log()
  }
  console.log(`${matches.length} entr(y/ies) matched; showing ${Math.min(matches.length, limit)}.`)
}

async function runStats(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir'])
  const dataDir = findDataDir('strongs', parsed.last('dir'))
  const counted = await totals(dataDir)
  console.log(`hebrew entries=${counted.hebrew}`)
  console.log(`greek entries=${counted.greek}`)
  console.log(`data_dir=${dataDir}`)
}

const [command, ...rest] = Bun.argv.slice(2)

if (command === undefined || command === 'help' || command === '--help') {
  console.log(USAGE)
  process.exit(0)
}

try {
  switch (command) {
    case 'lookup':
      await runLookup(rest)
      break
    case 'english':
      await runEnglish(rest)
      break
    case 'search':
      await runSearch(rest)
      break
    case 'stats':
      await runStats(rest)
      break
    default:
      fail(`Unknown command: ${command}\n\n${USAGE}`)
  }
} catch (error) {
  fail(error instanceof Error ? error.message : String(error))
}
