"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Base_1 = require("./Base");
const User_1 = require("./User");
class Message extends Base_1.Base {
    constructor(client, props) {
        super(client);
        /**
         * id of the message
         */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * if the message's author is blocked
         */
        Object.defineProperty(this, "blocked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * if the message is sent by a bot
         */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * contents of the message
         */
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "content_parsed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * author's server nickname
         */
        Object.defineProperty(this, "nick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "author_color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * when this message was edited (or null if never)
         */
        Object.defineProperty(this, "edited_timestamp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * when this message was sent
         */
        Object.defineProperty(this, "timestamp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * whether this was a TTS message
         */
        Object.defineProperty(this, "tts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * users specifically mentioned in the message
         */
        Object.defineProperty(this, "mentions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * whether this message mentions everyone
         */
        Object.defineProperty(this, "mention_everyone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * roles specifically mentioned in this message
         */
        Object.defineProperty(this, "mention_roles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * any embedded content
         */
        Object.defineProperty(this, "embeds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * any attached files
         */
        Object.defineProperty(this, "attachments", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the author of this message
         */
        Object.defineProperty(this, "author", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * whether this message is pinned
         */
        Object.defineProperty(this, "pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * [type of message](https://discord.com/developers/docs/resources/channel#message-object-message-types)
         */
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.assign(this, props);
        this.id = props.id;
        this.blocked = props.blocked;
        this.bot = props.bot;
        this.content = props.content;
        this.content_parsed = props.content_parsed;
        this.nick = props.nick;
        this.author_color = props.author_color;
        this.edited_timestamp = props.edited_timestamp;
        this.timestamp = props.timestamp;
        this.tts = props.tts;
        this.mentions = props.mentions.map((mentionData) => new User_1.User(client, mentionData));
        this.mention_everyone = props.mention_everyone;
        this.mention_roles = props.mention_roles;
        this.embeds = props.embeds;
        this.attachments = props.attachments;
        this.author = new User_1.User(client, props.author);
        this.pinned = props.pinned;
        this.type = props.type;
    }
}
exports.Message = Message;
