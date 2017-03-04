const passport = require('passport');
const queries = require('../../db/queries');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  queries.getUserById(id)
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

module.exports = passport;
