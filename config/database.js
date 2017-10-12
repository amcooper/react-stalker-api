const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database : 'react-stalker-api'
  }	
});

module.exports = knex;