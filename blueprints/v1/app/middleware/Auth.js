'use strict';
const Middleware = require('donode').Middleware;

class Auth extends Middleware {
  constructor() {
    super();
  }

  handle(request, next) {
    // do some checks
    // return error object if not satisfied
    // else return next()

    return next();
  }
}

module.exports = Auth;
