'use strict';

const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    response.send({
      hello: 'world !!!!'
    });
  }

  post(request, response) {
    console.log(request.headers);
    console.log(request.queryParams);
    console.log(request.routeParams);
    console.log(request.body);
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
