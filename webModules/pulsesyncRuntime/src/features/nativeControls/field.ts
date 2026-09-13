import type { NativeField } from '@pulsesync/yamusic-types';
import { normalizeNativeFields } from '../nativeFields';
import type { ControlHandler, FieldControl } from './types';

function initialValue(field: NativeField) {
    if (field.value !== undefined && field.value !== null) return field.value;
    switch (field.type) {
        case 'switch':
            return false;
        case 'slider':
            return field.min ?? 0;
        default:
            return '';
    }
}

function isChangeValue(field: NativeField, value: unknown): value is string | boolean | number {
    switch (field.type) {
        case 'switch':
            return typeof value === 'boolean';
        case 'slider':
            return typeof value === 'number' && Number.isFinite(value);
        default:
            return typeof value === 'string';
    }
}

export const fieldHandler: ControlHandler<FieldControl> = {
    parse(value) {
        return { kind: 'field', field: normalizeNativeFields([value.field])[0]! };
    },
    render(control, { tools, key, readCurrent, dispatch }) {
        const change = (value: unknown) => {
            const current = readCurrent();
            if (current?.kind !== 'field' || current.field.disabled || !isChangeValue(current.field, value)) return;
            dispatch('pulsesync:native-field-change', JSON.stringify(value));
        };
        return tools.createElement(tools.Field, { field: control.field, value: initialValue(control.field), id: key, onChange: change });
    },
};
