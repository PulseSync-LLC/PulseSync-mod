import type { PulseSyncResourceReadTarget } from '../../../pulsesyncRuntime/src/features/resourceReads'
import type {
    PulseSyncResourceHooks,
    PulseSyncResourceTarget,
    PulseSyncResourceRequest,
} from '@pulsesync/yamusic-types'
import { copyResourceData } from '../../../pulsesyncRuntime/src/features/resourceData'
import type { PulseSyncAddonApi, PulseSyncApi, PulseSyncWebHostClient } from '../contracts'
import type { PulseSyncPlayerSnapshot, PulseSyncQueueSnapshot, PulseSyncRouteSnapshot } from '@pulsesync/yamusic-types'
import { createAddonAssets, createAddonIdentity, createAddonNamespaces } from '../runtime/addonResources'
import { createAddonNet } from '../runtime/addonNet'
import { createAddonLifecycle } from '../runtime/addonLifecycle'
import { createAddonStorage } from '../runtime/addonStorage'
import {
    AddonDiagnostics,
    diagnosticError,
    describeDiagnosticError,
    diagnosticFailureStatus,
    type DiagnosticEvent,
} from '../runtime/addonDiagnostics'
import type { ApiResponse, IsolatedEventKind, IsolatedInit, IsolatedLogLevel } from './contracts'

type PendingCall = {
    resolve: (value: unknown) => void
    reject: (error: Error) => void
    timeout: number
    span: ReturnType<AddonDiagnostics['begin']>
}

const API_CALL_TIMEOUT_MS = 15_000

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

function toSerializableValue(value: unknown, depth = 0, seen = new WeakSet<object>()): unknown {
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

    if (typeof value === 'function' || typeof value === 'symbol' || depth >= 6 || typeof value !== 'object') {
        return undefined
    }

    if (seen.has(value)) {
        return '[Circular]'
    }

    seen.add(value)

    if (value instanceof Error) {
        return {
            ...describeDiagnosticError(value, { operation: 'logger', stage: 'sdk' }),
            name: value.name,
            message: value.message,
            stack: value.stack,
            ...(value.cause !== undefined ? { cause: toSerializableValue(value.cause, depth + 1, seen) } : {}),
        }
    }

    if (Array.isArray(value)) {
        return value.slice(0, 100).map(item => toSerializableValue(item, depth + 1, seen))
    }

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

            if (normalized !== undefined) {
                result[key] = normalized
            }
        } catch {
            // Ignore getters and proxies that cannot be serialized.
        }
    }

    return result
}

// Validate before JSON transport so functions, getters and undefined cannot silently disappear.
function assertMetadataSerializable(value: unknown, depth = 0, ancestors = new Set<object>()) {
    if (value === null || typeof value === 'string' || typeof value === 'boolean') {
        return
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
        return
    }

    if (!value || typeof value !== 'object' || depth > 8 || ancestors.has(value)) {
        throw new TypeError('Metadata must be serializable')
    }

    if (!Array.isArray(value) && ![Object.prototype, null].includes(Object.getPrototypeOf(value))) {
        throw new TypeError('Metadata must contain plain objects')
    }

    ancestors.add(value)

    for (const key of Reflect.ownKeys(value)) {
        if (Array.isArray(value) && key === 'length') {
            continue
        }

        const descriptor = Object.getOwnPropertyDescriptor(value, key)!

        if (typeof key !== 'string' || !descriptor.enumerable || !('value' in descriptor)) {
            throw new TypeError('Metadata must contain data properties')
        }

        assertMetadataSerializable(descriptor.value, depth + 1, ancestors)
    }

    ancestors.delete(value)
}

function toSettings(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
}

export class IsolatedBridge {
    readonly pulsesyncApi: PulseSyncApi & PulseSyncWebHostClient
    readonly addonApi: PulseSyncAddonApi
    readonly diagnostics: AddonDiagnostics

    private readonly resourceHooks = new Map<number, PulseSyncResourceHooks>()
    private nextResourceHook = 0
    private readonly activeResourceCalls = new Map<number, object>()
    private readonly init: IsolatedInit
    private readonly clientMethods: ReadonlySet<string>
    private readonly pendingCalls = new Map<number, PendingCall>()
    private readonly diagnosticQueue: DiagnosticEvent[] = []
    private diagnosticTimer = 0
    private readonly lifetime = new AbortController()
    private readonly settingsListeners = new Set<(value: Record<string, unknown>) => void>()
    private readonly currentTrackListeners = new Set<(track: Record<string, unknown> | null) => void>()
    private readonly pageEntityListeners = new Set<(snapshot: Record<string, unknown>) => void>()
    private readonly playerSnapshotListeners = new Set<(snapshot: PulseSyncPlayerSnapshot) => void>()
    private readonly queueListeners = new Set<(snapshot: PulseSyncQueueSnapshot) => void>()
    private readonly routeListeners = new Set<(snapshot: PulseSyncRouteSnapshot) => void>()
    private readonly observedListeners = new WeakMap<object, WeakMap<object, unknown>>()
    private currentSettings: Record<string, unknown>
    private nextRequestId = 0
    private started = false
    private disposed = false

    constructor(init: IsolatedInit) {
        this.init = init
        this.diagnostics = new AddonDiagnostics(init.addon.id, event => this.queueDiagnostic(event))
        this.clientMethods = new Set(init.clientMethods)
        this.currentSettings = toSettings(init.initialSettings)

        const identity = createAddonIdentity(init.addon)

        const settingsStore = this.diagnostics.instrument(
            {
                getCurrent: () => this.currentSettings,
                onChange: (listener: (value: Record<string, unknown>) => void) => {
                    if (typeof listener !== 'function') {
                        return () => {}
                    }

                    this.settingsListeners.add(listener)

                    return () => this.settingsListeners.delete(listener)
                },
            },
            'settings',
        )

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

                    if (property === 'onCurrentTrackChange') {
                        return (listener: (track: Record<string, unknown> | null) => void) =>
                            this.subscribeCurrentTrack(listener)
                    }

                    if (property === 'onPageEntityChange') {
                        return (listener: (snapshot: Record<string, unknown>) => void) =>
                            this.subscribeEvent('page-entity', this.pageEntityListeners, listener)
                    }

                    if (property === 'onPlayerSnapshotChange') {
                        return (listener: (snapshot: PulseSyncPlayerSnapshot) => void) =>
                            this.subscribeEvent('player-snapshot', this.playerSnapshotListeners, listener)
                    }

                    if (property === 'onQueueChange') {
                        return (listener: (snapshot: PulseSyncQueueSnapshot) => void) =>
                            this.subscribeEvent('queue', this.queueListeners, listener)
                    }

                    if (property === 'onRouteChange') {
                        return (listener: (snapshot: PulseSyncRouteSnapshot) => void) =>
                            this.subscribeEvent('route', this.routeListeners, listener)
                    }

                    if (property === 'then' || typeof property !== 'string' || !this.clientMethods.has(property)) {
                        return undefined
                    }

                    return (...args: unknown[]) => this.callApi(property, args)
                },
                has: (_target, property) =>
                    property === 'getSettings' ||
                    property === 'onCurrentTrackChange' ||
                    property === 'onPageEntityChange' ||
                    property === 'onPlayerSnapshotChange' ||
                    property === 'onQueueChange' ||
                    property === 'onRouteChange' ||
                    (typeof property === 'string' && this.clientMethods.has(property)),
            }),
        )

        const namespaces = createAddonNamespaces(this.pulsesyncApi, undefined, this.lifetime.signal, this.diagnostics)

        this.addonApi = Object.freeze({
            addonId: init.addon.id,
            addon: identity,
            resources: this.diagnostics.instrument(
                {
                    read: (target: PulseSyncResourceReadTarget, request: PulseSyncResourceRequest) =>
                        this.callRequest(
                            'read',
                            [copyResourceData(target), copyResourceData(request, 64 * 1024)],
                            'resources',
                        ),
                    getLyrics: (trackId: string, format: 'LRC' | 'TEXT' = 'LRC') =>
                        this.callRequest('getLyrics', [trackId, format], 'resources') as Promise<string | null>,
                    registerHook: (target: PulseSyncResourceTarget, hooks: PulseSyncResourceHooks) =>
                        this.registerResourceHook(target, hooks),
                },
                'resources',
            ),
            client: this.pulsesyncApi,
            pulsesyncApi: this.pulsesyncApi,
            ...namespaces,
            ...this.diagnostics.instrument(createAddonLifecycle(this.lifetime.signal), 'lifecycle', 'lifecycle'),
            settings: settingsStore,
            assets: this.diagnostics.instrument(createAddonAssets(init.addon.id, this.lifetime.signal), 'assets'),
            net: this.diagnostics.instrument(createAddonNet(this.lifetime.signal), 'net'),
            storage: createAddonStorage((method, args) => this.callRequest(method, args, 'storage')),
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
        if (this.started || this.disposed) {
            return
        }

        this.started = true
        document.addEventListener(this.eventName('resource-cancel'), this.handleResourceCancel)
        document.addEventListener(this.eventName('resource-call'), this.handleResourceCall)
        document.addEventListener(this.eventName('response'), this.handleResponse)
        document.addEventListener(this.eventName('settings'), this.handleSettings)
        document.addEventListener(this.eventName('event'), this.handleEvent)
        document.addEventListener(this.eventName('diagnostics'), this.handleDiagnostics)
        window.addEventListener('error', this.handleWindowError)
        window.addEventListener('unhandledrejection', this.handleUnhandledRejection)
        this.dispatch('status', { type: 'diagnostic-ready' })
    }

    reportRegistered() {
        this.dispatch('status', { type: 'registered' })
    }

    reportReady() {
        this.dispatch('status', { type: 'ready' })
    }

    reportError(category: string, error: unknown) {
        const context = {
            operation: category,
            stage: category === 'addon-render-failed' ? ('render' as const) : ('lifecycle' as const),
            addonId: this.init.addon.id,
            sessionId: this.diagnostics.sessionId,
        }
        const normalizedError = diagnosticError(error, context)
        const details = describeDiagnosticError(normalizedError, context)

        this.diagnostics.record({
            operation: category,
            stage: category === 'addon-render-failed' ? 'render' : 'lifecycle',
            status: 'failed',
            error: details,
        })

        this.dispatch('status', {
            type: 'error',
            category,
            message: normalizedError.message,
            stack: normalizedError.stack,
            error: details,
        })
    }

    log(level: IsolatedLogLevel, args: unknown[]) {
        this.dispatch('status', { type: 'log', level, args: args.map(arg => toSerializableValue(arg)) })
    }

    private dispatch(kind: 'request' | 'subscription' | 'status' | 'resource-result', value: unknown) {
        if (this.disposed && kind !== 'status') {
            return
        }

        document.dispatchEvent(new CustomEvent(this.eventName(kind), { detail: JSON.stringify(value) }))
    }

    private queueDiagnostic(event: DiagnosticEvent) {
        this.diagnosticQueue.push(event)

        if (
            event.error ||
            event.status === 'timed-out' ||
            event.status === 'failed' ||
            this.disposed ||
            this.diagnosticQueue.length >= 32
        ) {
            this.flushDiagnostics()
        } else if (!this.diagnosticTimer) {
            this.diagnosticTimer = window.setTimeout(() => this.flushDiagnostics(), 250)
        }
    }

    private flushDiagnostics() {
        window.clearTimeout(this.diagnosticTimer)
        this.diagnosticTimer = 0

        if (this.diagnosticQueue.length) {
            this.dispatch('status', { type: 'diagnostic', events: this.diagnosticQueue.splice(0) })
        }
    }

    private async registerResourceHook(
        target: PulseSyncResourceTarget,
        hooks: PulseSyncResourceHooks,
    ): Promise<() => void> {
        if (this.disposed) {
            throw new Error('PulseSync isolated addon disposed')
        }

        if (!hooks || typeof hooks !== 'object' || this.resourceHooks.size >= 32) {
            throw new TypeError('Invalid resource hook')
        }

        for (const phase of ['before', 'after'] as const) {
            if (hooks[phase] !== undefined && typeof hooks[phase] !== 'function') {
                throw new TypeError('Resource hook must be a function')
            }
        }

        const hookId = ++this.nextResourceHook

        this.resourceHooks.set(hookId, { ...hooks })

        try {
            await this.callRequest(
                'registerHook',
                [
                    hookId,
                    copyResourceData(target),
                    {
                        before: !!hooks.before,
                        after: !!hooks.after,
                        ...(hooks.timeoutMs === undefined ? {} : { timeoutMs: hooks.timeoutMs }),
                    },
                ],
                'resources',
            )
        } catch (error) {
            this.resourceHooks.delete(hookId)
            throw error
        }

        let active = true

        return () => {
            if (!active) {
                return
            }

            active = false
            this.resourceHooks.delete(hookId)

            if (!this.disposed) {
                void this.callRequest('unregisterHook', [hookId], 'resources').catch(() => {})
            }
        }
    }

    private readonly handleResourceCancel = (event: Event) => {
        const request = parseEventDetail<{ callId: number }>(event)

        if (request && Number.isSafeInteger(request.callId)) {
            this.activeResourceCalls.delete(request.callId)
            this.diagnostics.record({
                operation: 'resources.hook.cancel',
                stage: 'callback',
                status: 'cancelled',
                data: { callId: request.callId },
            })
        }
    }

    private readonly handleResourceCall = async (event: Event) => {
        if (this.disposed) {
            return
        }

        const request = parseEventDetail<{
            callId: number
            hookId: number
            phase: 'before' | 'after'
            context: unknown
        }>(event)

        if (!request || !Number.isSafeInteger(request.callId) || !['before', 'after'].includes(request.phase)) {
            return
        }

        const hooks = this.resourceHooks.get(request.hookId),
            callback = hooks?.[request.phase]

        if (!callback || this.activeResourceCalls.size >= 64) {
            this.dispatch('resource-result', { callId: request.callId, ok: false })

            return
        }

        const token = {}

        this.activeResourceCalls.set(request.callId, token)

        try {
            const value = await this.diagnostics.invoke(
                `resources.hook.${request.hookId}.${request.phase}`,
                'callback',
                () => callback(copyResourceData(request.context)),
                { callId: request.callId },
            )

            if (
                !this.disposed &&
                this.resourceHooks.get(request.hookId) === hooks &&
                this.activeResourceCalls.get(request.callId) === token
            ) {
                this.dispatch('resource-result', {
                    callId: request.callId,
                    ok: true,
                    ...(value === undefined ? {} : { value: copyResourceData(value) }),
                })
            } else {
                this.diagnostics.record({
                    operation: `resources.hook.${request.hookId}.${request.phase}`,
                    stage: 'callback',
                    status: 'late-response',
                    data: { callId: request.callId },
                })
            }
        } catch (error) {
            this.dispatch('resource-result', {
                callId: request.callId,
                ok: false,
                error: describeDiagnosticError(error, {
                    operation: `resources.hook.${request.hookId}.${request.phase}`,
                    stage: 'callback',
                }),
            })
        } finally {
            if (this.activeResourceCalls.get(request.callId) === token) {
                this.activeResourceCalls.delete(request.callId)
            }
        }
    }

    private callApi(method: string, args: unknown[]) {
        if (method === 'setMetadataOverrides' || method === 'setLibraryOverrides') {
            try {
                if (method === 'setLibraryOverrides') {
                    copyResourceData(args[0])
                } else {
                    assertMetadataSerializable(args[0])
                }
            } catch (error) {
                const context = {
                    operation: `client.${method}`,
                    stage: 'validation' as const,
                    code: 'INVALID_ARGUMENTS',
                    addonId: this.init.addon.id,
                    sessionId: this.diagnostics.sessionId,
                }

                this.diagnostics.record({
                    operation: context.operation,
                    stage: 'validation',
                    status: 'failed',
                    error: describeDiagnosticError(error, context),
                })

                return Promise.reject(diagnosticError(error, context))
            }
        }

        return this.callRequest(method, args)
    }

    private callRequest(method: string, args: unknown[], target?: 'storage' | 'resources') {
        if (this.disposed) {
            return Promise.reject(
                diagnosticError(new Error('PulseSync isolated addon disposed'), {
                    operation: `${target ?? 'client'}.${method}`,
                    stage: 'lifecycle',
                    code: 'ADDON_DISPOSED',
                    addonId: this.init.addon.id,
                    sessionId: this.diagnostics.sessionId,
                }),
            )
        }

        const requestId = (this.nextRequestId += 1)
        const span = this.diagnostics.begin(`${target ?? 'client'}.${method}`, 'transport', args, undefined, requestId)

        return new Promise<unknown>((resolve, reject) => {
            const timeout =
                !target && (method === 'showModal' || method === 'showFormModal')
                    ? 0
                    : window.setTimeout(() => {
                          this.pendingCalls.delete(requestId)

                          const error = diagnosticError(new Error(`PulseSync addon API call timed out: ${method}`), {
                              ...span.context,
                              code: 'TRANSPORT_TIMEOUT',
                          })

                          span.finish('timed-out', undefined, error)
                          reject(error)
                      }, API_CALL_TIMEOUT_MS)

            this.pendingCalls.set(requestId, { resolve, reject, timeout, span })

            try {
                this.dispatch('request', { requestId, method, args, target })
            } catch (error) {
                this.pendingCalls.delete(requestId)
                window.clearTimeout(timeout)

                const enriched = diagnosticError(error, { ...span.context, code: 'TRANSPORT_FAILED' })

                span.finish('failed', undefined, enriched)
                reject(enriched)
            }
        })
    }

    private subscribeCurrentTrack(listener: (track: Record<string, unknown> | null) => void) {
        return this.subscribeEvent('current-track', this.currentTrackListeners, listener)
    }

    private subscribeEvent<T>(event: string, listeners: Set<(value: T) => void>, listener: (value: T) => void) {
        if (typeof listener !== 'function' || this.disposed) {
            return () => {}
        }

        const shouldSubscribe = listeners.size === 0

        const span = this.diagnostics.begin(`subscriptions.${event}`, 'sdk')
        let wrappers = this.observedListeners.get(listeners)

        if (!wrappers) {
            wrappers = new WeakMap()
            this.observedListeners.set(listeners, wrappers)
        }

        const observed = (wrappers.get(listener) ??
            ((value: T) =>
                this.diagnostics.invoke(
                    `subscriptions.${event}.callback`,
                    'callback',
                    () => listener(value),
                    undefined,
                    span.operationId,
                ))) as (value: T) => void

        wrappers.set(listener, observed)
        listeners.add(observed)
        span.finish('completed')

        if (shouldSubscribe) {
            this.dispatch('subscription', { event, active: true })
        }

        let active = true

        return () => {
            if (!active) {
                return
            }

            active = false
            listeners.delete(observed)
            this.diagnostics.record({
                operation: `subscriptions.${event}.unsubscribe`,
                stage: 'lifecycle',
                status: 'completed',
                parentId: span.operationId,
            })

            if (listeners.size === 0) {
                this.dispatch('subscription', { event, active: false })
            }
        }
    }

    private readonly handleResponse = (event: Event) => {
        const response = parseEventDetail<ApiResponse>(event)

        if (!response) {
            return
        }

        const pending = this.pendingCalls.get(response.requestId)

        if (!pending) {
            this.diagnostics.record({
                operation: 'transport.response',
                stage: 'transport',
                status: 'late-response',
                requestId: response.requestId,
            })

            return
        }

        this.pendingCalls.delete(response.requestId)
        window.clearTimeout(pending.timeout)

        if (response.ok) {
            pending.span.finish('completed', response.value)
            pending.resolve(response.value)
        } else {
            const error = diagnosticError(
                response.error ?? new Error(response.message ?? 'PulseSync addon API call failed'),
                { ...pending.span.context, stage: 'host', code: 'API_CALL_FAILED' },
            )

            pending.span.finish(diagnosticFailureStatus(error), undefined, error)
            pending.reject(error)
        }
    }

    private readonly handleDiagnostics = (event: Event) => {
        const message = parseEventDetail<{ sessionId?: string }>(event)

        this.flushDiagnostics()

        if (typeof message?.sessionId === 'string') {
            this.diagnostics.sessionId = message.sessionId
        }
    }

    private readonly handleSettings = (event: Event) => {
        const message = parseEventDetail<{ value?: unknown }>(event)

        if (!message) {
            return
        }

        this.currentSettings = toSettings(message.value)
        this.settingsListeners.forEach(listener => listener(this.currentSettings))
    }

    private readonly handleEvent = (event: Event) => {
        const message = parseEventDetail<{ type?: unknown; value?: unknown }>(event)

        if (!message) {
            return
        }

        if (message.type === 'current-track-change') {
            const track =
                message.value && typeof message.value === 'object' ? (message.value as Record<string, unknown>) : null

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
        this.reportError('addon-execution-failed', event.error ?? new Error(event.message))
    }

    private readonly handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        this.reportError('addon-execution-failed', event.reason)
    }

    dispose() {
        if (this.disposed) {
            return
        }

        this.disposed = true
        this.lifetime.abort(new DOMException('Addon disabled', 'AbortError'))

        if (this.started) {
            document.removeEventListener(this.eventName('resource-cancel'), this.handleResourceCancel)
            document.removeEventListener(this.eventName('resource-call'), this.handleResourceCall)
            document.removeEventListener(this.eventName('response'), this.handleResponse)
            document.removeEventListener(this.eventName('settings'), this.handleSettings)
            document.removeEventListener(this.eventName('event'), this.handleEvent)
            document.removeEventListener(this.eventName('diagnostics'), this.handleDiagnostics)
            window.removeEventListener('error', this.handleWindowError)
            window.removeEventListener('unhandledrejection', this.handleUnhandledRejection)
        }

        this.pendingCalls.forEach(pending => {
            window.clearTimeout(pending.timeout)

            const error = diagnosticError(new Error('PulseSync isolated addon disposed'), {
                ...pending.span.context,
                stage: 'lifecycle',
                code: 'ADDON_DISPOSED',
            })

            pending.span.finish('cancelled', undefined, error)
            pending.reject(error)
        })
        this.pendingCalls.clear()
        this.resourceHooks.clear()
        this.activeResourceCalls.clear()
        this.settingsListeners.clear()
        this.currentTrackListeners.clear()
        this.pageEntityListeners.clear()
        this.playerSnapshotListeners.clear()
        this.queueListeners.clear()
        this.routeListeners.clear()
        this.flushDiagnostics()
    }
}
