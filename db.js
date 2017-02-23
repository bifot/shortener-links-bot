var config = require('./config');

module.exports = (() => {
  if (global.db) {
    return global.db;
  }

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var connection = mongoose.connect(config.db);

  var users = new Schema({
    id: Number,
    username: String
  });

  global.db = {
    mongoose: mongoose,
    users: mongoose.model('users', users)
  }
})();
