const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  todoText: { type: String },
  author: { type: String },
})

module.exports = mongoose.model('Todo', todoSchema);
