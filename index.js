// ./lib/utiles/console/index.js
const originalLogger = require("./log");
const { logSingleLine } = require("./singleLine");
const { logMultiLine } = require("./multiLine");
const { log } = require("./logger");



module.exports = {
  log2: originalLogger,
  log: log,
  logSingleLine,
  logMultiLine,
};
