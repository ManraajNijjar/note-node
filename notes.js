console.log('Starting Notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  }

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }
  
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }


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
