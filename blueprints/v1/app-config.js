'use strict';

// app config
module.exports = {
  appRoot      : __dirname,
  envDir       : 'env',
  // environment specific configurations can be overridden at env/<environment>.env.js
  environment  : process.env.NODE_ENV || 'development',

  // configuration for APIs
  appDir       : 'app',
  controllerDir: 'controllers',   // path inside of appDir
  middlewareDir: 'middleware',    // path inside of appDir

  // config for static content (html, css, assets etc...)
  publicDir    : 'public',


  /////////////////////////////////////////////
  //    define your custom configurations    //
  //  which are common for all environments  //
  /////////////////////////////////////////////


  // custom: 'what ever',

};
