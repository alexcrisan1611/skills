/**
 * Tiny argument parser.
 *
 * The two CLIs in this skill have simple needs: positional references, a handful of
 * flags that take a value, and a couple of switches. A full parser library would be
 * more code than it saves, but the call sites still deserve types.
 *
 * Value flags and switch flags are declared separately for a reason. A switch such as
 * `--regex` must be nameable in the type system without the parser consuming the next
 * token as its value.
 */

export type ParsedArgs<TFlag extends string> = {
  readonly positionals: readonly string[]
  /** Every value given for a flag that may repeat. */
  all(name: TFlag): readonly string[]
  /** The last value given for a flag. */
  last(name: TFlag): string | undefined
  /** The last value as an integer, or undefined when absent or not a number. */
  int(name: TFlag): number | undefined
  /** True when the switch appears at all. */
  has(name: TFlag): boolean
}

/** Always permitted, so `--help` works at any level. */
const ALWAYS_ALLOWED = 'help'

/**
 * Parse argv.
 *
 * A token of the form `--name=value` always assigns a value. A bare `--name` assigns
 * the following token when that token does not itself look like a flag and the name is
 * declared in `valueFlags`. Everything else is a positional.
 *
 * Throws on a flag that was not declared, because a silently ignored typo such as
 * `--limt 5` is worse than an error.
 */
export function parseArgs<TValue extends string, TSwitch extends string = never>(
  argv: readonly string[],
  valueFlags: readonly TValue[] = [],
  switchFlags: readonly TSwitch[] = [],
): ParsedArgs<TValue | TSwitch> {
  type Flag = TValue | TSwitch

  const positionals: string[] = []
  const flags = new Map<Flag, string[]>()
  const takesValue = new Set<string>(valueFlags)
  const known = new Set<string>([...valueFlags, ...switchFlags, ALWAYS_ALLOWED])

  const assign = (name: Flag, value: string): void => {
    const existing = flags.get(name)
    if (existing) existing.push(value)
    else flags.set(name, [value])
  }

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]
    if (token === undefined) continue

    if (token === '--') {
      positionals.push(...argv.slice(i + 1))
      break
    }

    if (!token.startsWith('--')) {
      positionals.push(token)
      continue
    }

    const body = token.slice(2)
    const equals = body.indexOf('=')
    const name = equals === -1 ? body : body.slice(0, equals)

    if (!known.has(name)) {
      throw new Error(`Unknown flag: --${name}`)
    }

    if (equals !== -1) {
      assign(name as Flag, body.slice(equals + 1))
      continue
    }

    const next = argv[i + 1]
    if (takesValue.has(name) && next !== undefined && !next.startsWith('--')) {
      assign(name as Flag, next)
      i += 1
    } else {
      assign(name as Flag, 'true')
    }
  }

  const all = (name: Flag): readonly string[] => flags.get(name) ?? []
  const last = (name: Flag): string | undefined => all(name).at(-1)
  const has = (name: Flag): boolean => flags.has(name)
  const int = (name: Flag): number | undefined => {
    const raw = last(name)
    if (raw === undefined) return undefined
    const parsed = Number.parseInt(raw, 10)
    return Number.isNaN(parsed) ? undefined : parsed
  }

  return { positionals, all, last, int, has }
}

/** Print a message and stop the process with a non-zero status. */
export function fail(message: string): never {
  console.error(message)
  process.exit(1)
}
