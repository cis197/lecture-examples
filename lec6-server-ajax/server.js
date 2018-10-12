const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const mongoose = require('mongoose');

const middleware = function  (req, res, next) {
  if  (req.session.authed) {
    next();
  } else {
    res.send('you are not logged in')
  }
}

mongoose.connect('mongodb://localhost/lecture5Dblive')

const User = require('./models/users.js');
const Todo = require('./models/todos.js');

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

let todos = [];
app.use(cookieSession({
  name: 'local-session',
  keys:  ['spooky'],
  maxAge: 24 * 60* 60 * 1000
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', function (req, res) {
  Todo.find({}, function (err, results) {
    res.render('index', { todos: results, authed: req.session.authed })
  })
})

app.post('/', middleware, function (req, res) {
  //todos.push(req.body.todotext);
  var todo = req.body.todotext;
  var todoObj = new Todo({ todoText: todo, author: req.session.user });
  todoObj.save(function (err, result) {
    if (err) console.log(err);
    res.redirect('/');
  })
})

app.get('/signup', function (req, res) {
  res.render('signuplogin');
})

app.post('/signup', function (req, res) {
  var { email, password } = req.body;
  var user = new User({ email: email, password: password })

  user.save(function (err, result) {
    if (err) console.log(err);
    res.redirect('/login');
  })
})
app.get('/login', function (req, res) {
  res.render('signuplogin');
})

app.post('/login', function (req, res) {
  var { email, password } = req.body;

  User.findOne({ email: email, password: password }, function (err, result) {
    if (err) { console.log('rip') }
    console.log('yay user!')
    req.session.authed = true;
    req.session.user = email;
    res.redirect('/')
  })
})

app.get('/logout', middleware, function (req, res) {
  req.session.authed = false;
  res.redirect('/login');
})

app.get('/delete/:id', function (req, res) {
  var id = req.params.id
  Todo.deleteOne({ _id: id }, function (err, result) {
    res.redirect('/');
  })
})

app.get('/api/getTodos', function (req, res) {
  Todo.find({}, function (err,  results) {
    res.json(results);
  })
})

app.get('/*', function (req, res) {
  res.send('not found :/');
})


app.listen('3000', function () {
  console.log('listening on port 3000');
})
