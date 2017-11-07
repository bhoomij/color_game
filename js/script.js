var numSquares = 6;
var bodyColor = "#232323";
var resetButtonInitText = "New Colors";
var colors = generateRandomColor(numSquares);
var messageArr = ["Correct!", "Try Again"];
var resetButtonTextArr = ["New Colors", "Play Again?"];

var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");
displayColor.textContent = pickColor();


for (var i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function () {
        modes[0].classList.remove('selected');
        modes[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        console.log(numSquares);
        resetGame();
    });
}

resetButton.addEventListener("click", function () {
    resetGame();
});

function resetGame() {
    colors = generateRandomColor(numSquares);

    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    displayColor.textContent = pickColor();
    heading.style.backgroundColor = "steelblue";
    resetButton.textContent = resetButtonTextArr[0];
    messageDisplay.textContent = "";

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
            messageDisplay.textContent = messageArr[0];
            changeColor(selectedColor);
            heading.style.backgroundColor = selectedColor;
            resetButton.textContent = resetButtonTextArr[1];
        } else {
            messageDisplay.textContent = messageArr[1];
            this.style.backgroundColor = bodyColor;
            resetButton.textContent = resetButtonTextArr[0];
        }
    })

}

function changeColor(color) {
    for (var i = 0; i < colors.length; i++) {
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

function generatorColor(data) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // check if rgb is (35, 35, 35) which is body-color #232323, then generate other color
    if (r === 35 && g === 35 && b == 35) {
        return generatorColor(12);
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}