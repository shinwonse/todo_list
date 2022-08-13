const express = require('express');
const router = express.Router();

router.get('/api/todo', (req, res) => {
  res.send('get all');
});

module.exports = router;
