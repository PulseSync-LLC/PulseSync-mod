import type {
    NativeLyricsLine,
    NativeLyricsSnapshot,
    NativeLyricsTimings,
    NativeLyricsWord,
} from '@pulsesync/yamusic-types';
import {
    getNativePlayerRoot,
    notifyNativePlayerChange,
    observeNativePlayer,
    type NativePlayerRoot,
} from './nativePlayer';
import { getPlayerSnapshot } from './addonCapabilities';

type RowPatch = {
    row: Record<string, any>;
    original: { words: unknown; toSec: unknown };
    applied: { words: unknown; toSec: unknown };
};
type Lease = {
    root: NativePlayerRoot;
    model: Record<string, any>;
    trackId: string;
    patches: RowPatch[];
    dispose: () => void;
};

const leases = new Map<string, Lease>();
let revision = 0;
let previousKey = '';
let previousModel: WeakRef<Record<string, any>> | undefined;
const ms = (seconds: unknown): number | null =>
    typeof seconds === 'number' && Number.isFinite(seconds) ? seconds * 1000 : null;

export function getNativeLyricsSnapshot(): NativeLyricsSnapshot {
    const root = getNativePlayerRoot(),
        model = root?.store.fullscreenPlayer?.syncLyrics;
    const trackId = model?.currentTrackId == null ? null : String(model.currentTrackId);

    for (const [owner, lease] of leases) {
        if (
            lease.root !== root ||
            lease.model !== model ||
            lease.trackId !== trackId ||
            lease.patches.some(({ row }) => !model?.lines?.includes(row))
        ) {
            lease.dispose();
            leases.delete(owner);
        }
    }

    const lines: NativeLyricsLine[] = Array.from(model?.lines ?? [], (line: any) => ({
        text: String(line.text),
        startMs: ms(line.fromSec) ?? 0,
        sourceStartMs: ms(line.fromSec),
        endMs: ms(line.toSec),
        words: Array.from(line.words ?? [], (word: any) => ({
            text: String(word.text),
            startMs: ms(word.fromSec) ?? 0,
            endMs: ms(word.toSec),
        })),
    }));
    const data = { available: Boolean(model), trackId, loadingState: String(model?.loadingState ?? 'IDLE'), lines };
    const key = JSON.stringify(data);

    if (key !== previousKey || previousModel?.deref() !== model) {
        ++revision;
        previousKey = key;
        previousModel = model ? new WeakRef(model) : undefined;
    }

    return { ...data, revision };
}

export function onNativeLyricsChange(listener: (snapshot: NativeLyricsSnapshot) => void) {
    let seen = getNativeLyricsSnapshot().revision;

    return observeNativePlayer(() => {
        const snapshot = getNativeLyricsSnapshot();

        if (snapshot.revision !== seen) {
            seen = snapshot.revision;
            listener(snapshot);
        }
    });
}

function ownerKey(owner: unknown) {
    if (typeof owner !== 'string' || !owner.trim() || owner.length > 256) {
        throw new TypeError('Lyrics owner is required');
    }

    return owner;
}

function same(a: unknown, b: unknown) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function restore(lease: Lease) {
    if (!lease.root.adapter.isAlive(lease.model) || String(lease.model.currentTrackId) !== lease.trackId) {
        return false;
    }

    const changes: Array<{ op: 'replace'; path: string; value: unknown }> = [];

    for (const patch of lease.patches) {
        if (!lease.root.adapter.isAlive(patch.row)) {
            continue;
        }

        const index = lease.model.lines?.indexOf(patch.row) ?? -1;

        if (index < 0) {
            continue;
        }

        const value = lease.root.adapter.getSnapshot(patch.row);

        if (same(value.words, patch.applied.words)) {
            changes.push({ op: 'replace', path: `/${index}/words`, value: patch.original.words });
        }

        if (Object.is(value.toSec, patch.applied.toSec)) {
            changes.push({ op: 'replace', path: `/${index}/toSec`, value: patch.original.toSec });
        }
    }

    if (changes.length) {
        lease.root.adapter.applyPatches(lease.model.lines, changes);
    }

    return changes.length > 0;
}

export function clearNativeLyricsTimings(ownerId = 'global'): boolean {
    const owner = ownerKey(ownerId),
        lease = leases.get(owner);

    if (!lease) {
        return false;
    }

    leases.delete(owner);
    lease.root.cleanups.delete(lease.dispose);

    const changed = restore(lease);

    notifyNativePlayerChange();

    return changed;
}

export function setNativeLyricsTimings(input: NativeLyricsTimings, ownerId = 'global'): boolean {
    const owner = ownerKey(ownerId);

    if (
        !input ||
        typeof input !== 'object' ||
        typeof input.trackId !== 'string' ||
        !Number.isSafeInteger(input.revision) ||
        !Array.isArray(input.lines) ||
        !input.lines.length ||
        input.lines.length > 2000
    ) {
        throw new TypeError('Invalid native lyric timings');
    }

    const snapshot = getNativeLyricsSnapshot(),
        root = getNativePlayerRoot();
    const model = root?.store.fullscreenPlayer?.syncLyrics;

    if (
        !root ||
        !model ||
        snapshot.loadingState !== 'RESOLVE' ||
        snapshot.revision !== input.revision ||
        snapshot.trackId !== input.trackId ||
        String(getPlayerSnapshot().track?.id ?? '') !== input.trackId
    ) {
        return false;
    }

    const seen = new Set<number>(),
        updates: RowPatch[] = [];
    let segments = 0;

    for (const update of input.lines) {
        if (
            !update ||
            !Number.isSafeInteger(update.index) ||
            update.index < 0 ||
            seen.has(update.index) ||
            !Array.isArray(update.words) ||
            !update.words.length ||
            (segments += update.words.length) > 30000
        ) {
            throw new TypeError('Invalid native lyric row');
        }

        seen.add(update.index);

        const row = model.lines?.[update.index];

        if (!row || row.text !== update.text) {
            return false;
        }

        if ([...leases].some(([id, lease]) => id !== owner && lease.patches.some((patch) => patch.row === row))) {
            return false;
        }

        let previous = -Infinity;
        const words: Array<{ text: string; fromSec: number; toSec: number | undefined }> = update.words.map(
            (word: NativeLyricsWord) => {
                if (
                    !word ||
                    typeof word.text !== 'string' ||
                    !word.text.length ||
                    !Number.isFinite(word.startMs) ||
                    word.startMs < 0 ||
                    word.startMs < previous ||
                    (word.endMs !== null && (!Number.isFinite(word.endMs) || word.endMs < word.startMs))
                ) {
                    throw new TypeError('Invalid native lyric segment');
                }

                previous = word.startMs;

                return {
                    text: word.text,
                    fromSec: word.startMs / 1000,
                    toSec: word.endMs === null ? undefined : word.endMs / 1000,
                };
            },
        );

        if (words.map((word) => word.text).join('') !== row.text) {
            throw new TypeError('Lyric segments must preserve native text');
        }

        const nextStart = model.lines[update.index + 1]?.fromSec;
        const end = update.endMs === undefined ? row.toSec : update.endMs / 1000;

        if (
            update.endMs !== undefined &&
            (!Number.isFinite(end) || end! < row.fromSec || (typeof nextStart === 'number' && end! >= nextStart))
        ) {
            throw new TypeError('Invalid native lyric row end');
        }

        const value = root.adapter.getSnapshot(row);
        const prior = leases.get(owner)?.patches.find((patch) => patch.row === row);

        updates.push({
            row,
            original: {
                words: prior && same(value.words, prior.applied.words) ? prior.original.words : value.words,
                toSec: prior && Object.is(value.toSec, prior.applied.toSec) ? prior.original.toSec : value.toSec,
            },
            applied: { words, toSec: end },
        });
    }

    // Validate every row before writing; replacing fields keeps native row identities stable.
    root.adapter.applyPatches(
        model.lines,
        updates.flatMap((patch) => {
            const index = model.lines.indexOf(patch.row);

            return [
                { op: 'replace' as const, path: `/${index}/words`, value: patch.applied.words },
                { op: 'replace' as const, path: `/${index}/toSec`, value: patch.applied.toSec },
            ];
        }),
    );

    const prior = leases.get(owner);

    if (prior) {
        root.cleanups.delete(prior.dispose);
    }

    const patches = [
        ...(prior?.patches ?? []).filter((patch) => !updates.some((update) => update.row === patch.row)),
        ...updates,
    ];
    const lease: Lease = {
        root,
        model,
        trackId: input.trackId,
        patches,
        dispose: () => {
            clearNativeLyricsTimings(owner);
        },
    };

    leases.set(owner, lease);
    root.cleanups.add(lease.dispose);
    notifyNativePlayerChange();

    return true;
}
