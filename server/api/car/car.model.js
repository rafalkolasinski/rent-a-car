'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var CarSchema = new Schema({
  brand: String,
  model: String,
  class: String,
  bodyStyle: String,
  fuelOptions: String,
  seating: Number,
  price: { type: Number, min: 0.01, max: 200 },
  isBooked: Boolean,
  isAvailable: Boolean,
  bookingDate: Date
});

module.exports = mongoose.model('Car', CarSchema);