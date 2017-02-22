/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server').server;

const should = chai.should();

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return index', (done) => {
    chai.request(server)
      .get('/api/v1')
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
      .get('/api/v1/scam')
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.html;
        done();
      });
  });
});
/* eslint-enable */
