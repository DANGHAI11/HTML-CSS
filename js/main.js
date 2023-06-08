const menu = document.getElementsByClassName("header-left");
const background = document.getElementsByClassName("background-mobile");
const search = document.getElementsByClassName("header-right");
let prevScrollpos = window.pageYOffset;
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
