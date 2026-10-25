import { defineSettingsSection, type SettingsSchemaContext } from '../types';

const PREFIX = 'modSettings.crossfade.';
const ENABLED_KEY = `${PREFIX}enabled`;
const MODE_KEY = `${PREFIX}mode`;
const PRESET_KEY = `${PREFIX}preset`;

function getPreset(value: string, context: SettingsSchemaContext) {
    if (value === 'yandex' || value === 'adjust' || value === 'custom') {
        return value;
    }

    return context.getBoolean(ENABLED_KEY)
        ? context.getString(MODE_KEY) === 'adjust'
            ? 'adjust'
            : 'custom'
        : 'yandex';
}

const presetIs = (preset: string) => (context: SettingsSchemaContext) =>
    getPreset(context.getString(PRESET_KEY), context) === preset;
const adjustsYandex = presetIs('adjust');
const customDuration = presetIs('custom');
const secondsLabel = (value: number) => `${String(value).replace('.', ',')} с`;
const offsetLabel = (value: number) =>
    value === 0 ? 'Как у Яндекса' : `${value > 0 ? '+' : ''}${secondsLabel(value)}`;

export const crossfadeSchema = defineSettingsSection({
    title: 'Кроссфейд',
    watch: [
        { key: ENABLED_KEY, defaultValue: false },
        { key: MODE_KEY, defaultValue: 'custom' },
    ],
    items: [
        {
            key: PRESET_KEY,
            type: 'select',
            // Preserve the previous enabled/mode choice until a preset is selected.
            defaultValue: null,
            displayValue: getPreset,
            title: 'Переход между треками',
            options: [
                {
                    value: 'yandex',
                    label: 'Как у Яндекса',
                    description: 'Автоматические переходы без изменений.',
                },
                {
                    value: 'adjust',
                    label: 'Подправить',
                    description: 'Сделать переходы Яндекса чуть длиннее или короче.',
                },
                {
                    value: 'custom',
                    label: 'Своя длительность',
                    description: 'Одинаковая длительность перехода для всех треков.',
                },
            ],
        },
        {
            key: `${PREFIX}fadeInOffsetSec`,
            type: 'slider',
            defaultValue: 0,
            title: 'Начало трека',
            description: 'Плюс делает нарастание дольше, минус короче.',
            min: -5,
            max: 5,
            step: 0.5,
            valueLabel: offsetLabel,
            hiddenWhen: (context) => !adjustsYandex(context),
        },
        {
            key: `${PREFIX}fadeOutOffsetSec`,
            type: 'slider',
            defaultValue: 0,
            title: 'Конец трека',
            description: 'Плюс делает затухание дольше, минус короче.',
            min: -5,
            max: 5,
            step: 0.5,
            valueLabel: offsetLabel,
            hiddenWhen: (context) => !adjustsYandex(context),
        },
        {
            key: `${PREFIX}adjustmentCurve`,
            type: 'select',
            defaultValue: 'original',
            title: 'Громкость при переходе',
            options: [
                { value: 'original', label: 'Как у Яндекса' },
                {
                    value: 'equalPower',
                    label: 'Ровнее по громкости',
                    description: 'Меньше проседает громкость в середине перехода.',
                },
            ],
            hiddenWhen: (context) => !adjustsYandex(context),
        },
        {
            key: `${PREFIX}durationSec`,
            type: 'slider',
            defaultValue: 5,
            title: 'Длительность',
            description: 'Сколько секунд два трека звучат вместе.',
            min: 1,
            max: 12,
            step: 0.5,
            valueLabel: secondsLabel,
            hiddenWhen: (context) => !customDuration(context),
        },
        {
            key: `${PREFIX}curve`,
            type: 'select',
            defaultValue: 'equalPower',
            title: 'Громкость при переходе',
            options: [
                { value: 'linear', label: 'Обычная' },
                {
                    value: 'equalPower',
                    label: 'Ровнее по громкости',
                    description: 'Меньше проседает громкость в середине перехода.',
                },
            ],
            hiddenWhen: (context) => !customDuration(context),
        },
        {
            id: 'crossfade-note',
            type: 'note',
            text: 'Для работы включите «Плавные переходы между треками» в настройках Яндекс Музыки.',
        },
    ],
});
