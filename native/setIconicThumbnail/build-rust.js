const builder = require('../build-rust.js');

const getRustBuildInfo = (debug = false) => builder.getRustBuildInfo(__dirname, debug);
const buildRust = (debug = false) => builder.buildRust(__dirname, debug);

if (require.main === module) buildRust(process.argv.includes('--debug'));

module.exports = { getRustBuildInfo, buildRust };
