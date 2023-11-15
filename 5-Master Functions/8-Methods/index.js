// Methods are actions that can be performed in an Object. Basically functions defined in Objects are called methods.

// Example

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

// We can also get rid of key value pair syntax and just define the functions as they are. Example:-

const calculator2 = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
};
