// controllers/todoController.js
const TodoModel = require('../models/todoModel');

const getTodos = (req, res) => {
  const todos = TodoModel.getAllTodos();
  res.json(todos);
};

const getTodo = (req, res) => {
  const { id } = req.params;
  const todo = TodoModel.getTodoById(parseInt(id, 10));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

const createTodo = (req, res) => {
  const { text } = req.body;
  if (text && text !="") {
    const newTodo = TodoModel.createTodo(text);
    res.status(201).json(newTodo);
  } else {
    res.status(400).json({ message: 'Text is required' });
  }
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  const updatedTodo = TodoModel.updateTodo(parseInt(id, 10), { text, completed });
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const deletedTodo = TodoModel.deleteTodo(parseInt(id, 10));
  if (deletedTodo) {
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
