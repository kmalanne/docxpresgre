const db = require('./db.js');

function getAll() {
  return db.raw('SELECT * FROM table');
}

module.exports = {
  getAll,
};
