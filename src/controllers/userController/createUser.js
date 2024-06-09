const { findOrCreate } = require('../../utils/findOrCreate');
const { sendWelcomeEmail } = require('../../config/mailer');

const createUser = async ({ username, email, password }) => {
  const newUser = {
    username: username,
    email: email,
    password: password,
    active: true
  };
  
  const emailNewUser = {
    email: email
  };

  const { record, created } = await findOrCreate('users', emailNewUser, newUser);

  if (created) {
    // Enviar correo de bienvenida
    sendWelcomeEmail(email, username);
    return record;
  } else {
    return false;
  }
};

module.exports = { createUser };
