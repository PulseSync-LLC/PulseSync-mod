import { useEffect, useState } from 'react'
import type { PulseSyncPageEntity } from '@pulsesync/yamusic-types'
import type { PulseSyncAddonApi, PulseSyncAddonSlotComponent } from '../contracts'
import { getTrackContextMenuTrack } from '../trackContextMenu'
import { useCurrentTrack } from '../useCurrentTrack'

const PLAYER_BAR_BUTTON_SLOT = 'playerBarButton'
const TRACK_CONTEXT_MENU_ITEM_SLOT = 'trackContextMenuItem'
const PAGE_ENTITY_SLOTS = new Set(['entityHeaderTitleAccessory', 'entityHeaderMeta', 'entityHeaderControls'])

type AddonSlotProps = {
    addonId: string
    api: PulseSyncAddonApi
    component: PulseSyncAddonSlotComponent
    slotName: string
}

export function AddonSlot({ addonId, api, component: Component, slotName }: AddonSlotProps) {
    const [pageEntity, setPageEntity] = useState<PulseSyncPageEntity | null>(null)
    const currentTrack = useCurrentTrack(api, slotName === PLAYER_BAR_BUTTON_SLOT || slotName === TRACK_CONTEXT_MENU_ITEM_SLOT)

    useEffect(() => {
        if (PAGE_ENTITY_SLOTS.has(slotName)) return api.page.onChange(setPageEntity)
    }, [api, slotName])

    const baseProps = { addonId, api, slot: slotName }
    if (slotName === PLAYER_BAR_BUTTON_SLOT) return <Component {...baseProps} currentTrack={currentTrack} />
    if (PAGE_ENTITY_SLOTS.has(slotName)) return <Component {...baseProps} pageEntity={pageEntity} />
    if (slotName === TRACK_CONTEXT_MENU_ITEM_SLOT) {
        const track = getTrackContextMenuTrack(currentTrack)
        return track ? <Component {...baseProps} track={track} /> : null
    }
    return <Component {...baseProps} />
}
