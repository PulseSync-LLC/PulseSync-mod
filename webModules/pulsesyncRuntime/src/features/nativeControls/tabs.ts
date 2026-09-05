import type { ControlHandler, TabsControl } from './types';
import { isRecord } from './validation';

export const tabsHandler: ControlHandler<TabsControl> = {
    parse(value) {
        if (typeof value.id !== 'string' || !/^[a-z0-9_-]{1,100}$/i.test(value.id) || typeof value.label !== 'string' || !value.label.trim() || value.label.length > 200) return;
        if (!Array.isArray(value.items) || !value.items.length || value.items.length > 20) return;
        const values = new Set<string>();
        const items: TabsControl['items'] = [];
        for (const item of value.items) {
            if (!isRecord(item) || typeof item.value !== 'string' || !/^[a-z0-9_-]{1,80}$/i.test(item.value) || values.has(item.value) || typeof item.label !== 'string' || !item.label.trim() || item.label.length > 200) return;
            values.add(item.value);
            items.push({ value: item.value, label: item.label, disabled: item.disabled === true });
        }
        if (typeof value.value !== 'string' || !values.has(value.value)) return;
        return { kind: 'tabs', id: value.id, label: value.label, value: value.value, disabled: value.disabled === true, items };
    },
    render(control, { tools, readCurrent, dispatch }) {
        if (!tools.Tabs) return;
        const change = (value: string) => {
            const current = readCurrent();
            if (current?.kind !== 'tabs' || current.disabled || value === current.value || !current.items.some(item => item.value === value && !item.disabled)) return;
            dispatch('pulsesync:native-tabs-change', value);
        };
        return tools.createElement(tools.Tabs, { ...control, onChange: change });
    },
};
