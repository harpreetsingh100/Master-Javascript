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
