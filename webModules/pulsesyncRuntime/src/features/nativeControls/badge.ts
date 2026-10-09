import type { BadgeControl, ControlHandler } from './types';
import { isOneOf } from './validation';

export const badgeHandler: ControlHandler<BadgeControl> = {
    parse(value) {
        if (typeof value.label !== 'string' || !value.label.trim() || value.label.length > 5000) return;
        if (typeof value.icon !== 'string' || !/^[a-z][a-z0-9_-]{0,127}$/i.test(value.icon)) return;
        const size = value.size ?? 'xxxs';
        if (!isOneOf(size, ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'])) return;
        return { kind: 'badge', label: value.label, icon: value.icon, size };
    },
    render(control, { tools }) {
        if (!tools.Badge) return;
        return tools.createElement(tools.Badge, {
            iconVariant: control.icon,
            getDescriptionTexts: () => Promise.resolve([control.label]),
            containerClassName: 'Meta_explicitMarkContainer__BxMQg',
            className: 'Meta_explicitMark__ocnCV',
            size: control.size,
            tabIndex: 0,
            'data-test-id': 'PULSESYNC_NATIVE_BADGE',
        });
    },
};
