const db = require('../../db/knex');
const { sendOrderConfirmationEmail } = require('../../config/mailer');


const createOrder = async ({ restaurant_id, user_id, total_price, items }) => {
  const newOrder = {
    restaurant_id,
    user_id,
    total_price,
    //items,
    items:JSON.stringify(items),//cambiar aca cuando mandas data usando postman
    statusorder_id:1,
    active: true,
  };

  try {

    const [id] = await db('orders').insert(newOrder).returning('id');
    const record = await db('orders').where(id).first();

    if (record) {
      const orderDetails = `
        Order ID: ${record.id}
        Total Price: ${total_price}
        Items: ${JSON.stringify(items, null, 2)}
      `;

      // Enviar correo de confirmación de pedido
      //await sendOrderConfirmationEmail(email, orderDetails);
      //console.log('Order confirmation email sent.');

      return record;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error creating order:', error);
    return false;
  }
};

module.exports = {
  createOrder
};
