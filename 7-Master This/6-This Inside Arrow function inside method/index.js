const obj = {
  name: "happy",
  parent: function () {
    console.log(this); // Object
    const child = () => {
      console.log(this); // Object
    };
  },
};

// Here the value of THIS is going to be Object because Arrow Function takes value of this from its parent scope.
