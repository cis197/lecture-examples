const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.statics.addUser = function (username, password) {
  let newUser = new this({ username: username, password: password});
  return newUser.save();
}

userSchema.statics.check = function (username, password) {
  return this.findOne({ username: username })
    .then((user) => {
      if (!user) { throw new Error('No User') }
      else {
        return bcrypt.compare(password, user.password)
      }
    })
}

module.exports = mongoose.model('User', userSchema);
