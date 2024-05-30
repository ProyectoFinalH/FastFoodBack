const express=require("express");
const session = require('express-session');
const passport = require('./config/googleAuth'); // Requiere el archivo de configuración de passport
const morgan=require("morgan");
const mainRoutes=require("./routes/mainRoutes");
const cors=require("cors");
const app=express();

//Middlewares//

// Middleware para evitar la advertencia de ngrok
app.use((req, res, next) => {
   res.setHeader('ngrok-skip-browser-warning', 'true');
   next();
 });

app.use(cors());//politicas de seguridad cors

app.use(express.json());//para que el server pueda leer json

app.use(morgan("dev"));//para ver mensajes de los req y status en la consola

// app.use(session({
//    secret: process.env.JWT_SECRET,
//    resave: false,
//    saveUninitialized: false,
//  }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/googleAuth');


app.use(mainRoutes);//aqui inicia el router principal

module.exports=app;