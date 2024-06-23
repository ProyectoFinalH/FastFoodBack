const admin = require('firebase-admin');
const axios = require('axios');
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

// Token personalizado generado en el servidor
const customToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcxOTE2NzY5NCwiZXhwIjoxNzE5MTcxMjk0LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oMGJsMEBmYXN0Zm9vZGFwcC03MWU4Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWgwYmwwQGZhc3Rmb29kYXBwLTcxZTg2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiRmU2RlgwM0xLbFlZY3ptQUZ0YnZPSW9oUElzMSJ9.pIULAlU7asS2EE41HNrioi3gTMuDjV-y9QoYKKLdhXgcmzHUjqhmBFma0B6o1zTwAUFKnFKC5tgENHw7oiwnN668v3RjmT4nGKWIXksrOIrblamiCHtyyAlUIeHCKK7NxQIy-4S1jxUrdbmW1HtnPENECRe51jxk_aZBJcz3YO-SzwbC4Lsg8AeyG6yJAv96-Ll7M4sZIW1SeM1GWs4x1s3OcBUJekbCrz4TwOPDQeSG6XyFvUVNxGoSx9JiV4lc_iBeErU1WziJ4rwFdodiEPqluki_ZLbFHqo0-7PApeeNZ4p9LI_zLIAmgksCa4_i9-q-GMszStMkwb-vudGkKg";

// URL de la API de autenticación de Firebase
const firebaseAuthURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`;

// Autenticar al usuario con el token personalizado y obtener el token de ID
async function authenticateWithCustomToken(customToken) {
  try {
    const response = await axios.post(firebaseAuthURL, {
      token: customToken,
      returnSecureToken: true,
    });
    const idToken = response.data.idToken;
    console.log("ID Token:", idToken);
    return idToken;
  } catch (error) {
    console.error('Error authenticating with custom token:', error.response.data);
  }
}

// Llama a la función para autenticar y obtener el token de ID
authenticateWithCustomToken(customToken);
