const { Todo } = require('../models/todo');

exports.createTodo = (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save((err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

exports.deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: 'Todo Deleted' }))
    .catch((err) => res.send(err));
};

exports.findAll = (req, res) => {
  Todo.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.editTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    { $set: { text: req.body.text } },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};
