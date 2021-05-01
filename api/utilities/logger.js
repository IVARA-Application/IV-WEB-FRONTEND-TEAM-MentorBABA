"use strict";

const { createLogger } = require("bunyan");

// Create a new logger
const logger = createLogger({ name: "mentorbaba", stream: process.stdout });

module.exports = logger;
