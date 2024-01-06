// Instead of attaching event handlers to all child elements we can add event handler to the parent element.This is called Event Delegation.

// Lets imagine we have a lot of cards in a container and by clicking on that card we want to remove the card. Now instead of adding event listeners to all of the cards we can add the event listener to the container itself where all the cards exist.

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});
