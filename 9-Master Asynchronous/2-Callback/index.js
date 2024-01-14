// A callback is a function passed as an argument to another function.Callback can be synchronous and asynchronous as well.Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.

// Synchronous Callback

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);

// calculator(1, 2, sum());  We cannot invoke it right away.
// We could have written the whole callback function right there.

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
  console.log(a + b);
});

// Asynchronous Callback

const hello = () => {
  console.log("hello");
};

setTimeout(hello, 2000);
// setTimeout(hello(), 2000);  We cannot invoke it right away.
