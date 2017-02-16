'use strict';
const router = require('donode').Router;

router.routes([
  {
    path: '/hello',
    method: 'GET',
    handler: 'UserController@get',
    middleware: ['Auth'],
    headers: ['json-content']
  }
]);

module.exports = router;
