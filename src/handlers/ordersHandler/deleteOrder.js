const { deleteOrder } = require('../../controllers/ordersController/ordercontroller');

const deleteOrderHandler = async (req, res) => {
  try {
    const result = await deleteOrder(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteOrderHandler,
};
