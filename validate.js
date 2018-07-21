#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const winston = require('winston');
const { Validator } = require('jsonschema');
const jsonHandler = require('json-dup-key-validator');

const log = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.colorize({ error: true, warning: true }),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  )
});

/**
 * Validate a JSON file.
 * @param {string} filePath Absolute path to the file
 * @param {jsonschema.Validator} validator Validator object
 * @returns {(string|null)} Error if failed, null if passed
 */
const validateJSON = (filePath, validator) => {
  const data = fs.readFileSync(filePath, 'utf8');

  const isInvalid = jsonHandler.validate(data, false);
  if (isInvalid !== undefined) {
    return isInvalid.replace(/\n/g, '\\n');
  }

  const obj = JSON.parse(data);
  const results = validator.validate(obj, '/');

  if (results.errors.length > 0) {
    const messageList = results.errors.map(result => String(result));
    return messageList.join('\n');
  }

  return null;
};

/**
 * Validate the scene exceptions JSON files.
 * @returns {boolean} Validation result.
 */
const validateSceneExceptions = () => {
  const validator = new Validator();
  validator.addSchema({
    'id': '/indexerSchema',
    'type': 'object',
    'additionalProperties': false,
    'patternProperties': {
      '^([1-9]\\d+)$': {
        'type': 'object',
        'additionalProperties': false,
        'patternProperties': {
          '^(-1|\\d+)$': {
            'type': 'array',
            'minItems': 1,
            'uniqueItems': true,
            'items': {
              'type': 'string'
            }
          }
        }
      }
    }
  });

  return glob
    .sync('scene_exceptions/scene_exceptions_*.json', {
      cwd: __dirname,
      absolute: true
    }).map(filePath => {
      const fileName = path.basename(filePath);
      log.info(`Validating: scene_exceptions/${fileName}`);

      // Example: scene_exceptions_tvdb.json
      const indexer = fileName.split('.')[0].split('_').pop();
      validator.addSchema({
        'id': '/',
        'type': 'object',
        'additionalProperties': false,
        'properties': {
          [indexer]: {
            '$ref': '/indexerSchema'
          }
        }
      });

      const result = validateJSON(filePath, validator);
      if (result !== null) {
        log.error(`${result}\n`);
        return false;
      }

      console.log();
      return true;
    }).every(Boolean);
};

/**
 * Validate the scene exceptions JSON files.
 * @returns {boolean} Validation result.
 */
const validateBrokenProviders = () => {
  const filePath = path.join(__dirname, 'providers', 'broken_providers.json');
  log.info(`Validating: providers/broken_providers.json`);

  const validator = new Validator();
  validator.addSchema({
    'id': '/',
    'type': 'array',
    'minItems': 1,
    'uniqueItems': true,
    'items': {
      'type': 'string'
    }
  });

  const result = validateJSON(filePath, validator);
  if (result !== null) {
    log.error(`${result}\n`);
    return false;
  }

  console.log();
  return true;
};

const results = [
  validateSceneExceptions(),
  validateBrokenProviders()
];
process.exit(
  Number(
    !results.every(Boolean)
  )
);
