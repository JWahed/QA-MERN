/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */

const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const Names = require('../model/names.schema');
const server = require('../index');

chai.use(chaiHTTP);
const { expect } = chai;

describe('Testing Names Endpoints', () => {
  let v;
  let id;
  let createdAt;
  let updatedAt;

  beforeEach(async () => {
    try {
      await Names.deleteMany({});
      const testName = await Names.create({
        name: 'Test Name',
      });
      v = testName.__v;
      id = testName._id;
      createdAt = testName.createdAt;
      updatedAt = testName.updatedAt;
    } catch (err) {
      console.error(err);
    }
  });

  it('should return \'Hello, my name is Jakob!\'', (done) => {
    chai.request(server).get('/').end((err, res) => {
      expect(err).to.be.null;
      expect(res.status).to.equal(200);
      expect('Hello, my name is Jakob!');

      return done();
    });
  });

  it('should get all names', (done) => {
    chai.request(server).get('/all').end((err, res) => {
      expect(err).to.be.null;
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([{
        __v: v,
        _id: id.toString(),
        name: 'Test Name',
        createdAt: createdAt.toISOString(),
        updatedAt: updatedAt.toISOString(),
      }]);

      return done();
    });
  });

  it('should get name by id', (done) => {
    chai.request(server).get(`/get/${id}`).end((err, res) => {
      expect(err).to.be.null;
      expect(res.status).to.equal(200);
      expect(res.body).to.include({
        __v: v,
        _id: id.toString(),
        name: 'Test Name',
        createdAt: createdAt.toISOString(),
        updatedAt: updatedAt.toISOString(),
      });

      return done();
    });
  });

  it('should create a new name', (done) => {
    const testName2 = { name: 'Jim Jam' };
    chai.request(server).post('/post').send(testName2).end((err, res) => {
      expect(err).to.be.null;
      expect(res.status).to.equal(201);
      expect(res.body).to.include({
        __v: v,
        name: 'Jim Jam',
      });
      expect(res.body._id).to.not.be.null;

      return done();
    });
  });

  it('should update an existing name', (done) => {
    chai.request(server).patch(`/updateName/${id}`).query({ name: 'Amy' }).end((err, res) => {
      expect(err).to.be.null;
      expect(res.status).to.equal(200);
      expect(res.body).to.include({
        _id: id.toString(),
        name: 'Test Name',
      });

      return done();
    });
  });

  it('should delete an existing name', (done) => {
    chai.request(server).delete(`/delete/${id}`).end((err, res) => {
      expect(res.status).to.equal(204);
      expect(err).to.be.null;

      return done();
    });
  });
});
