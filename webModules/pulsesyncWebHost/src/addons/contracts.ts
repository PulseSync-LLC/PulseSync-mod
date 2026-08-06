import type { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'

export type WebHostAddonAsset = {
    id: string
    name: string
    directoryName: string
    version?: string
    css: string
    code: string
}

export type WebHostAddonsSnapshot = {
    runtime: typeof ISOLATED_ADDON_RUNTIME
    hash: string
    addons: WebHostAddonAsset[]
}
