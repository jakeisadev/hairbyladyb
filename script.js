let navbarToggle = document.querySelector('.navbar-toggle');
let menu = document.querySelector('.menu');

navbarToggle.addEventListener('click', function() {
  navbarToggle.classList.toggle('active');
  menu.classList.toggle('active');
  setTimeout(function() {
    menu.classList.toggle('show');
  }, 50);
});

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !navbarToggle.contains(event.target)) {
    navbarToggle.classList.remove('active');
    menu.classList.remove('active');
    menu.classList.remove('show');
  }
});