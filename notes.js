console.log('Starting Notes.js');

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting All Notes');
}

var readNote = (title) => {
  console.log('Reading Note', title)
}

var removeNote = (title) => {
  console.log('Removing Note', title)
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  readNote: readNote,
  removeNote: removeNote
}
