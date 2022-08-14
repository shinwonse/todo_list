const express = require('express');
const router = express.Router();
const Login = require('../controller/loginController');

router.get('/api/login/github', Login.githubOAuth);

module.exports = router;
