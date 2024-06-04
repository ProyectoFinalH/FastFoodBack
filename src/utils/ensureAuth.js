const jwt = require('jsonwebtoken');

// Middleware para verificar si el usuario está autenticado
function ensureAuthenticated(req, res, next) {
  const token = req.headers['token'];
  console.log(token);
  if (token) {
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' }); // Token inválido
      }
      req.user = user;
      return next();
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' }); // No token presente
  }
}

// Middleware para verificar si el usuario es administrador
function ensureAdmin(req, res, next) {
  ensureAuthenticated(req, res, () => {
    if (req.user && req.user.role_id === 1) { // Suponiendo que el role_id 1 es para administradores
      return next();
    }
    res.status(403).json({ message: 'Forbidden' }); // No es administrador
  });
}

module.exports = {
  ensureAuthenticated,
  ensureAdmin
};