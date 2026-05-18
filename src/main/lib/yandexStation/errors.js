class YandexStationError extends Error {
    constructor({ code, message, statusCode, endpoint, cause }) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.statusCode = statusCode;
        this.endpoint = endpoint;
        this.cause = cause;
    }
}

class YandexAuthError extends YandexStationError {}

class YandexQuasarError extends YandexStationError {}

class YandexMdnsError extends YandexStationError {}

class YandexGlagolError extends YandexStationError {}

module.exports = {
    YandexAuthError,
    YandexGlagolError,
    YandexMdnsError,
    YandexQuasarError,
    YandexStationError,
};
