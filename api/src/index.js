// imports
const express = require('express');
const config = require('./config/config');
const { api } = require('./config/config');
const routes = require('./routes');
require('./config/dbConfig');

// constants
const PORT = api.port;

// -------------
// APP
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running!');
});

// To parse incoming requests with JSON payloads. Based on body-parser.
app.use(express.json());
// To use routes file
app.use(routes);

app.listen(PORT, () => {
  console.log('*************************');
  console.log('Config:', config);
  console.log('*************************');
  console.log('App listening on port', PORT);
  console.log('*************************');
});
