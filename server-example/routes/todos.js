const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

let todos = [];

const templateVars = (todos, flash) => {
  return { 
    todos: todos,
    loggedIn: true,
    flash: (flash ? flash : '')
  }
}
router.route('/')
  .get((req, res) => {
    Todo.getAllTodos(function(err, data) {
      todos = data;
      if (err) { 
        res.render('index', templateVars(todos, 'error')) 
      } else { 
        res.render('index', templateVars(todos)) 
      }
    })
  })
  .post((req, res) => {
    Todo.addTodo(req.body.todo, function(err) {
      if (err) { 
        res.render('index', templateVars(todos, 'error'))
      }
      else { 
        res.redirect('/todos');
      }
    })
  })

router.get('/delete/:id', (req, res) => {
  Todo.remove({ _id: req.params.id }, function (err, data) {
    if (err) { res.redirect('index', templateVars(todos, 'error')) }
    else { res.redirect('/todos') }
  })
})

module.exports = { router }
