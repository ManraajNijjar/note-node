console.log('Starting Notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  }

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note
  }
};

var getAll = () => {
  console.log('Getting All Notes');
}

var readNote = (title) => {
  console.log('Reading Note', title)
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var notesWithNoteRemoved = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(notesWithNoteRemoved);
  return notes.length !== notesWithNoteRemoved.length;
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  readNote: readNote,
  removeNote: removeNote
}
