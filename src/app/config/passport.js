const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./auth');
const queries = require('../../db/queries');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    queries.getUserById(id)
      .then(user => done(null, user))
      .catch(error => done(error, null));
  });

  passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
  },
  (req, accessToken, refreshToken, profile, done) => {
    queries.getUserByOAuthID(profile.id)
      .then((user) => {
        if (user !== null) {
          done(null, user);
        } else {
          const newUser = {
            oauth_id: profile.id,
            name: profile.displayName,
          };

          queries.addUser(newUser)
            .then(id => queries.getUserById(id))
            .then(result => done(null, result))
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));
  }));
};
