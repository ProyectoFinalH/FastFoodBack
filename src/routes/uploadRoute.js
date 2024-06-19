const express = require('express');
const router = express.Router();
const { uploadImage } = require('../controllers/uploadController/uploadimages');
const parser = require('../config/multerConfig'); // Asegúrate de que la ruta sea correcta

router.post('/upload', parser.single('image'), uploadImage);

module.exports = router;
