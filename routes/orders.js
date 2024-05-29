const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// Get all orders for a user
router.get('/user/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const orders = await knex('orders').where({ user_id }).select('*');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new order
router.post('/', async (req, res) => {
  const { user_id, restaurant_id, total_price, items } = req.body;
  try {
    const newOrder = await knex('orders').insert({ user_id, restaurant_id, total_price }).returning('id');
    const orderId = newOrder[0];
    for (const item of items) {
      await knex('orderitems').insert({ order_id: orderId, menuitem_id: item.menuitem_id, quantity: item.quantity, price: item.price });
    }
    res.status(201).json({ id: orderId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
