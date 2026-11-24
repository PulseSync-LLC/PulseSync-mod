import { applyListeningFrame } from './ynison';
import { lockListeningControls, ownedByOtherDevice, readListeningSource, reclaimLocalPlayback } from './nativeYnison';
import { parseFrame } from './protocol';
import type { ListeningFrame } from './protocol';

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
    let allowTakeover = false;
    let button: HTMLSpanElement | undefined;
    const listeningWindow = window as Window & { pulseSyncListeningRole?: ListeningFrame['role'] };
    const publishRole = (frame: ListeningFrame | null) => {
        const role = frame?.enabled && frame.roomId ? frame.role : null;

        if ((listeningWindow.pulseSyncListeningRole ?? null) === role) {
            return;
        }

        listeningWindow.pulseSyncListeningRole = role;
        window.dispatchEvent(new Event('pulsesync:listening-role-change'));
    };
    const commands = new Set<string>();
    const disable = () => {
        latest = null;
        publishRole(null);
        generation++;
        reason = null;
        allowTakeover = false;
        lockListeningControls(0);
        button?.remove();
        button = undefined;
    };
    const updateButton = () => {
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
    const unsubscribe = desktop.onListeningFrame((value) => {
        const frame = parseFrame(value);

        if (!frame || !frame.enabled) {
            disable();

            return;
        }

        if (
            latest?.roomId !== frame.roomId ||
            latest.epoch !== frame.epoch ||
            latest.revision !== frame.revision ||
            latest.command?.commandId !== frame.command?.commandId
        ) {
            generation++;
        }

        if (frame.role === 'host' && !frame.command && reason !== 'device_taken_over') {
            reason = null;
        }

        if (latest?.roomId !== frame.roomId || latest?.epoch !== frame.epoch) {
            commands.clear();
            reason = null;
            allowTakeover = false;
        }

        latest = frame;
        receivedAt = Date.now();
        publishRole(frame);
        lockListeningControls(frame.role === 'listener' ? receivedAt + frame.validForMs : 0);
        updateButton();
    });
    const timer = window.setInterval(() => {
        const frame = latest;

        if (!frame) {
            return;
        }

        if (Date.now() - receivedAt >= frame.validForMs) {
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

        const source = readListeningSource(reason);

        if (source && frame.roomId) {
            desktop.reportListeningSource?.(source);
        }

        if (busy || Date.now() < retryAt || reason === 'device_taken_over' || (!frame.target && !frame.command)) {
            return;
        }

        if (frame.command && commands.has(frame.command.commandId)) {
            return;
        }

        const currentGeneration = generation,
            capturedAt = receivedAt;
        const current = () =>
            latest !== null && generation === currentGeneration && Date.now() - receivedAt < latest.validForMs;

        busy = true;
        void applyListeningFrame(frame, capturedAt, current)
            .then(() => {
                if (!current()) {
                    return;
                }

                reason = null;

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

                retryAt = Date.now() + 2000;
                reason =
                    error instanceof Error && error.message === 'track_unavailable'
                        ? 'track_unavailable'
                        : 'playback_failed';

                if (frame.command) {
                    desktop.reportListeningApplied?.({ commandId: frame.command.commandId, ok: false });
                }
            })
            .finally(() => {
                busy = false;
            });
    }, 250);

    window.addEventListener(
        'pagehide',
        () => {
            window.clearInterval(timer);
            unsubscribe();
            disable();
        },
        { once: true },
    );
    desktop.listeningReady();
}
