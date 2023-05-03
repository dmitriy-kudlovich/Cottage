const btnHamburger = document.querySelector("#btnHamburger");
const navMobile = document.querySelector("#navMobile");
const btnClose = document.querySelector("#btnClose");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
const formSubmit = document.querySelector("#formSubmit");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
});

btnHamburger.addEventListener("click", () => {
  navMobile.classList.add("header__nav--mobile--active");
  overlay.classList.add("overlay--active");
  body.classList.add("overflow-hidden");
});

btnClose.addEventListener("click", closeNavMobile);

navMobile.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__link")) {
    closeNavMobile();
  }
});

function closeNavMobile() {
  navMobile.classList.remove("header__nav--mobile--active");
  overlay.classList.remove("overlay--active");
  body.classList.remove("overflow-hidden");
}
