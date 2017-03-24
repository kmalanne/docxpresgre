const express = require('express');
const validate = require('express-validation');
const validations = require('./validations/example');
const Example = require('../../db/models/example');

const router = express.Router();

router.get('/', (req, res, next) => {
  Example.getAllExample()
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.get('/:id', validate(validations.get), (req, res, next) => {
  Example.getExampleById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.post('/', validate(validations.create), (req, res, next) => {
  Example.createExample(req.body)
    .then(id => Example.getExampleById(id))
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.put('/:id', validate(validations.update), (req, res, next) => {
  Example.updateExample(req.params.id, req.body)
    .then(() => Example.getExampleById(req.params.id))
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

router.delete('/:id', validate(validations.delete), (req, res, next) => {
  Example.deleteExample(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => next(error));
});

module.exports = router;
