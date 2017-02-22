const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const indexRoute = require('./routes/index');
const routeRoute = require('./routes/route');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());

  app.use('/api/v1', router);
  indexRoute(router);
  routeRoute(router);

  return app;
};
