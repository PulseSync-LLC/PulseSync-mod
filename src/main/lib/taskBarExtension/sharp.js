const { Logger } = require('../../packages/logger/Logger.js');
const logger = new Logger('TaskBarExtension');

let sharp = false;
try {
    const module = require('sharp');
    module.simd(true);
    module.concurrency(0);
    sharp = module;
} catch (error) {
    logger.error('Failed to load sharp. Check that app.asar.unpacked matches app.asar; using cover thumbnails:', error);
}

module.exports = sharp;
