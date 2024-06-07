const knex = require('../../db/knex');
const { sendOrderConfirmationEmail } = require('../../config/mailer');

exports.createOrderHandler = async (req, res) => {
  const { user_id, restaurant_id, orderItems } = req.body;
  const trx = await knex.transaction();
  try {
    const [orderId] = await trx('orders')
      .insert({
        user_id,
        restaurant_id,
        total_price: orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      })
      .returning('id');

    const orderItemsData = orderItems.map(item => ({
      order_id: orderId,
      menuitem_id: item.menuitem_id,
      quantity: item.quantity,
      price: item.price
    }));

    await trx('orderitems').insert(orderItemsData);
    await trx.commit();

    // Obtener detalles del usuario
    const user = await knex('users').where({ id: user_id }).first();

    // Enviar correo de confirmación
    const orderDetails = `Order ID: ${orderId}\nTotal Price: ${orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}`;
    sendOrderConfirmationEmail(user.email, orderDetails);

    res.status(201).json({ orderId });
  } catch (error) {
    await trx.rollback();
    res.status(500).json({ error: error.message });
  }
};

