const marquee = document.querySelector(".marquee-track");

document.fonts.ready.then(() => {
  setTimeout(() => {
    marquee.classList.add("marquee-ready");
  }, 1000);
});

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    marquee.classList.add("opacityAnimation");
  } else marquee.classList.remove("opacityAnimation");
});
function setFullHeight() {
  const vh = window.innerHeight;
  document.querySelectorAll(".size-custom, .bg-custom::before").forEach((el) => {
    el.style.height = `${vh}px`;
  });
}

window.addEventListener("resize", setFullHeight);
window.addEventListener("load", setFullHeight);
