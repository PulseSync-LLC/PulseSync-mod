"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(client) {
        /**
         * the client instance
         */
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.client = client;
    }
}
exports.Base = Base;
