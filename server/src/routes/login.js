const express = require('express');
const router = express.Router();
const Login = require('../controller/loginController.js');

router.get('/github/start', Login.githubLoginPage);

router.get('/github/finish', Login.githubLoginWithServer);

module.exports = router;
