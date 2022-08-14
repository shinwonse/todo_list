const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  social: {
    github: {
      id: String,
      accessToken: String,
    },
  },
});

const Login = mongoose.model('Login', LoginSchema);

module.exports = { Login };
