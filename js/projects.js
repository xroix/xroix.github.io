/*
MIT License

Copyright (c) 2020 XroixHD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

const PROJECTS = {"Cubameter": "https://www.xroix.me/Cubameter"};
const PROJECTS_PREVIEW = {"Cubameter": "resources/projects/preview-cubameter.png"};
const PROJECT_PARENT = document.getElementById("projects");

// Initialize projects
for (let i = 0; i < Object.keys(PROJECTS).length; i++) {
    let name = Object.keys(PROJECTS)[i];
    let e = document.createElement("div");
    e.setAttribute("class", "project main");
    e.innerHTML = _create_template(name, PROJECTS[name], PROJECTS_PREVIEW[name]);
    PROJECT_PARENT.appendChild(e);
    console.log(name);
    console.log(e);
}

let elements_projects = document.getElementsByClassName("project main");
for (let i = 0; i < elements_projects.length; i++) {
    console.log(elements_projects[i]);
    elements_projects[i].addEventListener("click", function click() {
        let name = this.childNodes[0].innerHTML;
        console.log(name + "second");
        window.location = PROJECTS[name];
    });
}

function _create_template(name, url, preview) {
    return '<p class="project logo">' + name + '</p><img class="project preview" src="' + preview + '" alt="Cubetastic game!">';
}