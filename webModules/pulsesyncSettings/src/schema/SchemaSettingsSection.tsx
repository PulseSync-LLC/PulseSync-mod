import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ModSettingsApi } from '../api/modSettings'
import {
  SettingsSection,
  type SettingsSchemaItem,
} from '../components/settings/SettingsSection'
import { usePremiumStatus } from '../hooks/usePremiumStatus'
import type {
  PathSettingSchema,
  Resolvable,
  SettingsSchemaContext,
  SettingsSectionSchema,
  StoredSettingValue,
  StoredSettingsSchemaItem,
} from './types'

type SchemaSettingsSectionProps = {
  api: ModSettingsApi | undefined
  onRestartRequired?: () => void
  schema: SettingsSectionSchema
}

type SettingDescriptor = {
  defaultValue: StoredSettingValue
  key: string
}

function isStoredItem(
  item: StoredSettingsSchemaItem,
): item is Exclude<StoredSettingsSchemaItem, { type: 'heading' | 'note' }> {
  return item.type !== 'heading' && item.type !== 'note'
}

function resolve<T>(value: Resolvable<T>, context: SettingsSchemaContext) {
  return typeof value === 'function'
    ? (value as (context: SettingsSchemaContext) => T)(context)
    : value
}

function collectDescriptors(schema: SettingsSectionSchema) {
  const descriptors = new Map<string, SettingDescriptor>()
  for (const watch of schema.watch ?? []) descriptors.set(watch.key, watch)
  for (const item of schema.items) {
    if (!isStoredItem(item)) continue
    descriptors.set(item.key, {
      key: item.key,
      defaultValue: item.defaultValue,
    })
    if (item.type === 'path') {
      descriptors.set(item.enabledKey, {
        key: item.enabledKey,
        defaultValue: item.enabledDefaultValue,
      })
    }
  }
  return [...descriptors.values()]
}

function normalizeValue(
  value: unknown,
  fallback: StoredSettingValue,
): StoredSettingValue {
  if (value === undefined) return fallback
  if (typeof fallback === 'boolean') return Boolean(value)
  if (typeof fallback === 'number') {
    const number = Number(value)
    return Number.isFinite(number) ? number : fallback
  }
  if (typeof fallback === 'string')
    return typeof value === 'string' ? value : fallback
  return (value ?? null) as StoredSettingValue
}

export function SchemaSettingsSection({
  api,
  onRestartRequired,
  schema,
}: SchemaSettingsSectionProps) {
  const descriptors = useMemo(() => collectDescriptors(schema), [schema])
  const descriptorByKey = useMemo(
    () => new Map(descriptors.map((descriptor) => [descriptor.key, descriptor])),
    [descriptors],
  )
  const premium = usePremiumStatus(schema.requiresPremium ? api : undefined)
  const [values, setValues] = useState<Record<string, StoredSettingValue>>(() =>
    Object.fromEntries(
      descriptors.map((descriptor) => [
        descriptor.key,
        normalizeValue(
          api?.getModSettingSnapshot(descriptor.key),
          descriptor.defaultValue,
        ),
      ]),
    ),
  )
  const [loadingKeys, setLoadingKeys] = useState(
    () =>
      new Set(
        descriptors
          .filter(
            (descriptor) =>
              api?.getModSettingSnapshot(descriptor.key) === undefined,
          )
          .map((descriptor) => descriptor.key),
      ),
  )
  const [busyKeys, setBusyKeys] = useState<Set<string>>(() => new Set())
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (!api) {
      setLoadingKeys(new Set())
      setError('API настроек недоступен')
      return
    }

    let active = true
    const unsubscribes = descriptors.map((descriptor) =>
      api.onModSettingChange(descriptor.key, (value) => {
        if (!active) return
        setValues((current) => ({
          ...current,
          [descriptor.key]: normalizeValue(value, descriptor.defaultValue),
        }))
        setLoadingKeys((current) => {
          const next = new Set(current)
          next.delete(descriptor.key)
          return next
        })
      }),
    )

    for (const descriptor of descriptors) {
      void api
        .getModSetting(descriptor.key)
        .then((value) => {
          if (!active) return
          setValues((current) => ({
            ...current,
            [descriptor.key]: normalizeValue(value, descriptor.defaultValue),
          }))
        })
        .catch((reason: unknown) => {
          if (!active) return
          setError(
            reason instanceof Error
              ? reason.message
              : 'Не удалось прочитать настройку',
          )
        })
        .finally(() => {
          if (!active) return
          setLoadingKeys((current) => {
            const next = new Set(current)
            next.delete(descriptor.key)
            return next
          })
        })
    }

    return () => {
      active = false
      unsubscribes.forEach((unsubscribe) => unsubscribe())
    }
  }, [api, descriptors])

  const createContext = useCallback(
    (nextValues = values): SettingsSchemaContext => ({
      api,
      get: (key) => nextValues[key],
      getBoolean: (key) => Boolean(nextValues[key]),
      getNumber: (key) => Number(nextValues[key]),
      getString: (key) => String(nextValues[key] ?? ''),
      premium,
    }),
    [api, premium, values],
  )

  const updateValue = useCallback(
    async (
      item: Exclude<StoredSettingsSchemaItem, { type: 'heading' | 'note' }>,
      key: string,
      nextValue: StoredSettingValue,
    ) => {
      if (!api || busyKeys.has(key)) return false
      const descriptor = descriptorByKey.get(key)
      if (!descriptor) return false
      const previousValue = values[key]
      const nextValues = { ...values, [key]: nextValue }
      setValues(nextValues)
      setError(undefined)
      if (item.cooldownMs) {
        setBusyKeys((current) => new Set(current).add(key))
      }

      try {
        await api.setModSetting(key, nextValue)
        await item.onApplied?.(nextValue, createContext(nextValues))
        if (item.restartRequired) onRestartRequired?.()
        return true
      } catch (reason) {
        setValues((current) => ({ ...current, [key]: previousValue }))
        setError(
          reason instanceof Error
            ? reason.message
            : 'Не удалось сохранить настройку',
        )
        return false
      } finally {
        if (item.cooldownMs) {
          window.setTimeout(() => {
            setBusyKeys((current) => {
              const next = new Set(current)
              next.delete(key)
              return next
            })
          }, item.cooldownMs)
        }
      }
    },
    [
      api,
      busyKeys,
      createContext,
      descriptorByKey,
      onRestartRequired,
      values,
    ],
  )

  const browsePath = useCallback(
    async (item: PathSettingSchema) => {
      if (!api) return
      setError(undefined)
      try {
        await api.selectModSettingDirectory(item.key)
        if (item.restartRequired) onRestartRequired?.()
      } catch (reason) {
        setError(
          reason instanceof Error ? reason.message : 'Не удалось выбрать папку',
        )
      }
    },
    [api, onRestartRequired],
  )

  const context = createContext()
  const renderedItems: SettingsSchemaItem[] = schema.items.map((item) => {
    if (item.type === 'heading') return item
    if (item.type === 'note')
      return { ...item, text: resolve(item.text, context) }

    const isLoading =
      loadingKeys.has(item.key) ||
      (item.type === 'path' && loadingKeys.has(item.enabledKey))
    const disabled =
      !api ||
      isLoading ||
      busyKeys.has(item.key) ||
      Boolean(item.disabledWhen?.(context)) ||
      Boolean(item.requiresPremium && (!premium.value || premium.isLoading))
    const description = item.description
      ? resolve(item.description, context)
      : undefined
    const badge = item.badge ? resolve(item.badge, context) : undefined

    switch (item.type) {
      case 'toggle': {
        const storedValue = Boolean(values[item.key])
        const checked = item.displayValue
          ? item.displayValue(storedValue, context)
          : item.invert
            ? !storedValue
            : storedValue
        return {
          id: item.key,
          type: 'toggle',
          props: {
            title: item.title,
            description: description ?? '',
            badge,
            checked,
            disabled,
            onChange: (value) =>
              void updateValue(item, item.key, item.invert ? !value : value),
          },
        }
      }
      case 'select':
        return {
          id: item.key,
          type: 'select',
          props: {
            title: item.title,
            description,
            value: String(values[item.key] ?? item.defaultValue),
            options: resolve(item.options, context),
            disabled,
            onChange: (value) =>
              void updateValue(
                item,
                item.key,
                typeof item.defaultValue === 'number' ? Number(value) : value,
              ),
          },
        }
      case 'slider':
        return {
          id: item.key,
          type: 'slider',
          props: {
            title: item.title,
            description: description ?? '',
            value: Number(values[item.key] ?? item.defaultValue),
            min: resolve(item.min, context),
            max: resolve(item.max, context),
            step: item.step,
            valueLabel: item.valueLabel,
            disabled,
            onChange: (value) => void updateValue(item, item.key, value),
          },
        }
      case 'input':
        return {
          id: item.key,
          type: 'input',
          props: {
            title: item.title,
            description: description ?? '',
            value: String(values[item.key] ?? item.defaultValue),
            placeholder: item.placeholder ?? '',
            min: item.min,
            max: item.max,
            onChange: (value) => void updateValue(item, item.key, value),
          },
        }
      case 'path':
        return {
          id: item.key,
          type: 'path',
          props: {
            title: item.title,
            description: description ?? '',
            checked: Boolean(values[item.enabledKey]),
            path: String(values[item.key] ?? ''),
            disabled,
            onChange: (value) =>
              void updateValue(item, item.enabledKey, value),
            onBrowse: () => void browsePath(item),
          },
        }
    }
  })

  return (
    <SettingsSection
      title={schema.title}
      items={renderedItems}
      error={(schema.requiresPremium ? premium.error : undefined) ?? error}
    />
  )
}
