module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Temporaltemporal1',
      database: 'fast_food_app',
      port: 5432,
      ssl: false // Asegúrate de que SSL esté deshabilitado si no lo necesitas
    },
    migrations: {
      directory: '../db/migrations',
    },
    seeds: {
      directory: '../db/seeds',
    },
  },
};
