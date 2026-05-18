const SECRET_KEY_PATTERN = /(authorization|cookie|token|secret|password|session|csrf)/i;

function maskSecret(value) {
    if (value === undefined || value === null) return value;

    const text = String(value);
    if (!text) return text;
    if (text.length <= 8) return '***';

    return `${text.slice(0, 4)}...${text.slice(-4)}`;
}

function sanitizeHeaders(headers = {}) {
    return Object.entries(headers).reduce((result, [key, value]) => {
        result[key] = SECRET_KEY_PATTERN.test(key) ? '[REDACTED]' : value;
        return result;
    }, {});
}

function sanitizeJson(value, seen = new WeakSet()) {
    if (value === null || value === undefined) return value;
    if (typeof value !== 'object') return value;

    if (seen.has(value)) return '[Circular]';
    seen.add(value);

    if (Array.isArray(value)) {
        return value.map((item) => sanitizeJson(item, seen));
    }

    return Object.entries(value).reduce((result, [key, item]) => {
        result[key] = SECRET_KEY_PATTERN.test(key) ? '[REDACTED]' : sanitizeJson(item, seen);
        return result;
    }, {});
}

module.exports = {
    maskSecret,
    sanitizeHeaders,
    sanitizeJson,
};
