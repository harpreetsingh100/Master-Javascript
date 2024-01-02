// This is the best way to add Events. This way we can use multiple event listeners.This  is how to use it.

// node.addEventListener(event,callback);

// const btn = document.querySelector('.btn')

// btn.addEventListener("click", () => {
//   console.log("clicked");
// });

// We can also remove Event listeneres. This is how to use it. Callback reference should be the same.

// node.removeEventListener(event, callback);

// btn.removeEventListener("click", () => {
//   console.log("clicked");
// });

// In this case the event will not be removed beacuse JS is creating a new function here in the memory. So here we will have to make this function outside and pass it in both like this:-

// const handler = () => {
//   console.log("clicked");
// };

// btn.addEventListener("click", handler);
// btn.removeEventListener("click", handler);
