// In Javascript a variable can be used before it has been declared. It is possible because of HOISTING.

console.log(a);

var a = 1;

// Here we wont get an error.In this case the output will be undefined. Bcoz of the way execution context works the variable is already stored in the memory as undefined.

console.log(b);

let b = 2;

// Here we will get an error. Because let and const are block scoped and they are hoisted and set to undefined too. But they are stored in TEMPORAL DEAD ZONE where we cannot access them.

hi();

function hi() {
  console.log("hi");
}

// Here we wont get an error. Because we already have this function in our memory.

// On the other hand, function expressions do not hoist in the same way:

notHoistedFunction();

var notHoistedFunction = function () {
  console.log("This function expression is not hoisted!");
};

func();

var func = () => {
  console.log("func");
};

// These would result in an error because the function expression is not hoisted because they are behaving like a variable. These functions will be allocated undefined and we cannot call undefined. Only in function declaration we wont get an error.
