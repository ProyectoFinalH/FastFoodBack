const knex = require('../../db/knex');
const { sendOrderConfirmationEmail } = require('../../config/mailer');

// Crear una nueva orden
exports.createOrder = async (req, res) => {
  const { user_id, restaurant_id, orderItems } = req.body;

  try {
    // Verificar que el usuario existe
    const user = await knex('users').where({ id: user_id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verificar que el restaurante existe
    const restaurant = await knex('restaurants').where({ id: restaurant_id }).first();
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const trx = await knex.transaction();
    try {
      const [orderIdObj] = await trx('orders')
        .insert({
          user_id,
          restaurant_id,
          total_price: orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
        })
        .returning('id');

      const orderId = orderIdObj.id || orderIdObj; // Obtener el id de manera segura

      const orderItemsData = orderItems.map(item => ({
        order_id: orderId,
        menuitem_id: item.menuitem_id,
        quantity: item.quantity,
        price: item.price
      }));

      await trx('orderitems').insert(orderItemsData);
      await trx.commit();

      // Enviar correo de confirmación
      const orderDetails = `Order ID: ${orderId}\nTotal Price: ${orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}`;
      sendOrderConfirmationEmail(user.email, orderDetails);

      res.status(201).json({ orderId });
    } catch (error) {
      await trx.rollback();
      console.error('Transaction error:', error);
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};
