import type { PulseSyncAddonApi } from '../contracts'

type AddonLifecycle = Pick<PulseSyncAddonApi, 'signal' | 'onCleanup' | 'setTimeout' | 'setInterval' | 'listen'>

export function createAddonLifecycle(signal: AbortSignal): AddonLifecycle {
    const cleanups = new Set<() => void>()
    const onCleanup = (cleanup: () => void) => {
        let active = true
        const dispose = () => {
            if (!active) return
            active = false
            cleanups.delete(dispose)
            cleanup()
        }
        if (signal.aborted) dispose()
        else cleanups.add(dispose)
        return dispose
    }
    signal.addEventListener(
        'abort',
        () => {
            for (const cleanup of [...cleanups]) {
                try {
                    cleanup()
                } catch (error) {
                    console.error('[PulseSync] Addon cleanup failed', error)
                }
            }
        },
        { once: true },
    )
    return Object.freeze({
        signal,
        onCleanup,
        setTimeout(callback, delayMs) {
            signal.throwIfAborted()
            const timer = window.setTimeout(() => {
                dispose()
                callback()
            }, delayMs)
            const dispose = onCleanup(() => window.clearTimeout(timer))
            return dispose
        },
        setInterval(callback, delayMs) {
            signal.throwIfAborted()
            const timer = window.setInterval(callback, delayMs)
            return onCleanup(() => window.clearInterval(timer))
        },
        listen(target, type, listener, options) {
            signal.throwIfAborted()
            target.addEventListener(type, listener, options)
            return onCleanup(() => target.removeEventListener(type, listener, options))
        },
    } satisfies AddonLifecycle)
}
