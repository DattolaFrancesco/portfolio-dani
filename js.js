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
const work1 =
  "https://images.unsplash.com/photo-1768772123991-b17e721119a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8";
const work2 =
  "https://plus.unsplash.com/premium_photo-1768053968250-c1ea4a302653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8";
const work3 =
  "https://images.unsplash.com/photo-1768933294181-82778103e501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D";
const work4 =
  "https://plus.unsplash.com/premium_photo-1753982281975-a909c3014db6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D";
const works = [work1, work2, work3, work4];
let counter = 0;
const switchPhotoUp = () => {
  const worksPhoto = document.querySelector("#worksPhoto");
  counter++;
  if (counter > 3) counter = 0;
  worksPhoto.src = works[counter];
  console.log(counter);
};
const switchPhotoDown = () => {
  const worksPhoto = document.querySelector("#worksPhoto");
  counter--;
  if (counter < 0) counter = 3;
  worksPhoto.src = works[counter];
  console.log(counter);
};

btnUp.addEventListener("click", () => {
  switchPhotoUp();
});
btnDown.addEventListener("click", () => {
  switchPhotoDown();
});
