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
    revision: number
    styles: LegacyStyleAsset[]
    scripts: LegacyScriptAsset[]
}
