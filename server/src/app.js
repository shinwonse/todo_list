const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const connect = require('./models');

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const todoListRouter = require('./routes/todolist');

app.use('/', todoListRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('listening!');
});

connect();
