// Lets imagine there is some async function that gives back some data to us and we want to get that data one after another in a particular order. For that we will have to use promise chaining.

getData()
  .then((result) => {
    return doSomethingElse(result);
  })
  //   return value will be stored in this .then and we will call another promise
  .then((newResult) => {
    return doThirdThing(newResult);
  })
  //   return value will be stored in this .then and we will call another promise
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  //   if something doesnt go right then .catch block will work.
  .catch((err) => {
    console.log(err);
  });
