const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");
const active = document.querySelector(".toggle.active");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});
