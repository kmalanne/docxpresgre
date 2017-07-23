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
    it('should return all examples', async () => {
      const result = await Example.getExamples();
      result.should.be.a('array');
      result.length.should.equal(3);
      result[1].should.be.a('object');
      result[1].should.have.property('id');
      result[1].should.have.property('column_1');
      result[1].should.have.property('column_2');
    });

    it('should return a single example with id', async () => {
      const result = await Example.getExampleById(1);
      result.should.be.a('array')
      result.length.should.equal(1);
      result[0].should.be.a('object');
      result[0].should.have.property('id');
      result[0].id.should.equal(1);
      result[0].should.have.property('column_1');
      result[0].column_1.should.equal('value1');
      result[0].should.have.property('column_2');
      result[0].column_2.should.equal(1);
    });

    it('should add an example', async () => {
      const newExample = {
        id: 4,
        column_1: 'value4',
        column_2: 4,
      };

      const id = await Example.createExample(newExample);
      const result = await Example.getExampleById(id);
      result.should.be.a('array')
      result.length.should.equal(1);
      result[0].should.be.a('object');
      result[0].should.have.property('id');
      result[0].id.should.equal(4);
      result[0].should.have.property('column_1');
      result[0].column_1.should.equal('value4');
      result[0].should.have.property('column_2');
      result[0].column_2.should.equal(4);
    });

    it('should update an example', async () => {
      const update = {
        column_1: 'value5',
        column_2: 5,
      };

      const id = await Example.updateExample(1, update);
      const result = await Example.getExampleById(1);
      result.should.be.a('array')
      result.length.should.equal(1);
      result[0].should.be.a('object');
      result[0].should.have.property('id');
      result[0].id.should.equal(1);
      result[0].should.have.property('column_1');
      result[0].column_1.should.equal('value5');
      result[0].should.have.property('column_2');
      result[0].column_2.should.equal(5);
    });

    it('should delete a single example', async () => {
      await Example.deleteExample(1);
      const result = await Example.getExamples();
      result.should.be.a('array')
      result.length.should.equal(2);
    });
  });

  describe('User', () => {
    it('should return a single user with id', async () => {
      const result = await User.getUserById(1);
      result.should.be.a('array')
      result.length.should.equal(1);
      result[0].should.be.a('object');
      result[0].should.have.property('name');
      result[0].name.should.equal('Testy McTestface');
      result[0].should.have.property('email');
      result[0].email.should.equal('test@test.com');
    });

    it('should return a single user with email', async () => {
      const result = await User.getUserByEmail('test@test.com');
      result.should.be.a('array')
      result.length.should.equal(1);
      result[0].should.be.a('object');
      result[0].should.have.property('name');
      result[0].name.should.equal('Testy McTestface');
      result[0].should.have.property('email');
      result[0].email.should.equal('test@test.com');
    });

    it('should add a user', async () => {
      const newUser = {
        id: 2,
        email: 'jorma@maansiirtofirma.fi',
        name: 'Jorma Teras',
      };

      const id = await User.createUser(newUser);
      const result = await User.getUserById(id);
      result.should.be.a('array')
      result.length.should.equal(1);
      result[0].should.be.a('object');
      result[0].should.have.property('name');
      result[0].name.should.equal('Jorma Teras');
      result[0].should.have.property('email');
      result[0].email.should.equal('jorma@maansiirtofirma.fi');
    });
  });
});
/* eslint-enable */
