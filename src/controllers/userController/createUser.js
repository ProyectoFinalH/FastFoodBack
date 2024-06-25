const { findOrCreate } = require('../../utils/findOrCreate');
const { sendWelcomeEmail } = require('../../config/mailer');

const createUser = async ({ username, email, password,telefono,image_url }) => {
  const newUser = {
    username: username,
    email: email,
    password: password,
    telefono:telefono,
    image_url:image_url,
    active: true,
    role_id:1,
    
  };
  
  const emailNewUser = {
    email: email
  };

  const { record, created } = await findOrCreate('users', emailNewUser, newUser);

  if (created) {
    try {
    // Enviar correo de bienvenida
    await sendWelcomeEmail(email, username);      
    } catch (error) {
      console.log(error);
    }
    return record;
  } else {
    return false;
  }
};

module.exports = { createUser };
