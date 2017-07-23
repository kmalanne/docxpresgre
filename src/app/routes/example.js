const express = require('express');
const validate = require('express-validation');
const validations = require('./validations/example');
const Example = require('../../db/models/example');
const asyncRequest = require('../utils/asyncRequest');

const router = express.Router();

const getExamples = async (req, res) => {
  const result = await Example.getExamples();
  res.status(200).json(result);
};

const getExampleById = async (req, res) => {
  const result = await Example.getExampleById(req.params.id);
  res.status(200).json(result);
};

const createExample = async (req, res) => {
  const id = await Example.createExample(req.body);
  const result = await Example.getExampleById(id);
  res.status(200).json(result);
};

const updateExample = async (req, res) => {
  await Example.updateExample(req.params.id, req.body);
  const result = await Example.getExampleById(req.params.id);
  res.status(200).json(result);
};

const deleteExample = async (req, res) => {
  const result = await Example.deleteExample(req.params.id);
  res.status(200).json(result);
};

router.get('/', asyncRequest.bind(null, getExamples));
router.get('/:id', validate(validations.get), asyncRequest.bind(null, getExampleById));
router.post('/', validate(validations.create), asyncRequest.bind(null, createExample));
router.put('/:id', validate(validations.update), asyncRequest.bind(null, updateExample));
router.delete('/:id', validate(validations.delete), asyncRequest.bind(null, deleteExample));

module.exports = router;
