function add() {
  console.log(this);
}

const answer = new add();

// In this case the value of THIS is going to be a blank Object. Becoz new makes a blank object.
