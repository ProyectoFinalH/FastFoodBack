const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { login } = require('../controllers/authController');

// Ruta para inicio de sesión local
router.post('/login', login);

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const token = jwt.sign({ id: req.user.id, email: req.user.email, role_id: req.user.role_id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.redirect(`/?token=${token}`);
});

module.exports = router;

