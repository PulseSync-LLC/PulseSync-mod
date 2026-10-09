import type { PulseSyncResourcesApi, PulseSyncApi } from '../contracts'

export function createAddonResourceHooks(getApi: () => PulseSyncApi | undefined, ownerId: string, lifetime: AbortSignal): PulseSyncResourcesApi {
    return Object.freeze({
        async read(target, request) {
            lifetime.throwIfAborted()
            const api = getApi()
            if (typeof api?.readResource !== 'function') throw new Error('Resource reads API is unavailable')
            return Reflect.apply(api.readResource, api, [target, request, lifetime])
        },
        async getLyrics(trackId, format = 'LRC') {
            lifetime.throwIfAborted()
            const api = getApi()
            if (typeof api?.getNativeLyrics !== 'function') throw new Error('Native lyrics API is unavailable')
            return Reflect.apply(api.getNativeLyrics, api, [trackId, format, lifetime])
        },
        async registerHook(target, hooks) {
            lifetime.throwIfAborted()
            const api = getApi()
            const register = api?.registerResourceHook
            if (typeof register !== 'function') throw new Error('Resource hooks API is unavailable')
            const unregister = Reflect.apply(register, api, [target, hooks, ownerId]) as () => void
            let active = true
            const cleanup = () => {
                if (!active) return
                active = false
                lifetime.removeEventListener('abort', cleanup)
                unregister()
            }
            lifetime.addEventListener('abort', cleanup, { once: true })
            return cleanup
        },
    } satisfies PulseSyncResourcesApi)
}
