/* menu transition */

const MENU = document.getElementById("menu");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
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

let portfolioPicture = document.querySelectorAll(".img__item");


