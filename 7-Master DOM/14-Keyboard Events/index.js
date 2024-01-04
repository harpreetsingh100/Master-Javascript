// There are 3 types of keyboard events.

// 1) keyup
// 2) keydown
// 3) keypress

// We can use these keyboard events on any element but the element needs to be in focus first.

document.addEventListener("keypress", (e) => {
  console.log(e.key);
  console.log(e.code);
});
