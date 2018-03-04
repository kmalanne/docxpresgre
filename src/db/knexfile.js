const path = require('path');

const databaseUrl = process.env.NODE_ENV === 'test' ?
  process.env.DATABASE_URL_TEST :
  process.env.DATABASE_URL;

const connection = `${databaseUrl}?charset=utf-8`;

const dbConfiguration = {
  client: 'pg',
  connection,
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
