const dbConfiguration = {
  client: 'pg',
  connection: 'postgres://pg_user:pgpassword@127.0.0.1:5432/pg_db',
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
