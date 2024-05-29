const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      database: 'fast_food_app',
      port: 5432,
      ssl: false
    }
  });
  
  knex.raw('SELECT 1')
    .then(() => {
      console.log('Knex connection established successfully.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Knex connection error:', err);
      process.exit(1);
    });
  