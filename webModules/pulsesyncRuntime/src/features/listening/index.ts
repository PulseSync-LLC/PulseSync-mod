import { showModal, clearAddonModals } from '../nativeModals';
import { applyListeningFrame } from './ynison';
import {
    lockListeningControls,
    ownedByOtherDevice,
    readListeningSource,
    reclaimLocalPlayback,
    currentLocalTrack,
    getYnison,
} from './nativeYnison';
import { parseFrame } from './protocol';
import type { ListeningFrame } from './protocol';
import type { ListeningSynchronization } from './nativeYnison';

// Only the desktop client can enable the feature. No ticket or raw Ynison state is sent
// through this bridge; Ynison ownership is reduced to a local following failure reason.
export function installListeningRuntime(): void {
    const desktop = window.musicDesktop?.pulsesync.player;

    if (!desktop?.onListeningFrame || !desktop.listeningReady) {
        return;
    }

    let latest: ListeningFrame | null = null;
    let receivedAt = 0;
    let generation = 0;
    let busy = false;
    let retryAt = 0;
    let reason: string | null = null;
    let synchronization: ListeningSynchronization = null;
    let allowTakeover = false;
    let button: HTMLSpanElement | undefined;
    let buttonAt = -Infinity;
    let intent = '';
    let scheduled = false;
    let disposed = false;
    const listeningWindow = window as Window & { pulseSyncListeningRole?: ListeningFrame['role'] };
    const publishRole = (frame: ListeningFrame | null) => {
        const role = frame?.enabled && frame.roomId ? frame.role : null;

        if ((listeningWindow.pulseSyncListeningRole ?? null) === role) {
            return;
        }

        listeningWindow.pulseSyncListeningRole = role;
        window.dispatchEvent(new Event('pulsesync:listening-role-change'));
    };
    let warnedLocalTrack: string | null = null;
    let lastSource: ReturnType<typeof readListeningSource> = null;
    let lastSourceAt = 0;
    let localModalOpen = false;
    const commands = new Set<string>();
    const disable = () => {
        latest = null;
        intent = '';
        lastSource = null;
        warnedLocalTrack = null;
        clearAddonModals('pulsesync-listening');
        publishRole(null);
        generation++;
        reason = null;
        synchronization = null;
        allowTakeover = false;
        lockListeningControls(0);
        button?.remove();
        button = undefined;
    };
    const updateButton = (force = false) => {
        if (!force && performance.now() - buttonAt < 1000) {
            return;
        }

        buttonAt = performance.now();

        const target = document.querySelector('[data-test-id="PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON"]')?.parentElement;

        if (!target) {
            return;
        }

        if (!button?.isConnected) {
            button = document.createElement('span');
            button.dataset.pulsesyncListening = 'true';
            button.addEventListener('pulsesync:native-control-activate', () => {
                if (reason === 'device_taken_over') {
                    try {
                        if (reclaimLocalPlayback()) {
                            allowTakeover = true;
                            reason = null;
                            generation++;
                        }
                    } catch {
                        reason = 'device_taken_over';
                    }
                } else {
                    desktop.openListeningRoom?.();
                }
            });
            target.append(button);
        }

        const label =
            reason === 'device_taken_over' ? 'Вернуться к совместному прослушиванию' : 'Совместное прослушивание';
        const control = JSON.stringify({
            kind: 'icon-button',
            icon: 'twoUsers',
            label,
            tooltip: label,
            variant: 'text',
            size: 's',
        });

        if (button.getAttribute('data-pulsesync-native-control') !== control) {
            button.setAttribute('data-pulsesync-native-control', control);
        }
    };
    const onFrame = (value: unknown) => {
        const frame = parseFrame(value);

        if (!frame || !frame.enabled) {
            disable();

            return;
        }

        const nextIntent = JSON.stringify([
            frame.roomId,
            frame.epoch,
            frame.role,
            frame.queue,
            frame.repeatMode,
            frame.shuffle,
            frame.command,
            frame.target?.item.itemId,
            frame.target?.status,
            frame.target?.playbackRate,
        ]);
        const now = performance.now();
        const expected = latest?.target
            ? latest.target.positionMs +
              (latest.target.status === 'playing' ? (now - receivedAt) * latest.target.playbackRate : 0)
            : 0;
        const seek = frame.target && latest?.target && Math.abs(frame.target.positionMs - expected) > 250;

        if (nextIntent !== intent || seek) {
            generation++;
            synchronization = frame.target || frame.command ? 'preparing' : null;
            retryAt = 0;

            if (reason !== 'device_taken_over') {
                reason = null;
            }
        }

        intent = nextIntent;

        if (frame.role === 'host' && !frame.command && reason !== 'device_taken_over') {
            reason = null;
        }

        if (latest?.roomId !== frame.roomId || latest?.epoch !== frame.epoch) {
            commands.clear();
            reason = null;
            allowTakeover = false;
        }

        latest = frame;
        receivedAt = performance.now();
        publishRole(frame);
        lockListeningControls(frame.role === 'listener' ? receivedAt + frame.validForMs : 0);
        updateButton(true);
        scheduleProcess();
    };
    const processFrame = () => {
        const frame = latest;

        if (!frame) {
            return;
        }

        if (performance.now() - receivedAt >= frame.validForMs) {
            disable();

            return;
        }

        const remote = ownedByOtherDevice();

        if (!remote) {
            allowTakeover = false;
        }

        if (remote && !allowTakeover) {
            reason = 'device_taken_over';
        } else if (reason === 'device_taken_over') {
            reason = null;
        }

        lockListeningControls(
            frame.role === 'listener' && reason !== 'device_taken_over' ? receivedAt + frame.validForMs : 0,
        );
        updateButton();

        if (!frame.roomId) {
            return;
        }

        const snapshot = getYnison()?.getLocalPlaybackSnapshot?.();
        const localTrack = frame.role === 'host' && frame.roomId ? currentLocalTrack(snapshot) : null;

        if (!localTrack) {
            warnedLocalTrack = null;
        }

        if (localTrack && warnedLocalTrack !== localTrack && !localModalOpen) {
            warnedLocalTrack = localTrack;
            localModalOpen = true;
            void showModal(
                'alert',
                {
                    title: 'Локальный трек недоступен участникам',
                    message:
                        'Этот трек загружен локально и доступен только вам. Его нельзя включить для совместного прослушивания. Выберите трек из каталога Яндекс Музыки.',
                    confirmLabel: 'Понятно',
                },
                'pulsesync-listening',
            )
                .catch(() => {
                    warnedLocalTrack = null;
                })
                .finally(() => {
                    localModalOpen = false;
                });
        }

        const source = localTrack
            ? {
                  capturedAtMs: Date.now(),
                  items: [],
                  currentIndex: 0,
                  status: 'buffering' as const,
                  positionMs: 0,
                  durationMs: null,
                  playbackRate: 1,
                  reason: 'track_unavailable' as const,
                  synchronization: null,
              }
            : readListeningSource(reason, snapshot, synchronization);

        if (source && frame.roomId) {
            const now = performance.now();
            const changed =
                !lastSource ||
                lastSource.reason !== source.reason ||
                lastSource.synchronization !== source.synchronization ||
                lastSource.status !== source.status ||
                lastSource.currentIndex !== source.currentIndex ||
                ('repeatMode' in source && lastSource.repeatMode !== source.repeatMode) ||
                ('shuffle' in source && lastSource.shuffle !== source.shuffle) ||
                lastSource.playbackRate !== source.playbackRate ||
                lastSource.durationMs !== source.durationMs ||
                JSON.stringify(lastSource.items) !== JSON.stringify(source.items) ||
                Math.abs(
                    source.positionMs -
                        (lastSource.positionMs +
                            (source.status === 'playing' ? (now - lastSourceAt) * source.playbackRate : 0)),
                ) > 100;

            if (changed || now - lastSourceAt >= 1000) {
                desktop.reportListeningSource?.(source);
                lastSource = {
                    ...source,
                    repeatMode: 'repeatMode' in source ? source.repeatMode : 'none',
                    shuffle: 'shuffle' in source ? source.shuffle : false,
                };
                lastSourceAt = now;
            }
        }

        if (
            busy ||
            performance.now() < retryAt ||
            reason === 'device_taken_over' ||
            localTrack ||
            (!frame.target &&
                frame.role === 'listener' &&
                (!snapshot?.playerState || snapshot.playerState.status.paused)) ||
            (!frame.target && !frame.command && frame.role !== 'listener')
        ) {
            return;
        }

        if (frame.command && commands.has(frame.command.commandId)) {
            return;
        }

        const currentGeneration = generation,
            capturedAt = receivedAt;
        const current = () =>
            latest !== null && generation === currentGeneration && performance.now() - receivedAt < latest.validForMs;

        busy = true;
        void applyListeningFrame(frame, capturedAt, current, snapshot)
            .then(() => {
                if (!current()) {
                    return;
                }

                reason = null;
                synchronization = null;

                if (frame.command) {
                    commands.add(frame.command.commandId);

                    if (commands.size > 32) {
                        commands.delete(commands.values().next().value!);
                    }

                    const actual = readListeningSource(null);

                    if (actual) {
                        desktop.reportListeningSource?.(actual);
                    }

                    desktop.reportListeningApplied?.({ commandId: frame.command.commandId, ok: true, source: actual });
                }
            })
            .catch((error: unknown) => {
                if (!current()) {
                    return;
                }

                retryAt = performance.now() + 2000;

                const code = error instanceof Error ? error.message : null;

                synchronization =
                    code === 'sync_timeout' ? 'timeout' : code === 'ynison_unavailable' ? 'preparing' : null;
                reason = code === 'ynison_unavailable' ? null : 'playback_failed';

                if (frame.command) {
                    desktop.reportListeningApplied?.({ commandId: frame.command.commandId, ok: false });
                }
            })
            .finally(() => {
                busy = false;
            });
    };
    const scheduleProcess = () => {
        if (scheduled || disposed) {
            return;
        }

        scheduled = true;
        queueMicrotask(() => {
            scheduled = false;

            if (!disposed) {
                processFrame();
            }
        });
    };
    const timer = window.setInterval(scheduleProcess, 250);
    const unsubscribe = desktop.onListeningFrame(onFrame);

    window.addEventListener('pulsesync:local-playback-change', scheduleProcess);

    window.addEventListener(
        'pagehide',
        () => {
            disposed = true;
            window.clearInterval(timer);
            window.removeEventListener('pulsesync:local-playback-change', scheduleProcess);
            unsubscribe();
            disable();
        },
        { once: true },
    );
    desktop.listeningReady();
}
