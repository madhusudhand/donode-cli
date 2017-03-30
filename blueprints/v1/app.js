'use strict';

const http = require('http');

const donode = require('donode').donode;
const routes = require('./app/routes');
const headers = require('./app/headers');
const config = require('./config');

const app = donode.create({ config, routes, headers });
const server = http.createServer(app.listener)

server.listen(app.port, app.hostname)
      .on('listening', onListening)
      .on('error', onError);


function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${error.port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${error.port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
