const btn = createElement("button");

document.querySelector("btn");
btn.addEventListener("click", function () {
  console.log(this);
});

// In an event listener the value of this is always going to be the element that has the event listener. In this case btn.
