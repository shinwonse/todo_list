const express = require('express');
const router = express.Router();
const Todo = require('../controller/todoController');

// Create Todo
router.post('/api/todo', Todo.createTodo);

// Delete Todo
router.delete('/api/todo/:todoID', Todo.deleteTodo);

// Get all Todos
router.get('/api/todo', Todo.findAll);

// Edit Todo
router.put('/api/todo/:todoID', Todo.editTodo);

module.exports = router;
