const path = require('path');
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'test'
      ? path.resolve('.env.test')
      : path.resolve('.env'),
});

const express = require('express');

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;
