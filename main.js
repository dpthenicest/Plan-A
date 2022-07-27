nav_button = document.getElementById("nav_button_open");
nav_button_close = document.getElementById("nav_button_close");
nav_reveal = document.getElementById("nav_reveal");
nav = document.getElementsByTagName("nav")

nav_button.addEventListener("click", openNavList);
nav_button_close.addEventListener("click", closeNavList);

function openNavList () {
  nav_reveal.classList.add("nav-show");
}

function closeNavList (){
  nav_reveal.classList.remove("nav-show")
}
