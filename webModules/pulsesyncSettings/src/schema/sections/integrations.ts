import { defineSettingsSection } from '../types'

const DISCORD_PREFIX = 'modSettings.discordRPC.'
const DISCORD_ENABLE_KEY = `${DISCORD_PREFIX}enable`
const SHOW_BUTTONS_KEY = `${DISCORD_PREFIX}showButtons`
const OVERRIDE_DEEP_LINKS_KEY = `${DISCORD_PREFIX}overrideDeepLinksExperiment`
const discordDisabled = (context: {
  getBoolean: (key: string) => boolean
}) => !context.getBoolean(DISCORD_ENABLE_KEY)

export const discordRpcSchema = defineSettingsSection({
  title: 'Discord RPC',
  requiresPremium: true,
  items: [
    {
      type: 'toggle',
      key: DISCORD_ENABLE_KEY,
      defaultValue: true,
      title: 'Включить интеграцию с Discord',
    },
    {
      type: 'toggle',
      key: `${DISCORD_PREFIX}hideBranding`,
      defaultValue: false,
      title: 'Скрыть брендинг PulseSync в статусе',
      requiresPremium: true,
      displayValue: (value, context) => value && context.premium.value,
      disabledWhen: discordDisabled,
      badge: (context) => ({
        label: 'Basic',
        disabled: discordDisabled(context) || !context.premium.value,
        tooltip: {
          title: 'Премиум функция',
          description: context.premium.value
            ? 'У вас есть подписка Basic'
            : 'Оформите Basic подписку, чтобы разблокировать',
        },
      }),
    },
    {
      type: 'toggle',
      key: `${DISCORD_PREFIX}fromYnison`,
      defaultValue: false,
      title: 'Использовать Ynison',
      description:
        'Использует данные о воспроизведении с других устройств',
      disabledWhen: discordDisabled,
      badge: (context) => ({
        label: 'BETA',
        disabled: discordDisabled(context),
      }),
    },
    {
      type: 'select',
      key: `${DISCORD_PREFIX}statusDisplayType`,
      defaultValue: 0,
      title: 'Тип отображения статуса',
      description: 'Что будет отображаться в коротком статусе',
      options: [
        { value: '0', label: 'Платформа' },
        { value: '1', label: 'Артист' },
        { value: '2', label: 'Трек' },
      ],
      disabledWhen: discordDisabled,
    },
    {
      type: 'select',
      key: `${DISCORD_PREFIX}applicationIDForRPC`,
      defaultValue: '1124055337234858005',
      title: 'Локализация платформы в статусе',
      options: [
        {
          value: '1124055337234858005',
          label: 'Английский',
          description: 'Listening to Yandex Music',
        },
        {
          value: '1290778445370097674',
          label: 'Русский',
          description: 'Слушает Яндекс Музыку',
        },
      ],
      disabledWhen: discordDisabled,
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: `${DISCORD_PREFIX}showAlbum`,
      defaultValue: true,
      title: 'Отображать Альбом',
      description: 'Отображать ли название альбома в статусе',
      disabledWhen: discordDisabled,
    },
    {
      type: 'toggle',
      key: `${DISCORD_PREFIX}showVersion`,
      defaultValue: true,
      title: 'Отображать Версию трека',
      description: 'Отображать ли версию трека в статусе',
      disabledWhen: discordDisabled,
    },
    {
      type: 'toggle',
      key: `${DISCORD_PREFIX}showSmallIcon`,
      defaultValue: false,
      title: 'Отображать маленькую иконку',
      description:
        'Отображать ли иконку статуса воспроизведения (Playing, Paused)',
      disabledWhen: discordDisabled,
    },
    {
      type: 'toggle',
      key: SHOW_BUTTONS_KEY,
      defaultValue: true,
      title: 'Отображать кнопки',
      description: 'Отображает кнопки-ссылки в статусе',
      disabledWhen: discordDisabled,
    },
    {
      type: 'toggle',
      key: OVERRIDE_DEEP_LINKS_KEY,
      defaultValue: false,
      title: 'Объединить веб и апп ссылки в одну',
      description:
        'Уберёт ссылку открывающую приложение т.к. это сделает ссылка на сайт',
      disabledWhen: (context) =>
        discordDisabled(context) || !context.getBoolean(SHOW_BUTTONS_KEY),
    },
    {
      type: 'toggle',
      key: `${DISCORD_PREFIX}showGitHubButton`,
      defaultValue: true,
      title: 'Отображать кнопку на сайт PulseSync',
      description: 'Отображает кнопку установки мода',
      disabledWhen: (context) =>
        discordDisabled(context) ||
        !context.getBoolean(SHOW_BUTTONS_KEY) ||
        !context.getBoolean(OVERRIDE_DEEP_LINKS_KEY),
    },
    {
      type: 'slider',
      key: `${DISCORD_PREFIX}afkTimeout`,
      defaultValue: 15,
      title: 'Таймер бездействия',
      description:
        'Через сколько в минутах активность автоматически пропадёт',
      min: 0,
      max: 30,
      step: 1,
      disabledWhen: discordDisabled,
    },
    {
      type: 'slider',
      key: `${DISCORD_PREFIX}reconnectInterval`,
      defaultValue: 30,
      title: 'Повторное подключение к Discord',
      description:
        'Интервал повторных попыток подключения к Discord при потере соединения (в секундах, 0 — отключает)',
      min: 0,
      max: 300,
      step: 5,
      disabledWhen: discordDisabled,
    },
  ],
})

const LRCLIB_PREFIX = 'modSettings.lrclib.'
const USE_TEXT_KEY = `${LRCLIB_PREFIX}useText`
const PREFER_LRCLIB_KEY = `${LRCLIB_PREFIX}preferLrclib`
const USE_WORD_SYNC_KEY = `${LRCLIB_PREFIX}useWordSync`
const LOOKUP_MODE_KEY = `${LRCLIB_PREFIX}lookupMode`
const USE_TITLE_ONLY_FALLBACK_KEY = `${LRCLIB_PREFIX}useTitleOnlyFallback`
const USE_TRACK_VERSION_KEY = `${LRCLIB_PREFIX}useTrackVersion`

export const lrclibSchema = defineSettingsSection({
  title: 'Настройки LRCLib',
  items: [
    {
      type: 'toggle',
      key: USE_TEXT_KEY,
      defaultValue: true,
      title: 'Использовать LRCLib для текста',
      badge: { label: 'ALPHA' },
      description: (context) =>
        context.getBoolean(USE_TEXT_KEY)
          ? 'Если в Яндекс Музыке текста нет, то ищем в LRCLib'
          : 'Берём текст только из Яндекс Музыки',
    },
    {
      type: 'toggle',
      key: PREFER_LRCLIB_KEY,
      defaultValue: false,
      title: 'Предпочитать LRCLib',
      description: (context) =>
        context.getBoolean(PREFER_LRCLIB_KEY)
          ? 'Сначала ищем текст в LRCLib, нативный используем только если ничего не найдено'
          : 'Сначала используем нативный текст Яндекс Музыки',
      disabledWhen: (context) => !context.getBoolean(USE_TEXT_KEY),
    },
    {
      type: 'toggle',
      key: USE_WORD_SYNC_KEY,
      defaultValue: true,
      title: 'Использовать пословную синхронизацию',
      description: (context) =>
        context.getBoolean(USE_WORD_SYNC_KEY)
          ? 'Используем пословную лирику LRCLIB, когда она доступна'
          : 'Всегда используем построчную лирику LRCLIB',
      disabledWhen: (context) => !context.getBoolean(USE_TEXT_KEY),
    },
    {
      type: 'select',
      key: LOOKUP_MODE_KEY,
      defaultValue: 'get',
      title: 'Режим поиска LRCLib',
      options: [
        {
          value: 'get',
          label: 'Точный поиск',
          description: 'Ищет текст по всем данным текущего трека',
        },
        {
          value: 'search',
          label: 'Расширенный поиск',
          description:
            'Проверяет несколько вариантов и выбирает наиболее подходящий результат',
        },
      ],
      disabledWhen: (context) => !context.getBoolean(USE_TEXT_KEY),
    },
    {
      type: 'toggle',
      key: USE_TITLE_ONLY_FALLBACK_KEY,
      defaultValue: true,
      title: 'Повторный поиск только по названию',
      description: (context) =>
        context.getBoolean(USE_TITLE_ONLY_FALLBACK_KEY)
          ? 'Если по названию и автору не нашли, то попробуем только по названию'
          : 'Ищем по названию и автору',
      disabledWhen: (context) =>
        !context.getBoolean(USE_TEXT_KEY) ||
        context.getString(LOOKUP_MODE_KEY) !== 'search',
    },
    {
      type: 'toggle',
      key: USE_TRACK_VERSION_KEY,
      defaultValue: true,
      title: 'Учитывать версию трека при поиске',
      description: (context) =>
        context.getBoolean(USE_TRACK_VERSION_KEY)
          ? 'Добавляем версию трека к названию при поиске в LRCLib'
          : 'Ищем в LRCLib без версии трека',
      disabledWhen: (context) => !context.getBoolean(USE_TEXT_KEY),
    },
  ],
})
