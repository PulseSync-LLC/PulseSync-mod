import type { LEGACY_ADDON_RUNTIME } from '../runtimeModes'

export type LegacyStyleAsset = {
    id: string
    css: string
}

export type LegacyScriptAsset = {
    id: string
    code: string
    kind: 'addon' | 'theme'
}

export type LegacyAssetsSnapshot = {
    runtime: typeof LEGACY_ADDON_RUNTIME
    revision: number
    styles: LegacyStyleAsset[]
    scripts: LegacyScriptAsset[]
}
