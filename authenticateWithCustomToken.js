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
const customToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcxODk5MzQxNSwiZXhwIjoxNzE4OTk3MDE1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oMGJsMEBmYXN0Zm9vZGFwcC03MWU4Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWgwYmwwQGZhc3Rmb29kYXBwLTcxZTg2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiRmU2RlgwM0xLbFlZY3ptQUZ0YnZPSW9oUElzMSJ9.K2ghFxzTzWflYgszIXZfy_b_KM8XMI6C6W-SI0yvQ42Yk09LhYofOUHiYKOUmUJacygpfMDoOuEqz8CsGRB_ZWD3ggYHJya55MMwbyEoQZpKgaU2Nf_7BJqDz7PfgBnmDV-r80CpldGWzcCwq14aLq88j7-bBb3qGp_SAFAyd8FPXjOgthreFMx6z5sy_kUKxkp_NscRNMGT8MRQ7GXKAC8BMBEndPPUyvpxhl8CjLF89iUi1E2J8BMb07myOlrGZm4szjMfk8_rn8FWy0J4BQrxm5likjKPsOLzd2F8aSvzZrklWCGrN-GOz0XfWiVHLdm_u5ecCAMD0EoR8DQgBw";

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
