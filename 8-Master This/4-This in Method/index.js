const obj = {
  name: "happy",
  func: function () {
    console.log(this);
  },
};

// In a method like this the value of THIS is going to be the object itself.
