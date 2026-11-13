import type { ReactNode } from 'react';
import styles from './SettingAction.module.scss';

export type SettingActionProps = {
    actionLabel?: string;
    avatarUrl?: string;
    description?: string;
    disabled?: boolean;
    onClick: () => void;
    title: string;
    titleAction?: ReactNode;
};

export function SettingAction({
    actionLabel,
    avatarUrl,
    description,
    disabled = false,
    onClick,
    title,
    titleAction,
}: SettingActionProps) {
    return (
        <div className={styles.row} data-disabled={disabled}>
            {!actionLabel ? (
                <button
                    className={styles.action}
                    type="button"
                    aria-label={title}
                    disabled={disabled}
                    onClick={onClick}
                />
            ) : null}
            {avatarUrl ? <img className={styles.avatar} src={avatarUrl} alt="" /> : null}
            <span className={styles.text}>
                <span className={styles.titleLine}>
                    <span className={styles.title}>{title}</span>
                    {titleAction}
                </span>
                {description ? <span className={styles.description}>{description}</span> : null}
            </span>
            {actionLabel ? (
                <button
                    className={styles.actionButton}
                    type="button"
                    aria-label={`${actionLabel} · ${title}`}
                    aria-live="polite"
                    disabled={disabled}
                    onClick={onClick}
                >
                    {actionLabel}
                </button>
            ) : (
                <span className={styles.chevron} aria-hidden="true" />
            )}
        </div>
    );
}
