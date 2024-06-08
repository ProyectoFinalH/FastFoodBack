require('dotenv').config();
const admin = require('./config/firebaseAdmin');

// Imprimir las variables de entorno para depuración
console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID);
console.log('FIREBASE_CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL);
console.log('FIREBASE_PRIVATE_KEY:', process.env.FIREBASE_PRIVATE_KEY);

console.log('Firebase Admin SDK initialized successfully');
