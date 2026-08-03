import type { ReactNode } from 'react'
import type { ModSettingsApi } from '../api/modSettings'
import { AudioSettings } from '../features/audio/AudioSettings'
import { GlobalShortcutsSettings } from '../features/global-shortcuts/GlobalShortcutsSettings'
import { LastFmSettings } from '../features/lastfm/LastFmSettings'
import { SchemaSettingsSection } from './SchemaSettingsSection'
import {
  appSectionsSchema,
  appUpdatesSchema,
  downloaderSchema,
  playlistSchema,
} from './sections/general'
import { discordRpcSchema, lrclibSchema } from './sections/integrations'
import {
  miniplayerSchema,
  playerBarSchema,
  windowSchema,
} from './sections/interface'
import { systemSchema, ynisonSchema } from './sections/system'
import {
  vibeAppearanceSchema,
  vibeBehaviorSchema,
  vibePerformanceSchema,
} from './sections/vibe'
import type { SettingsSectionSchema } from './types'

type SettingsRenderProps = {
  api: ModSettingsApi | undefined
  onRestartRequired: () => void
}

type SettingsSectionDefinition = {
  id: string
  label: string
  render: (props: SettingsRenderProps) => ReactNode
}

function schemaSection(
  id: string,
  label: string,
  schema: SettingsSectionSchema,
): SettingsSectionDefinition {
  return {
    id,
    label,
    render: ({ api, onRestartRequired }) => (
      <SchemaSettingsSection
        api={api}
        schema={schema}
        onRestartRequired={onRestartRequired}
      />
    ),
  }
}

function customSection(
  id: string,
  label: string,
  render: SettingsSectionDefinition['render'],
): SettingsSectionDefinition {
  return { id, label, render }
}

export const SETTINGS_GROUPS = [
  {
    label: 'Общие',
    sections: [
      schemaSection('playlists', 'Плейлисты', playlistSchema),
      schemaSection('downloader', 'Скачивание', downloaderSchema),
      schemaSection('application', 'Разделы приложения', appSectionsSchema),
      customSection('shortcuts', 'Горячие клавиши', ({ api }) => (
        <GlobalShortcutsSettings api={api} />
      )),
    ],
  },
  {
    label: 'Интерфейс',
    sections: [
      schemaSection('window', 'Окно', windowSchema),
      schemaSection('player', 'Плеер', playerBarSchema),
      schemaSection('miniplayer', 'Миниплеер', miniplayerSchema),
    ],
  },
  {
    label: 'Моя Волна',
    sections: [
      schemaSection(
        'vibe-performance',
        'Производительность',
        vibePerformanceSchema,
      ),
      schemaSection('vibe-appearance', 'Вид анимации', vibeAppearanceSchema),
      schemaSection('vibe-behavior', 'Поведение', vibeBehaviorSchema),
    ],
  },
  {
    label: 'Интеграции',
    sections: [
      schemaSection('discord-rpc', 'Discord RPC', discordRpcSchema),
      schemaSection('lrclib', 'LRCLib', lrclibSchema),
      customSection('lastfm', 'Скробблинг', ({ api }) => (
        <LastFmSettings api={api} />
      )),
    ],
  },
  {
    label: 'Система и синхронизация',
    sections: [
      schemaSection('system', 'Системные настройки', systemSchema),
      customSection(
        'audio',
        'Настройки аудио',
        ({ api, onRestartRequired }) => (
          <AudioSettings
            api={api}
            onRestartRequired={onRestartRequired}
          />
        ),
      ),
      schemaSection('ynison', 'Ynison Remote', ynisonSchema),
      schemaSection('updates', 'Обновления', appUpdatesSchema),
    ],
  },
] as const

export const SETTINGS_SECTIONS: readonly SettingsSectionDefinition[] =
  SETTINGS_GROUPS.flatMap((group) => group.sections)

export type SettingsSectionId = (typeof SETTINGS_GROUPS)[number]['sections'][number]['id']
