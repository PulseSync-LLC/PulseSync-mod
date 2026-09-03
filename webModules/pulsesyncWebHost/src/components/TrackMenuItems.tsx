import { useEffect, useRef } from 'react'
import type { PulseSyncAddonApi, PulseSyncTrackMenuContext, TrackMenuItemDefinition } from '../contracts'

const CLICK_EVENT = 'pulsesync:track-menu-item-click'

type TrackMenuItemRegistrationProps = {
    api: PulseSyncAddonApi
    item: TrackMenuItemDefinition
}

function parseTrack(event: Event): PulseSyncTrackMenuContext | undefined {
    const detail = (event as CustomEvent<unknown>).detail
    if (typeof detail !== 'string') return undefined

    try {
        const track = JSON.parse(detail) as Partial<PulseSyncTrackMenuContext>
        return track.id && track.url ? (track as PulseSyncTrackMenuContext) : undefined
    } catch {
        return undefined
    }
}

function TrackMenuItemRegistration({ api, item }: TrackMenuItemRegistrationProps) {
    const registrationRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const registration = registrationRef.current
        if (!registration) return

        const onClick = (event: Event) => {
            const track = parseTrack(event)
            if (!track) return api.logger.error(`Track menu item ${item.id} received an invalid track`)

            Promise.resolve(item.onClick({ api, track })).catch(error => api.logger.error(`Track menu item ${item.id} failed`, error))
        }
        registration.addEventListener(CLICK_EVENT, onClick)
        return () => registration.removeEventListener(CLICK_EVENT, onClick)
    }, [api, item])

    return (
        <span
            ref={registrationRef}
            hidden
            data-pulsesync-track-menu-item=""
            data-pulsesync-addon-id={api.addonId}
            data-pulsesync-menu-item-id={item.id}
            data-pulsesync-menu-item-label={item.label}
            data-pulsesync-menu-item-icon={item.icon}
            data-pulsesync-menu-item-position={item.position ?? 'end'}
        />
    )
}

export function TrackMenuItems({ api, items }: { api: PulseSyncAddonApi; items: readonly TrackMenuItemDefinition[] }) {
    return items.map(item => <TrackMenuItemRegistration key={item.id} api={api} item={item} />)
}
