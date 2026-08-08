import type { Cleanup, PulseSyncAddonMountTarget } from '../contracts'
import type { IsolatedLog } from './contracts'

const STANDARD_SLOT_SELECTORS: Readonly<Record<string, readonly string[]>> = {
    playerBarButton: ['[data-test-id="PLAYERBAR_DESKTOP"] [class*="PlayerBarDesktop_meta__"]', '[data-test-id="PLAYERBAR_DESKTOP"]'],
}

export class IsolatedTargetRegistry {
    private readonly slots = new Map<string, Element>()
    private readonly onChange: () => void
    private readonly log: IsolatedLog

    constructor(onChange: () => void, log: IsolatedLog) {
        this.onChange = onChange
        this.log = log
    }

    registerSlot(slotName: string, element: Element): Cleanup {
        const normalizedName = String(slotName ?? '').trim()
        if (!normalizedName || !(element instanceof Element)) throw new Error('PulseSync isolated slot requires a name and DOM element')

        this.slots.set(normalizedName, element)
        this.onChange()

        return () => {
            if (this.slots.get(normalizedName) !== element) return
            this.slots.delete(normalizedName)
            this.onChange()
        }
    }

    resolveSlot(slotName: string): Element | null {
        const registered = this.slots.get(slotName)
        if (registered?.isConnected) return registered
        if (registered) this.slots.delete(slotName)

        const declared = document.querySelector(`[data-pulsesync-slot="${CSS.escape(slotName)}"]`)
        if (declared) return declared

        const registeredMarker = document.querySelector(`[data-pulsesync-slots~="${CSS.escape(slotName)}"]`)
        if (registeredMarker) return registeredMarker

        for (const selector of STANDARD_SLOT_SELECTORS[slotName] ?? []) {
            const target = document.querySelector(selector)
            if (target) return target
        }

        return null
    }

    resolveMountTarget(target: PulseSyncAddonMountTarget): Element | null {
        try {
            if (target instanceof Element) return target.isConnected ? target : null
            if (typeof target === 'string') return document.querySelector(target)
            if (typeof target === 'function') {
                const resolved = target()
                return resolved?.isConnected ? resolved : null
            }
            if ('selector' in target) return document.querySelector(target.selector)
            if ('slot' in target) return this.resolveSlot(target.slot)
        } catch (error) {
            this.log('warn', ['Failed to resolve addon mount target', error instanceof Error ? error.message : String(error)])
        }

        return null
    }

    clear() {
        this.slots.clear()
    }
}
