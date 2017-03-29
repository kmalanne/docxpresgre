const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
  const secret = process.env.AUTH0_CLIENT_SECRET || 'yoloswag';
  const token = jwt.sign({}, secret);
  res.status(200).json(token);
});

module.exports = router;
