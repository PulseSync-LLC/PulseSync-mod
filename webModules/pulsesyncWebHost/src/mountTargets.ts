import type { PulseSyncAddonMountTarget } from './contracts'

const targetKeys = new WeakMap<Element, number>()
let nextTargetKey = 0

export function mountTargetKey(target: Element) {
    let key = targetKeys.get(target)

    if (key === undefined) {
        key = ++nextTargetKey
        targetKeys.set(target, key)
    }

    return key
}

export function resolveAddonMountTargets(
    target: PulseSyncAddonMountTarget,
    resolveSlot: (slot: string) => Element | null,
    onError: (error: unknown) => void,
): Element[] {
    try {
        if (target instanceof Element) {
            return target.isConnected ? [target] : []
        }

        if (typeof target === 'string') {
            const element = document.querySelector(target)

            return element ? [element] : []
        }

        if (typeof target === 'function') {
            const element = target()

            return element?.isConnected ? [element] : []
        }

        if ('selector' in target) {
            if (target.all) {
                return Array.from(document.querySelectorAll(target.selector))
            }

            const element = document.querySelector(target.selector)

            return element ? [element] : []
        }

        if ('slot' in target) {
            const element = resolveSlot(target.slot)

            return element ? [element] : []
        }
    } catch (error) {
        onError(error)
    }

    return []
}
