console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add'){
  console.log('Adding Note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note written');
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log('Note title taken');
  }
} else if(command === 'list'){
  notes.getAll()
} else if(command === 'read'){
  notes.readNote(argv.title);
} else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'No Note removed';
  console.log(message);
}else {
  console.log('Command not recognized')
}
