const btnHamburger = document.querySelector("#btnHamburger");
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (hero.classList.contains("open")) {
    // Close hamburger menu
    hero.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    hero.classList.add("open"); // Open hamburger menu
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
