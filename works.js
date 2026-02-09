//  href from index

const loadCarousel = () => {
  const hash = window.location.hash;

  if (hash) {
    window.scrollTo(0, 0);

    setTimeout(() => {
      window.location = `./works.html${hash}`;
    }, 1000);
  }
};
window.addEventListener("load", () => {
  loadCarousel();
});
window.addEventListener("pageshow", () => {
  loadCarousel();
});
