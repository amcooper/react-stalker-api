const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

module.exports = knex;

// module.exports = {
//   development: {
// 		client: 'pg',
// 		connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
// 		seeds: {
//       directory: __dirname + '/seeds/development'
//     },
// 		debug: true
// 	},
// 	production: {
// 		client: 'pg',
// 		connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
// 		seeds: {
//       directory: __dirname + '/seeds/production'
//     },
// 		debug: true
// 	},
// 	test: {
// 		client: 'pg',
// 		connection: 'postgres://localhost:5432/react_stalker_test',
// 		seeds: {
//       directory: __dirname + '/seeds/test'
//     }
// 	}
// }

