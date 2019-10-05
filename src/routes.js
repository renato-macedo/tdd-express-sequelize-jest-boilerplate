const routes = require('express').Router();
const { User } = require('./app/models');

// Put your routes here

routes.post('/sessions', (req, res) => {
  res.send(200);
});
module.exports = routes;
