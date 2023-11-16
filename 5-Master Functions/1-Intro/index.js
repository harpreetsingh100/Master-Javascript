// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it). We call it using () these brackets.

function logMyName(name) {
  //parameter
  console.log(name);
}

logMyName("Happy"); // argument

// We can return something in the function. If we dont return anything function returns undefined always. We can use return like this.

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

addTwoNumbers(5, 5);

// We can give default parameters to functions

const addOneAndTwo = (a, b = 5) => {
  console.log(a + b);
};

addOneAndTwo(2);

// You should not use deault parameter for the first parameter.
