const authorize = (roles = []) => {
    if (typeof roles === 'string') {
      roles = [roles];
    }
  
    return [
      // Autorización basada en roles
      (req, res, next) => {
        if (!roles.length || roles.includes(req.user.role)) {
          return next();
        }
  
        return res.status(403).json({ message: 'Forbidden' });
      }
    ];
  };
  
  module.exports = authorize;
  
  