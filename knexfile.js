// Update with your config settings.
require( 'dotenv' ).load();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
    // connection: {
    //   database: 'react_stalker',
    //   user:     'adamcooper',
    //   // password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/development'
    }
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
    // connection: {
    //   database: 'react_stalker',
    //   user:     'adamcooper',
    //   // password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/staging'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/react_stalker',
    // connection: {
    //   database: 'react_stalker',
    //   user:     'adamcooper',
    //   // password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/production'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/react_stalker_test',
    // connection: {
    //   database: 'react_stalker',
    //   user:     'adamcooper',
    //   // password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/test'
    }
  }  

};
