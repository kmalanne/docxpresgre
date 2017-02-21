const supertest = require('supertest');
const test = require('tape');
const app = require('../../server');

const api = supertest(app);

test('GET /', (t) => {
  api
    .get('/api/v1/')
    .expect('Content-type', 'text/html; charset=utf-8')
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.fail(err);
      } else {
        t.ok(res.body, 'It should have a response body');
      }
      t.end();
    });
});

test('GET unknown route', (t) => {
  api
    .get('/api/v1/scam')
    .expect(404)
    .end((err, res) => {
      if (err) {
        t.fail(err);
      } else {
        t.ok(res.body, 'It should respond 404');
      }
      t.end();
    });
});

test.onFinish(() => process.exit(0));
