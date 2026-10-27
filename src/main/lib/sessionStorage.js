'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { app } = require('electron');
const store = require('./store.js');
const { StoreKeys } = require('../types/store.js');
const { Logger } = require('../packages/logger/Logger.js');

const logger = new Logger('SessionStorage');
const PROFILE_FILES = new Set(['config.json', '.updaterId', 'logs', 'metrics-state.json']);
const RUNTIME_FILES = new Set(['SingletonCookie', 'SingletonSocket', 'SingletonLock', 'DevToolsActivePort', 'lockfile']);
const MIGRATION_PREFIX = '.pulsesync-session-migration-';

function getSessionEntries(directory) {
    return fs.readdirSync(directory).filter((name) => !PROFILE_FILES.has(name) && !RUNTIME_FILES.has(name) && !name.startsWith(MIGRATION_PREFIX));
}

function getStoragePath(directory) {
    if (typeof directory !== 'string' || !directory.trim() || !path.isAbsolute(directory)) {
        throw new Error('Session storage path must be a non-empty absolute path');
    }
    if (!fs.statSync(directory).isDirectory()) {
        throw new Error(`Session storage path is not a directory: ${directory}`);
    }
    fs.accessSync(directory, fs.constants.R_OK | fs.constants.W_OK);
    return fs.realpathSync(directory);
}

function isNestedPath(parent, child) {
    const relative = path.relative(parent, child);
    return relative !== '' && relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function activateStorage(directory) {
    const previousPath = app.getPath('sessionData');
    app.setPath('sessionData', directory);
    try {
        if (store.get(StoreKeys.SESSION_STORAGE_PATH) !== directory) {
            store.set(StoreKeys.SESSION_STORAGE_PATH, directory);
        }
    } catch (error) {
        app.setPath('sessionData', previousPath);
        throw error;
    }
}

function migrateStorage(source, destination) {
    const workingDirectory = fs.mkdtempSync(path.join(destination, MIGRATION_PREFIX));
    const stagedDirectory = path.join(workingDirectory, 'new');
    const backupDirectory = path.join(workingDirectory, 'previous');
    const backedUp = [];
    const installed = [];
    let keepWorkingDirectory = false;

    try {
        fs.mkdirSync(stagedDirectory);
        fs.mkdirSync(backupDirectory);
        logger.info('Copying session storage', { source, destination });
        for (const name of getSessionEntries(source)) {
            fs.cpSync(path.join(source, name), path.join(stagedDirectory, name), {
                recursive: true,
                preserveTimestamps: true,
                verbatimSymlinks: true,
                filter: (file) => {
                    if (RUNTIME_FILES.has(path.basename(file))) return false;
                    const stat = fs.lstatSync(file);
                    return stat.isFile() || stat.isDirectory() || stat.isSymbolicLink();
                },
            });
        }

        for (const name of getSessionEntries(destination)) {
            fs.renameSync(path.join(destination, name), path.join(backupDirectory, name));
            backedUp.push(name);
        }
        for (const name of fs.readdirSync(stagedDirectory)) {
            fs.renameSync(path.join(stagedDirectory, name), path.join(destination, name));
            installed.push(name);
        }
        activateStorage(destination);
        keepWorkingDirectory = backedUp.length > 0;
        logger.info('Session storage migration completed', { source, destination, backup: keepWorkingDirectory ? backupDirectory : null });
    } catch (error) {
        try {
            for (const name of installed.reverse()) {
                fs.renameSync(path.join(destination, name), path.join(stagedDirectory, name));
            }
            for (const name of backedUp.reverse()) {
                fs.renameSync(path.join(backupDirectory, name), path.join(destination, name));
            }
        } catch (rollbackError) {
            keepWorkingDirectory = true;
            logger.error('Could not restore destination after failed migration; recovery files retained', workingDirectory, rollbackError);
        }
        throw error;
    } finally {
        if (!keepWorkingDirectory) {
            try {
                fs.rmSync(workingDirectory, { recursive: true, force: true });
            } catch (error) {
                logger.warn('Could not remove session storage migration files', workingDirectory, error);
            }
        }
    }
}

function initSessionStoragePath() {
    const defaultPath = app.getPath('sessionData');
    let activePath = defaultPath;

    try {
        const savedPath = store.get(StoreKeys.SESSION_STORAGE_PATH);
        const hasSavedPath = typeof savedPath === 'string' && savedPath.length > 0;
        if (hasSavedPath) {
            try {
                const savedStoragePath = getStoragePath(savedPath);
                app.setPath('sessionData', savedStoragePath);
                activePath = savedStoragePath;
            } catch (error) {
                logger.warn('Previous session storage is unavailable; using the default profile', savedPath, error);
                return;
            }
        }

        const defaultStoragePath = getStoragePath(app.getPath('userData'));
        activePath = getStoragePath(activePath);
        const settings = store.getModSettings()?.downloader;
        let destination = defaultStoragePath;

        if (settings?.useCustomPathForSessionStorage) {
            // Require the selected directory to exist so a missing mount is not recreated on the system disk.
            const basePath = getStoragePath(settings.customPathForSessionStorage);
            const requestedPath = path.join(basePath, app.getName());
            if (!fs.existsSync(requestedPath)) {
                if (isNestedPath(activePath, requestedPath) || isNestedPath(requestedPath, activePath)) {
                    throw new Error('Session storage directories must not contain each other');
                }
                fs.mkdirSync(requestedPath);
            }
            destination = getStoragePath(requestedPath);
        }

        if (path.relative(activePath, destination) === '') {
            activateStorage(activePath);
            return;
        }
        if (isNestedPath(activePath, destination) || isNestedPath(destination, activePath)) {
            throw new Error('Session storage directories must not contain each other');
        }

        // Older versions did not remember the active path. Adopt their existing external profile without overwriting it.
        if (!hasSavedPath && destination !== defaultStoragePath && getSessionEntries(destination).length > 0) {
            activateStorage(destination);
            logger.info('Using existing custom session storage', destination);
            return;
        }

        migrateStorage(activePath, destination);
    } catch (error) {
        logger.error('Could not change session storage; continuing with the previous profile', { activePath }, error);
        app.setPath('sessionData', activePath);
    }
}

exports.initSessionStoragePath = initSessionStoragePath;
