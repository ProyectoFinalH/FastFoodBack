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

const sendOrderConfirmationEmail = async (to, orderDetails) => {
  const transporter = await createTransporter();
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Order Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4CAF50;">Order Confirmation</h2>
        <p>Thank you for your order!</p>
        <h3>Order Details</h3>
        <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${orderDetails}</pre>
        <p style="margin-top: 20px;">If you have any questions, feel free to <a href="mailto:${process.env.EMAIL_USER}">contact us</a>.</p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
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
      console.error('Error sending welcome email:', error);
    } else {
      console.log('Welcome email sent:', info.response);
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
          console.error('Error sending user update email:', error);
      } else {
          console.log('User update email sent:', info.response);
      }
  });
};

module.exports = {
  sendOrderConfirmationEmail,
  sendWelcomeEmail,
  sendUserUpdateEmail
};
