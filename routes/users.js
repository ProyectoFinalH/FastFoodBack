const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await knex('users').select('*');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
