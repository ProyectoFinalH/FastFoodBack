require('dotenv').config();
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  }
});

knex.raw('SELECT 1')
  .then(() => {
    console.log('Database connection established successfully.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  });
