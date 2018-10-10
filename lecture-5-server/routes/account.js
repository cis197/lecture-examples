const express = require('express');
const router = express.Router();
const User = require('../models/users.js');


router.get('/signup', function (req, res) {
  res.render('signup'); 
})

router.post('/signup', function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let user = new User({ email, password })
  user.save((err, result) => {
    if (err) console.log(err);
    res.redirect('/account/login');
  })
})

router.get('/login', (req, res) => {
  res.render('signup'); 
})

router.post('/login', (req, res) => {
  var { email, password } = req.body;
  console.log(req.body);
  User.findOne({ email, password }, (err, result) => {
    if (err) { 
      res.send('wrong username/password')
      return;
    }
    if (!result) {
      req.session.authed = false;
      res.send('wrong username/password')
      return;
    }
    if (result.password === password) {
      req.session.authed = true;
      res.redirect('/');
      return;
    }       
  })
})

router.get('/logout', (req, res) => {
  req.session.authed = false;
  res.redirect('/');
})

module.exports = router;
