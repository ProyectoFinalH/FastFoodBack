const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const router = express.Router();
const upload = multer({ storage });
const { ensureAuthenticated, ensureAdmin } = require('../middleware/auth');

// Ruta para subir imágenes (solo accesible para administradores)
router.post('/', ensureAuthenticated, ensureAdmin, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({ url: req.file.path });
});

module.exports = router;
