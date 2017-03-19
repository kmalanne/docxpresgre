const error = ((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = error;
