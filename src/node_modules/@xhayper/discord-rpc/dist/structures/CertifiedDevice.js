"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertifiedDevice = exports.DeviceType = void 0;
const Base_1 = require("./Base");
var DeviceType;
(function (DeviceType) {
    DeviceType["AUDIO_INPUT"] = "audioinput";
    DeviceType["AUDIO_OUTPUT"] = "audiooutput";
    DeviceType["VIDEO_INPUT"] = "videoinput";
})(DeviceType || (exports.DeviceType = DeviceType = {}));
class CertifiedDevice extends Base_1.Base {
    constructor(client, props) {
        super(client);
        /**
         * the type of device
         */
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the device's Windows UUID
         */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the hardware vendor
         */
        Object.defineProperty(this, "vendor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * the model of the product
         */
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * UUIDs of related devices
         */
        Object.defineProperty(this, "related", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * if the device's native echo cancellation is enabled
         */
        Object.defineProperty(this, "echo_cancellation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * if the device's native noise suppression is enabled
         */
        Object.defineProperty(this, "noise_suppression", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * if the device's native automatic gain control is enabled
         */
        Object.defineProperty(this, "automatic_gain_control", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * if the device is hardware muted
         */
        Object.defineProperty(this, "hardware_mute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.assign(this, props);
        this.type = props.type;
        this.id = props.id;
        this.vendor = props.vendor;
        this.model = props.model;
        this.related = props.related;
    }
}
exports.CertifiedDevice = CertifiedDevice;
