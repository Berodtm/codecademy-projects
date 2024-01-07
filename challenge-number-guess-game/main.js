// Main Variables

// HTML Elements
const roundNumberElement = document.getElementById("round-number");
const targetNumberElement = document.getElementById("target-number");
const humanScoreElement = document.getElementById("human-score");
const computerScoreElement = document.getElementById("computer-score");
const humanGuessElement = document.getElementById("human-guess");
const computerGuessElement = document.getElementById("computer-guess");
const computerWinElement = document.getElementById("computer-win-text");
const humanWinElement = document.getElementById('Human-win-text');
const humanDivElement = document.getElementsByClassName('main-div-3')[0];
const computerDivElement = document.getElementsByClassName('main-div-2')[0];

// numbers
let roundNumber = 0;
let targetNumber = 0;
let humanScore = 0;
let computerScore = 0;
let humanGuess = 0;
let computerGuess = 0;

// buttons
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const makeAGuess = document.getElementById("make-a-guess");
const nextRound = document.getElementById("next-round");

// Functions

const subtractUpdate = () => {
  let currentValue = parseInt(humanGuessElement.value);
  humanGuessElement.value = currentValue - 1;
  if (humanGuessElement.value == 0) {
    subtract.disabled = true;
    subtract.style.backgroundColor = "grey";
  } else if (humanGuessElement.value > 1) {
    add.disabled = false;
    add.style.backgroundColor = "#0D3252";
  }
};

const addUpdate = () => {
  let currentValue = parseInt(humanGuessElement.value);
  humanGuessElement.value = currentValue + 1;
  if (humanGuessElement.value == 9) {
    add.disabled = true;
    add.style.backgroundColor = "grey";
  } else if (humanGuessElement.value < 9) {
    subtract.disabled = false;
    subtract.style.backgroundColor = "#0D3252";
  }
};
// function to prevent manual input typing breaking the game as user would of been able to type greater than 9 or less than 0.
const checkNumber = () => {
  let currentValue = parseInt(humanGuessElement.value);

  if (currentValue < 0) {
    humanGuessElement.value = 0;
    subtract.disabled = false;
    subtract.style.backgroundColor = "#0D3252";
    add.disabled = false;
    add.style.backgroundColor = "#0D3252";
  } else if (currentValue > 9) {
    humanGuessElement.value = 9;
    add.disabled = true;
    add.style.backgroundColor = "grey";
    subtract.disabled = false;
    subtract.style.backgroundColor = "#0D3252";
  }
};

// main function
const makeAGuessFunction = () => {
  let humanGuessValue = parseInt(humanGuessElement.value);
  targetNumber = Math.floor(Math.random() * 9);
  targetNumberElement.innerText = targetNumber;
  computerGuess = Math.floor(Math.random() * 9);
  computerGuessElement.innerText = computerGuess;
  roundNumber++;
  roundNumberElement.innerText = roundNumber;
  makeAGuess.disabled = true;
  makeAGuess.style.backgroundColor = "grey";
  makeAGuess.innerText = "Press Next Round";
  makeAGuess.style.color = "#0D3252";
  subtract.disabled = true;
  add.disabled = true;
  humanGuessElement.disabled = true;

  // Calculate the differences
  const humanDifference = Math.abs(targetNumber - humanGuessValue);
  const computerDifference = Math.abs(targetNumber - computerGuess);

  // Determine if the human is the winner
  const humanIsWinner = humanDifference <= computerDifference;

  let winner;
  if (humanIsWinner) {
    winner = "human";
    humanWinElement.innerText = "Human is the Winner!";
    computerWinElement.innerText = "Computer Loses!";
    humanScore++;
    humanScoreElement.innerText = humanScore;
    humanDivElement.style.boxShadow = "5px 5px 20px 6px #1ed920";
    computerDivElement.style.boxShadow = "5px 5px 20px 6px #df2a2a";
  } else {
    winner = "computer";
    computerWinElement.innerText = "Computer is the Winner!";
    humanWinElement.innerText = "Better luck next time!";
    computerScore++;
    computerScoreElement.innerText = computerScore;
    humanDivElement.style.boxShadow = "5px 5px 20px 6px #df2a2a";
    computerDivElement.style.boxShadow = "5px 5px 20px 6px #1ed920";


  }
};

// Reset function 
const nextRoundFunction = () => {
    subtract.disabled = false;
    subtract.style.backgroundColor = "#0D3252";
    add.disabled = false;
    add.style.backgroundColor = "#0D3252";

    makeAGuess.disabled = false;
    makeAGuess.style.backgroundColor = "#0D3252";
    makeAGuess.style.color = "#2898FA";
    makeAGuess.innerText = "Make a Guess";

    humanDivElement.style.boxShadow = "5px 5px 20px 6px #0d3252";
    computerDivElement.style.boxShadow = "5px 5px 20px 6px #0d3252";

    humanWinElement.innerText = "";
    computerWinElement.innerText = "";
    targetNumberElement.innerText ="?";
    computerGuessElement.innerText = "?";
  };

// Event Listeners and DOM

subtract.addEventListener("click", subtractUpdate);
add.addEventListener("click", addUpdate);
makeAGuess.addEventListener("click", makeAGuessFunction);
nextRound.addEventListener("click", nextRoundFunction);
humanGuessElement.addEventListener("input", checkNumber);
