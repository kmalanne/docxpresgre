const path = require('path');

const dbConfiguration = {
  client: 'pg',
  connection: 'postgres://db_user:dbpassword@127.0.0.1:5432/test_db',
  migrations: {
    directory: path.join(__dirname, '/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '/seeds'),
  },
};

module.exports = {
  development: dbConfiguration,
  test: dbConfiguration,
  production: dbConfiguration,
};
