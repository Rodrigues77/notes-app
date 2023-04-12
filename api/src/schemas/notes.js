const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    order: Number
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Notes', notesSchema, 'notes');
