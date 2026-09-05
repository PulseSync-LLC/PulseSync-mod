import type { ButtonControl, ControlHandler } from './types';
import { isOneOf } from './validation';

export const buttonHandler: ControlHandler<ButtonControl> = {
    parse(value) {
        if (!isOneOf(value.kind, ['button', 'icon-button']) || typeof value.label !== 'string' || !value.label.trim()) return;
        const icon = typeof value.icon === 'string' && /^[a-z][a-z0-9_-]*$/i.test(value.icon) ? value.icon : undefined;
        if (value.kind === 'icon-button' && !icon) return;
        return {
            kind: value.kind,
            label: value.label,
            icon,
            disabled: value.disabled === true,
            color: isOneOf(value.color, ['primary', 'secondary']) ? value.color : 'secondary',
            variant: isOneOf(value.variant, ['default', 'outline', 'text']) ? value.variant : 'default',
            size: isOneOf(value.size, ['xs', 's', 'm', 'l']) ? value.size : 's',
            tooltip: typeof value.tooltip === 'string' && value.tooltip.trim() ? value.tooltip : undefined,
            placement: isOneOf(value.placement, ['top', 'bottom', 'left', 'right']) ? value.placement : 'top',
        };
    },
    render(control, { tools, readCurrent, dispatch }) {
        const activate = () => {
            const current = readCurrent();
            if (current && (current.kind === 'button' || current.kind === 'icon-button') && !current.disabled) dispatch('pulsesync:native-control-activate');
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
        return button;
    },
};
