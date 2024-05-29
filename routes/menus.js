const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const { ensureAuthenticated, ensureAdmin } = require('../middleware/auth');

// Obtener todos los menús de un restaurante (accesible para todos los usuarios autenticados)
router.get('/restaurant/:restaurant_id', ensureAuthenticated, async (req, res) => {
  const { restaurant_id } = req.params;
  try {
    const menus = await knex('menus').where({ restaurant_id }).select('*');
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un menú por ID (accesible para todos los usuarios autenticados)
router.get('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const menu = await knex('menus').where({ id: req.params.id }).first();
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agregar un nuevo menú (solo accesible para administradores)
router.post('/', ensureAuthenticated, ensureAdmin, async (req, res) => {
  const { restaurant_id, name } = req.body;
  try {
    const newMenu = await knex('menus').insert({ restaurant_id, name }).returning('*');
    res.status(201).json(newMenu[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un menú por ID (solo accesible para administradores)
router.put('/:id', ensureAuthenticated, ensureAdmin, async (req, res) => {
  const { name } = req.body;
  try {
    const updatedRows = await knex('menus').where({ id: req.params.id }).update({ name });
    if (!updatedRows) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.json({ message: 'Menu updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un menú por ID (solo accesible para administradores)
router.delete('/:id', ensureAuthenticated, ensureAdmin, async (req, res) => {
  try {
    const deletedRows = await knex('menus').where({ id: req.params.id }).del();
    if (!deletedRows) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.json({ message: 'Menu deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
