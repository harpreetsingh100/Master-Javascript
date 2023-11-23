const obj = {
  name: "happy",
  parent: function () {
    console.log(this); // Object
    function child() {
      console.log(this); // Window
    }
  },
};
