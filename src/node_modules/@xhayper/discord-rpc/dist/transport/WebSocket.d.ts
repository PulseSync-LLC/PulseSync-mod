import { Transport } from "../structures/Transport";
export declare class WebSocketTransport extends Transport {
    private ws?;
    get isConnected(): boolean;
    connect(): Promise<void>;
    send(data?: object | undefined): void;
    ping(): void;
    close(): Promise<void>;
}
