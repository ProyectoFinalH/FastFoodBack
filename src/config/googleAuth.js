const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const knex = require('../db/knex');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'https://4486-200-41-87-154.ngrok-free.app/auth/google/callback'
},
async (token, tokenSecret, profile, done) => {
  try {
    let user = await knex('users').where({ google_id: profile.id }).first();
    if (!user) {
      const newUser = {
        username: profile.displayName,
        email: profile.emails[0].value,
        google_id: profile.id,
        role_id: 2, // Asegúrate de que este ID existe en la tabla roles
        password: '' // Proporciona un valor por defecto para password si es necesario
      };
      const [userId] = await knex('users').insert(newUser).returning('id');
      user = { ...newUser, id: userId }; // Asegúrate de obtener solo el valor del id
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
    // Si el id es un objeto, desestructurarlo para obtener solo el valor
    const userId = typeof id === 'object' ? id.id : id;
    const user = await knex('users').where({ id: userId }).first();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
