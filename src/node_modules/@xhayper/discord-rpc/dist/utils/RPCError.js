"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCError = void 0;
const Transport_1 = require("../structures/Transport");
class RPCError extends Error {
    get name() {
        return `${{ ...Transport_1.CUSTOM_RPC_ERROR_CODE, ...Transport_1.RPC_ERROR_CODE }[this.code]}`;
    }
    constructor(errorCode, message, options) {
        super(message, options);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        this.code = errorCode;
        this.message = message ?? this.message;
    }
}
exports.RPCError = RPCError;
