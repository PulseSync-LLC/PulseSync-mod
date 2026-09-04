import type { PulseSyncAddonApi, PulseSyncApi, PulseSyncWebHostClient } from '../contracts'
import type { PulseSyncPlayerSnapshot, PulseSyncQueueSnapshot, PulseSyncRouteSnapshot } from '@pulsesync/yamusic-types'
import { ISOLATED_API_METHOD_SET } from '../addons/isolated/apiPolicy'
import { createAddonAssets, createAddonIdentity, createAddonNamespaces } from '../runtime/addonResources'
import { createAddonNet } from '../runtime/addonNet'
import type { ApiResponse, IsolatedEventKind, IsolatedInit, IsolatedLogLevel } from './contracts'

type PendingCall = {
    resolve: (value: unknown) => void
    reject: (error: Error) => void
    timeout: number
}

const API_CALL_TIMEOUT_MS = 15_000

function parseEventDetail<T>(event: Event): T | null {
    const detail = (event as CustomEvent<unknown>).detail
    if (typeof detail !== 'string') return null

    try {
        return JSON.parse(detail) as T
    } catch {
        return null
    }
}

function toError(error: unknown): Error {
    return error instanceof Error ? error : new Error(String(error))
}

function toSerializableValue(value: unknown, depth = 0, seen = new WeakSet<object>()): unknown {
    if (value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value
    if (typeof value === 'bigint') return value.toString()
    if (typeof value === 'function' || typeof value === 'symbol' || depth >= 6 || typeof value !== 'object') return undefined
    if (seen.has(value)) return '[Circular]'
    seen.add(value)

    if (value instanceof Error) {
        return {
            name: value.name,
            message: value.message,
            stack: value.stack,
            ...(value.cause !== undefined ? { cause: toSerializableValue(value.cause, depth + 1, seen) } : {}),
        }
    }
    if (Array.isArray(value)) return value.slice(0, 100).map(item => toSerializableValue(item, depth + 1, seen))

    let entries: [string, unknown][]
    try {
        entries = Object.entries(value).slice(0, 100)
    } catch {
        return String(value)
    }

    const result: Record<string, unknown> = {}
    for (const [key, item] of entries) {
        try {
            const normalized = toSerializableValue(item, depth + 1, seen)
            if (normalized !== undefined) result[key] = normalized
        } catch {
            // Ignore getters and proxies that cannot be serialized.
        }
    }
    return result
}

function toSettings(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
}

export class IsolatedBridge {
    readonly pulsesyncApi: PulseSyncApi & PulseSyncWebHostClient
    readonly addonApi: PulseSyncAddonApi

    private readonly init: IsolatedInit
    private readonly allowedMethods: ReadonlySet<string>
    private readonly pendingCalls = new Map<number, PendingCall>()
    private readonly lifetime = new AbortController()
    private readonly settingsListeners = new Set<(value: Record<string, unknown>) => void>()
    private readonly currentTrackListeners = new Set<(track: Record<string, unknown> | null) => void>()
    private readonly pageEntityListeners = new Set<(snapshot: Record<string, unknown>) => void>()
    private readonly playerSnapshotListeners = new Set<(snapshot: PulseSyncPlayerSnapshot) => void>()
    private readonly queueListeners = new Set<(snapshot: PulseSyncQueueSnapshot) => void>()
    private readonly routeListeners = new Set<(snapshot: PulseSyncRouteSnapshot) => void>()
    private currentSettings: Record<string, unknown>
    private nextRequestId = 0
    private started = false
    private disposed = false

    constructor(init: IsolatedInit) {
        this.init = init
        this.allowedMethods = ISOLATED_API_METHOD_SET
        this.currentSettings = toSettings(init.initialSettings)
        const identity = createAddonIdentity(init.addon)

        const settingsStore = Object.freeze({
            getCurrent: () => this.currentSettings,
            onChange: (listener: (value: Record<string, unknown>) => void) => {
                if (typeof listener !== 'function') return () => {}
                this.settingsListeners.add(listener)
                return () => this.settingsListeners.delete(listener)
            },
        })

        this.pulsesyncApi = Object.freeze(
            new Proxy(Object.create(null) as PulseSyncApi & PulseSyncWebHostClient, {
                get: (_target, property) => {
                    if (property === 'getSettings') {
                        return (addonId?: unknown) => {
                            if (addonId !== undefined && String(addonId) !== init.addon.id) {
                                throw new Error('PulseSync addon can only access its own settings')
                            }
                            return settingsStore
                        }
                    }
                    if (property === 'onCurrentTrackChange')
                        return (listener: (track: Record<string, unknown> | null) => void) => this.subscribeCurrentTrack(listener)
                    if (property === 'onPageEntityChange')
                        return (listener: (snapshot: Record<string, unknown>) => void) =>
                            this.subscribeEvent('page-entity', this.pageEntityListeners, listener)
                    if (property === 'onPlayerSnapshotChange')
                        return (listener: (snapshot: PulseSyncPlayerSnapshot) => void) =>
                            this.subscribeEvent('player-snapshot', this.playerSnapshotListeners, listener)
                    if (property === 'onQueueChange')
                        return (listener: (snapshot: PulseSyncQueueSnapshot) => void) =>
                            this.subscribeEvent('queue', this.queueListeners, listener)
                    if (property === 'onRouteChange')
                        return (listener: (snapshot: PulseSyncRouteSnapshot) => void) =>
                            this.subscribeEvent('route', this.routeListeners, listener)
                    if (property === 'then' || typeof property !== 'string' || !this.allowedMethods.has(property)) return undefined
                    return (...args: unknown[]) => this.callApi(property, args)
                },
                has: (_target, property) =>
                    property === 'getSettings' ||
                    property === 'onCurrentTrackChange' ||
                    property === 'onPageEntityChange' ||
                    property === 'onPlayerSnapshotChange' ||
                    property === 'onQueueChange' ||
                    property === 'onRouteChange' ||
                    (typeof property === 'string' && this.allowedMethods.has(property)),
            }),
        )

        const namespaces = createAddonNamespaces(this.pulsesyncApi)

        this.addonApi = Object.freeze({
            addonId: init.addon.id,
            addon: identity,
            client: this.pulsesyncApi,
            pulsesyncApi: this.pulsesyncApi,
            ...namespaces,
            settings: settingsStore,
            assets: createAddonAssets(init.addon.id),
            net: createAddonNet(this.lifetime.signal),
            logger: Object.freeze({
                info: (...args: unknown[]) => this.log('info', args),
                warn: (...args: unknown[]) => this.log('warn', args),
                error: (...args: unknown[]) => this.log('error', args),
            }),
        })
    }

    eventName(kind: IsolatedEventKind) {
        return `pulsesync-isolated:${this.init.channelToken}:${kind}`
    }

    start() {
        if (this.started || this.disposed) return
        this.started = true
        document.addEventListener(this.eventName('response'), this.handleResponse)
        document.addEventListener(this.eventName('settings'), this.handleSettings)
        document.addEventListener(this.eventName('event'), this.handleEvent)
        window.addEventListener('error', this.handleWindowError)
        window.addEventListener('unhandledrejection', this.handleUnhandledRejection)
    }

    reportReady() {
        this.dispatch('status', { type: 'ready' })
    }

    reportError(category: string, error: unknown) {
        const normalizedError = toError(error)
        this.dispatch('status', { type: 'error', category, message: normalizedError.message, stack: normalizedError.stack })
    }

    log(level: IsolatedLogLevel, args: unknown[]) {
        this.dispatch('status', { type: 'log', level, args: args.map(arg => toSerializableValue(arg)) })
    }

    private dispatch(kind: 'request' | 'subscription' | 'status', value: unknown) {
        if (this.disposed) return
        document.dispatchEvent(new CustomEvent(this.eventName(kind), { detail: JSON.stringify(value) }))
    }

    private callApi(method: string, args: unknown[]) {
        if (this.disposed) return Promise.reject(new Error('PulseSync isolated addon disposed'))
        if (!this.allowedMethods.has(method)) return Promise.reject(new Error(`PulseSync addon API method is not allowed: ${method}`))

        const requestId = (this.nextRequestId += 1)
        return new Promise<unknown>((resolve, reject) => {
            const timeout = window.setTimeout(() => {
                this.pendingCalls.delete(requestId)
                reject(new Error(`PulseSync addon API call timed out: ${method}`))
            }, API_CALL_TIMEOUT_MS)
            this.pendingCalls.set(requestId, { resolve, reject, timeout })

            try {
                this.dispatch('request', { requestId, method, args })
            } catch (error) {
                this.pendingCalls.delete(requestId)
                window.clearTimeout(timeout)
                reject(toError(error))
            }
        })
    }

    private subscribeCurrentTrack(listener: (track: Record<string, unknown> | null) => void) {
        return this.subscribeEvent('current-track', this.currentTrackListeners, listener)
    }

    private subscribeEvent<T>(event: string, listeners: Set<(value: T) => void>, listener: (value: T) => void) {
        if (typeof listener !== 'function' || this.disposed) return () => {}
        const shouldSubscribe = listeners.size === 0
        listeners.add(listener)
        if (shouldSubscribe) this.dispatch('subscription', { event, active: true })

        let active = true
        return () => {
            if (!active) return
            active = false
            listeners.delete(listener)
            if (listeners.size === 0) this.dispatch('subscription', { event, active: false })
        }
    }

    private readonly handleResponse = (event: Event) => {
        const response = parseEventDetail<ApiResponse>(event)
        if (!response) return

        const pending = this.pendingCalls.get(response.requestId)
        if (!pending) return

        this.pendingCalls.delete(response.requestId)
        window.clearTimeout(pending.timeout)
        if (response.ok) pending.resolve(response.value)
        else pending.reject(new Error(response.message ?? 'PulseSync addon API call failed'))
    }

    private readonly handleSettings = (event: Event) => {
        const message = parseEventDetail<{ value?: unknown }>(event)
        if (!message) return

        this.currentSettings = toSettings(message.value)
        this.settingsListeners.forEach(listener => listener(this.currentSettings))
    }

    private readonly handleEvent = (event: Event) => {
        const message = parseEventDetail<{ type?: unknown; value?: unknown }>(event)
        if (!message) return
        if (message.type === 'current-track-change') {
            const track = message.value && typeof message.value === 'object' ? (message.value as Record<string, unknown>) : null
            this.currentTrackListeners.forEach(listener => listener(track))
        }
        if (message.type === 'page-entity-change' && message.value && typeof message.value === 'object') {
            const snapshot = message.value as Record<string, unknown>
            this.pageEntityListeners.forEach(listener => listener(snapshot))
        }
        if (message.type === 'player-snapshot-change' && message.value && typeof message.value === 'object') {
            this.playerSnapshotListeners.forEach(listener => listener(message.value as PulseSyncPlayerSnapshot))
        }
        if (message.type === 'queue-change' && message.value && typeof message.value === 'object') {
            this.queueListeners.forEach(listener => listener(message.value as PulseSyncQueueSnapshot))
        }
        if (message.type === 'route-change' && message.value && typeof message.value === 'object') {
            this.routeListeners.forEach(listener => listener(message.value as PulseSyncRouteSnapshot))
        }
    }

    private readonly handleWindowError = (event: ErrorEvent) => {
        this.dispatch('status', { type: 'error', category: 'addon-execution-failed', message: event.message, stack: event.error?.stack })
    }

    private readonly handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        const reason = event.reason
        this.dispatch('status', {
            type: 'error',
            category: 'addon-execution-failed',
            message: reason instanceof Error ? reason.message : String(reason),
            stack: reason instanceof Error ? reason.stack : undefined,
        })
    }

    dispose() {
        if (this.disposed) return
        this.disposed = true
        this.lifetime.abort(new DOMException('Addon disabled', 'AbortError'))

        if (this.started) {
            document.removeEventListener(this.eventName('response'), this.handleResponse)
            document.removeEventListener(this.eventName('settings'), this.handleSettings)
            document.removeEventListener(this.eventName('event'), this.handleEvent)
            window.removeEventListener('error', this.handleWindowError)
            window.removeEventListener('unhandledrejection', this.handleUnhandledRejection)
        }

        this.pendingCalls.forEach(pending => {
            window.clearTimeout(pending.timeout)
            pending.reject(new Error('PulseSync isolated addon disposed'))
        })
        this.pendingCalls.clear()
        this.settingsListeners.clear()
        this.currentTrackListeners.clear()
        this.pageEntityListeners.clear()
        this.playerSnapshotListeners.clear()
        this.queueListeners.clear()
        this.routeListeners.clear()
    }
}
