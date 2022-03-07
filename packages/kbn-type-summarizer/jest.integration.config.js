/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/** @typedef {import("@jest/types").Config.InitialOptions} JestConfig */
/** @type {JestConfig} */
module.exports = {
  preset: '@kbn/test/jest_integration_node',
  rootDir: '../..',
  roots: ['<rootDir>/packages/kbn-type-summarizer'],
};
