/*

    Work in progress ...

 */

const PROJECTS = {"Cubameter": "xroix.me/Cubameter"};
const PROJECT_PARENT = document.getElementById("projects");

// Add event listeners
document.getElementsByClassName("project active")[0].addEventListener("click", active_project_click);
var elements = document.getElementsByClassName("project blur");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', blurred_project_click);
}

// event listeners
function active_project_click () {
    console.log("Active project was clicked!");
    window.location = window.location + "/Cubameter"
}

function blurred_project_click () {
    console.log("Blurred project was clicked!");
}

function _create_template(name, url, preview, logo) {
    return '<div class="project blur"><p class="project logo">' + name + '</p><img class="project preview" src="' + preview + '" alt="Cubetastic game!"><img class="project logo" src="' + logo + '" alt="Cubetastic game!"></div>';
}