import type { Cleanup } from '../contracts';

const SLOT_SELECTOR = '[data-pulsesync-standard-slot]';
const ANCHOR_ATTRIBUTE = 'data-pulsesync-native-tooltip';
const DESCRIPTION_ATTRIBUTE = 'data-pulsesync-tooltip-description';
const CHANGE_EVENT = 'pulsesync:native-controls-change';
const SHOW_EVENT = 'pulsesync:native-tooltip-show';
const HIDE_EVENT = 'pulsesync:native-tooltip-hide';

export type NativeTooltipState = {
    anchor: Element;
    title: string;
    description?: string;
};

let tooltip: NativeTooltipState | undefined;
let tooltipOwner: symbol | undefined;

export function getNativeTooltip() {
    return tooltip;
}

export function hideNativeTooltip() {
    if (!tooltip) return;
    tooltip = undefined;
    tooltipOwner = undefined;
    document.dispatchEvent(new Event(CHANGE_EVENT));
}

class NativeTooltipRenderer {
    private readonly ownerId = Symbol();

    show(anchor: Element, title: string, description?: string) {
        tooltipOwner = this.ownerId;
        tooltip = { anchor, title, description };
        document.dispatchEvent(new Event(CHANGE_EVENT));
        return true;
    }

    hide() {
        if (tooltipOwner === this.ownerId) hideNativeTooltip();
    }

    dispose() {
        this.hide();
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
    return anchor;
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
    const onShow = (event: Event) => {
        const anchor = resolveAnchor(event.target);
        if (anchor) show(anchor, true);
    };
    const onHide = (event: Event) => {
        const anchor = event.target instanceof Element ? event.target : null;
        if (anchor) hide(anchor);
    };
    const onViewportChange = () => hide();
    migrateTitles(document.body);
    const observer = new MutationObserver((records) => {
        records.forEach((record) => {
            if (record.type === 'attributes') {
                const target = record.target as Element;
                migrateTitle(target);
                if (target === activeAnchor && record.attributeName !== 'title') {
                    const current = getNativeTooltip();
                    if (!target.hasAttribute(ANCHOR_ATTRIBUTE)) hide(target);
                    else if (
                        current &&
                        (current.title !== target.getAttribute(ANCHOR_ATTRIBUTE)?.trim() ||
                            current.description !== (target.getAttribute(DESCRIPTION_ATTRIBUTE)?.trim() || undefined))
                    )
                        show(target, true);
                }
            }
            record.addedNodes.forEach((node) => {
                if (node instanceof Element) migrateTitles(node);
            });
        });
        if (activeAnchor && !activeAnchor.isConnected) hide();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['title', ANCHOR_ATTRIBUTE, DESCRIPTION_ATTRIBUTE], childList: true, subtree: true });
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    document.addEventListener(SHOW_EVENT, onShow);
    document.addEventListener(HIDE_EVENT, onHide);
    window.addEventListener('scroll', onViewportChange, true);
    window.addEventListener('resize', onViewportChange);

    return () => {
        observer.disconnect();
        document.removeEventListener('pointerover', onPointerOver);
        document.removeEventListener('pointerout', onPointerOut);
        document.removeEventListener('focusin', onFocusIn);
        document.removeEventListener('focusout', onFocusOut);
        document.removeEventListener(SHOW_EVENT, onShow);
        document.removeEventListener(HIDE_EVENT, onHide);
        window.removeEventListener('scroll', onViewportChange, true);
        window.removeEventListener('resize', onViewportChange);
        clearTimer();
        renderer.dispose();
        document.querySelectorAll(`[${ANCHOR_ATTRIBUTE}]`).forEach((element) => {
            if (!isInSlot(element)) return;
            const title = element.getAttribute(ANCHOR_ATTRIBUTE);
            if (title && !element.hasAttribute('title')) element.setAttribute('title', title);
            element.removeAttribute(ANCHOR_ATTRIBUTE);
        });
    };
}
