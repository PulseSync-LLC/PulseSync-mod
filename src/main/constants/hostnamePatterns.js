'use strict';
const policy = require('../lib/desktopPolicy.js');
const { config } = require('../config.js');
exports.applicationHostnamePattern = new RegExp(`^${config.app.appHostname.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
for (const name of [
    'yandexHostnamePattern',
    'oldMusicHostnamePattern',
    'oAuthHostnamePattern',
    'passportYandexHostnamePattern',
    'ssoPassportYandexHostnamePattern',
    'ssoPassportYaHostnamePattern',
])
    exports[name] = policy[name];
