const { updateOrder } = require('../../controllers/ordersController/ordercontroller');

const updateOrderHandler = async (req, res) => {
  try {
    const result = await updateOrder(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateOrderHandler,
};
