module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://dino:tontsa@db:5432/db',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
