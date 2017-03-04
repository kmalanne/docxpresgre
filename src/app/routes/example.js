const express = require('express');
const _ = require('lodash');
const queries = require('../../db/queries');

const router = express.Router();

router.get('/', (req, res, next) => {
  queries.getAllExample()
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
  queries.getExampleById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.post('/', (req, res, next) => {
  queries.addExample(req.body)
    .then(id => queries.getExampleById(id))
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.put('/:id', (req, res, next) => {
  if (_.has(req.body, 'id')) {
    return res.status(400).json({
      error: 'Id field cannot be updated',
    });
  }

  return queries.update(req.params.id, req.body)
    .then(() => queries.getExampleById(req.params.id))
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.delete('/:id', (req, res, next) => {
  queries.deleteExample(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

module.exports = router;
