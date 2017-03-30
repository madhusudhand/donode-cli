// app config
module.exports = {
  appRoot      : __dirname,
  envDir       : 'env',
  appDir       : 'app',
  // these are paths inside of appDir
  controllerDir: 'controllers',
  middlewareDir: 'middleware',

  // environment specific configuration can be found at env/<environment>.env.js
  environment  : process.env.NODE_ENV || 'development',
};
