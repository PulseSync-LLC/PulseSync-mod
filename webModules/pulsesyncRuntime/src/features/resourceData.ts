/** Bounded JSON copy shared by library registrations and hook boundaries. Never invokes getters/toJSON. */
export function copyResourceData(value: unknown, maxBytes = 2 * 1024 * 1024, omitUndefined = false): any {
    return copy(value, maxBytes, omitUndefined, false);
}
/** Trusted native DTOs may contain MobX accessors and hidden bookkeeping. Never use for addon input. */
export function copyNativeResourceData(value: unknown, maxBytes = 2 * 1024 * 1024): any {
    return copy(value, maxBytes, true, true);
}
function copy(value: unknown, maxBytes: number, omitUndefined: boolean, native: boolean): any {
    const ancestors = new Set<object>();
    let budget = maxBytes;
    const copy = (item: unknown, depth: number): any => {
        if (depth > 16 || --budget < 0) throw new RangeError('Resource data is too large or deeply nested');
        if (item === null || typeof item === 'boolean') return item;
        if (typeof item === 'string') {
            budget -= new TextEncoder().encode(item).byteLength;
            if (budget < 0) throw new RangeError('Resource data is too large');
            return item;
        }
        if (typeof item === 'number' && Number.isFinite(item)) return item;
        if (!item || typeof item !== 'object' || ancestors.has(item)) throw new TypeError('Resource data must be JSON serializable');
        if (!Array.isArray(item) && ![Object.prototype, null].includes(Object.getPrototypeOf(item))) throw new TypeError('Resource data must contain plain objects');
        ancestors.add(item);
        const output: any = Array.isArray(item) ? [] : {};
        if (Array.isArray(item) && item.length > 10000) throw new RangeError('Resource array is too large');
        for (const key of native ? Object.keys(item) : Reflect.ownKeys(item)) {
            if (Array.isArray(item) && key === 'length') continue;
            if (Array.isArray(item) && (typeof key !== 'string' || !/^(0|[1-9][0-9]*)$/.test(key)))
                throw new TypeError('Resource arrays must only contain indexed items');
            const descriptor = Object.getOwnPropertyDescriptor(item, key)!;
            if (typeof key !== 'string' || !descriptor.enumerable || (!native && !('value' in descriptor)))
                throw new TypeError('Resource data must contain data properties');
            const field = 'value' in descriptor ? descriptor.value : Reflect.get(item, key);
            if (omitUndefined && field === undefined && !Array.isArray(item)) continue;
            if (['__proto__', 'constructor', 'prototype'].includes(key)) throw new TypeError('Unsafe resource data key');
            budget -= key.length;
            output[key] = copy(field, depth + 1);
        }
        if (Array.isArray(item) && Object.keys(output).length !== item.length) throw new TypeError('Sparse resource arrays are unsupported');
        ancestors.delete(item);
        return output;
    };
    const result = copy(value, 0);
    if (new TextEncoder().encode(JSON.stringify(result)).byteLength > maxBytes) throw new RangeError('Resource data is too large');
    return result;
}
