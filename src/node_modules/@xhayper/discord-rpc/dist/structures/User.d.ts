import type { UserFlags, UserPremiumType, PresenceUpdateStatus, GatewayActivity } from "discord-api-types/v10";
import type { Client } from "../Client";
import { Base } from "./Base";
export declare class User extends Base {
    /**
     * the user's id
     */
    id: string;
    /**
     * the user's username, not unique across the platform
     */
    username: string;
    /**
     * the user's 4-digit discord-tag
     */
    discriminator: string;
    /**
     * the user's [avatar hash](https://discord.com/developers/docs/reference#image-formatting)
     */
    avatar: string | null;
    /**
     * the [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
     */
    flags?: UserFlags | undefined;
    /**
     * the [type of Nitro subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) on a user's account
     */
    premium_type?: UserPremiumType | undefined;
    /**
     * the public [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
     */
    public_flags?: UserFlags | undefined;
    /**
     * user's rich presence
     */
    presence?: {
        status?: PresenceUpdateStatus;
        activities?: GatewayActivity[];
    } | undefined;
    avatar_decoration?: string | null;
    constructor(client: Client, props: Record<string, any>);
    /**
     * The URL to the user's avatar.
     */
    get avatarUrl(): string;
    /**
     * The URL to the user's default avatar. (avatar that is used when user have no avatar)
     */
    get defaultAvatarUrl(): string;
    /**
     * User's tag
     */
    get tag(): string;
}
