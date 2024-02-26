const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (navbar.classList.contains("open")) {
    // Close hamburger menu
    body.classList.remove("noscroll");
    navbar.classList.remove("open");
    fadeElements.forEach(function (el) {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    // Open hamburger menu
    body.classList.add("noscroll");
    navbar.classList.add("open");
    fadeElements.forEach(function (el) {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});
