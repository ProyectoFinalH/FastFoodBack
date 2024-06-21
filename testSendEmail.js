require('dotenv').config(); // Asegúrate de cargar las variables de entorno

const { sendOrderConfirmationEmail } = require('./src/config/mailer');

const testSendOrderConfirmationEmail = async () => {
  const to = 'miller7villa@gmail.com'; // Reemplaza con la dirección de correo electrónico de destino
  const orderDetails = `
    Order ID: 12345
    Total Price: $30.00
    Items:
    - Product ID: 1, Quantity: 2
    - Product ID: 2, Quantity: 1
  `;

  try {
    await sendOrderConfirmationEmail(to, orderDetails);
    console.log('Test email sent successfully.');
  } catch (error) {
    console.error('Error sending test email:', error);
  }
};

testSendOrderConfirmationEmail();

