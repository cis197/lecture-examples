const adminCheck = (req, res, next) => {
  console.log(req.session.isAdmin);
  if (req.session.isAdmin === true) {
    next();
  } else {
    next(new Error('no permission'))
  }
}

const login = (req, res, next) => {
  req.session.isAdmin = true;
  console.log('logged in')
  next();
}

const logout = (req, res, next) => {
  req.session.isAdmin = false;
  console.log('logged out')
  next();
}

module.exports = { adminCheck, login, logout }
