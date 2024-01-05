// When we trigger the child element event the events on its parent elements are also triggered. But when we trigger the  parent element events the child elements events are not triggered. It is called event bubbling.

// We can stop it like this:-

const body = document.body;
body.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Use captture:-

body.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  },
  true
);

// OR

body.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  },
  { capture: true }
);

// Now the event bubbling will go upside down. From parent to Child.

body.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  },
  { once: true }
);

body.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  },
  { capture: true, once: true }
);

// With this event will only work once and will be removed after that.
