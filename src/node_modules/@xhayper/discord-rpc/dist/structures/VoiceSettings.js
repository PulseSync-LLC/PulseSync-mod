"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceSettings = exports.KEY_TYPE = void 0;
const Base_1 = require("./Base");
var KEY_TYPE;
(function (KEY_TYPE) {
    KEY_TYPE[KEY_TYPE["KEYBOARD_KEY"] = 0] = "KEYBOARD_KEY";
    KEY_TYPE[KEY_TYPE["MOUSE_BUTTON"] = 1] = "MOUSE_BUTTON";
    KEY_TYPE[KEY_TYPE["KEYBOARD_MODIFIER_KEY"] = 2] = "KEYBOARD_MODIFIER_KEY";
    KEY_TYPE[KEY_TYPE["GAMEPAD_BUTTON"] = 3] = "GAMEPAD_BUTTON";
})(KEY_TYPE || (exports.KEY_TYPE = KEY_TYPE = {}));
class VoiceSettings extends Base_1.Base {
    constructor(client, props) {
        super(client);
        /**
         * input settings
         */
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * output settings
         */
        Object.defineProperty(this, "output", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * voice mode settings
         */
        Object.defineProperty(this, "mode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of automatic gain control
         */
        Object.defineProperty(this, "automatic_gain_control", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of echo cancellation
         */
        Object.defineProperty(this, "echo_cancellation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of noise suppression
         */
        Object.defineProperty(this, "noise_suppression", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of voice quality of service
         */
        Object.defineProperty(this, "qos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of silence warning notice
         */
        Object.defineProperty(this, "silence_warning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of self-deafen
         */
        Object.defineProperty(this, "deaf", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * state of self-mute
         */
        Object.defineProperty(this, "mute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.assign(this, props);
        this.input = props.input;
        this.output = props.output;
        this.mode = props.mode;
        this.automatic_gain_control = props.automatic_gain_control;
        this.echo_cancellation = props.echo_cancellation;
        this.noise_suppression = props.noise_suppression;
        this.qos = props.qos;
        this.silence_warning = props.silence_warning;
        this.deaf = props.deaf;
        this.mute = props.mute;
    }
}
exports.VoiceSettings = VoiceSettings;
