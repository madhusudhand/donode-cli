'use strict';
const Middleware = require('donode').Middleware;

class Auth extends Middleware {
  constructor() {
    super();
  }

  handle(request, response, next) {
    // response.send({some: 'data'});
    // or forward the response using
    return next();
  }
}

module.exports = Auth;
