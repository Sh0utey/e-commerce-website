const burgerButton = document.querySelector(".burger-button");
const cross = document.querySelector(".close");
const links = document.querySelector(".links");

cross.addEventListener("click", () => {
  links.style.animation = "close-menu 1s";
  setTimeout(() => {
    links.style.visibility = "hidden";
  }, 1000);
});

burgerButton.addEventListener("click", () => {
  links.style.visibility = "visible";
  links.style.animation = "open-menu 1s";
});
