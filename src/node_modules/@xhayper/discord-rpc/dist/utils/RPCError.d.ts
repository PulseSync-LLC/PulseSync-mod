import { CUSTOM_RPC_ERROR_CODE, RPC_ERROR_CODE } from "../structures/Transport";
export declare class RPCError extends Error {
    code: RPC_ERROR_CODE | CUSTOM_RPC_ERROR_CODE;
    message: string;
    get name(): string;
    constructor(errorCode: CUSTOM_RPC_ERROR_CODE | RPC_ERROR_CODE, message?: string, options?: ErrorOptions);
}
