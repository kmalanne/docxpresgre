module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://test:test@localhost:5432/test_db',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
