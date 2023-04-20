document.addEventListener("DOMContentLoaded", function () {
  // Define the carousel function
  function carousel() {
    let currentImage = document.querySelector(
      '.carousel-container img:not([style*="opacity: 0"])'
    );
    let nextImage =
      currentImage.nextElementSibling ||
      document.querySelector(".carousel-container img:first-child");
    currentImage.style.opacity = 0;
    nextImage.style.opacity = 1;
  }

  // Call the carousel function every few seconds
  setInterval(carousel, 3000); // change image every 4 seconds

  // Add the event listeners for the navbar toggle and document clicks
  let navbarToggle = document.querySelector(".navbar-toggle");
  let menu = document.querySelector(".menu");

  navbarToggle.addEventListener("click", function () {
    navbarToggle.classList.toggle("active");
    menu.classList.toggle("active");
    setTimeout(function () {
      menu.classList.toggle("show");
    }, 50);
    let body = document.querySelector("body");
    body.classList.toggle("menu-active"); // add this line to toggle the class
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !navbarToggle.contains(event.target)) {
      navbarToggle.classList.remove("active");
      menu.classList.remove("active");
      menu.classList.remove("show");
      let body = document.querySelector("body");
      body.classList.remove("menu-active"); // add this line to remove the class
    }
  });
});