const startMarquee = () => {
  document.documentElement.classList.add("marquee-ready");
};

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    requestAnimationFrame(() => {
      setTimeout(startMarquee, 150);
    });
  });
} else {
  // fallback browser vecchi
  window.addEventListener("load", () => {
    setTimeout(startMarquee, 300);
  });
}
