/* Image Carousel 01 - index.js */
import "./style.css";

const imgCnt = document.getElementById("imageContainer");

const imgArray = document.getElementsByTagName("img");

let currentIndex = 0;

let timeInterval = 5000;
/**
 * Execute the function 'runShow()' with the interval of
 * 5000 miliseconds.
 **/
let interval = setInterval(runShow, timeInterval);

function runShow() {
  currentIndex++;
  changeImage();
}

function changeImage() {
  if (currentIndex > imgArray.length - 1) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = imgArray.length - 1;
  }

  imgCnt.style.transform = `translateX(calc(${-currentIndex} * var(--image-width))`;
}
}
