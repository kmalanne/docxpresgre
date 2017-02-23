const dbConfiguration = {
  client: 'pg',
  connection: 'postgres://db_user:dbpassword@127.0.0.1:5432/test_db',
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

module.exports = {
  development: dbConfiguration,
  test: dbConfiguration,
  production: dbConfiguration,
};
