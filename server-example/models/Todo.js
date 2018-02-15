// if time
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lectureDb');

const todoSchema = new mongoose.Schema({
  text: { type: String }
});

todoSchema.statics.addTodo = function(todo, cb) {
  let newTodo = new this({ text: todo })
  newTodo.save(function(err, res) {
    if (err) { return cb(err) }
    else  { return cb(null, res) }
  })
}

todoSchema.statics.getAllTodos = function(cb) {
  this.find({}, function(err, res) {
    if (err) { return cb(err) }
    else { return cb(null, res) }
  })
}

module.exports = mongoose.model('Todo', todoSchema);
