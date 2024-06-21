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

// Middleware para verificar si es un consumidor
function ensureUser(req, res, next) {
  ensureAuthenticated(req, res, () => {
    if (req.user && req.user.role_id === 1) { // Autoriza al consumidor
      return next();
    }
    res.status(403).json({ message: 'No tiene acceso a esta pagina' }); // No es el consumidor
  });
}

// Middleware para verificar si el usuario es el Restaurant o el SuperAdmin
function ensureRestaurant(req, res, next) {
  ensureAuthenticated(req, res, () => {
    if (req.user && (req.user.role_id === 2 || req.user.role_id === 3)) { // Autoriza al restaurante id(2) y Superadmin id(3)
      return next();
    }
    res.status(403).json({ message: 'No tiene acceso a esta pagina' }); // No es el Restaurant ni superadmin
  });
}

// Middleware para verificar si el usuario es el Superadmin
function ensureAdmin(req, res, next) {
  ensureAuthenticated(req, res, () => {
    if (req.user && req.user.role_id === 3) { // Autoriza solo al superadmin id(3)
      return next();
    }
    res.status(403).json({ message: 'No tiene acceso a esta pagina' }); // No es el Superadmin
  });
}

module.exports = {
  ensureAuthenticated,
  ensureAdmin,
  ensureRestaurant,
  ensureUser
};