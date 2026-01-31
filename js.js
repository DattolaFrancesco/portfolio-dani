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
const blurredScreen = "./img/blur.jpg";
const work1 = "img/queio-vol1.jpeg";
const work2 =
  "https://plus.unsplash.com/premium_photo-1768053968250-c1ea4a302653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8";
const work3 =
  "https://images.unsplash.com/photo-1768933294181-82778103e501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D";
const work4 =
  "https://plus.unsplash.com/premium_photo-1753982281975-a909c3014db6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D";
const works = [work1, work2, work3, work4];
let counter = 0;
let pressed = false;
const switchPhotoUp = () => {
  pressed = true;
  counter++;
  if (counter > 3) counter = 0;
  const worksPhoto = document.querySelector("#worksPhoto");
  worksPhoto.src = blurredScreen;
  setTimeout(() => {
    worksPhoto.src = works[counter];
    pressed = false;
  }, 500);
};
const switchPhotoDown = () => {
  pressed = true;
  counter--;
  if (counter < 0) counter = 3;
  const worksPhoto = document.querySelector("#worksPhoto");
  worksPhoto.src = blurredScreen;
  setTimeout(() => {
    worksPhoto.src = works[counter];
    pressed = false;
  }, 500);
};

btnUp.addEventListener("click", () => {
  if (!pressed) {
    switchPhotoUp();
  }
});
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
