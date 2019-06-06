import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import path from 'path';
import passport from 'passport';
import morgan from 'morgan';
import rfs from 'rotating-file-stream';
import swaggerOptions from './public/docs/swagger.options';
import router from './routes';
import settings from './settings';
import db from './lib/db';

const app = express();
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// add swagger documentation
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(swaggerSpec);
});

app.use('/docs/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/docs/redocs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs', 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs', 'index.html'));
});

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}));

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log'),
});

app.use(morgan('combined', {
  stream: accessLogStream,
}));

// use static files
app.use(express.static('./public'));

// parse requests of Content-Type application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// parse requests of Content-Type application/json
app.use(bodyParser.json());


// add routers
router(app);

// mongo database connection
db.connect(settings.database)
  .then(() => {
    app.listen(settings.PORT, () => {
      console.log(`Server running on port ${settings.PORT}...`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
