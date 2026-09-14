import { useEffect, useState } from 'react';
import type { ModSettingsApi, ModSettingsPlatform } from '../api/modSettings';

type PlatformSnapshot = {
    api: ModSettingsApi;
    platform: ModSettingsPlatform | undefined;
};

export function usePlatform(api: ModSettingsApi | undefined): ModSettingsPlatform | undefined {
    const [snapshot, setSnapshot] = useState<PlatformSnapshot>();

    useEffect(() => {
        if (!api) return;
        let active = true;

        const readPlatform = async () => {
            try {
                const value = await api.getPlatform();
                if (!active) return;
                const platform = value === 'win32' || value === 'darwin' || value === 'linux' ? value : undefined;
                setSnapshot({ api, platform });
            } catch (error) {
                if (!active) return;
                setSnapshot({ api, platform: undefined });
                console.warn('[PulseSync Settings] Не удалось определить платформу', error);
            }
        };

        void readPlatform();
        return () => {
            active = false;
        };
    }, [api]);

    return snapshot?.api === api ? snapshot?.platform : undefined;
}
