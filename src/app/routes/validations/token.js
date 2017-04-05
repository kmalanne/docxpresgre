const Joi = require('joi');

module.exports = {
  get: {
    params: {
      id: Joi.number().integer().max(999999999).required(),
    },
  },
};
