const admin = require('firebase-admin');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

// Configura Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
  });
}

// Reemplaza 'ftZQ5PbISAPhdafyYkTXNlo83Vt2' con el UID real del usuario en Firebase Authentication
const uid = 'Fe6FX03LKlYYczmAFtbvOIohPIs1';

// Generar un token de ID
admin.auth().createCustomToken(uid)
  .then((customToken) => {
    console.log('Custom Token:', customToken);
    return admin.auth().verifyIdToken(customToken);
  })
  .then((idToken) => {
    console.log('ID Token:', idToken);
  })
  .catch((error) => {
    console.error('Error creating custom token:', error);
  });


