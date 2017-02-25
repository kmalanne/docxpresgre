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
          res.should.have.status(500);
          res.should.be.html;
          done();
        });
    });
  });

  describe('GET /example', () => {
    it('should return all examples', (done) => {
      chai.request(server)
        .get('/example')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('rows');
          res.body.rows.should.be.a('array')
          res.body.rows.length.should.equal(3);
          res.body.rows[1].should.be.a('object');
          res.body.rows[1].should.have.property('id');
          res.body.rows[1].should.have.property('column_1');
          res.body.rows[1].should.have.property('column_2');
          done();
        });
    });
  });

  describe('GET /example/:id', () => {
    it('should return a single example', (done) => {
      chai.request(server)
        .get('/example/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('rows');
          res.body.rows.should.be.a('array')
          res.body.rows.length.should.equal(1);
          res.body.rows[0].should.be.a('object');
          res.body.rows[0].should.have.property('id');
          res.body.rows[0].id.should.equal(1);
          res.body.rows[0].should.have.property('column_1');
          res.body.rows[0].column_1.should.equal('value1');
          res.body.rows[0].should.have.property('column_2');
          res.body.rows[0].column_2.should.equal(1);
          done();
        });
    });
  });

  describe('POST /example', () => {
    it('should add an example', (done) => {
      chai.request(server)
        .post('/example')
        .send({
          column_1: 'value4',
          column_2: 4,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('rows');
          res.body.rows.should.be.a('array')
          res.body.rows.length.should.equal(1);
          res.body.rows[0].should.be.a('object');
          res.body.rows[0].should.have.property('id');
          res.body.rows[0].id.should.equal(4);
          res.body.rows[0].should.have.property('column_1');
          res.body.rows[0].column_1.should.equal('value4');
          res.body.rows[0].should.have.property('column_2');
          res.body.rows[0].column_2.should.equal(4);
          done();
        });
    });
  });

  describe('PUT /example/:id', () => {
    it('should update an example', (done) => {
      chai.request(server)
        .put('/example/1')
        .send({
          column_1: 'value5',
          column_2: 5,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('rows');
          res.body.rows.should.be.a('array')
          res.body.rows.length.should.equal(1);
          res.body.rows[0].should.be.a('object');
          res.body.rows[0].should.have.property('id');
          res.body.rows[0].id.should.equal(1);
          res.body.rows[0].should.have.property('column_1');
          res.body.rows[0].column_1.should.equal('value5');
          res.body.rows[0].should.have.property('column_2');
          res.body.rows[0].column_2.should.equal(5);
          done();
        });
    });
  });

  describe('DELETE /example/:id', () => {
    it('should delete an single example', (done) => {
      chai.request(server)
        .delete('/example/1')
        .end((error, response) => {
          response.should.have.status(200);
          chai.request(server)
            .get('/example')
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.have.property('rows');
              res.body.rows.should.be.a('array')
              res.body.rows.length.should.equal(2);
              done();
            });
        });
    });
  });
});
/* eslint-enable */
