"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guild = void 0;
const Base_1 = require("./Base");
class Guild extends Base_1.Base {
    constructor(client, props) {
        super(client);
        /**
         * guild id
         */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * guild name (2-100 characters, excluding trailing and leading whitespace)
         */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "icon_url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * guild member list
         * (always an empty array)
         * @deprecated
         */
        Object.defineProperty(this, "members", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        }); // Always an empty array
        /**
         * the vanity url code for the guild
         */
        Object.defineProperty(this, "vanity_url_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.assign(this, props);
        this.id = props.id;
        this.name = props.name;
        this.icon_url = props.icon_url;
        this.vanity_url_code = props.vanity_url_code;
    }
}
exports.Guild = Guild;
