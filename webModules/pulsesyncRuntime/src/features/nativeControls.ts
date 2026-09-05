import type { Cleanup } from '../contracts';
import { getNativeTooltip, hideNativeTooltip } from './nativeUi';
import type { NativeField } from '@pulsesync/yamusic-types';
import { normalizeNativeFields } from './nativeFields';

const ATTRIBUTE = 'data-pulsesync-native-control';
const SELECTOR = `[${ATTRIBUTE}]`;
const CHANGE_EVENT = 'pulsesync:native-controls-change';
const ACTIVATE_EVENT = 'pulsesync:native-control-activate';

export type NativeControlTools = {
    createElement: (component: unknown, props: Record<string, unknown> | null, ...children: unknown[]) => unknown;
    createPortal: (node: unknown, container: Element, key: string) => unknown;
    Button: unknown;
    Icon: unknown;
    Tooltip: unknown;
    LegacyTooltip: unknown;
    Field: unknown;
    Tabs: unknown;
};

export type NativeControlsRenderer = {
    subscribe: (listener: () => void) => Cleanup;
    getSnapshot: () => number;
    render: () => unknown[];
};

type Control = {
    kind: 'button' | 'icon-button';
    label: string;
    icon?: string;
    disabled: boolean;
    color: string;
    variant: string;
    size: string;
    tooltip?: string;
    placement: string;
};

type TabsControl = {
    kind: 'tabs';
    id: string;
    label: string;
    value: string;
    disabled: boolean;
    items: { value: string; label: string; disabled: boolean }[];
};

function readControl(raw: string | null): Control | TabsControl | { kind: 'field'; field: NativeField } | undefined {
    try {
        const value = JSON.parse(raw ?? 'null');
        if (value?.kind === 'field') return { kind: 'field', field: normalizeNativeFields([value.field])[0]! };
        if (value?.kind === 'tabs') {
            if (typeof value.id !== 'string' || !/^[a-z0-9_-]{1,100}$/i.test(value.id) || typeof value.label !== 'string' || !value.label.trim() || value.label.length > 200) return;
            if (!Array.isArray(value.items) || !value.items.length || value.items.length > 20) return;
            const values = new Set<string>();
            const items: TabsControl['items'] = [];
            for (const item of value.items) {
                if (!item || typeof item.value !== 'string' || !/^[a-z0-9_-]{1,80}$/i.test(item.value) || values.has(item.value) || typeof item.label !== 'string' || !item.label.trim() || item.label.length > 200) return;
                values.add(item.value);
                items.push({ value: item.value, label: item.label, disabled: item.disabled === true });
            }
            if (!values.has(value.value)) return;
            return { kind: 'tabs', id: value.id, label: value.label, value: value.value, disabled: value.disabled === true, items };
        }
        if (!value || (value.kind !== 'button' && value.kind !== 'icon-button') || typeof value.label !== 'string' || !value.label.trim()) return;
        const icon = typeof value.icon === 'string' && /^[a-z][a-z0-9_-]*$/i.test(value.icon) ? value.icon : undefined;
        if (value.kind === 'icon-button' && !icon) return;
        return {
            kind: value.kind,
            label: value.label,
            icon,
            disabled: value.disabled === true,
            color: ['primary', 'secondary'].includes(value.color) ? value.color : 'secondary',
            variant: ['default', 'outline', 'text'].includes(value.variant) ? value.variant : 'default',
            size: ['xs', 's', 'm', 'l'].includes(value.size) ? value.size : 's',
            tooltip: typeof value.tooltip === 'string' && value.tooltip.trim() ? value.tooltip : undefined,
            placement: ['top', 'bottom', 'left', 'right'].includes(value.placement) ? value.placement : 'top',
        };
    } catch {
        return;
    }
}

export function createNativeControlsRenderer(tools: NativeControlTools): NativeControlsRenderer {
    const listeners = new Set<() => void>();
    const keys = new WeakMap<Element, string>();
    const entries = new Map<Element, { raw: string; control: ReturnType<typeof readControl>; node: unknown }>();
    let nextKey = 0;
    let revision = 0;
    let observer: MutationObserver | undefined;
    let nodes: unknown[] = [];
    let tooltip: ReturnType<typeof getNativeTooltip>;
    let tooltipNode: unknown;
    const notify = () => {
        const currentTooltip = getNativeTooltip();
        const visibleTooltip = currentTooltip?.anchor.isConnected ? currentTooltip : undefined;
        if (tooltip !== visibleTooltip) {
            tooltip = visibleTooltip;
            tooltipNode = tooltip ? tools.createElement(tools.LegacyTooltip, { ...tooltip, key: 'legacy-tooltip', onClose: hideNativeTooltip }) : undefined;
        }
        nodes = Array.from(entries.values(), entry => entry.node).filter(node => node !== undefined);
        if (tooltipNode !== undefined) nodes.push(tooltipNode);
        revision += 1;
        listeners.forEach((listener) => listener());
    };
    const readCurrent = (element: Element) => {
        if (!element.isConnected) return;
        const raw = element.getAttribute(ATTRIBUTE);
        const cached = entries.get(element);
        return cached && cached.raw === raw ? cached.control : readControl(raw);
    };
    const createNode = (element: Element, control: NonNullable<ReturnType<typeof readControl>>, key: string) => {
        if (control.kind === 'field') {
            const change = (value: string | boolean | number) => {
                const current = readCurrent(element);
                if (current?.kind !== 'field' || current.field.disabled) return;
                if (current.field.type === 'switch' ? typeof value !== 'boolean' : current.field.type === 'slider' ? typeof value !== 'number' || !Number.isFinite(value) : typeof value !== 'string') return;
                element.dispatchEvent(new CustomEvent('pulsesync:native-field-change', { detail: JSON.stringify(value) }));
            };
            return tools.createPortal(tools.createElement(tools.Field, { field: control.field, value: control.field.value ?? (control.field.type === 'switch' ? false : control.field.type === 'slider' ? control.field.min ?? 0 : ''), id: key, onChange: change }), element, key);
        }
        if (control.kind === 'tabs') {
            if (!tools.Tabs) return;
            const change = (value: string) => {
                const current = readCurrent(element);
                if (current?.kind !== 'tabs' || current.disabled || value === current.value || !current.items.some(item => item.value === value && !item.disabled)) return;
                element.dispatchEvent(new CustomEvent('pulsesync:native-tabs-change', { detail: value }));
            };
            return tools.createPortal(tools.createElement(tools.Tabs, { ...control, onChange: change }), element, key);
        }
        const activate = () => {
            const current = readCurrent(element);
            if (current && (current.kind === 'button' || current.kind === 'icon-button') && !current.disabled) element.dispatchEvent(new CustomEvent(ACTIVATE_EVENT));
        };
        let button = tools.createElement(tools.Button, {
            type: 'button',
            color: control.color,
            variant: control.variant,
            size: control.size,
            radius: control.kind === 'icon-button' ? 'round' : 'm',
            disabled: control.disabled,
            'aria-label': control.kind === 'icon-button' ? control.label : undefined,
            icon: control.icon ? tools.createElement(tools.Icon, { variant: control.icon }) : undefined,
            onClick: activate,
            children: control.kind === 'button' ? control.label : undefined,
        });
        if (control.tooltip) {
            button = tools.createElement(tools.Tooltip, {
                text: control.tooltip,
                placement: control.placement,
                offsetOptions: 4,
                shiftOptions: { padding: 8 },
                flipOptions: { padding: 8 },
                enableAriaDescribedby: true,
                children: button,
            });
        }
        return tools.createPortal(button, element, key);
    };
    const update = (element: Element) => {
        const previous = entries.get(element);
        const raw = element.isConnected ? element.getAttribute(ATTRIBUTE) : null;
        if (raw === null) {
            entries.delete(element);
            return previous?.node !== undefined;
        }
        if (previous?.raw === raw) return false;
        let key = keys.get(element);
        if (!key) {
            key = `native-control-${++nextKey}`;
            keys.set(element, key);
        }
        const control = readControl(raw);
        const node = control ? createNode(element, control, key) : undefined;
        entries.set(element, { raw, control, node });
        return previous?.node !== node;
    };
    const collect = (node: Node, targets: Set<Element>) => {
        if (!(node instanceof Element) || !node.isConnected) return;
        if (node.matches(SELECTOR)) targets.add(node);
        node.querySelectorAll(SELECTOR).forEach(element => targets.add(element));
    };

    return {
        subscribe(listener) {
            listeners.add(listener);
            if (!observer) {
                observer = new MutationObserver((records) => {
                    const targets = new Set<Element>();
                    let removed = false;
                    for (const record of records) {
                        if (record.type === 'attributes') targets.add(record.target as Element);
                        else {
                            record.addedNodes.forEach(node => collect(node, targets));
                            if (!removed) removed = Array.from(record.removedNodes).some(node => node instanceof Element);
                        }
                    }
                    let changed = false;
                    if (removed) {
                        for (const [element, entry] of entries) {
                            if (element.isConnected) continue;
                            entries.delete(element);
                            if (entry.node !== undefined) changed = true;
                        }
                    }
                    targets.forEach(element => { if (update(element)) changed = true; });
                    if (changed || (tooltip && !tooltip.anchor.isConnected)) notify();
                });
                observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: [ATTRIBUTE] });
                const initial = new Set<Element>();
                collect(document.documentElement, initial);
                initial.forEach(update);
                document.addEventListener(CHANGE_EVENT, notify);
                notify();
            }
            return () => {
                listeners.delete(listener);
                if (listeners.size) return;
                observer?.disconnect();
                observer = undefined;
                document.removeEventListener(CHANGE_EVENT, notify);
                entries.clear();
                nodes = [];
                tooltip = undefined;
                tooltipNode = undefined;
                revision += 1;
            };
        },
        getSnapshot: () => revision,
        render: () => nodes,
    };
}
