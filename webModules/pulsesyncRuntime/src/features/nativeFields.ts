import type { FormValues, NativeField } from '@pulsesync/yamusic-types';

function text(value: unknown, name: string, max: number, allowEmpty = false): string {
    if (typeof value !== 'string' || value.length > max || (!allowEmpty && !value.trim())) throw new TypeError(`Invalid field ${name}`);
    return value;
}

function validSliderValue(value: unknown, min: number, max: number, step: number): value is number {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) return false;
    const steps = (value - min) / step;
    return Number.isFinite(steps) && Math.abs(steps - Math.round(steps)) <= 1e-7;
}

export function normalizeNativeFields(value: unknown): NativeField[] {
    if (!Array.isArray(value) || !value.length || value.length > 20) throw new TypeError('Form must have 1–20 fields');
    const names = new Set<string>();
    return value.map((field): NativeField => {
        const name = text(field?.name, 'name', 80);
        if (!/^[a-z][a-z0-9_-]*$/i.test(name) || ['__proto__', 'constructor', 'prototype'].includes(name) || names.has(name)) throw new TypeError('Invalid or duplicate field name');
        names.add(name);
        const base = { name, label: text(field.label, 'label', 200), disabled: field.disabled === true, required: field.required === true };
        if (field.type === 'switch') {
            if (field.value !== undefined && typeof field.value !== 'boolean') throw new TypeError('Switch value must be boolean');
            return { ...base, type: 'switch', value: field.value ?? false };
        }
        if (field.type === 'slider') {
            const min = field.min ?? 0, max = field.max ?? 100, step = field.step ?? 1;
            if (![min, max, step].every(value => typeof value === 'number' && Number.isFinite(value)) || max <= min || !Number.isFinite(max - min) || step <= 0 || !Number.isSafeInteger(Math.ceil((max - min) / step))) throw new TypeError('Invalid slider range or step');
            const value = field.value ?? min;
            if (!validSliderValue(value, min, max, step)) throw new TypeError('Slider value must match its range and step');
            return { ...base, type: 'slider', min, max, step, value };
        }
        if (field.type === 'text') {
            const minLength = field.minLength ?? 0, maxLength = field.maxLength ?? 5000;
            if (!Number.isSafeInteger(minLength) || !Number.isSafeInteger(maxLength) || minLength < 0 || maxLength < minLength || maxLength > 5000) throw new TypeError('Invalid text field length bounds');
            return { ...base, type: 'text', value: text(field.value ?? '', 'value', maxLength, true), placeholder: text(field.placeholder ?? '', 'placeholder', 200, true), minLength, maxLength };
        }
        if (field.type === 'select') {
            if (!Array.isArray(field.options) || !field.options.length || field.options.length > 100) throw new TypeError('Select must have 1–100 options');
            const values = new Set<string>();
            const options = field.options.map((option: { value?: unknown; label?: unknown }) => {
                const value = text(option?.value, 'option value', 200);
                if (values.has(value)) throw new TypeError('Duplicate select option');
                values.add(value);
                return { value, label: text(option.label, 'option label', 200) };
            });
            const selected = text(field.value ?? '', 'value', 200, true);
            if (selected && !values.has(selected)) throw new TypeError('Select value is not an option');
            return { ...base, type: 'select', options, value: selected };
        }
        throw new TypeError('Unsupported native field type');
    });
}

export function initialFormValues(fields: readonly NativeField[]): FormValues {
    return Object.fromEntries(fields.map(field => [field.name, field.value ?? (field.type === 'switch' ? false : field.type === 'slider' ? field.min ?? 0 : '')]));
}

export function validateFormValues(fields: readonly NativeField[], input: unknown): { values: FormValues; errors: Record<string, string> } {
    const values: FormValues = {}, errors: Record<string, string> = {};
    const source = input && typeof input === 'object' && !Array.isArray(input) ? input as Record<string, unknown> : {};
    for (const field of fields) {
        const value = field.disabled ? field.value ?? (field.type === 'switch' ? false : field.type === 'slider' ? field.min ?? 0 : '') : source[field.name];
        if (field.type === 'switch') {
            if (typeof value !== 'boolean') errors[field.name] = 'Ожидается переключатель';
            else if (!field.disabled && field.required && !value) errors[field.name] = 'Необходимо включить';
        } else if (field.type === 'slider') {
            if (!validSliderValue(value, field.min ?? 0, field.max ?? 100, field.step ?? 1)) errors[field.name] = `Диапазон: ${field.min ?? 0}–${field.max ?? 100}, шаг: ${field.step ?? 1}`;
        } else if (typeof value !== 'string') errors[field.name] = 'Ожидается текстовое значение';
        else if (!field.disabled && field.required && !value.trim()) errors[field.name] = 'Заполните поле';
        else if (!field.disabled && field.type === 'text' && (value.length < (field.minLength ?? 0) || value.length > (field.maxLength ?? 5000))) errors[field.name] = `Длина: ${field.minLength ?? 0}–${field.maxLength ?? 5000} символов`;
        else if (field.type === 'select' && value && !field.options.some(option => option.value === value)) errors[field.name] = 'Выберите значение из списка';
        if (typeof value === 'string' || typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value))) values[field.name] = value;
    }
    return { values, errors };
}
