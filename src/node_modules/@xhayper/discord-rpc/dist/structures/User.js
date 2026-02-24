"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Base_1 = require("./Base");
class User extends Base_1.Base {
    constructor(client, props) {
        super(client);
        /**
         * the user's id
         */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the user's username, not unique across the platform
         */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the user's 4-digit discord-tag
         */
        Object.defineProperty(this, "discriminator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the user's [avatar hash](https://discord.com/developers/docs/reference#image-formatting)
         */
        Object.defineProperty(this, "avatar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
         */
        Object.defineProperty(this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the [type of Nitro subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) on a user's account
         */
        Object.defineProperty(this, "premium_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the public [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
         */
        Object.defineProperty(this, "public_flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * user's rich presence
         */
        Object.defineProperty(this, "presence", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "avatar_decoration", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.assign(this, props);
        // word can't explains how much i hate this
        this.id = props.id;
        this.username = props.username;
        this.discriminator = props.discriminator;
        this.avatar = props.avatar;
    }
    /**
     * The URL to the user's avatar.
     */
    get avatarUrl() {
        return this.client.getCdn().avatar(this.id, this.avatar);
    }
    /**
     * The URL to the user's default avatar. (avatar that is used when user have no avatar)
     */
    get defaultAvatarUrl() {
        return this.client.getCdn().defaultAvatar(parseInt(this.discriminator.substring(1)) % 5);
    }
    /**
     * User's tag
     */
    get tag() {
        return `${this.username}#${this.discriminator}`;
    }
}
exports.User = User;
