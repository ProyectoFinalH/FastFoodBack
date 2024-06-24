const admin = require('../../config/firebaseAdmin');
const db = require("../../db/knex");
const { sendWelcomeEmail } = require('../../config/mailer');
const jwt=require('jsonwebtoken')

// Función para generar un token JWT
function generateToken(user) {
  return jwt.sign({ id: user.id, name:user.username, email: user.email, role_id:user.role_id, state:user.active}, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
}

const loginGoogle = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { email, name, picture, uid } = decodedToken;

    let user = await db('users').where({ google_id: uid }).first();

    if (!user) {
      // Si el usuario no existe, crearlo
      const newUser = {
        username: name,
        email: email,
        google_id: uid,
        role_id: 1, // Ajusta según tus necesidades
        password: '123456', // Proporciona un valor por defecto para password si es necesario
        active:true
      };
      const [userId] = await db('users').insert(newUser).returning('id');
      user = { ...newUser, id: userId[0] }; // Asegúrate de obtener solo el valor del id
       // Enviar correo de bienvenida
       console.log('Enviando correo de bienvenida a:', email); 
       //sendWelcomeEmail(email, name);
 
    }

    // Devolver el usuario encriptado con token jwt
   
    const tokenUser =generateToken(user);
    return tokenUser;

  } catch (error) {
    throw new Error('Failed to authenticate user');
  }
};

module.exports = { loginGoogle };

