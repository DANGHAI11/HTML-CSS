function search_mobile(){
    let search = document.getElementsByClassName("header_right");
    search[0].classList.toggle("active");
}

function menu_mobile(){
    let menu = document.getElementsByClassName("header_left");
    menu[0].classList.add("active");
    menu[0].style.top = '0';
}

function remove_menu_mobile(){
    let menu = document.getElementsByClassName("header_left");
    menu[0].classList.remove("active");
    menu[0].style.top = '-300px';
}
