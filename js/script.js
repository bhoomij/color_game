var numSquares = 6;
var bodyColor = "#232323";
var resetButtonInitText = "New Colors";
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("#heading");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
displayColor.textContent = pickColor();


easyButton.addEventListener("click", function () {
    numSquares = 3;
    resetGame();
    easyButton.classList.toggle('selected');
    hardButton.classList.toggle('selected');
});

hardButton.addEventListener("click", function () {
    numSquares = 6;
    resetGame();
    easyButton.classList.toggle('selected');
    hardButton.classList.toggle('selected');
});

resetButton.addEventListener("click", function () {
    resetGame();
});

function resetGame() {
    colors = generateRandomColor(numSquares);

    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    displayColor.textContent = pickColor();
    heading.style.backgroundColor = bodyColor;
    resetButton.textContent = resetButtonInitText;

    if (numSquares === 3) {
        for (var i = 3; i < squares.length; i++) {
            squares[i].style.backgroundColor = bodyColor;
        }
    }
}

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
            this.style.display = bodyColor;
            resetButton.textContent = resetButtonInitText;
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
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}