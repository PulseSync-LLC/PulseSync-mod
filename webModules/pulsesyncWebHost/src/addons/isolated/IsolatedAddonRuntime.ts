import { getPulseSyncApi } from '../../runtime/pulsesyncApi'
import { createStorageHandler } from '../../runtime/addonStorage'
import type { WebHostAddonAsset } from '../contracts'
import { ISOLATED_ADDON_SCOPED_API_METHOD_SET, ISOLATED_API_METHOD_SET } from './apiPolicy'

type AddonSettingsStore = {
    getCurrent?: () => unknown
    onChange?: (listener: (value: unknown) => void) => (() => void) | void
}

type ApiRequest = {
    requestId: number
    method: string
    args: unknown[]
    target?: 'storage'
}

type RuntimeStatus = {
    type: 'ready' | 'log' | 'error'
    category?: string
    level?: 'info' | 'warn' | 'error'
    args?: unknown[]
    message?: string
    stack?: string
}

const MAX_API_CALLS_PER_WINDOW = 300
const API_RATE_WINDOW_MS = 10_000
const ADDON_REGISTRATION_TIMEOUT_MS = 10_000
const ISOLATED_SUBSCRIPTIONS = {
    'current-track': { methodName: 'onCurrentTrackChange', eventType: 'current-track-change' },
    'page-entity': { methodName: 'onPageEntityChange', eventType: 'page-entity-change' },
    'player-snapshot': { methodName: 'onPlayerSnapshotChange', eventType: 'player-snapshot-change' },
    queue: { methodName: 'onQueueChange', eventType: 'queue-change' },
    route: { methodName: 'onRouteChange', eventType: 'route-change' },
} as const

function toTransportValue(value: unknown, depth = 0, seen = new WeakSet<object>()): unknown {
    if (value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value
    if (typeof value === 'bigint') return value.toString()
    if (typeof value === 'function' || typeof value === 'symbol') return undefined
    if (depth >= 8 || typeof value !== 'object') return null
    if (seen.has(value)) return null
    seen.add(value)

    if (Array.isArray(value)) return value.slice(0, 500).map(item => toTransportValue(item, depth + 1, seen))
    if (value instanceof Date) return value.toISOString()
    if (value instanceof Error) {
        return {
            name: value.name,
            message: value.message,
            stack: value.stack,
            ...(value.cause !== undefined ? { cause: toTransportValue(value.cause, depth + 1, seen) } : {}),
        }
    }

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
    private readonly storage: ReturnType<typeof createStorageHandler>
    private readonly channelToken = crypto.randomUUID()
    private style?: HTMLStyleElement
    private settingsCleanup?: () => void
    private readonly subscriptionCleanups = new Map<string, () => void>()
    private currentSettings: unknown = {}
    private destroyed = false
    private apiCallWindowStartedAt = 0
    private apiCallCount = 0
    private readonly registrationPromise: Promise<void>
    private resolveRegistration!: () => void
    private rejectRegistration!: (error: Error) => void
    private registrationSettled = false

    constructor(addon: WebHostAddonAsset) {
        this.addon = addon
        this.storage = createStorageHandler(addon.id, () => !this.destroyed)
        this.registrationPromise = new Promise((resolve, reject) => {
            this.resolveRegistration = resolve
            this.rejectRegistration = reject
        })
        void this.registrationPromise.catch(() => {})
    }

    private eventName(kind: 'request' | 'response' | 'settings' | 'subscription' | 'event' | 'dispose' | 'status') {
        return `pulsesync-isolated:${this.channelToken}:${kind}`
    }

    private dispatch(kind: 'response' | 'settings' | 'event' | 'dispose', value: unknown) {
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

    private handleSubscription(event: Event) {
        if (this.destroyed) return
        const message = parseEventDetail<{ event?: unknown; active?: unknown }>(event)
        if (typeof message?.event !== 'string' || !(message.event in ISOLATED_SUBSCRIPTIONS)) return

        const eventName = message.event as keyof typeof ISOLATED_SUBSCRIPTIONS
        const subscription = ISOLATED_SUBSCRIPTIONS[eventName]
        const api = getPulseSyncApi()
        this.subscriptionCleanups.get(eventName)?.()
        this.subscriptionCleanups.delete(eventName)
        if (message.active !== true) return

        const subscribe = api?.[subscription.methodName]
        if (typeof subscribe !== 'function') return
        const cleanup = Reflect.apply(subscribe, api, [
            (value: unknown) => this.dispatch('event', { type: subscription.eventType, value: toTransportValue(value) }),
        ])
        if (typeof cleanup === 'function') this.subscriptionCleanups.set(eventName, cleanup as () => void)
    }

    private async handleApiRequest(event: Event) {
        if (this.destroyed) return
        const request = parseEventDetail<ApiRequest>(event)
        if (!request || !Number.isSafeInteger(request.requestId) || request.requestId <= 0) return

        try {
            this.checkApiRateLimit()
            if (!Array.isArray(request.args)) throw new Error('PulseSync addon API arguments are invalid')
            if (request.target === 'storage') {
                const value = await this.storage(request.method, request.args)
                this.dispatch('response', { requestId: request.requestId, ok: true, value })
                return
            }
            if (request.target !== undefined) throw new Error('PulseSync addon API target is not allowed')
            if (typeof request.method !== 'string' || !ISOLATED_API_METHOD_SET.has(request.method)) {
                throw new Error(`PulseSync addon API method is not allowed: ${String(request.method)}`)
            }

            const api = getPulseSyncApi()
            const method = api?.[request.method]
            if (typeof method !== 'function') throw new Error(`PulseSync addon API method is unavailable: ${request.method}`)
            const args = ISOLATED_ADDON_SCOPED_API_METHOD_SET.has(request.method) ? [...request.args, this.addon.id] : request.args
            const value = await Reflect.apply(method, api, args)
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
            if (!this.registrationSettled) {
                this.registrationSettled = true
                this.resolveRegistration()
            }
            console.info(`${prefix} ready`)
            return
        }
        if (status.type === 'log' && status.level && ['info', 'warn', 'error'].includes(status.level) && Array.isArray(status.args)) {
            console[status.level](prefix, ...status.args.slice(0, 20))
            return
        }
        if (status.type === 'error') {
            const category = String(status.category ?? 'addon-execution-failed')
            const message = String(status.message ?? 'Unknown isolated addon error').slice(0, 2_000)
            if (!this.registrationSettled) {
                this.registrationSettled = true
                this.rejectRegistration(new Error(`${category}: ${message}`))
            }
            console.error(`${prefix} ${category}: ${message}`, String(status.stack ?? '').slice(0, 8_000))
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
        const executeIsolatedAddon = window.pulseSyncWebHost?.executeIsolatedAddon
        if (typeof executeIsolatedAddon !== 'function') throw new Error('PulseSync isolated addon bridge is unavailable')

        this.installStyle()
        this.subscribeSettings()
        document.addEventListener(this.eventName('request'), this.handleApiRequestBound)
        document.addEventListener(this.eventName('subscription'), this.handleSubscriptionBound)
        document.addEventListener(this.eventName('status'), this.handleStatusBound)

        try {
            await executeIsolatedAddon(this.addon.id, this.channelToken)
        } finally {
            // The isolated world may start listening only after destroy() sent its first dispose event.
            if (this.destroyed) this.runCleanup('late isolated runtime', () => this.dispatch('dispose', {}))
        }
        if (this.destroyed) return

        let timeout = 0
        try {
            await Promise.race([
                this.registrationPromise,
                new Promise<never>((_resolve, reject) => {
                    timeout = window.setTimeout(
                        () => reject(new Error(`addon-registration-failed: addon registration timed out after ${ADDON_REGISTRATION_TIMEOUT_MS}ms`)),
                        ADDON_REGISTRATION_TIMEOUT_MS,
                    )
                }),
            ])
        } finally {
            if (timeout) window.clearTimeout(timeout)
        }

        if (this.destroyed) return
        this.dispatch('settings', { value: this.currentSettings })
    }

    private readonly handleApiRequestBound = (event: Event) => void this.handleApiRequest(event)
    private readonly handleSubscriptionBound = (event: Event) => this.handleSubscription(event)
    private readonly handleStatusBound = (event: Event) => this.handleStatus(event)

    private runCleanup(resource: string, cleanup: () => unknown) {
        const reportError = (error: unknown) => console.warn(`[PulseSync isolated addon: ${this.addon.id}] Failed to clean up ${resource}:`, error)
        try {
            void Promise.resolve(cleanup()).catch(reportError)
        } catch (error) {
            reportError(error)
        }
    }

    destroy() {
        if (this.destroyed) return
        this.destroyed = true
        if (!this.registrationSettled) {
            this.registrationSettled = true
            this.rejectRegistration(new Error('addon-registration-failed: isolated addon was destroyed before registration'))
        }
        document.removeEventListener(this.eventName('request'), this.handleApiRequestBound)
        document.removeEventListener(this.eventName('subscription'), this.handleSubscriptionBound)
        document.removeEventListener(this.eventName('status'), this.handleStatusBound)
        this.runCleanup('isolated runtime', () => this.dispatch('dispose', {}))
        const settingsCleanup = this.settingsCleanup
        this.settingsCleanup = undefined
        if (settingsCleanup) this.runCleanup('settings subscription', settingsCleanup)
        const subscriptionCleanups = [...this.subscriptionCleanups.entries()]
        this.subscriptionCleanups.clear()
        for (const [event, cleanup] of subscriptionCleanups) this.runCleanup(`${event} subscription`, cleanup)
        this.runCleanup('track replacements', () => {
            const api = getPulseSyncApi()
            const clearTrackReplacements = api?.clearTrackReplacements
            if (typeof clearTrackReplacements === 'function') return Reflect.apply(clearTrackReplacements, api, [this.addon.id])
        })
        const style = this.style
        this.style = undefined
        this.runCleanup('stylesheet', () => style?.remove())
    }
}
