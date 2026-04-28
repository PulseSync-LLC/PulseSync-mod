'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const electron_1 = require('electron');

const events_js_1 = require('../../events');
const config_js_1 = require('../../config');
const store_js_1 = require('../store.js');
const playerActions_js_1 = require('../../types/playerActions.js');
const fs = require('node:fs');
const path = require('node:path');
const { performance } = require('node:perf_hooks');
const Logger_js_1 = require('../../packages/logger/Logger.js');
const thumbnailDrawner = require('./thumbnailDrawner.js');
const taskBarExtensionLogger = new Logger_js_1.Logger('TaskBarExtension');

const requireIfExists =
    (typeof globalThis !== 'undefined' && globalThis.requireIfExists) ||
    (typeof global !== 'undefined' && global.requireIfExists) ||
    ((path) => {
        try {
            return require(path);
        } catch (e) {
            return false;
        }
    });
const sharp = requireIfExists('sharp');

let native;
try {
    native = requireIfExists('./native_modules/set_iconic_thumbnail');
} catch (e) {
    taskBarExtensionLogger.error('Error loading native module for thumbnails:', e);
    native = null;
}

if (!native) {
    taskBarExtensionLogger.warn("Native module for thumbnails is not available. Thumbnail won't work.");
}

const settings = store_js_1.getModSettings()?.taskBarExtensions;
let playerState;
let assets = { dark: {}, light: {} };
let systemTheme = electron_1.nativeTheme.shouldUseDarkColorsForSystemIntegratedUI ? 'dark' : 'light';
let initiated = false;

const THUMBNAIL_TRANSITION_DURATION_MS = 300;
const THUMBNAIL_PLAY_STATE_TRANSITION_DURATION_MS = 100;
const THUMBNAIL_TRANSITION_FPS = 60;

let thumbnailRenderRequestId = 0;
let thumbnailAnimationToken = 0;
let lastThumbnailRenderState = null;
let lastThumbnailPresentationMode = null;
let lastThumbnailRequestStateKey = null;
let activeThumbnailAnimation = null;
let nativeThemeListener = null;
const defaultTrackCoverBufferCache = new Map();
let defaultTrackCoverTemplate = null;
const DEFAULT_TRACK_COVER_SIZE = 200;

const TRANSITION_ANIMATION_DEADLINE_PUSH_SIZE = 15 * 1000;
let transitionAnimationDeadline = 0;

const pushTransitionAnimationDeadline = (value = TRANSITION_ANIMATION_DEADLINE_PUSH_SIZE) => {
    transitionAnimationDeadline = Date.now() + value;
};

const isInTransitionAnimationDeadline = () => {
    return transitionAnimationDeadline >= Date.now();
};

/**
 * Простой LRU-кэш на Map.
 * Самый старый элемент всегда первый в map.keys().
 */
class LRUCache {
    constructor(limit = 100) {
        if (!Number.isInteger(limit) || limit <= 0) {
            throw new Error('limit must be a positive integer');
        }

        this.limit = limit;
        this.map = new Map();
    }

    get size() {
        return this.map.size;
    }

    get(key) {
        if (!this.map.has(key)) {
            return undefined;
        }

        const value = this.map.get(key);

        // Обновляем "свежесть"
        this.map.delete(key);
        this.map.set(key, value);

        return value;
    }

    set(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
            return;
        }

        if (this.map.size >= this.limit) {
            const oldestKey = this.map.keys().next().value;
            this.map.delete(oldestKey);
        }

        this.map.set(key, value);
    }

    has(key) {
        return this.map.has(key);
    }

    delete(key) {
        return this.map.delete(key);
    }

    clear() {
        this.map.clear();
    }
}

/**
 * Кэш уже загруженных изображений.
 * key = image url
 * value = Buffer
 */
const imageBufferCache = new LRUCache(100);

/**
 * Хранилище активных запросов.
 * Нужен для дедупликации: если один и тот же URL уже качается,
 * второй запрос просто ждёт тот же Promise.
 */
const pendingImageRequests = new Map();

/**
 * Загружает картинку по URL с LRU-кэшированием и дедупликацией in-flight запросов.
 * @param {string | undefined} url
 * @returns {Promise<Buffer | undefined>}
 */
const getImageBufferCached = async (url) => {
    if (!url) {
        return undefined;
    }

    const cachedBuffer = imageBufferCache.get(url);
    if (cachedBuffer) {
        taskBarExtensionLogger.log(`Image cache hit: ${url}`);
        return cachedBuffer;
    }

    if (pendingImageRequests.has(url)) {
        taskBarExtensionLogger.log(`Image request joined pending: ${url}`);
        return pendingImageRequests.get(url);
    }

    const requestPromise = (async () => {
        taskBarExtensionLogger.log(`Image cache miss, fetching: ${url}`);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch image ${url}: HTTP ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);

        imageBufferCache.set(url, imageBuffer);

        taskBarExtensionLogger.log(`Image cached: ${url}. Cache size: ${imageBufferCache.size}`);

        return imageBuffer;
    })();

    pendingImageRequests.set(url, requestPromise);

    try {
        return await requestPromise;
    } finally {
        pendingImageRequests.delete(url);
    }
};

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const getThumbnailTransitionDurationMs = (transitionDirection) => {
    if (transitionDirection === 'play-state') {
        return THUMBNAIL_PLAY_STATE_TRANSITION_DURATION_MS;
    }

    return THUMBNAIL_TRANSITION_DURATION_MS;
};

const getThumbnailTransitionFrameCount = (transitionDurationMs) => {
    return Math.max(1, Math.round((transitionDurationMs / 1000) * THUMBNAIL_TRANSITION_FPS));
};

const getDefaultTrackCoverTemplate = () => {
    if (defaultTrackCoverTemplate) {
        return defaultTrackCoverTemplate;
    }

    defaultTrackCoverTemplate = fs.readFileSync(path.join(__dirname, 'assets/defaultTrackCover.svg'), 'utf8');
    return defaultTrackCoverTemplate;
};

const getDefaultTrackCoverBuffer = async (variant = systemTheme, size = DEFAULT_TRACK_COVER_SIZE) => {
    const cacheKey = `${variant}:${size}`;
    const cachedBuffer = defaultTrackCoverBufferCache.get(cacheKey);
    if (cachedBuffer) {
        return cachedBuffer;
    }

    const palette = variant === 'light' ? { background: '#dadada', icon: '#666666' } : { background: '#202020', icon: '#ffffff80' };

    const svg = getDefaultTrackCoverTemplate()
        .replace('width="200"', `width="${size}"`)
        .replace('height="200"', `height="${size}"`)
        .replace('__BACKGROUND__', palette.background)
        .replace('__ICON__', palette.icon);

    let buffer;

    if (sharp) {
        buffer = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
    } else {
        buffer = electron_1.nativeImage
            .createFromDataURL(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`)
            .resize({ width: size, height: size })
            .toPNG();
    }

    defaultTrackCoverBufferCache.set(cacheKey, buffer);
    return buffer;
};

const getTrackCoverUrl = (track) => {
    if (!track) {
        return undefined;
    }

    const trackId = typeof track.id === 'string' ? track.id : '';
    const isGenerative = trackId.startsWith('generative');
    const source = (isGenerative ? track.imageUrl : track.coverUri) || track.coverUri || track.imageUrl;
    if (!source) {
        return undefined;
    }

    return `https://${source}`.replace('%%', '200x200');
};

const getTrackImageBuffer = async (track) => {
    if (!track) {
        return undefined;
    }

    const coverUrl = getTrackCoverUrl(track);
    if (!coverUrl) {
        return getDefaultTrackCoverBuffer();
    }

    try {
        return await getImageBufferCached(coverUrl);
    } catch (error) {
        taskBarExtensionLogger.warn(`Failed to load cover for track ${track.id ?? 'unknown'}, using default cover.`, error);
        return getDefaultTrackCoverBuffer();
    }
};

const createThumbnailRenderState = (playerState, currentTrackBuffer, previousTrackBuffer, nextTrackBuffer, isRepeatOne) => {
    return {
        previousTrack: isRepeatOne ? currentTrackBuffer : previousTrackBuffer,
        currentTrack: currentTrackBuffer,
        nextTrack: isRepeatOne ? currentTrackBuffer : nextTrackBuffer,
        isPlaying: !playerState.isPaused,
        trackId: playerState.track?.id ?? null,
        previousTrackId: isRepeatOne ? (playerState.track?.id ?? null) : (playerState.previousTrack?.id ?? null),
        nextTrackId: isRepeatOne ? (playerState.track?.id ?? null) : (playerState.nextTrack?.id ?? null),
    };
};

const getThumbnailRenderStateKey = (renderState) => {
    if (!renderState) {
        return null;
    }

    return [renderState.trackId ?? '', renderState.previousTrackId ?? '', renderState.nextTrackId ?? '', renderState.isPlaying ? '1' : '0'].join(':');
};

const getThumbnailRequestStateKey = (playerState) => {
    if (!playerState?.track) {
        return null;
    }

    const store = getActionsStoreObject(playerState.actionsStore);
    const isRepeatOne = store.repeat === 'one';

    return [
        systemTheme,
        playerState.track?.id ?? '',
        isRepeatOne ? (playerState.track?.id ?? '') : (playerState.previousTrack?.id ?? ''),
        isRepeatOne ? (playerState.track?.id ?? '') : (playerState.nextTrack?.id ?? ''),
        playerState.isPaused ? '0' : '1',
    ].join(':');
};

const createFallbackThumbnailRenderState = (renderState) => {
    if (!renderState) {
        return null;
    }

    return {
        previousTrack: null,
        currentTrack: renderState.currentTrack,
        nextTrack: null,
        isPlaying: renderState.isPlaying,
        trackId: renderState.trackId,
        previousTrackId: null,
        nextTrackId: null,
    };
};

const getThumbnailTransitionDirection = (fromRenderState, toRenderState) => {
    if (!fromRenderState?.trackId || !toRenderState?.trackId) {
        return null;
    }

    if (fromRenderState.nextTrackId && fromRenderState.nextTrackId === toRenderState.trackId) {
        return 'forward';
    }

    if (fromRenderState.previousTrackId && fromRenderState.previousTrackId === toRenderState.trackId) {
        return 'backward';
    }

    if (
        fromRenderState.trackId === toRenderState.trackId &&
        fromRenderState.previousTrackId === toRenderState.previousTrackId &&
        !fromRenderState.nextTrackId &&
        !!toRenderState.nextTrackId
    ) {
        return 'next-appear';
    }

    if (
        fromRenderState.trackId === toRenderState.trackId &&
        fromRenderState.previousTrackId === toRenderState.previousTrackId &&
        fromRenderState.nextTrackId === toRenderState.nextTrackId &&
        fromRenderState.isPlaying !== toRenderState.isPlaying
    ) {
        return 'play-state';
    }

    return null;
};

const renderThumbnailState = async (iconicThumbnail, width, height, renderState) => {
    const thumbnailBuffer = await thumbnailDrawner.drawThumbnail(
        width,
        height,
        renderState.previousTrack,
        renderState.currentTrack,
        renderState.nextTrack,
        renderState.isPlaying,
    );

    if (!thumbnailBuffer) {
        taskBarExtensionLogger.warn(`Thumbnail buffer is null fallbacking to cover image ${width}x${height}`);
    }

    const result = thumbnailBuffer ? iconicThumbnail.setIconicThumbnailRaw(thumbnailBuffer) : iconicThumbnail.setIconicThumbnail(renderState.currentTrack);
    taskBarExtensionLogger.log('Thumbnail set result:', result);
    return thumbnailBuffer ? 'drawn' : 'fallback';
};

const taskBarExtension = (window) => {
    initiated = true;
    loadAssets('dark');
    loadAssets('light');

    if (nativeThemeListener) {
        electron_1.nativeTheme.removeListener('updated', nativeThemeListener);
    }

    nativeThemeListener = () => {
        systemTheme = electron_1.nativeTheme.shouldUseDarkColorsForSystemIntegratedUI ? 'dark' : 'light';
        updateTaskbarExtension(window);
    };

    electron_1.nativeTheme.on('updated', nativeThemeListener);

    if (native) {
        const iconicThumbnail = native.getDWMIconicThumbnailInstance(window);
        iconicThumbnail.onIconicThumbnailRequested = () => {
            pushTransitionAnimationDeadline();

            if (lastThumbnailPresentationMode !== 'fallback' || !playerState?.track) {
                return;
            }

            void setIconicThumbnail(playerState, { force: true });
        };
    }
};
exports.taskBarExtension = taskBarExtension;

const onPlayerStateChange = (window, newPlayerState) => {
    if (!initiated) return;
    if (!(settings?.enable ?? true)) return;

    if (typeof newPlayerState !== 'undefined') {
        playerState = structuredClone(newPlayerState);
        playerState.isPaused = playerState.status === 'paused';
    }

    updateTaskbarExtension(window);
};
exports.onPlayerStateChange = onPlayerStateChange;

const loadAssets = (variant) => {
    taskBarExtensionLogger.log(`Loading ${variant} assets...`);
    loadAsset('previous', variant, 'Previous');
    loadAsset('next', variant, 'Next');
    loadAsset('play', variant, 'Playing');
    loadAsset('pause', variant, 'Paused');
    loadAsset('like', variant, 'Like');
    loadAsset('liked', variant, 'Liked');
    loadAsset('dislike', variant, 'Dislike');
    loadAsset('disliked', variant, 'Disliked');
    loadAsset('shuffle', variant, 'Shuffle');
    loadAsset('shuffled', variant, 'Shuffled');
    loadAsset('repeat', variant, 'Repeat');
    loadAsset('repeated', variant, 'Repeated');
    loadAsset('one_repeated', variant, 'One repeated');
    taskBarExtensionLogger.log('Assets loaded: ' + variant);
};

const loadAsset = (name, variant, fileName) => {
    assets[variant][name] = electron_1.nativeImage.createFromPath(path.join(__dirname, `assets/${variant}/${fileName}.png`));
};

const getActionsAvailabilityObject = (availableActions) => {
    return {
        previousUnavailable: !availableActions?.moveBackward,
        nextUnavailable: !availableActions?.moveForward,
        repeatUnavailable: !availableActions?.repeat,
        shuffleUnavailable: !availableActions?.shuffle,
    };
};

const getActionsStoreObject = (actionsStore) => {
    return {
        repeat: actionsStore?.repeat,
        shuffle: actionsStore?.shuffle,
        liked: actionsStore?.isLiked,
        disliked: actionsStore?.isDisliked,
    };
};

const clearTaskbarExtension = (window) => {
    taskBarExtensionLogger.log(window.setThumbarButtons([]));
};

const getTooltipString = () => {
    let title = playerState.track?.title;
    if (playerState?.track?.version) {
        title = playerState.track.title + ` (${playerState.track.version})`;
    }

    return title + ' | ' + getArtist() + ' ― ' + config_js_1.config.meta.PRODUCT_NAME_LOCALIZED;
};

const getArtist = () => {
    const artistsArray = [...(playerState.track?.artists || [])];
    if (!artistsArray[0]) return 'loading';

    let artistsLabel = artistsArray[0].name;
    artistsArray.shift();

    artistsArray.forEach((artist) => {
        artistsLabel += ', ' + artist.name;
    });

    return artistsLabel;
};

const setIconicThumbnail = async (playerState, { force = false } = {}) => {
    const nextThumbnailRequestStateKey = getThumbnailRequestStateKey(playerState);

    if (!playerState?.track) {
        const renderRequestId = ++thumbnailRenderRequestId;
        lastThumbnailRequestStateKey = null;
        taskBarExtensionLogger.log('No track found, clearing iconic thumbnail.');
        await clearIconicThumbnail();
        return;
    }

    if (!force && !activeThumbnailAnimation && nextThumbnailRequestStateKey && nextThumbnailRequestStateKey === lastThumbnailRequestStateKey) {
        taskBarExtensionLogger.log('Skipping thumbnail update because visual state is unchanged.');
        return;
    }

    const renderRequestId = ++thumbnailRenderRequestId;
    lastThumbnailRequestStateKey = nextThumbnailRequestStateKey;

    try {
        taskBarExtensionLogger.log('Setting thumbnail for track:', playerState.track.id ?? 'unknown');

        const [imageBuffer, nextImageBuffer, previousImageBuffer] = await Promise.all([
            getTrackImageBuffer(playerState.track),
            getTrackImageBuffer(playerState.nextTrack),
            getTrackImageBuffer(playerState.previousTrack),
        ]);

        if (!imageBuffer) {
            taskBarExtensionLogger.warn('Main cover image buffer is empty, clearing thumbnail.');
            await clearIconicThumbnail();
            return;
        }

        if (renderRequestId !== thumbnailRenderRequestId) {
            return;
        }

        const store = getActionsStoreObject(playerState.actionsStore);
        const isRepeatOne = store.repeat === 'one';
        const nextRenderState = createThumbnailRenderState(playerState, imageBuffer, previousImageBuffer, nextImageBuffer, isRepeatOne);
        const iconicThumbnail = native.getDWMIconicThumbnailInstance();

        const width = iconicThumbnail.maxWidth;
        const height = iconicThumbnail.maxHeight;

        taskBarExtensionLogger.log(
            `thumbnail draw call: ${width}x${height}, isRepeatOne: ${isRepeatOne}, hasPrevious: ${!!previousImageBuffer}, hasNext: ${!!nextImageBuffer}`,
        );

        if (activeThumbnailAnimation) {
            if (activeThumbnailAnimation.targetRenderStateKey === getThumbnailRenderStateKey(nextRenderState)) {
                activeThumbnailAnimation.finalRenderState = nextRenderState;
                return;
            }

            thumbnailAnimationToken++;
            activeThumbnailAnimation = null;
        }

        let transitionFromState = lastThumbnailRenderState;
        let transitionDirection = getThumbnailTransitionDirection(lastThumbnailRenderState, nextRenderState);

        if (width > 0 && height > 0 && lastThumbnailPresentationMode === 'fallback' && nextRenderState.currentTrack) {
            transitionFromState = createFallbackThumbnailRenderState(nextRenderState);
            transitionDirection = nextRenderState.previousTrack || nextRenderState.nextTrack ? 'adjacent-appear' : null;
        }

        if (transitionDirection === 'adjacent-appear') pushTransitionAnimationDeadline();

        const shouldAnimateTransition =
            width > 0 && height > 0 && transitionFromState?.currentTrack && nextRenderState.currentTrack && transitionDirection && isInTransitionAnimationDeadline();

        if (shouldAnimateTransition) {
            const animationToken = ++thumbnailAnimationToken;
            const transitionDurationMs = getThumbnailTransitionDurationMs(transitionDirection);
            const frameCount = getThumbnailTransitionFrameCount(transitionDurationMs);
            const frameDelayMs = transitionDurationMs / frameCount;
            const animationStartedAt = performance.now();

            activeThumbnailAnimation = {
                token: animationToken,
                targetRenderStateKey: getThumbnailRenderStateKey(nextRenderState),
                finalRenderState: nextRenderState,
            };

            taskBarExtensionLogger.log(
                `Animating thumbnail transition: ${transitionFromState.trackId} -> ${nextRenderState.trackId} (${transitionDirection}, ${transitionDurationMs}ms)`,
            );

            let nextFramePromise = null;

            const renderFrame = (frameIndex) => {
                return thumbnailDrawner.drawThumbnailTransition(
                    width,
                    height,
                    transitionFromState,
                    activeThumbnailAnimation.finalRenderState,
                    frameIndex / frameCount,
                    transitionDirection,
                    activeThumbnailAnimation.finalRenderState.isPlaying,
                );
            };

            // Pre-render first frame
            nextFramePromise = renderFrame(1);

            for (let frameIndex = 1; frameIndex <= frameCount; frameIndex++) {
                if (animationToken !== thumbnailAnimationToken) {
                    return;
                }

                const frameBuffer = await nextFramePromise;

                // Pre-render next frame in parallel
                if (frameIndex < frameCount) {
                    nextFramePromise = renderFrame(frameIndex + 1);
                }

                if (frameBuffer) {
                    const result = iconicThumbnail.setIconicThumbnailRaw(frameBuffer);
                    taskBarExtensionLogger.log(`Transition frame ${frameIndex}/${frameCount} set result:`, result);
                }

                if (frameIndex < frameCount) {
                    const targetNextFrameAt = animationStartedAt + frameIndex * frameDelayMs;

                    const waitMs = Math.max(0, targetNextFrameAt - performance.now());

                    if (waitMs > 0) {
                        await wait(waitMs);
                    }
                }
            }

            if (animationToken !== thumbnailAnimationToken) {
                return;
            }

            const finalRenderState = activeThumbnailAnimation?.token === animationToken ? activeThumbnailAnimation.finalRenderState : nextRenderState;

            activeThumbnailAnimation = null;

            lastThumbnailPresentationMode = await renderThumbnailState(iconicThumbnail, width, height, finalRenderState);

            lastThumbnailRenderState = finalRenderState;

            return;
        }

        if (renderRequestId !== thumbnailRenderRequestId) {
            return;
        }

        lastThumbnailPresentationMode = await renderThumbnailState(iconicThumbnail, width, height, nextRenderState);
        lastThumbnailRenderState = nextRenderState;
    } catch (error) {
        if (lastThumbnailRequestStateKey === nextThumbnailRequestStateKey) {
            lastThumbnailRequestStateKey = null;
        }
        taskBarExtensionLogger.error('Error setting thumbnail:', error);
    }
};

const clearIconicThumbnail = async () => {
    try {
        thumbnailRenderRequestId++;
        thumbnailAnimationToken++;
        lastThumbnailRenderState = null;
        lastThumbnailPresentationMode = null;
        lastThumbnailRequestStateKey = null;
        activeThumbnailAnimation = null;
        taskBarExtensionLogger.log('Clearing thumbnail');
        const result = native.getDWMIconicThumbnailInstance().clearIconicThumbnail();
        taskBarExtensionLogger.log('Thumbnail cleared result:', result);
    } catch (error) {
        taskBarExtensionLogger.error('Error setting thumbnail:', error);
    }
};

const updateTaskbarExtension = (window) => {
    if (!playerState?.availableActions) return;

    const availability = getActionsAvailabilityObject(playerState.availableActions);
    const store = getActionsStoreObject(playerState.actionsStore);

    let repeatAsset = assets[systemTheme].repeat;

    switch (store.repeat) {
        case 'none':
            repeatAsset = assets[systemTheme].repeat;
            break;
        case 'context':
            repeatAsset = assets[systemTheme].repeated;
            break;
        case 'one':
            repeatAsset = assets[systemTheme].one_repeated;
            break;
    }

    const isGenerative = playerState.track?.id.startsWith('generative');

    let buttons = [
        {
            tooltip: 'Shuffle',
            icon: store.shuffle ? assets[systemTheme].shuffled : assets[systemTheme].shuffle,
            flags: availability.shuffleUnavailable ? ['disabled'] : undefined,
            click() {
                pushTransitionAnimationDeadline();
                taskBarExtensionLogger.log('Shuffle Toggled');
                events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_SHUFFLE);
            },
        },
        store_js_1.getModSettings().playerBarEnhancement.changeDislikeButtonPos
            ? {
                  tooltip: 'Dislike',
                  icon: store.disliked ? assets[systemTheme].disliked : assets[systemTheme].dislike,
                  flags: isGenerative ? ['disabled'] : undefined,
                  click() {
                      pushTransitionAnimationDeadline();
                      taskBarExtensionLogger.log('Dislike Toggled');
                      events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_DISLIKE);
                      if (!store.disliked) {
                          setTimeout(() => {
                              events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.MOVE_FORWARD);
                          }, 200);
                      }
                  },
              }
            : {
                  tooltip: 'Like',
                  icon: store.liked ? assets[systemTheme].liked : assets[systemTheme].like,
                  flags: isGenerative ? ['disabled'] : undefined,
                  click() {
                      pushTransitionAnimationDeadline();
                      taskBarExtensionLogger.log('Like Toggled');
                      events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_LIKE);
                  },
              },
        {
            tooltip: 'Previous',
            icon: assets[systemTheme].previous,
            flags: availability.previousUnavailable ? ['disabled'] : undefined,
            click() {
                pushTransitionAnimationDeadline();
                taskBarExtensionLogger.log('Previous');
                events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.MOVE_BACKWARD);
            },
        },
        {
            tooltip: !playerState.isPaused ? 'Pause' : 'Play',
            icon: !playerState.isPaused ? assets[systemTheme].pause : assets[systemTheme].play,
            click() {
                pushTransitionAnimationDeadline();
                taskBarExtensionLogger.log('Play Toggled');
                events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_PLAY);
            },
        },
        {
            tooltip: 'Next',
            icon: assets[systemTheme].next,
            flags: availability.nextUnavailable ? ['disabled'] : undefined,
            click() {
                pushTransitionAnimationDeadline();
                taskBarExtensionLogger.log('Next Toggled');
                events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.MOVE_FORWARD);
            },
        },
        store_js_1.getModSettings().playerBarEnhancement.changeDislikeButtonPos
            ? {
                  tooltip: 'Like',
                  icon: store.liked ? assets[systemTheme].liked : assets[systemTheme].like,
                  flags: isGenerative ? ['disabled'] : undefined,
                  click() {
                      pushTransitionAnimationDeadline();
                      taskBarExtensionLogger.log('Like Toggled');
                      events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_LIKE);
                  },
              }
            : {
                  tooltip: 'Dislike',
                  icon: store.disliked ? assets[systemTheme].disliked : assets[systemTheme].dislike,
                  flags: isGenerative ? ['disabled'] : undefined,
                  click() {
                      pushTransitionAnimationDeadline();
                      taskBarExtensionLogger.log('Dislike Toggled');
                      events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_DISLIKE);
                      if (!store.disliked) {
                          setTimeout(() => {
                              events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.MOVE_FORWARD);
                          }, 200);
                      }
                  },
              },
        {
            tooltip: 'Repeat',
            icon: repeatAsset,
            flags: availability.repeatUnavailable ? ['disabled'] : undefined,
            click() {
                pushTransitionAnimationDeadline();
                taskBarExtensionLogger.log('Repeat Toggled');
                events_js_1.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_REPEAT);
            },
        },
    ];

    if (availability.shuffleUnavailable && availability.repeatUnavailable) {
        buttons.shift();
        buttons.pop();
    }

    const taskButtonStatus = window.setThumbarButtons(buttons);
    window.setThumbnailToolTip(getTooltipString());

    if ((settings?.coverAsThumbnail ?? true) && native) {
        setIconicThumbnail(playerState);
    }

    taskBarExtensionLogger.log('ThumbarButtons set:', taskButtonStatus ? 'success' : 'failed');
};
