const menuIcon = document.querySelector(".menu-toggle");
const closeIcon = document.querySelector(".close-menu-toggle");
const mobileMenuItem = document.querySelector(".mobile-menu-items");
const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");

menuIcon.addEventListener("click", () => {
  mobileMenuItem.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuItem.classList.remove("active");
});

allMobileMenuLinks.forEach((l) => {
  l.addEventListener("click", () => {
    mobileMenuItem.classList.remove("active");
  });
});
