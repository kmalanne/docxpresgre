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
          // res.body.should.be.a('array');
          // res.body.length.should.equal(4);
          // res.body[0].should.have.property('id');
          // res.body[0].should.have.property('column_1');
          // res.body[0].column_1.should.equal('value1');
          // res.body[0].should.have.property('column_2');
          // res.body[0].column_2.should.equal(1);
          done();
        });
    });
  });
});
/* eslint-enable */
