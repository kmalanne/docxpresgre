
exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('test', (table) => {
      table.increments('id').primary();
      table.string('column_1');
      table.integer('column_2');
      table.timestamps();
    }),
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('test'),
  ]);
