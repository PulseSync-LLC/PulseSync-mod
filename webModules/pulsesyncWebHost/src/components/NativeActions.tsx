import type {
    AlbumMenuContext,
    AlbumMenuItemDefinition,
    HeaderActionDefinition,
    PlayerBarButtonDefinition,
    PlaylistMenuContext,
    PlaylistMenuItemDefinition,
    PulseSyncAddonApi,
} from '../contracts'
import { NativeSlotRegistrations, type NativeSlotRegistration } from './NativeSlotRegistrations'

function parseEntity<TContext extends { id: string }>(detail: unknown): TContext | undefined {
    if (!detail || typeof detail !== 'object') return undefined
    const entity = detail as Partial<TContext>
    return entity.id ? (entity as TContext) : undefined
}

function menuRegistrations<TItem extends { id: string; label: string; icon: string; position?: number | 'start' | 'end' }>(
    api: PulseSyncAddonApi,
    items: readonly TItem[],
    entityName: string,
    invoke: (item: TItem, detail: unknown) => void,
) {
    return items.map<NativeSlotRegistration>(item => ({
        id: item.id,
        payload: { label: item.label, icon: item.icon },
        position: item.position,
        onActivate: detail => {
            try {
                invoke(item, detail)
            } catch (error) {
                api.logger.error(`${entityName} menu item ${item.id} failed`, error)
            }
        },
    }))
}

export function AlbumMenuItems({ api, items }: { api: PulseSyncAddonApi; items: readonly AlbumMenuItemDefinition[] }) {
    const registrations = menuRegistrations(api, items, 'Album', (item, detail) => {
        const album = parseEntity<AlbumMenuContext>(detail)
        if (!album) return api.logger.error(`Album menu item ${item.id} received an invalid album`)
        Promise.resolve()
            .then(() => item.onClick({ api, album }))
            .catch(error => api.logger.error(`Album menu item ${item.id} failed`, error))
    })
    return <NativeSlotRegistrations addonId={api.addonId} items={registrations} slotName="albumContextMenu" />
}

export function PlaylistMenuItems({ api, items }: { api: PulseSyncAddonApi; items: readonly PlaylistMenuItemDefinition[] }) {
    const registrations = menuRegistrations(api, items, 'Playlist', (item, detail) => {
        const playlist = parseEntity<PlaylistMenuContext>(detail)
        if (!playlist) return api.logger.error(`Playlist menu item ${item.id} received an invalid playlist`)
        Promise.resolve()
            .then(() => item.onClick({ api, playlist }))
            .catch(error => api.logger.error(`Playlist menu item ${item.id} failed`, error))
    })
    return <NativeSlotRegistrations addonId={api.addonId} items={registrations} slotName="playlistContextMenu" />
}

export function PlayerBarButtons({ api, items }: { api: PulseSyncAddonApi; items: readonly PlayerBarButtonDefinition[] }) {
    const registrations = items.map<NativeSlotRegistration>(item => ({
        id: item.id,
        payload: { label: item.label, description: item.description, icon: item.icon },
        position: item.position,
        onActivate: () => {
            Promise.resolve(api.player.getSnapshot())
                .then(snapshot => item.onClick({ api, currentTrack: snapshot.track ?? null }))
                .catch(error => api.logger.error(`Player bar button ${item.id} failed`, error))
        },
    }))
    return <NativeSlotRegistrations addonId={api.addonId} items={registrations} slotName="playerBarButtons" />
}

export function HeaderActions({ api, items }: { api: PulseSyncAddonApi; items: readonly HeaderActionDefinition[] }) {
    const registrations = items.map<NativeSlotRegistration>(item => ({
        id: item.id,
        payload: { label: item.label, description: item.description, icon: item.icon },
        position: item.position,
        onActivate: () => {
            Promise.resolve(api.page.getSnapshot())
                .then(pageEntity => item.onClick({ api, pageEntity }))
                .catch(error => api.logger.error(`Header action ${item.id} failed`, error))
        },
    }))
    return <NativeSlotRegistrations addonId={api.addonId} items={registrations} slotName="headerActions" />
}
