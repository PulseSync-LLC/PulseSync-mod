import type { PulseSyncAddonApi, PulseSyncApi } from '../contracts'
import { ISOLATED_API_METHOD_SET } from '../addons/isolated/apiPolicy'
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

export class IsolatedBridge {
    readonly pulsesyncApi: PulseSyncApi
    readonly addonApi: PulseSyncAddonApi

    private readonly init: IsolatedInit
    private readonly allowedMethods: ReadonlySet<string>
    private readonly pendingCalls = new Map<number, PendingCall>()
    private readonly settingsListeners = new Set<(value: unknown) => void>()
    private currentSettings: unknown
    private nextRequestId = 0
    private started = false
    private disposed = false

    constructor(init: IsolatedInit) {
        this.init = init
        this.allowedMethods = ISOLATED_API_METHOD_SET
        this.currentSettings = init.initialSettings ?? {}

        const settingsStore = Object.freeze({
            getCurrent: () => this.currentSettings,
            onChange: (listener: (value: unknown) => void) => {
                if (typeof listener !== 'function') return () => {}
                this.settingsListeners.add(listener)
                return () => this.settingsListeners.delete(listener)
            },
        })

        this.pulsesyncApi = Object.freeze(
            new Proxy(Object.create(null) as PulseSyncApi, {
                get: (_target, property) => {
                    if (property === 'getSettings') {
                        return (addonId?: unknown) => {
                            if (addonId !== undefined && String(addonId) !== init.addon.id) {
                                throw new Error('PulseSync addon can only access its own settings')
                            }
                            return settingsStore
                        }
                    }
                    if (property === 'then' || typeof property !== 'string' || !this.allowedMethods.has(property)) return undefined
                    return (...args: unknown[]) => this.callApi(property, args)
                },
                has: (_target, property) => property === 'getSettings' || (typeof property === 'string' && this.allowedMethods.has(property)),
            }),
        )

        this.addonApi = Object.freeze({
            addonId: init.addon.id,
            pulsesyncApi: this.pulsesyncApi,
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
        this.dispatch('status', { type: 'log', level, args })
    }

    private dispatch(kind: 'request' | 'status', value: unknown) {
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

        this.currentSettings = message.value ?? {}
        this.settingsListeners.forEach(listener => listener(this.currentSettings))
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

        if (this.started) {
            document.removeEventListener(this.eventName('response'), this.handleResponse)
            document.removeEventListener(this.eventName('settings'), this.handleSettings)
            window.removeEventListener('error', this.handleWindowError)
            window.removeEventListener('unhandledrejection', this.handleUnhandledRejection)
        }

        this.pendingCalls.forEach(pending => {
            window.clearTimeout(pending.timeout)
            pending.reject(new Error('PulseSync isolated addon disposed'))
        })
        this.pendingCalls.clear()
        this.settingsListeners.clear()
    }
}
