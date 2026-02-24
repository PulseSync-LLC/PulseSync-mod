import type { Client } from "../Client";
import { Base } from "./Base";
export declare enum KEY_TYPE {
    KEYBOARD_KEY = 0,
    MOUSE_BUTTON = 1,
    KEYBOARD_MODIFIER_KEY = 2,
    GAMEPAD_BUTTON = 3
}
export interface ShortcutKeyCombo {
    /**
     * see [key types](https://discord.com/developers/docs/topics/rpc#getvoicesettings-key-types)
     */
    type: KEY_TYPE;
    /**
     * key code
     */
    code: number;
    /**
     * key name
     */
    name: string;
}
export interface Device {
    id: string;
    name: string;
}
export interface VoiceInput {
    /**
     * device id
     */
    device_id: string;
    /**
     * input voice level (min: 0, max: 100)
     */
    volume: number;
    /**
     * array of read-only device objects containing `id` and `name` string keys
     */
    readonly available_devices: Device[];
}
export interface VoiceOutput {
    /**
     * device id
     */
    device_id: string;
    /**
     * output voice level (min: 0, max: 200)
     */
    volume: number;
    /**
     * array of read-only device objects containing `id` and `name` string keys
     */
    readonly available_devices: Device[];
}
export interface VoiceMode {
    /**
     * voice setting mode type (can be `PUSH_TO_TALK` or `VOICE_ACTIVITY`)
     */
    type: "PUSH_TO_TALK" | "VOICE_ACTIVITY";
    /**
     * voice activity threshold automatically sets its threshold
     */
    auto_threshold: boolean;
    /**
     * threshold for voice activity (in dB) (min: -100, max: 0)
     */
    threshold: number;
    /**
     * shortcut key combos for PTT
     */
    shortcut: ShortcutKeyCombo[];
    /**
     * the PTT release delay (in ms) (min: 0, max: 2000)
     */
    delay: number;
}
export declare class VoiceSettings extends Base {
    /**
     * input settings
     */
    input: VoiceInput;
    /**
     * output settings
     */
    output: VoiceOutput;
    /**
     * voice mode settings
     */
    mode: any;
    /**
     * state of automatic gain control
     */
    automatic_gain_control: boolean;
    /**
     * state of echo cancellation
     */
    echo_cancellation: boolean;
    /**
     * state of noise suppression
     */
    noise_suppression: boolean;
    /**
     * state of voice quality of service
     */
    qos: boolean;
    /**
     * state of silence warning notice
     */
    silence_warning: boolean;
    /**
     * state of self-deafen
     */
    deaf: boolean;
    /**
     * state of self-mute
     */
    mute: boolean;
    constructor(client: Client, props: Record<string, any>);
}
