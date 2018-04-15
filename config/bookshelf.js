const database = require('./database');
// const database = require('./database')[NODE_ENV];
const knex = require('knex')(database);
module.exports = require('bookshelf')(knex);