'use strict';
const headers = require('donode').Headers;

headers.register({
  'json-content': { name: 'Content-Type', value: 'application/json; charset=UTF-8'}
});
