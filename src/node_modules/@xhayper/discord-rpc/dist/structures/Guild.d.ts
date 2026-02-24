import type { Client } from "../Client";
import { type User } from "./User";
import { Base } from "./Base";
export declare class Guild extends Base {
    /**
     * guild id
     */
    id: string;
    /**
     * guild name (2-100 characters, excluding trailing and leading whitespace)
     */
    name: string;
    icon_url: string | null;
    /**
     * guild member list
     * (always an empty array)
     * @deprecated
     */
    members: User[];
    /**
     * the vanity url code for the guild
     */
    vanity_url_code: string | null;
    constructor(client: Client, props: Record<string, any>);
}
