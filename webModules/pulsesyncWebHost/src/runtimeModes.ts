export const LEGACY_ADDON_RUNTIME = 'legacy' as const
export const ISOLATED_ADDON_RUNTIME = 'isolated' as const

export type AddonRuntimeMode = typeof LEGACY_ADDON_RUNTIME | typeof ISOLATED_ADDON_RUNTIME
