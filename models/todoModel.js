// models/todoModel.js
let todos = [];
let idCounter = 1;

const getAllTodos = () => todos;

const getTodoById = (id) => todos.find(todo => todo.id === id);

const createTodo = (text) => {
  const newTodo = { id: idCounter++, text, completed: false };
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (id, updatedTodo) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return todos[index];
  }
  return null;
};

const deleteTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    return todos.splice(index, 1);
  }
  return null;
};

module.exports = { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo };
