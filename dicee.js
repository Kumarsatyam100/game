var randomNumber1 = Math.random() * 6; // 5.99
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "images/dice" +randomNumber1 + ".png"; // selects images from dice1 tp dice6
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" +randomNumber2 + ".png"; // selects images from dice1 tp dice6
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);

if (randomDiceImage > randomDiceImage1) {
  document.querySelector("h1").innerHTML = "😀 Player 1 Wins!";
} else if (randomDiceImage < randomDiceImage1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 😀";
} else {
  document.querySelector("h1").innerHTML = "Drawn 😅😒😋🤤😂";
}
