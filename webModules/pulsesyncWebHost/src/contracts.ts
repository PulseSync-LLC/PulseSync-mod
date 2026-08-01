import type React from 'react'
import type { ComponentType } from 'react'
import type * as jsxRuntime from 'react/jsx-runtime'

export type Cleanup = () => void
export type PulseSyncApi = Record<string, unknown>

export type DesktopEventsBridge = {
    invoke?: <T = unknown>(event: string, ...args: unknown[]) => Promise<T>
    on?: (event: string, listener: (event: unknown, ...args: unknown[]) => void) => (() => void) | void
}

export type PulseSyncAddonComponentProps = {
    addonId: string
    api: PulseSyncAddonApi
}

export type PulseSyncAddonComponent = ComponentType<PulseSyncAddonComponentProps>

export type PulseSyncAddonMountTarget =
    | Element
    | string
    | (() => Element | null)
    | { selector: string }
    | { slot: string }

export type PulseSyncAddonMount = {
    target: PulseSyncAddonMountTarget
    component: PulseSyncAddonComponent
}

export type PulseSyncAddonDefinition = {
    id: string
    name?: string
    apiVersion?: number
    component?: PulseSyncAddonComponent
    slots?: Record<string, PulseSyncAddonComponent>
    mounts?: readonly PulseSyncAddonMount[]
    activate?: (api: PulseSyncAddonApi) => void | Cleanup
}

export type PulseSyncAddonApi = {
    readonly addonId: string
    readonly pulsesyncApi: PulseSyncApi | undefined
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
        __PS_STYLES__?: Record<string, string>
        __PS_SCRIPTS__?: Record<string, string>
        clearAll?: () => void
    }
}
