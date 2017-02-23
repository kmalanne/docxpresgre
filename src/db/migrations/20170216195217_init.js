
exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('example', (table) => {
      table.increments('id').primary();
      table.string('column_1');
      table.integer('column_2');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('example'),
  ]);
