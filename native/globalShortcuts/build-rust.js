const builder = require('../build-rust.js');

const getRustBuildInfo = (debug = false) => builder.getRustBuildInfo(__dirname, debug);

if (require.main === module) builder.buildRust(__dirname, process.argv.includes('--debug'));

module.exports = { getRustBuildInfo };
