exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('example', (example) => {
      example.increments('id').primary();
      example.string('column_1');
      example.integer('column_2');
      example.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    }),

    knex.schema.createTable('app_user', (user) => {
      user.increments('id').primary();
      user.string('email').unique().notNullable();
      user.string('name').notNullable();
      user.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    }),
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('example'),
    knex.schema.dropTable('app_user'),
  ]);
