import type { CaptionControl, ControlHandler } from './types';
import { isOneOf } from './validation';

export const captionHandler: ControlHandler<CaptionControl> = {
    parse(value) {
        const { text, variant = 'span', type = 'text', size = 's', weight = 'medium', lineClamp } = value;
        if (typeof text !== 'string' || text.length > 5000) return;
        if (!isOneOf(variant, ['span', 'p', 'div']) || !isOneOf(type, ['text', 'controls', 'entity'])) return;
        if (!isOneOf(size, ['xxs', 'xs', 's', 'm', 'l']) || !isOneOf(weight, ['normal', 'medium', 'bold'])) return;
        if (lineClamp !== undefined && (typeof lineClamp !== 'number' || !Number.isSafeInteger(lineClamp) || lineClamp < 1)) return;
        return { kind: 'caption', text, variant, type, size, weight, lineClamp };
    },
    render(control, { tools }) {
        if (!tools.Caption) return;
        return tools.createElement(tools.Caption, {
            variant: control.variant,
            type: control.type,
            size: control.size,
            weight: control.weight,
            lineClamp: control.lineClamp,
            children: control.text,
        });
    },
};
