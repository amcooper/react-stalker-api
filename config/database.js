const sqlite3 = require( 'sqlite3' ).verbose();
const db = new sqlite3.Database( './react-stalker-api.sqlite3' );

module.exports = db;

// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     database : 'react-stalker-api'
//   }	
// });

// module.exports = {
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     database : 'react-stalker-api'
//   }	
// };

// const { Pool } = require ('pg');

// const pool = new Pool({
//   user: 'adamcooper',
//   host: '127.0.0.1',
//   database: 'react-stalker-api',
//   // password: 'secretpassword'
// });

// module.exports = {
//   query: (text, params, callback) => {
// 	return pool.query(text, params, callback);
// 	}
// };
