import { Transport, type TransportOptions } from "../structures/Transport";
export declare enum IPC_OPCODE {
    HANDSHAKE = 0,
    FRAME = 1,
    CLOSE = 2,
    PING = 3,
    PONG = 4
}
export type FormatFunction = (id: number) => string;
export type PathData = {
    platform: NodeJS.Platform[];
    format: FormatFunction;
};
export type IPCTransportOptions = {
    pathList?: PathData[];
} & TransportOptions;
export declare class IPCTransport extends Transport {
    pathList: PathData[];
    private socket?;
    get isConnected(): boolean;
    constructor(options: IPCTransportOptions);
    private getSocket;
    connect(): Promise<void>;
    send(message?: any, op?: IPC_OPCODE): void;
    ping(): void;
    close(): Promise<void>;
}
