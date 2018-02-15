const adminCheck = (req, res, next) => {
  if (req.query.isAdmin === 'true') {
    next();
  } else {
    next(new Error('no permission'))
  }
}

module.exports = { adminCheck }
