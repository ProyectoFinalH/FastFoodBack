const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

client.connect()
  .then(() => {
    console.log('Connected to the database successfully.');
    return client.end();
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });
