import { useSyncExternalStore } from 'react';

const EVENT = 'pulsesync:ynison-experiment-change';

export const YNISON_EXPERIMENT_DISABLED_DESCRIPTION = 'Недоступно: эксперимент Ynison отключён.';

function readSnapshot() {
    return (
        (window as Window & { __PULSESYNC_YNISON_EXPERIMENT_ENABLED__?: boolean })
            .__PULSESYNC_YNISON_EXPERIMENT_ENABLED__ === true
    );
}

function subscribe(listener: () => void) {
    window.addEventListener(EVENT, listener);

    return () => window.removeEventListener(EVENT, listener);
}

export function useYnisonExperimentEnabled() {
    return useSyncExternalStore(subscribe, readSnapshot, () => false);
}
