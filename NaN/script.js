// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)

// Example:-

let x = 100 / "Apple";

// You can use the global JavaScript function isNaN() to find out if a value is a not a number

isNaN(x);

// If you use NaN in a mathematical operation, the result will also be NaN

// NaN is a number: typeof NaN returns number
