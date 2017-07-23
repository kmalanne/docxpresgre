const knex = require('../db.js');
const parseId = require('../utils/parseId');

const table = 'app_user';

const User = {
  async getUserById(id) {
    const rows = await knex.select('*')
      .from(table)
      .where('id', parseId(id));
    return rows;
  },

  async getUserByEmail(email) {
    const rows = await knex.select('*')
      .from(table)
      .where('email', email);
    return rows;
  },

  async createUser(user) {
    const rows = await knex(table)
      .insert(user, 'id');
    return rows;
  },
};

module.exports = User;
