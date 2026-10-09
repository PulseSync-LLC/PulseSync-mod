import type { PulseSyncMetadataEntityType } from '@pulsesync/yamusic-types';
import { getPlayerInstance } from '../core/values';
import { callWithPlayer } from './player';
import { applyAlbum, applyArtist, applyTrack } from './metadataAdapters';
import { hasMetadataOverrides, onMetadataOverridesChange } from './metadataRegistry';
import {
    metadataEqual,
    metadataFields,
    restoreMetadataBaseline,
    toNativeMetadata,
    toRawMetadata,
    withoutMetadataSourceCapture,
    type MetadataSnapshot,
} from './metadataProvenance';

type Kind = PulseSyncMetadataEntityType;
type Patch = { op: 'replace'; path: string; value: unknown };
export interface NativeMetadataAdapter {
    getSnapshot(model: object): MetadataSnapshot;
    applyPatches(model: object, patches: Patch[]): void;
    isAlive(model: object): boolean;
}
type Model = { kind: Kind; target: object; adapter: NativeMetadataAdapter; baseline?: MetadataSnapshot; applied?: MetadataSnapshot };
const models = new Set<Model>();
const queueStates = new WeakMap<object, { baseline: MetadataSnapshot; applied: MetadataSnapshot }>();
let scheduled = false;
let queueCleanup: (() => void) | undefined;

function applyPolicy(kind: Kind, value: MetadataSnapshot): MetadataSnapshot {
    return withoutMetadataSourceCapture(() => (kind === 'track' ? applyTrack(value) : kind === 'album' ? applyAlbum(value) : applyArtist(value)) as MetadataSnapshot);
}
function updateBaseline(baseline: MetadataSnapshot, previous: MetadataSnapshot, current: MetadataSnapshot): void {
    for (const field of new Set([...Object.keys(previous), ...Object.keys(current)])) {
        if (field === 'id' || metadataEqual(previous[field], current[field])) continue;
        if (field in current) baseline[field] = structuredClone(current[field]);
        else delete baseline[field];
    }
}
function prepareModel(entry: Model): void {
    if (!entry.adapter.isAlive(entry.target)) {
        models.delete(entry);
        return;
    }
    const current = entry.adapter.getSnapshot(entry.target);
    entry.baseline ??= restoreMetadataBaseline(entry.kind, current, true);
    if (entry.applied) updateBaseline(entry.baseline, entry.applied, current);
}
function collectPatches(current: MetadataSnapshot, desired: MetadataSnapshot, path = ''): Patch[] {
    const patches: Patch[] = [];
    for (const field of Object.keys(current)) {
        if (field === 'id' || metadataEqual(current[field], desired[field])) continue;
        const nextPath = `${path}/${field.replace(/~/g, '~0').replace(/\//g, '~1')}`;
        const before = current[field],
            after = desired[field];
        if (
            (field === 'artists' || field === 'albums') &&
            Array.isArray(before) &&
            Array.isArray(after) &&
            before.length === after.length &&
            before.every((item, index) => item && after[index] && String(item.id) === String(after[index].id))
        ) {
            before.forEach((item, index) => patches.push(...collectPatches(item, after[index], `${nextPath}/${index}`)));
        } else patches.push({ op: 'replace', path: nextPath, value: after });
    }
    return patches;
}
function refreshModel(entry: Model): void {
    if (!entry.baseline || !entry.adapter.isAlive(entry.target)) return;
    const current = entry.adapter.getSnapshot(entry.target);
    const desired = toNativeMetadata(entry.kind, applyPolicy(entry.kind, toRawMetadata(entry.kind, entry.baseline)), entry.baseline);
    const patches = collectPatches(current, desired);
    // Native applyPatches owns the MST action; protection and audio state remain untouched.
    for (const patch of patches) {
        try {
            entry.adapter.applyPatches(entry.target, [patch]);
        } catch {
            /* An unsupported optional field must not block the rest. */
        }
    }
}
function refreshQueueTrack(target: unknown): void {
    if (!target || typeof target !== 'object') return;
    const track = target as MetadataSnapshot;
    let state = queueStates.get(track);
    if (!state) {
        state = { baseline: restoreMetadataBaseline('track', track, false), applied: structuredClone(track) };
        queueStates.set(track, state);
    } else updateBaseline(state.baseline, state.applied, track);
    const desired = applyPolicy('track', structuredClone(state.baseline));
    for (const field of metadataFields('track')) {
        if (metadataEqual(track[field], desired[field])) continue;
        try {
            if (field in desired) track[field] = structuredClone(desired[field]);
            else delete track[field];
        } catch {}
    }
    state.applied = structuredClone(track);
}
function refresh(): void {
    scheduled = false;
    const nested = new Set<object>();
    for (const entry of models) {
        if (entry.kind === 'artist' || !entry.adapter.isAlive(entry.target)) continue;
        const target = entry.target as MetadataSnapshot;
        for (const field of entry.kind === 'track' ? ['artists', 'albums'] : ['artists']) {
            for (const child of target[field] ?? []) nested.add(child);
        }
    }
    // The parent applies the policy to its children and owns their rollback baseline.
    const batch = [...models].filter((entry) => !nested.has(entry.target));
    // Capture external changes before any child or parent writes. Otherwise a child patch
    // could be mistaken for a new server baseline when its parent is visited later.
    for (const operation of [
        prepareModel,
        refreshModel,
        (entry: Model) => {
            if (entry.adapter.isAlive(entry.target)) entry.applied = structuredClone(entry.adapter.getSnapshot(entry.target));
        },
    ]) {
        for (const entry of batch) {
            try {
                operation(entry);
            } catch {
                /* A stale model cannot block the rest of the batch. */
            }
        }
    }
    try {
        const queue = getPlayerInstance()?.state?.queueState;
        const tracks = new Set<unknown>([queue?.currentEntity?.value?.entity?.entityData?.meta]);
        for (const entry of (queue?.entityList?.value ?? []).slice(0, 2000)) tracks.add(entry?.entity?.entityData?.meta ?? entry?.entity?.data?.meta);
        for (const track of tracks) {
            try {
                refreshQueueTrack(track);
            } catch {}
        }
    } catch {}
    if (!hasMetadataOverrides()) {
        queueCleanup?.();
        queueCleanup = undefined;
    }
}
function scheduleRefresh(): void {
    if (!scheduled) {
        scheduled = true;
        queueMicrotask(refresh);
    }
}
function watchQueue(): void {
    if (queueCleanup || !hasMetadataOverrides() || typeof window === 'undefined') return;
    let active = true;
    const cleanups: (() => void)[] = [];
    queueCleanup = () => {
        active = false;
        for (const cleanup of cleanups) cleanup();
    };
    try {
        callWithPlayer((player) => {
            if (!active) return;
            for (const observable of [player.state?.queueState?.entityList, player.state?.queueState?.currentEntity]) {
                const cleanup = (observable as { onChange?: (listener: () => void) => unknown })?.onChange?.(scheduleRefresh);
                if (typeof cleanup === 'function') cleanups.push(cleanup as () => void);
            }
            scheduleRefresh();
        });
    } catch {}
}

/** Called by the native model's afterCreate; cleanup belongs to its beforeDestroy. */
export function registerNativeMetadataModel(kind: Kind, target: object, adapter: NativeMetadataAdapter): () => void {
    const entry: Model = { kind, target, adapter };
    models.add(entry);
    scheduleRefresh();
    watchQueue();
    return () => {
        models.delete(entry);
    };
}
onMetadataOverridesChange(() => {
    scheduleRefresh();
    watchQueue();
});
