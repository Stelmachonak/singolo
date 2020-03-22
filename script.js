/* menu transition */
const MENU = document.getElementById("menu");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll(".nav__link").forEach(el =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

/* slider */

const sliderContainer = document.querySelector(".slider_items");
document
  .querySelectorAll("[data-direction]")
  .forEach(el => el.addEventListener("click", slide));

function slide(e) {
  const direction =
    e.currentTarget.dataset.direction == "left" ? "right" : "left";
  const activeSlide = document.querySelector(".slider__item.active");
  const nextSlide = document.querySelector(".slider__item:not(.active)");
  nextSlide.classList.add("active");
  nextSlide.dataset.direction = e.currentTarget.dataset.direction;
  console.log("slide -> e.target.dataset.direction", e.currentTarget);
  nextSlide.ontransitionend = () => {
    activeSlide.classList.remove("active");
    sliderContainer.classList.remove("sliding");
    nextSlide.ontransitionend = null;
  };

  setTimeout(() => {
    sliderContainer.classList.add("sliding");
    activeSlide.dataset.direction = direction;
    nextSlide.dataset.direction = null;
  }, 50);
}

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
  randomMix();
});

function randomMix() {
  for (let i = arrPortfoliopictures.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrPortfoliopictures[i], arrPortfoliopictures[j]] = [
      arrPortfoliopictures[j],
      arrPortfoliopictures[i]
    ];
    pictureSlider.appendChild(arrPortfoliopictures[i]);
  }
}

/* Form submission */

const closeButton = document.querySelector(".close__btn");
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector(".message__block").classList.remove("hidden");

  let subject = form.elements.subject.value.toString();
  if (subject == "") {
    document.getElementById("result__theme").innerText = "Без темы";
  } else {
    if (subject.length > 40) {
      console.log("subject.length", subject.length);
      subject = subject.slice(0, 45) + "...";
    }
    document.getElementById("result__theme").innerText = `Тема: ${subject}`;
  }
  let description = form.elements.myTextarea.value.toString();
  if (description == "") {
    document.getElementById("result__description").innerText = "Без описания";
  } else {
    if (description.length > 40) {
      description = description.slice(0, 40) + "...";
    }
    document.getElementById("result__description").innerText = `Описание: ${description}`;
  }
   form.elements.name.value = "";
   form.elements.email.value = "";
   form.elements.subject.value = "";
   form.elements.myTextarea.value = "";
});

closeButton.addEventListener("click", () => {
  document.querySelector(".message__block").classList.add("hidden");
});
