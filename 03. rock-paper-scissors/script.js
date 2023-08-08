function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * choicesArray.length);
  let choice = choicesArray[randomIndex];
  return choice;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

game();

function round(playerSelection, computerSelection) {
  let message = "";
  let win = 0;
  let lose = 0;
  if (playerSelection == "rock" && computerSelection == "rock") {
    message = "Stalmate! Repeat!";
    alert(message);
    return message;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    message = "You Lose! Paper beats rock.";
    alert(message);
    lose += 1;
    return message;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    message = "You Win! Rock beats scissor";
    alert(message);
    win += 1;
    return message;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    message = "You win! Paper beats rock.";
    alert(message);
    return message;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    message = "Stalemate! Repeat!";
    alert(message);
    return message;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    message = "You lose! Scissor beats paper";
    alert(message);
    return message;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    message = "You lose! Rock beats scissor";
    alert(message);
    return message;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    message = "You win! Scissor beats paper";
    alert(message);
    return message;
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    message = "Stalemate! Repeat";
    alert(message);
    return message;
  }
}

function game() {
  for (let i = 1; i < 5; i++) {
    let userChoice = prompt("Please input an option from rock-paper-scissor");
    let finalChoice = userChoice.toLowerCase();

    let playerSelection = finalChoice;
    const computerSelection = getComputerChoice();

    round(playerSelection, computerSelection);
  }
}
