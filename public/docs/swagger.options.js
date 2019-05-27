import settings from '../../settings';

module.exports = {
  swaggerDefinition: {
    info: {
      title: 'Cost Estimation API',
      version: '0.1.0',
      description: 'Endpoints to use for the cost estimation service',
      contact: {
        name: 'Wilson Kiggundu',
        url: 'http://wilsonie.wordpress.com',
        email: 'wil.kiggundu@gmail.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    host: `${settings.BASE_URL}:${settings.PORT}`,
    basePath: '/',
    produces: ['application/json'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      AuthService: {
        type: 'oauth2',
        description: 'This API uses OAuth 2 with the client_credentials grant flow',
        flow: 'application',
        authorizationUrl: 'https://authservice-test.laboremus.no/connect/authorize',
        tokenUrl: 'https://authservice-test.laboremus.no/connect/token',
        scopes: {
          read: 'Grant read-only access',
          write: 'Grant write access',
        },
      },
    },


  },
  basedir: __dirname, // app absolute path
  apis: ['./public/docs/routes/*.docs.yml'],
};
