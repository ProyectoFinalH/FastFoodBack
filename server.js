require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/googleAuth'); // Requiere el archivo de configuración de passport
const knex = require('./db/knex');
const app = express();
const cors = require('cors'); 

// Middleware para evitar la advertencia de ngrok
app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

app.use(cors());

app.use(express.json());
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/googleAuth');

// Rutas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const restaurantRoutes = require('./routes/restaurants');
const menuRoutes = require('./routes/menus');
const menuItemRoutes = require('./routes/menuitems');
const orderRoutes = require('./routes/orders');
const commentRoutes = require('./routes/comments');
const uploadRoutes = require('./routes/upload');
const categoryRoutes = require('./routes/categories');

app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/menuitems', menuItemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/categories', categoryRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
