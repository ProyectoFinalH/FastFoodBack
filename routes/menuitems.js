const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const { ensureAuthenticated, ensureAdmin } = require('../middleware/auth');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

// Obtener todos los ítems del menú para un menú específico (accesible para todos los usuarios autenticados)
router.get('/menu/:menu_id', ensureAuthenticated, async (req, res) => {
  const { menu_id } = req.params;
  try {
    const menuItems = await knex('menuitems').where({ menu_id }).select('*');
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un ítem del menú por ID (accesible para todos los usuarios autenticados)
router.get('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const menuItem = await knex('menuitems').where({ id: req.params.id }).first();
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agregar un nuevo ítem al menú (solo accesible para administradores)
router.post('/', ensureAuthenticated, ensureAdmin, upload.single('image'), async (req, res) => {
  const { name, description, price, menu_id, category_id } = req.body;
  try {
    const newMenuItem = await knex('menuitems').insert({
      name,
      description,
      price,
      menu_id,
      category_id,
      image_url: req.file.path
    }).returning('id');
    res.status(201).json({ id: newMenuItem[0], name, description, price, menu_id, category_id, image_url: req.file.path });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un ítem del menú por ID (solo accesible para administradores)
router.put('/:id', ensureAuthenticated, ensureAdmin, upload.single('image'), async (req, res) => {
  const { name, description, price, menu_id, category_id } = req.body;
  const updateData = { name, description, price, menu_id, category_id };
  if (req.file) {
    updateData.image_url = req.file.path;
  }
  try {
    const updatedRows = await knex('menuitems').where({ id: req.params.id }).update(updateData);
    if (!updatedRows) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un ítem del menú por ID (solo accesible para administradores)
router.delete('/:id', ensureAuthenticated, ensureAdmin, async (req, res) => {
  try {
    const deletedRows = await knex('menuitems').where({ id: req.params.id }).del();
    if (!deletedRows) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
