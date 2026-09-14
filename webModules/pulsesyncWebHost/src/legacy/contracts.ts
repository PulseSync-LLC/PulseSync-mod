import type { LEGACY_ADDON_RUNTIME } from '../runtimeModes'

export type LegacyStyleAsset = {
    id: string
    css: string
}

export type LegacyScriptAsset = {
    id: string
    code: string
    kind: 'addon' | 'theme'
    name?: string
    fingerprint?: string
    isSystem?: boolean
}

export type LegacyAssetsSnapshot = {
    runtime: typeof LEGACY_ADDON_RUNTIME
    revision: number
    styles: LegacyStyleAsset[]
    scripts: LegacyScriptAsset[]
}
