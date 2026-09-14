'use strict';

const errorCodes = require('./reactErrorCodes.js');

const SUPPORTED_REACT_VERSIONS = new Set(['19.2.4', '19.2.0-canary-97cdd5d3-20250710']);

const decode = (version, code, args = []) => {
    if (!SUPPORTED_REACT_VERSIONS.has(String(version))) return null;
    const template = errorCodes[String(code)];
    if (typeof template !== 'string') return null;
    let index = 0;
    return template.replace(/%s/g, () => String(args[index++] ?? ''));
};

module.exports = {
    decode,
};
