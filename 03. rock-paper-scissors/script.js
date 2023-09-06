//Element Selection
const choices = document.querySelectorAll(".choices");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const messageEl = document.getElementById("message-el");
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resetBtn = document.querySelector(".reset-btn");

//Scores

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

//Functions:

resetBtn.addEventListener('click', () => {
  
})


function setMessage(message) {
  messageEl.textContent = message;
}

function endGame(winner) {
  setMessage(`${winner} wins the round!`);
  resetBtn.classList.remove("hidden");
  gameEnded = true;
}

function round(playerSelection) {
  if (gameEnded) return;
  let choicesArray = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * choicesArray.length);
  let computerSelection = choicesArray[randomIndex];

  computerChoiceDisplay.textContent = `Computer Choice: ${computerSelection}`;
  userChoiceDisplay.textContent = `Your Choice: ${playerSelection}`;

  if (playerSelection === computerSelection) {
    setMessage("Stalmate! Repeat!");
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    setMessage("You Lose! Paper beats rock.");
    computerScore += 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    setMessage("You Win! Rock beats scissor");
    playerScore += 1;
  }

  userScoreEl.textContent = `Player: ${playerScore}`;
  computerScoreEl.textContent = `Computer: ${computerScore}`;

  if (playerScore === 5) {
    endGame("Player");
  } else if (computerScore === 5) {
    endGame("Computer");
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    round(choice.id);
  });
});
