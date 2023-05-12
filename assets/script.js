const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");

const arrowRight = document.querySelector(".arrow_right");

let numberOfSlide = slides.length;
const newDiv = '<div class="dot"></div>';

function genereDot(numberOfSlide) {
  document.querySelector(".dots").innerHTML = newDiv.repeat(numberOfSlide);
}

genereDot(numberOfSlide);

let firstDotSelected = document.querySelector(".dot");
firstDotSelected.classList.add("dot_selected");

//************************************************************ */

let bannerImage = document.querySelector(".banner-img");
let bannerP = document.querySelector("p");
let slideNumber = 0;
let dotNumber = "";
let dot = document.querySelectorAll(".dot");
let dotSelected = document.querySelector(".dot_selected");

function changeSlide(sens) {
  slideNumber = slideNumber + sens;
  if (slideNumber > numberOfSlide - 1) slideNumber = 0;
  if (slideNumber < 0) slideNumber = numberOfSlide - 1;
  bannerImage.src = "./assets/images/slideshow/" + slides[slideNumber].image;
  bannerP.innerHTML = slides[slideNumber].tagLine;
  dotNumber = slideNumber;
  dot[dotNumber].classList.add("dot_selected");
  dotSelected.classList.remove(".dot_selected");
}

arrowRight.addEventListener("click", () => {
  changeSlide(+1);
});

arrowLeft.addEventListener("click", () => {
  changeSlide(-1);
});
