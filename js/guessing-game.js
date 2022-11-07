/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

// Each time the game begins, a new random number between 1-100 is generated as the winning number.

let state = game

document.getElementsByClassName("form"){
  
}

function playersGuess() {
  if (playersGuess === winningNumber) {
    return "You Win!";
  }
  if (playersGuess !== winningNumber) {
    return "You Lose!";
  }
}

function shuffle(array) {
  let shuffledArray = [],
    n = array.length,
    i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    shuffledArray.push(array.splice(i, 1)[0]);
  }

  return shuffledArray;
}

function newGame() {}
// If the guess submitted is the winning number, the game indicates the player has won. Otherwise, the game indicates the player is allowed to try again.

function generateWinningNumber() {
  return Math.ceil(Math.random() * 100);
}

function winningNumber() {}

function isLower() {}
//A player can input a guess in the input field and submit it.
function playersGuessSubmission() {}

function checkGuess() {}

function provideHint() {}
