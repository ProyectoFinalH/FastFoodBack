const admin = require('../../config/firebaseAdmin');
const db = require("../../db/knex");

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
        role_id: 2, // Ajusta según tus necesidades
        password: '123456' // Proporciona un valor por defecto para password si es necesario
      };
      const [userId] = await db('users').insert(newUser).returning('id');
      user = { ...newUser, id: userId[0] }; // Asegúrate de obtener solo el valor del id
    }

    // Devolver el usuario autenticado
    return user;
  } catch (error) {
    throw new Error('Failed to authenticate user');
  }
};

module.exports = { loginGoogle };

