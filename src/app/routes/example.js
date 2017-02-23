const express = require('express');
const queries = require('../../db/queries');

const router = express.Router();

router.get('/', (req, res, next) => {
  queries.getAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
