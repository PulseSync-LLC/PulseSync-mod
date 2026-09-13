export function isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function isOneOf<const T extends string>(value: unknown, choices: readonly T[]): value is T {
    return choices.some((choice) => choice === value);
}
