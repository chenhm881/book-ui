const _ = require('lodash');
const baseConfiguration = require('../config/env/all');

// eslint-disable-next-line import/no-dynamic-require
const environmentSpecificConfiguration = require(`../config/env/${(process.env.ENVIRONMENT || 'dev')}`);

module.exports = _.merge({}, baseConfiguration, environmentSpecificConfiguration);
