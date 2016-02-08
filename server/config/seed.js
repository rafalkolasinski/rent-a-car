/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Car = require('../api/car/car.model');
var User = require('../api/user/user.model');


Car.find({}).removeAsync()
	.then(function() {
		Car.create(
			{
				brand: 'Porsche',
			  model: 'Cayman GT4',
			  class: 'Sports/GT',
			  bodyStyle: 'Coupe',
			  fuelOptions: 'Petrol',
			  seating: 2,
			  price: 110,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Citroen',
			  model: 'DS5',
			  class: 'Mid-size Family',
			  bodyStyle: 'Hatchback',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 25,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Toyota',
			  model: 'Camry',
			  class: 'Large Family',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Petrol, Hybrid',
			  seating: 5,
			  price: 35,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Ford',
			  model: 'Focus ST',
			  class: 'Sports/GT',
			  bodyStyle: 'Hatchback',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 25,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Volkswagen',
			  model: 'CC',
			  class: 'Compact Luxury',
			  bodyStyle: 'Coupe',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 40,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Volkswagen',
			  model: 'Polo Hatchback',
			  class: 'Sports/GT',
			  bodyStyle: 'Hatchback',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 40,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mercedes-Benz',
			  model: 'GLE450 Coupe',
			  class: 'Large Luxury Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 50,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mercedes-Benz',
			  model: 'AMG GT',
			  class: 'Sports/GT',
			  bodyStyle: 'Coupe',
			  fuelOptions: 'Petrol',
			  seating: 2,
			  price: 90,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mercedes-Benz',
			  model: 'C250 Coupe',
			  class: 'Mid-size Luxury',
			  bodyStyle: 'Coupe',
			  fuelOptions: 'Petrol',
			  seating: 4,
			  price: 60,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mercedes-Benz',
			  model: 'E300 Sedan',
			  class: 'Mid-size Luxury',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Diesel Hybrid',
			  seating: 5,
			  price: 55,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mercedes-Benz',
			  model: 'SL 350',
			  class: 'Sports/GT',
			  bodyStyle: 'Convertible',
			  fuelOptions: 'Petrol',
			  seating: 2,
			  price: 60,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mercedes-Benz',
			  model: 'A250',
			  class: 'Small Luxury',
			  bodyStyle: 'Hatchback',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 55,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Volvo',
			  model: 'XC90',
			  class: 'Large Luxury Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Hybrid',
			  seating: 7,
			  price: 55,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mazda',
			  model: 'CX-9',
			  class: 'Large Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Petrol',
			  seating: 7,
			  price: 55,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mazda',
			  model: 'MX-5',
			  class: 'Sports/GT',
			  bodyStyle: 'Convertible',
			  fuelOptions: 'Petrol',
			  seating: 2,
			  price: 60,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mazda',
			  model: '5',
			  class: 'Mid-size Utility',
			  bodyStyle: 'MPV',
			  fuelOptions: 'Petrol',
			  seating: 7,
			  price: 50,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mitsubishi',
			  model: 'Lancer 2015',
			  class: 'Mid-size Family',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 70,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mitsubishi',
			  model: 'Pajero',
			  class: 'Large Luxury Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Petrol',
			  seating: 7,
			  price: 65,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mitsubishi',
			  model: 'Triton',
			  class: 'Large Utility',
			  bodyStyle: 'Pickup Truck',
			  fuelOptions: 'Diesel',
			  seating: 5,
			  price: 65,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Mitsubishi',
			  model: 'ASX',
			  class: 'Mid-size Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Petrol',
			  seating: 7,
			  price: 65,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'BMW',
			  model: '528i',
			  class: 'Mid-size Luxury',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 60,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'BMW',
			  model: '318i',
			  class: 'Compact Luxury',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 60,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'BMW',
			  model: '428i',
			  class: 'Compact Luxury',
			  bodyStyle: 'Convertible',
			  fuelOptions: 'Petrol',
			  seating: 4,
			  price: 65,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'BMW',
			  model: '640i Gran Coupe',
			  class: 'Mid-size Luxury',
			  bodyStyle: 'Gran Coupe',
			  fuelOptions: 'Petrol',
			  seating: 4,
			  price: 75,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'BMW',
			  model: 'X5',
			  class: 'Large Luxury Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Diesel, Petrol',
			  seating: 7,
			  price: 70,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'BMW',
			  model: 'M4 Coupe',
			  class: 'Sports/GT',
			  bodyStyle: 'Coupe',
			  fuelOptions: 'Petrol',
			  seating: 4,
			  price: 75,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Audi',
			  model: 'A3',
			  class: 'Small Luxury',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 75,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Audi',
			  model: 'Q7',
			  class: 'Large Luxury Utility',
			  bodyStyle: 'SUV',
			  fuelOptions: 'Petrol',
			  seating: 7,
			  price: 75,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Audi',
			  model: 'A4',
			  class: 'Compact Luxury',
			  bodyStyle: 'Sedan',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 80,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Audi',
			  model: 'A7',
			  class: 'Mid-size Luxury',
			  bodyStyle: 'Hatchback',
			  fuelOptions: 'Petrol',
			  seating: 5,
			  price: 85,
			  isBooked: false,
			  isAvailable: true
			},
			{
				brand: 'Audi',
			  model: 'R8',
			  class: 'Sports/GT',
			  bodyStyle: 'Coupe',
			  fuelOptions: 'Petrol',
			  seating: 2,
			  price: 100,
			  isBooked: false,
			  isAvailable: true
			}

		);
	});

User.find({}).removeAsync()
	.then(function() {
		User.create(
			{
				provider: 'local',
				name: 'Test User',
				email: 'test@test.com',
				password: 'test'
			},
			{
				provider: 'local',
				role: 'admin',
				name: 'Admin',
				email: 'admin@admin.com',
				password: 'admin'
			}, function() {
				console.log('Finished populating users.');
			}
		)
	});