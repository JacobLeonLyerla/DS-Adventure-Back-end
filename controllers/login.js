const jwt = require("jsonwebtoken");
const User = require("../Characters/player");
const passport = require("passport");
const LocalStrategy = require("passport-local");
console.log("test me here")
const makeToken = user => {
console.log(user)
  const payload = {
    sub: user._id,
    name: user.name,
    email: user.email,
 
  };
  
  const options = { expiresIn: "2h" };
  return jwt.sign(payload, "nwsecit11266", options);
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
  console.log(req.body)
  res.json({ token: makeToken(req.user), user: req.user });
};

module.exports = { login, authenticate, localStrategy };
