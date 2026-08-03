import { useCallback, useEffect, useState } from 'react'
import type { ModSettingsApi } from '../api/modSettings'

type ModSettingValue = boolean | number | string

function normalizeValue<T extends ModSettingValue>(value: unknown, fallback: T): T {
  if (value === undefined) return fallback
  if (typeof fallback === 'boolean') return Boolean(value) as T
  if (typeof fallback === 'number') {
    const number = Number(value)
    return (Number.isFinite(number) ? number : fallback) as T
  }
  return (typeof value === 'string' ? value : fallback) as T
}

export function useModSetting<T extends ModSettingValue>(
  api: ModSettingsApi | undefined,
  key: string,
  fallback: T,
) {
  const snapshot = api?.getModSettingSnapshot(key)
  const [value, setValue] = useState(() => normalizeValue(snapshot, fallback))
  const [isLoading, setIsLoading] = useState(snapshot === undefined)
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (!api) {
      setIsLoading(false)
      setError('API настроек недоступен')
      return
    }

    let active = true
    let receivedUpdate = false
    const unsubscribe = api.onModSettingChange(key, (nextValue) => {
      if (!active) return
      receivedUpdate = true
      setValue(normalizeValue(nextValue, fallback))
      setError(undefined)
    })

    setIsLoading(snapshot === undefined)
    void api
      .getModSetting(key)
      .then((currentValue) => {
        if (active && !receivedUpdate)
          setValue(normalizeValue(currentValue, fallback))
      })
      .catch((reason: unknown) => {
        if (active)
          setError(
            reason instanceof Error
              ? reason.message
              : 'Не удалось прочитать настройку',
          )
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
      unsubscribe()
    }
  }, [api, fallback, key, snapshot])

  const update = useCallback(
    async (nextValue: T) => {
      if (!api) return false
      const previousValue = value
      setValue(nextValue)
      setError(undefined)

      try {
        await api.setModSetting(key, nextValue)
        return true
      } catch (reason) {
        setValue(previousValue)
        setError(
          reason instanceof Error
            ? reason.message
            : 'Не удалось сохранить настройку',
        )
        return false
      }
    },
    [api, key, value],
  )

  return { error, isLoading, update, value }
}
