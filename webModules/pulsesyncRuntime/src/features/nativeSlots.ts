import type { NativeSlotTools } from '../contracts';

const REGISTRATION_SELECTOR = '[data-pulsesync-native-slot]';
const SLOT_ATTRIBUTE = 'data-pulsesync-native-slot';
const ITEM_ID_ATTRIBUTE = 'data-pulsesync-native-slot-item-id';
const PAYLOAD_ATTRIBUTE = 'data-pulsesync-native-slot-payload';
const POSITION_ATTRIBUTE = 'data-pulsesync-native-slot-position';
const ACTIVATE_EVENT = 'pulsesync:native-slot-activate';

function resolvePosition(value: string | null, nativeItemCount: number) {
    if (value === 'start') return 0;
    if (!value || value === 'end') return nativeItemCount;

    const position = Number(value);
    return Number.isSafeInteger(position) ? Math.min(Math.max(position, 0), nativeItemCount) : nativeItemCount;
}

function parsePayload(registration: HTMLElement) {
    const value = registration.getAttribute(PAYLOAD_ATTRIBUTE);
    if (!value) return undefined;

    try {
        return JSON.parse(value) as unknown;
    } catch {
        return undefined;
    }
}

function dispatchActivation(registration: HTMLElement, detail: unknown) {
    try {
        registration.dispatchEvent(new CustomEvent(ACTIVATE_EVENT, { detail: JSON.stringify(detail ?? null) }));
    } catch (error) {
        console.warn('[PulseSync Runtime] Native slot activation detail is not serializable', error);
    }
}

export function injectNativeSlotItems(slotName: string, nativeItems: unknown[], tools: NativeSlotTools) {
    const normalizedSlotName = String(slotName ?? '').trim();
    if (!normalizedSlotName) return nativeItems;

    const visibleNativeItems = nativeItems.filter(Boolean);
    const positions = new Map<number, unknown[]>();

    document.querySelectorAll<HTMLElement>(REGISTRATION_SELECTOR).forEach((registration, registrationIndex) => {
        if (registration.getAttribute(SLOT_ATTRIBUTE) !== normalizedSlotName) return;

        const payload = parsePayload(registration);
        if (payload === undefined) return;

        const addonId = registration.dataset.pulsesyncAddonId || 'unknown-addon';
        const itemId = registration.getAttribute(ITEM_ID_ATTRIBUTE) || String(registrationIndex);
        let item: unknown;
        try {
            item = tools.renderItem({
                addonId,
                itemId,
                key: `pulsesync-native-slot-${normalizedSlotName}-${addonId}-${itemId}`,
                payload,
                activate: () => dispatchActivation(registration, tools.eventDetail),
            });
        } catch (error) {
            console.warn(`[PulseSync Runtime] Failed to render native slot item in ${normalizedSlotName}`, error);
            return;
        }
        if (!item) return;

        const position = resolvePosition(registration.getAttribute(POSITION_ATTRIBUTE), visibleNativeItems.length);
        const itemsAtPosition = positions.get(position) ?? [];
        itemsAtPosition.push(item);
        positions.set(position, itemsAtPosition);
    });

    if (!positions.size) return visibleNativeItems;

    const result: unknown[] = [];
    for (let index = 0; index <= visibleNativeItems.length; index += 1) {
        result.push(...(positions.get(index) ?? []));
        if (index < visibleNativeItems.length) result.push(visibleNativeItems[index]);
    }
    return result;
}
