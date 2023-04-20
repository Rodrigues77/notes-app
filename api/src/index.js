// imports
const express = require('express');
const config = require('./config/config');
const { api } = require('./config/config');
const routes = require('./routes');
require('./config/dbConfig');
const cors = require('cors');

// constants
const PORT = api.port;

// -------------
// APP
const app = express();

// app.use(cors())

// To set CORS configuration **before** routing
const allowedOrigins = ['http://localhost:3000'];
app.use(
  cors({
    origin: allowedOrigins
  })
);

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
