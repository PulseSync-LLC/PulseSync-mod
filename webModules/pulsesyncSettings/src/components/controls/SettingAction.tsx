import styles from './SettingAction.module.scss'

export type SettingActionProps = {
  avatarUrl?: string
  description?: string
  disabled?: boolean
  onClick: () => void
  title: string
}

export function SettingAction({
  avatarUrl,
  description,
  disabled = false,
  onClick,
  title,
}: SettingActionProps) {
  return (
    <button
      className={styles.row}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {avatarUrl ? <img className={styles.avatar} src={avatarUrl} alt="" /> : null}
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {description ? (
          <span className={styles.description}>{description}</span>
        ) : null}
      </span>
      <span className={styles.chevron} aria-hidden="true" />
    </button>
  )
}
