const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const { ensureAuthenticated, ensureAdmin } = require('../middleware/auth');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

// Obtener todos los restaurantes (accesible para todos los usuarios autenticados)
router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const restaurants = await knex('restaurants').select('*');
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un restaurante por ID
router.get('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const restaurant = await knex('restaurants').where({ id: req.params.id }).first();
    if (!restaurant) {
      return res.status(404).json({ message:
        'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Agregar un nuevo restaurante (solo accesible para administradores)
  router.post('/', ensureAuthenticated, ensureAdmin, upload.single('image'), async (req, res) => {
    const { name, address, phone, description } = req.body;
    try {
      const newRestaurant = await knex('restaurants').insert({
        name,
        address,
        phone,
        description,
        image_url: req.file.path
      }).returning('id');
      res.status(201).json({ id: newRestaurant[0], name, address, phone, description, image_url: req.file.path });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar un restaurante por ID (solo accesible para administradores)
  router.put('/:id', ensureAuthenticated, ensureAdmin, upload.single('image'), async (req, res) => {
    const { name, address, phone, description } = req.body;
    const updateData = { name, address, phone, description };
    if (req.file) {
      updateData.image_url = req.file.path;
    }
    try {
      const updatedRows = await knex('restaurants').where({ id: req.params.id }).update(updateData);
      if (!updatedRows) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      res.json({ message: 'Restaurant updated' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Eliminar un restaurante por ID (solo accesible para administradores)
  router.delete('/:id', ensureAuthenticated, ensureAdmin, async (req, res) => {
    try {
      const deletedRows = await knex('restaurants').where({ id: req.params.id }).del();
      if (!deletedRows) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      res.json({ message: 'Restaurant deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;
  