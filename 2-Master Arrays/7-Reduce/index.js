// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

const numbers = [1, 2, 3];

const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 5);

// accumulator at first is the initial value. If there is no initial value the first value of array will be the accumulator.Then it will add number to it and the accumulator will be the added value and it will add the next value and it will keep on looping like that
