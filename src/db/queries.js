const knex = require('./db.js');

function parseId(id) {
  return parseInt(id, 10);
}

// Example
function getAllExample() {
  return knex.raw('SELECT * FROM example ORDER BY id ASC');
}

function getExampleById(id) {
  return knex.raw('SELECT * FROM example WHERE id = ?', [parseId(id)]);
}

function addExample(example) {
  return knex('example').insert(example, 'id');
}

function updateExample(id, updates) {
  return knex('example').where('id', parseId(id)).update(updates);
}

function deleteExample(id) {
  return knex('example').where('id', parseId(id)).del();
}

// User
function getUserById(id) {
  return knex.raw('SELECT * FROM app_user WHERE id = ?', [parseId(id)]);
}

function getUserByOAuthID(id) {
  return knex.raw('SELECT * FROM app_user WHERE oauth_id = ?', [parseId(id)]);
}

function addUser(user) {
  return knex('app_user').insert(user, 'id');
}

module.exports = {
  getAllExample,
  getExampleById,
  addExample,
  updateExample,
  deleteExample,

  getUserById,
  getUserByOAuthID,
  addUser,
};
