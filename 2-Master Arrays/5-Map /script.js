// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const numbers = [65, 44, 12, 4];

const newNumbers = numbers.map((number, i) => {
  return number * 10;
});
