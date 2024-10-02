// reading and writing file synchronously
const fs = require('fs');

// Create or write to a file
fs.writeFile('./Files/example.txt', 'This is a new file.', (err) => {
    if (err) throw err;
    console.log('File created and data written.');
});




// Read file content
fs.readFile('./Files/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});




// Append new data to the file
fs.appendFile('./Files/example.txt', '\nAppending new content.', (err) => {
    if (err) throw err;
    console.log('Content appended to the file.');
});




// Delete the file
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted.');
});




// Rename the file
fs.rename('example.txt', 'newExample.txt', (err) => {
    if (err) throw err;
    console.log('File renamed.');
});




// Check if file exists
if (fs.existsSync('newExample.txt')) {
    console.log('File exists.');
} else {
    console.log('File does not exist.');
}


