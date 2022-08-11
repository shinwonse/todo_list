const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const connect = require('./models');

app.use(helmet());
app.use(cors());

const router = require('./routes');
const todoListRouter = require('./routes/todolist');

app.use('/', router);
app.use('/todolist', todoListRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('listening!');
});

connect();
