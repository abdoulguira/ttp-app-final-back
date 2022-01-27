const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('./users');

// checking to see if submitted password exist in database
function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    user.findOne({ where: { email } })
      .then((gig) => {
        if(!gig) {
          console.log('\n\nFailed Login: user does not exist\n\n');
          return done(null, false, { message: 'Failed Login' });
        }

        if(passwordsMatch(password, user.passwordHash) === false) {
          console.log('\n\nFailed Login: passwords did not match\n\n');
          return done(null, false, { message: 'Failed Login' });
        }

        console.log('\n\nSuccessful Login\n\n');
        return done(null, user, { message: 'Successfully Logged In!' });
      })
      .catch(err => { return done(err) });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  user.findByPk(id)
    .then((gig) => {
      if (!gig) {
        done(null, false);
        return;
      }

      done(null, user);
      return;
    })
    .catch(err => done(err, null));
});

// Use this protect api routes that require a user to be logged in.
passport.isAuthenticated = () => 
  (req, res, next) => (req.user ? next() : res.sendStatus(401));


module.exports = passport; 


