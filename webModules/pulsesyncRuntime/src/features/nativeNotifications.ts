import type { NotificationOptions } from '@pulsesync/yamusic-types';
import type { Cleanup } from '../contracts';

type NativeNotification = {
    id: string;
    message: string;
    kind: 'info' | 'error';
    durationMs: number;
    icon?: string;
    coverUrl?: string;
    link?: { label: string; href: string };
    isActive: () => boolean;
    onClose: () => void;
};

export type NativeNotificationTools = {
    show: (notification: NativeNotification) => void;
    dismiss: (id: string) => void;
};

let binding: { tools: NativeNotificationTools; owners: Map<string, string> } | undefined;

function readLabel(value: unknown) {
    if (typeof value !== 'string' || !value.trim()) throw new TypeError('Notification label is required');
    return value.trim().slice(0, 80);
}

function readUrl(value: unknown) {
    if (typeof value !== 'string' || !value.trim() || Array.from(value).some((character) => character <= ' ' || character === '\\'))
        throw new TypeError('Notification URL is invalid');
    if (value.startsWith('/') && !value.startsWith('//')) return value;
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new TypeError('Notification URL must use HTTP(S) or an application path');
    return url.href;
}

export function registerNativeNotifications(tools: NativeNotificationTools): Cleanup {
    if (binding) throw new Error('Native notifications are already registered');
    const current = { tools, owners: new Map<string, string>() };
    binding = current;
    return () => {
        if (binding !== current) return;
        binding = undefined;
        for (const id of current.owners.keys()) {
            tools.dismiss(id);
            current.owners.delete(id);
        }
    };
}

export async function showNotification(message: string, kind: 'info' | 'error', options?: NotificationOptions, ownerId?: string): Promise<void> {
    const text = typeof message === 'string' ? message.trim().slice(0, 500) : '';
    if (!text) throw new TypeError('Notification message is required');
    if (kind !== 'info' && kind !== 'error') throw new TypeError('Notification kind must be info or error');
    const icon = options?.icon;
    if (icon !== undefined && (typeof icon !== 'string' || !/^[a-z][a-z0-9_]*$/i.test(icon))) throw new TypeError('Notification icon is invalid');
    if (icon && options?.coverUrl !== undefined) throw new TypeError('Use either a notification icon or a cover');
    const coverUrl = options?.coverUrl === undefined ? undefined : readUrl(options.coverUrl);
    const link = options?.link === undefined ? undefined : { label: readLabel(options.link?.label), href: readUrl(options.link?.href) };
    const current = binding;
    if (!current) throw new Error('Native notification containers are not mounted');
    const duration = Number(options?.durationMs);
    const id = `pulsesync-addon-notification:${crypto.randomUUID()}`;
    current.owners.set(id, String(ownerId ?? ''));
    const isActive = () => binding === current && current.owners.has(id);
    try {
        await Promise.resolve();
        if (binding !== current || !current.owners.has(id)) return;
        current.tools.show({
            id,
            message: text,
            kind,
            icon,
            coverUrl,
            link,
            isActive,
            durationMs: Number.isFinite(duration) ? Math.min(Math.max(duration, 1500), 10_000) : 4000,
            onClose: () => {
                current.owners.delete(id);
            },
        });
    } catch (error) {
        current.owners.delete(id);
        throw error;
    }
}

export function clearAddonNotifications(ownerId: string): void {
    if (!binding || !ownerId) return;
    for (const [id, owner] of binding.owners) {
        if (owner !== ownerId) continue;
        binding.tools.dismiss(id);
        binding.owners.delete(id);
    }
}
