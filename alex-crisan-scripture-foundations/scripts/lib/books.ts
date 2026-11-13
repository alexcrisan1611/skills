/**
 * Book names, abbreviations, and canonical order.
 *
 * The `as const satisfies` pattern is doing real work here. `as const` keeps the
 * keys as literal types so `keyof typeof BOOKS` becomes a union of the 66 stems,
 * and `satisfies` checks the shape without widening that union away.
 */

type BookEntry = {
  readonly display: string
  readonly aliases: readonly string[]
}

export const BOOKS = {
  Genesis: { display: 'Genesis', aliases: ['gen', 'ge', 'gn'] },
  Exodus: { display: 'Exodus', aliases: ['ex', 'exod', 'exo'] },
  Leviticus: { display: 'Leviticus', aliases: ['lev', 'le', 'lv'] },
  Numbers: { display: 'Numbers', aliases: ['num', 'nu', 'nm', 'nb'] },
  Deuteronomy: { display: 'Deuteronomy', aliases: ['deut', 'dt', 'de'] },
  Joshua: { display: 'Joshua', aliases: ['josh', 'jos'] },
  Judges: { display: 'Judges', aliases: ['judg', 'jdg', 'jg'] },
  Ruth: { display: 'Ruth', aliases: ['rth', 'ru'] },
  '1Samuel': {
    display: '1 Samuel',
    aliases: ['1sam', '1sa', '1sm', '1s', 'isamuel', 'firstsamuel'],
  },
  '2Samuel': {
    display: '2 Samuel',
    aliases: ['2sam', '2sa', '2sm', '2s', 'iisamuel', 'secondsamuel'],
  },
  '1Kings': { display: '1 Kings', aliases: ['1kgs', '1ki', '1kg', '1k', 'ikings', 'firstkings'] },
  '2Kings': { display: '2 Kings', aliases: ['2kgs', '2ki', '2kg', '2k', 'iikings', 'secondkings'] },
  '1Chronicles': {
    display: '1 Chronicles',
    aliases: ['1chr', '1ch', '1chronicle', 'firstchronicles'],
  },
  '2Chronicles': {
    display: '2 Chronicles',
    aliases: ['2chr', '2ch', '2chronicle', 'secondchronicles'],
  },
  Ezra: { display: 'Ezra', aliases: ['ezr'] },
  Nehemiah: { display: 'Nehemiah', aliases: ['neh', 'ne'] },
  Esther: { display: 'Esther', aliases: ['est', 'esth', 'es'] },
  Job: { display: 'Job', aliases: ['jb'] },
  Psalms: { display: 'Psalms', aliases: ['psalm', 'ps', 'psa', 'pslm', 'pss'] },
  Proverbs: { display: 'Proverbs', aliases: ['prov', 'pro', 'pr', 'prv', 'proverb'] },
  Ecclesiastes: {
    display: 'Ecclesiastes',
    aliases: ['eccl', 'ecc', 'ec', 'qoheleth', 'ecclesiast'],
  },
  SongofSolomon: {
    display: 'Song of Solomon',
    aliases: [
      'song',
      'sos',
      'songofsongs',
      'canticles',
      'cant',
      'songofsol',
      'canticleofcanticles',
    ],
  },
  Isaiah: { display: 'Isaiah', aliases: ['isa', 'is'] },
  Jeremiah: { display: 'Jeremiah', aliases: ['jer', 'je', 'jr'] },
  Lamentations: { display: 'Lamentations', aliases: ['lam', 'la'] },
  Ezekiel: { display: 'Ezekiel', aliases: ['ezek', 'eze', 'ezk'] },
  Daniel: { display: 'Daniel', aliases: ['dan', 'dn', 'da'] },
  Hosea: { display: 'Hosea', aliases: ['hos', 'ho'] },
  Joel: { display: 'Joel', aliases: ['joe', 'jl'] },
  Amos: { display: 'Amos', aliases: ['am'] },
  Obadiah: { display: 'Obadiah', aliases: ['obad', 'oba', 'ob'] },
  Jonah: { display: 'Jonah', aliases: ['jon', 'jnh'] },
  Micah: { display: 'Micah', aliases: ['mic', 'mi'] },
  Nahum: { display: 'Nahum', aliases: ['nah', 'na'] },
  Habakkuk: { display: 'Habakkuk', aliases: ['hab', 'hb'] },
  Zephaniah: { display: 'Zephaniah', aliases: ['zeph', 'zep', 'zp'] },
  Haggai: { display: 'Haggai', aliases: ['hag', 'hg'] },
  Zechariah: { display: 'Zechariah', aliases: ['zech', 'zec', 'zc'] },
  Malachi: { display: 'Malachi', aliases: ['mal', 'ml'] },
  Matthew: { display: 'Matthew', aliases: ['matt', 'mat', 'mt'] },
  Mark: { display: 'Mark', aliases: ['mrk', 'mk', 'mr'] },
  Luke: { display: 'Luke', aliases: ['luk', 'lk'] },
  John: { display: 'John', aliases: ['joh', 'jn'] },
  Acts: { display: 'Acts', aliases: ['act', 'ac', 'actsoftheapostles'] },
  Romans: { display: 'Romans', aliases: ['rom', 'ro', 'rm'] },
  '1Corinthians': {
    display: '1 Corinthians',
    aliases: ['1cor', '1co', '1cr', 'icorinthians', 'firstcorinthians'],
  },
  '2Corinthians': {
    display: '2 Corinthians',
    aliases: ['2cor', '2co', '2cr', 'iicorinthians', 'secondcorinthians'],
  },
  Galatians: { display: 'Galatians', aliases: ['gal', 'ga'] },
  Ephesians: { display: 'Ephesians', aliases: ['eph', 'ep'] },
  Philippians: { display: 'Philippians', aliases: ['phil', 'php', 'pp', 'philip'] },
  Colossians: { display: 'Colossians', aliases: ['col', 'co'] },
  '1Thessalonians': {
    display: '1 Thessalonians',
    aliases: ['1thess', '1th', '1thes', 'firstthessalonians'],
  },
  '2Thessalonians': {
    display: '2 Thessalonians',
    aliases: ['2thess', '2th', '2thes', 'secondthessalonians'],
  },
  '1Timothy': { display: '1 Timothy', aliases: ['1tim', '1ti', '1tm', 'firsttimothy'] },
  '2Timothy': { display: '2 Timothy', aliases: ['2tim', '2ti', '2tm', 'secondtimothy'] },
  Titus: { display: 'Titus', aliases: ['tit', 'ti'] },
  Philemon: { display: 'Philemon', aliases: ['philem', 'phm', 'pm'] },
  Hebrews: { display: 'Hebrews', aliases: ['heb', 'hb'] },
  James: { display: 'James', aliases: ['jas', 'jm'] },
  '1Peter': { display: '1 Peter', aliases: ['1pet', '1pe', '1pt', '1p', 'ipeter', 'firstpeter'] },
  '2Peter': { display: '2 Peter', aliases: ['2pet', '2pe', '2pt', '2p', 'iipeter', 'secondpeter'] },
  '1John': { display: '1 John', aliases: ['1jn', '1joh', '1j', 'ijohn', 'firstjohn'] },
  '2John': { display: '2 John', aliases: ['2jn', '2joh', '2j', 'iijohn', 'secondjohn'] },
  '3John': { display: '3 John', aliases: ['3jn', '3joh', '3j', 'iiijohn', 'thirdjohn'] },
  Jude: { display: 'Jude', aliases: ['jud', 'jd'] },
  Revelation: {
    display: 'Revelation',
    aliases: ['rev', 're', 'rv', 'revelations', 'apocalypse', 'revelationofjohn', 'theapocalypse'],
  },
} as const satisfies Record<string, BookEntry>

/** The union of the 66 file stems, for example 'Genesis' | '1Samuel' | 'Revelation'. */
export type BookStem = keyof typeof BOOKS

/**
 * Canonical reading order. `satisfies readonly BookStem[]` proves every entry is a
 * real stem, so a typo fails the type check instead of failing at runtime.
 */
export const BOOK_ORDER = [
  'Genesis',
  'Exodus',
  'Leviticus',
  'Numbers',
  'Deuteronomy',
  'Joshua',
  'Judges',
  'Ruth',
  '1Samuel',
  '2Samuel',
  '1Kings',
  '2Kings',
  '1Chronicles',
  '2Chronicles',
  'Ezra',
  'Nehemiah',
  'Esther',
  'Job',
  'Psalms',
  'Proverbs',
  'Ecclesiastes',
  'SongofSolomon',
  'Isaiah',
  'Jeremiah',
  'Lamentations',
  'Ezekiel',
  'Daniel',
  'Hosea',
  'Joel',
  'Amos',
  'Obadiah',
  'Jonah',
  'Micah',
  'Nahum',
  'Habakkuk',
  'Zephaniah',
  'Haggai',
  'Zechariah',
  'Malachi',
  'Matthew',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Romans',
  '1Corinthians',
  '2Corinthians',
  'Galatians',
  'Ephesians',
  'Philippians',
  'Colossians',
  '1Thessalonians',
  '2Thessalonians',
  '1Timothy',
  '2Timothy',
  'Titus',
  'Philemon',
  'Hebrews',
  'James',
  '1Peter',
  '2Peter',
  '1John',
  '2John',
  '3John',
  'Jude',
  'Revelation',
] as const satisfies readonly BookStem[]

/** Fold a book reference to a compact comparison key, for example '1 sam.' to '1sam'. */
export function normaliseBookKey(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
}

const ALIAS_TO_STEM: ReadonlyMap<string, BookStem> = (() => {
  const table = new Map<string, BookStem>()
  for (const [stem, entry] of Object.entries(BOOKS) as [BookStem, BookEntry][]) {
    for (const name of [stem, entry.display, ...entry.aliases]) {
      table.set(normaliseBookKey(name), stem)
    }
  }
  return table
})()

export function displayName(stem: BookStem): string {
  return BOOKS[stem].display
}

/**
 * Resolve a loose book reference to a stem.
 *
 * An exact match wins. Otherwise a unique prefix is accepted, so 'thess' lands on
 * the two Thessalonians as an ambiguity rather than a guess.
 */
export function resolveBook(name: string): BookStem {
  const key = normaliseBookKey(name)
  const exact = ALIAS_TO_STEM.get(key)
  if (exact) return exact

  const hits = new Set<BookStem>()
  for (const [alias, stem] of ALIAS_TO_STEM) {
    if (alias.startsWith(key)) hits.add(stem)
  }

  const only = hits.size === 1 ? [...hits][0] : undefined
  if (only) return only

  if (hits.size > 1) {
    const options = [...hits].map(displayName).sort().join(', ')
    throw new Error(`'${name}' is ambiguous. Did you mean: ${options}?`)
  }
  throw new Error(`Unknown book: '${name}'`)
}
