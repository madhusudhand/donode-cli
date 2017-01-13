'use strict';

const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
  }

  get(request) {
    return {
      hello: 'world !!!!'
    };
  }

  post(request) {
    console.log(request.headers);
    console.log(request.queryParams);
    console.log(request.routeParams);
    console.log(request.body);
    return {
      result: 'data posted'
    };
  }

  put() {
    return {
      result: 'data updated'
    };
  }

  delete() {
    return {
      result: 'data deleted'
    };
  }
}

module.exports = UserController;
