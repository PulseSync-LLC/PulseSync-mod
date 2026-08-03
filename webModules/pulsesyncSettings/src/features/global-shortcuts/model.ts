import type { SettingSelectOption } from '../../components/controls/SettingSelect'

export type ShortcutCommandDraft = {
  action: string
  id: string
  value: string
}

export type ShortcutDraft = {
  accelerator: string
  commands: ShortcutCommandDraft[]
  id: string
}

export type GlobalShortcutsConfig = Record<string, unknown> & {
  enable?: boolean
}

export const ACTIONS_WITH_VALUE = [
  'SET_VOLUME',
  'INCREASE_VOLUME',
  'DECREASE_VOLUME',
  'SET_PROGRESS',
]

export const ACTION_DEFAULT_VALUES: Record<string, string> = {
  SET_VOLUME: '50',
  INCREASE_VOLUME: '5',
  DECREASE_VOLUME: '5',
  SET_PROGRESS: '0',
}

export const ACTION_VALUE_META: Record<
  string,
  { description: string; max?: number; min: number; placeholder: string }
> = {
  SET_VOLUME: {
    description: 'Процент громкости от 0 до 100.',
    min: 0,
    max: 100,
    placeholder: '50',
  },
  INCREASE_VOLUME: {
    description: 'Шаг увеличения громкости в процентах от 0 до 100.',
    min: 0,
    max: 100,
    placeholder: '5',
  },
  DECREASE_VOLUME: {
    description: 'Шаг уменьшения громкости в процентах от 0 до 100.',
    min: 0,
    max: 100,
    placeholder: '5',
  },
  SET_PROGRESS: {
    description: 'Позиция трека в секундах.',
    min: 0,
    placeholder: '0',
  },
}

const ACTIONS = [
  'TOGGLE_PLAY',
  'PLAY',
  'PAUSE',
  'MOVE_FORWARD',
  'MOVE_BACKWARD',
  'TOGGLE_REPEAT',
  'REPEAT_NONE',
  'REPEAT_CONTEXT',
  'REPEAT_ONE',
  'TOGGLE_SHUFFLE',
  'SHUFFLE',
  'SHUFFLE_NONE',
  'TOGGLE_LIKE',
  'LIKE',
  'LIKE_NONE',
  'TOGGLE_DISLIKE',
  'DISLIKE',
  'DISLIKE_NONE',
  'INCREASE_VOLUME',
  'DECREASE_VOLUME',
  'SET_VOLUME',
  'SET_PROGRESS',
]

const ACTION_LABELS: Record<string, string> = {
  PLAY: 'Плей',
  PAUSE: 'Пауза',
  TOGGLE_PLAY: 'Плей/Пауза',
  MOVE_FORWARD: 'Следующий трек',
  MOVE_BACKWARD: 'Предыдущий трек',
  TOGGLE_LIKE: 'Переключить Лайк',
  LIKE: 'Поставить лайк',
  LIKE_NONE: 'Снять лайк',
  TOGGLE_DISLIKE: 'Переключить Дизлайк',
  DISLIKE: 'Поставить дизлайк',
  DISLIKE_NONE: 'Снять дизлайк',
  TOGGLE_REPEAT: 'Переключить Повтор',
  REPEAT_NONE: 'Повтор выкл.',
  REPEAT_CONTEXT: 'Повтор плейлиста',
  REPEAT_ONE: 'Повтор трека',
  TOGGLE_SHUFFLE: 'Переключить Шафл',
  SHUFFLE: 'Включить шафл',
  SHUFFLE_NONE: 'Выключить шафл',
  INCREASE_VOLUME: 'Увеличить громкость',
  DECREASE_VOLUME: 'Уменьшить громкость',
  SET_VOLUME: 'Громкость',
  SET_PROGRESS: 'Позиция',
}

const ACTION_DESCRIPTIONS: Record<string, string> = {
  PLAY: 'Запускает воспроизведение.',
  PAUSE: 'Ставит воспроизведение на паузу.',
  TOGGLE_PLAY: 'Переключает воспроизведение и паузу.',
  MOVE_FORWARD: 'Переключает на следующий трек.',
  MOVE_BACKWARD: 'Переключает на предыдущий трек.',
  TOGGLE_LIKE: 'Переключает состояние лайка.',
  LIKE: 'Ставит лайк текущему треку.',
  LIKE_NONE: 'Снимает лайк с текущего трека.',
  TOGGLE_DISLIKE: 'Переключает дизлайк.',
  DISLIKE: 'Ставит дизлайк текущему треку.',
  DISLIKE_NONE: 'Снимает дизлайк с текущего трека.',
  TOGGLE_REPEAT: 'Переключает режим повтора.',
  REPEAT_NONE: 'Выключает повтор.',
  REPEAT_CONTEXT: 'Включает повтор текущего списка.',
  REPEAT_ONE: 'Включает повтор текущего трека.',
  TOGGLE_SHUFFLE: 'Переключает шафл.',
  SHUFFLE: 'Включает шафл.',
  SHUFFLE_NONE: 'Выключает шафл.',
  INCREASE_VOLUME: 'Увеличивает громкость на заданное ниже количество процентов.',
  DECREASE_VOLUME: 'Уменьшает громкость на заданное ниже количество процентов.',
  SET_VOLUME: 'Устанавливает громкость. Ниже задаётся значение от 0 до 100.',
  SET_PROGRESS: 'Перематывает трек. Ниже задаётся позиция в секундах.',
}

function createId(prefix: string) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

export function actionNeedsValue(action: string) {
  return ACTIONS_WITH_VALUE.includes(action)
}

export function createCommand(action = '', value?: string): ShortcutCommandDraft {
  return {
    id: createId('action'),
    action,
    value:
      value ?? (actionNeedsValue(action) ? ACTION_DEFAULT_VALUES[action] ?? '' : ''),
  }
}

export function createShortcut(): ShortcutDraft {
  return { id: createId('shortcut'), accelerator: '', commands: [createCommand()] }
}

export function buildActionOptions(items: ShortcutDraft[]): SettingSelectOption[] {
  const savedActions = items.flatMap((item) =>
    item.commands.map((command) => command.action),
  )
  const actions = Array.from(new Set([...ACTIONS, ...savedActions])).filter(Boolean)
  return [
    {
      value: '',
      label: 'Выберите действие',
      description: 'Хоткей не сохранится, пока действие не выбрано.',
    },
    ...actions.map((action) => ({
      value: action,
      label: ACTION_LABELS[action] ?? action,
      description: ACTION_DESCRIPTIONS[action],
    })),
  ]
}

export function parseConfig(value: unknown): {
  enabled: boolean
  items: ShortcutDraft[]
} {
  if (!value || typeof value !== 'object') return { enabled: false, items: [] }
  const config = value as GlobalShortcutsConfig
  const items = Object.entries(config).flatMap(([commands, accelerator]) => {
    if (commands === 'enable' || typeof accelerator !== 'string') return []
    const parsedCommands = commands
      .split(' ')
      .map((token) => {
        const separator = token.indexOf('|')
        const action = (separator === -1 ? token : token.slice(0, separator)).trim()
        const commandValue =
          separator === -1 ? '' : token.slice(separator + 1).trim()
        return action ? createCommand(action, commandValue) : undefined
      })
      .filter((command): command is ShortcutCommandDraft => Boolean(command))
    return [
      {
        id: createId('shortcut'),
        accelerator,
        commands: parsedCommands.length ? parsedCommands : [createCommand()],
      },
    ]
  })
  return { enabled: Boolean(config.enable), items }
}

export function normalizeActionValue(action: string, value: string) {
  if (!actionNeedsValue(action)) return value
  const normalized = value
    .replace(',', '.')
    .replace(/[^0-9.]/g, '')
  if (!normalized) return ''
  const number = Number(normalized)
  if (!Number.isFinite(number)) return normalized
  return ACTIONS_WITH_VALUE.slice(0, 3).includes(action)
    ? String(Math.min(Math.max(number, 0), 100))
    : String(Math.max(number, 0))
}

export function serializeConfig(
  enabled: boolean,
  items: ShortcutDraft[],
): GlobalShortcutsConfig {
  const config: GlobalShortcutsConfig = { enable: enabled }
  for (const item of items) {
    const accelerator = item.accelerator.trim()
    const commands = item.commands.flatMap((command) => {
      const action = command.action.trim()
      if (!action) return []
      if (!actionNeedsValue(action)) return [action]
      const value =
        normalizeActionValue(action, command.value) ||
        ACTION_DEFAULT_VALUES[action] ||
        '0'
      return [`${action}|${value}`]
    })
    if (accelerator && commands.length) config[commands.join(' ')] = accelerator
  }
  return config
}

const DISPLAY_PARTS: Record<string, string> = {
  Plus: '+',
  CommandOrControl: 'Ctrl',
  CmdOrCtrl: 'Ctrl',
  Control: 'Ctrl',
  Command: 'Cmd',
  Option: 'Alt',
  Super: 'Win',
  Escape: 'Esc',
}

export function formatAccelerator(value: string) {
  return value
    ? value
        .split('+')
        .map((part) => DISPLAY_PARTS[part] ?? part)
        .join(' + ')
    : 'Не задано'
}
