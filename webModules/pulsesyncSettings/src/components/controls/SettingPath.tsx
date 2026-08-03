import { SettingToggle } from './SettingToggle'
import styles from './SettingPath.module.scss'

type SettingPathProps = {
  checked: boolean
  description: string
  disabled?: boolean
  onBrowse: () => void
  onChange: (checked: boolean) => void
  path: string
  title: string
}

export function SettingPath({
  checked,
  description,
  disabled = false,
  onBrowse,
  onChange,
  path,
  title,
}: SettingPathProps) {
  return (
    <div className={styles.setting}>
      <SettingToggle
        title={title}
        description={description}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {checked ? (
        <div className={styles.pathRow}>
          <span className={styles.path} title={path}>
            {path || 'Путь не выбран'}
          </span>
          <button
            className={styles.browseButton}
            type="button"
            disabled={disabled}
            onClick={onBrowse}
          >
            Выбрать
          </button>
        </div>
      ) : null}
    </div>
  )
}
