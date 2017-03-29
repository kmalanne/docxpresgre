const knex = require('../db.js');

const table = 'example';

function parseId(id) {
  return parseInt(id, 10);
}

// Example
const Example = {
  getAllExample() {
    return knex.select('*')
      .from(table)
      .orderBy('id', 'asc')
      .then(rows => Promise.resolve(rows));
  },

  getExampleById(id) {
    return knex.select('*')
      .from(table)
      .where('id', parseId(id))
      .then(rows => Promise.resolve(rows));
  },

  createExample(example) {
    return knex(table)
      .insert(example, 'id')
      .then(rows => Promise.resolve(rows));
  },

  updateExample(id, updates) {
    return knex(table)
      .where('id', parseId(id))
      .update(updates)
      .then(rows => Promise.resolve(rows));
  },

  deleteExample(id) {
    return knex(table)
      .where('id', parseId(id))
      .del();
  },
};

module.exports = Example;
