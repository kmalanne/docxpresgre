const Joi = require('joi');

module.exports = {
  create: {
    body: {
      column_1: Joi.string(),
      column_2: Joi.number(),
    },
  },

  get: {
    params: {
      id: Joi.number().integer().max(999999999).required(),
    },
  },

  update: {
    params: {
      id: Joi.number().integer().max(999999999).required(),
    },
    body: {
      column_1: Joi.string(),
      column_2: Joi.number(),
    },
  },

  delete: {
    params: {
      id: Joi.number().integer().max(999999999).required(),
    },
  },
};
