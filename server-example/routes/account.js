const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares/index');

router.get('/login', middlewares.login, (req, res, next) => {
  return res.render('index', { flash: 'logged in!' });
})

router.get('/logout', middlewares.logout, (req, res, next) => {
  return res.render('index', { flash: 'logged out!' });
})

module.exports = { router }
