const express = require('express');
const routes = express.Router();
const notesController = require('./controllers/notes');
const countsController = require('./controllers/counts');

// notes
routes.post('/notes', notesController.insertNote);
routes.get('/notes/:id', notesController.getNote);
routes.get('/notes', notesController.getAllNotes);
routes.put('/notes/', notesController.updateNote);
routes.delete('/notes/:id', notesController.deleteNote);
routes.delete('/notes/', notesController.deleteAllNotes);

//count
routes.get('/count/notes', countsController.countNotes);

// user

module.exports = routes;
