/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server').server;
const knex = require('../src/db/db.js');

const should = chai.should();

chai.use(chaiHttp);

describe('API', () => {

  beforeEach((done) => {
    knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
      .then(() => done());
  });

  afterEach(function (done) {
    knex.migrate.rollback()
      .then(() => done());
  });

  describe('GET /', () => {
    it('should return index', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
    });
  });

  describe('GET /scam', () => {
    it('should return page not found', (done) => {
      chai.request(server)
        .get('/scam')
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.html;
          done();
        });
    });
  });

  describe('GET /example', () => {
    it('should return example', (done) => {
      chai.request(server)
        .get('/example')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('rows');
          res.body.rows.length.should.equal(3);
          done();
        });
    });
  });
});
/* eslint-enable */
