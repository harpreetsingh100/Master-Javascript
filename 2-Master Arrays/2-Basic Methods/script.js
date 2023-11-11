// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array slice()

// 1.toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); // => Banana,Orange,Apple,Mango

// 2.pop()
// The pop() method removes the last element from an array and you can store the popped item in a variable.

const poppedFruit = fruits.pop(); // => ["Banana", "Orange", "Apple"]

// 3.push()
// The push() method adds a new element to an array (at the end):

fruits.push("Kiwi"); // =>["Banana", "Orange", "Apple", "Mango","Kiwi"];

// 4.shift()

// The shift() method removes the first array element
fruits.shift(); // => [ "Orange", "Apple", "Mango"];

// 5.unshift()

// The unshift() method adds a new element to an array (at the beginning)

fruits.unshift("Dates"); // => ["Dates","Banana", "Orange", "Apple"];
