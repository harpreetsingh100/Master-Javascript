// There are three types of scopes in Javascript.

// 1. Global Scope

let global = "global";
// We can use this variable anywhere bcoz it is written in global scope.

// 2. Local Scope

{
  let local = "local";
  const local2 = "local2";
  // We can only use these variables in these {} brackets if .
  var local3 = "local3";
  //   We can use this variable anywhere var varibale is global scoped. It does not care about local scope.
}

// 3. Lexical Scope

// A variable defined outside a function can be accessible inside another function defined after the variable declaration. The opposite is not true.

function outerFunction() {
  let x = 1;
  let y = 2;
  function innerFunction() {
    console.log(x);
  }

  innerFunction();
}

// In this case we can are console logging the x varibale but it is not in the function. So it goes out of the function and takes the parent's x variable. This is called lexical scope. But if we had x varibale in the inner scope it would have taken that x varibale. But whatever varibales we make inside inner function we wont be able to use them outside inner function.
