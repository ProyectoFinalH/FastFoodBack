const { getOrdersByUserId } = require('../../controllers/ordersController/ordercontroller');

const getOrdersByUserIdHandler = async (req, res) => {
  try {
    const orders = await getOrdersByUserId(req.params.user_id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOrdersByUserIdHandler,
};
