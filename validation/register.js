const Validator = require("validator");

const isEmpty = require("./is-empty");

const validateRegisterInput = ({ name, email, password, password2 }) => {
  let errors = {};

  name = !isEmpty(name) ? name : "";

  email = !isEmpty(email) ? email : "";

  password = !isEmpty(password) ? password : "";

  password2 = !isEmpty(password2) ? password2 : "";

  if (
    !Validator.isLength(name, {
      min: 2,
      max: 30,
    })
  ) {
    errors.name = "name most be six or more characters, no more than thirty.";
  }

  if (Validator.isEmpty(name)) {
    errors.name = "Please enter a name.";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "Please enter an Email.";
  }

  if (!Validator.isEmail(email)) {
    errors.email = "This email is not valid, please try another.";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "Please enter a password.";
  }

  if (
    !Validator.isLength(password, {
      min: 6,
      max: 30,
    })
  ) {
    errors.password =
      "Password most be six or more characters, no more than thirty.";
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = "Password must be confirmed.";
  }

  if (!Validator.equals(password, password2)) {
    errors.password2 = "These passwords did not match.";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
