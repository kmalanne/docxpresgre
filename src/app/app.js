const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const index = require('./routes/index');
const example = require('./routes/example');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());

  app.use('/', index);
  app.use('/example', example);

  return app;
};
