let menu = document.getElementsByClassName("header-left");
let background = document.getElementsByClassName("background-mobile");
var prevScrollpos = window.pageYOffset;

function searchMobile() {
  let search = document.getElementsByClassName("header-right");
  search[0].classList.toggle("active");
}

function menuMobile() {
  menu[0].classList.toggle("active");
  background[0].style.display = "block";
}

function removeMenuMobile() {
  menu[0].classList.remove("active");
  background[0].style.display = "none";
}

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header .nav").style.top = "0";
  } else {
    document.querySelector("header .nav").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
