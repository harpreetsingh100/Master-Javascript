const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// You can access object properties with bracket notation too but here u will have to use strings with the keys.

console.log(car["color"]);
// => white

// Bracket Notation does automatically convert keys to strings.

console.log(car[color]);

// Even though we have color in the object but because we are using bracket notation it will take the variable value.
