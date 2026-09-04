import type { PulseSyncAddonApi, PulseSyncAddonIdentity, PulseSyncApi } from '../contracts'
import { createAddonAssets, createAddonClient, createAddonIdentity, createAddonNamespaces, createAddonSettingsStore } from './addonResources'
import { createAddonNet } from './addonNet'
import { createAddonStorage, createStorageHandler } from './addonStorage'

export function getPulseSyncApi(): PulseSyncApi | undefined {
    return window.pulsesyncApi
}

export function installNativeSlotTooltips() {
    const api = getPulseSyncApi() as (PulseSyncApi & { enableNativeSlotTooltips?: () => () => void }) | undefined
    return api?.enableNativeSlotTooltips?.() ?? (() => {})
}

export function createAddonApi(addon: Partial<PulseSyncAddonIdentity> & Pick<PulseSyncAddonIdentity, 'id'>, lifetime: AbortSignal): PulseSyncAddonApi {
    const identity = createAddonIdentity(addon)
    const client = createAddonClient(getPulseSyncApi)
    const namespaces = createAddonNamespaces(client, identity.id)
    const log = (method: 'info' | 'warn' | 'error', args: unknown[]) => console[method](`[PulseSync addon: ${identity.id}]`, ...args)

    return Object.freeze({
        addonId: identity.id,
        addon: identity,
        client,
        pulsesyncApi: client,
        ...namespaces,
        settings: createAddonSettingsStore(identity.id, getPulseSyncApi),
        assets: createAddonAssets(identity.id),
        net: createAddonNet(lifetime),
        storage: createAddonStorage(createStorageHandler(identity.id, () => !lifetime.aborted)),
        logger: Object.freeze({
            info: (...args: unknown[]) => log('info', args),
            warn: (...args: unknown[]) => log('warn', args),
            error: (...args: unknown[]) => log('error', args),
        }),
    })
}
