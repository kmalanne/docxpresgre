
exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('example', (example) => {
      example.increments('id').primary();
      example.string('column_1');
      example.integer('column_2');
      example.timestamp('created_at').defaultTo(knex.fn.now());
    }),

    knex.schema.createTable('user', (user) => {
      user.increments('id').primary();
      user.string('username').unique().notNullable();
      user.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    }),
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('example'),
    knex.schema.dropTable('user'),
  ]);
