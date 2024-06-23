const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // URI de redirección
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

async function createTransporter() {
  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  return transporter;
}

const sendOrderConfirmationEmail = async (to, username, orderDetails) => {
  const itemsHtml = orderDetails.items.map(item => `
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">${item.product_name}</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity}</td>
      <td style="padding: 8px; border: 1px solid #ddd;">$${item.price.toFixed(2)}</td>
      <td style="padding: 8px; border: 1px solid #ddd;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Confirmación de Pedido',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4CAF50;">Confirmación de Pedido para ${username}</h2>
        <p>¡Gracias por tu pedido!</p>
        <h3>Detalles del Pedido</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 8px; border: 1px solid #ddd;">Producto</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Cantidad</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Precio</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
        <p style="margin-top: 20px;"><strong>Precio Total:</strong> $${orderDetails.total_price.toFixed(2)}</p>
        <p style="margin-top: 20px;">Si tienes alguna pregunta, no dudes en <a href="mailto:${process.env.EMAIL_USER}">contactarnos</a>.</p>
      </div>
    `
  };

  const transporter = await createTransporter();
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

const sendWelcomeEmail = async (to, username) => {
  const transporter = await createTransporter();
  const imageUrl = 'https://res.cloudinary.com/dw5j9zsag/image/upload/v1718565097/hsnv7ezxocvcdbwl3ed3.png';
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Bienvenido a Nuestra Aplicación',
    text: `Hola ${username}, bienvenido a nuestra aplicación.`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #000000;">Hola <strong>${username}</strong>, bienvenido a nuestra aplicación.</h2>
        <img src="${imageUrl}" alt="Welcome" style="width: 100%; max-width: 1200px; height: auto;">
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo de bienvenida:', error);
    } else {
      console.log('Correo de bienvenida enviado:', info.response);
    }
  });
};

const sendUserUpdateEmail = async (to, username) => {
  const transporter = await createTransporter();
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Actualización de Datos de Usuario',
    text: `Hola ${username}, tus datos han sido actualizados en nuestra aplicación.`,
    html: `<p>Hola <strong>${username}</strong>, tus datos han sido actualizados en nuestra aplicación.</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo de actualización de datos de usuario:', error);
    } else {
      console.log('Correo de actualización de datos de usuario enviado:', info.response);
    }
  });
};

module.exports = {
  sendOrderConfirmationEmail,
  sendWelcomeEmail,
  sendUserUpdateEmail
};
