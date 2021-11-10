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

let toggle = document.createElement('a');
toggle.setAttribute("class", "nav-btn");
toggle.setAttribute("role", "button");
toggle.setAttribute("href", "#");
toggle.setAttribute("id", "Left_menu_toggle");


let span = document.createElement('span')
span.setAttribute("class", "nav-txt");



nav.prepend(toggle);
toggle.appendChild(span);
toggle.innerHTML = "Toggle Left Menu";

toggle.onclick = function (){
    console.log("clicked");
}