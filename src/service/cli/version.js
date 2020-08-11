'use strict'

const packageJsonFile = require(`../../../package.json`);
const { version } = packageJsonFile;

module.exports = {
    name: `--version`,
    run() {
        console.info(version);
    }
};
