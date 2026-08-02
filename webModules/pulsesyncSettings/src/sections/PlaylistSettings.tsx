import type { ModSettingsApi } from '../api/modSettings'
import { SettingToggle } from '../components/SettingToggle'
import { useBooleanModSetting } from '../hooks/useBooleanModSetting'
import styles from './PlaylistSettings.module.scss'

const ADD_TRACKS_TO_END_KEY =
  'modSettings.playlist.addTracksToEndFromContextMenu'

type PlaylistSettingsProps = {
  api: ModSettingsApi | undefined
}

export function PlaylistSettings({ api }: PlaylistSettingsProps) {
  const setting = useBooleanModSetting(api, ADD_TRACKS_TO_END_KEY, false)

  return (
    <section className={styles.section}>
      <h3>Плейлисты</h3>
      <SettingToggle
        title="Добавлять треки в конец плейлиста"
        description="При добавлении из контекстного меню трек будет вставляться в конец, а не в начало"
        checked={setting.value}
        disabled={setting.isLoading || !api}
        onChange={(value) => void setting.update(value)}
      />
      {setting.error && (
        <div className={styles.error} role="status">
          {setting.error}
        </div>
      )}
    </section>
  )
}
