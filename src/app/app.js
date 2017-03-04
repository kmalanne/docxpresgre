const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

const index = require('./routes/index');
const example = require('./routes/example');
const error = require('./routes/error');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());

  app.use(session({
    secret: 'yolo', // process.env.SECRET_KEY
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', index);
  app.use('/example', example);
  app.use(error);

  return app;
};
