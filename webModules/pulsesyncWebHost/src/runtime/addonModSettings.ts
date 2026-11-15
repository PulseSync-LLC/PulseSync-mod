const PRIVATE_MOD_SETTINGS = [
    'modSettings.downloader.defaultPath',
    'modSettings.downloader.customPathForSessionStorage',
    'modSettings.downloader.ytDlpCookiesBrowserSource',
    'modSettings.nativeAudioOutput.wasapiExclusiveDeviceId',
]

type ModSettingValue = string | number | boolean | null

export async function readAddonModSetting(key: unknown): Promise<ModSettingValue | undefined> {
    if (typeof key !== 'string' || !/^modSettings(?:\.[a-zA-Z][a-zA-Z\d_-]*)+$/.test(key)) {
        return undefined
    }

    if (PRIVATE_MOD_SETTINGS.some(path => key === path || key.startsWith(`${path}.`))) {
        return undefined
    }

    // The store supports dot paths, so a section may contain private settings.
    const value = await window.musicDesktop?.pulsesync.settings.get(key)

    if (value === null || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return value
    }

    return undefined
}
