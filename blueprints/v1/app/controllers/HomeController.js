'use strict';

const Controller = require('donode').Controller;

class HomeController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    response.send({
      'app': 'works !!!'
    });
  }
}

module.exports = HomeController;
