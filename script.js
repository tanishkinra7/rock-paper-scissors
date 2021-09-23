"use strict";

let playerScore = 0;
let computerScore = 0;

// To remove errors
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Computer Choice
function computerPlay() {
  const randomPlay = Math.floor(Math.random() * 3) + 1;
  if (randomPlay === 1) {
    return "Rock";
  } else if (randomPlay === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// One Single Round
function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    console.log("It's a Draw");
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    computerScore++;
    console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
  } else {
    playerScore++;
    console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
  }
}

// To see if the player value is correct and play Round
function determinePlays(message) {
  let playerSelection = prompt(message);

  playerSelection = capitalize(playerSelection);
  if (
    playerSelection !== "Rock" &&
    playerSelection !== "Paper" &&
    playerSelection !== "Scissors"
  ) {
    determinePlays("Please enter a Valid Play(Rock,Paper,Scissors)");
  } else {
    const computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }
}

// Full Game
function game() {
  for (let i = 0; i < 5; i++) {
    determinePlays("Enter your Play:(Rock,Paper,Scissors)");
  }
  if (playerScore === computerScore) {
    console.log("It's a tie for god's sake!");
  } else if (playerScore > computerScore) {
    console.log(`Player wins, ${playerScore} vs ${computerScore}`);
  } else {
    console.log(`Computer wins, ${computerScore} vs ${playerScore}`);
  }
}

game();
