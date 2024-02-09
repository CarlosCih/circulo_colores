var circle = document.getElementById("circle");
var x = 0;
var y = 0;
var dx = 5; // Velocidad horizontal
var dy = 5; // Velocidad vertical

function moveCircle() {
    var boundingRect = document.getElementById("bounce-area").getBoundingClientRect();
    var maxX = boundingRect.width - circle.offsetWidth;
    var maxY = boundingRect.height - circle.offsetHeight;

    x += dx;
    y += dy;

    // Rebotar en los bordes horizontales
    if (x < 0 || x > maxX) {
        dx = -dx;
    }

    // Rebotar en los bordes verticales
    if (y < 0 || y > maxY) {
        dy = -dy;
    }

    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

function changeCircleSize() {
    var width = document.getElementById("widthRange").value + "px";
    var height = document.getElementById("heightRange").value + "px";
    
    circle.style.width = width;
    circle.style.height = height;
}

function toggleCircle() {
    if (circle.style.display === "none") {
        circle.style.display = "block";
    } else {
        circle.style.display = "none";
    }
}

function changeCircle() {
    var color = document.getElementById("color").value;

    circle.style.backgroundColor = color;

    var colorPreview = document.getElementById("color-preview");
    colorPreview.style.backgroundColor = color;
}

window.onload = function () {
    var color = document.getElementById("color").value;
    var colorPreview = document.getElementById("color-preview");
    colorPreview.style.backgroundColor = color;

    setInterval(moveCircle, 30); // Mover el círculo cada 30 milisegundos
};

document.getElementById("widthRange").addEventListener("input", changeCircleSize);
document.getElementById("heightRange").addEventListener("input", changeCircleSize);
document.getElementById("color").addEventListener("input", changeCircle);
document.getElementById("toggleButton").addEventListener("click", toggleCircle);
