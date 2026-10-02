'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.loader = void 0;
const promises_1 = __importDefault(require('node:fs/promises'));
const node_path_1 = __importDefault(require('node:path'));
const electron_1 = require('electron');
const path = node_path_1.default;
const fs = promises_1.default;
const { isSafeDecodedPathname } = require('./desktopPolicy.js');
function isPathInsideDirectory(directoryPath, filePath) {
    const normalizedDirectoryPath = path.resolve(directoryPath);
    const normalizedFilePath = path.resolve(filePath);
    const relativePath = path.relative(normalizedDirectoryPath, normalizedFilePath);
    return relativePath === '' || (relativePath !== '..' && !relativePath.startsWith(`..${path.sep}`) && !path.isAbsolute(relativePath));
}
const FILE_NOT_FOUND = -6;
const isSafeFileProtocolPathToServe = async (buildPath, filePath) => {
    const normalizedBuildPath = path.resolve(buildPath);
    const normalizedFilePath = path.resolve(filePath);
    if (!isPathInsideDirectory(normalizedBuildPath, normalizedFilePath)) {
        return false;
    }
    try {
        const [realBuildPath, realFilePath] = await Promise.all([fs.realpath(normalizedBuildPath), fs.realpath(normalizedFilePath)]);
        if (!isPathInsideDirectory(realBuildPath, realFilePath)) return false;
        const relativeSegments = path.relative(normalizedBuildPath, normalizedFilePath).split(path.sep).filter(Boolean);
        let currentPath = normalizedBuildPath;
        const segmentPaths = relativeSegments.map((segment) => {
            currentPath = path.join(currentPath, segment);
            return currentPath;
        });
        const results = await Promise.all(segmentPaths.map((segmentPath) => fs.lstat(segmentPath)));
        if (results.some((result) => result.isSymbolicLink())) {
            return false;
        }
    } catch (error) {
        return false;
    }
    return true;
};
const resolveFileProtocolPath = (buildPath, pathname) => {
    const normalizedBuildPath = path.resolve(buildPath);
    let decodedPathname;
    try {
        decodedPathname = decodeURIComponent(pathname);
    } catch (error) {
        return null;
    }
    if (!isSafeDecodedPathname(decodedPathname)) {
        return null;
    }
    const filePath = path.resolve(normalizedBuildPath, `.${decodedPathname}`);
    if (!isPathInsideDirectory(normalizedBuildPath, filePath)) {
        return null;
    }
    return filePath;
};
const resolvePath = async (filePath) => {
    try {
        const extension = path.extname(filePath);
        const normalizedFilePath = filePath && extension ? filePath : `${filePath}.html`;
        const result = await fs.stat(normalizedFilePath);
        if (result.isFile()) {
            return normalizedFilePath;
        }
        if (result.isDirectory()) {
            return await resolvePath(path.join(normalizedFilePath, 'index.html'));
        }
    } catch (error) {}
    return null;
};
const loader = (options) => {
    const serveOptions = {
        ...options,
    };
    serveOptions.buildPath = node_path_1.default.resolve(electron_1.app.getAppPath(), options.buildPath);
    const fileProtocolHandler = async (request, callback) => {
        let url;
        try {
            url = new URL(request.url);
        } catch {
            callback({ error: FILE_NOT_FOUND });
            return;
        }
        if (url.protocol !== `${serveOptions.protocol}:` || url.hostname !== serveOptions.hostname || url.port || url.username || url.password) {
            callback({ error: FILE_NOT_FOUND });
            return;
        }
        const pathname = url.pathname;
        const filePath = resolveFileProtocolPath(serveOptions.buildPath, pathname);
        if (!filePath) {
            callback({ error: FILE_NOT_FOUND });
            return;
        }
        const resolvedIndexPath = await resolvePath(filePath);
        const fileExtension = node_path_1.default.extname(filePath);
        if (resolvedIndexPath || !fileExtension || ['.html', '.asar'].includes(fileExtension)) {
            const fallbackIndexPath = node_path_1.default.join(serveOptions.buildPath, pathname === '/' ? 'index.html' : 'not-found.html');
            const responsePath = resolvedIndexPath || fallbackIndexPath;
            if (!(await isSafeFileProtocolPathToServe(serveOptions.buildPath, responsePath))) {
                callback({ error: FILE_NOT_FOUND });
                return;
            }
            callback({
                path: responsePath,
            });
        } else {
            callback({ error: FILE_NOT_FOUND });
        }
    };
    electron_1.protocol.registerSchemesAsPrivileged([
        {
            scheme: serveOptions.protocol,
            privileges: {
                standard: true,
                secure: true,
                allowServiceWorkers: true,
                supportFetchAPI: true,
                bypassCSP: serveOptions.bypassCSP,
                corsEnabled: serveOptions.isCorsEnabled,
            },
        },
    ]);
    electron_1.app.on('ready', () => {
        electron_1.session.defaultSession.protocol.registerFileProtocol(serveOptions.protocol, fileProtocolHandler);
    });
    return async (window, path) => {
        const pathname = path ? `/${path}` : '';
        await window.loadURL(`${serveOptions.protocol}://${serveOptions.hostname}${pathname}`);
    };
};
exports.loader = loader;

exports.resolveFileProtocolPath = resolveFileProtocolPath;
exports.isSafeFileProtocolPathToServe = isSafeFileProtocolPathToServe;
