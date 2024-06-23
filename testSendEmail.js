require('dotenv').config(); // Asegúrate de cargar las variables de entorno

const { sendOrderConfirmationEmail } = require('./src/config/mailer');

const testSendOrderConfirmationEmail = async () => {
  const to = 'millerj5villa@gmail.com'; // Reemplaza con la dirección de correo electrónico de destino
  const customerName = 'Miller Villamizar'; // Nombre del cliente
  const orderDetails = {
    total_price: 30.00,
    items: [
      { product_name: 'Hamburguesa', price: 10.00, quantity: 2 },
      { product_name: 'Papas Fritas', price: 5.00, quantity: 1 },
      { product_name: 'Refresco', price: 2.50, quantity: 2 }
    ]
  };

  try {
    await sendOrderConfirmationEmail(to, customerName, orderDetails);
    console.log('Correo de prueba enviado exitosamente.');
  } catch (error) {
    console.error('Error al enviar el correo de prueba:', error);
  }
};

testSendOrderConfirmationEmail();

