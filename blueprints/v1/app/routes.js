'use strict';
const router = require('donode').Router;

/*  ------   ROUTES   -----
**
**  One place for all routes.
**
*/

router.routes([
  { path: '/', method: 'GET', handler: 'HomeController@get' },
  {
    path: '/hello',
    method: 'GET',
    handler: 'UserController@get',
    middleware: ['Auth'],
    headers: ['allow-cors']
  },

  // add more
]);

module.exports = router;
