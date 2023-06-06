function searchMobile() {
  let search = document.getElementsByClassName("header-right");
  search[0].classList.toggle("active");
}

function menuMobile() {
  let menu = document.getElementsByClassName("header-left");
  let close = document.getElementsByClassName("menu-close");
  menu[0].classList.add("active");
  menu[0].style.left = "0";
  close[0].style.display = "block";
}

function removeMenuMobile() {
  let menu = document.getElementsByClassName("header-left");
  let close = document.getElementsByClassName("menu-close");
  menu[0].classList.remove("active");
  menu[0].style.left = "-300px";
  close[0].style.display = "none";
}
