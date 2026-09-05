import type { FormModalOptions, FormValues, ModalOptions, NativeField } from '@pulsesync/yamusic-types';
import type { Cleanup } from '../contracts';
import { initialFormValues, normalizeNativeFields, validateFormValues } from './nativeFields';

export type NativeModal = {
    id: string;
    kind: 'alert' | 'confirm' | 'form';
    title: string;
    message: string;
    confirmLabel: string;
    cancelLabel: string;
    fields?: readonly NativeField[];
    values?: FormValues;
    errors?: Record<string, string>;
    change?: (name: string, value: string | boolean | number) => void;
    respond: (confirmed: boolean) => void;
};

type ModalResult = boolean | FormValues | null;
type PendingModal = { modal: NativeModal; ownerId: string; resolve: (value: ModalResult) => void; reject: (error: Error) => void };
const pending = new Map<string, PendingModal>();
let listener: (() => void) | undefined;

function readText(value: unknown, name: string, max: number, fallback?: string) {
    if (value === undefined && fallback !== undefined) return fallback;
    if (typeof value !== 'string' || !value.trim() || value.length > max) throw new TypeError(`Modal ${name} must contain 1–${max} characters`);
    return value.trim();
}

export function getNativeModal(): NativeModal | undefined {
    return pending.values().next().value?.modal;
}

export function registerNativeModals(onChange: () => void): Cleanup {
    if (listener) throw new Error('Native modals are already registered');
    listener = onChange;
    return () => {
        if (listener !== onChange) return;
        listener = undefined;
        const entries = [...pending.values()];
        pending.clear();
        for (const entry of entries) entry.reject(new DOMException('Native modal host unmounted', 'AbortError'));
    };
}

export async function showModal(kind: 'alert' | 'confirm', options: ModalOptions, ownerId?: string, requestId?: string): Promise<boolean> {
    if (kind !== 'alert' && kind !== 'confirm') throw new TypeError('Modal kind must be alert or confirm');
    return (await enqueueModal(kind, options, ownerId, requestId)) === true;
}

export async function showFormModal(options: FormModalOptions, ownerId?: string, requestId?: string): Promise<FormValues | null> {
    const fields = normalizeNativeFields(options?.fields);
    const result = await enqueueModal('form', options, ownerId, requestId, fields);
    return result && typeof result === 'object' ? result : null;
}

function enqueueModal(kind: NativeModal['kind'], options: ModalOptions, ownerId?: string, requestId?: string, fields?: NativeField[]): Promise<ModalResult> {
    const title = readText(options?.title, 'title', 200);
    const message = readText(options?.message, 'message', 5000);
    const confirmLabel = readText(options?.confirmLabel, 'confirmLabel', 80, kind === 'alert' ? 'Понятно' : 'Подтвердить');
    const cancelLabel = readText(options?.cancelLabel, 'cancelLabel', 80, 'Отмена');
    if (!listener) throw new Error('Native modal host is not mounted');
    const owner = String(ownerId ?? '');
    if ([...pending.values()].some((entry) => entry.ownerId === owner)) throw new Error('Addon already has a pending modal');
    const id = requestId ?? crypto.randomUUID();
    if (typeof id !== 'string' || !/^[a-f0-9-]{36}$/i.test(id) || pending.has(id)) throw new TypeError('Modal request ID is invalid or already pending');
    return new Promise<ModalResult>((resolve, reject) => {
        let entry: PendingModal;
        const active = () => pending.get(id) === entry && getNativeModal() === entry.modal;
        const modal: NativeModal = {
            id,
            kind,
            title,
            message,
            confirmLabel,
            cancelLabel,
            ...(fields ? {
                fields,
                values: initialFormValues(fields),
                errors: {},
                change(name: string, value: string | boolean | number) {
                    const field = fields.find(field => field.name === name);
                    if (!active() || !field || field.disabled) return;
                    if (field.type === 'switch' ? typeof value !== 'boolean' : field.type === 'slider' ? typeof value !== 'number' || !Number.isFinite(value) : typeof value !== 'string') return;
                    if (typeof value === 'string' && value.length > 5000) return;
                    entry.modal = { ...entry.modal, values: { ...entry.modal.values, [name]: value }, errors: { ...entry.modal.errors, [name]: '' } };
                    listener?.();
                },
            } : {}),
            respond(confirmed) {
                if (!active()) return;
                let result: ModalResult = confirmed === true;
                if (fields) {
                    result = null;
                    if (confirmed === true) {
                        const validated = validateFormValues(fields, entry.modal.values);
                        if (Object.keys(validated.errors).length) {
                            entry.modal = { ...entry.modal, errors: validated.errors };
                            listener?.();
                            return;
                        }
                        result = validated.values;
                    }
                }
                pending.delete(id);
                listener?.();
                resolve(result);
            },
        };
        entry = { modal, ownerId: owner, resolve, reject };
        pending.set(id, entry);
        listener?.();
    });
}

export async function closeModal(requestId: string, ownerId?: string): Promise<boolean> {
    const entry = pending.get(requestId);
    if (!entry || entry.ownerId !== String(ownerId ?? '')) return false;
    pending.delete(requestId);
    listener?.();
    entry.resolve(entry.modal.kind === 'form' ? null : false);
    return true;
}

export function clearAddonModals(ownerId: string): void {
    if (!ownerId) return;
    let changed = false;
    for (const [id, entry] of pending) {
        if (entry.ownerId !== ownerId) continue;
        pending.delete(id);
        changed = true;
        entry.reject(new DOMException('Addon disabled', 'AbortError'));
    }
    if (changed) listener?.();
}
