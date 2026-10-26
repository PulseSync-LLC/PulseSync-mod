import { defineSettingsSection } from '../types';
import { YNISON_EXPERIMENT_DISABLED_DESCRIPTION } from '../../hooks/useYnisonExperimentEnabled';

const HARDWARE_ACCELERATION_KEY = 'modSettings.enableHardwareAcceleration';
const AUTO_STARTUP_KEY = 'modSettings.window.autoStartup';
const ENABLE_YNISON_REMOTE_CONTROL_KEY = 'enableYnisonPlayerRemoteControl';

export const systemSchema = defineSettingsSection({
    title: 'Системные настройки',
    items: [
        {
            type: 'toggle',
            key: 'devMode',
            defaultValue: true,
            title: 'Режим разработчика',
            description: 'Разблокирует Chromium DevTools и dev-панель мода.',
            restartRequired: true,
        },
        {
            type: 'toggle',
            key: 'modSettings.addons.verboseDiagnostics',
            defaultValue: false,
            title: 'Подробная диагностика аддонов',
            description: 'Выводит вызовы SDK и их длительность в консоль DevTools. Ошибки видны всегда.',
        },
        {
            type: 'toggle',
            key: HARDWARE_ACCELERATION_KEY,
            defaultValue: true,
            title: 'Включить аппаратное ускорение',
            description:
                'Настоятельно рекомендуется не выключать. Отключайте только если ни одни вариант настроек ниже не помог.',
            restartRequired: true,
        },
        {
            type: 'select',
            key: 'modSettings.hardwareAcceleration.angleEngine',
            defaultValue: 'default',
            title: 'API аппаратного ускорения',
            description: 'Изменение может помочь в некоторых случаях, пробуйте по убыванию в списке.',
            options: (context) =>
                [
                    { value: 'default', label: 'Авто' },
                    { value: 'd3d11', label: 'DirectX 11' },
                    { value: 'd3d11on12', label: 'DirectX 11 on 12' },
                    { value: 'gl', label: 'OpenGL' },
                    { value: 'd3d9', label: 'DirectX 9' },
                ].filter((option) => context.platform === 'win32' || !option.value.startsWith('d3d')),
            disabledWhen: (context) => !context.getBoolean(HARDWARE_ACCELERATION_KEY),
            restartRequired: true,
        },
        {
            type: 'toggle',
            key: 'modSettings.window.preventDisplaySleep',
            defaultValue: false,
            title: 'Предотвращать отключение монитора',
            description: 'Если включено и окно ЯМ видно на экране, он не уйдёт в сон от бездействия',
        },
        {
            type: 'toggle',
            key: AUTO_STARTUP_KEY,
            defaultValue: false,
            title: 'Автозапуск при старте системы',
            description: 'Приложение будет запускаться автоматически при включении системы.',
            onApplied: (value, context) => context.api?.setAutoStartupStatus(Boolean(value)),
        },
        {
            type: 'toggle',
            key: 'modSettings.window.minimizedStart',
            defaultValue: false,
            title: 'Автоматический запуск свернутым',
            description: 'Если включено, приложение будет запускаться свернутым в трей.',
        },
        {
            type: 'toggle',
            key: 'sendModAnonymizedMetrics',
            defaultValue: true,
            title: 'Отправлять анонимную статистику',
            description: 'Отключит отправку статистики Мода его разработчику. Не влияет на метрику Яндекса',
            restartRequired: true,
        },
    ],
});

export const ynisonSchema = defineSettingsSection({
    title: 'Ynison Remote',
    items: [
        {
            type: 'toggle',
            key: ENABLE_YNISON_REMOTE_CONTROL_KEY,
            defaultValue: true,
            title: 'Удалённое управление',
            description: (context) =>
                context.ynisonExperimentEnabled
                    ? 'Даст возможность управлять этим плеером с других устройств'
                    : YNISON_EXPERIMENT_DISABLED_DESCRIPTION,
            disabledWhen: (context) => !context.ynisonExperimentEnabled,
            badge: (context) => ({ label: 'BETA', disabled: !context.ynisonExperimentEnabled }),
            restartRequired: true,
        },
        {
            type: 'toggle',
            key: 'ynisonInterceptPlayback',
            defaultValue: false,
            title: 'Перехват Ynison',
            description: (context) =>
                context.ynisonExperimentEnabled
                    ? 'Воспроизведение с других плееров будет автоматически переходить на этот плеер'
                    : YNISON_EXPERIMENT_DISABLED_DESCRIPTION,
            disabledWhen: (context) =>
                !context.ynisonExperimentEnabled || !context.getBoolean(ENABLE_YNISON_REMOTE_CONTROL_KEY),
            badge: (context) => ({
                label: 'BETA',
                disabled: !context.ynisonExperimentEnabled || !context.getBoolean(ENABLE_YNISON_REMOTE_CONTROL_KEY),
            }),
            restartRequired: true,
        },
    ],
});
