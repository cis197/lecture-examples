const adminCheck = (req, res, next) => {
  if (req.query.isAdmin === 'true') {
    req.isAdmin = true;
    next();
  } else {
    next(new Error('no permission'))
  }
}

const login = (req, res, next) => {
  req.isAdmin = true;
  console.log('logged in')
  next();
}

const logout = (req, res, next) => {
  req.isAdmin = false;
  console.log('logged out')
  next();
}

module.exports = { adminCheck, login, logout }
