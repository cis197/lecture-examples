const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todo.js');
//const User = require('./models/users.js');
const accounts = require('./routes/account');
const cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'local-session',
  keys: ['spooky'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lecture5Db');

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

//const todos = [];

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/account', accounts);

const isAuthed = (req, res, next) => {
  if (req.session.authed === true) {
    next(); 
  } else {
    res.redirect('/account/login');
  }
}

app.get('/', isAuthed, (req, res) => {
  var todos = []
  console.log(req.session);
  Todo.find({}, (err, todosRet) => {
    if (err) console.log(err);
    res.render('index', { todos: todosRet });
  })
})

app.post('/', isAuthed, (req, res) => {
  //todos.push(req.body.todo);
  const todo = new Todo({ text: req.body.todo })
  todo.save((err, result) => {
    if (err) console.log(err);
    res.redirect('/');
  })
})

app.get('/delete/:id', isAuthed, (req, res) => {
  const id = req.params.id;
  Todo.findOneAndDelete({ _id: id }, (req, result) => {
    res.redirect('/');
  })
})

//app.get('/signup', function (req, res) {
  //res.render('signup'); 
//})
//
//app.post('/signup', function (req, res) {
  //const email = req.body.email;
  //const password = req.body.password;
  //const user = new User({ email: email, password: password })
  //user.save(function (err, result) {
    //if (err) console.log(err);
    //res.redirect('/login');
  //})
//})
//
//app.get('/login', function (req, res) {
  //res.render('signup'); 
//})
//
//app.post('/login', function (req, res) {
  //const email = req.body.email;
  //const password = req.body.password;
  //console.log(req.body);
  //User.findOne({ email: email, password: password }, function (err, result) {
    //if (err) { 
      //res.send('wrong username/password')
      //return;
    //}
    //if (!result) {
      //req.session.authed = false;
      //res.send('wrong username/password')
      //return;
    //}
    //if (result.password === password) {
      //req.session.authed = true;
      //res.redirect('/');
      //return;
    //}       
  //})
//})
//
//app.get('/logout', function (req, res) {
  //req.session.authed = false;
  //res.redirect('/');
//})
//
app.listen(3000, function () {
  console.log('Listening on port 3000');
})
