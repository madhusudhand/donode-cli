'use strict';

/*  ------   ROUTES   -----
**
**  One place for all routes.
**
*/

const routes = [{
  path: '/api',   // prefix which would be applied to all children
  headers: ['allow-cors', 'json-content'],   // these can be found in headers.js

  children: [
    { path: '/', method: 'GET', handler: 'HomeController@get' },
    {
      path: '/hello',                         // route: /api/hello
      method: 'GET',
      handler: 'UserController@get',          // UserController.js inside controllers directory
      middleware: ['Auth']                    // Auth.js inside middleware directory
    },

    // add more

  ]
}];



module.exports = routes;
