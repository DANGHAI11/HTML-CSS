let menu = document.getElementsByClassName("header-left");
let background = document.getElementsByClassName("background-mobile");
var prevScrollpos = window.pageYOffset;
let search = document.getElementsByClassName("header-right");

function searchMobile() {
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
  if (prevScrollpos < currentScrollPos) {
    document.querySelector("header .nav").style.top = "-200px";
    search[0].classList.remove("active");
  }
  else{
    document.querySelector("header .nav").style.top = "0";
    search[0].classList.remove("active");
  }
  prevScrollpos = currentScrollPos;
};


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
