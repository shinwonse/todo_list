const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello todolist')
})

router.post('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`add todo_${id}`)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`delete todo_${id}`);
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`edit todo_${id}`);
})

module.exports = router;
