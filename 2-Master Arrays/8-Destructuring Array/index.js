// Here is the old way of assigning array items to a variable:

const vehicles = ["mustang", "f-150", "expedition"];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// Here is the new way of assigning array items to a variable:

const vehicle = ["mustang", "f-150", "expedition"];

const [cars, trucks, suvs] = vehicles;

// When destructuring arrays, the order that variables are declared is important.

// f we only want the car and suv we can simply leave out the truck but keep the comma:

// const vehicles = ["mustang", "f-150", "expedition"];

// const [car, , suv] = vehicles;
