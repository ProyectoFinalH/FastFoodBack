const express = require("express");
const session = require('express-session');
const passport = require('./config/googleAuth'); // Asegúrate de que la ruta sea correcta
const morgan = require("morgan");
const mainRoutes = require("./routes/mainRoutes");
const itemsMenuRoutes = require("./routes/itemsMenuRoutes"); // Asegúrate de que la ruta sea correcta
const userRoutes = require("./routes/userRoutes"); // Importa las rutas de usuario
const commentRoutes = require("./routes/commentRoutes"); // Importa las rutas de comentarios
const cors = require("cors");
const cron = require('node-cron');
const { checkOrderStatusAndSendEmail } = require('./middleware/orderStatusMiddleware'); // Importa el middleware
const app = express();
const path = require('path');

// Middlewares

// Middleware para evitar la advertencia de ngrok
app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

app.use(cors()); // Políticas de seguridad CORS
app.use(express.json()); // Para que el server pueda leer JSON
app.use(morgan("dev")); // Para ver mensajes de los req y status en la consola

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/googleAuth');

app.use(mainRoutes); // Aquí inicia el router principal
app.use('/api/menuitems', itemsMenuRoutes); // Ruta para manejar ítems del menú
app.use('/api/users', userRoutes); // Ruta para manejar usuarios y autenticación
app.use('/api/comments', commentRoutes); // Ruta para manejar comentarios

app.use((req, res, next) => {// Para crear la preferencia de Mercado pago
	res.setHeader(
	  'Content-Security-Policy',
	  "script-src 'self' 'https://www.mercadopago.com.ar';"
	);
	next();
});

// Programación del cron job para verificar el estado de las órdenes y enviar correos
cron.schedule('*/30 * * * * *', async () => {
  await checkOrderStatusAndSendEmail();
});

module.exports = app;
