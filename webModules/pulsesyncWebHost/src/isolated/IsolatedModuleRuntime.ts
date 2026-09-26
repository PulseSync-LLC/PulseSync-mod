import type { PulseSyncAddonApi } from '../contracts'
import { ModuleExportsGuard } from './ModuleExportsGuard'

type Descriptor = Readonly<{
    formatVersion: 1
    moduleId: string
    versionId: string
    version: string
    apiMajor: number
    kind: 'javascript' | 'wasm'
    access: 'public' | 'protected'
    sha256: string
    size: number
}>
type Definition = {
    apiMajor: number
    create: (ctx: {
        api: PulseSyncAddonApi
        signal: AbortSignal
    }) => { exports: unknown; dispose?: () => void } | Promise<{ exports: unknown; dispose?: () => void }>
}
type Options = { fetch: (context: { descriptor: Descriptor; signal: AbortSignal }) => Promise<Uint8Array> }
export type ModuleBridge = {
    load: (alias: string, bytes?: Uint8Array) => Promise<{ kind: 'javascript' | 'wasm'; bytes?: Uint8Array }>
    dispose: () => Promise<unknown>
}
export type ModuleInit = { descriptors: Record<string, Descriptor>; errors: Record<string, string>; development?: boolean }

export class IsolatedModuleRuntime {
    private readonly abort = new AbortController()
    private readonly loads = new Map<string, Promise<unknown>>()
    private readonly cleanups = new Set<() => void>()
    private readonly exportsGuard = new ModuleExportsGuard(() => this.assertActive())
    private registration?: { alias: string; definition?: Definition }
    private queue: Promise<unknown> = Promise.resolve()

    private readonly bridge: ModuleBridge
    private readonly init: ModuleInit
    private readonly api: PulseSyncAddonApi

    constructor(bridge: ModuleBridge, init: ModuleInit, api: PulseSyncAddonApi) {
        this.bridge = bridge
        this.init = init
        this.api = api
    }

    readonly register = (definition: Definition) => {
        this.assertActive()
        const pending = this.registration
        if (
            !pending ||
            pending.definition ||
            !definition ||
            typeof definition.create !== 'function' ||
            definition.apiMajor !== this.init.descriptors[pending.alias]?.apiMajor
        )
            throw new Error('PulseSync modules: incompatible-api')
        pending.definition = definition
    }

    private assertActive() {
        if (this.abort.signal.aborted) throw new Error('PulseSync modules: aborted')
    }

    private get(alias: string, kind: Descriptor['kind'], options: Options): Promise<unknown> {
        this.assertActive()
        if (!Object.hasOwn(this.init.descriptors, alias)) {
            return Promise.reject(new Error(`PulseSync modules: ${this.init.errors[alias] ?? 'undeclared-module'}`))
        }
        if (this.init.descriptors[alias].kind !== kind) return Promise.reject(new Error('PulseSync modules: incompatible-api'))
        const existing = this.loads.get(alias)
        if (existing) return existing
        const promise = this.queue.then(() => this.initialize(alias, kind, options))
        this.queue = promise.catch(() => {})
        this.loads.set(alias, promise)
        void promise.catch(() => {
            if (this.loads.get(alias) === promise) this.loads.delete(alias)
        })
        return promise
    }

    private async initialize(alias: string, kind: Descriptor['kind'], options: Options) {
        this.assertActive()
        const descriptor = Object.freeze({ ...this.init.descriptors[alias] })
        let bytes: Uint8Array | undefined
        if (!this.init.development) {
            if (typeof options?.fetch !== 'function') throw new Error('PulseSync modules: access-denied')
            bytes = await options.fetch({ descriptor, signal: this.abort.signal })
            this.assertActive()
            if (!(bytes instanceof Uint8Array) || bytes.byteLength !== descriptor.size) throw new Error('PulseSync modules: integrity-mismatch')
        }
        const pending: { alias: string; definition?: Definition } = { alias }
        this.registration = pending
        try {
            const result = await this.bridge.load(alias, bytes)
            this.assertActive()
            if (result.kind !== kind) throw new Error('PulseSync modules: incompatible-api')
            if (kind === 'wasm') {
                if (!result.bytes) throw new Error('PulseSync modules: integrity-mismatch')
                const module = await WebAssembly.compile(new Uint8Array(result.bytes).buffer)
                this.assertActive()
                if (WebAssembly.Module.imports(module).length) throw new Error('PulseSync modules: incompatible-api')
                const instance = await WebAssembly.instantiate(module)
                this.assertActive()
                const facade = Object.create(null) as Record<string, (...args: unknown[]) => unknown>
                for (const [name, value] of Object.entries(instance.exports)) {
                    if (typeof value === 'function')
                        facade[name] = (...args) => {
                            this.assertActive()
                            return value(...args)
                        }
                }
                return Object.freeze(facade)
            }
            if (!pending.definition) throw new Error('PulseSync modules: initialization-failed')
            const instance = await pending.definition.create({ api: this.api, signal: this.abort.signal })
            if (!instance || !Object.hasOwn(instance, 'exports') || (instance.dispose !== undefined && typeof instance.dispose !== 'function')) {
                throw new Error('PulseSync modules: initialization-failed')
            }
            if (this.abort.signal.aborted) {
                instance.dispose?.()
                this.assertActive()
            }
            if (instance.dispose) this.cleanups.add(instance.dispose)
            return this.exportsGuard.wrap(instance.exports)
        } finally {
            if (this.registration === pending) this.registration = undefined
        }
    }

    readonly load = <T = unknown>(alias: string, options: Options): Promise<T> => this.get(alias, 'javascript', options) as Promise<T>
    readonly instantiateWasm = <T = unknown>(alias: string, options: Options): Promise<T> => this.get(alias, 'wasm', options) as Promise<T>

    readonly dispose = () => {
        if (this.abort.signal.aborted) return
        this.abort.abort()
        this.registration = undefined
        void this.bridge.dispose().catch(() => {})
        for (const cleanup of this.cleanups) {
            try {
                cleanup()
            } catch {}
        }
        this.cleanups.clear()
        this.loads.clear()
    }
}
