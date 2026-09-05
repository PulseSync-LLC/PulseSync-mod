import type { ControlHandler, SpinnerControl } from './types';
import { isOneOf } from './validation';

export const spinnerHandler: ControlHandler<SpinnerControl> = {
    parse(value) {
        const size = value.size ?? 'm';
        const label = value.label ?? 'Загрузка';
        if (!isOneOf(size, ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']) || typeof label !== 'string' || !label.trim() || label.length > 200) return;
        return { kind: 'spinner', size, label };
    },
    render(control, { tools }) {
        if (!tools.Spinner) return;
        return tools.createElement(tools.Spinner, { size: control.size, label: control.label });
    },
};
