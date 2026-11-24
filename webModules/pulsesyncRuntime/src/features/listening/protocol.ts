export interface ListeningItem {
    itemId: string;
    trackId: string;
    albumId: string | null;
}
export type ListeningAction =
    | { type: 'setPaused'; paused: boolean }
    | { type: 'seek'; positionMs: number }
    | { type: 'selectItem'; itemId: string }
    | { type: 'next' | 'previous' }
    | { type: 'setRate'; playbackRate: number };
export interface ListeningFrame {
    protocolVersion: 1;
    enabled: boolean;
    role: 'host' | 'listener' | null;
    roomId: string | null;
    epoch: number;
    revision: number;
    validForMs: number;
    queue: ListeningItem[];
    target: {
        item: ListeningItem;
        status: 'playing' | 'paused' | 'buffering';
        positionMs: number;
        playbackRate: number;
    } | null;
    command: { commandId: string; action: ListeningAction; item?: ListeningItem } | null;
}
export const record = (value: unknown): Record<string, any> =>
    value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, any>) : {};

const uuid = (value: unknown) =>
    typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu.test(value);
const catalog = (value: unknown) => typeof value === 'string' && /^[\w-]{1,64}$/u.test(value);
const integer = (value: unknown, min = 0, max = Number.MAX_SAFE_INTEGER) =>
    Number.isSafeInteger(value) && Number(value) >= min && Number(value) <= max;
const item = (value: unknown) => {
    const data = record(value);

    return uuid(data.itemId) && catalog(data.trackId) && (data.albumId === null || catalog(data.albumId));
};
const rate = (value: unknown) => typeof value === 'number' && Number.isFinite(value) && value >= 0.5 && value <= 2;

export function parseFrame(value: unknown): ListeningFrame | null {
    const frame = record(value),
        target = record(frame.target),
        command = record(frame.command),
        action = record(command.action);
    const validAction =
        (action.type === 'setPaused' && typeof action.paused === 'boolean') ||
        (action.type === 'seek' && integer(action.positionMs, 0, 86400000)) ||
        (action.type === 'selectItem' && uuid(action.itemId)) ||
        ['next', 'previous'].includes(action.type) ||
        (action.type === 'setRate' && rate(action.playbackRate));

    if (
        frame.protocolVersion !== 1 ||
        typeof frame.enabled !== 'boolean' ||
        !['host', 'listener', null].includes(frame.role) ||
        !(frame.roomId === null || uuid(frame.roomId)) ||
        !integer(frame.epoch) ||
        !integer(frame.revision) ||
        !integer(frame.validForMs, 0, 3000) ||
        !Array.isArray(frame.queue) ||
        frame.queue.length > 32 ||
        !frame.queue.every(item) ||
        new Set(frame.queue.map((entry) => record(entry).itemId)).size !== frame.queue.length ||
        (frame.role !== null && (!uuid(frame.roomId) || !integer(frame.epoch, 1) || !integer(frame.revision, 1))) ||
        (frame.command !== null && frame.role !== 'host') ||
        (frame.target !== null &&
            (frame.role !== 'listener' ||
                !frame.queue.some((entry) => record(entry).itemId === record(target.item).itemId))) ||
        !(
            frame.target === null ||
            (item(target.item) &&
                ['playing', 'paused', 'buffering'].includes(target.status) &&
                integer(target.positionMs, 0, 86400000) &&
                rate(target.playbackRate))
        ) ||
        !(
            frame.command === null ||
            (uuid(command.commandId) && validAction && (command.item === undefined || item(command.item)))
        )
    ) {
        return null;
    }

    return value as ListeningFrame;
}
