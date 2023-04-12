const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: String,
  email: String
});

module.exports = mongoose.model('Users', userSchema);
