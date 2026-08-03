import { useCallback, useEffect, useRef, useState } from 'react'
import { formatAccelerator } from './model'
import styles from './KeybindRecorder.module.scss'

type KeybindRecorderProps = {
  disabled?: boolean
  onChange: (value: string) => void
  onRecordingChange: (recording: boolean) => void
  value: string
}

const NAMED_KEYS: Record<string, string> = {
  ' ': 'Space',
  Spacebar: 'Space',
  Tab: 'Tab',
  Backspace: 'Backspace',
  Delete: 'Delete',
  Insert: 'Insert',
  Enter: 'Enter',
  Return: 'Return',
  Escape: 'Esc',
  Esc: 'Esc',
  ArrowUp: 'Up',
  ArrowDown: 'Down',
  ArrowLeft: 'Left',
  ArrowRight: 'Right',
  Home: 'Home',
  End: 'End',
  PageUp: 'PageUp',
  PageDown: 'PageDown',
  PrintScreen: 'PrintScreen',
  AudioVolumeUp: 'VolumeUp',
  AudioVolumeDown: 'VolumeDown',
  AudioVolumeMute: 'VolumeMute',
  MediaTrackNext: 'MediaNextTrack',
  MediaTrackPrevious: 'MediaPreviousTrack',
  MediaStop: 'MediaStop',
  MediaPlayPause: 'MediaPlayPause',
}

const CODE_KEYS: Record<string, string> = {
  Backquote: '`',
  Minus: '-',
  Equal: '=',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  IntlBackslash: '\\',
  Semicolon: ';',
  Quote: "'",
  Comma: ',',
  Period: '.',
  Slash: '/',
}

function getModifiers(event: KeyboardEvent) {
  const modifiers: string[] = []
  if (event.ctrlKey) modifiers.push('Ctrl')
  if (event.altKey) modifiers.push('Alt')
  if (event.shiftKey) modifiers.push('Shift')
  if (event.metaKey) modifiers.push('Super')
  return modifiers
}

function getKey(event: KeyboardEvent) {
  if (event.key === '+' || event.code === 'NumpadAdd') return 'Plus'
  if (NAMED_KEYS[event.key]) return NAMED_KEYS[event.key]
  if (event.key?.length === 1) return event.key.toUpperCase()
  if (/^Key[A-Z]$/.test(event.code)) return event.code.slice(3)
  if (/^Digit[0-9]$/.test(event.code)) return event.code.slice(5)
  if (/^F([1-9]|1[0-9]|2[0-4])$/.test(event.code)) return event.code
  return CODE_KEYS[event.code]
}

export function KeybindRecorder({
  disabled = false,
  onChange,
  onRecordingChange,
  value,
}: KeybindRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [preview, setPreview] = useState('Нажмите сочетание...')
  const rootRef = useRef<HTMLDivElement>(null)

  const stopRecording = useCallback(() => {
    setIsRecording(false)
    setPreview('Нажмите сочетание...')
  }, [])

  useEffect(() => {
    onRecordingChange(isRecording)
    return () => {
      if (isRecording) onRecordingChange(false)
    }
  }, [isRecording, onRecordingChange])

  useEffect(() => {
    if (!isRecording) return

    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (event.repeat) return
      if (['Control', 'Shift', 'Alt', 'Meta'].includes(event.key)) {
        const modifiers = getModifiers(event)
        setPreview(modifiers.length ? `${modifiers.join(' + ')} + ...` : 'Нажмите сочетание...')
        return
      }
      const noModifiers = !event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey
      if (noModifiers && ['Escape', 'Esc'].includes(event.key)) {
        stopRecording()
        return
      }
      if (noModifiers && ['Backspace', 'Delete'].includes(event.key)) {
        onChange('')
        stopRecording()
        return
      }
      const key = getKey(event)
      if (!key) return
      const modifiers = getModifiers(event)
      const shiftedSymbol = 'Plus)!@#$%^&*(:<_>?~{|}"'.includes(key)
      const accelerator = [
        ...(shiftedSymbol
          ? modifiers.filter((modifier) => modifier !== 'Shift')
          : modifiers),
        key,
      ].join('+')
      onChange(accelerator)
      stopRecording()
    }
    const onOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) stopRecording()
    }
    const onBlur = () => stopRecording()

    document.addEventListener('keydown', onKeyDown, true)
    document.addEventListener('mousedown', onOutsideClick, true)
    window.addEventListener('blur', onBlur)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      document.removeEventListener('mousedown', onOutsideClick, true)
      window.removeEventListener('blur', onBlur)
    }
  }, [isRecording, onChange, stopRecording])

  return (
    <div className={styles.row} ref={rootRef}>
      <span className={styles.text}>
        <span className={styles.title}>Сочетание</span>
        <span className={styles.description}>
          Нажмите справа и введите комбинацию. Esc отменяет запись, Backspace/Delete очищает поле.
        </span>
      </span>
      <button
        className={styles.recorder}
        data-recording={isRecording}
        type="button"
        disabled={disabled}
        onClick={() => setIsRecording((recording) => !recording)}
      >
        {isRecording ? preview : formatAccelerator(value)}
      </button>
    </div>
  )
}
