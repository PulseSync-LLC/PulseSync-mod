import type { AddonStorage, StorageValue } from '../contracts'

type StorageMethod = 'get' | 'set' | 'remove' | 'keys' | 'clear'
type StorageRequest = (method: StorageMethod, args: unknown[]) => Promise<unknown>

function requireKey(key: unknown): string {
    if (typeof key !== 'string' || !key.length) throw new TypeError('Storage key must be a non-empty string')
    return key
}

function serialize(value: StorageValue): string {
    return JSON.stringify(value, (_key, item: unknown) => {
        if (item === null || typeof item === 'string' || typeof item === 'boolean') return item
        if (typeof item === 'number' && Number.isFinite(item)) return item
        if (Array.isArray(item)) return item
        if (typeof item === 'object' && (Object.getPrototypeOf(item) === Object.prototype || Object.getPrototypeOf(item) === null)) return item
        throw new TypeError('Storage value must be JSON serializable')
    })
}

export function createAddonStorage(request: StorageRequest): AddonStorage {
    return Object.freeze({
        async get<T = unknown>(key: string): Promise<T | undefined> {
            const value = await request('get', [requireKey(key)])
            return value === null ? undefined : (JSON.parse(value as string) as T)
        },
        async set(key: string, value: StorageValue) {
            await request('set', [requireKey(key), serialize(value)])
        },
        async remove(key: string) {
            await request('remove', [requireKey(key)])
        },
        async keys() {
            return (await request('keys', [])) as string[]
        },
        async clear() {
            await request('clear', [])
        },
    })
}

export function createStorageHandler(addonId: string, isActive: () => boolean) {
    const prefix = `pulsesync:addon-storage:${JSON.stringify(addonId)}:`

    return async (method: string, args: unknown[]): Promise<unknown> => {
        if (!isActive()) throw new Error('Addon storage is unavailable after disposal')
        const expectedArgs = method === 'set' ? 2 : method === 'get' || method === 'remove' ? 1 : method === 'keys' || method === 'clear' ? 0 : -1
        if (args.length !== expectedArgs) throw new TypeError('Invalid storage operation or arguments')
        const key = expectedArgs > 0 ? prefix + requireKey(args[0]) : ''
        const storage = window.localStorage

        switch (method) {
            case 'get':
                return storage.getItem(key)
            case 'set': {
                if (typeof args[1] !== 'string') throw new TypeError('Storage value must be serialized JSON')
                JSON.parse(args[1])
                storage.setItem(key, args[1])
                return
            }
            case 'remove':
                storage.removeItem(key)
                return
            case 'keys':
            case 'clear': {
                const keys: string[] = []
                for (let index = 0; index < storage.length; index++) {
                    const storedKey = storage.key(index)
                    if (storedKey?.startsWith(prefix)) keys.push(storedKey.slice(prefix.length))
                }
                if (method === 'keys') return keys
                for (const storedKey of keys) storage.removeItem(prefix + storedKey)
            }
        }
    }
}
