const mongoose = require('mongoose');
const { database } = require('../config/config');

console.log('CONFIG => dbConfig => Configuring database connection');

const dbConnection = mongoose
  .connect(database.uri, {
    // flag to avoid warnings
    useNewUrlParser: true,
    // flag to avoid warnings
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('CONFIG => dbConfig => Database connection configured');
  })
  .catch((error) => {
    console.error('ERROR => CONFIG => dbConfig => Database connection failed, error:', error);
    process.exit(1);
  });

module.exports = dbConnection;
