import catalog from '../data/ncsCatalog.json';
import { getPlayerInstance } from '../core/values';
import { callWithPlayer } from './player';

const ANIMATION_VARIANT_KEY = 'modSettings.vibeAnimationEnhancement.animationVariant';
let animationVariant: unknown;

type TrackMetadata = {
    title?: string;
    version?: string;
    artists?: readonly { name?: string }[];
};

export type NcsCatalogTrack = (typeof catalog.tracks)[number];

function normalize(value: string) {
    return value
        .normalize('NFKD')
        .replace(/\p{M}/gu, '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[’'`]/g, '')
        .replace(/[^\p{L}\p{N}]+/gu, ' ')
        .trim();
}

function normalizeTitle(value: string) {
    return normalize(
        value
            .replace(/[([]\s*ncs(?:\s+(?:release|music|official))?\s*[)\]]/gi, '')
            .replace(/[([]\s*(?:feat\.?|ft\.?|featuring)\s+[^)\]]*[)\]]/gi, '')
            .replace(/\s+(?:feat\.?|ft\.?|featuring)\s+[^([]*/i, ''),
    );
}

const tracksByTitle = new Map<string, { track: NcsCatalogTrack; artists: Set<string> }[]>();

for (const track of catalog.tracks) {
    const title = normalizeTitle(track.title);
    const entries = tracksByTitle.get(title) ?? [];

    entries.push({ track, artists: new Set(track.artists.map(normalize)) });
    tracksByTitle.set(title, entries);
}

export function findNcsTrack(track: TrackMetadata | null | undefined): NcsCatalogTrack | null {
    if (typeof track?.title !== 'string' || !Array.isArray(track.artists)) {
        return null;
    }

    let title = normalizeTitle(track.title);
    const version = normalizeTitle(track.version ?? '');

    if (version && !['original', 'original mix', 'ncs release'].includes(version) && !title.endsWith(` ${version}`)) {
        title = `${title} ${version}`;
    }

    const mainArtist = normalize(track.artists[0]?.name ?? '');

    if (!title || !mainArtist) {
        return null;
    }

    const artists = new Set(track.artists.map((artist) => normalize(artist.name ?? '')));

    return (
        tracksByTitle
            .get(title)
            ?.find(
                (entry) => entry.artists.has(mainArtist) && [...entry.artists].every((artist) => artists.has(artist)),
            )?.track ?? null
    );
}

export function resolveNcsAnimationVariant(track: TrackMetadata | null | undefined): 'vibe' | 'ncs' {
    if (animationVariant === 'auto') {
        return findNcsTrack(track) ? 'ncs' : 'vibe';
    }

    return animationVariant === 'ncs' ? 'ncs' : 'vibe';
}

export function installNcsCatalog() {
    animationVariant = window.nativeSettings?.get?.(ANIMATION_VARIANT_KEY);
    window.PulseSyncNcs = { findTrack: findNcsTrack, resolveAnimationVariant: resolveNcsAnimationVariant };

    let unlocking = false;

    const unlockAnimation = () => {
        const player = getPlayerInstance();

        if (unlocking || player?.state?.playerState?.status?.value !== 'playing' || animationVariant != null) {
            return;
        }

        const track = player.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta;

        if (!findNcsTrack(track)) {
            return;
        }

        const api = window.pulsesyncApi;

        if (!api) {
            return;
        }

        unlocking = true;
        void api
            .setModSetting(ANIMATION_VARIANT_KEY, 'auto')
            .then(() =>
                api.showToast('У этого трека есть секрет. В меню анимации появился режим Auto', { durationMs: 5000 }),
            )
            .catch((error) => {
                unlocking = false;
                console.warn('[PulseSync] Failed to unlock NCS animation:', error);
            });
    };

    window.pulsesyncApi?.onModSettingChange(ANIMATION_VARIANT_KEY, (value) => {
        animationVariant = value;
        unlockAnimation();
    });

    callWithPlayer((player) => {
        player.state?.playerState?.status?.onChange?.(unlockAnimation);
        player.state?.queueState?.currentEntity?.onChange?.(unlockAnimation);
        unlockAnimation();
    });
}
