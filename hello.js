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
*/
// spread operator
const numbers = [1, 2, 3];
const moreNumbers = [ ...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]