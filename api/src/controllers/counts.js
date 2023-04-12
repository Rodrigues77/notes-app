const Notes = require('../schemas/notes');

module.exports = {
  async countNotes(reques, response) {
    console.log('CONTROLLER => COUNTS => Receiving request to count Notes');

    let notesCount = 0;

    try {
      notesCount = await Notes.count();
    } catch (error) {
      const handledError = {
        message: 'An error ocurred trying to count Notes',
        module: 'CONTROLLER => COUNTS => Notes',
        error: error
      };
      console.error(handledError);
      return response.status(500).json(handledError);
    }

    console.log('CONTROLLER => COUNTS => Counted Notes: ', notesCount);
    return response.json({ count: notesCount });
  }
};
