import { createAddonResourceHooks } from './addonResourceHooks'
import type { PulseSyncAddonApi, PulseSyncAddonIdentity, PulseSyncApi } from '../contracts'
import { createAddonAssets, createAddonClient, createAddonIdentity, createAddonNamespaces, createAddonSettingsStore } from './addonResources'
import { createAddonNet } from './addonNet'
import { createAddonLifecycle } from './addonLifecycle'
import { createAddonStorage, createStorageHandler } from './addonStorage'

export function getPulseSyncApi(): PulseSyncApi | undefined {
    return window.pulsesyncApi
}

export function installNativeSlotTooltips() {
    const api = getPulseSyncApi() as (PulseSyncApi & { enableNativeSlotTooltips?: () => () => void }) | undefined
    return api?.enableNativeSlotTooltips?.() ?? (() => {})
}

export function createAddonApi(
    addon: Partial<PulseSyncAddonIdentity> & Pick<PulseSyncAddonIdentity, 'id'>,
    lifetime: AbortSignal,
): PulseSyncAddonApi {
    const identity = createAddonIdentity(addon)
    const client = createAddonClient(getPulseSyncApi, identity.id, lifetime)
    const namespaces = createAddonNamespaces(client, identity.id, lifetime)
    lifetime.addEventListener(
        'abort',
        () => {
            const api = getPulseSyncApi()
            const clearLibrary = api?.clearLibraryOverrides
            if (typeof clearLibrary === 'function') Reflect.apply(clearLibrary, api, [identity.id])
            const clearHooks = api?.clearResourceHooks
            if (typeof clearHooks === 'function') Reflect.apply(clearHooks, api, [identity.id])
            const clearMetadata = api?.clearMetadataOverrides
            if (typeof clearMetadata === 'function') Reflect.apply(clearMetadata, api, [identity.id])
            const clear = api?.clearAddonNotifications
            if (typeof clear === 'function') Reflect.apply(clear, api, [identity.id])
            const clearModals = api?.clearAddonModals
            if (typeof clearModals === 'function') Reflect.apply(clearModals, api, [identity.id])
        },
        { once: true },
    )
    const log = (method: 'info' | 'warn' | 'error', args: unknown[]) => console[method](`[PulseSync addon: ${identity.id}]`, ...args)

    return Object.freeze({
        addonId: identity.id,
        addon: identity,
        resources: createAddonResourceHooks(getPulseSyncApi, identity.id, lifetime),
        client,
        pulsesyncApi: client,
        ...namespaces,
        ...createAddonLifecycle(lifetime),
        settings: createAddonSettingsStore(identity.id, getPulseSyncApi),
        assets: createAddonAssets(identity.id, lifetime),
        net: createAddonNet(lifetime),
        storage: createAddonStorage(createStorageHandler(identity.id, () => !lifetime.aborted)),
        logger: Object.freeze({
            info: (...args: unknown[]) => log('info', args),
            warn: (...args: unknown[]) => log('warn', args),
            error: (...args: unknown[]) => log('error', args),
        }),
    })
}
