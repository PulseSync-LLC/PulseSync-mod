import type { Cleanup, PulseSyncAddonFactory, PulseSyncApi, PulseSyncWebHostApi } from '../contracts'

export type IsolatedAddonAsset = {
    id: string
    name: string
    directoryName: string
    version?: string
}

export type IsolatedInit = {
    addon: IsolatedAddonAsset
    initialSettings: unknown
    channelToken: string
}

export type IsolatedEventKind = 'request' | 'response' | 'settings' | 'dispose' | 'status'
export type IsolatedLogLevel = 'info' | 'warn' | 'error'
export type IsolatedLog = (level: IsolatedLogLevel, args: unknown[]) => void

export type ApiResponse = {
    requestId: number
    ok: boolean
    value?: unknown
    message?: string
}

export type IsolatedWindow = Window & {
    __PULSESYNC_ISOLATED_INIT__?: IsolatedInit
    __PULSESYNC_ISOLATED_RUNTIME_READY__?: boolean
    __PULSESYNC_ISOLATED_DISPOSE__?: Cleanup
    __PULSESYNC_WEB_HOST__?: PulseSyncWebHostApi
    __PULSESYNC_ADDON_QUEUE__?: PulseSyncAddonFactory[]
    pulsesyncApi?: PulseSyncApi
}
