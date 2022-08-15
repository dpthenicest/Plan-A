let nav_button_open = document.getElementById("nav_button_open");
let nav_button_close = document.getElementById("nav_button_close");
let nav_reveal = document.getElementById("nav_reveal");
let nav = document.getElementsByTagName("nav");
let remove_copy = document.getElementById("remove_copy");
let add_copy = document.getElementById("add_copy");
let num_copies = document.getElementById("num_copies");
let add_layout = document.getElementById("add_layout");
let success_btn = document.getElementById("finished");

nav_button_open.addEventListener("click", openNavList);
nav_button_close.addEventListener("click", closeNavList);

function openNavList() {
  nav_reveal.classList.add("nav-show");
}

function closeNavList() {
  nav_reveal.classList.remove("nav-show");
}

add_copy.addEventListener("click", addCopy);
remove_copy.addEventListener("click", removeCopy);
let num;

function addCopy(e) {
  num = parseInt(num_copies.textContent);
  num = num + 1;
  num_copies.textContent = num;
}

function removeCopy(e) {
  num = parseInt(num_copies.textContent);
  if (num >= 2) {
    num = num - 1;
    num_copies.textContent = num;
  }
}

function get_ID(clicked_id) {
  let remove_layout = document.getElementById(clicked_id);
  remove_layout.parentElement.removeChild(remove_layout);
}

add_layout.addEventListener("click", addLayout);

function addLayout() {

  let elem = document.createElement("button");
  elem.setAttribute("type", "button");
  elem.setAttribute("id", "1");
  elem.setAttribute("class", "border-0 px-3 py-2 rounded-pill me-2 my-2")
  let i_one = document.createElement("i");
  let i_two = document.createElement("i");
  i_one.setAttribute("class", "fa-solid fa-circle dpb-text-b")
  i_two.setAttribute("class", "fa-solid fa-xmark ps-1 fs-5 text-black-50")
  textNode = document.createTextNode(" Selected Layout ");
  elem.appendChild(i_one);
  elem.appendChild(textNode)
  elem.appendChild(i_two);
  elem.onclick = function() { get_ID(this.id);};

  let layouts = document.getElementById("layouts");
  layouts.appendChild(elem)
}

function displaySuccess(){
  let success = document.getElementById("order-success");
  success.style.visibility = "visible";
  success.style.transitionProperty = "all";
  success.style.transitionDuration = "2s";
  success.style.transitionTimingFunction = "linear";
}

function toggleOpen() {
  let footer_details = document.getElementById("footer_details");
  let angle_down = document.getElementById("angle_down");
  let angle_up = document.getElementById("angle_up");
  
  footer_details.classList.toggle("foot-show");
  angle_down.classList.toggle("d-none");
  angle_up.classList.toggle("d-none");
}

function toggleOpenI() {
  let footer_details = document.getElementById("footer_details_i");
  let angle_down = document.getElementById("angle_down_i");
  let angle_up = document.getElementById("angle_up_i");
  
  footer_details.classList.toggle("foot-show");
  angle_down.classList.toggle("d-none");
  angle_up.classList.toggle("d-none");
}

function toggleOpenII() {
  let footer_details = document.getElementById("footer_details_ii");
  let angle_down = document.getElementById("angle_down_ii");
  let angle_up = document.getElementById("angle_up_ii");
  
  footer_details.classList.toggle("foot-show");
  angle_down.classList.toggle("d-none");
  angle_up.classList.toggle("d-none");
}
