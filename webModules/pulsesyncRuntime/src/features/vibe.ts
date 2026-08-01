import type { PulseSyncPlayer } from '../contracts';
import { DEFAULT_VIBE_SEEDS } from '../core/values';
import { callWithPlayer } from './player';

export type VibeParams = {
    seed?: string;
    seeds?: string[];
    from?: string;
    parentContextId?: string;
    screen?: string;
};

export function normalizeVibeSeeds(params: VibeParams = {}) {
    const seeds = Array.isArray(params.seeds) ? params.seeds : typeof params.seed === 'string' ? [params.seed] : [];
    return seeds.map((seed) => String(seed ?? '').trim()).filter(Boolean);
}

export function playVibeBySeeds(params: VibeParams = {}) {
    const seeds = normalizeVibeSeeds(params);
    const nextSeeds = seeds.length ? seeds : [...DEFAULT_VIBE_SEEDS];

    callWithPlayer((player: PulseSyncPlayer) => {
        if (typeof player.playContext !== 'function') return;
        const from = params.from || player.state?.currentContext?.value?.contextData?.from || 'external';
        player.playContext({
            contextData: {
                type: 'vibe',
                meta: { id: nextSeeds.join(',') },
                seeds: nextSeeds,
                from,
                includeTracksInResponse: true,
                interactive: true,
                ...(params.parentContextId ? { parentContextId: params.parentContextId } : {}),
            },
            loadContextMeta: true,
        });
    });
}
