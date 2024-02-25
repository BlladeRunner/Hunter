const btnHamburger = document.querySelector("#btnHamburger");
const hero = document.querySelector(".hero");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (hero.classList.contains("open")) {
    hero.classList.remove("open");
  } else {
    hero.classList.add("open");
  }
});
