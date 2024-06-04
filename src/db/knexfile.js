require("dotenv").config()
const{DB_USER,DB_PASSWORD,DB_HOST,DB_NAME,DB_PORT}=process.env;

module.exports = {
  
  development: {
    client: 'postgresql',
    connection: {
      host: DB_HOST,  
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
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
