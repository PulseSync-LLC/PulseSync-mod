'use strict';
const { ipcMain } = require('electron');
const { IpcChannel, RendererTrustProfile } = require('../types/desktop.js');
const { classifyRendererUrl } = require('./desktopPolicy.js');
const { isApplicationLanguage, isDesktopPlayerState, isDesktopTheme } = require('./desktopPayloads.js');
const { Logger } = require('../packages/logger/Logger.js');
const logger = new Logger('DesktopIpc');
const isTrustedIpcSender = (window, event, profile = RendererTrustProfile.APPLICATION) =>
    Boolean(
        window &&
        !window.isDestroyed() &&
        !window.webContents.isDestroyed() &&
        event.sender === window.webContents &&
        event.senderFrame &&
        !event.senderFrame.isDestroyed() &&
        event.senderFrame === window.webContents.mainFrame &&
        classifyRendererUrl(event.senderFrame.url) === profile,
    );
const createIpcEventRegistry = (window) => {
    const disposers = [];
    let disposed = false;
    const register = (kind, channel, handler, profile = RendererTrustProfile.APPLICATION) => {
        const wrapped = (event, ...args) => {
            if (!isTrustedIpcSender(window, event, profile)) {
                if (kind === 'on') event.returnValue = undefined;
                logger.warn('IPC rejected', channel, profile);
                return;
            }
            if (channel === IpcChannel.APPLICATION_READY && !isApplicationLanguage(args[0])) return;
            if (channel === IpcChannel.PLAYER_STATE && !isDesktopPlayerState(args[0])) return;
            if (channel === IpcChannel.APPLICATION_THEME && !isDesktopTheme(args[0])) return;
            try {
                const result = handler(event, ...args);
                if (kind === 'handle') return result;
                Promise.resolve(result).catch(() => logger.error('IPC handler failed', channel));
            } catch (error) {
                logger.error('IPC handler failed', channel);
                if (kind === 'handle') throw error;
            }
        };
        ipcMain[kind](channel, wrapped);
        disposers.push(() => (kind === 'on' ? ipcMain.removeListener(channel, wrapped) : ipcMain.removeHandler(channel)));
    };
    return {
        on: (channel, handler, profile) => register('on', channel, handler, profile),
        handle: (channel, handler, profile) => register('handle', channel, handler, profile),
        dispose: () => {
            if (disposed) return;
            disposed = true;
            disposers
                .splice(0)
                .reverse()
                .forEach((dispose) => dispose());
        },
    };
};
const sendToApplicationRenderer = (window, channel, ...args) => {
    if (!window || window.isDestroyed() || window.webContents.isDestroyed() || classifyRendererUrl(window.webContents.getURL()) !== RendererTrustProfile.APPLICATION)
        return;
    window.webContents.send(channel, ...args);
};
module.exports = { createIpcEventRegistry, isTrustedIpcSender, sendToApplicationRenderer };
