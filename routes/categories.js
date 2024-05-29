const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const { ensureAuthenticated } = require('../middleware/auth');

// Obtener todas las categorías (accesible para todos los usuarios autenticados)
router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const categories = await knex('categories').select('*');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
