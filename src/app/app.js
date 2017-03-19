const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

require('./config/passport.js')(passport);

const index = require('./routes/index');
const auth = require('./routes/auth');
const example = require('./routes/example');
const unavailable = require('./routes/unavailable');
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

  const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.sendStatus(401);
  };

  app.use('/', index);
  app.use('/example', example);
  app.use('/auth', auth);
  app.use('/unavailable', authenticated, unavailable);
  app.use(error);

  return app;
};
