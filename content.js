console.log("Extension is ready...");
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');


// let nav = document.getElementById("lecture_previous_button")[0];
let nav = document.getElementsByClassName('lecture-nav')[0]

// let toggle = document.createElement(
//     <a class="nav-btn" href="" role="button" id="left_menu_toggle">
//       &nbsp;
//       <span class="nav-text">Toggle Left Menu</span>
//     </a>
// );
console.log('*******NAV*******');
console.log(nav);
console.log('*******NAV*******');

let enhance = document.createElement('a');
enhance.setAttribute("class", "nav-btn complete");
enhance.setAttribute("role", "button");
enhance.setAttribute("href", "#");
enhance.setAttribute("id", "Left_menu_toggle");


let span = document.createElement('span')
span.setAttribute("class", "nav-txt");



nav.prepend(enhance);
enhance.appendChild(span);
enhance.innerHTML = "Toggle Sidebar";

enhance.onclick = function (){
    console.log("clicked");

/*
<div class="lecture-left">

  </div>
*/
// var x = document.getElementsByClassName("lecture-left");
let courseSidebar = document.getElementById("courseSidebar");
courseSidebar.classList.toggle("hidden")
// id courseSidebar
}