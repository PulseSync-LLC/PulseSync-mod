import type { NativeField } from '@pulsesync/yamusic-types';

export type NativeControlTools = {
    createElement: (component: unknown, props: Record<string, unknown> | null, ...children: unknown[]) => unknown;
    createPortal: (node: unknown, container: Element, key: string) => unknown;
    Button: unknown;
    Icon: unknown;
    Tooltip: unknown;
    LegacyTooltip: unknown;
    Field: unknown;
    Tabs: unknown;
    Spinner?: unknown;
    Caption?: unknown;
};

export type ButtonControl = {
    kind: 'button' | 'icon-button';
    label: string;
    icon?: string;
    disabled: boolean;
    color: 'primary' | 'secondary';
    variant: 'default' | 'outline' | 'text';
    size: 'xs' | 's' | 'm' | 'l';
    tooltip?: string;
    placement: 'top' | 'bottom' | 'left' | 'right';
};

export type FieldControl = {
    kind: 'field';
    field: NativeField;
};

export type TabsControl = {
    kind: 'tabs';
    id: string;
    label: string;
    value: string;
    disabled: boolean;
    items: { value: string; label: string; disabled: boolean }[];
};

export type SpinnerControl = {
    kind: 'spinner';
    size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    label: string;
};

export type CaptionControl = {
    kind: 'caption';
    text: string;
    variant: 'span' | 'p' | 'div';
    type: 'text' | 'controls' | 'entity';
    size: 'xxs' | 'xs' | 's' | 'm' | 'l';
    weight: 'normal' | 'medium' | 'bold';
    lineClamp?: number;
};

export type ControlByKind = {
    button: ButtonControl;
    'icon-button': ButtonControl;
    field: FieldControl;
    tabs: TabsControl;
    spinner: SpinnerControl;
    caption: CaptionControl;
};

export type NativeControl = ControlByKind[keyof ControlByKind];

export type ControlContext = {
    tools: NativeControlTools;
    key: string;
    readCurrent: () => NativeControl | undefined;
    dispatch: (type: string, detail?: unknown) => void;
};

export type ControlHandler<T extends NativeControl> = {
    parse: (value: Record<string, unknown>) => T | undefined;
    render: (control: T, context: ControlContext) => unknown;
};
