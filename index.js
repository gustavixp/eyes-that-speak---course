const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav");

hamb.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !hamb.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-                  G O   T O                  -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});
