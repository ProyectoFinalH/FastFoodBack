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

const customToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcxNzgxNjI1NywiZXhwIjoxNzE3ODE5ODU3LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oMGJsMEBmYXN0Zm9vZGFwcC03MWU4Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWgwYmwwQGZhc3Rmb29kYXBwLTcxZTg2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiUGlGRlNSY3RwMVZZM3JTcU83cnJ6UlVKME55MiJ9.afsJcJb1E0EhEIJrNvglcY6VcagUeqHuKfZpxocHP3BTSaafzZQlaATjbW9_K5E2Q9NzW20OWbqKXgOP7Vtzsmj1icqN2eoDRHROCY6Q90wHkE4gCSkE-2plFa3FJzNBcDk92HRtrX4dx8BXFFVjwoVVbOF2xd_1uoqZ_B9CWh4TwPDiUGlarEieW1ZdgtItN_67JbNY7hmmVzXx1v0BTEVOpEd137aKtBWjnfkoWbjmdFZJ9xk_g6d2e3AfxSQMjbB9B7WvAEdfEEgznbZPE0BnnokFjqNauE-BOHWOPQh0oJxQKFaW32f3FLr2wID4RykoKjeRe8Ubt0SNuz4tvA'; // Reemplaza con el custom token obtenido

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

