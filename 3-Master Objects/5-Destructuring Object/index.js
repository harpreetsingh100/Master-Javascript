const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

// This is how u destructure an Object.

const { brand, model } = vehicleOne;

// If we want to change the names of variables we can do it like this.

const { brand: brandName, model: modelName } = vehicleOne;
