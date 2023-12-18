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

function outerFunction2() {
  const name = "Happy";
  function innerFunction2() {
    // we can also make this function anonymous
    console.log(name);
  }
  name = "Harry";
  return innerFunction2;
}

const newFunction2 = outerFunction();

// In this case it seems like the name wont be changed to Harry in Closure but it does change to harry. Because function remembers the reference to name's memory.
