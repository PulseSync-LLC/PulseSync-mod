export type WebHostAddonAsset = {
    id: string
    name: string
    directoryName: string
    version?: string
    css: string
    code: string
}

export type WebHostAddonsSnapshot = {
    hash: string
    addons: WebHostAddonAsset[]
}
