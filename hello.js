/*
// arrow functions

function greet(name) {
return "Hello " + name;
}
 let result= greet("singiten");
console.log(result);

const greet = (name) => {
return "Hello " + name;
};
let result = greet("singiten");
console.log(result);

// Template Literals
const name = "Abebe";
const age = 20;
 const message = "My name is " + name + " and I am " + age + " years old.";
 console.log(message);

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Destructuring

const user = {
id: 1,
username: "john_doe",
email: "john@email.com",
age: 25
};
console.log(user);
const { username: userName, email: userEmail } = user;
console.log(userName);  // "john_doe"
console.log(userEmail); // "john@email.com
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// spread operator
const numbers = [1, 2, 3];
const moreNumbers = [ ...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]

// fs modules
const fs = require('fs');

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

const fs = require('fs');

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
*/
