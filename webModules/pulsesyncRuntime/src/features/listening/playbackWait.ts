import type { YnisonController } from './nativeYnison';

const playbackWaits = new WeakMap<YnisonController, Set<(error?: unknown) => void>>();

export async function waitForPlayback(
    controller: YnisonController,
    current: () => boolean,
    deadline: number,
): Promise<boolean> {
    if (!current()) {
        return false;
    }

    if (performance.now() >= deadline) {
        throw new Error('sync_timeout');
    }

    if (!controller.whenPlaybackSettled) {
        return true;
    }

    let listeners = playbackWaits.get(controller);

    if (!listeners) {
        listeners = new Set();
        playbackWaits.set(controller, listeners);

        const pendingListeners = listeners;
        const settled = (error?: unknown) => {
            if (playbackWaits.get(controller) === pendingListeners) {
                playbackWaits.delete(controller);
            }

            for (const listener of [...pendingListeners]) {
                listener(error);
            }

            pendingListeners.clear();
        };

        Promise.resolve()
            .then(() => controller.whenPlaybackSettled!())
            .then(
                () => settled(),
                (error) => settled(error || new Error('playback_failed')),
            );
    }

    const pendingListeners = listeners;

    return new Promise((resolve, reject) => {
        let finished = false;
        const finish = (error?: unknown) => {
            if (finished) {
                return;
            }

            finished = true;
            clearInterval(timer);
            pendingListeners.delete(finish);

            if (!current()) {
                resolve(false);
            } else if (error) {
                reject(error);
            } else {
                resolve(true);
            }
        };
        const timer = setInterval(() => {
            if (!current()) {
                finish();
            } else if (performance.now() >= deadline) {
                finish(new Error('sync_timeout'));
            }
        }, 50);

        pendingListeners.add(finish);
    });
}
