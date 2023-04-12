const mongoose = require('mongoose');
const { database } = require('../config/config');

console.log('CONFIG => dbConfig => Configuring database connection');

const dbConnection = mongoose.connect(database.uri, {
  // flag to avoid warnings
  useNewUrlParser: true,
  // flag to avoid warnings
  useUnifiedTopology: true
});

console.log('CONFIG => dbConfig => Database connection configured');

module.exports = dbConnection;
