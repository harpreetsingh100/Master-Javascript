// To use promise we have two functions.If its fullfiled or rejected we can use these functions.We use .then for fullfiled promise and .catch for rejected promise.

let promise = getPromise();

promise.then((res) => {
  console.log("promise fullfiled", res);
});

promise.catch((err) => {
  console.log("promise rejected", err);
});
