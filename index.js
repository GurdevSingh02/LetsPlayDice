var currentPlayer = 1; 
var clicksPlayer1 = 0;
var clicksPlayer2 = 0; 

var No1 = document.querySelector(".B1").addEventListener("click", B1);
var No2 = document.querySelector(".B2").addEventListener("click", B2);


var restartButton = document.querySelector(".restart-button");
restartButton.style.display = "none";


restartButton.addEventListener("click", restartGame);

function B1() {
  if (currentPlayer === 1 && clicksPlayer1 === 0) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imgSource1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", imgSource1);
    clicksPlayer1++;
    currentPlayer = 2;
    checkClicks();
  }
}

function B2() {
  if (currentPlayer === 2 && clicksPlayer2 === 0) {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imgSource2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", imgSource2);
    clicksPlayer2++;
    currentPlayer = 1;
    checkClicks();
  }
}

function checkClicks() {
  if (clicksPlayer1 === 1 && clicksPlayer2 === 1) {
    var randomNumber1 = parseInt(document.querySelectorAll("img")[0].getAttribute("src").replace("images/dice", "").replace(".png", ""));
    var randomNumber2 = parseInt(document.querySelectorAll("img")[1].getAttribute("src").replace("images/dice", "").replace(".png", ""));

    if (randomNumber1 > randomNumber2) {
      document.querySelector(".container h1").innerHTML = "Player 1 won";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector(".container h1").innerHTML = "Player 2 won";
    } else {
      document.querySelector(".container h1").innerHTML = "It's a draw!";
    }

    
    restartButton.style.display = "block";
  }
}

function restartGame() {
  
  location.reload();

  restartButton.style.display = "none";
}
