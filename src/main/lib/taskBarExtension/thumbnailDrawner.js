const sharp = require('./sharp.js');

const roundedMaskCache = new Map();
const preparedTrackImageCache = new WeakMap();
const TRACK_IMAGE_PADDING = 2;

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function lerp(from, to, t) {
    return from + (to - from) * t;
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function getWindowsLikeRadius(size) {
    return Math.max(4, size * 0.08);
}

async function applyRoundedCorners(inputBuffer, width, height, radius) {
    const paddedWidth = width + TRACK_IMAGE_PADDING * 2;
    const paddedHeight = height + TRACK_IMAGE_PADDING * 2;
    const roundedMaskCacheKey = `${width}:${height}:${radius}`;
    let roundedMask = roundedMaskCache.get(roundedMaskCacheKey);

    if (!roundedMask) {
        roundedMask = Buffer.from(`
            <svg width="${paddedWidth}" height="${paddedHeight}">
                <rect
                    x="${TRACK_IMAGE_PADDING}"
                    y="${TRACK_IMAGE_PADDING}"
                    width="${width}"
                    height="${height}"
                    rx="${radius}"
                    ry="${radius}"
                    fill="white"
                />
            </svg>
        `);
        roundedMaskCache.set(roundedMaskCacheKey, roundedMask);
    }

    const data = await sharp(inputBuffer)
        .resize(width, height, { fit: 'cover' })
        .ensureAlpha()
        .extend({
            top: TRACK_IMAGE_PADDING,
            bottom: TRACK_IMAGE_PADDING,
            left: TRACK_IMAGE_PADDING,
            right: TRACK_IMAGE_PADDING,
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .composite([
            {
                input: roundedMask,
                blend: 'dest-in',
            },
        ])
        .raw()
        .toBuffer();

    return {
        data,
        width: paddedWidth,
        height: paddedHeight,
        channels: 4,
    };
}

async function prepareTrackImage(trackBuffer, size) {
    if (!trackBuffer) {
        return null;
    }

    let sizeCache = preparedTrackImageCache.get(trackBuffer);
    if (!sizeCache) {
        sizeCache = new Map();
        preparedTrackImageCache.set(trackBuffer, sizeCache);
    }

    const cachedImage = sizeCache.get(size);
    if (cachedImage) {
        return await cachedImage;
    }

    const radius = getWindowsLikeRadius(size);
    const preparedImagePromise = applyRoundedCorners(trackBuffer, size, size, radius).catch((error) => {
        sizeCache.delete(size);
        throw error;
    });
    sizeCache.set(size, preparedImagePromise);

    return await preparedImagePromise;
}

function getLayout(width, height, isPlaying = true) {
    const currentSize = isPlaying ? height : Math.floor(height * 0.9);
    const smallSize = Math.floor(height * 0.9);
    const gap = Math.floor(height * 0.15);

    const currentLeft = Math.floor(width / 2) - Math.floor(currentSize / 2);
    const currentTop = isPlaying ? 0 : Math.floor(height / 2) - Math.floor(currentSize / 2);

    const sideTop = Math.floor(height / 2) - Math.floor(smallSize / 2);

    return {
        canvasWidth: width,
        currentSize,
        smallSize,
        gap,
        slots: {
            prev: {
                left: currentLeft - smallSize - gap,
                top: sideTop,
                size: smallSize,
            },
            current: {
                left: currentLeft,
                top: currentTop,
                size: currentSize,
            },
            next: {
                left: currentLeft + currentSize + gap,
                top: sideTop,
                size: smallSize,
            },
        },
    };
}

function buildStaticInstances(previousTrack, currentTrack, nextTrack, layout) {
    const instances = [];

    if (previousTrack) {
        instances.push({
            track: previousTrack,
            left: layout.slots.prev.left,
            top: layout.slots.prev.top,
            size: layout.slots.prev.size,
            zIndex: 1,
        });
    }

    if (currentTrack) {
        instances.push({
            track: currentTrack,
            left: layout.slots.current.left,
            top: layout.slots.current.top,
            size: layout.slots.current.size,
            zIndex: 2,
        });
    }

    if (nextTrack) {
        instances.push({
            track: nextTrack,
            left: layout.slots.next.left,
            top: layout.slots.next.top,
            size: layout.slots.next.size,
            zIndex: 1,
        });
    }

    return instances.sort((a, b) => a.zIndex - b.zIndex);
}

function interpolateSlot(fromSlot, toSlot, progress) {
    return {
        left: lerp(fromSlot.left, toSlot.left, progress),
        top: lerp(fromSlot.top, toSlot.top, progress),
        size: lerp(fromSlot.size, toSlot.size, progress),
    };
}

function buildForwardTransitionInstances(fromState, toState, layout, progress) {
    const instances = [];

    const fromPrev = fromState?.previousTrack || null;
    const fromCurrent = fromState?.currentTrack || null;
    const fromNext = fromState?.nextTrack || null;
    const toNext = toState?.nextTrack || null;

    // Старый previous уезжает левее экрана.
    if (fromPrev) {
        const start = layout.slots.prev;
        const end = {
            left: start.left - Math.round(start.size * 0.45),
            top: start.top,
            size: start.size,
        };

        instances.push({
            track: fromPrev,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 1,
        });
    }

    // Старый current переезжает в prev.
    if (fromCurrent) {
        const start = layout.slots.current;
        const end = layout.slots.prev;

        instances.push({
            track: fromCurrent,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 2,
        });
    }

    // Старый next переезжает в current.
    if (fromNext) {
        const start = layout.slots.next;
        const end = layout.slots.current;

        instances.push({
            track: fromNext,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 4,
        });
    }

    // Новый next въезжает справа.
    if (toNext) {
        const end = layout.slots.next;
        const start = {
            left: end.left + Math.round(end.size * 0.45),
            top: end.top,
            size: end.size,
        };

        instances.push({
            track: toNext,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 3,
        });
    }

    return instances;
}

function buildBackwardTransitionInstances(fromState, toState, layout, progress) {
    const instances = [];

    const fromPrev = fromState?.previousTrack || null;
    const fromCurrent = fromState?.currentTrack || null;
    const fromNext = fromState?.nextTrack || null;
    const toPrev = toState?.previousTrack || null;

    if (fromNext) {
        const start = layout.slots.next;
        const end = {
            left: start.left + Math.round(start.size * 0.45),
            top: start.top,
            size: start.size,
        };

        instances.push({
            track: fromNext,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 1,
        });
    }

    if (fromCurrent) {
        const start = layout.slots.current;
        const end = layout.slots.next;

        instances.push({
            track: fromCurrent,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 3,
        });
    }

    if (fromPrev) {
        const start = layout.slots.prev;
        const end = layout.slots.current;

        instances.push({
            track: fromPrev,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 4,
        });
    }

    if (toPrev) {
        const end = layout.slots.prev;
        const start = {
            left: end.left - Math.round(end.size * 0.45),
            top: end.top,
            size: end.size,
        };

        instances.push({
            track: toPrev,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 4,
        });
    }

    return instances;
}

function buildNextAppearTransitionInstances(fromState, toState, layout, progress) {
    const instances = [];

    if (fromState?.previousTrack) {
        instances.push({
            track: fromState.previousTrack,
            left: layout.slots.prev.left,
            top: layout.slots.prev.top,
            size: layout.slots.prev.size,
            zIndex: 1,
        });
    }

    if (fromState?.currentTrack) {
        instances.push({
            track: fromState.currentTrack,
            left: layout.slots.current.left,
            top: layout.slots.current.top,
            size: layout.slots.current.size,
            zIndex: 3,
        });
    }

    if (toState?.nextTrack) {
        const end = layout.slots.next;
        const start = {
            left: end.left + Math.round(end.size * 0.45),
            top: end.top,
            size: end.size,
        };

        instances.push({
            track: toState.nextTrack,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 2,
        });
    }

    return instances;
}

function buildAdjacentAppearTransitionInstances(fromState, toState, layout, progress) {
    const instances = [];

    if (fromState?.currentTrack) {
        instances.push({
            track: fromState.currentTrack,
            left: layout.slots.current.left,
            top: layout.slots.current.top,
            size: layout.slots.current.size,
            zIndex: 3,
        });
    }

    if (toState?.previousTrack) {
        const end = layout.slots.prev;
        const start = {
            left: end.left - Math.round(end.size * 0.45),
            top: end.top,
            size: end.size,
        };

        instances.push({
            track: toState.previousTrack,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 1,
        });
    }

    if (toState?.nextTrack) {
        const end = layout.slots.next;
        const start = {
            left: end.left + Math.round(end.size * 0.45),
            top: end.top,
            size: end.size,
        };

        instances.push({
            track: toState.nextTrack,
            left: lerp(start.left, end.left, progress),
            top: lerp(start.top, end.top, progress),
            size: lerp(start.size, end.size, progress),
            zIndex: 2,
        });
    }

    return instances;
}

function buildAdjacentReplaceTransitionInstances(fromState, toState, layout, t) {
    const instances = [];
    const isLeaving = t < 0.5;
    const phaseProgress = easeInOutCubic(isLeaving ? t * 2 : (t - 0.5) * 2);
    const sideState = isLeaving ? fromState : toState;

    if (toState?.currentTrack) {
        instances.push({ track: toState.currentTrack, ...layout.slots.current, zIndex: 3 });
    }

    for (const [slotName, trackName] of [
        ['prev', 'previousTrack'],
        ['next', 'nextTrack'],
    ]) {
        const track = sideState?.[trackName];
        if (!track) continue;

        const slot = layout.slots[slotName];
        const outsideLeft = slotName === 'prev' ? -slot.size - TRACK_IMAGE_PADDING * 2 : layout.canvasWidth + TRACK_IMAGE_PADDING * 2;
        instances.push({
            track,
            left: isLeaving ? lerp(slot.left, outsideLeft, phaseProgress) : lerp(outsideLeft, slot.left, phaseProgress),
            top: slot.top,
            size: slot.size,
            zIndex: 1,
        });
    }

    return instances;
}

function buildPlayStateTransitionInstances(fromState, toState, fromLayout, toLayout, progress) {
    const instances = [];
    const slotDefinitions = [
        {
            slotName: 'prev',
            track: toState?.previousTrack || fromState?.previousTrack || null,
            zIndex: 1,
        },
        {
            slotName: 'next',
            track: toState?.nextTrack || fromState?.nextTrack || null,
            zIndex: 1,
        },
        {
            slotName: 'current',
            track: toState?.currentTrack || fromState?.currentTrack || null,
            zIndex: 3,
        },
    ];

    for (const { slotName, track, zIndex } of slotDefinitions) {
        if (!track) {
            continue;
        }

        const slot = interpolateSlot(fromLayout.slots[slotName], toLayout.slots[slotName], progress);

        instances.push({
            track,
            left: slot.left,
            top: slot.top,
            size: slot.size,
            zIndex,
        });
    }

    return instances;
}

function buildTransitionInstances(fromState, toState, layout, t, direction = 'forward', fromLayout = layout, toLayout = layout) {
    const progress = easeOutCubic(clamp(t, 0, 1));
    let instances;

    switch (direction) {
        case 'backward':
            instances = buildBackwardTransitionInstances(fromState, toState, layout, progress);
            break;
        case 'next-appear':
            instances = buildNextAppearTransitionInstances(fromState, toState, layout, progress);
            break;
        case 'adjacent-appear':
            instances = buildAdjacentAppearTransitionInstances(fromState, toState, layout, progress);
            break;
        case 'adjacent-replace':
            instances = buildAdjacentReplaceTransitionInstances(fromState, toState, layout, clamp(t, 0, 1));
            break;
        case 'play-state':
            instances = buildPlayStateTransitionInstances(fromState, toState, fromLayout, toLayout, progress);
            break;
        default:
            instances = buildForwardTransitionInstances(fromState, toState, layout, progress);
            break;
    }

    return instances.sort((a, b) => a.zIndex - b.zIndex);
}

async function renderInstances(width, height, instances, transparentColor = { r: 0, g: 0, b: 0, alpha: 0 }) {
    const preparedLayers = await Promise.all(
        instances.map(async (item) => {
            if (item.size <= 0) {
                return null;
            }

            // Reuse one source raster per cover and preview height throughout the transition.
            const img = await prepareTrackImage(item.track, height);
            if (!img) {
                return null;
            }

            const scale = item.size / height;
            if (img.width * scale < 1 || img.height * scale < 1) {
                return null;
            }
            const imageLeft = item.left - TRACK_IMAGE_PADDING * scale;
            const imageTop = item.top - TRACK_IMAGE_PADDING * scale;
            const left = Math.floor(imageLeft);
            const top = Math.floor(imageTop);
            let data = img.data;
            let imageWidth = img.width;
            let imageHeight = img.height;

            if (scale !== 1 || imageLeft !== left || imageTop !== top) {
                // Align pixel centres while retaining the fractional position and scale.
                const pixelOffset = (scale - 1) / 2;
                const transformed = await sharp(img.data, { raw: { width: img.width, height: img.height, channels: img.channels } })
                    .affine([scale, 0, 0, scale], {
                        odx: imageLeft - left + pixelOffset,
                        ody: imageTop - top + pixelOffset,
                        background: { r: 0, g: 0, b: 0, alpha: 0 },
                        interpolator: sharp.interpolators.bicubic,
                    })
                    .raw()
                    .toBuffer({ resolveWithObject: true });
                data = transformed.data;
                imageWidth = transformed.info.width;
                imageHeight = transformed.info.height;
            }

            const cropLeft = Math.max(0, -left);
            const cropTop = Math.max(0, -top);
            const layerWidth = Math.min(imageWidth - cropLeft, width - Math.max(0, left));
            const layerHeight = Math.min(imageHeight - cropTop, height - Math.max(0, top));
            if (layerWidth <= 0 || layerHeight <= 0) {
                return null;
            }

            let input = data;
            if (layerWidth !== imageWidth || layerHeight !== imageHeight) {
                input = Buffer.allocUnsafe(layerWidth * layerHeight * 4);
                for (let y = 0; y < layerHeight; y++) {
                    const sourceOffset = ((y + cropTop) * imageWidth + cropLeft) * 4;
                    data.copy(input, y * layerWidth * 4, sourceOffset, sourceOffset + layerWidth * 4);
                }
            }

            return {
                input,
                raw: { width: layerWidth, height: layerHeight, channels: img.channels },
                left: Math.max(0, left),
                top: Math.max(0, top),
            };
        }),
    );

    return await sharp({ create: { width, height, channels: 4, background: transparentColor } })
        .composite(preparedLayers.filter(Boolean))
        .raw()
        .toBuffer();
}

async function drawThumbnail(width, height, previousTrack, currentTrack, nextTrack, isPlaying = true, transparentColor = { r: 0, g: 0, b: 0, alpha: 0 }) {
    if (!sharp || !currentTrack || width <= 0 || height <= 0) {
        return null;
    }

    const layout = getLayout(width, height, isPlaying);
    const instances = buildStaticInstances(previousTrack, currentTrack, nextTrack, layout);

    return await renderInstances(width, height, instances, transparentColor);
}

async function drawThumbnailTransition(
    width,
    height,
    fromState,
    toState,
    progress,
    direction = 'forward',
    isPlaying = true,
    transparentColor = { r: 0, g: 0, b: 0, alpha: 0 },
) {
    if (!sharp || !toState?.currentTrack || width <= 0 || height <= 0) {
        return null;
    }

    const fromLayout = direction === 'play-state' ? getLayout(width, height, fromState?.isPlaying ?? isPlaying) : null;
    const toLayout = getLayout(width, height, toState?.isPlaying ?? isPlaying);
    const layout = toLayout;
    const instances = buildTransitionInstances(fromState, toState, layout, progress, direction, fromLayout || layout, toLayout);

    return await renderInstances(width, height, instances, transparentColor);
}

module.exports = {
    drawThumbnail,
    drawThumbnailTransition,
};
