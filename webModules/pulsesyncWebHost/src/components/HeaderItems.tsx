import { useEffect, useState } from 'react'
import type { PulseSyncPageEntity } from '@pulsesync/yamusic-types'
import type { HeaderItemContent, HeaderItemDefinition, PulseSyncAddonApi } from '../contracts'
import { NativeSlotRegistrations, type NativeSlotRegistration } from './NativeSlotRegistrations'

function normalizeContent(content: HeaderItemContent | null) {
    if (typeof content === 'string') {
        const text = content.trim()
        return text ? { text } : undefined
    }
    if (!content) return undefined

    const text = String(content.text ?? '').trim()
    const icon = String(content.icon ?? '').trim()
    const label = String(content.label ?? '').trim()
    if (!text && !icon) return undefined

    return {
        ...(text ? { text } : {}),
        ...(icon ? { icon } : {}),
        ...(label ? { label } : {}),
        ...(content.display ? { display: content.display } : {}),
    }
}

type ResolvedHeaderItem = NativeSlotRegistration & { area: HeaderItemDefinition['area'] }
type ResolutionState = { key: string; registrations: readonly ResolvedHeaderItem[] }

export function HeaderItems({ api, items }: { api: PulseSyncAddonApi; items: readonly HeaderItemDefinition[] }) {
    const [pageEntity, setPageEntity] = useState<PulseSyncPageEntity | null>(null)
    const [settingsRevision, setSettingsRevision] = useState(0)
    const resolutionKey = `${pageEntity?.revision ?? 'none'}:${settingsRevision}`
    const [resolution, setResolution] = useState<ResolutionState>({ key: resolutionKey, registrations: [] })

    useEffect(() => {
        let active = true
        void api.page
            .getSnapshot()
            .then(snapshot => {
                if (active) setPageEntity(snapshot)
            })
            .catch(error => api.logger.warn('Failed to load page entity for header items', error))
        const unsubscribe = api.page.onChange(setPageEntity)
        return () => {
            active = false
            unsubscribe()
        }
    }, [api])

    useEffect(() => api.settings.onChange(() => setSettingsRevision(revision => revision + 1)), [api])

    useEffect(() => {
        let active = true

        void Promise.all(
            items.map(async item => {
                try {
                    const content = typeof item.content === 'function' ? await item.content({ api, pageEntity }) : item.content
                    const payload = normalizeContent(content)
                    if (!payload) return undefined
                    return {
                        id: item.id,
                        area: item.area,
                        ...(item.position !== undefined ? { position: item.position } : {}),
                        payload,
                    } satisfies ResolvedHeaderItem
                } catch (error) {
                    api.logger.error(`Header item ${item.id} failed`, error)
                    return undefined
                }
            }),
        ).then(resolved => {
            if (active) {
                setResolution({ key: resolutionKey, registrations: resolved.filter(item => item !== undefined) as ResolvedHeaderItem[] })
            }
        })

        return () => {
            active = false
        }
    }, [api, items, pageEntity, resolutionKey])

    const registrations = resolution.key === resolutionKey ? resolution.registrations : []

    return (
        <>
            <NativeSlotRegistrations
                addonId={api.addonId}
                items={registrations.filter(item => item.area === 'title')}
                slotName="headerTitleItems"
            />
            <NativeSlotRegistrations
                addonId={api.addonId}
                items={registrations.filter(item => item.area === 'meta')}
                slotName="headerInfoItems"
            />
        </>
    )
}
