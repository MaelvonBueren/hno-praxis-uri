if (window.innerWidth <= 1024) {
  const bg = document.querySelector(".mobile-parallax-bg");

  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.4;
    bg.style.transform = `translateY(${offset}px)`;
  });
}
