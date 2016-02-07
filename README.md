# Rent-A-Car

The Rent-A-Car project is based on MEAN Stack that contains 4 different elements - each using JavaScript to run itself:

- [MongoDB](https://www.mongodb.org/) - non-relational database.
- [ExpressJS](http://expressjs.com/) - Node framework to ease usage of server calls.
- [AngularJS](https://angularjs.org/) - frontend JS library used to create SPA applicatons.
- [Node](https://nodejs.org/) - server-side JS environment based on V8.

Rent-A-Car app allows user to search through cars available for renting, rent selected car and use online payment handled by DotPay API to authorize and pay for car renting.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
