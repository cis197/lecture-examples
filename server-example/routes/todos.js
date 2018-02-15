const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

let todos = [];

router.route('/')
  .get((req, res) => {
    Todo.getAllTodos(function(err, data) {
      if (err) { 
        res.render('index', {
          todos: todos, 
          loggedIn: true, 
          flash: 'Error' 
        }) 
      } else { 
        todos = data.map((i) =>  { return i.text });
        res.render('index', { 
          todos: todos, 
          loggedIn: true 
        }) 
      }
    })
  })
  .post((req, res) => {
    Todo.addTodo(req.body.todo, function(err) {
      if (err) { 
        res.render('index', {
          todos: todos, 
          loggedIn: true, 
          flash: 'Error' 
        }) 
      }
      else { 
        todos.push(req.body.todo);
        res.render('index', { 
          todos: todos, 
          loggedIn: true 
        }) 
      }
    })
  })

module.exports = { router }
