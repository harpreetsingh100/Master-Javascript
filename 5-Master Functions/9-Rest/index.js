// Allows a function to take an indefinite number of arguments and bundle them in an Array.

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

sum(1, 2, 3, 4, 5);

// So here all these numbers are going in args which is an Array.

function min(a, b, c, d) {
  console.log(arguments);
}

// In every function we have arguments. It contains all the arguments provided when calling the function. But this arguments is not an Array. We cannot push anything in it. Arguments is actually a collection. Right now we cannot use array methods on arguments.

// But when we use rest operator we store everthing in array . So we will be able to use array methods.

// We can also take other arguments while using the rest operator.
// But we have to write other argument before the rest operator. Like this :-

function min(param, ...arg) {
  console.log(arg);
  console.log(param);
}
