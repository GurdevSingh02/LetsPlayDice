var currentPlayer = 1; // Variable to track the current player
var clicksPlayer1 = 0; // Variable to track the number of clicks for Player 1
var clicksPlayer2 = 0; // Variable to track the number of clicks for Player 2

var No1 = document.querySelector(".B1").addEventListener("click", B1);
var No2 = document.querySelector(".B2").addEventListener("click", B2);

function B1() {
  if (currentPlayer === 1 && clicksPlayer1 === 0) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imgSource1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", imgSource1);
    clicksPlayer1++; // Increment the click count for Player 1
    currentPlayer = 2; // Set the current player to Player 2
    checkClicks(); // Check if both players have rolled the dice
  }
}

function B2() {
  if (currentPlayer === 2 && clicksPlayer2 === 0) {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imgSource2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", imgSource2);
    clicksPlayer2++; // Increment the click count for Player 2
    currentPlayer = 1; // Set the current player back to Player 1
    checkClicks(); // Check if both players have rolled the dice
  }
}

var restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", restartGame);

function restartGame() {
 
  location.reload();
}

function checkClicks() {
  if (clicksPlayer1 === 1 && clicksPlayer2 === 1) {
    // Both players have rolled the dice once
    var randomNumber1 = parseInt(document.querySelectorAll("img")[0].getAttribute("src").replace("images/dice", "").replace(".png", ""));
    var randomNumber2 = parseInt(document.querySelectorAll("img")[1].getAttribute("src").replace("images/dice", "").replace(".png", ""));

    if (randomNumber1 > randomNumber2) {
      document.querySelector(".container h1").innerHTML = "Player 1 won";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector(".container h1").innerHTML = "Player 2 won";
    } else {
      document.querySelector(".container h1").innerHTML = "It's a draw!";
    }
  }
}

