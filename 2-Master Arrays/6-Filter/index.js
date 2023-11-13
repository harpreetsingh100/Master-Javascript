// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const ages = [32, 33, 16, 40];

const adults = ages.filter((age) => {
  if (age >= 18) {
    return age;
  }
});

// all the true values based on the given condition will be stored in adults array
// all the false values based on the given condition will not be stored in new array
