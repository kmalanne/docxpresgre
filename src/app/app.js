const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const cors = require('cors');

const index = require('./routes/index');
const example = require('./routes/example');
const token = require('./routes/token');
const unavailable = require('./routes/unavailable');
const error = require('./routes/error');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());

  app.use(cors());

  const authenticate = jwt({
    secret: process.env.AUTH0_CLIENT_SECRET || 'yoloswag',
  });

  app.use('/', index);
  app.use('/example', example);
  app.use('/token', token);
  app.use('/unavailable', authenticate, unavailable);
  app.use(error);

  return app;
};
