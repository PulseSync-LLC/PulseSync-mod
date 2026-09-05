import { buttonHandler } from './button';
import { captionHandler } from './caption';
import { fieldHandler } from './field';
import { spinnerHandler } from './spinner';
import { tabsHandler } from './tabs';
import type { ControlByKind, ControlContext, ControlHandler, NativeControl } from './types';
import { isRecord } from './validation';

type ControlKind = keyof ControlByKind;

const handlers: { [K in ControlKind]: ControlHandler<ControlByKind[K]> } = {
    button: buttonHandler,
    'icon-button': buttonHandler,
    field: fieldHandler,
    tabs: tabsHandler,
    spinner: spinnerHandler,
    caption: captionHandler,
};

function isControlKind(value: unknown): value is ControlKind {
    return typeof value === 'string' && Object.hasOwn(handlers, value);
}

export function readControl(raw: string | null): NativeControl | undefined {
    try {
        const value: unknown = JSON.parse(raw ?? 'null');
        if (!isRecord(value) || !isControlKind(value.kind)) return;
        return handlers[value.kind].parse(value);
    } catch {
        return;
    }
}

function renderByKind<K extends ControlKind>(kind: K, control: ControlByKind[K], context: ControlContext) {
    return handlers[kind].render(control, context);
}

export function renderControl(control: NativeControl, context: ControlContext) {
    return renderByKind(control.kind, control, context);
}
