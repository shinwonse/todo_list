const express = require('express');
const router = express.Router();
const Login = require('../controller/loginController');

router.get('/github', Login.githubOAuth);

module.exports = router;
