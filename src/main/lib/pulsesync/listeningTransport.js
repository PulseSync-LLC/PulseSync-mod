'use strict';

const CHANNELS = {
    ready: 'pulsesync:listening:ready',
    source: 'pulsesync:listening:source',
    applied: 'pulsesync:listening:applied',
    open: 'pulsesync:listening:open',
    frame: 'pulsesync:listening:frame',
};
const disabled = () => ({ protocolVersion: 1, enabled: false, role: null, roomId: null, epoch: 0, revision: 0, validForMs: 0, target: null, command: null, queue: [] });

function bindListeningSocket(manager, socket) {
    socket.on('connect', () => {
        if (manager.listeningReady) socket.emit('LISTENING_HELLO', { protocolVersion: 1 });
    });
    socket.on('LISTENING_FRAME', (frame) => {
        if (!manager.clientAuthorized || frame?.protocolVersion !== 1 || JSON.stringify(frame).length > 16384) return;
        if (!manager.webContents.isDestroyed()) manager.webContents.send(CHANNELS.frame, frame);
    });
    socket.on('disconnect', () => {
        if (!manager.webContents.isDestroyed()) manager.webContents.send(CHANNELS.frame, disabled());
    });
}

function registerListeningIpc(registry, manager, window) {
    const trusted = (event) => !window.isDestroyed() && event.sender === window.webContents && event.senderFrame === window.webContents.mainFrame;
    registry.on(CHANNELS.ready, (event) => {
        if (!trusted(event)) return;
        manager.listeningReady = true;
        if (manager.socket?.connected) manager.socket.emit('LISTENING_HELLO', { protocolVersion: 1 });
    });
    for (const [channel, message] of [
        [CHANNELS.source, 'LISTENING_SOURCE'],
        [CHANNELS.applied, 'LISTENING_APPLIED'],
        [CHANNELS.open, 'LISTENING_OPEN'],
    ]) {
        registry.on(channel, (event, value) => {
            if (!trusted(event) || !manager.socket?.connected || !manager.clientAuthorized) return;
            try {
                if (JSON.stringify(value ?? null).length > 16384) return;
                if (message === 'LISTENING_SOURCE') manager.socket.volatile.emit(message, value);
                else manager.socket.emit(message, value);
            } catch {
                /* Non-serializable player data never crosses the desktop bridge. */
            }
        });
    }
}

module.exports = { bindListeningSocket, registerListeningIpc };
