const knex = require('./db.js');

function getAll() {
  return knex.raw('SELECT * FROM example');
}

module.exports = {
  getAll,
};
