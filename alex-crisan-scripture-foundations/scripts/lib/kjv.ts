/**
 * The King James Version, stored as one JSON file per book.
 *
 * Data shape on disk:
 *
 *   { "book": "Genesis",
 *     "chapters": [ { "chapter": "1",
 *                     "verses": [ { "verse": "1", "text": "..." } ] } ] }
 *
 * Chapter and verse numbers arrive as strings, so every read converts them once
 * here rather than leaving `Number(...)` scattered through the call sites.
 */

import { join } from 'node:path'
import { BOOK_ORDER, type BookStem, displayName, resolveBook } from './books'

export type Verse = {
  readonly chapter: number
  readonly verse: number
  readonly text: string
}

export type Passage = {
  readonly stem: BookStem
  readonly chapter: number
  readonly from: number | null
  readonly to: number | null
}

type RawBook = {
  readonly book: string
  readonly chapters: readonly {
    readonly chapter: string
    readonly verses: readonly { readonly verse: string; readonly text: string }[]
  }[]
}

const cache = new Map<BookStem, RawBook>()

async function loadBook(stem: BookStem, dataDir: string): Promise<RawBook> {
  const cached = cache.get(stem)
  if (cached) return cached

  const file = Bun.file(join(dataDir, `${stem}.json`))
  if (!(await file.exists())) {
    throw new Error(`Missing data file: ${file.name}`)
  }

  const parsed = (await file.json()) as RawBook
  cache.set(stem, parsed)
  return parsed
}

/** Yield every verse of one book in reading order. */
export async function* iterVerses(stem: BookStem, dataDir: string): AsyncGenerator<Verse> {
  const book = await loadBook(stem, dataDir)
  for (const chapter of book.chapters) {
    const chapterNumber = Number(chapter.chapter)
    for (const entry of chapter.verses) {
      yield {
        chapter: chapterNumber,
        verse: Number(entry.verse),
        text: entry.text.trim(),
      }
    }
  }
}

/** Every book that is present on disk, in reading order. */
export function availableBooks(): readonly BookStem[] {
  return BOOK_ORDER
}

const REFERENCE_RE =
  /^\s*(?<book>(?:[1-3]|[Ii]{1,3})?\s*[A-Za-z][A-Za-z.\s]*?)\s*(?<chapter>\d+)(?:\s*[:.]\s*(?<verse>\d+)(?:\s*[-\u2013]\s*(?<end>\d+))?)?\s*$/

/**
 * Parse a reference such as `Genesis 1`, `John 3:16`, or `Psalm 119:105-112`.
 * Throws when the shape is wrong or the book cannot be resolved.
 */
export function parseReference(input: string): Passage {
  const match = REFERENCE_RE.exec(input)
  if (!match?.groups) {
    throw new Error(`Could not parse reference: ${JSON.stringify(input)}`)
  }

  const { book, chapter, verse, end } = match.groups as {
    book: string
    chapter: string
    verse?: string
    end?: string
  }

  const from = verse === undefined ? null : Number(verse)
  return {
    stem: resolveBook(book),
    chapter: Number(chapter),
    from,
    to: end === undefined ? from : Number(end),
  }
}

export function label(stem: BookStem, chapter: number, verse?: number): string {
  const base = `${displayName(stem)} ${chapter}`
  return verse === undefined ? base : `${base}:${verse}`
}

/**
 * Fold the punctuation the source text uses so that a search for `Lord's` matches
 * `Lord’s`. The KJV JSON carries curly apostrophes, which break naive matching.
 */
export function foldPunctuation(input: string): string {
  return input
    .replaceAll('\u2019', "'")
    .replaceAll('\u2018', "'")
    .replaceAll('\u201c', '"')
    .replaceAll('\u201d', '"')
    .replaceAll('\u2014', '--')
    .replaceAll('\u2013', '-')
    .toLowerCase()
}

export async function findPassage(passage: Passage, dataDir: string): Promise<readonly Verse[]> {
  const found: Verse[] = []
  for await (const verse of iterVerses(passage.stem, dataDir)) {
    if (verse.chapter !== passage.chapter) continue
    if (passage.from === null) found.push(verse)
    else if (verse.verse >= passage.from && verse.verse <= (passage.to ?? passage.from)) {
      found.push(verse)
    }
  }
  return found
}

export type VerseTotals = {
  readonly books: number
  readonly chapters: number
  readonly verses: number
}

export async function totals(dataDir: string): Promise<VerseTotals> {
  let books = 0
  let chapters = 0
  let verses = 0

  for (const stem of BOOK_ORDER) {
    const parsed = await loadBook(stem, dataDir).catch(() => null)
    if (!parsed) continue
    books += 1
    chapters += parsed.chapters.length
    for (const chapter of parsed.chapters) verses += chapter.verses.length
  }

  return { books, chapters, verses }
}
