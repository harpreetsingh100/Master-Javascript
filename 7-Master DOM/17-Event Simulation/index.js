// If we want to add some event thousand times we can use a for loop.

for (i = 0; i < 1000; i++) {
  element.click();
}

// We can also use setInterval with it.

setInterval(() => {
  element.click();
}, 1000);

// We have some more event simulations :-

// 1) element.foucs()
// 2) element.blur()
// 3) element.blur()
// 4) element.submit()
