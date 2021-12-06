const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

let i = 0; // current slide
let j = 11; // total slides

//Website/script to go to
const scriptDefault = './index.html';


document.getElementById("next").onclick = function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

document.getElementById("prev").onclick = function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
}

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

function submitted(event) { //function for submission
    event.preventDefault();
    const url = scriptDefault;
    const win = window.open(url, '_blank');
    win.focus();
}