require("dotenv").config();
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: DB_HOST || 'localhost',
      user: DB_USER || 'postgres',
      password: DB_PASSWORD || 'Temporaltemporal1',
      database: DB_NAME || 'fast_food_app',
      port: DB_PORT || '5432',
      ssl: false
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      host: 'monorail.proxy.rlwy.net',
      port: 12776,
      user: 'postgres',
      password: 'XpuflCbtPuJIJFwMurEMgUESzeaspsHw',
      database: 'railway',
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
    },
  }
};

