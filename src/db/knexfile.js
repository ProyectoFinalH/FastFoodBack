require("dotenv").config()
const{DB_USER,DB_PASSWORD,DB_HOST,DB_NAME,DB_PORT}=process.env;

module.exports = {
  
  development: {
    client: 'postgresql',
    connection: {
      host: DB_HOST||'localhost',  
      user: DB_USER||'postgres',
      password: DB_PASSWORD||'admin',
      database: DB_NAME||'fast_food_app',
      port: DB_PORT||'5432',
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
