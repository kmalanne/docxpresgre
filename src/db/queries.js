const knex = require('./db.js');

function parseId(id) {
  return parseInt(id, 10);
}

function getAll() {
  return knex.raw('SELECT * FROM example ORDER BY id ASC');
}

function getById(id) {
  return knex.raw('SELECT * FROM example WHERE id = ?', [parseId(id)]);
}

function add(example) {
  return knex('example').insert(example, 'id');
}

function update(id, updates) {
  return knex('example').where('id', parseId(id)).update(updates);
}

function deleteItem(id) {
  return knex('example').where('id', parseId(id)).del();
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteItem,
};
