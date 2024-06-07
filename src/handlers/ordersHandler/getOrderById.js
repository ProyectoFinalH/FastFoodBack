const { getOrderById } = require('../../controllers/ordersController/ordercontroller');

const getOrderByIdHandler = async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOrderByIdHandler,
};
