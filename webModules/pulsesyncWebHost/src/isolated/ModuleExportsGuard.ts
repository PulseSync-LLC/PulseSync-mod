export class ModuleExportsGuard {
    private readonly facades = new WeakMap<object, object>()
    private readonly originals = new WeakMap<object, object>()

    private readonly assertActive: () => void

    constructor(assertActive: () => void) {
        this.assertActive = assertActive
    }

    wrap(value: unknown): unknown {
        if (!value || (typeof value !== 'object' && typeof value !== 'function')) return value
        const existing = this.facades.get(value)
        if (existing) return existing
        if (value instanceof Promise) {
            const guarded = value.then(result => {
                this.assertActive()
                return this.wrap(result)
            })
            this.facades.set(value, guarded)
            return guarded
        }
        if (ArrayBuffer.isView(value) || value instanceof ArrayBuffer || value instanceof Date || value instanceof RegExp) return value
        const target = typeof value === 'function' ? function () {} : Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value))
        const facade = new Proxy(target, {
            get: (target, key) => {
                this.assertActive()
                const own = Reflect.getOwnPropertyDescriptor(target, key)
                if (own && !own.configurable && 'value' in own && !own.writable) return own.value
                return this.wrap(Reflect.get(value, key, value))
            },
            apply: (_target, receiver, args) => {
                this.assertActive()
                return this.wrap(Reflect.apply(value as (...args: unknown[]) => unknown, this.originals.get(receiver) ?? receiver, args))
            },
            construct: (_target, args) => {
                this.assertActive()
                return this.wrap(Reflect.construct(value as new (...args: unknown[]) => object, args)) as object
            },
            has: (_target, key) => {
                this.assertActive()
                return key in value
            },
            ownKeys: target => {
                this.assertActive()
                return [...new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(value)])]
            },
            getOwnPropertyDescriptor: (target, key) => {
                this.assertActive()
                const own = Reflect.getOwnPropertyDescriptor(target, key)
                if (own && !own.configurable) return own.writable ? { ...own, value: Reflect.get(value, key, value) } : own
                return key in value
                    ? {
                          configurable: true,
                          enumerable: true,
                          get: () => {
                              this.assertActive()
                              return this.wrap(Reflect.get(value, key, value))
                          },
                      }
                    : undefined
            },
            set: () => false,
        })
        this.facades.set(value, facade)
        this.originals.set(facade, value)
        return facade
    }
}
