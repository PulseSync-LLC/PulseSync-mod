import { useEffect, useState } from 'react';
import type { ShortcutsHelperAction, ShortcutsHelperStatus } from '../../../../shared/musicDesktop';
import type { ModSettingsApi } from '../../api/modSettings';
import { SettingAction } from '../../components/controls/SettingAction';
import { SettingsItem } from '../../components/settings/SettingsItem';
import styles from './GlobalShortcutsSettings.module.scss';

const TITLE = 'Системный помощник PulseSync';
const DESCRIPTION =
    'Помощник нужен, если горячие клавиши Яндекс Музыки не срабатывают в играх или приложениях, запущенных от имени администратора.';

export function ShortcutsHelperSettings({ api }: { api: ModSettingsApi | undefined }) {
    const [status, setStatus] = useState<ShortcutsHelperStatus>();
    const [pendingAction, setPendingAction] = useState<Exclude<ShortcutsHelperAction, 'status'>>();
    const [error, setError] = useState<string>();
    const [statusRequest, setStatusRequest] = useState(0);
    const supported = api?.supportsShortcutsHelper?.() ?? false;

    useEffect(() => {
        if (!supported) {
            return;
        }

        let active = true;

        void api
            ?.configureShortcutsHelper?.('status')
            .then((result) => {
                if (!active) {
                    return;
                }

                if (!result || 'error' in result) {
                    throw new Error('Helper status is unavailable');
                }

                setStatus(result);
            })
            .catch(() => {
                if (active) {
                    setError('Не удалось проверить состояние системного помощника.');
                }
            });

        return () => {
            active = false;
        };
    }, [api, supported, statusRequest]);

    const configure = api?.configureShortcutsHelper;

    if (!configure || !supported) {
        return null;
    }

    let actionLabel = error ? 'Повторить' : 'Проверка…';

    if (status) {
        actionLabel = status.available ? (status.installed ? 'Удалить' : 'Установить') : 'Недоступен';
    }

    if (pendingAction) {
        actionLabel = pendingAction === 'uninstall' ? 'Удаление…' : 'Установка…';
    }

    const changeInstallation = async () => {
        if (!status) {
            setError(undefined);
            setStatusRequest((request) => request + 1);

            return;
        }

        const action = status.installed ? 'uninstall' : 'install';

        setPendingAction(action);
        setError(undefined);

        try {
            const result = await configure(action);

            if (result && 'error' in result) {
                setError(result.error);
            } else if (result) {
                setStatus(result);
            }
        } catch {
            setError('Не удалось изменить установку системного помощника.');
        } finally {
            setPendingAction(undefined);
        }
    };

    return (
        <div className={styles.helper}>
            <SettingsItem id="shortcuts-helper" searchText={[TITLE, DESCRIPTION]}>
                <SettingAction
                    title={TITLE}
                    description={DESCRIPTION}
                    actionLabel={actionLabel}
                    disabled={Boolean(pendingAction) || (status ? !status.available : !error)}
                    onClick={() => void changeInstallation()}
                />
            </SettingsItem>
            {error && (
                <p className={styles.error} role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
