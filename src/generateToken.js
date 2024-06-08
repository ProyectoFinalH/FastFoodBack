require('dotenv').config();
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  }),
});

const email = 'millerj5villa@gmail.com'; // Usa un correo electrónico de prueba

const generateToken = async () => {
  try {
    // Intentar obtener el usuario por correo electrónico
    let userRecord;
    try {
      userRecord = await admin.auth().getUserByEmail(email);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // Si el usuario no existe, crearlo
        userRecord = await admin.auth().createUser({
          email: email,
          emailVerified: false,
          password: 'test1234',
          displayName: 'Test User',
          disabled: false
        });
        console.log('User created:', userRecord.uid);
      } else {
        throw error;
      }
    }

    const token = await admin.auth().createCustomToken(userRecord.uid);
    console.log('Custom Token:', token);

    // Obtener un ID token a partir del custom token (este paso puede variar)
    const idToken = await admin.auth().verifyIdToken(token);
    console.log('ID Token:', idToken);
  } catch (error) {
    console.error('Error generating token:', error);
  }
};

generateToken();
