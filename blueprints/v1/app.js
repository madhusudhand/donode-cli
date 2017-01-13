const server = require('donode').Server;
const config = require('./config/config');
const router = require('./app/routes');

const listener = server.create(Object.assign(config, {
  appRoot: __dirname
}));

listener.listen(3000);
