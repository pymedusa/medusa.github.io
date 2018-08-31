#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const winston = require('winston');
const { Validator } = require('jsonschema');
const dupKeyValidator = require('json-dup-key-validator');
const moment = require('moment-timezone');

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
  const data = fs.readFileSync(filePath, 'utf-8');

  const isInvalid = dupKeyValidator.validate(data, false);
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
  const relFile = 'providers/broken_providers.json';
  const filePath = path.resolve(__dirname, relFile);
  log.info(`Validating: ${relFile}`);

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

/**
 * Validate the network timezones list.
 * @returns {boolean} Validation result.
 */
const validateNetworkTimezones = () => {
  const filePath = path.join(__dirname, 'sb_network_timezones', 'network_timezones.txt');
  log.info(`Validating: sb_network_timezones/network_timezones.txt`);

  let errors = 0;
  const data = fs.readFileSync(filePath, 'utf-8');
  const linePattern = /^.+:[\w/]+$/;

  // https://stackoverflow.com/a/5202185/7597273
  const rsplit = (str, sep, maxsplit) => {
    const split = str.split(sep);
    return maxsplit ?
      [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit)) :
      split;
  };

  const logError = (message, index, line) => {
    if (line) {
      log.error(`Line #${index}: ${message}\n\t\`${line}\``);
    } else {
      log.error(`Line #${index}: ${message}`);
    }
    errors++;
  };

  const timezones = moment.tz.names();
  const lines = data.split('\n');

  if (!data.trim() || lines.length === 0) {
    log.warn('File is empty.');
    return true;
  }

  lines.forEach((line, index) => {
    const lineIndex = index + 1;
    const trimmedLine = line.trim();

    if (lineIndex === lines.length) {
      if (trimmedLine) {
        logError('Please leave one empty line at the end of the file.', lineIndex);
      } else {
        // Last line should not be processed.
        return;
      }
    }

    if (!trimmedLine) {
      logError('Please remove empty lines.', lineIndex);
      return;
    }

    if (line.includes('\r')) {
      logError('`\\r` found - please only use Linux EOL (`\\n`).', lineIndex);
    }

    if (!linePattern.test(line)) {
      logError('Line format invalid, please use: `Network Name:Timezone`', lineIndex, line);
    }

    const timezone = rsplit(line, ':', 1)[1];
    if (!timezones.includes(timezone)) {
      logError(`Timezone \`${timezone}\` is invalid.`, lineIndex, line);
    }
  });

  // @TODO: Check list order

  console.log();
  return errors === 0;
};

const results = [
  validateSceneExceptions(),
  validateBrokenProviders(),
  validateNetworkTimezones()
];
process.exit(
  Number(
    !results.every(Boolean)
  )
);
