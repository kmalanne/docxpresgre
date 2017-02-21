exports.seed = (knex, Promise) =>
  knex('table').del()
    .then(() =>
      Promise.all([
        knex('table').insert({
          id: 1,
          column_1: 'value1',
          column_2: 1,
        }),
        knex('table').insert({
          id: 2,
          column_1: 'value2',
          column_2: 2,
        }),
        knex('table').insert({
          id: 3,
          column_1: 'value3',
          column_2: 3,
        }),
      ]));
