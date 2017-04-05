const express = require('express');
const jwt = require('jsonwebtoken');
const validate = require('express-validation');
const validations = require('./validations/token');
const User = require('../../db/models/user');

const router = express.Router();

router.get('/:id', validate(validations.get), (req, res, next) => {
  User.getUserById(req.params.id)
    .then((result) => {
      const secret = process.env.AUTH0_CLIENT_SECRET || 'yoloswag';
      const token = jwt.sign({ name: result[0].name }, secret);
      res.status(200).json(token);
    })
    .catch(error => next(error));
});

module.exports = router;
