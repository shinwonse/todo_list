const express = require('express')
const router = express.Router();
const Todo = require('../schemas/Todo');

router.get('/', (req, res) => {
  res.send('hello todolist hahahaha')
})

router.route('/:id')
  .post(async (req, res, next) => {
    try {
      const { id } = req.params;
      res.send(`add todo_${id}`)
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;
      res.send(`delete todo_${id}`);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const { id } = req.params;
      res.send(`edit todo_${id}`);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

module.exports = router;
