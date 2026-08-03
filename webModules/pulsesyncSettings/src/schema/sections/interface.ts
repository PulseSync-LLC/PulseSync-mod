import { defineSettingsSection } from '../types'

const WINDOW_PREFIX = 'modSettings.window.'
const SHOW_NON_MUSIC_PAGE_KEY = 'modSettings.showNonMusicPage'
const SHOW_CONCERTS_TAB_KEY = 'modSettings.showConcertsTab'
const PLAYER_PREFIX = 'modSettings.playerBarEnhancement.'
const ENABLE_CAST_KEY = `${PLAYER_PREFIX}enableYandexStationCast`

const refreshPlayerBar = (_value: unknown, context: { api?: { refreshPlayerBar: () => void } }) => {
  context.api?.refreshPlayerBar()
}

export const windowSchema = defineSettingsSection({
  title: 'Поведение окна',
  requiresPremium: true,
  watch: [
    { key: SHOW_NON_MUSIC_PAGE_KEY, defaultValue: true },
    { key: SHOW_CONCERTS_TAB_KEY, defaultValue: true },
  ],
  items: [
    {
      type: 'select',
      key: `${WINDOW_PREFIX}startupPage`,
      defaultValue: '/',
      title: 'Стартовая страница',
      description: 'Страница по умолчанию при запуске',
      options: (context) => [
        { value: '/', label: 'Главная' },
        { value: '/search', label: 'Поиск' },
        ...(context.getBoolean(SHOW_NON_MUSIC_PAGE_KEY)
          ? [{ value: '/non-music', label: 'Подкасты и книги' }]
          : []),
        { value: '/collection', label: 'Коллекция' },
        ...(context.getBoolean(SHOW_CONCERTS_TAB_KEY)
          ? [{ value: '/concerts', label: 'Концерты' }]
          : []),
      ],
    },
    {
      type: 'toggle',
      key: `${WINDOW_PREFIX}hidePulseSyncVersionInTitleBar`,
      defaultValue: false,
      title: 'Скрывать версию PulseSync в TitleBar',
      description: 'Скрывает подпись PulseSync в верхней панели окна.',
      requiresPremium: true,
      displayValue: (value, context) => value && context.premium.value,
      badge: (context) => ({
        label: 'Basic',
        disabled: !context.premium.value,
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
      key: `${WINDOW_PREFIX}saveWindowDimensionsOnRestart`,
      defaultValue: false,
      title: 'Сохранять размер окна',
      description: 'Сохраняет размер окна при перезапуске',
    },
    {
      type: 'toggle',
      key: `${WINDOW_PREFIX}saveWindowPositionOnRestart`,
      defaultValue: false,
      title: 'Сохранять положение окна',
      description: 'Сохраняет положение окна при перезапуске',
    },
    {
      type: 'toggle',
      key: `${WINDOW_PREFIX}toTray`,
      defaultValue: false,
      title: 'Минимизировать в трей при закрытии',
      description:
        'Если включено, приложение свернется в трей при закрытии.',
    },
    {
      type: 'toggle',
      key: 'modSettings.taskBarExtensions.enable',
      defaultValue: true,
      title: 'Кнопки в превью панели задач',
      description: 'Добавляет поддержку расширений панели задач.',
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: 'modSettings.taskBarExtensions.coverAsThumbnail',
      defaultValue: true,
      title: 'Использовать обложку трека в превью окна',
      description:
        'Если трек играет, заменяет динамичное превью на картинку обложки трека',
      disabledWhen: (context) =>
        !context.getBoolean('modSettings.taskBarExtensions.enable'),
      restartRequired: true,
    },
  ],
})

export const playerBarSchema = defineSettingsSection({
  title: 'Панель плеера',
  items: [
    {
      type: 'select',
      key: `${PLAYER_PREFIX}playButtonType`,
      defaultValue: 'yellow',
      title: 'Цвет кнопки воспроизведения',
      description: 'Выберите цвет кнопки плеера',
      options: [
        { value: 'yellow', label: 'Желтая' },
        { value: 'white', label: 'Белая' },
      ],
      restartRequired: true,
    },
    {
      type: 'select',
      key: 'modSettings.communicationTriggers.mode',
      defaultValue: 'disabled',
      title: 'Стартовые предложения',
      description:
        'Управляет показом WebNextTriggersV2: нижняя плашка и полноэкранные предложения',
      options: [
        {
          value: 'disabled',
          label: 'Отключены',
          description: 'Не показывать стартовые предложения',
        },
        {
          value: 'all',
          label: 'Все',
          description: 'Показывать плашки и полноэкранные предложения',
        },
        {
          value: 'barBelow',
          label: 'Только плашка',
          description: 'Показывать только предложение под панелью плеера',
        },
        {
          value: 'fullscreen',
          label: 'Только fullscreen',
          description: 'Показывать только полноэкранные предложения',
        },
      ],
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: `${PLAYER_PREFIX}changeDislikeButtonPos`,
      defaultValue: true,
      title: 'Поменять местами Дизлайк и Лайк',
      description:
        'Чтобы их положение соответствовало остальным платформам',
      onApplied: refreshPlayerBar,
    },
    {
      type: 'toggle',
      key: `${PLAYER_PREFIX}showCodecInsteadOfQualityMark`,
      defaultValue: true,
      title: 'Отображать кодек',
      description: 'Отображает кодек вместо качества трека',
      onApplied: refreshPlayerBar,
    },
    {
      type: 'toggle',
      key: `${PLAYER_PREFIX}alwaysShowTimestamps`,
      defaultValue: false,
      title: 'Отображать временные метки',
      description: 'Отображать метки независимо от положения курсора',
      onApplied: refreshPlayerBar,
    },
    {
      type: 'toggle',
      key: `${PLAYER_PREFIX}disablePerTrackColors`,
      defaultValue: false,
      title: 'Отключить цвета треков',
      description: 'Панель перестанет перекрашиваться под каждый трек',
      onApplied: refreshPlayerBar,
    },
    {
      type: 'toggle',
      key: ENABLE_CAST_KEY,
      defaultValue: true,
      title: 'Кнопка Cast и поиск колонок',
      description:
        'Показывает кнопку Cast и включает поиск Яндекс Станций в локальной сети',
      cooldownMs: 800,
      onApplied: refreshPlayerBar,
    },
    {
      type: 'toggle',
      key: `${PLAYER_PREFIX}alwaysWideBar`,
      defaultValue: false,
      title: 'Всегда расширенная',
      description:
        'Панель будет всегда широкой, независимо от размера окна приложения',
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: `${PLAYER_PREFIX}showOldPlayerBarOnNewWave`,
      defaultValue: false,
      title: 'Старая панель в новой Волне',
      description:
        'Возвращает классическую панель плеера на новую страницу Моей волны, не скрывая новую',
      restartRequired: true,
    },
  ],
})

export const miniplayerSchema = defineSettingsSection({
  title: 'Миниплеер',
  items: [
    {
      type: 'toggle',
      key: 'modSettings.miniplayer.saveDimensions',
      defaultValue: false,
      title: 'Сохранять размер окна',
      description: 'Сохраняет размер окна миниплеера при перезапуске',
    },
    {
      type: 'toggle',
      key: 'modSettings.miniplayer.savePosition',
      defaultValue: false,
      title: 'Сохранять положение окна',
      description: 'Сохраняет положение окна миниплеера при перезапуске',
    },
    {
      type: 'toggle',
      key: 'modSettings.miniplayer.skipTaskbar',
      defaultValue: false,
      title: 'Не отображать окно в таскбаре',
      description:
        'Работает только если миниплеер закреплён поверх других окон',
    },
    {
      type: 'toggle',
      key: 'modSettings.miniplayer.alwaysShowPlayerTimestamps',
      defaultValue: false,
      title: 'Всегда отображать временные метки',
      description:
        'Отображает временные метки независимо от положения курсора',
    },
  ],
})
