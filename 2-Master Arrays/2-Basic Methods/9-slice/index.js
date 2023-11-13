// The slice() method slices out a piece of an array into a new array.
// The slice() method creates a new array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // => [Orange,Lemon,Apple,Mango]

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citru = fruits.slice(1, 3); // => [Orange,Lemon]

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

const frui = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citr = fruits.slice(2); // => [Lemon, Apple, Mango;]
