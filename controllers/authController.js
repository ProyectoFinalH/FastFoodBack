const jwt = require('jsonwebtoken');
const knex = require('../db/knex');

// Función para generar un token JWT
function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, role_id: user.role_id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
}

// Controlador de inicio de sesión
async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await knex('users').where({ email }).first();
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Comparar la contraseña directamente ya que no está encriptada
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
};
