const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/jwt')

const app = express();

app.set('superSecret', 'cis197isawesome');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.addUser(username, password)
    .then((user) => {
      res.json({ success: true, message: 'successfully added account' })
    })
    .catch((err) => {
      res.json({ success: false, message: err });
    })
})

app.post('/signin', (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        res.json({ success: false, message: 'Auth failed, user not found' })
      } else {
        return User.check(req.body.username, req.body.password)
          .then((valid) => {
            if (!valid) {
              res.json({ success: false, message: 'Auth failed, wrong pass' })
            } else {
              var payload = {
                id: user._id
              }
              var token = jwt.sign(payload, app.get('superSecret'))
              res.json({
                       success: true,
                       message: 'Authentication successful',
                       token: token
              })
            }
          })
      }
    })
    .catch((err) => {
      res.json({ success: false, message: 'Auth failed, ' + err });
    })
})

app.get('/allusers',  (req, res) => {
  User.find({}).then((users)  => { res.json(users) })
})

app.get('/information',  (req, res) => {
  let token = req.query.token;
  if (token) {
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        User.findOne({ _id : decoded.id }, function(err, user) {
          if (err) throw err;
          res.json({ success: true, message: 'you are ' + user.username })
        })
      }
    })
  } else {
    return res.status(403).send({ 
                                success: false, 
                                message: 'No token provided.' 
    });
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on ' + (process.env.PORT || 3000));
});
