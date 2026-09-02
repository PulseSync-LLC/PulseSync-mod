import { useEffect, useState } from 'react'
import type { PulseSyncPageEntity, PulseSyncTrackMeta } from '@pulsesync/yamusic-types'
import type { PulseSyncAddonApi, PulseSyncAddonSlotComponent } from '../contracts'

const PLAYER_BAR_BUTTON_SLOT = 'playerBarButton'
const PAGE_ENTITY_SLOTS = new Set(['entityHeaderTitleAccessory', 'entityHeaderMeta', 'entityHeaderControls'])

type AddonSlotProps = {
    addonId: string
    api: PulseSyncAddonApi
    component: PulseSyncAddonSlotComponent
    slotName: string
}

export function AddonSlot({ addonId, api, component: Component, slotName }: AddonSlotProps) {
    const [currentTrack, setCurrentTrack] = useState<PulseSyncTrackMeta | null>(null)
    const [pageEntity, setPageEntity] = useState<PulseSyncPageEntity | null>(null)

    useEffect(() => {
        if (slotName === PLAYER_BAR_BUTTON_SLOT) return api.player.onTrackChange(setCurrentTrack)
        if (PAGE_ENTITY_SLOTS.has(slotName)) return api.page.onChange(setPageEntity)
    }, [api, slotName])

    const baseProps = { addonId, api, slot: slotName }
    if (slotName === PLAYER_BAR_BUTTON_SLOT) return <Component {...baseProps} currentTrack={currentTrack} />
    if (PAGE_ENTITY_SLOTS.has(slotName)) return <Component {...baseProps} pageEntity={pageEntity} />
    return <Component {...baseProps} />
}
