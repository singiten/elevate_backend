
const fs = require('fs');

/*
// Async - Non-blocking
fs.writeFile('elevate.txt', 'Hello from elevate!', 'utf8', (err) => {
  if (err) {
    console.error('Failed to write file:', err);
    return;
  }
  console.log('File written successfully!');
});

console.log('Writing in background...');

// Output:
// Writing in background...
// File written successfully!

*/

// Async - Non-blocking
fs.readFile('elevate.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Failed to read file:', err);
    return;
  }
  console.log(' File Content:', data);
});

console.log(' Reading in background...');

// If elevate.txt contains "Hello from elevate!"
// Output:
// Reading in background...
//  File Content: Hello from elevate!