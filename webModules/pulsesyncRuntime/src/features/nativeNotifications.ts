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

type NotificationBinding = { tools: NativeNotificationTools; owners: Map<string, string> };

const pendingNotifications = new Map<
    string,
    { ownerId: string; ready: (current: NotificationBinding | undefined) => void }
>();
let binding: NotificationBinding | undefined;

function waitForNativeNotifications(id: string, ownerId: string): Promise<NotificationBinding | undefined> {
    if (binding) {
        binding.owners.set(id, ownerId);

        return Promise.resolve(binding);
    }

    return new Promise((resolve, reject) => {
        const timeout = window.setTimeout(() => {
            pendingNotifications.delete(id);
            reject(new Error('Native notification containers did not mount within 10 seconds'));
        }, 10_000);

        pendingNotifications.set(id, {
            ownerId,
            ready: (current) => {
                window.clearTimeout(timeout);
                pendingNotifications.delete(id);
                current?.owners.set(id, ownerId);
                resolve(current);
            },
        });
    });
}

function readLabel(value: unknown) {
    if (typeof value !== 'string' || !value.trim()) {
        throw new TypeError('Notification label is required');
    }

    return value.trim().slice(0, 80);
}

function readUrl(value: unknown) {
    if (
        typeof value !== 'string' ||
        !value.trim() ||
        Array.from(value).some((character) => character <= ' ' || character === '\\')
    ) {
        throw new TypeError('Notification URL is invalid');
    }

    if (value.startsWith('/') && !value.startsWith('//')) {
        return value;
    }

    const url = new URL(value);

    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
        throw new TypeError('Notification URL must use HTTP(S) or an application path');
    }

    return url.href;
}

export function registerNativeNotifications(tools: NativeNotificationTools): Cleanup {
    if (binding) {
        throw new Error('Native notifications are already registered');
    }

    const current = { tools, owners: new Map<string, string>() };

    binding = current;

    for (const notification of pendingNotifications.values()) {
        notification.ready(current);
    }

    return () => {
        if (binding !== current) {
            return;
        }

        binding = undefined;

        for (const id of current.owners.keys()) {
            tools.dismiss(id);
            current.owners.delete(id);
        }
    };
}

export async function showNotification(
    message: string,
    kind: 'info' | 'error',
    options?: NotificationOptions,
    ownerId?: string,
): Promise<void> {
    const text = typeof message === 'string' ? message.trim().slice(0, 500) : '';

    if (!text) {
        throw new TypeError('Notification message is required');
    }

    if (kind !== 'info' && kind !== 'error') {
        throw new TypeError('Notification kind must be info or error');
    }

    const icon = options?.icon;

    if (icon !== undefined && (typeof icon !== 'string' || !/^[a-z][a-z0-9_]*$/i.test(icon))) {
        throw new TypeError('Notification icon is invalid');
    }

    if (icon && options?.coverUrl !== undefined) {
        throw new TypeError('Use either a notification icon or a cover');
    }

    const coverUrl = options?.coverUrl === undefined ? undefined : readUrl(options.coverUrl);
    const link =
        options?.link === undefined
            ? undefined
            : { label: readLabel(options.link?.label), href: readUrl(options.link?.href) };
    const duration = Number(options?.durationMs);
    const id = `pulsesync-addon-notification:${crypto.randomUUID()}`;
    const current = await waitForNativeNotifications(id, String(ownerId ?? ''));

    if (!current || binding !== current || !current.owners.has(id)) {
        return;
    }

    const isActive = () => binding === current && current.owners.has(id);

    try {
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
    if (!ownerId) {
        return;
    }

    for (const notification of pendingNotifications.values()) {
        if (notification.ownerId === ownerId) {
            notification.ready(undefined);
        }
    }

    if (!binding) {
        return;
    }

    for (const [id, owner] of binding.owners) {
        if (owner !== ownerId) {
            continue;
        }

        binding.tools.dismiss(id);
        binding.owners.delete(id);
    }
}
