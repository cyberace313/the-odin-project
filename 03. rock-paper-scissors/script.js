//Element Selection
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const messageEl = document.getElementById("message-el");

//Starting position:

let userChoice = "";
let computerChoice = "";
let message = "";
let playerScore = 0;
let computerScore = 0;

//Functions:

function game() {
  let playerSelection = userChoice;
  const computerSelection = getComputerChoice();

  round(playerSelection, computerSelection);
}

function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * choicesArray.length);
  let computerChoice = choicesArray[randomIndex];
  return computerChoice;
}

function round(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    message = "Stalmate! Repeat!";
    messageEl.textContent = message;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    message = "You Lose! Paper beats rock.";
    messageEl.textContent = message;
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    message = "You Win! Rock beats scissor";
    messageEl.textContent = message;
    playerScore += 1;
    userScoreEl.textContent = playerScore;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    message = "You win! Paper beats rock.";
    messageEl.textContent = message;
    playerScore += 1;
    userScoreEl.textContent = playerScore;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    message = "Stalemate! Repeat!";
    messageEl.textContent = message;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    message = "You lose! Scissor beats paper";
    messageEl.textContent = message;
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    message = "You lose! Rock beats scissor";
    messageEl.textContent = message;
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    message = "You win! Scissor beats paper";
    messageEl.textContent = message;
    playerScore += 1;
    userScoreEl.textContent = playerScore;
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    message = "Stalemate! Repeat";
    messageEl.textContent = message;
  }
}

rock.addEventListener("click", () => {
  userChoice = "rock";
  game();
});

paper.addEventListener("click", () => {
  userChoice = "paper";
  game();
});

scissor.addEventListener("click", () => {
  userChoice = "scissor";
  game();
});
