async function createRuntime() {
    require('dotenv').config();

    const asar = require('@electron/asar');
    const fs = require('fs');
    const fsp = require('fs').promises;
    const path = require('path');
    const semver = require('semver');
    const crypto = require('crypto');
    const plist = require('plist');
    const { minify } = require('terser');
    const axios = require('axios');
    const yaml = require('js-yaml');
    const sevenZip = require('7zip-min');
    const FormData = require('form-data');
    const { Octokit } = await import('@octokit/rest');
    const { execSync } = require('child_process');
    const { exec, spawn } = require('child_process');
    const { promisify } = require('util');
    const vm = require('vm');

    const execAsync = promisify(exec);
    const REPO_ROOT = path.resolve(__dirname, '..', '..');

    const constants = {
        REPO_ROOT,
        SRC_PATH: path.join(REPO_ROOT, 'src'),
        DEFAULT_DIST_PATH: path.join(REPO_ROOT, 'builds/latest/app.asar'),
        DEFAULT_PATCHED_DIST_PATH: path.join(REPO_ROOT, 'builds/patched/app.asar'),
        EXTRACTED_DIR_PATH: path.join(REPO_ROOT, 'extracted'),
        YM_LATEST_YML_URL: 'https://desktop.app.music.yandex.net/stable/latest.yml',
        PRETTIER_CONFIG_PATH: path.join(REPO_ROOT, '.prettierrc.json'),
        MAC_APP_PATH: '/Applications/Яндекс Музыка.app',
        WINDOWS_APP_PATH: path.join(process.env?.LOCALAPPDATA ?? '', '/Programs/YandexMusic'),
        MINIFIED_SRC_PATH: path.join(REPO_ROOT, 'minified/src'),
        TEMP_DIR: path.join(REPO_ROOT, 'temp'),
        PATCH_NOTES_PATH: path.join(REPO_ROOT, 'PATCHNOTES.md'),
    };

    constants.WINDOWS_EXE_PATH = path.join(constants.WINDOWS_APP_PATH ?? '', 'Яндекс Музыка.exe');
    constants.DIRECT_DIST_PATH =
        process.platform === 'darwin' ? path.join(constants.MAC_APP_PATH, '/Contents/Resources/app.asar') : path.join(constants.WINDOWS_APP_PATH, 'resources/app.asar');
    constants.INFO_PLIST_PATH = path.join(constants.MAC_APP_PATH, '/Contents/Info.plist');
    constants.EXTRACTED_ENTITLEMENTS_PATH = path.join(constants.TEMP_DIR, 'extracted_entitlements.xml');

    if (process.platform === 'darwin') {
        if (!fs.existsSync(constants.DIRECT_DIST_PATH)) {
            console.warn('Не удалось найти директорию с Яндекс Музыкой:', constants.DIRECT_DIST_PATH, '\nПереопределите MAC_APP_PATH в toolset_v3.js');
        }
        if (!fs.existsSync(constants.INFO_PLIST_PATH)) {
            console.warn('Не удалось найти Info.plist:', constants.INFO_PLIST_PATH, '\nПереопределите MAC_APP_PATH в toolset_v3.js');
        }
    }

    if (!fs.existsSync(constants.DIRECT_DIST_PATH)) {
        console.warn('Не удалось найти директорию с Яндекс Музыкой:', constants.DIRECT_DIST_PATH, '\nПереопределите WINDOWS_APP_PATH в toolset_v3.js');
    }

    if (!fs.existsSync(constants.TEMP_DIR)) {
        fs.mkdirSync(constants.TEMP_DIR, { recursive: true });
        console.log('Создана временная директория:', constants.TEMP_DIR);
    }

    return {
        deps: {
            asar,
            fs,
            fsp,
            path,
            semver,
            crypto,
            plist,
            minify,
            axios,
            yaml,
            sevenZip,
            FormData,
            Octokit,
            execSync,
            execAsync,
            spawn,
            vm,
        },
        constants,
        env: {
            webhookUrl: process.env.DISCORD_WEBHOOK_URL,
            serverUrl: process.env.SERVER_URL,
            githubToken: process.env.GITHUB_TOKEN,
            githubOwnerEnv: process.env.GITHUB_REPO_OWNER,
            githubRepoEnv: process.env.GITHUB_REPO_NAME,
            githubTagPrefix: process.env.GITHUB_RELEASE_TAG_PREFIX ?? 'v',
            authToken: process.env.AUTH_TOKEN,
        },
        state: {
            oldYMHash: null,
            oldYMHashOverride: null,
        },
    };
}

module.exports = {
    createRuntime,
};
