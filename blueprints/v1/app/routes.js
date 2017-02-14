'use strict';
const router = require('donode').Router;

router.routes([
  {
    path: '/hello',
    method: 'GET',
    handler: 'UserController@get',
    middleware: ['Auth']
  }
]);

module.exports = router;
