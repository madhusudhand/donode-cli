//////////////////////////////////////////////////////////////////////////////////////////////////
//                    This config will be merged into app-config at runtime                     //
//  having SAME PROPERTY NAME IN BOTH, will OVERRRIDE app-config VALUE WITH VALUE IN this file  //
//////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  /*  hostname  */
  hostname: '',

  /*  port number  */
  port: process.env.PORT || 3000,

  /* mode: ture, false  */
  production: false,

  /*
  ** 0: log everything
  ** 1: log warnings & errors
  ** 2: log errors only
  */
  logLevel: 0,


  ////////////////////////////////////////////
  //   define your custom configurations    //
  ////////////////////////////////////////////

  database: {
    mariadb: {
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '',
    }
  },

  oauth: {
    github: {
      clientID: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
      authUrl: 'https://github.com/login/oauth/authorize',
      tokenUrl: 'https://github.com/login/oauth/access_token',
    }
  }
};
