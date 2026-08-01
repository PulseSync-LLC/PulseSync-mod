import type { PulseSyncAddonApi, PulseSyncApi } from '../contracts'

export function getPulseSyncApi(): PulseSyncApi | undefined {
    return window.pulsesyncApi
}

export function createAddonApi(addonId: string): PulseSyncAddonApi {
    const log = (method: 'info' | 'warn' | 'error', args: unknown[]) => console[method](`[PulseSync addon: ${addonId}]`, ...args)

    return Object.freeze({
        addonId,
        get pulsesyncApi() {
            return getPulseSyncApi()
        },
        logger: Object.freeze({
            info: (...args: unknown[]) => log('info', args),
            warn: (...args: unknown[]) => log('warn', args),
            error: (...args: unknown[]) => log('error', args),
        }),
    })
}
