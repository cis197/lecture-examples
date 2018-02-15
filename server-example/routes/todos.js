const express = require('express');

const router = express.Router();

const todos = [];

router.get('/addTodo', (req, res) => {
  if (req.query.todo) {
    todos.push(req.query.todo);
  }
  res.redirect('/todos');
})

router.get('/', (req, res) => {
  res.send(todos); 
})

module.exports = { router }
