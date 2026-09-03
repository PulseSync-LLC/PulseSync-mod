import type React from 'react'
import type { ComponentType } from 'react'
import type * as jsxRuntime from 'react/jsx-runtime'
import type {
    PulseSyncPageApiV1,
    PulseSyncPageEntity,
    PulseSyncPlayerApiV1,
    PulseSyncRouterApiV1,
    PulseSyncToastOptions,
    PulseSyncTrackMeta,
    PulseSyncWebHostApiV1,
} from '@pulsesync/yamusic-types'

export type Cleanup = () => void
export type PulseSyncApi = Record<string, unknown>
export type PulseSyncWebHostClient = PulseSyncWebHostApiV1

export type PulseSyncAddonIdentity = {
    id: string
    name: string
    directoryName: string
    version?: string
}

export type PulseSyncAddonSettingsStore = {
    getCurrent: () => Record<string, unknown>
    onChange: (listener: (value: Record<string, unknown>) => void) => Cleanup
}

export type PulseSyncAddonAssets = {
    list: () => Promise<readonly string[]>
    url: (fileName: string) => string
    fetch: (fileName: string, init?: RequestInit) => Promise<Response>
}

export type PulseSyncAddonNotifications = {
    show: (message: string, options?: PulseSyncToastOptions) => Promise<void>
}

export type DesktopEventsBridge = {
    invoke?: <T = unknown>(event: string, ...args: unknown[]) => Promise<T>
    on?: (event: string, listener: (event: unknown, ...args: unknown[]) => void) => (() => void) | void
}

export type PulseSyncWebHostBridge = {
    executeIsolatedAddon: (addonId: string, channelToken: string) => Promise<{ runtime: 'isolated'; worldId: number }>
}

export type PulseSyncAddonComponentProps = {
    addonId: string
    api: PulseSyncAddonApi
}

export type PulseSyncAddonComponent = ComponentType<PulseSyncAddonComponentProps>

export type PulseSyncTrackMenuContext = {
    readonly id: string
    readonly url: string
    readonly albumId?: string
    readonly title?: string
}

export type TrackMenuItemContext = {
    readonly api: PulseSyncAddonApi
    readonly track: PulseSyncTrackMenuContext
}

export type TrackMenuItemDefinition = {
    readonly id: string
    readonly label: string
    readonly icon: string
    readonly position?: number | 'start' | 'end'
    readonly onClick: (context: TrackMenuItemContext) => void | Promise<void>
}

export type PulseSyncAddonSlotComponentProps = PulseSyncAddonComponentProps & {
    slot: string
    currentTrack?: PulseSyncTrackMeta | null
    pageEntity?: PulseSyncPageEntity | null
    track?: PulseSyncTrackMenuContext
}

export type PulseSyncAddonSlotComponent = ComponentType<PulseSyncAddonSlotComponentProps>

export type PulseSyncAddonMountTarget = Element | string | (() => Element | null) | { selector: string } | { slot: string }

export type PulseSyncAddonMount = {
    target: PulseSyncAddonMountTarget
    component: PulseSyncAddonComponent
}

export type PulseSyncAddonDefinition = {
    id: string
    name?: string
    apiVersion?: number
    component?: PulseSyncAddonComponent
    slots?: Record<string, PulseSyncAddonSlotComponent>
    trackMenuItems?: readonly TrackMenuItemDefinition[]
    mounts?: readonly PulseSyncAddonMount[]
    activate?: (api: PulseSyncAddonApi) => void | Cleanup
}

export type PulseSyncAddonApi = {
    readonly addonId: string
    readonly addon: PulseSyncAddonIdentity
    readonly client: PulseSyncWebHostClient
    readonly pulsesyncApi: PulseSyncWebHostClient
    readonly player: PulseSyncPlayerApiV1
    readonly page: PulseSyncPageApiV1
    readonly router: PulseSyncRouterApiV1
    readonly notifications: PulseSyncAddonNotifications
    readonly settings: PulseSyncAddonSettingsStore
    readonly assets: PulseSyncAddonAssets
    logger: {
        info: (...args: unknown[]) => void
        warn: (...args: unknown[]) => void
        error: (...args: unknown[]) => void
    }
}

export type PulseSyncAddonFactory = (host: PulseSyncWebHostApi) => void | PulseSyncAddonDefinition | Promise<void | PulseSyncAddonDefinition>

export type PulseSyncWebHostApi = {
    readonly apiVersion: number
    readonly React: typeof React
    readonly jsxRuntime: typeof jsxRuntime
    readonly jsxDevRuntime?: typeof import('react/jsx-dev-runtime')
    installAddon: (factory: PulseSyncAddonFactory) => Promise<Cleanup | undefined>
    registerAddon: (definition: PulseSyncAddonDefinition) => Cleanup
    unregisterAddon: (addonId: string) => boolean
    registerSlot: (slotName: string, element: Element) => Cleanup
    getPulseSyncApi: () => PulseSyncApi | undefined
}

declare global {
    interface Window {
        __PULSESYNC_WEB_HOST__?: PulseSyncWebHostApi
        __PULSESYNC_ADDON_QUEUE__?: PulseSyncAddonFactory[]
        pulsesyncApi?: PulseSyncApi
        desktopEvents?: DesktopEventsBridge
        pulseSyncWebHost?: PulseSyncWebHostBridge
        __PS_STYLES__?: Record<string, string>
        __PS_SCRIPTS__?: Record<string, string>
        clearAll?: () => void
    }
}
