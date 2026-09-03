import type { NativeTrackMenuTools } from '../contracts';

const REGISTRATION_SELECTOR = '[data-pulsesync-track-menu-item]';
const LABEL_ATTRIBUTE = 'data-pulsesync-menu-item-label';
const ICON_ATTRIBUTE = 'data-pulsesync-menu-item-icon';
const POSITION_ATTRIBUTE = 'data-pulsesync-menu-item-position';
const CLICK_EVENT = 'pulsesync:track-menu-item-click';

function createTrackContext(track: Record<string, any>) {
    const [trackId, entityAlbumId] = String(track.id ?? '').split(':', 2);
    if (!trackId) return undefined;

    const albumId = String(track.albums?.[0]?.id ?? track.albumId ?? track.mainAlbum?.id ?? entityAlbumId ?? '').trim();
    const encodedTrackId = encodeURIComponent(trackId);
    const url = albumId ? `/album/${encodeURIComponent(albumId)}/track/${encodedTrackId}` : `/track/${encodedTrackId}`;

    return {
        id: trackId,
        url,
        ...(albumId ? { albumId } : {}),
        ...(track.title ? { title: String(track.title) } : {}),
    };
}

function resolvePosition(value: string | null, nativeItemCount: number) {
    if (value === 'start') return 0;
    if (!value || value === 'end') return nativeItemCount;

    const position = Number(value);
    return Number.isSafeInteger(position) ? Math.min(Math.max(position, 0), nativeItemCount) : nativeItemCount;
}

export function injectTrackMenuItems(nativeItems: unknown[], tools: NativeTrackMenuTools) {
    const track = createTrackContext(tools.track);
    if (!track) return nativeItems;

    const visibleNativeItems = nativeItems.filter(Boolean);
    const positions = new Map<number, unknown[]>();

    document.querySelectorAll<HTMLElement>(REGISTRATION_SELECTOR).forEach((registration, registrationIndex) => {
        const label = registration.getAttribute(LABEL_ATTRIBUTE)?.trim();
        const icon = registration.getAttribute(ICON_ATTRIBUTE)?.trim();
        if (!label || !icon) return;
        const addonId = registration.dataset.pulsesyncAddonId || 'unknown-addon';
        const itemId = registration.dataset.pulsesyncMenuItemId || String(registrationIndex);

        const position = resolvePosition(registration.getAttribute(POSITION_ATTRIBUTE), visibleNativeItems.length);
        const item = tools.jsx(
            tools.MenuItem,
            {
                icon: tools.jsx(tools.Icon, { variant: icon, size: 'xxs' }),
                onClick: () => {
                    registration.dispatchEvent(new CustomEvent(CLICK_EVENT, { detail: JSON.stringify(track) }));
                    tools.close();
                },
                children: label,
                'data-pulsesync-addon-menu-item': '',
            },
            `pulsesync-track-menu-item-${addonId}-${itemId}`,
        );
        const itemsAtPosition = positions.get(position) ?? [];
        itemsAtPosition.push(item);
        positions.set(position, itemsAtPosition);
    });

    if (!positions.size) return visibleNativeItems;

    const result: unknown[] = [];
    for (let index = 0; index <= visibleNativeItems.length; index += 1) {
        result.push(...(positions.get(index) ?? []));
        if (index < visibleNativeItems.length) result.push(visibleNativeItems[index]);
    }
    return result;
}
