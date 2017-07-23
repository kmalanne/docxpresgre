const express = require('express');
const jwt = require('jsonwebtoken');
const validate = require('express-validation');
const validations = require('./validations/token');
const User = require('../../db/models/user');
const asyncRequest = require('../utils/asyncRequest');

const router = express.Router();

const getUserById = async (req, res) => {
  const result = await User.getUserById(req.params.id);
  const secret = process.env.AUTH0_CLIENT_SECRET || 'yoloswag';
  const token = jwt.sign({ name: result[0].name }, secret);
  res.status(200).json(token);
};

router.get('/:id', validate(validations.get), asyncRequest.bind(null, getUserById));

module.exports = router;
