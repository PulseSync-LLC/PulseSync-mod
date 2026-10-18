import { copyResourceData } from '../../../../pulsesyncRuntime/src/features/resourceData'
import { getPulseSyncApi, getPulseSyncClient } from '../../runtime/pulsesyncApi'
import { scopeAddonCss } from './scopedStyle'
import { createStorageHandler } from '../../runtime/addonStorage'
import type { WebHostAddonAsset } from '../contracts'
import { ISOLATED_ADDON_SCOPED_API_METHOD_SET } from './apiPolicy'
import { createAddonDiagnosticConsole } from './addonDiagnostics'
import {
    describeDiagnosticError,
    diagnosticError,
    diagnosticFailureStatus,
    type DiagnosticError,
    type DiagnosticEvent,
    type DiagnosticStage,
} from '../../runtime/addonDiagnostics'
import type { IsolatedEventKind } from '../../isolated/contracts'

type AddonSettingsStore = {
    getCurrent?: () => unknown
    onChange?: (listener: (value: unknown) => void) => (() => void) | void
}

type ApiRequest = {
    requestId: number
    method: string
    args: unknown[]
    target?: 'storage' | 'resources'
}

type RuntimeStatus = {
    type: 'registered' | 'ready' | 'log' | 'error' | 'diagnostic' | 'diagnostic-ready'
    event?: DiagnosticEvent
    events?: DiagnosticEvent[]
    error?: DiagnosticError
    category?: string
    level?: 'info' | 'warn' | 'error'
    args?: unknown[]
    message?: string
    stack?: string
}

export type IsolatedAddonFailure = {
    category: string
    message: string
    stack?: string
}

const MAX_API_CALLS_PER_WINDOW = 300
const RUNTIME_FAILURE_WINDOW_MS = 10_000
const RUNTIME_FAILURE_THRESHOLD = 3
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
    if (
        value === null ||
        value === undefined ||
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
    ) {
        return value
    }

    if (typeof value === 'bigint') {
        return value.toString()
    }

    if (typeof value === 'function' || typeof value === 'symbol') {
        return undefined
    }

    if (depth >= 8 || typeof value !== 'object') {
        return null
    }

    if (seen.has(value)) {
        return null
    }

    seen.add(value)

    if (Array.isArray(value)) {
        return value.slice(0, 500).map(item => toTransportValue(item, depth + 1, seen))
    }

    if (value instanceof Date) {
        return value.toISOString()
    }

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

            if (normalizedValue !== undefined) {
                result[key] = normalizedValue
            }
        } catch {
            // Ignore getters and proxies that cannot cross the isolated-world boundary.
        }
    }

    return result
}

function parseEventDetail<T>(event: Event): T | null {
    const detail = (event as CustomEvent<unknown>).detail

    if (typeof detail !== 'string') {
        return null
    }

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
    private readonly diagnostics: ReturnType<typeof createAddonDiagnosticConsole>
    private style?: HTMLStyleElement
    private settingsCleanup?: () => void
    private readonly subscriptionCleanups = new Map<string, () => void>()
    private currentSettings: unknown = {}
    private readonly resourceHooks = new Map<number, () => void>()
    private readonly resourceCalls = new Map<
        number,
        { hookId: number; resolve: (value: unknown) => void; reject: (error: Error) => void; timer: number }
    >()
    private nextResourceCall = 0
    private readonly resourceLifetime = new AbortController()
    private destroyed = false
    private apiCallWindowStartedAt = 0
    private apiCallCount = 0
    private readonly registrationPromise: Promise<void>
    private resolveRegistration!: () => void
    private rejectRegistration!: (error: Error) => void
    private registrationSettled = false
    private ready = false
    private fatalReported = false
    private runtimeFailureTimestamps: number[] = []
    private readonly onFatalError?: (failure: IsolatedAddonFailure) => void

    constructor(addon: WebHostAddonAsset, onFatalError?: (failure: IsolatedAddonFailure) => void) {
        this.addon = addon
        this.diagnostics = createAddonDiagnosticConsole(addon)
        this.onFatalError = onFatalError
        this.storage = createStorageHandler(addon.id, () => !this.destroyed)
        this.registrationPromise = new Promise((resolve, reject) => {
            this.resolveRegistration = resolve
            this.rejectRegistration = reject
        })
        void this.registrationPromise.catch(() => {})
    }

    private eventName(kind: IsolatedEventKind) {
        return `pulsesync-isolated:${this.channelToken}:${kind}`
    }

    private dispatch(
        kind: 'response' | 'settings' | 'event' | 'dispose' | 'resource-call' | 'resource-cancel' | 'diagnostics',
        value: unknown,
    ) {
        if (this.destroyed && kind !== 'dispose') {
            return
        }

        document.dispatchEvent(new CustomEvent(this.eventName(kind), { detail: JSON.stringify(value) }))
    }

    private getSettingsStore(): AddonSettingsStore | undefined {
        const api = getPulseSyncApi()
        const getSettings = api?.getSettings

        if (typeof getSettings !== 'function') {
            return undefined
        }

        return Reflect.apply(getSettings, api, [this.addon.id]) as AddonSettingsStore
    }

    private readSettings() {
        try {
            return toTransportValue(this.getSettingsStore()?.getCurrent?.() ?? {})
        } catch (error) {
            this.diagnostics.record({
                operation: 'settings.getCurrent',
                stage: 'host',
                status: 'failed',
                error: describeDiagnosticError(error, { operation: 'settings.getCurrent', stage: 'host' }),
            })

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

            if (typeof cleanup === 'function') {
                this.settingsCleanup = cleanup
            }
        } catch (error) {
            this.diagnostics.record({
                operation: 'settings.onChange',
                stage: 'host',
                status: 'failed',
                error: describeDiagnosticError(error, { operation: 'settings.onChange', stage: 'host' }),
            })
        }
    }

    private checkApiRateLimit() {
        const now = Date.now()

        if (now - this.apiCallWindowStartedAt >= API_RATE_WINDOW_MS) {
            this.apiCallWindowStartedAt = now
            this.apiCallCount = 0
        }

        this.apiCallCount += 1

        if (this.apiCallCount > MAX_API_CALLS_PER_WINDOW) {
            throw diagnosticError(new Error('PulseSync addon API rate limit exceeded'), {
                operation: 'api.rateLimit',
                stage: 'validation',
                code: 'RATE_LIMITED',
            })
        }
    }

    private handleSubscription(event: Event) {
        if (this.destroyed) {
            return
        }

        const message = parseEventDetail<{ event?: unknown; active?: unknown }>(event)

        if (typeof message?.event !== 'string' || !(message.event in ISOLATED_SUBSCRIPTIONS)) {
            return
        }

        const eventName = message.event as keyof typeof ISOLATED_SUBSCRIPTIONS
        const subscription = ISOLATED_SUBSCRIPTIONS[eventName]
        const api = getPulseSyncApi()

        this.subscriptionCleanups.get(eventName)?.()
        this.subscriptionCleanups.delete(eventName)

        if (message.active !== true) {
            return
        }

        const subscribe = api?.[subscription.methodName]

        if (typeof subscribe !== 'function') {
            return
        }

        const cleanup = Reflect.apply(subscribe, api, [
            (value: unknown) =>
                this.dispatch('event', { type: subscription.eventType, value: toTransportValue(value) }),
        ])

        if (typeof cleanup === 'function') {
            this.subscriptionCleanups.set(eventName, cleanup as () => void)
        }
    }

    private readonly handleResourceResult = (event: Event) => {
        const response = parseEventDetail<{ callId: number; ok: boolean; value?: unknown; error?: DiagnosticError }>(
            event,
        )

        if (!response || !Number.isSafeInteger(response.callId)) {
            return
        }

        const pending = this.resourceCalls.get(response.callId)

        if (!pending) {
            return
        }

        this.resourceCalls.delete(response.callId)
        window.clearTimeout(pending.timer)

        if (response.ok) {
            try {
                pending.resolve(response.value === undefined ? undefined : copyResourceData(response.value))
            } catch (error) {
                pending.reject(error instanceof Error ? error : new Error(String(error)))
            }
        } else {
            pending.reject(
                diagnosticError(response.error ?? new Error('Isolated resource hook failed'), {
                    operation: `resources.hook.${pending.hookId}`,
                    stage: 'callback',
                    code: 'CALLBACK_FAILED',
                }),
            )
        }
    }

    private callResourceHook(hookId: number, phase: string, context: unknown, timeout: number): Promise<unknown> {
        if (this.destroyed || !this.resourceHooks.has(hookId)) {
            return Promise.reject(new Error('Resource hook disposed'))
        }

        if (this.resourceCalls.size >= 64) {
            return Promise.reject(new Error('Too many pending resource callbacks'))
        }

        const payload = copyResourceData(context)
        const callId = ++this.nextResourceCall

        return new Promise((resolve, reject) => {
            const timer = window.setTimeout(() => {
                this.resourceCalls.delete(callId)
                this.diagnostics.record({
                    operation: `resources.hook.${hookId}.${phase}`,
                    stage: 'callback',
                    status: 'timed-out',
                    data: { callId },
                })
                this.dispatch('resource-cancel', { callId })
                reject(new Error('Isolated resource hook timed out'))
            }, timeout)

            this.resourceCalls.set(callId, { hookId, resolve, reject, timer })

            try {
                this.dispatch('resource-call', { callId, hookId, phase, context: payload })
            } catch (error) {
                window.clearTimeout(timer)
                this.resourceCalls.delete(callId)
                reject(error)
            }
        })
    }

    private removeResourceHook(hookId: number) {
        this.resourceHooks.get(hookId)?.()
        this.resourceHooks.delete(hookId)

        for (const [callId, pending] of this.resourceCalls) {
            if (pending.hookId === hookId) {
                this.resourceCalls.delete(callId)
                window.clearTimeout(pending.timer)
                this.dispatch('resource-cancel', { callId })
                pending.reject(new Error('Resource hook disposed'))
            }
        }
    }

    private handleResourceControl(method: string, args: unknown[]) {
        if (method === 'read' || method === 'getLyrics') {
            const api = getPulseSyncApi(),
                handler = api?.[method === 'read' ? 'readResource' : 'getNativeLyrics']

            if (typeof handler !== 'function') {
                throw new Error('Resource reads API is unavailable')
            }

            return Reflect.apply(handler, api, [args[0], args[1], this.resourceLifetime.signal])
        }

        const hookId = args[0]

        if (!Number.isSafeInteger(hookId) || Number(hookId) <= 0) {
            throw new TypeError('Invalid hook ID')
        }

        if (method === 'unregisterHook') {
            this.removeResourceHook(Number(hookId))

            return true
        }

        if (method !== 'registerHook' || this.resourceHooks.has(Number(hookId)) || this.resourceHooks.size >= 32) {
            throw new TypeError('Invalid hook registration')
        }

        const options = args[2] as { before?: boolean; after?: boolean; timeoutMs?: number }

        if (!options || typeof options !== 'object' || (options.before !== true && options.after !== true)) {
            throw new TypeError('Invalid callback phases')
        }

        const api = getPulseSyncApi(),
            register = api?.registerResourceHook

        if (typeof register !== 'function') {
            throw new Error('Resource hooks API unavailable')
        }

        const timeout = options.timeoutMs ?? 1500
        const cleanup = Reflect.apply(register, api, [
            args[1],
            {
                ...(options.before === true
                    ? {
                          before: (context: unknown) =>
                              this.callResourceHook(Number(hookId), 'before', context, timeout),
                      }
                    : {}),
                ...(options.after === true
                    ? { after: (context: unknown) => this.callResourceHook(Number(hookId), 'after', context, timeout) }
                    : {}),
                timeoutMs: timeout,
            },
            this.addon.id,
        ]) as () => void

        this.resourceHooks.set(Number(hookId), cleanup)

        return true
    }

    private async handleApiRequest(event: Event) {
        if (this.destroyed) {
            return
        }

        const request = parseEventDetail<ApiRequest>(event)

        if (!request || !Number.isSafeInteger(request.requestId) || request.requestId <= 0) {
            return
        }

        const operation = `${typeof request.target === 'string' ? request.target : 'client'}.${typeof request.method === 'string' ? request.method : '<invalid>'}`
        let stage: DiagnosticStage = 'validation'

        const respond = (value: unknown) => {
            stage = 'transport'

            const transported = request.target ? value : toTransportValue(value)

            this.dispatch('response', { requestId: request.requestId, ok: true, value: transported })
        }

        try {
            this.checkApiRateLimit()

            if (!Array.isArray(request.args)) {
                throw new Error('PulseSync addon API arguments are invalid')
            }

            if (request.target === 'resources') {
                stage = 'host'

                const value = await this.handleResourceControl(request.method, request.args)

                respond(value)

                return
            }

            if (request.target === 'storage') {
                stage = 'host'

                const value = await this.storage(request.method, request.args)

                respond(value)

                return
            }

            if (request.target !== undefined) {
                throw new Error('PulseSync addon API target is not allowed')
            }

            const api = getPulseSyncClient()
            const method =
                typeof request.method === 'string' && api
                    ? Object.getOwnPropertyDescriptor(api, request.method)?.value
                    : undefined

            if (typeof method !== 'function') {
                throw diagnosticError(new Error(`PulseSync addon API method is unavailable: ${request.method}`), {
                    operation,
                    stage: 'host',
                    code: 'API_UNAVAILABLE',
                })
            }

            let args =
                request.method === 'showToast'
                    ? [request.args[0], request.args[1], this.addon.id]
                    : ISOLATED_ADDON_SCOPED_API_METHOD_SET.has(request.method)
                      ? [...request.args, this.addon.id]
                      : request.args

            if (request.method === 'setLibraryOverrides') {
                args = [request.args[0], this.addon.id]
            }

            if (request.method === 'removeLibraryOverride') {
                args = [request.args[0], request.args[1], this.addon.id]
            }

            if (request.method === 'clearLibraryOverrides') {
                args = [this.addon.id]
            }

            if (request.method === 'setMetadataOverrides') {
                args = [request.args[0], this.addon.id]
            }

            if (request.method === 'removeMetadataOverride') {
                args = [request.args[0], request.args[1], this.addon.id]
            }

            if (request.method === 'clearMetadataOverrides') {
                args = [this.addon.id]
            }

            if (request.method === 'showNotification') {
                args = [request.args[0], request.args[1], request.args[2], this.addon.id]
            }

            if (request.method === 'showModal') {
                args = [request.args[0], request.args[1], this.addon.id, request.args[3]]
            }

            if (request.method === 'showFormModal') {
                args = [request.args[0], this.addon.id, request.args[2]]
            }

            if (request.method === 'closeModal') {
                args = [request.args[0], this.addon.id]
            }

            stage = 'host'

            const value = await Reflect.apply(method, api, args)

            respond(value)
        } catch (error) {
            const details = describeDiagnosticError(error, {
                operation,
                stage,
                code: stage === 'validation' ? 'INVALID_ARGUMENTS' : 'API_CALL_FAILED',
                addonId: this.addon.id,
                requestId: request.requestId,
            })

            this.dispatch('response', {
                requestId: request.requestId,
                ok: false,
                message: getErrorMessage(error),
                error: details,
            })
        }
    }

    private reportRuntimeFailure(failure: IsolatedAddonFailure) {
        if (this.destroyed || this.fatalReported || !this.onFatalError) {
            return
        }

        if (failure.category === 'addon-execution-failed' && this.ready) {
            const now = Date.now()

            this.runtimeFailureTimestamps = this.runtimeFailureTimestamps.filter(
                timestamp => now - timestamp <= RUNTIME_FAILURE_WINDOW_MS,
            )
            this.runtimeFailureTimestamps.push(now)

            if (this.runtimeFailureTimestamps.length < RUNTIME_FAILURE_THRESHOLD) {
                return
            }
        }

        this.fatalReported = true
        queueMicrotask(() => {
            if (!this.destroyed) {
                this.onFatalError?.(failure)
            }
        })
    }

    private handleStatus(event: Event) {
        const status = parseEventDetail<RuntimeStatus>(event)

        if (!status) {
            return
        }

        if (status.type === 'diagnostic-ready') {
            this.dispatch('diagnostics', { sessionId: this.diagnostics.id })

            return
        }

        if (status.type === 'diagnostic' && status.event) {
            this.diagnostics.receive(status.event)

            return
        }

        if (status.type === 'diagnostic' && Array.isArray(status.events)) {
            for (const event of status.events.slice(0, 32)) {
                this.diagnostics.receive(event)
            }

            return
        }

        const prefix = `[PulseSync addon: ${this.addon.name} (${this.addon.id})]`

        if (status.type === 'registered' || status.type === 'ready') {
            if (status.type === 'ready') {
                this.ready = true
            }

            if (!this.registrationSettled) {
                this.registrationSettled = true
                this.resolveRegistration()
            }

            console.info(`${prefix} ${status.type}`)

            return
        }

        if (
            status.type === 'log' &&
            status.level &&
            ['info', 'warn', 'error'].includes(status.level) &&
            Array.isArray(status.args)
        ) {
            console[status.level](prefix, ...status.args.slice(0, 20))

            return
        }

        if (status.type === 'error') {
            const category = String(status.category ?? 'addon-execution-failed')
            const message = String(status.message ?? 'Unknown isolated addon error').slice(0, 2_000)
            const stack = String(status.stack ?? '').slice(0, 8_000)

            this.diagnostics.record({
                operation: category,
                stage: category === 'addon-render-failed' ? 'render' : 'lifecycle',
                status: 'failed',
                error: status.error ?? { name: 'Error', message, stack, operation: category, stage: 'lifecycle' },
            })

            if (category === 'addon-render-failed') {
                return
            }

            if (!this.registrationSettled) {
                this.registrationSettled = true
                this.rejectRegistration(new Error(`${category}: ${message}`))
            } else {
                this.reportRuntimeFailure({ category, message, ...(stack ? { stack } : {}) })
            }
        }
    }

    private installStyle() {
        if (!this.addon.css.trim()) {
            return
        }

        const style = document.createElement('style')

        style.dataset.pulsesyncIsolatedAddon = this.addon.id
        style.textContent =
            this.addon.cssScope === 'addon' ? scopeAddonCss(this.addon.css, this.addon.id) : this.addon.css
        ;(document.head || document.documentElement).append(style)
        this.style = style
    }

    async start() {
        this.diagnostics.record({ operation: 'runtime.start', stage: 'lifecycle', status: 'started' })

        try {
            await this.startRuntime()
            this.diagnostics.record({
                operation: 'runtime.start',
                stage: 'lifecycle',
                status: this.destroyed ? 'cancelled' : 'completed',
            })
        } catch (error) {
            const context = {
                operation: 'runtime.start',
                stage: 'lifecycle' as const,
                addonId: this.addon.id,
                sessionId: this.diagnostics.id,
            }

            this.diagnostics.record({
                operation: context.operation,
                stage: 'lifecycle',
                status: diagnosticFailureStatus(error),
                error: describeDiagnosticError(error, context),
            })
            throw diagnosticError(error, context)
        }
    }

    private async startRuntime() {
        if (this.destroyed) {
            throw new Error('PulseSync isolated addon runtime was destroyed')
        }

        const executeIsolatedAddon = window.pulseSyncWebHost?.executeIsolatedAddon

        if (typeof executeIsolatedAddon !== 'function') {
            throw new Error('webhost-bridge-unavailable: PulseSync isolated addon bridge is unavailable')
        }

        const client = getPulseSyncClient()

        if (!client) {
            throw new Error('webhost-client-unavailable: PulseSync addon client is unavailable')
        }

        const clientMethods = Object.keys(client).filter(method => typeof client[method] === 'function')

        this.installStyle()
        this.subscribeSettings()
        document.addEventListener(this.eventName('resource-result'), this.handleResourceResult)
        document.addEventListener(this.eventName('request'), this.handleApiRequestBound)
        document.addEventListener(this.eventName('subscription'), this.handleSubscriptionBound)
        document.addEventListener(this.eventName('status'), this.handleStatusBound)

        try {
            await executeIsolatedAddon(this.addon.id, this.channelToken, clientMethods)
        } finally {
            // The isolated world may start listening only after destroy() sent its first dispose event.
            if (this.destroyed) {
                this.runCleanup('late isolated runtime', () => this.dispatch('dispose', {}))
            }
        }

        if (this.destroyed) {
            return
        }

        let timeout = 0

        try {
            await Promise.race([
                this.registrationPromise,
                new Promise<never>((_resolve, reject) => {
                    timeout = window.setTimeout(
                        () =>
                            reject(
                                new Error(
                                    `addon-registration-failed: addon registration timed out after ${ADDON_REGISTRATION_TIMEOUT_MS}ms`,
                                ),
                            ),
                        ADDON_REGISTRATION_TIMEOUT_MS,
                    )
                }),
            ])
        } finally {
            if (timeout) {
                window.clearTimeout(timeout)
            }
        }

        if (this.destroyed) {
            return
        }

        this.dispatch('settings', { value: this.currentSettings })
    }

    private readonly handleApiRequestBound = (event: Event) => void this.handleApiRequest(event)
    private readonly handleSubscriptionBound = (event: Event) => this.handleSubscription(event)
    private readonly handleStatusBound = (event: Event) => this.handleStatus(event)

    private runCleanup(resource: string, cleanup: () => unknown) {
        const reportError = (error: unknown) => {
            this.diagnostics.record({
                operation: `cleanup.${resource}`,
                stage: 'lifecycle',
                status: 'failed',
                error: describeDiagnosticError(error, { operation: `cleanup.${resource}`, stage: 'lifecycle' }),
            })
        }

        try {
            void Promise.resolve(cleanup()).catch(reportError)
        } catch (error) {
            reportError(error)
        }
    }

    destroy() {
        if (this.destroyed) {
            return
        }

        this.destroyed = true
        this.diagnostics.record({ operation: 'runtime.destroy', stage: 'lifecycle', status: 'started' })
        this.resourceLifetime.abort()

        if (!this.registrationSettled) {
            this.registrationSettled = true
            this.rejectRegistration(
                new Error('addon-registration-failed: isolated addon was destroyed before registration'),
            )
        }

        document.removeEventListener(this.eventName('resource-result'), this.handleResourceResult)

        for (const hookId of this.resourceHooks.keys()) {
            this.removeResourceHook(hookId)
        }

        this.runCleanup('library overrides', () => {
            const api = getPulseSyncApi(),
                clear = api?.clearLibraryOverrides

            if (typeof clear === 'function') {
                Reflect.apply(clear, api, [this.addon.id])
            }
        })
        document.removeEventListener(this.eventName('request'), this.handleApiRequestBound)
        document.removeEventListener(this.eventName('subscription'), this.handleSubscriptionBound)
        this.runCleanup('isolated runtime', () => this.dispatch('dispose', {}))
        document.removeEventListener(this.eventName('status'), this.handleStatusBound)

        const settingsCleanup = this.settingsCleanup

        this.settingsCleanup = undefined

        if (settingsCleanup) {
            this.runCleanup('settings subscription', settingsCleanup)
        }

        const subscriptionCleanups = [...this.subscriptionCleanups.entries()]

        this.subscriptionCleanups.clear()

        for (const [event, cleanup] of subscriptionCleanups) {
            this.runCleanup(`${event} subscription`, cleanup)
        }

        this.runCleanup('metadata overrides', () => {
            const api = getPulseSyncApi()
            const clear = api?.clearMetadataOverrides

            if (typeof clear === 'function') {
                return Reflect.apply(clear, api, [this.addon.id])
            }
        })
        this.runCleanup('track replacements', () => {
            const api = getPulseSyncApi()
            const clearTrackReplacements = api?.clearTrackReplacements

            if (typeof clearTrackReplacements === 'function') {
                return Reflect.apply(clearTrackReplacements, api, [this.addon.id])
            }
        })
        this.runCleanup('notifications', () => {
            const api = getPulseSyncApi()
            const clear = api?.clearAddonNotifications

            if (typeof clear === 'function') {
                return Reflect.apply(clear, api, [this.addon.id])
            }
        })
        this.runCleanup('modals', () => {
            const api = getPulseSyncApi()
            const clear = api?.clearAddonModals

            if (typeof clear === 'function') {
                return Reflect.apply(clear, api, [this.addon.id])
            }
        })

        const style = this.style

        this.style = undefined
        this.runCleanup('stylesheet', () => style?.remove())
        this.diagnostics.record({ operation: 'runtime.destroy', stage: 'lifecycle', status: 'completed' })
    }
}
