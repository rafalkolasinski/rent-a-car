'use strict';

var app = require('../..');
var request = require('supertest');

var newCar;

describe('Car API:', function() {

  describe('GET /api/cars', function() {
    var cars;

    beforeEach(function(done) {
      request(app)
        .get('/api/cars')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          cars = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cars.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/cars', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cars')
        .send({
          name: 'New Car',
          info: 'This is the brand new car!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newCar = res.body;
          done();
        });
    });

    it('should respond with the newly created car', function() {
      newCar.name.should.equal('New Car');
      newCar.info.should.equal('This is the brand new car!!!');
    });

  });

  describe('GET /api/cars/:id', function() {
    var car;

    beforeEach(function(done) {
      request(app)
        .get('/api/cars/' + newCar._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          car = res.body;
          done();
        });
    });

    afterEach(function() {
      car = {};
    });

    it('should respond with the requested car', function() {
      car.name.should.equal('New Car');
      car.info.should.equal('This is the brand new car!!!');
    });

  });

  describe('PUT /api/cars/:id', function() {
    var updatedCar

    beforeEach(function(done) {
      request(app)
        .put('/api/cars/' + newCar._id)
        .send({
          name: 'Updated Car',
          info: 'This is the updated car!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCar = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCar = {};
    });

    it('should respond with the updated car', function() {
      updatedCar.name.should.equal('Updated Car');
      updatedCar.info.should.equal('This is the updated car!!!');
    });

  });

  describe('DELETE /api/cars/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/cars/' + newCar._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when car does not exist', function(done) {
      request(app)
        .delete('/api/cars/' + newCar._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
