import { ISOLATED_ADDON_EXECUTE_EVENT } from '../../constants'
import { getPulseSyncApi } from '../../runtime/pulsesyncApi'
import type { WebHostAddonAsset } from '../contracts'
import { ISOLATED_API_METHODS, ISOLATED_API_METHOD_SET } from './apiPolicy'

type AddonSettingsStore = {
    getCurrent?: () => unknown
    onChange?: (listener: (value: unknown) => void) => (() => void) | void
}

type ApiRequest = {
    requestId: number
    method: string
    args: unknown[]
}

type RuntimeStatus = {
    type: 'ready' | 'log' | 'error'
    level?: 'info' | 'warn' | 'error'
    args?: unknown[]
    message?: string
    stack?: string
}

const MAX_API_CALLS_PER_WINDOW = 300
const API_RATE_WINDOW_MS = 10_000

function toTransportValue(value: unknown, depth = 0, seen = new WeakSet<object>()): unknown {
    if (value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value
    if (typeof value === 'bigint') return value.toString()
    if (typeof value === 'function' || typeof value === 'symbol') return undefined
    if (depth >= 8 || typeof value !== 'object') return null
    if (seen.has(value)) return null
    seen.add(value)

    if (Array.isArray(value)) return value.slice(0, 500).map(item => toTransportValue(item, depth + 1, seen))
    if (value instanceof Date) return value.toISOString()

    const result: Record<string, unknown> = {}
    let entries: [string, unknown][] = []
    try {
        entries = Object.entries(value).slice(0, 500)
    } catch {
        return null
    }

    for (const [key, item] of entries) {
        try {
            const normalizedValue = toTransportValue(item, depth + 1, seen)
            if (normalizedValue !== undefined) result[key] = normalizedValue
        } catch {
            // Ignore getters and proxies that cannot cross the isolated-world boundary.
        }
    }
    return result
}

function parseEventDetail<T>(event: Event): T | null {
    const detail = (event as CustomEvent<unknown>).detail
    if (typeof detail !== 'string') return null
    try {
        return JSON.parse(detail) as T
    } catch {
        return null
    }
}

function getErrorMessage(error: unknown) {
    return error instanceof Error ? error.message : String(error)
}

export class IsolatedAddonRuntime {
    private readonly addon: WebHostAddonAsset
    private readonly channelToken = crypto.randomUUID()
    private style?: HTMLStyleElement
    private settingsCleanup?: () => void
    private currentSettings: unknown = {}
    private destroyed = false
    private apiCallWindowStartedAt = 0
    private apiCallCount = 0

    constructor(addon: WebHostAddonAsset) {
        this.addon = addon
    }

    private eventName(kind: 'request' | 'response' | 'settings' | 'dispose' | 'status') {
        return `pulsesync-isolated:${this.channelToken}:${kind}`
    }

    private dispatch(kind: 'response' | 'settings' | 'dispose', value: unknown) {
        if (this.destroyed && kind !== 'dispose') return
        document.dispatchEvent(new CustomEvent(this.eventName(kind), { detail: JSON.stringify(value) }))
    }

    private getSettingsStore(): AddonSettingsStore | undefined {
        const api = getPulseSyncApi()
        const getSettings = api?.getSettings
        if (typeof getSettings !== 'function') return undefined
        return Reflect.apply(getSettings, api, [this.addon.id]) as AddonSettingsStore
    }

    private readSettings() {
        try {
            return toTransportValue(this.getSettingsStore()?.getCurrent?.() ?? {})
        } catch (error) {
            console.warn(`[PulseSync isolated addon: ${this.addon.id}] Failed to read settings:`, error)
            return {}
        }
    }

    private subscribeSettings() {
        this.currentSettings = this.readSettings()
        try {
            const cleanup = this.getSettingsStore()?.onChange?.(value => {
                this.currentSettings = toTransportValue(value)
                this.dispatch('settings', { value: this.currentSettings })
            })
            if (typeof cleanup === 'function') this.settingsCleanup = cleanup
        } catch (error) {
            console.warn(`[PulseSync isolated addon: ${this.addon.id}] Failed to subscribe to settings:`, error)
        }
    }

    private checkApiRateLimit() {
        const now = Date.now()
        if (now - this.apiCallWindowStartedAt >= API_RATE_WINDOW_MS) {
            this.apiCallWindowStartedAt = now
            this.apiCallCount = 0
        }
        this.apiCallCount += 1
        if (this.apiCallCount > MAX_API_CALLS_PER_WINDOW) throw new Error('PulseSync addon API rate limit exceeded')
    }

    private async handleApiRequest(event: Event) {
        const request = parseEventDetail<ApiRequest>(event)
        if (!request || !Number.isSafeInteger(request.requestId) || request.requestId <= 0) return

        try {
            this.checkApiRateLimit()
            if (typeof request.method !== 'string' || !ISOLATED_API_METHOD_SET.has(request.method)) {
                throw new Error(`PulseSync addon API method is not allowed: ${String(request.method)}`)
            }
            if (!Array.isArray(request.args)) throw new Error('PulseSync addon API arguments are invalid')

            const api = getPulseSyncApi()
            const method = api?.[request.method]
            if (typeof method !== 'function') throw new Error(`PulseSync addon API method is unavailable: ${request.method}`)

            const value = await Reflect.apply(method, api, request.args)
            this.dispatch('response', { requestId: request.requestId, ok: true, value: toTransportValue(value) })
        } catch (error) {
            this.dispatch('response', { requestId: request.requestId, ok: false, message: getErrorMessage(error) })
        }
    }

    private handleStatus(event: Event) {
        const status = parseEventDetail<RuntimeStatus>(event)
        if (!status) return
        const prefix = `[PulseSync isolated addon: ${this.addon.id}]`
        if (status.type === 'ready') {
            console.info(`${prefix} ready`)
            return
        }
        if (status.type === 'log' && status.level && ['info', 'warn', 'error'].includes(status.level) && Array.isArray(status.args)) {
            console[status.level](prefix, ...status.args.slice(0, 20))
            return
        }
        if (status.type === 'error') {
            console.error(`${prefix} ${String(status.message ?? 'Unknown isolated addon error').slice(0, 2_000)}`, String(status.stack ?? '').slice(0, 8_000))
        }
    }

    private installStyle() {
        if (!this.addon.css.trim()) return
        const style = document.createElement('style')
        style.dataset.pulsesyncIsolatedAddon = this.addon.id
        style.textContent = this.addon.css
        ;(document.head || document.documentElement).append(style)
        this.style = style
    }

    async start() {
        if (this.destroyed) throw new Error('PulseSync isolated addon runtime was destroyed')
        const invoke = window.desktopEvents?.invoke
        if (typeof invoke !== 'function') throw new Error('PulseSync desktop events bridge is unavailable')

        this.installStyle()
        this.subscribeSettings()
        document.addEventListener(this.eventName('request'), this.handleApiRequestBound)
        document.addEventListener(this.eventName('status'), this.handleStatusBound)

        await invoke(ISOLATED_ADDON_EXECUTE_EVENT, {
            addon: {
                id: this.addon.id,
                name: this.addon.name,
                directoryName: this.addon.directoryName,
                ...(this.addon.version ? { version: this.addon.version } : {}),
            },
            code: this.addon.code,
            channelToken: this.channelToken,
            apiMethods: ISOLATED_API_METHODS,
            initialSettings: this.currentSettings,
        })

        if (this.destroyed) return
        this.dispatch('settings', { value: this.currentSettings })
    }

    private readonly handleApiRequestBound = (event: Event) => void this.handleApiRequest(event)
    private readonly handleStatusBound = (event: Event) => this.handleStatus(event)

    destroy() {
        if (this.destroyed) return
        this.dispatch('dispose', {})
        this.destroyed = true
        document.removeEventListener(this.eventName('request'), this.handleApiRequestBound)
        document.removeEventListener(this.eventName('status'), this.handleStatusBound)
        this.settingsCleanup?.()
        this.settingsCleanup = undefined
        this.style?.remove()
        this.style = undefined
    }
}
