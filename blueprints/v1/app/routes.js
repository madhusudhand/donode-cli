'use strict';

/*  ------   ROUTES   -----
**
**  One place for all routes.
**
*/

module.exports = [
  { path: '/', method: 'GET', handler: 'HomeController@get' },

  {
    path: '/api',                             // prefix which would be applied to all children
    children: [{
      path: '/hello',                         // route path would be /api/hello because of prefix
      method: 'GET',
      handler: 'UserController@get',          // UserController.js inside controllers directory
      middleware: ['Auth'],                   // Auth.js inside middleware directory
      headers: ['allow-cors', 'json-content'] // these can be found in headers.js
    }]
  },

  // add more
];
