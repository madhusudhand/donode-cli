// app config
module.exports = {
  appRoot      : __dirname,
  envDir       : 'env',
  // environment specific configuration can be found at env/<environment>.env.js
  environment  : process.env.NODE_ENV || 'development',

  // configuration for APIs
  appDir       : 'app',
  controllerDir: 'controllers',   // path inside of appDir
  middlewareDir: 'middleware',    // path inside of appDir

  // config for static content (html, css, assets etc...)
  publicDir    : 'public'
};
