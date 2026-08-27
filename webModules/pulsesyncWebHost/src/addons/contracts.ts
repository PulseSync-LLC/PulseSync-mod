import type { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'

type WebHostAssetBase = {
    id: string
    name: string
    directoryName: string
    version?: string
    css: string
}

export type WebHostAddonAsset = WebHostAssetBase & {
    type: 'web-addon'
    code: string
}

export type WebHostThemeAsset = WebHostAssetBase & {
    type: 'theme'
}

export type WebHostAsset = WebHostAddonAsset | WebHostThemeAsset

export type WebHostAddonsSnapshot = {
    runtime: typeof ISOLATED_ADDON_RUNTIME
    hash: string
    addons: WebHostAsset[]
}
