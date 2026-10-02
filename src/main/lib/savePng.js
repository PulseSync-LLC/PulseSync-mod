'use strict';
const path = require('node:path');
const fs = require('node:fs/promises');
const electron = require('electron');
const { Logger } = require('../packages/logger/Logger.js');
const PNG_EXTENSION = 'png';
const PNG_MIME_TYPE = 'image/png';
const logger = new Logger('SavePngImageToLocalDisk');
const hasPngExtension = (filePath) => path.extname(filePath).toLowerCase() === `.${PNG_EXTENSION}`;
const isPngContent = async (buffer) => {
    const { fileTypeFromBuffer } = await import('file-type');
    const fileType = await fileTypeFromBuffer(buffer);
    return fileType?.mime === PNG_MIME_TYPE;
};
const handleSavePngImageToLocalDisk = async (defaultPath, buffer) => {
    if (!hasPngExtension(defaultPath)) {
        logger.warn('Default path is not a PNG image', defaultPath);
        return;
    }
    let isPng;
    try {
        isPng = await isPngContent(buffer);
    } catch (error) {
        logger.error('Error detecting file type', error);
        return;
    }
    if (!isPng) {
        logger.warn('File content is not a PNG image', defaultPath);
        return;
    }
    const { canceled, filePath } = await electron.dialog.showSaveDialog({
        defaultPath,
        filters: [{ name: 'PNG', extensions: [PNG_EXTENSION] }],
    });
    if (canceled || !filePath) {
        return;
    }
    if (!hasPngExtension(filePath)) {
        logger.warn('Selected path is not a PNG image', filePath);
        return;
    }
    try {
        await fs.writeFile(filePath, Buffer.from(buffer));
    } catch (error) {
        logger.error('Error saving PNG image to local disk', error);
    }
};

module.exports = { handleSavePngImageToLocalDisk };
