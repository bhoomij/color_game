colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("#heading");
var resetButton = document.querySelector("#reset");

displayColor.textContent = pickColor();

resetButton.addEventListener("click", function () {
    colors = generateRandomColor(6);
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    displayColor.textContent = pickColor();
    heading.style.backgroundColor = "#232323";

});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];


    squares[i].addEventListener('click', function () {
        var selectedColor = this.style.backgroundColor;
        if (selectedColor === displayColor.textContent) {
            messageDisplay.textContent = "Correct!";
            changeColor(selectedColor);
            heading.style.backgroundColor = selectedColor;
            resetButton.textContent = "Play Again";
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    })

}

function changeColor(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColor(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(generatorColor());
    }
    return arr;
}

function generatorColor() {
    var r = Math.floor(Math.random() * 266);
    var g = Math.floor(Math.random() * 266);
    var b = Math.floor(Math.random() * 266);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}