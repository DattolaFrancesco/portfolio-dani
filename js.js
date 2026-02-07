const marquee = document.querySelector(".marquee-track");

const works = ["img/1_Queio.png", "img/2_Character.png", "img/3_LETTERING.png", "img/4_Vetrina.png", "img/5_Popup.png", "img/6_Misc..png"];

const blurredScreen = "./img/blur.gif";
let counter = 0;
let pressed = false;

const btnUp = document.querySelector("#btnUp");
const btnDown = document.querySelector("#btnDown");
const btnPush = document.querySelector("#btnPush");
const worksPhoto = document.querySelector("#worksPhoto");

// ------------------ Preload immagini ------------------
let loadedCount = 0;
btnUp.disabled = true;
btnDown.disabled = true;

works.forEach((src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === works.length) {
      worksPhoto.src = works[0];
      btnUp.disabled = false;
      btnDown.disabled = false;
    }
  };
});

// ------------------ Marquee ------------------
window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    setTimeout(() => {
      marquee.classList.add("marquee-ready");
    }, 1000);
  });
});

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    marquee.classList.add("opacityAnimation");
  } else {
    marquee.classList.remove("opacityAnimation");
  }
});

// ------------------ Funzioni switch foto ------------------
const switchPhotoUp = () => {
  pressed = true;
  counter++;
  if (counter > works.length - 1) counter = 0;
  worksPhoto.src = blurredScreen;
  setTimeout(() => {
    worksPhoto.src = works[counter];
    pressed = false;
  }, 200);
};

const switchPhotoDown = () => {
  pressed = true;
  counter--;
  if (counter < 0) counter = works.length - 1;
  worksPhoto.src = blurredScreen;
  setTimeout(() => {
    worksPhoto.src = works[counter];
    pressed = false;
  }, 200);
};

// ------------------ Event listener pulsanti ------------------
btnUp.addEventListener("click", () => {
  if (!pressed) switchPhotoUp();
});
btnDown.addEventListener("click", () => {
  if (!pressed) switchPhotoDown();
});

// ------------------ Event touch ------------------
btnUp.addEventListener("touchstart", () => btnUp.classList.add("custom-positionUp-touched"), { passive: true });
btnUp.addEventListener("touchend", () => btnUp.classList.remove("custom-positionUp-touched"), { passive: true });
btnUp.addEventListener("touchcancel", () => btnUp.classList.remove("custom-positionUp-touched"), { passive: true });

btnDown.addEventListener("touchstart", () => btnDown.classList.add("custom-positionDown-touched"), { passive: true });
btnDown.addEventListener("touchend", () => btnDown.classList.remove("custom-positionDown-touched"), { passive: true });
btnDown.addEventListener("touchcancel", () => btnDown.classList.remove("custom-positionDown-touched"), { passive: true });

btnPush.addEventListener("touchstart", () => btnPush.classList.add("custom-push-touched"), { passive: true });
btnPush.addEventListener("touchend", () => btnPush.classList.remove("custom-push-touched"), { passive: true });
btnPush.addEventListener("touchcancel", () => btnPush.classList.remove("custom-push-touched"), { passive: true });
