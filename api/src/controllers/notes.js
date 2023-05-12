const Notes = require('../schemas/notes');
const crypto = require('crypto');
const OBJECTID_REGEX = /^[a-fA-F0-9]{24}$/;

module.exports = {
  // CREATE
  async insertNote(request, response) {
    const { title, content } = request.body;
    console.log('CONTROLLER => NOTES => Receiving request to insert a Note');

    if (!title) {
      console.warn('CONTROLLER => NOTES => Missing content "title" on body when trying to create a Note');
      const message = { message: 'Missing content on body: You must provide a title to the Note' };
      return response.status(400).json(message);
    }

    let noteData = [];
    try {
      noteData = await Notes.create({
        title: title,
        content: content,
        createdAt: new Date().getTime(),
        modifiedAt: new Date().getTime()
      });
    } catch (error) {
      const handledError = {
        message: 'An error ocurred trying to insert a Note',
        module: 'CONTROLLER => NOTES => Insert',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    console.log('CONTROLLER => NOTES => Inserted a Note');
    return response.json(noteData);
  },

  // READ
  async getNote(request, response) {
    const { id } = request.params;
    console.log('CONTROLLER => NOTES => Receiving request to get Note with id', id);

    if (!id) {
      console.warn('CONTROLLER => NOTES => Missing parameter "id" when trying to get Note');
      const message = { message: 'Missing parameter: "id"' };
      return response.status(400).json(message);
    }

    // Validate if the param id matches the regex of ObjectId. If not, the match() method returns null
    if (id.match(OBJECTID_REGEX) === null) {
      console.warn('CONTROLLER => NOTES => Parameter "id" is not following MongoDB ObjectID format');
      const message = { message: 'Parameter "id" is not following MongoDB ObjectID format' };
      return response.status(400).json(message);
    }

    let noteData = [];
    try {
      noteData = await Notes.find({ _id: id });
    } catch (error) {
      const handledError = {
        message: `An error ocurred trying to find Note with id: ${id}`,
        module: 'CONTROLLER => NOTES => Get One',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    console.log('CONTROLLER => NOTES => Sending Note data');
    return response.json(noteData);
  },

  async getAllNotes(request, response) {
    console.log('CONTROLLER => NOTES => Receiving request to get all Notes');

    let notesData = [];
    try {
      notesData = await Notes.find();
      // notesData = await Notes.find().sort({ modifiedAt: -1 });
    } catch (error) {
      const handledError = {
        message: 'An error ocurred trying to find Notes',
        module: 'CONTROLLER => NOTES => Get Many',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    console.log('CONTROLLER => NOTES => Sending Notes data');
    return response.json(notesData);
  },

  // UPDATE
  async updateNote(request, response) {
    const { title, content, id } = request.body;
    console.log('CONTROLLER => NOTES => Receiving request to update Note with id', id);

    if (!id) {
      console.warn('CONTROLLER => NOTES => Missing content "id" on body when trying to update Note');
      const message = { message: 'Missing content "id" on body' };
      return response.status(400).json(message);
    }

    if (id.match(OBJECTID_REGEX) === null) {
      console.warn('CONTROLLER => NOTES => Parameter "id" is not following MongoDB ObjectID format');
      const message = { message: 'Parameter "id" is not following MongoDB ObjectID format' };
      return response.status(400).json(message);
    }

    if (!title && !content) {
      console.warn('CONTROLLER => NOTES => Missing content on body when trying to update Note with id', id);
      const message = { message: 'Missing content on body: You must update at least one field' };
      return response.status(400).json(message);
    }

    let update = { modifiedAt: new Date().getTime() };

    if (title) {
      update = { ...update, title: title };
    }

    if (content) {
      update = { ...update, content: content };
    }

    let noteData = [];
    try {
      noteData = await Notes.findByIdAndUpdate(id, update);
    } catch (error) {
      const handledError = {
        message: `An error ocurred trying to update Note with id: ${id}`,
        module: 'CONTROLLER => NOTES => Update',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    if (!noteData) {
      console.log('CONTROLLER => NOTES => Could not find the Note when trying to update Note with id: ', id);
      const message = { message: `Could not find the Note when trying to update Note with id: ${id}` };
      return response.json(message);
    }

    console.log('CONTROLLER => NOTES => Updated Note with id: ', id);
    return response.json(noteData);
  },

  // DELETE
  async deleteNote(request, response) {
    const { id } = request.params;
    console.log('CONTROLLER => NOTES => Receiving request to delete Note with id', id);

    if (!id) {
      console.warn('CONTROLLER => NOTES => Missing parameter "id" when trying to delete Note');
      const message = { message: 'Missing parameter: "id"' };
      return response.status(400).json(message);
    }

    if (id.match(OBJECTID_REGEX) === null) {
      console.warn('CONTROLLER => NOTES => Parameter "id" is not following MongoDB ObjectID format');
      const message = { message: 'Parameter "id" is not following MongoDB ObjectID format' };
      return response.status(400).json(message);
    }

    let noteData = [];
    try {
      noteData = await Notes.findOneAndDelete({ _id: id });
    } catch (error) {
      const handledError = {
        message: `An error ocurred trying to delete Note with id: ${id}`,
        module: 'CONTROLLER => NOTES => Delete',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    if (!noteData) {
      console.log('CONTROLLER => NOTES => Could not find the Note when trying to update Note with id: ', id);
      const message = { message: `Could not find the Note when trying to update Note with id: ${id}` };
      return response.json(message);
    }

    console.log('CONTROLLER => NOTES => Deleted Note with id: ', id);
    return response.json(noteData);
  },

  async deleteAllNotes(request, response) {
    console.log('CONTROLLER => NOTES => Receiving request to delete all Notes');

    let noteData = [];
    try {
      noteData = await Notes.deleteMany();
    } catch (error) {
      const handledError = {
        message: 'An error ocurred trying to delete all Notes',
        module: 'CONTROLLER => NOTES => Delete One',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    console.log('CONTROLLER => NOTES => Deleted all Notes');
    return response.json(noteData);
  }
};
