#!/usr/bin/env bun
/**
 * Read, search, and quote the King James Version.
 *
 * The text is stored as one JSON file per book. See `lib/kjv.ts` for the shape.
 *
 * Usage:
 *   scripture.ts books
 *   scripture.ts lookup Genesis 1
 *   scripture.ts lookup "Genesis 1:1-5"
 *   scripture.ts lookup "Gen 1:26-28" "Ps 24:1"
 *   scripture.ts search "sons of Issachar"
 *   scripture.ts search "foundation" --book Psalms --book Isaiah
 *   scripture.ts search "lov(e|eth) the Lord" --regex
 *   scripture.ts stats
 */

import { fail, parseArgs } from './lib/cli'
import { findDataDir } from './lib/paths'
import { resolveBook } from './lib/books'
import {
  availableBooks,
  findPassage,
  foldPunctuation,
  iterVerses,
  label,
  parseReference,
  totals,
} from './lib/kjv'

const USAGE = `Read and search the King James Version.

Commands:
  lookup <reference...>   Print verses. Accepts "Genesis 1" or "John 3:16-17".
  search <query>          Find verses containing a phrase.
  books                   List the books that are present.
  stats                   Count books, chapters, and verses.

Options:
  --dir <path>            Directory holding the per-book JSON files.
  --book <name>           Restrict a search to one book. Repeatable.
  --limit <n>             Maximum verses to print. Default 40.
  --regex                 Treat the search query as a regular expression.

Examples:
  bun run verse "1 Chronicles 12:32"
  bun run verse:search "sons of Issachar"
  bun run verse:search "sure foundation" --book Isaiah`

async function runLookup(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir'])
  if (parsed.positionals.length === 0) {
    fail(`lookup needs at least one reference.\n\n${USAGE}`)
  }

  const dataDir = findDataDir('bible', parsed.last('dir'))

  for (const reference of parsed.positionals) {
    let passage
    try {
      passage = parseReference(reference)
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error))
      continue
    }

    const verses = await findPassage(passage, dataDir)
    if (verses.length === 0) {
      console.log(`${label(passage.stem, passage.chapter)}: nothing found\n`)
      continue
    }

    for (const verse of verses) {
      console.log(`${label(passage.stem, verse.chapter, verse.verse)}\t${verse.text}`)
    }
    console.log()
  }
}

async function runSearch(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir', 'book', 'limit'], ['regex'])
  const query = parsed.positionals[0]
  if (query === undefined) {
    fail(`search needs a query.\n\n${USAGE}`)
  }

  const dataDir = findDataDir('bible', parsed.last('dir'))
  const limit = parsed.int('limit') ?? 40

  let stems
  try {
    const requested = parsed.all('book')
    stems = requested.length > 0 ? requested.map(resolveBook) : availableBooks()
  } catch (error) {
    fail(error instanceof Error ? error.message : String(error))
  }

  const needle = foldPunctuation(query)
  let pattern: RegExp | null = null
  if (parsed.has('regex')) {
    try {
      pattern = new RegExp(needle)
    } catch (error) {
      fail(`Bad regular expression: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  let shown = 0
  let total = 0

  for (const stem of stems) {
    for await (const verse of iterVerses(stem, dataDir)) {
      const haystack = foldPunctuation(verse.text)
      const hit = pattern ? pattern.test(haystack) : haystack.includes(needle)
      if (!hit) continue

      total += 1
      if (shown < limit) {
        console.log(`${label(stem, verse.chapter, verse.verse)}\t${verse.text}`)
        shown += 1
      }
    }
  }

  console.log()
  console.log(`${total} verse(s) matched; showing ${Math.min(total, limit)}.`)
}

function runBooks(args: readonly string[]): void {
  parseArgs(args, ['dir'])
  for (const stem of availableBooks()) console.log(stem)
}

async function runStats(args: readonly string[]): Promise<void> {
  const parsed = parseArgs(args, ['dir'])
  const dataDir = findDataDir('bible', parsed.last('dir'))
  const counted = await totals(dataDir)
  console.log(`books=${counted.books} chapters=${counted.chapters} verses=${counted.verses}`)
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
    case 'search':
      await runSearch(rest)
      break
    case 'books':
      runBooks(rest)
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
