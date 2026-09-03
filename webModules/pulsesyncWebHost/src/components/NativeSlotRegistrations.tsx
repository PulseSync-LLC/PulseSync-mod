import { useEffect, useRef } from 'react'

const ACTIVATE_EVENT = 'pulsesync:native-slot-activate'

export type NativeSlotRegistration = {
    readonly id: string
    readonly payload: unknown
    readonly position?: number | 'start' | 'end'
    readonly onActivate: (detail: unknown) => void
}

type NativeSlotRegistrationElementProps = {
    addonId: string
    item: NativeSlotRegistration
    slotName: string
}

function parseActivationDetail(event: Event) {
    const detail = (event as CustomEvent<unknown>).detail
    if (typeof detail !== 'string') return undefined

    try {
        return JSON.parse(detail) as unknown
    } catch {
        return undefined
    }
}

function NativeSlotRegistrationElement({ addonId, item, slotName }: NativeSlotRegistrationElementProps) {
    const registrationRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const registration = registrationRef.current
        if (!registration) return

        const onActivate = (event: Event) => item.onActivate(parseActivationDetail(event))
        registration.addEventListener(ACTIVATE_EVENT, onActivate)
        return () => registration.removeEventListener(ACTIVATE_EVENT, onActivate)
    }, [item])

    return (
        <span
            ref={registrationRef}
            hidden
            data-pulsesync-native-slot={slotName}
            data-pulsesync-addon-id={addonId}
            data-pulsesync-native-slot-item-id={item.id}
            data-pulsesync-native-slot-payload={JSON.stringify(item.payload)}
            data-pulsesync-native-slot-position={item.position ?? 'end'}
        />
    )
}

export function NativeSlotRegistrations({ addonId, items, slotName }: { addonId: string; items: readonly NativeSlotRegistration[]; slotName: string }) {
    return items.map(item => <NativeSlotRegistrationElement key={item.id} addonId={addonId} item={item} slotName={slotName} />)
}
