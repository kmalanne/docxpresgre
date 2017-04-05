/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server').server;
const knex = require('../src/db/db');

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

  describe('GET /unavailable', () => {
    let token = null;

    beforeEach((done) => {
      chai.request(server)
        .get('/token/1')
        .end((err, res) => {
          token = res.body;
          done();
        });
    });

    it('should return unauthorized with no token', (done) => {
      chai.request(server)
        .get('/unavailable')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should return authorized with token', (done) => {
      chai.request(server)
        .get('/unavailable')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
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
          done();
        });
    });

    it('should return bad request with invalid id', (done) => {
      chai.request(server)
        .get('/example/scam')
        .end((err, res) => {
          res.should.have.status(400);
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
          done();
        });
    });

    it('should return bad request with invalid body', (done) => {
      chai.request(server)
        .post('/example')
        .send({
          column_1: 12345,
          column_2: "scam",
        })
        .end((err, res) => {
          res.should.have.status(400);
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
          done();
        });
    });

    it('should return bad request with invalid id', (done) => {
      chai.request(server)
        .put('/example/scamelot')
        .send({
          column_1: 'value',
          column_2: 10,
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should return bad request with invalid body', (done) => {
      chai.request(server)
        .put('/example/1')
        .send({
          column_1: 666,
          column_2: 'ballsballsballs',
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('DELETE /example/:id', () => {
    it('should delete a single example', (done) => {
      chai.request(server)
        .delete('/example/1')
        .end((error, response) => {
          response.should.have.status(200);
          done();
        });
    });

    it('should return bad request with invalid id', (done) => {
      chai.request(server)
        .delete('/example/"#€%€#')
        .end((error, response) => {
          response.should.have.status(400);
          done();
        });
    });
  });
});
/* eslint-enable */
