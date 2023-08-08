const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let messageEl = document.getElementsByClassName("message-el");

// Eventlisternes:

let userChoice = "";

rock.addEventListener("click", () => {
  userChoice = "rock";
  getComputerChoice();
  game();
});

paper.addEventListener("click", () => {
  userChoice = "paper";
  getComputerChoice();
  game();
});

scissor.addEventListener("click", () => {
  userChoice = "scissor";
  getComputerChoice();
  game();
});

function round(playerSelection, computerSelection) {
  let message = "";
  let playerScore = 0;
  let pcScore = 0;
  if (playerSelection == "rock" && computerSelection == "rock") {
    message = "Stalmate! Repeat!";
    messageEl.textContent = message;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    message = "You Lose! Paper beats rock.";
    messageEl.textContent = message;
    computerScore += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    message = "You Win! Rock beats scissor";
    messageEl.textContent = message;
    playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    message = "You win! Paper beats rock.";
    playerScore += 1;
    messageEl.textContent = message;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    message = "Stalemate! Repeat!";
    messageEl.textContent = message;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    message = "You lose! Scissor beats paper";
    pcScore += 1;
    messageEl.textContent = message;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    message = "You lose! Rock beats scissor";
    pcScore += 1;
    messageEl.textContent = message;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    message = "You win! Scissor beats paper";
    playerScore += 1;
    messageEl.textContent = message;
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    message = "Stalemate! Repeat";
    messageEl.textContent = message;
  }
}

function game() {
  let playerSelection = userChoice;
  const computerSelection = getComputerChoice();

  round(playerSelection, computerSelection);
}

function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * choicesArray.length);
  let choice = choicesArray[randomIndex];
  return choice;
}
