const marquee = document.querySelector(".marquee-track");

document.fonts.ready.then(() => {
  setTimeout(() => {
    marquee.classList.add("marquee-ready");
  }, 1000);
});
// Blocca lo scroll in basso quando arrivi in fondo
(function () {
  let startY = 0;

  document.addEventListener(
    "touchstart",
    (e) => {
      // salva la posizione iniziale del touch
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const currentY = e.touches[0].clientY;
      const diff = currentY - startY; // positivo se si trascina verso il basso

      // se sei in fondo e provi a scrollare verso il basso
      if (scrollTop + clientHeight >= scrollHeight && diff < 0) {
        e.preventDefault(); // blocca il movimento
      }

      // se sei in cima e provi a scrollare verso l'alto (rubber band)
      if (scrollTop <= 0 && diff > 0) {
        e.preventDefault(); // blocca il movimento
      }
    },
    { passive: false },
  );
})();
