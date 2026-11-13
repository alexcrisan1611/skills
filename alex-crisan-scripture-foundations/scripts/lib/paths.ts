import { existsSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { homedir } from 'node:os'

/** The two bundled data sets. */
export type DataKind = 'bible' | 'strongs'

/** Directory names to probe under the home directory and the working directory. */
const HOME_DIR_NAMES = {
  bible: ['bible-kjv', 'Bible-kjv', 'kjv'],
  strongs: ['strongs', 'strongs-dictionary', 'bible-strongs'],
} as const satisfies Record<DataKind, readonly string[]>

/** Environment variable that overrides the search for each data set. */
const ENV_VARS = {
  bible: 'KJV_DIR',
  strongs: 'STRONGS_DIR',
} as const satisfies Record<DataKind, string>

/** How to recognise a directory that holds the data. */
const PROBES = {
  bible: (dir: string) => listJsonFiles(dir).length > 0,
  strongs: (dir: string) => existsSync(join(dir, 'greek')) || existsSync(join(dir, 'hebrew')),
} as const satisfies Record<DataKind, (dir: string) => boolean>

function listJsonFiles(dir: string): string[] {
  if (!existsSync(dir)) return []
  try {
    return readdirSync(dir).filter((name) => name.endsWith('.json'))
  } catch {
    return []
  }
}

/**
 * Walk up from this file to the repository root, so a checkout works with no
 * configuration. A checkout keeps the data at `<repo>/data/<kind>`.
 */
function repoCandidates(kind: DataKind): string[] {
  const found: string[] = []
  let current = resolve(import.meta.dir)
  for (;;) {
    found.push(join(current, 'data', kind))
    const parent = dirname(current)
    if (parent === current) break
    current = parent
  }
  return found
}

function candidatesFor(kind: DataKind, explicit?: string): string[] {
  const home = homedir()
  const cwd = process.cwd()
  const names = HOME_DIR_NAMES[kind]
  return [
    explicit,
    process.env[ENV_VARS[kind]],
    ...names.map((name) => join(home, name)),
    ...names.map((name) => join(cwd, name)),
    join(cwd, 'data', kind),
    ...repoCandidates(kind),
  ].filter((value): value is string => typeof value === 'string' && value.length > 0)
}

/**
 * Find the directory that holds one data set.
 *
 * Throws with the full list of places that were tried, because a silent failure
 * here is the most confusing failure in the repository.
 */
export function findDataDir(kind: DataKind, explicit?: string): string {
  const tried = candidatesFor(kind, explicit)
  const probe = PROBES[kind]
  for (const candidate of tried) {
    if (probe(candidate)) return candidate
  }
  throw new Error(
    `Could not find the ${kind} data directory. Point at it with --dir or ` +
      `$${ENV_VARS[kind]}.\nTried:\n  ${tried.join('\n  ')}`,
  )
}

/** Report the resolved directory without throwing. Useful for diagnostics. */
export function describeDataDir(kind: DataKind, explicit?: string): string {
  const tried = candidatesFor(kind, explicit)
  const probe = PROBES[kind]
  const hit = tried.find((candidate) => probe(candidate))
  return hit ?? `not found (tried ${tried.length} locations)`
}
