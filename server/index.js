const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world!')
})

const todoListRouter = require('./routes/todolist');

app.use('/todolist', todoListRouter);

app.listen(3000, () => {
  console.log('listening!');
})
