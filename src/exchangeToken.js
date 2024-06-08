require('dotenv').config();
const axios = require('axios');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  }),
});

const customToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcxNzgxNDExNSwiZXhwIjoxNzE3ODE3NzE1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oMGJsMEBmYXN0Zm9vZGFwcC03MWU4Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWgwYmwwQGZhc3Rmb29kYXBwLTcxZTg2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiZnRaUTVQYklTQVBoZGFmeVlrVFhObG84M1Z0MiJ9.B5AGdTC1xdhabRV2Dw4Xe-HmiG7Tl-dWNF9tn0Dyb08WMHYy3BaaWDUwgARJVR3kk8M-mnFsPwJN4hrN-U1aE4m50p6yzPyPjTa7i_X8xCUqMD3hVKSPwuL33yFvtyxgz9RkLKu-c1W_EoFRzTsS3MOcodUm2Q2FdY7cxaiB6VOCnHtUSu4gWVje8RWvsgIKB77fmgEOIIo__js92BJVsmPXRhhfVDwCB5vKOm7BLflFwkI2CFBvAfmGnZ0e__vB9HYOEXp4Z2YYu8AfEc626MxAmWirAIX8SVmwAnW8MS9tJpXmesuLqQmTAOqqfxiUWA_X_22ui9rEGQ-5vW5f2w'; // Reemplaza con el custom token obtenido

const exchangeToken = async (customToken) => {
  try {
    // Intercambiar el custom token por un ID token usando el endpoint de Firebase
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`, {
      token: customToken,
      returnSecureToken: true,
    });

    const idToken = response.data.idToken;
    console.log('ID Token:', idToken);
  } catch (error) {
    console.error('Error exchanging custom token:', error.response ? error.response.data : error.message);
  }
};

exchangeToken(customToken);

