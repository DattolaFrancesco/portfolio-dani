const marquee = document.querySelector(".marquee-track");

document.fonts.ready.then(() => {
  setTimeout(() => {
    marquee.classList.add("marquee-ready");
  }, 1000);
});
const body = document.body;

body.addEventListener(
  "touchmove",
  (e) => {
    const scrollTop = body.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = body.scrollHeight;
    const clientHeight = window.innerHeight;

    // se in cima e scroll down
    if (scrollTop <= 0 && e.touches[0].clientY > 0) e.preventDefault();

    // se in fondo e scroll up
    if (scrollTop + clientHeight >= scrollHeight && e.touches[0].clientY < 0) e.preventDefault();
  },
  { passive: false },
);
