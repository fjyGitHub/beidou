'use strict';

exports.install = require('./install');
exports.getRegistry = require('./registry');
exports.log = require('./logger');

exports.getArgvWithDefaultConfig = (argv) => {
  let findPort = false;
  for (const arg of argv) {
    if (arg.includes('port')) {
      findPort = true;
    }
  }
  // Set default port
  if (!findPort) {
    argv.push('--port=6001');
  }
  argv.push('--framework=beidou-core');
  return argv;
};
