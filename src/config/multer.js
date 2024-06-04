// src/config/multer.js
const multer = require('multer');
const { storage } = require('./cloudinary');

const parser = multer({ storage });

module.exports = parser;


