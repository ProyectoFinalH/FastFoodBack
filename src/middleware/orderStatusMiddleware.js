const db = require('../db/knex');
const { sendOrderConfirmationEmail, sendOrderRejectionEmail } = require('../config/mailer');

const checkOrderStatusAndSendEmail = async () => {
  try {
    // Obtener órdenes con statusorder_id 2 (aprobadas) que aún no han enviado correo
    const approvedOrders = await db('orders')
      .where({ statusorder_id: 2, email_sent: false });

    // Enviar correos para las órdenes aprobadas
    for (const order of approvedOrders) {
      const user = await db('users').where({ id: order.user_id }).first();
      const items = JSON.parse(order.items);
      const orderDetails = {
        total_price: order.total_price,
        items: items.map(item => ({
          product_name: item.name,
          price: parseFloat(item.price),
          quantity: item.cont
        }))
      };

      await sendOrderConfirmationEmail(user.email, user.username, orderDetails);
      await db('orders').where({ id: order.id }).update({ email_sent: true });
      console.log(`Email sent for order ${order.id}`);
    }

    // Hacer lo mismo para las órdenes rechazadas (statusorder_id 3)
    const rejectedOrders = await db('orders')
      .where({ statusorder_id: 3, email_sent: false });

    for (const order of rejectedOrders) {
      const user = await db('users').where({ id: order.user_id }).first();
      await sendOrderRejectionEmail(user.email, user.username);
      await db('orders').where({ id: order.id }).update({ email_sent: true });
      console.log(`Email sent for rejected order ${order.id}`);
    }
  } catch (error) {
    console.error('Error checking order status and sending emails:', error);
  }
};

module.exports = { checkOrderStatusAndSendEmail };
