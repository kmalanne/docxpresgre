const queries = require('../../db/queries');

module.exports = (router) => {
  router.get('/route', (req, res, next) => {
    queries.getAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        next(error);
      });
  });
};
