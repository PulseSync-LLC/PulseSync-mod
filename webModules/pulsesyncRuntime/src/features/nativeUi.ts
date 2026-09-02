import type { Cleanup } from '../contracts';

const SLOT_SELECTOR = '[data-pulsesync-standard-slot]';
const ANCHOR_ATTRIBUTE = 'data-pulsesync-native-tooltip';
const DESCRIPTION_ATTRIBUTE = 'data-pulsesync-tooltip-description';
const CONTENT_ATTRIBUTE = 'data-pulsesync-native-tooltip-content';

const FACTORY_MARKERS = {
    react: ['react.transitional.element', 'createElement = function', 'useState = function'],
    reactDom: ['Minified React error #', 'createRoot = function', 'hydrateRoot = function'],
    tooltip: ['TooltipContentComponent', 'enableAriaDescribedby', 'rootNode'],
    caption: ['CaptionComponent', 'root_controls_xxs', 'root_weight_medium'],
    tooltipWithTitleStyles: ['TooltipWithTitle_root__', 'TooltipWithTitle_description__'],
} as const;

type WebpackModule = Record<string, unknown>;
type WebpackFactory = (...args: unknown[]) => unknown;
type WebpackRequire = ((moduleId: string | number) => WebpackModule) & { m?: Record<string, WebpackFactory> };
type WebpackChunkQueue = {
    push: (chunk: [Array<string | number>, Record<string, never>, (webpackRequire: WebpackRequire) => void]) => unknown;
};
type NativeRoot = { render: (node: unknown) => void; unmount: () => void };
type NativeModules = {
    React: { createElement: (component: unknown, props: Record<string, unknown> | null, ...children: unknown[]) => unknown; version?: string };
    ReactDom: { createRoot: (container: Element) => NativeRoot; version?: string };
    Caption: unknown;
    TooltipContent: unknown;
    tooltipWithTitleStyles: { root: string; text: string; description: string };
};

declare global {
    interface Window {
        webpackChunk_N_E?: WebpackChunkQueue;
    }
}

let cachedWebpackRequire: WebpackRequire | undefined;

function isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object';
}

function findModuleExport<T>(webpackRequire: WebpackRequire, markers: readonly string[], predicate: (candidate: unknown) => candidate is T) {
    for (const [moduleId, factory] of Object.entries(webpackRequire.m ?? {})) {
        const source = Function.prototype.toString.call(factory);
        if (!markers.every((marker) => source.includes(marker))) continue;

        const module = webpackRequire(moduleId);
        const candidates: unknown[] = [module, ...Object.values(module)];
        const match = candidates.find(predicate);
        if (match !== undefined) return match;
    }
    return undefined;
}

function isForwardRefComponentWithMarker(candidate: unknown, marker: string) {
    return isRecord(candidate) && typeof candidate.render === 'function' && Function.prototype.toString.call(candidate.render).includes(marker);
}

function captureWebpackRequire() {
    if (cachedWebpackRequire) return cachedWebpackRequire;
    const chunks = window.webpackChunk_N_E;
    if (!chunks?.push) return undefined;

    chunks.push([[`pulsesync-native-ui-${Date.now()}`], {}, (webpackRequire) => {
        cachedWebpackRequire = webpackRequire;
    }]);
    return cachedWebpackRequire;
}

function resolveNativeModules(): NativeModules | undefined {
    const webpackRequire = captureWebpackRequire();
    if (!webpackRequire) return undefined;

    try {
        const React = findModuleExport(webpackRequire, FACTORY_MARKERS.react, (candidate): candidate is NativeModules['React'] => {
            return isRecord(candidate) && typeof candidate.createElement === 'function' && typeof candidate.useState === 'function';
        });
        const ReactDom = findModuleExport(webpackRequire, FACTORY_MARKERS.reactDom, (candidate): candidate is NativeModules['ReactDom'] => {
            return isRecord(candidate) && typeof candidate.createRoot === 'function' && typeof candidate.hydrateRoot === 'function';
        });
        const TooltipContent = findModuleExport(webpackRequire, FACTORY_MARKERS.tooltip, (candidate): candidate is unknown => {
            return isForwardRefComponentWithMarker(candidate, 'TooltipContentComponent');
        });
        const Caption = findModuleExport(webpackRequire, FACTORY_MARKERS.caption, (candidate): candidate is unknown => {
            return isForwardRefComponentWithMarker(candidate, 'CaptionComponent');
        });
        const tooltipWithTitleStyles = findModuleExport(
            webpackRequire,
            FACTORY_MARKERS.tooltipWithTitleStyles,
            (candidate): candidate is NativeModules['tooltipWithTitleStyles'] => {
                return (
                    isRecord(candidate) &&
                    typeof candidate.root === 'string' &&
                    typeof candidate.text === 'string' &&
                    typeof candidate.description === 'string' &&
                    candidate.root.startsWith('TooltipWithTitle_')
                );
            },
        );

        if (!React || !ReactDom || !TooltipContent || !Caption || !tooltipWithTitleStyles) return undefined;
        if (React.version && ReactDom.version && React.version !== ReactDom.version) return undefined;
        return { React, ReactDom, Caption, TooltipContent, tooltipWithTitleStyles };
    } catch (error) {
        console.warn('[PulseSync Runtime] Native tooltip component is unavailable', error);
        return undefined;
    }
}

class NativeTooltipRenderer {
    private modules?: NativeModules;
    private root?: NativeRoot;
    private container?: HTMLElement;
    private frame = 0;

    show(anchor: Element, title: string, description?: string) {
        if (!this.ensureRoot()) return false;
        window.cancelAnimationFrame(this.frame);
        this.render(title, description, 0, 0, false);

        let attempts = 0;
        const position = () => {
            const tooltip = document.querySelector<HTMLElement>(`[${CONTENT_ATTRIBUTE}]`);
            if (!tooltip) {
                if (attempts++ < 2) this.frame = window.requestAnimationFrame(position);
                return;
            }

            const anchorRect = anchor.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const preferredTop = anchorRect.top - tooltipRect.height - 4;
            const top = preferredTop >= 8 ? preferredTop : Math.min(anchorRect.bottom + 4, window.innerHeight - tooltipRect.height - 8);
            const centeredLeft = anchorRect.left + (anchorRect.width - tooltipRect.width) / 2;
            const left = Math.min(Math.max(centeredLeft, 8), Math.max(8, window.innerWidth - tooltipRect.width - 8));
            this.render(title, description, left, Math.max(8, top), true);
        };
        this.frame = window.requestAnimationFrame(position);
        return true;
    }

    hide() {
        window.cancelAnimationFrame(this.frame);
        this.root?.render(null);
    }

    dispose() {
        this.hide();
        this.root?.unmount();
        this.root = undefined;
        this.container?.remove();
        this.container = undefined;
    }

    private ensureRoot() {
        if (this.root) return this.root;
        this.modules ??= resolveNativeModules();
        if (!this.modules) return undefined;

        this.container = document.createElement('div');
        this.container.dataset.pulsesyncNativeUiRoot = 'tooltip';
        this.container.style.display = 'contents';
        document.body.append(this.container);
        this.root = this.modules.ReactDom.createRoot(this.container);
        return this.root;
    }

    private render(title: string, description: string | undefined, left: number, top: number, visible: boolean) {
        if (!this.modules || !this.root) return;

        const content = description
            ? this.modules.React.createElement(
                  'div',
                  { className: this.modules.tooltipWithTitleStyles.text },
                  this.modules.React.createElement(this.modules.Caption, { variant: 'span', type: 'text', size: 's', weight: 'bold' }, title),
                  this.modules.React.createElement(
                      this.modules.Caption,
                      { variant: 'span', type: 'text', size: 's', weight: 'normal', className: this.modules.tooltipWithTitleStyles.description },
                      description,
                  ),
              )
            : undefined;

        this.root.render(this.modules.React.createElement(this.modules.TooltipContent, {
            ...(description ? { className: this.modules.tooltipWithTitleStyles.root, children: content } : { text: title }),
            rootNode: document.body,
            [CONTENT_ATTRIBUTE]: '',
            style: { position: 'fixed', left, top, visibility: visible ? 'visible' : 'hidden', pointerEvents: 'none', width: 'max-content' },
        }));
    }
}

function isInSlot(element: Element) {
    return Boolean(element.closest(SLOT_SELECTOR));
}

function migrateTitle(element: Element) {
    if (!isInSlot(element)) return;
    const title = element.getAttribute('title')?.trim();
    if (!title) return;

    element.setAttribute(ANCHOR_ATTRIBUTE, title);
    element.removeAttribute('title');
    if (!element.hasAttribute('aria-label')) element.setAttribute('aria-label', title);
}

function migrateTitles(root: Element) {
    migrateTitle(root);
    root.querySelectorAll('[title]').forEach(migrateTitle);
}

function resolveAnchor(target: EventTarget | null) {
    if (!(target instanceof Element)) return null;
    const anchor = target.closest(`[${ANCHOR_ATTRIBUTE}]`);
    return anchor && isInSlot(anchor) ? anchor : null;
}

export function enableNativeSlotTooltips(): Cleanup {
    const renderer = new NativeTooltipRenderer();
    let activeAnchor: Element | null = null;
    let openTimer = 0;

    const clearTimer = () => {
        window.clearTimeout(openTimer);
        openTimer = 0;
    };
    const hide = (anchor?: Element | null) => {
        if (anchor && anchor !== activeAnchor) return;
        clearTimer();
        activeAnchor = null;
        renderer.hide();
    };
    const show = (anchor: Element, immediate = false) => {
        const title = anchor.getAttribute(ANCHOR_ATTRIBUTE)?.trim();
        const description = anchor.getAttribute(DESCRIPTION_ATTRIBUTE)?.trim() || undefined;
        if (!title) return;
        clearTimer();
        activeAnchor = anchor;

        const render = () => {
            if (activeAnchor === anchor && anchor.isConnected && !renderer.show(anchor, title, description)) {
                console.warn('[PulseSync Runtime] Failed to render native tooltip component');
            }
        };
        if (immediate) render();
        else openTimer = window.setTimeout(render, 200);
    };

    const onPointerOver = (event: PointerEvent) => {
        const anchor = resolveAnchor(event.target);
        if (anchor && anchor !== activeAnchor) show(anchor);
    };
    const onPointerOut = (event: PointerEvent) => {
        const anchor = resolveAnchor(event.target);
        if (!anchor || (event.relatedTarget instanceof Node && anchor.contains(event.relatedTarget))) return;
        hide(anchor);
    };
    const onFocusIn = (event: FocusEvent) => {
        const anchor = resolveAnchor(event.target);
        if (anchor) show(anchor, true);
    };
    const onFocusOut = (event: FocusEvent) => {
        const anchor = resolveAnchor(event.target);
        if (!anchor || (event.relatedTarget instanceof Node && anchor.contains(event.relatedTarget))) return;
        hide(anchor);
    };
    const onViewportChange = () => {
        if (!activeAnchor?.isConnected) return hide();
        const title = activeAnchor.getAttribute(ANCHOR_ATTRIBUTE)?.trim();
        const description = activeAnchor.getAttribute(DESCRIPTION_ATTRIBUTE)?.trim() || undefined;
        if (title) renderer.show(activeAnchor, title, description);
    };

    migrateTitles(document.body);
    const observer = new MutationObserver((records) => {
        records.forEach((record) => {
            if (record.type === 'attributes') migrateTitle(record.target as Element);
            record.addedNodes.forEach((node) => {
                if (node instanceof Element) migrateTitles(node);
            });
        });
        if (activeAnchor && !activeAnchor.isConnected) hide();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['title'], childList: true, subtree: true });
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    window.addEventListener('resize', onViewportChange);
    window.addEventListener('scroll', onViewportChange, true);

    return () => {
        observer.disconnect();
        document.removeEventListener('pointerover', onPointerOver);
        document.removeEventListener('pointerout', onPointerOut);
        document.removeEventListener('focusin', onFocusIn);
        document.removeEventListener('focusout', onFocusOut);
        window.removeEventListener('resize', onViewportChange);
        window.removeEventListener('scroll', onViewportChange, true);
        clearTimer();
        renderer.dispose();
        document.querySelectorAll(`[${ANCHOR_ATTRIBUTE}]`).forEach((element) => {
            const title = element.getAttribute(ANCHOR_ATTRIBUTE);
            if (title && !element.hasAttribute('title')) element.setAttribute('title', title);
            element.removeAttribute(ANCHOR_ATTRIBUTE);
        });
    };
}
