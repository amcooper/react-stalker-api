// const database = require('./database');
const database = require('../knexfile')[process.env.NODE_ENV];
const knex = require('knex')(database);
module.exports = require('bookshelf')(knex);