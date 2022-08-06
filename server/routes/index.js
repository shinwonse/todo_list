const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send('hello index routes!')
})

module.exports = router;
