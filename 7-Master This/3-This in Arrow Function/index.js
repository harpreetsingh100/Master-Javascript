// Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".

const myFunction = () => {
  console.log(this);
};

// call it
myFunction();

//  Arrow functions inherit this from the parent scope, in this case the global one so it will be window object.
