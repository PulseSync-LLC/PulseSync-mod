module.exports = {
    name: 'dev',
    description: 'запускает проект в dev-режиме с HMR, watch-сборками и автоматическим перезапуском Electron',
    order: 5,
    usage: 'dev',
    flags: [],
    persistent: true,
    async execute({ core }) {
        await core.devUtils.start();
    },
};
