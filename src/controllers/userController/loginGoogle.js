const admin = require('../../config/firebaseAdmin');
const db = require("../../db/knex");

const loginGoogle = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { email } = decodedToken;

    let user = await db('users').where({ email }).first();

    if (!user) {
      // Si el usuario no existe, crear uno nuevo
      const [newUser] = await db('users').insert({ email }).returning('*');
      user = newUser;
    }

    // Devolver el usuario autenticado
    return user;
  } catch (error) {
    throw new Error('Failed to authenticate user');
  }
};

module.exports = { loginGoogle };
