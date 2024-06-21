const admin = require('../config/firebaseAdmin');

const authenticateFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  console.log('Received Token:', token); // Agregar este log

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Invalid token:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticateFirebaseToken };


