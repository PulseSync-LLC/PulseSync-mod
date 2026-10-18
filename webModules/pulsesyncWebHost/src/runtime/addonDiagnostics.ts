export type DiagnosticStage =
    | 'sdk'
    | 'validation'
    | 'transport'
    | 'host'
    | 'callback'
    | 'lifecycle'
    | 'render'
    | 'module'

export type DiagnosticContext = {
    operation: string
    stage: DiagnosticStage
    code?: string
    addonId?: string
    sessionId?: string
    requestId?: number
    callSite?: string
}

export type DiagnosticError = DiagnosticContext & {
    errorId?: string
    name: string
    message: string
    stack?: string
    cause?: unknown
}

export type DiagnosticEvent = {
    operation: string
    stage: DiagnosticStage
    status: 'started' | 'completed' | 'failed' | 'cancelled' | 'timed-out' | 'late-response' | 'info'
    operationId?: number
    parentId?: number
    requestId?: number
    durationMs?: number
    callSite?: string
    data?: unknown
    error?: DiagnosticError
}

function property(value: unknown, key: string): unknown {
    try {
        return value && (typeof value === 'object' || typeof value === 'function')
            ? Object.getOwnPropertyDescriptor(value, key)?.value
            : undefined
    } catch {
        return undefined
    }
}

export function diagnosticValue(
    value: unknown,
    depth = 0,
    seen = new WeakSet<object>(),
    budget = { remaining: 8_000 },
): unknown {
    if (budget.remaining <= 0) {
        return '[Truncated]'
    }

    budget.remaining -= 32

    if (typeof value === 'string') {
        const text = value.slice(0, Math.min(4_000, Math.max(0, budget.remaining)))

        budget.remaining -= text.length

        return text
    }

    if (value === undefined) {
        return undefined
    }

    if (value === null || typeof value === 'boolean' || typeof value === 'number') {
        return value
    }

    if (typeof value === 'bigint') {
        return String(value)
    }

    if (typeof value !== 'object' || !value || depth >= 4) {
        return typeof value
    }

    if (seen.has(value)) {
        return '[Circular]'
    }

    seen.add(value)

    try {
        if (typeof Request !== 'undefined' && value instanceof Request) {
            return { method: value.method, url: value.url }
        }

        if (value instanceof URL) {
            return value.href
        }

        if (typeof Response !== 'undefined' && value instanceof Response) {
            return { status: value.status, ok: value.ok, url: value.url }
        }

        if (Array.isArray(value)) {
            return value.slice(0, 20).map(item => diagnosticValue(item, depth + 1, seen, budget))
        }

        const result: Record<string, unknown> = {}
        const keys =
            value instanceof Error
                ? ['name', 'message', 'stack', 'cause', 'code', 'stage', 'operation']
                : Object.keys(value).slice(0, 20)

        for (const key of keys) {
            const item =
                value instanceof Error && (key === 'name' || key === 'message' || key === 'stack')
                    ? value[key]
                    : property(value, key)

            if (item !== undefined) {
                result[key] = diagnosticValue(item, depth + 1, seen, budget)
            }
        }

        return result
    } catch {
        return '[Unavailable]'
    }
}

export function describeDiagnosticError(error: unknown, context: DiagnosticContext): DiagnosticError {
    const text = (key: string, fallback?: string) => {
        const value = property(error, key)

        return typeof value === 'string' ? value.slice(0, 12_000) : fallback
    }
    const nativeText = (key: 'name' | 'message' | 'stack'): string | undefined => {
        try {
            if (error instanceof Error || (typeof DOMException !== 'undefined' && error instanceof DOMException)) {
                return typeof (error as Error)[key] === 'string' ? (error as Error)[key] : undefined
            }
        } catch {}

        return undefined
    }
    const requestId = property(error, 'requestId')

    return {
        ...context,
        errorId: text('errorId')?.slice(0, 128),
        addonId: text('addonId', context.addonId),
        sessionId: text('sessionId', context.sessionId),
        requestId: typeof requestId === 'number' ? requestId : context.requestId,
        code: text('code', context.code ?? 'OPERATION_FAILED'),
        stage: (text('stage') as DiagnosticStage | undefined) ?? context.stage,
        operation: text('operation', context.operation)!,
        name: text('name', nativeText('name') ?? 'Error')!,
        message: text(
            'message',
            nativeText('message') ??
                (error === null || typeof error !== 'object' ? String(error) : 'Unknown addon error'),
        )!,
        stack: text('stack', nativeText('stack')),
        callSite: text('callSite', context.callSite),
        cause: diagnosticValue(property(error, 'cause')),
    }
}

export function diagnosticError(error: unknown, context: DiagnosticContext): Error {
    const details = describeDiagnosticError(error, context)
    const metadata = {
        errorId: details.errorId ?? crypto.randomUUID(),
        code: details.code,
        stage: details.stage,
        operation: details.operation,
        addonId: details.addonId,
        sessionId: details.sessionId,
        requestId: details.requestId,
        callSite: details.callSite,
    }
    let result: Error = Object.assign(new Error(details.message), details)

    try {
        if (error instanceof Error) {
            result = error
        }

        Object.assign(result, metadata)
    } catch {
        result = Object.assign(new Error(details.message, { cause: error }), details, metadata)
    }

    return result
}

export function diagnosticFailureStatus(error: unknown): 'failed' | 'cancelled' | 'timed-out' {
    const details = describeDiagnosticError(error, { operation: 'unknown', stage: 'sdk' })

    if (details.name === 'AbortError' || details.code === 'ADDON_DISPOSED') {
        return 'cancelled'
    }

    return details.name === 'TimeoutError' || details.code === 'TRANSPORT_TIMEOUT' ? 'timed-out' : 'failed'
}

export class AddonDiagnostics {
    sessionId?: string
    private nextOperation = 0
    private readonly addonId: string
    private readonly sink: (event: DiagnosticEvent) => void

    constructor(addonId: string, sink: (event: DiagnosticEvent) => void) {
        this.addonId = addonId
        this.sink = sink
    }

    record(event: DiagnosticEvent) {
        if (event.status === 'started') {
            return
        }

        try {
            this.sink(event)
        } catch {}
    }

    begin(operation: string, stage: DiagnosticStage, _data?: unknown, parentId?: number, requestId?: number) {
        const operationId = ++this.nextOperation
        const started = performance.now()
        const context = {
            operation,
            stage,
            addonId: this.addonId,
            sessionId: this.sessionId,
            requestId,
        }

        let settled = false

        return {
            operationId,
            context,
            finish: (status: DiagnosticEvent['status'], _data?: unknown, error?: unknown) => {
                if (settled) {
                    return
                }

                settled = true

                this.record({
                    operation,
                    stage,
                    status,
                    operationId,
                    parentId,
                    requestId,
                    durationMs: performance.now() - started,
                    ...(error === undefined ? {} : { error: describeDiagnosticError(error, context) }),
                })
            },
        }
    }

    invoke<T>(operation: string, stage: DiagnosticStage, run: () => T, data?: unknown, parentId?: number): T {
        const span = this.begin(operation, stage, data, parentId)

        return this.execute(span, run)
    }

    private execute<T>(span: ReturnType<AddonDiagnostics['begin']>, run: () => T): T {
        const fail = (error: unknown): never => {
            const enriched = diagnosticError(error, span.context)

            span.finish(diagnosticFailureStatus(enriched), undefined, enriched)
            throw enriched
        }

        try {
            const result = run()

            if (result instanceof Promise) {
                return result.then(value => {
                    span.finish('completed', value)

                    return value
                }, fail) as T
            }

            span.finish('completed', result)

            return result
        } catch (error) {
            return fail(error)
        }
    }

    instrument<T extends object>(value: T, prefix: string, stage: DiagnosticStage = 'sdk', wrapCallbacks = true): T {
        const result = { ...value }
        const invoke = this.invoke.bind(this)

        for (const key of Object.keys(value) as (keyof T & string)[]) {
            const method = value[key]

            if (typeof method !== 'function') {
                continue
            }

            const callbacks = new WeakMap<object, (...values: unknown[]) => unknown>()

            Reflect.set(result, key, (...args: unknown[]) => {
                const operation = `${prefix}.${key}`
                const span = this.begin(operation, stage, args)
                const wrapped = args.map((arg, index) => {
                    if (!wrapCallbacks) {
                        return arg
                    }

                    const isListener =
                        prefix === 'lifecycle' &&
                        key === 'listen' &&
                        index === 2 &&
                        arg &&
                        typeof arg === 'object' &&
                        'handleEvent' in arg

                    if (typeof arg !== 'function' && !isListener) {
                        return arg
                    }

                    const existing = callbacks.get(arg as object)

                    if (existing) {
                        return existing
                    }

                    const observed = function (this: unknown, ...values: unknown[]) {
                        if (isListener) {
                            return invoke(
                                `${operation}.handleEvent`,
                                'callback',
                                () => (arg as EventListenerObject).handleEvent(values[0] as Event),
                                undefined,
                                span.operationId,
                            )
                        }

                        return invoke(
                            `${operation}.callback[${index}]`,
                            'callback',
                            () => Reflect.apply(arg as (...args: unknown[]) => unknown, this, values),
                            undefined,
                            span.operationId,
                        )
                    }

                    callbacks.set(arg as object, observed)

                    return observed
                })

                return this.execute(span, () => {
                    const returned = Reflect.apply(method, value, wrapped)
                    const observeCleanup = (cleanup: unknown) => {
                        if (typeof cleanup !== 'function') {
                            return cleanup
                        }

                        return function (this: unknown, ...cleanupArgs: unknown[]) {
                            return invoke(
                                `${operation}.cleanup`,
                                'lifecycle',
                                () => Reflect.apply(cleanup, this, cleanupArgs),
                                undefined,
                                span.operationId,
                            )
                        }
                    }

                    return returned instanceof Promise ? returned.then(observeCleanup) : observeCleanup(returned)
                })
            })
        }

        return Object.freeze(result)
    }
}
