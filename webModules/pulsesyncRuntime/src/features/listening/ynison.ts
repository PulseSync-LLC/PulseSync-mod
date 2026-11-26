import { catalogItem, getYnison } from './nativeYnison';
import type { YnisonController, YnisonLocalSnapshot, YnisonPlayerState, YnisonVersion } from './nativeYnison';
import type { ListeningFrame, ListeningItem } from './protocol';

// Room following uses the native applier's reduced 200 ms seek threshold.
const POSITION_TOLERANCE_MS = 250;
const APPLY_TIMEOUT_MS = 8000;

interface DesiredPlayback {
    player: YnisonPlayerState;
    index: number;
    paused: boolean;
    playbackRate: number;
    durationMs: number;
    positionAt: (now: number) => number;
}

function version(controller: YnisonController): YnisonVersion {
    const state = controller.currentState.player_state;
    const timestamp = Math.max(
        Date.now(),
        state.status.version.timestamp_ms + 1,
        state.player_queue.version.timestamp_ms + 1,
    );

    return { device_id: controller.options.deviceConfig.info.device_id, version: timestamp, timestamp_ms: timestamp };
}

function sameItem(playable: YnisonPlayerState['player_queue']['playable_list'][number], item: ListeningItem): boolean {
    const value = catalogItem(playable);

    return value?.trackId === item.trackId && value.albumId === item.albumId;
}

function roomQueue(frame: ListeningFrame, base: YnisonPlayerState, index: number): YnisonPlayerState {
    return {
        ...base,
        player_queue_inject_optional: null,
        player_queue: {
            ...base.player_queue,
            entity_id: frame.queue[index]!.trackId,
            entity_type: 'VARIOUS',
            playable_list: frame.queue.map((item) => ({
                playable_id: item.trackId,
                playable_type: 'TRACK',
                album_id_optional: item.albumId,
                from: 'pulsesync-listening',
                title: '',
                cover_url_optional: null,
                navigation_id_optional: null,
                playback_action_id_optional: null,
            })),
            options: {
                repeat_mode: frame.repeatMode === 'one' ? 'ONE' : frame.repeatMode === 'context' ? 'ALL' : 'NONE',
            },
            shuffle_optional: null,
            entity_context: 'BASED_ON_ENTITY_BY_DEFAULT',
            from_optional: 'pulsesync-listening',
            initial_entity_optional: null,
            adding_options_optional: null,
            queue: null,
        },
    };
}

function desiredPlayback(frame: ListeningFrame, receivedAt: number, actual: YnisonPlayerState): DesiredPlayback {
    let player = actual;
    let index = actual.player_queue.current_playable_index;
    let paused = actual.status.paused;
    let playbackRate = actual.status.playback_speed;
    let position = actual.status.progress_ms;
    let at = performance.now();
    const selection =
        frame.role === 'listener'
            ? frame.target?.item
            : frame.command?.action.type === 'selectItem'
              ? frame.command.item
              : undefined;

    if (selection) {
        const selectedIndex = frame.queue.findIndex((item) => item.itemId === selection.itemId);

        if (selectedIndex < 0) {
            throw new Error('track_unavailable');
        }

        const native = actual.player_queue;
        const start = Math.max(0, native.current_playable_index - 8);
        const matches = (offset: number) =>
            frame.queue.every(
                (item, slot) =>
                    native.playable_list[offset + slot] && sameItem(native.playable_list[offset + slot], item),
            );
        const offset =
            native.playable_list.length === frame.queue.length && matches(0) ? 0 : matches(start) ? start : null;

        if (offset === null || (frame.role === 'listener' && native.shuffle_optional !== null)) {
            player = roomQueue(frame, actual, selectedIndex);
            index = selectedIndex;
        } else {
            index = offset + selectedIndex;
        }

        position = 0;
    }

    if (frame.role === 'listener' && frame.target) {
        paused = frame.target.status !== 'playing';
        playbackRate = frame.target.playbackRate;
        position = frame.target.positionMs;
        at = receivedAt;
    } else if (frame.role === 'listener') {
        paused = true;
    } else if (frame.command) {
        const action = frame.command.action;

        if (action.type === 'setPaused') {
            paused = action.paused;
        } else if (action.type === 'seek') {
            position = action.positionMs;
        } else if (action.type === 'setRate') {
            playbackRate = action.playbackRate;
        } else if (action.type === 'next' || action.type === 'previous') {
            index = Math.max(
                0,
                Math.min(actual.player_queue.playable_list.length - 1, index + (action.type === 'next' ? 1 : -1)),
            );
            position = 0;
        }
    }

    if (frame.role === 'listener') {
        // Local snapshots include wave source contexts, even for Various queues.
        // A room follows catalog tracks and must not restore those native radio sources.
        player = {
            ...player,
            player_queue_inject_optional: null,
            player_queue: {
                ...player.player_queue,
                queue: null,
                options: frame.target
                    ? {
                          repeat_mode:
                              frame.repeatMode === 'one' ? 'ONE' : frame.repeatMode === 'context' ? 'ALL' : 'NONE',
                      }
                    : player.player_queue.options,
            },
        };
    }

    const playable = player.player_queue.playable_list[index];

    if (!playable || !catalogItem(playable)) {
        throw new Error('track_unavailable');
    }

    return {
        player,
        index,
        paused,
        playbackRate,
        durationMs: frame.target?.durationMs ?? 0,
        positionAt: (now) => Math.round(Math.max(0, position + (paused ? 0 : Math.max(0, now - at) * playbackRate))),
    };
}

function queueMatches(actual: YnisonPlayerState, desired: DesiredPlayback): boolean {
    const queue = actual.player_queue;
    const expected = desired.player.player_queue;
    const order = queue.shuffle_optional?.playable_indices;
    const expectedOrder = expected.shuffle_optional?.playable_indices;
    const sameOrder =
        order === expectedOrder ||
        Boolean(
            order &&
            expectedOrder &&
            order.length === expectedOrder.length &&
            order.every((index, slot) => index === expectedOrder[slot]),
        );

    if (
        queue.options.repeat_mode !== expected.options.repeat_mode ||
        !sameOrder ||
        queue.current_playable_index !== desired.index ||
        queue.playable_list.length !== expected.playable_list.length
    ) {
        return false;
    }

    return (
        queue.playable_list === expected.playable_list ||
        queue.playable_list.every((item, index) => {
            const target = expected.playable_list[index];
            const left = catalogItem(item);
            const right = catalogItem(target);

            return left && right
                ? left.trackId === right.trackId && left.albumId === right.albumId
                : item.playable_id === target.playable_id && item.playable_type === target.playable_type;
        })
    );
}

async function publish(
    controller: YnisonController,
    desired: DesiredPlayback,
    now: number,
    actual?: YnisonPlayerState,
): Promise<void> {
    const nextVersion = version(controller);
    const previous = controller.currentState;
    const playable = actual?.player_queue.playable_list[actual.player_queue.current_playable_index];
    const expected = desired.player.player_queue.playable_list[desired.index];
    const sameTrack =
        playable &&
        expected &&
        playable.playable_id === expected.playable_id &&
        playable.album_id_optional === expected.album_id_optional;
    const knownDuration = sameTrack && actual.status.duration_ms > 0 ? actual.status.duration_ms : desired.durationMs;
    const duration = Number.isFinite(knownDuration) ? Math.max(0, Math.round(knownDuration)) : 0;
    const position = Math.min(duration, desired.positionAt(now));
    const player = desired.player;

    // Use the native incoming-state trigger: only real playback callbacks should
    // publish outgoing Ynison facts; writing the requested state is not an ack.
    controller.updateState({
        newState: {
            ...previous,
            active_device_id_optional: controller.options.deviceConfig.info.device_id,
            player_state: {
                ...player,
                player_queue: { ...player.player_queue, current_playable_index: desired.index, version: nextVersion },
                status: {
                    ...player.status,
                    paused: desired.paused,
                    progress_ms: position,
                    duration_ms: duration,
                    playback_speed: desired.playbackRate,
                    version: nextVersion,
                },
            },
        },
        skipVersionCompare: true,
        trigger: 'WSConnector',
    });
    await controller.whenPlaybackSettled?.();
}

export async function applyListeningFrame(
    frame: ListeningFrame,
    receivedAt: number,
    current: () => boolean,
    initialSnapshot?: YnisonLocalSnapshot,
): Promise<void> {
    const controller = getYnison();

    await controller?.whenPlaybackSettled?.();

    if (!current()) {
        return;
    }

    const local = controller?.whenPlaybackSettled
        ? controller.getLocalPlaybackSnapshot?.()
        : (initialSnapshot ?? controller?.getLocalPlaybackSnapshot?.());

    if (!controller || !local?.canRestore) {
        throw new Error('ynison_unavailable');
    }

    const desired = desiredPlayback(frame, receivedAt, local.playerState ?? controller.currentState.player_state);
    const deadline = performance.now() + APPLY_TIMEOUT_MS;
    let dispatched = false;
    let correctedAt = 0;
    let first = true;

    while (current() && performance.now() < deadline) {
        const now = performance.now();
        const snapshot = first ? local : controller.getLocalPlaybackSnapshot?.();

        first = false;

        const actual = snapshot?.playerState;
        const selected = actual && queueMatches(actual, desired);
        const position = Math.min(
            actual && selected && actual.status.duration_ms > 0 ? actual.status.duration_ms : 86400000,
            desired.positionAt(now),
        );
        const settled =
            selected &&
            snapshot &&
            (['playing', 'paused'].includes(snapshot.playbackStatus) ||
                (desired.paused && snapshot.playbackStatus === 'stopped'));
        const matches =
            settled &&
            actual.status.paused === desired.paused &&
            Math.abs(actual.status.playback_speed - desired.playbackRate) < 0.001 &&
            Math.abs(actual.status.progress_ms - position) <= POSITION_TOLERANCE_MS;

        if (matches) {
            return;
        }

        if (!snapshot?.canRestore) {
            throw new Error('ynison_unavailable');
        }

        if (!dispatched || (settled && now - correctedAt >= 1000)) {
            await publish(controller, desired, now, actual);
            dispatched = true;
            correctedAt = now;
        }

        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (current()) {
        throw new Error('track_unavailable');
    }
}
