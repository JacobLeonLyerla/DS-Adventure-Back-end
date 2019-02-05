const jwt = require("jsonwebtoken");

const User = require("../Characters/player");

const passport = require("passport");

const LocalStrategy = require("passport-local");

const makeToken = user => {
  const payload = {
    sub: user._id,

    name: user.name,

    email: user.email
  };

  const options = { expiresIn: "2h" };

  return jwt.sign(payload, process.env.key, options);
};

const localStrategy = new LocalStrategy((name, password, done) => {
  User.findOne({ name }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);

    user.checkPassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (isMatch) {
        const { _id, name, email, membership } = user;
        return done(null, { _id, name, email, membership });
      }
      return done(null, false);
    });
  });
});

const authenticate = passport.authenticate("local", { session: false });

const login = (req, res) => {
  res.json({ token: makeToken(req.user), user: req.user });
};

module.exports = { login, authenticate, localStrategy };
