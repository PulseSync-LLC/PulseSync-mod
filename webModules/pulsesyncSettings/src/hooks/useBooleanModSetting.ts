import { useCallback, useEffect, useState } from 'react'
import type { ModSettingsApi } from '../api/modSettings'

export function useBooleanModSetting(
  api: ModSettingsApi | undefined,
  key: string,
  fallback: boolean,
) {
  const [value, setValue] = useState(fallback)
  const [isLoading, setIsLoading] = useState(true)
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
      setValue(Boolean(nextValue))
      setError(undefined)
    })

    setIsLoading(true)
    void api
      .getModSetting(key)
      .then((currentValue) => {
        if (active && !receivedUpdate) setValue(Boolean(currentValue))
      })
      .catch((reason: unknown) => {
        if (active)
          setError(
            reason instanceof Error ? reason.message : 'Не удалось прочитать настройку',
          )
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
      unsubscribe()
    }
  }, [api, fallback, key])

  const update = useCallback(
    async (nextValue: boolean) => {
      if (!api) return
      const previousValue = value
      setValue(nextValue)
      setError(undefined)

      try {
        await api.setModSetting(key, nextValue)
      } catch (reason) {
        setValue(previousValue)
        setError(
          reason instanceof Error ? reason.message : 'Не удалось сохранить настройку',
        )
      }
    },
    [api, key, value],
  )

  return { error, isLoading, update, value }
}
