exports.seed = (knex, Promise) =>
  knex('app_user').del()
    .then(() =>
      Promise.all([
        knex('app_user').insert({
          email: 'test@test.com',
          name: 'Testy McTestface',
        }),
      ]));
