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

