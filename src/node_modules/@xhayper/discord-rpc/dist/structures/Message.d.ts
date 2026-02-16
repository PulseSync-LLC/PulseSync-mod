import type { APIEmbed, APIAttachment, MessageType } from "discord-api-types/v10";
import type { Client } from "../Client";
import { Base } from "./Base";
import { User } from "./User";
export declare class Message extends Base {
    /**
     * id of the message
     */
    id: string;
    /**
     * if the message's author is blocked
     */
    blocked: boolean;
    /**
     * if the message is sent by a bot
     */
    bot: boolean;
    /**
     * contents of the message
     */
    content: string;
    content_parsed: any[];
    /**
     * author's server nickname
     */
    nick: string;
    author_color: string;
    /**
     * when this message was edited (or null if never)
     */
    edited_timestamp: string | null;
    /**
     * when this message was sent
     */
    timestamp: string;
    /**
     * whether this was a TTS message
     */
    tts: boolean;
    /**
     * users specifically mentioned in the message
     */
    mentions: User[];
    /**
     * whether this message mentions everyone
     */
    mention_everyone: boolean;
    /**
     * roles specifically mentioned in this message
     */
    mention_roles: string[];
    /**
     * any embedded content
     */
    embeds: APIEmbed[];
    /**
     * any attached files
     */
    attachments: APIAttachment[];
    /**
     * the author of this message
     */
    author: User;
    /**
     * whether this message is pinned
     */
    pinned: boolean;
    /**
     * [type of message](https://discord.com/developers/docs/resources/channel#message-object-message-types)
     */
    type: MessageType;
    constructor(client: Client, props: Record<string, any>);
}
