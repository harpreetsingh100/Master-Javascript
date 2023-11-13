// The forEach() method calls a function for each element in an array.

const names = ["Happy", "Harry", "Honey"];

names.forEach((name) => {
  console.log(name.toUpperCase());
});

// forEach returns undefined even when we return something.
