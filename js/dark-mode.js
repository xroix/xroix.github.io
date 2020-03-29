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

const COLOR_WHITE = getComputedStyle(document.documentElement)
    .getPropertyValue('--white');
const COLOR_BLACK = getComputedStyle(document.documentElement)
    .getPropertyValue('--black');
let dark_mode_on = false;

// Dark mode switch
let element_footer = document.getElementById("dark-mode");
element_footer.addEventListener("click", function click() {
    if (!dark_mode_on) {
        this.setAttribute("class", "active");
        this.innerHTML = "Dark Mode 🌕";
        document.documentElement.style
            .setProperty('--white', '#121212');
        document.documentElement.style
            .setProperty('--black-text', COLOR_WHITE);
        dark_mode_on = true;

    } else {
        this.setAttribute("class", "");
        this.innerHTML = "Light Mode ☀️";
        document.documentElement.style
            .setProperty('--white', COLOR_WHITE);
        document.documentElement.style
            .setProperty('--black-text', COLOR_BLACK);
        dark_mode_on = false;
    }

});