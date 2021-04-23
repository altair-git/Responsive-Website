const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-list");

navToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

for (let link of links) {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
}
