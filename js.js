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

const btnUp = document.querySelector("#btnUp");
const btnDown = document.querySelector("#btnDown");
const btnPush = document.querySelector("#btnPush");
const blurredScreen = "./img/blur.gif";
const work1 = "img/Queio_1.png";
const work2 = "img/2_PopUP.png";
const work3 = "img/3_Vetrina.png";
const work4 = "img/4_Lettering.png";
const work5 = "img/5_Character.png";
const work6 = "img/6_Misc..png";
const works = [work1, work2, work3, work4, work5, work6];
let counter = 0;
let pressed = false;
const switchPhotoUp = () => {
  pressed = true;
  counter++;
  if (counter > 5) counter = 0;
  const worksPhoto = document.querySelector("#worksPhoto");
  worksPhoto.src = blurredScreen;
  setTimeout(() => {
    worksPhoto.src = works[counter];
    pressed = false;
  }, 200);
};
const switchPhotoDown = () => {
  pressed = true;
  counter--;
  if (counter < 0) counter = 5;
  const worksPhoto = document.querySelector("#worksPhoto");
  worksPhoto.src = blurredScreen;
  setTimeout(() => {
    worksPhoto.src = works[counter];
    pressed = false;
  }, 200);
};

btnUp.addEventListener("click", () => {
  if (!pressed) {
    switchPhotoUp();
  }
});
btnUp.addEventListener(
  "touchstart",
  () => {
    btnUp.classList.add("custom-positionUp-touched");
  },
  { passive: true },
);
btnUp.addEventListener(
  "touchend",
  () => {
    btnUp.classList.remove("custom-positionUp-touched");
  },
  { passive: true },
);
btnUp.addEventListener(
  "touchcancel",
  () => {
    btnUp.classList.remove("custom-positionUp-touched");
  },
  { passive: true },
);
btnDown.addEventListener("click", () => {
  if (!pressed) {
    switchPhotoDown();
  }
});
btnDown.addEventListener(
  "touchstart",
  () => {
    btnDown.classList.add("custom-positionDown-touched");
  },
  { passive: true },
);
btnDown.addEventListener(
  "touchend",
  () => {
    btnDown.classList.remove("custom-positionDown-touched");
  },
  { passive: true },
);
btnDown.addEventListener(
  "touchcancel",
  () => {
    btnDown.classList.remove("custom-positionDown-touched");
  },
  { passive: true },
);
btnPush.addEventListener(
  "touchstart",
  () => {
    btnPush.classList.add("custom-push-touched");
  },
  { passive: true },
);
btnPush.addEventListener(
  "touchend",
  () => {
    btnPush.classList.remove("custom-push-touched");
  },
  { passive: true },
);
btnPush.addEventListener(
  "touchcancel",
  () => {
    btnPush.classList.remove("custom-push-touched");
  },
  { passive: true },
);
