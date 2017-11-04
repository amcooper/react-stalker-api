const { Pool } = require ('pg');

const pool = new Pool({
  user: 'adamcooper',
  host: '127.0.0.1',
  database: 'react_stalker',
  // password: 'secretpassword'
});

// module.exports = {
//   query: (text, params, callback) => {
// 	return pool.query(text, params, callback);
// 	}
// };

module.exports = pool;
