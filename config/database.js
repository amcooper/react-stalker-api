module.exports = {
  development: {
		client: 'pg',
		connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
		seeds: {
      directory: __dirname + '/db/seeds/development'
    },
		debug: true
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
		seeds: {
      directory: __dirname + '/db/seeds/development'
    },
		debug: true
	},
	test: {
		client: 'pg',
		connection: 'postgres://localhost:5432/react_stalker_test',
		seeds: {
      directory: __dirname + '/db/seeds/development'
    },
		debug: true		
	}
}

