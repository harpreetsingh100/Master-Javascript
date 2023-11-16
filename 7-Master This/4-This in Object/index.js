// When used in an object method, this refers to the object.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// This is how we use variables in a method in Object. If we dont use this we will get an error.
