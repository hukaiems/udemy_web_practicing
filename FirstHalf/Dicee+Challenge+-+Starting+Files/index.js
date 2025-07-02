var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var imageOne = document.querySelector(".img1");

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imageTwo = document.querySelector(".img2");

var winner = document.querySelector("h1");

if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    imageOne.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    imageTwo.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}

if (randomNumber1 > randomNumber2){
    winner.textContent = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    winner.textContent = "Player 2 Wins!🚩";
}
else {
    winner.textContent = "Draw!";
}
