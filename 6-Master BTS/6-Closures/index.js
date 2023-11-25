// A function along with it lexical scope bundled together forms a closure.

function outerFunction() {
  const name = "Happy";
  return function innerFunction() {
    // we can also make this function anonymous
    console.log(name);
  };
}

const newFunction = outerFunction();

// In this example outerFunction returns innerFunction but innerFunction is console logging the name varibale with the help of lexical scope.When we return the innerFunction and store it in newFunction variable it takes the varibales in it lexical scope with itslef. That is called Closure. So when we call newFunction it will not throw an error because it will have the name variable in its closure.
