const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const knex = require('../db/knex');
const { sendWelcomeEmail } = require('./mailer');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/users/auth/google/callback`
},
async (token, tokenSecret, profile, done) => {
  try {
    let user = await knex('users').where({ google_id: profile.id }).first();
    if (!user) {
      const newUser = {
        username: profile.displayName,
        email: profile.emails[0].value,
        google_id: profile.id,
        role_id: 1, // Asegúrate de que este ID existe en la tabla roles
        password: '123456' // Proporciona un valor por defecto para password si es necesario
      };
      const [userId] = await knex('users').insert(newUser).returning('id');
      user = { ...newUser, id: userId }; // Asegúrate de obtener solo el valor del id
        // Enviar correo de bienvenida
        await sendWelcomeEmail(newUser.email, newUser.username);
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const userId = typeof id === 'object' ? id.id : id;
    const user = await knex('users').where({ id: userId }).first();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;


