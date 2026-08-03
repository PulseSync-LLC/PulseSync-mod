import { defineSettingsSection } from '../types'

const DOWNLOADER_PREFIX = 'modSettings.downloader.'
const USE_MP3_KEY = `${DOWNLOADER_PREFIX}useMP3`
const USE_SYNC_LYRICS_KEY = `${DOWNLOADER_PREFIX}useSyncLyrics`
const ADD_M3U_KEY = `${DOWNLOADER_PREFIX}addM3UToPlaylists`
const USE_DEFAULT_PATH_KEY = `${DOWNLOADER_PREFIX}useDefaultPath`
const USE_CUSTOM_CACHE_PATH_KEY = `${DOWNLOADER_PREFIX}useCustomPathForSessionStorage`

export const playlistSchema = defineSettingsSection({
  title: 'Плейлисты',
  items: [
    {
      type: 'toggle',
      key: 'modSettings.playlist.addTracksToEndFromContextMenu',
      defaultValue: false,
      title: 'Добавлять треки в конец плейлиста',
      description:
        'При добавлении из контекстного меню трек будет вставляться в конец, а не в начало',
    },
  ],
})

export const downloaderSchema = defineSettingsSection({
  title: 'Скачивание и кеш',
  items: [
    {
      type: 'select',
      key: `${DOWNLOADER_PREFIX}concurrencyPreset`,
      defaultValue: 'adaptive',
      title: 'Конкурентность загрузки',
      options: [
        {
          value: 'minimal',
          label: 'Минимальная',
          description: 'Использует минимум ресурсов; (до ~50 мбит/с)',
        },
        {
          value: 'adaptive',
          label: 'Адаптивная',
          description:
            'Рекомендуемый вариант. Автоматически подбирает потоки, в границах максимального и минимального пресета.',
        },
        {
          value: 'maximum',
          label: 'Максимальная',
          description: 'Использует максимум ресурсов. (до ~1 гбит/с)',
        },
      ],
    },
    {
      type: 'toggle',
      key: USE_MP3_KEY,
      defaultValue: false,
      title: 'Скачивать в MP3',
      description: (context) =>
        context.getBoolean(USE_MP3_KEY)
          ? 'Треки скачиваются в MP3'
          : 'Треки скачиваются в оригинальном формате',
    },
    {
      type: 'toggle',
      key: USE_SYNC_LYRICS_KEY,
      defaultValue: true,
      title: 'Скачивать текстомузыку',
      description:
        'Если возможно, записывать синхронный текст трека в метаданные файла',
    },
    {
      type: 'toggle',
      key: ADD_M3U_KEY,
      defaultValue: false,
      title: 'Создавать M3U для плейлистов',
      description: (context) =>
        context.getBoolean(ADD_M3U_KEY)
          ? 'После скачивания плейлиста будет создан .m3u файл'
          : 'Плейлисты будут скачиваться без .m3u файла',
    },
    {
      type: 'path',
      key: `${DOWNLOADER_PREFIX}defaultPath`,
      defaultValue: '',
      enabledKey: USE_DEFAULT_PATH_KEY,
      enabledDefaultValue: false,
      title: 'Путь для файлов по умолчанию',
      description: (context) =>
        context.getBoolean(USE_DEFAULT_PATH_KEY)
          ? 'Использовать путь по умолчанию для скачивания треков в файл'
          : 'Спрашивать путь при каждом скачивании трека',
    },
    {
      type: 'path',
      key: `${DOWNLOADER_PREFIX}customPathForSessionStorage`,
      defaultValue: '',
      enabledKey: USE_CUSTOM_CACHE_PATH_KEY,
      enabledDefaultValue: false,
      title: 'Путь для кеша',
      description: (context) =>
        context.getBoolean(USE_CUSTOM_CACHE_PATH_KEY)
          ? 'Использовать путь ниже для кеша (в т.ч. ванильного скачивания треков)'
          : 'Использовать путь по умолчанию для кеша (в т.ч. ванильного скачивания треков)',
      restartRequired: true,
    },
  ],
})

export const appSectionsSchema = defineSettingsSection({
  title: 'Разделы приложения',
  items: [
    {
      type: 'toggle',
      key: 'modSettings.showNonMusicPage',
      defaultValue: true,
      title: 'Показывать раздел «Подкасты и книги»',
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: 'modSettings.showConcertsTab',
      defaultValue: true,
      title: 'Показывать раздел «Концерты»',
      restartRequired: true,
    },
  ],
})

export const appUpdatesSchema = defineSettingsSection({
  title: 'Обновления',
  items: [
    {
      type: 'toggle',
      key: 'modSettings.appAutoUpdates.enableAppAutoUpdate',
      defaultValue: true,
      title: 'Автообновлять приложение',
      description: 'Обновлять ли приложение автоматически',
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: 'modSettings.appAutoUpdates.enableAppAutoUpdateByProbability',
      defaultValue: false,
      invert: true,
      title: 'Получать обновления приложения сразу же',
      description: 'Выключает участие в получении обновлений волнами',
      restartRequired: true,
    },
    {
      type: 'toggle',
      key: 'modSettings.appAutoUpdates.enableModAutoUpdate',
      defaultValue: true,
      title: 'Проверять обновления модификации',
      description: 'Проверять ли наличие обновлений мода автоматически',
      restartRequired: true,
    },
  ],
})
