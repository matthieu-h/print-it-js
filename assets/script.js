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

const dotSelected = document.querySelector(".dot");
dotSelected.classList.add("dot_selected");

//************************************************************ */

let bannerImage = document.querySelector(".banner-img");
let slideNumber = 0;
let bannerP = document.querySelector("p");

function changeSlide(sens) {
  slideNumber = slideNumber + sens;
  bannerImage.src = "./assets/images/slideshow/" + slides[slideNumber].image;
  bannerP.innerHTML = slides[slideNumber].tagLine;
}

arrowRight.addEventListener("click", () => {
  changeSlide(+1);
});

arrowLeft.addEventListener("click", () => {
  changeSlide(-1);
});
