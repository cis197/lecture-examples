const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();
// if time
router.get('/', (req, res) => {
  Todo.getAllTodos(function(err, data) {
    if (err) { res.json({ success: 'false',  err: err }) }
    else { res.json({ success: 'true', data }) }
  })
})

module.exports = { router }
