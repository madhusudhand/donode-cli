//////////////////////////////////////////////////////////////////////////////////////////////////
//                    This config will be merged into app-config at runtime                     //
//  having SAME PROPERTY NAME IN BOTH, will OVERRRIDE app-config VALUE WITH VALUE IN this file  //
//////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  /*  hostname  */
  hostname: '',

  /*  port number  */
  port: process.env.PORT || 80,

  /* mode: ture, false  */
  production: true,

  /*
  ** 0: log everything
  ** 1: log warnings & errors
  ** 2: log errors only
  */
  logLevel: 2,


  ////////////////////////////////////////////
  //   define your custom configurations    //
  ////////////////////////////////////////////

  database: {
    mariadb: {
      host: '',
      port: '',
      username: '',
      password: '',
    }
  },

  oauth: {
    github: {
      clientID: '',
      clientSecret: '',
      authUrl: '',
      tokenUrl: '',
    }
  }
};
