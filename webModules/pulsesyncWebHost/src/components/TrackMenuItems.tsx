import type { PulseSyncAddonApi, PulseSyncTrackMenuContext, TrackMenuItemDefinition } from '../contracts'
import { NativeSlotRegistrations, type NativeSlotRegistration } from './NativeSlotRegistrations'

const TRACK_CONTEXT_MENU_SLOT = 'trackContextMenu'

function parseTrack(detail: unknown): PulseSyncTrackMenuContext | undefined {
    if (!detail || typeof detail !== 'object') return undefined
    const track = detail as Partial<PulseSyncTrackMenuContext>
    return track.id && track.url ? (track as PulseSyncTrackMenuContext) : undefined
}

export function TrackMenuItems({ api, items }: { api: PulseSyncAddonApi; items: readonly TrackMenuItemDefinition[] }) {
    const registrations: NativeSlotRegistration[] = items.map(item => ({
        id: item.id,
        payload: { label: item.label, icon: item.icon },
        position: item.position,
        onActivate: detail => {
            const track = parseTrack(detail)
            if (!track) return api.logger.error(`Track menu item ${item.id} received an invalid track`)

            Promise.resolve()
                .then(() => item.onClick({ api, track }))
                .catch(error => api.logger.error(`Track menu item ${item.id} failed`, error))
        },
    }))

    return <NativeSlotRegistrations addonId={api.addonId} items={registrations} slotName={TRACK_CONTEXT_MENU_SLOT} />
}
