exports.seed = (knex, Promise) =>
  knex('example').del()
    .then(() =>
      Promise.all([
        knex('example').insert({
          id: 1,
          column_1: 'value1',
          column_2: 1,
        }),
        knex('example').insert({
          id: 2,
          column_1: 'value2',
          column_2: 2,
        }),
        knex('example').insert({
          id: 3,
          column_1: 'value3',
          column_2: 3,
        }),
      ]));
