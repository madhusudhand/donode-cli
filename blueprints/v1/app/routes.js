'use strict';
const router = require('donode').Router;

router.routes([
  {
    path: '/hello',
    method: 'GET',
    handler: 'UserController@get'
  }

]);

module.exports = router;
