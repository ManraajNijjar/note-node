console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

console.log('Command: ', command);

if(command === 'add'){
  console.log('Adding Note');
} else if(command === 'list'){
  console.log('Listing All Notes');
} else if(command === 'read'){
  console.log('Reading Note');
} else if(command === 'remove'){
  console.log('Remove Note');
}else {
  console.log('Command not recognized')
}
