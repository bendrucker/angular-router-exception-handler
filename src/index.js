'use strict';

module.exports = require('angular')
  .module('router-exception-handler', [])
  .run(require('./forward'))
  .name;
