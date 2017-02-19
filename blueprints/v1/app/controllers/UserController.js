'use strict';

const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    response.send({
      hello: 'world !!'
    });
  }

  post(request, response) {
    response.send({
      result: 'data posted'
    });
  }

  put(request, response) {
    response.send({
      result: 'data updated'
    });
  }

  delete(request, response) {
    response.send({
      result: 'data deleted'
    });
  }
}

module.exports = UserController;
