// A JavaScript string is zero or more characters written inside quotes.

let text = "John Doe";

// The length property returns the length of a string

let length = text.length;

// There are many methods we can use with strings like down below

text.slice();
text.replace();
text.replaceAll();
text.toUpperCase();
text.toLowerCase();
text.concat();
text.trim();
text.trimStart();
text.trimEnd();
text.padStart();
text.padEnd();
text.charAt();
text.split();
text.includes();

// You can also use these methods together. It is called chaining. You can use it like this :-

const newText = text.toUpperCase().trim();

// String Concatenation

const myName = `Happy`;
const myAge = 22;

// You can add these two with string concatenation.

const myFullName = "Hi my name is" + myName + "and i am " + myAge + "years old";

// Template Literals

const name = `Happy`;
const age = 22;

// You can add variables in this with ${variable}

const fullName = `Hi my name is ${name} and i am ${age} years old.`;
