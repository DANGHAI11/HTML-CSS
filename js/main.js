function searchMobile() {
  let search = document.getElementsByClassName("header-right");
  search[0].classList.toggle("active");
}

function menuMobile() {
  let menu = document.getElementsByClassName("header-left");
  menu[0].classList.add("active");
  menu[0].style.top = "0";
}

function removeMenuMobile() {
  let menu = document.getElementsByClassName("header-left");
  menu[0].classList.remove("active");
  menu[0].style.top = "-300px";
}
