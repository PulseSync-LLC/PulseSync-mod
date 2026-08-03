import { useEffect, useState } from 'react'
import type { ModSettingsApi } from '../api/modSettings'

export function usePremiumStatus(api: ModSettingsApi | undefined) {
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(false)

  useEffect(() => {
    if (!api) {
      setIsLoading(false)
      return
    }

    let active = true
    void api
      .getPremiumStatus()
      .then((nextValue) => {
        if (active) setValue(nextValue)
      })
      .catch((reason: unknown) => {
        if (active)
          setError(
            reason instanceof Error
              ? reason.message
              : 'Не удалось проверить подписку',
          )
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
    }
  }, [api])

  return { error, isLoading, value }
}
