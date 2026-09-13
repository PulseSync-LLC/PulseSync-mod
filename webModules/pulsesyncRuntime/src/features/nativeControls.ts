import type { Cleanup } from '../contracts';
import { getNativeTooltip, hideNativeTooltip } from './nativeUi';
import { readControl, renderControl } from './nativeControls/registry';
import type { NativeControl, NativeControlTools } from './nativeControls/types';

export type { NativeControlTools } from './nativeControls/types';

const ATTRIBUTE = 'data-pulsesync-native-control';
const SELECTOR = `[${ATTRIBUTE}]`;
const CHANGE_EVENT = 'pulsesync:native-controls-change';

export type NativeControlsRenderer = {
    subscribe: (listener: () => void) => Cleanup;
    getSnapshot: () => number;
    render: () => unknown[];
};

export function createNativeControlsRenderer(tools: NativeControlTools): NativeControlsRenderer {
    const listeners = new Set<() => void>();
    const keys = new WeakMap<Element, string>();
    const entries = new Map<Element, { raw: string; control: NativeControl | undefined; node: unknown }>();
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
        nodes = Array.from(entries.values(), (entry) => entry.node).filter((node) => node !== undefined);
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
    const createNode = (element: Element, control: NativeControl, key: string) => {
        const node = renderControl(control, {
            tools,
            key,
            readCurrent: () => readCurrent(element),
            dispatch: (type, detail) => element.dispatchEvent(new CustomEvent(type, { detail })),
        });
        return node === undefined ? undefined : tools.createPortal(node, element, key);
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
        node.querySelectorAll(SELECTOR).forEach((element) => targets.add(element));
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
                            record.addedNodes.forEach((node) => collect(node, targets));
                            if (!removed) removed = Array.from(record.removedNodes).some((node) => node instanceof Element);
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
                    targets.forEach((element) => {
                        if (update(element)) changed = true;
                    });
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
