//const knex = require('knex');
//const config = require('../db/knexfile');

//const environment = process.env.NODE_ENV || 'development';
//const db = knex(config[environment]);

//module.exports = db;

const knex = require('knex');
const config = require('../db/knexfile');

const db = knex(config.development);

module.exports = db;

