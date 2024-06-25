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
const customToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcxOTE5MzQzNywiZXhwIjoxNzE5MTk3MDM3LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oMGJsMEBmYXN0Zm9vZGFwcC03MWU4Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWgwYmwwQGZhc3Rmb29kYXBwLTcxZTg2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiRmU2RlgwM0xLbFlZY3ptQUZ0YnZPSW9oUElzMSJ9.ldbYE-QCUeq1oEhYI0bxAxn5zNU5WylrVP-0V5WBsjHLMlAwB7ZAXC4BghzctDjR6uatfGr-55tCn9FI4I9tD_tMky_QXIrk1dfn2ezU1Yu_q1dF3ftXPfWyCQHjXpqs_1Jq9K-E-pyzLM6rGOsGwma-89ctwBKET3dweFIfDImqKnfAhplyqfDUAcHUtA7ONMNslOcq2ptf2ljM4uCPWBHDTqYmlsonFuAUxho2QlDNwxz4xU3AGgBtD_JhW2YDt6HaRBEgDUyiYms0sITQfz6jgdZh19JeIZVJ6a_R9aiRpx3s2RYYekGdZhh-a-Kl7b6BVxLJfVvwCRUSLKUH8Q";

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
