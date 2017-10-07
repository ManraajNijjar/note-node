console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();


var filteredArray = _.uniq(['Hello', 'Mello', 'Hello', 'hello', 1, 2, 3, 4, 4]);
console.log(filteredArray);
//console.log(notes.add(7, 9));

// var res = notes.addNote;
// console.log(res);

// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err){
//   if (err) {
//     console.log('Unable to write file');
//   }
// });
