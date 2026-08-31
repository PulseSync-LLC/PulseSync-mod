import type { PulseSyncAddonApi, PulseSyncAddonIdentity, PulseSyncApi } from '../contracts'
import { createAddonAssets, createAddonClient, createAddonIdentity, createAddonNamespaces, createAddonSettingsStore } from './addonResources'

export function getPulseSyncApi(): PulseSyncApi | undefined {
    return window.pulsesyncApi
}

export function createAddonApi(addon: Partial<PulseSyncAddonIdentity> & Pick<PulseSyncAddonIdentity, 'id'>): PulseSyncAddonApi {
    const identity = createAddonIdentity(addon)
    const client = createAddonClient(getPulseSyncApi)
    const namespaces = createAddonNamespaces(client)
    const log = (method: 'info' | 'warn' | 'error', args: unknown[]) => console[method](`[PulseSync addon: ${identity.id}]`, ...args)

    return Object.freeze({
        addonId: identity.id,
        addon: identity,
        client,
        pulsesyncApi: client,
        ...namespaces,
        settings: createAddonSettingsStore(identity.id, getPulseSyncApi),
        assets: createAddonAssets(identity.id),
        logger: Object.freeze({
            info: (...args: unknown[]) => log('info', args),
            warn: (...args: unknown[]) => log('warn', args),
            error: (...args: unknown[]) => log('error', args),
        }),
    })
}
