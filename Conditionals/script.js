// if

const age = 18;

if (age > 18) console.log("He can drive");

// if else

if (age > 18) {
  console.log("He can drive");
} else {
  console.log("He cant drive");
}

// else if

if (age > 18) {
  console.log("He can drive");
} else if (age > 18 && age < 16) {
  console.log("He can learn driving");
} else {
  console.log("He cant drive");
}

// switch

switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
