var x = 100;
var y = 50;

function getSum(n1, n2) {
  var sum = n1 + n2;
  return sum;
}

var sum1 = getSum(x, y);
var sum2 = getSum(10, 5);

// 1. MEMORY CREATION PHASE

// 1) x variable is allocated memory and stores undefined;
// 2) y variable is allocated memory and stores undefined;
// 3) getSum function is allocated memory and stores all the function.
// 4) sum1 is allocated memory and stores undefined.
// 5) sum2 is allocated memory and stores undefined.

// 2. EXECUTION PHASE

// 1) Places value 100 into x variable.
// 2) Places value 50 into y variable.
// 3) Skips function because there is nothing to execute.
// 4) Invoke() the getSum function and create a new function execution context

// --------------------- FUNCTION EXECUTION CONTEXT -----------------------

// 1. MEMORY CREATION PHASE

// 1) n1 and n2 variables are allocated memory and store undefined. These are arguments but they are varibales so they will be stored as undefined.
// 2) sum is stored as undefined.

// 2) FUNCTION EXECUTION PHASE

// 1) Places value 100 into n1 and places value 50 into n2.
// 2) Calculation is done and 150 is put in sum variable.
// 3) return tells the function execution context to return to global execution context with the value of sum = 150.
// 4) Returned sum value is put into sum1 varibale.
// 5)Invokes another function sum2() and new function execution context takes place again and the whole process starts over again.
