/* menu transition */

const MENU = document.getElementById("menu");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll(".nav__link").forEach(el =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

/* slider */

/* phone screen on/off */

let iphoneVertical = document.querySelector(".iphone__vertical");
let iphoneHorizontal = document.querySelector(".iphone__horizontal");
let blackScreenVertical = document.querySelector(".black_screen_vertical");
let blackScreenHorizontal = document.querySelector(".black_screen_horizontal");

iphoneVertical.onclick = function() {
  blackScreenVertical.classList.toggle("display_off");
  blackScreenVertical.classList.toggle("display_on");
};

iphoneHorizontal.onclick = function() {
  blackScreenHorizontal.classList.toggle("display_off");
  blackScreenHorizontal.classList.toggle("display_on");
};

/* portfolio border on imges*/

let portfolioPictures = document.querySelectorAll(".img__item");
let activeImg = null;

for (let i = 0; i < portfolioPictures.length; i++) {
  portfolioPictures[i].addEventListener("click", function() {
    if (activeImg) {
      activeImg.classList.remove("active");
    }
    activeImg = this;
    this.classList.add("active");
  });
}

/* switch picture position */

const portfolioNav = document.getElementById("portfolionav");
const pictureSlider = document.querySelector(".picture__slider");
const all = document.querySelector(".all");
const web = document.querySelector(".web_design");
const graphic = document.querySelector(".graphic_design");
const atwork = document.querySelector(".atwork");

let arrPortfoliopictures = [].slice.call(portfolioPictures);

portfolioNav.addEventListener("click", event => {
  portfolioNav
    .querySelectorAll(".portfolio__nav__list_item")
    .forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

all.addEventListener("click", randomMix);
web.addEventListener("click", randomMix);
graphic.addEventListener("click", randomMix);
atwork.addEventListener("click", randomMix);

function randomMix(arr) {
  for (let i = arrPortfoliopictures.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrPortfoliopictures[i], arrPortfoliopictures[j]] = [arrPortfoliopictures[j], arrPortfoliopictures[i]]; 
    pictureSlider.appendChild(arrPortfoliopictures[i]);
}
}
