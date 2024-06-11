require("dotenv").config();
const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'fast_food_app',
      port: process.env.DB_PORT || '5432',
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
      host: process.env.PGHOST || 'monorail.proxy.rlwy.net',
      port: process.env.PGPORT || 12776,
      user: process.env.PGUSER || 'postgres',
      password: process.env.PGPASSWORD || 'XpuflCbtPuJIJFwMurEMgUESzeaspsHw',
      database: process.env.PGDATABASE || 'railway',
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
