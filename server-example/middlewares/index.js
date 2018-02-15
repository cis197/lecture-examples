const adminCheck = (req, res, next) => {
  if (req.session.isAdmin === true) {
    next();
  } else {
    next(new Error('no permission'))
  }
}

const login = (req, res, next) => {
  req.session.isAdmin = true;
  next();
}

const logout = (req, res, next) => {
  req.session.isAdmin = false;
  next();
}

module.exports = { adminCheck, login, logout }
