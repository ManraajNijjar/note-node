const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = title: {
  describe: 'Title of a note',
  demand: true,
  alias: 't'
};

const argv = yargs
.command('add', 'Add a New Note', {
  title: titleOptions,
  body: {
    describe: 'Body of a note',
    demand: true,
    alias: 'b'
  }
})
.command('list', 'list of all notes')
.command('read', 'read a specific note', {
  title: titleOptions
})
.command('remove', 'remove a specific note', {
  title: titleOptions
})
.help()
.argv;
var command = argv._[0];

if(command === 'add'){
  console.log('Adding Note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note written');
    notes.printNote(note);
  } else {
    console.log('Note title taken');
  }

} else if(command === 'list'){

  var notesToList = notes.getAll();
  notesToList.forEach((note) => {
    notes.printNote(note);
  });

} else if(command === 'read'){

  var note = notes.readNote(argv.title);
  if (note) {
    console.log('Note Read');
    notes.printNote(note);
  } else {
    console.log('Note not found');
  }

} else if(command === 'remove'){

  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'No Note removed';
  console.log(message);

} else {
  console.log('Command not recognized')
}
