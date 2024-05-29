module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      database: 'fast_food_app',
      port: 5432,
      ssl: false // Asegúrate de que SSL esté deshabilitado si no lo necesitas
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
