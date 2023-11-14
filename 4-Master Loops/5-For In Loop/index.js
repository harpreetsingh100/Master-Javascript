// The JavaScript for in statement loops through the properties of an Object.It gives us keys of the Object.

for (key in object) {
  // code block to be executed
}

const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

for (key in person) {
  console.log(person[key]);
}

// This is how we can get Values of Object using For In loop.

for (key in person) {
  console.log(person[key]);
}
