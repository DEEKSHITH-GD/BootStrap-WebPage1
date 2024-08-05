window.onscroll = function() {
  scrollTriggerFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollTriggerFunction() {
  if (window.innerWidth >= 992) {
      if (window.scrollY >= sticky) {
          navbar.classList.add("sticky", "bg-color", "pt-3");
          navbar.classList.remove("bg-transparent", "mt-2");
      } else {
          navbar.classList.remove("sticky", "bg-color", "pt-3");
          navbar.classList.add("bg-transparent", "mt-2");
      }
  } else {
      navbar.classList.remove("sticky", "bg-color", "pt-3");
      navbar.classList.add("bg-transparent", "mt-2");
  }
}



document.getElementById('toggleButton').addEventListener('click', function() {
    var icon = document.getElementById('toggleIcon');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-x');
    } else {
      icon.classList.remove('fa-x');
      icon.classList.add('fa-bars');
    }
  });
