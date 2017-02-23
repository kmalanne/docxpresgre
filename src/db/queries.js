const knex = require('./db.js');

function getAll() {
  return knex.raw('SELECT * FROM table');
}

module.exports = {
  getAll,
};
