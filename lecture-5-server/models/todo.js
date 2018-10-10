var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: { type: String }
})

module.exports = mongoose.model('Todo', todoSchema);
