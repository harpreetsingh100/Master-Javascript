// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.

// BREAK
// The break statement can  be used to jump out of a loop:

for (let i = 0; i < 100; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Once i is equal to 5 it control flow will come out of this loop.

// CONTINUE
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

for (let i = 0; i < 100; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// This example skips the value of 5:
