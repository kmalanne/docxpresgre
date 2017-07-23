const knex = require('../db');
const parseId = require('../utils/parseId');

const table = 'example';

// Example
const Example = {
  async getExamples() {
    const rows = await knex.select('*')
      .from(table)
      .orderBy('id', 'asc');
    return rows;
  },

  async getExampleById(id) {
    const rows = await knex.select('*')
      .from(table)
      .where('id', parseId(id));
    return rows;
  },

  async createExample(example) {
    const rows = await knex(table)
      .insert(example, 'id');
    return rows;
  },

  async updateExample(id, updates) {
    const rows = await knex(table)
      .where('id', parseId(id))
      .update(updates);
    return rows;
  },

  deleteExample(id) {
    return knex(table)
      .where('id', parseId(id))
      .del();
  },
};

module.exports = Example;
