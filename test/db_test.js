/* eslint-disable */
const chai = require('chai');
const knex = require('../src/db/db');
const Example = require('../src/db/models/example');
const User = require('../src/db/models/user');

const should = chai.should();

describe('DB', () => {
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

  describe('Example', () => {
    it('should return all examples', (done) => {
      Example.getAllExample()
        .then(result => {
          result.should.be.a('array');
          result.length.should.equal(3);
          result[1].should.be.a('object');
          result[1].should.have.property('id');
          result[1].should.have.property('column_1');
          result[1].should.have.property('column_2');
          done();
        });
    });

    it('should return a single example with id', (done) => {
      Example.getExampleById(1)
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(1);
          result[0].should.be.a('object');
          result[0].should.have.property('id');
          result[0].id.should.equal(1);
          result[0].should.have.property('column_1');
          result[0].column_1.should.equal('value1');
          result[0].should.have.property('column_2');
          result[0].column_2.should.equal(1);
          done();
        });
    });

    it('should add an example', (done) => {
      const newExample = {
        column_1: 'value4',
        column_2: 4,
      };

      Example.createExample(newExample)
        .then(id => Example.getExampleById(id))
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(1);
          result[0].should.be.a('object');
          result[0].should.have.property('id');
          result[0].id.should.equal(4);
          result[0].should.have.property('column_1');
          result[0].column_1.should.equal('value4');
          result[0].should.have.property('column_2');
          result[0].column_2.should.equal(4);
          done();
        });
    });

    it('should update an example', (done) => {
      const update = {
        column_1: 'value5',
        column_2: 5,
      };

      Example.updateExample(1, update)
        .then(() => Example.getExampleById(1))
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(1);
          result[0].should.be.a('object');
          result[0].should.have.property('id');
          result[0].id.should.equal(1);
          result[0].should.have.property('column_1');
          result[0].column_1.should.equal('value5');
          result[0].should.have.property('column_2');
          result[0].column_2.should.equal(5);
          done();
        });
    });

    it('should delete a single example', (done) => {
      Example.deleteExample(1)
        .then(() => Example.getAllExample())
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(2);
          done();
        });
    });
  });

  describe('User', () => {
    it('should return a single user with id', (done) => {
      User.getUserById(1)
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(1);
          result[0].should.be.a('object');
          result[0].should.have.property('name');
          result[0].name.should.equal('Testy McTestface');
          result[0].should.have.property('oauth_id');
          result[0].oauth_id.should.equal(12345);
          done();
        });
    });

    it('should return a single user with oauth_id', (done) => {
      User.getUserByOAuthID(12345)
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(1);
          result[0].should.be.a('object');
          result[0].should.have.property('name');
          result[0].name.should.equal('Testy McTestface');
          result[0].should.have.property('oauth_id');
          result[0].oauth_id.should.equal(12345);
          done();
        });
    });

    it('should add a user', (done) => {
      const newUser = {
        oauth_id: 69696,
        name: 'Jorma Teras',
      };

      User.createUser(newUser)
        .then(id => User.getUserById(id))
        .then(result => {
          result.should.be.a('array')
          result.length.should.equal(1);
          result[0].should.be.a('object');
          result[0].should.have.property('name');
          result[0].name.should.equal('Jorma Teras');
          result[0].should.have.property('oauth_id');
          result[0].oauth_id.should.equal(69696);
          done();
        });
    });
  });
});
/* eslint-enable */
