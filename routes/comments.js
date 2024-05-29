const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// Get all comments for a restaurant
router.get('/restaurant/:restaurant_id', async (req, res) => {
  const { restaurant_id } = req.params;
  try {
    const comments = await knex('comments').where({ restaurant_id }).select('*');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new comment
router.post('/', async (req, res) => {
  const { user_id, restaurant_id, content } = req.body;
  try {
    const newComment = await knex('comments').insert({ user_id, restaurant_id, content });
    res.status(201).json({ id: newComment[0], user_id, restaurant_id, content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
