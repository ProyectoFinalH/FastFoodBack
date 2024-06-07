const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOrderConfirmationEmail = (to, orderDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Order Confirmation',
    text: `Thank you for your order!\n\n${orderDetails}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = {
  sendOrderConfirmationEmail
};

