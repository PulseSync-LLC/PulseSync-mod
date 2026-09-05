import type {
    Cleanup,
    PulseSyncAddonApi,
    PulseSyncAddonAssets,
    PulseSyncAddonIdentity,
    PulseSyncAddonSettingsStore,
    PulseSyncApi,
    PulseSyncWebHostClient,
} from '../contracts'
import { createAddonModals } from './addonModals'

const PULSESYNC_LOCAL_ORIGIN = 'http://localhost:2007'
function normalizeFileName(value: string) {
    const fileName = String(value ?? '').trim()
    if (!fileName || fileName.includes('\0')) throw new TypeError('PulseSync addon asset file name is required')
    return fileName
}

export function createAddonIdentity(value: Partial<PulseSyncAddonIdentity> & Pick<PulseSyncAddonIdentity, 'id'>): PulseSyncAddonIdentity {
    const id = String(value.id).trim()
    return Object.freeze({
        id,
        name: String(value.name ?? id).trim() || id,
        directoryName: String(value.directoryName ?? id).trim() || id,
        ...(typeof value.version === 'string' && value.version.trim() ? { version: value.version.trim() } : {}),
    })
}

export function createAddonAssets(addonId: string): PulseSyncAddonAssets {
    const createUrl = (fileName?: string) => {
        const url = new URL(fileName ? `/assets/${encodeURIComponent(normalizeFileName(fileName))}` : '/assets', PULSESYNC_LOCAL_ORIGIN)
        url.searchParams.set('id', addonId)
        return url.toString()
    }

    const assets: PulseSyncAddonAssets = {
        url: fileName => createUrl(fileName),
        fetch: (fileName, init) => window.fetch(createUrl(fileName), init),
        async list() {
            const response = await window.fetch(createUrl())
            if (!response.ok) throw new Error(`PulseSync addon assets returned HTTP ${response.status}`)
            const payload = (await response.json()) as { files?: unknown }
            if (!payload.files || typeof payload.files !== 'object') return Object.freeze([])
            return Object.freeze(Object.keys(payload.files))
        },
    }

    return Object.freeze(assets)
}

export function createAddonSettingsStore(addonId: string, getApi: () => PulseSyncApi | undefined): PulseSyncAddonSettingsStore {
    const getStore = () => {
        const api = getApi()
        const getSettings = api?.getSettings
        if (typeof getSettings !== 'function') throw new Error('PulseSync addon settings API is unavailable')
        return Reflect.apply(getSettings, api, [addonId]) as PulseSyncAddonSettingsStore
    }

    return Object.freeze({
        getCurrent: () => getStore().getCurrent(),
        onChange(listener: (value: Record<string, unknown>) => void): Cleanup {
            const cleanup = getStore().onChange(listener)
            return typeof cleanup === 'function' ? cleanup : () => {}
        },
    })
}

export function createAddonClient(getApi: () => PulseSyncApi | undefined): PulseSyncWebHostClient {
    return Object.freeze(
        new Proxy(Object.create(null) as PulseSyncWebHostClient, {
            get: (_target, property) => {
                if (property === 'then' || typeof property !== 'string') return undefined
                const api = getApi()
                if (!api) throw new Error('PulseSync client API is unavailable')
                const value = api[property]
                if (typeof value !== 'function') return value
                return (...args: unknown[]) => {
                    const result = Reflect.apply(value, api, args)
                    return typeof result === 'function' ? result : Promise.resolve(result)
                }
            },
            has: (_target, property) => typeof property === 'string' && Boolean(getApi()?.[property]),
        }),
    )
}

export function createAddonNamespaces(
    client: PulseSyncWebHostClient,
    notificationOwnerId?: string,
    lifetime?: AbortSignal,
): Pick<PulseSyncAddonApi, 'player' | 'page' | 'router' | 'notifications' | 'toasts' | 'modals'> {
    const toasts = Object.freeze({
        show: async (message, options) => {
            lifetime?.throwIfAborted()
            await client.showToast(message, options ?? {}, notificationOwnerId)
        },
    } satisfies PulseSyncAddonApi['toasts'])
    return Object.freeze({
        player: Object.freeze({
            getSnapshot: () => client.getPlayerSnapshot(),
            onChange: listener => client.onPlayerSnapshotChange(listener),
            onQueueChange: listener => client.onQueueChange(listener),
            onTrackChange: listener => client.onCurrentTrackChange(listener),
        } satisfies PulseSyncAddonApi['player']),
        page: Object.freeze({
            getSnapshot: options => client.getPageEntity(options),
            onChange: listener => client.onPageEntityChange(listener),
        } satisfies PulseSyncAddonApi['page']),
        router: Object.freeze({
            getSnapshot: () => client.getRouteSnapshot(),
            onChange: listener => client.onRouteChange(listener),
        } satisfies PulseSyncAddonApi['router']),
        notifications: Object.freeze({
            show: toasts.show,
            info: async (message, options) => {
                lifetime?.throwIfAborted()
                await client.showNotification(message, 'info', options ?? {}, notificationOwnerId)
            },
            error: async (message, options) => {
                lifetime?.throwIfAborted()
                await client.showNotification(message, 'error', options ?? {}, notificationOwnerId)
            },
        } satisfies PulseSyncAddonApi['notifications']),
        toasts,
        modals: createAddonModals(client, notificationOwnerId, lifetime),
    })
}
