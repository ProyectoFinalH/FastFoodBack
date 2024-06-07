const { Router } = require('express');
const { createOrderHandler } = require('../handlers/ordersHandler/createOrder');
const { getOrderByIdHandler } = require('../handlers/ordersHandler/getOrderById');
const { updateOrderHandler } = require('../handlers/ordersHandler/updateOrder');
const { deleteOrderHandler } = require('../handlers/ordersHandler/deleteOrder');
const { getOrdersByUserIdHandler } = require('../handlers/ordersHandler/getOrderByUserId');

const orderRoutes = Router();

orderRoutes.post('/', createOrderHandler);
orderRoutes.get('/:id', getOrderByIdHandler);
orderRoutes.put('/:id', updateOrderHandler);
orderRoutes.delete('/:id', deleteOrderHandler);
orderRoutes.get('/user/:user_id', getOrdersByUserIdHandler);

module.exports = orderRoutes;



