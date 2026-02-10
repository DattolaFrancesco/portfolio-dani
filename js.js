const marquee = document.querySelector(".marquee-track");

const works = ["img/1_Queio.png", "img/2_character.png", "img/4_LETTERING.png", "img/3_Vetrina.png", "img/2_Popup.png", "img/6_Misc..png"];
const allTheWorks = ["img/img-works01/1_QUEIO.png", "img/img-works02/1_CHARACTER.png", "img/img-works04/1_VETRINA.JPG", "img/img-works05/1_POPUP.png"];
const blurredScreen = "./img/blur.gif";
const blurredImg = new Image();
blurredImg.src = blurredScreen;
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
allTheWorks.forEach((w) => {
  const img = new Image();
  img.src = w;
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
btnPush.addEventListener("click", () => {
  switch (counter) {
    case 0:
      window.location.href = "./works.html#01Queio";
      break;
    case 1:
      window.location.href = "./works.html#02Character";
      break;
    case 2:
      window.location.href = "./works.html#03Lettering";
      break;
    case 3:
      window.location.href = "./works.html#04Vetrina";
      break;
    case 4:
      window.location.href = "./works.html#05Popup";
      break;
    case 5:
      window.location.href = "./works.html#06Misc";
      break;
  }
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

// desktop display

const display = document.querySelector("#worksDisplayer");

window.addEventListener("load", () => {
  if (window.innerWidth > 768) {
    display.src = "./img/desktop-tv/tv.jpeg";
    btnDown.classList.add("none");
    btnUp.classList.add("none");
    btnPush.classList.add("none");
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    display.src = "./img/desktop-tv/tv.jpeg";
    btnDown.classList.add("none");
    btnUp.classList.add("none");
    btnPush.classList.add("none");
  } else {
    display.src = "img/GAMEBOYOFFICIAL.png";
    btnDown.classList.remove("none");
    btnUp.classList.remove("none");
    btnPush.classList.remove("none");
  }
});
