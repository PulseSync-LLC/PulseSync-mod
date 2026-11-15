type Model = Record<string, any>;
export type NativePlayerAdapter = {
    getSnapshot: (model: Model) => any;
    applyPatches: (model: Model, patches: Array<{ op: 'replace'; path: string; value: unknown }>) => void;
    isAlive: (model: Model) => boolean;
    subscribe: (model: Model, listener: (patch: { path: string }) => void) => () => void;
};

export type NativePlayerRoot = {
    store: Model;
    adapter: NativePlayerAdapter;
    cleanups: Set<() => void>;
};

let current: NativePlayerRoot | undefined;
let disposeRoot: (() => void) | undefined;
let scheduled = false;
const listeners = new Set<() => void>();

export function getNativePlayerRoot() {
    return current && current.adapter.isAlive(current.store) ? current : undefined;
}

export function notifyNativePlayerChange() {
    if (scheduled) {
        return;
    }

    scheduled = true;
    queueMicrotask(() => {
        scheduled = false;

        for (const listener of [...listeners]) {
            try {
                listener();
            } catch (error) {
                console.error('[PulseSync] Native player listener failed', error);
            }
        }
    });
}

export function observeNativePlayer(listener: () => void) {
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    };
}

export function registerNativePlayerRoot(store: Model, adapter?: NativePlayerAdapter) {
    if (typeof adapter?.subscribe !== 'function') {
        return () => {};
    }

    disposeRoot?.();

    const root: NativePlayerRoot = { store, adapter, cleanups: new Set() };

    current = root;

    const unsubscribe = adapter.subscribe(store, (patch) => {
        if (patch.path === '/fullscreenPlayer' || patch.path.startsWith('/fullscreenPlayer/')) {
            notifyNativePlayerChange();
        }
    });
    let active = true;
    const dispose = () => {
        if (!active) {
            return;
        }

        active = false;
        unsubscribe();

        for (const cleanup of [...root.cleanups]) {
            try {
                cleanup();
            } catch (error) {
                console.error('[PulseSync] Native player cleanup failed', error);
            }
        }

        root.cleanups.clear();

        if (current === root) {
            current = undefined;
        }

        if (disposeRoot === dispose) {
            disposeRoot = undefined;
        }

        notifyNativePlayerChange();
    };

    disposeRoot = dispose;
    notifyNativePlayerChange();

    return dispose;
}
