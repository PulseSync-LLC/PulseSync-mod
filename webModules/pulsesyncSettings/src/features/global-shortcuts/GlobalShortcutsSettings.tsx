import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ModSettingsApi } from '../../api/modSettings'
import { SettingInput } from '../../components/controls/SettingInput'
import { SettingSelect } from '../../components/controls/SettingSelect'
import { SettingToggle } from '../../components/controls/SettingToggle'
import { SettingsItem } from '../../components/settings/SettingsItem'
import { KeybindRecorder } from './KeybindRecorder'
import {
  ACTION_DEFAULT_VALUES,
  ACTION_VALUE_META,
  actionNeedsValue,
  buildActionOptions,
  createCommand,
  createShortcut,
  normalizeActionValue,
  parseConfig,
  serializeConfig,
  type ShortcutDraft,
} from './model'
import styles from './GlobalShortcutsSettings.module.scss'

const GLOBAL_SHORTCUTS_KEY = 'modSettings.globalShortcuts'

type GlobalShortcutsSettingsProps = {
  api: ModSettingsApi | undefined
}

export function GlobalShortcutsSettings({ api }: GlobalShortcutsSettingsProps) {
  const [enabled, setEnabled] = useState(true)
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<ShortcutDraft[]>([])
  const recordingIdsRef = useRef(new Set<string>())
  const actionOptions = useMemo(() => buildActionOptions(items), [items])

  useEffect(() => {
    if (!api) {
      setIsLoading(false)
      setError('API настроек недоступен')
      return
    }

    let active = true
    const recordingIds = recordingIdsRef.current
    setIsLoading(true)
    void api
      .getModSetting(GLOBAL_SHORTCUTS_KEY)
      .then((value) => {
        if (!active) return
        const parsed = parseConfig(value)
        setEnabled(parsed.enabled)
        setItems(parsed.items)
        setError(undefined)
      })
      .catch((reason: unknown) => {
        if (active)
          setError(
            reason instanceof Error ? reason.message : 'Не удалось прочитать хоткеи',
          )
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
      recordingIds.clear()
      api.setGlobalShortcutsRecording(false)
    }
  }, [api])

  const persist = useCallback(
    async (nextEnabled: boolean, nextItems: ShortcutDraft[]) => {
      if (!api) return
      setError(undefined)
      try {
        await api.setModSetting(
          GLOBAL_SHORTCUTS_KEY,
          serializeConfig(nextEnabled, nextItems),
        )
      } catch (reason) {
        setError(
          reason instanceof Error ? reason.message : 'Не удалось сохранить хоткеи',
        )
      }
    },
    [api],
  )

  const updateItems = useCallback(
    (update: (current: ShortcutDraft[]) => ShortcutDraft[]) => {
      setItems((current) => {
        const next = update(current)
        void persist(enabled, next)
        return next
      })
    },
    [enabled, persist],
  )

  const updateEnabled = useCallback(
    (nextEnabled: boolean) => {
      setEnabled(nextEnabled)
      void persist(nextEnabled, items)
    },
    [items, persist],
  )

  const setRecording = useCallback(
    (id: string, recording: boolean) => {
      if (!api) return
      const recordingIds = recordingIdsRef.current
      if (recording) recordingIds.add(id)
      else recordingIds.delete(id)
      api.setGlobalShortcutsRecording(recordingIds.size > 0)
    },
    [api],
  )

  const updateAccelerator = (shortcutId: string, accelerator: string) => {
    updateItems((current) =>
      current.map((item) =>
        item.id === shortcutId ? { ...item, accelerator } : item,
      ),
    )
  }

  const updateAction = (
    shortcutId: string,
    commandId: string,
    action: string,
  ) => {
    updateItems((current) =>
      current.map((item) =>
        item.id !== shortcutId
          ? item
          : {
              ...item,
              commands: item.commands.map((command) =>
                command.id !== commandId
                  ? command
                  : {
                      ...command,
                      action,
                      value: actionNeedsValue(action)
                        ? command.value || ACTION_DEFAULT_VALUES[action] || ''
                        : '',
                    },
              ),
            },
      ),
    )
  }

  const updateActionValue = (
    shortcutId: string,
    commandId: string,
    value: string,
  ) => {
    updateItems((current) =>
      current.map((item) =>
        item.id !== shortcutId
          ? item
          : {
              ...item,
              commands: item.commands.map((command) =>
                command.id === commandId
                  ? {
                      ...command,
                      value: normalizeActionValue(command.action, value),
                    }
                  : command,
              ),
            },
      ),
    )
  }

  return (
    <section className={styles.section}>
      <h3>Горячие клавиши</h3>
      <SettingsItem
        id={GLOBAL_SHORTCUTS_KEY}
        searchText={[
          'Глобальные горячие клавиши',
          'Сочетания клавиш',
          'Хоткеи',
          'Добавить хоткей',
          'Действие',
          'Команда',
        ]}
      >
        <SettingToggle
          title="Включить глобальные горячие клавиши"
          description="Во время записи регистрация временно отключается, чтобы не было конфликтов с уже назначенными сочетаниями."
          checked={enabled}
          disabled={isLoading || !api}
          onChange={updateEnabled}
        />
      </SettingsItem>
      <div className={styles.toolbar}>
        <button
          className={styles.addButton}
          type="button"
          disabled={isLoading || !api}
          onClick={() => setItems((current) => [createShortcut(), ...current])}
        >
          + Добавить хоткей
        </button>
      </div>
      <div className={styles.list}>
        {!items.length ? (
          <div className={styles.empty}>Пока нет настроенных хоткеев.</div>
        ) : null}
        {items.map((item, shortcutIndex) => (
          <article className={styles.card} key={item.id}>
            <header className={styles.cardHeader}>
              <strong>Хоткей {shortcutIndex + 1}</strong>
              <button
                className={styles.removeButton}
                type="button"
                onClick={() =>
                  updateItems((current) =>
                    current.filter((shortcut) => shortcut.id !== item.id),
                  )
                }
              >
                Удалить хоткей
              </button>
            </header>
            <KeybindRecorder
              value={item.accelerator}
              disabled={!enabled}
              onChange={(value) => updateAccelerator(item.id, value)}
              onRecordingChange={(recording) => setRecording(item.id, recording)}
            />
            {item.commands.map((command, commandIndex) => {
              const valueMeta = ACTION_VALUE_META[command.action]
              return (
                <div className={styles.command} key={command.id}>
                  <SettingSelect
                    title={`Действие ${commandIndex + 1}`}
                    description="Что должно произойти после нажатия."
                    value={command.action}
                    options={actionOptions}
                    disabled={!enabled}
                    onChange={(action) =>
                      updateAction(item.id, command.id, action)
                    }
                  />
                  {valueMeta ? (
                    <SettingInput
                      title="Значение"
                      description={valueMeta.description}
                      value={command.value}
                      min={valueMeta.min}
                      max={valueMeta.max}
                      placeholder={valueMeta.placeholder}
                      onChange={(value) =>
                        updateActionValue(item.id, command.id, value)
                      }
                    />
                  ) : null}
                  {item.commands.length > 1 ? (
                    <button
                      className={styles.commandButton}
                      type="button"
                      onClick={() =>
                        updateItems((current) =>
                          current.map((shortcut) =>
                            shortcut.id === item.id
                              ? {
                                  ...shortcut,
                                  commands: shortcut.commands.filter(
                                    (currentCommand) =>
                                      currentCommand.id !== command.id,
                                  ),
                                }
                              : shortcut,
                          ),
                        )
                      }
                    >
                      Удалить действие
                    </button>
                  ) : null}
                </div>
              )
            })}
            <button
              className={styles.commandButton}
              type="button"
              disabled={!enabled}
              onClick={() =>
                updateItems((current) =>
                  current.map((shortcut) =>
                    shortcut.id === item.id
                      ? {
                          ...shortcut,
                          commands: [...shortcut.commands, createCommand()],
                        }
                      : shortcut,
                  ),
                )
              }
            >
              + Добавить действие
            </button>
          </article>
        ))}
      </div>
      {error ? (
        <div className={styles.error} role="status">
          {error}
        </div>
      ) : null}
    </section>
  )
}
