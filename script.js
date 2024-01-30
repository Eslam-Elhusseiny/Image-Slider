// Variables

let imgArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
let img = document.querySelector(".img");
let imgSrc = img.getAttribute("src");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let btnPlay = document.getElementById("play");
let btnStop = document.getElementById("stop");

let curImg = 0;

// Functions

let imgSlide = function () {
  return img.setAttribute("src", imgArr[curImg]);
};

let prevImg = function () {
  if (curImg <= 0) curImg = imgArr.length;
  curImg--;
  return imgSlide();
};

let nextImg = function () {
  curImg++;
  if (curImg == imgArr.length) curImg = 0;
  return imgSlide();
};

let interval;

let slideShow = function () {
  btnPlay.setAttribute("disabled", "");
  btnStop.classList.add("stop");
  interval = setInterval(nextImg, 1000);
};

let stopShow = function () {
  btnPlay.removeAttribute("disabled", "");
  btnStop.classList.remove("stop");
  clearInterval(interval);
};
