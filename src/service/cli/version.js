'use strict';

const chalk = require(`chalk`);

const packageJsonFile = require(`../../../package.json`);
const {version} = packageJsonFile;

module.exports = {
  name: `--version`,
  run() {
    console.info(chalk.blue(version));
  }
};
