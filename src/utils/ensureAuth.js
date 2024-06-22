const jwt = require('jsonwebtoken');

// Middleware para verificar si el usuario está autenticado
function ensureAuthenticated(req, res, next) {
  const token = req.headers['token'];
  console.log(token);
  if (token) {
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token invalido' }); // Token inválido
      }
      req.user = user;
      return next();
    });
  } else {
    res.status(401).json({ message: 'No hay token presente' }); // No token presente
  }
}

// Middleware para verificar si el usuario es el Restaurant
function ensureRestaurant(req, res, next) {
  ensureAuthenticated(req, res, () => {
    if (req.user && req.user.role_id === 2) { // Suponiendo que el role_id 2 es para el Restaurantes
      return next();
    }
    res.status(403).json({ message: 'No tiene acceso a esta pagina' }); // No es el Restaurant
  });
}

// Middleware para verificar si el usuario es el Superadmin
function ensureAdmin(req, res, next) {
  ensureAuthenticated(req, res, () => {
    if (req.user && req.user.role_id === 2) { // Suponiendo que el role_id 3 es para el Superadmin
      return next();
    }
    res.status(403).json({ message: 'No tiene acceso a esta pagina' }); // No es el Superadmin
  });
}

module.exports = {
  ensureAuthenticated,
  ensureAdmin,
  ensureRestaurant
};