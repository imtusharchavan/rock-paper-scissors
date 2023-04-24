function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}


playerSelection = getComputerChoice(); 
computerSelection = getComputerChoice();


function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Won! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Won! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Won! Paper beats Rock";
  }
}


console.log(singleRound(playerSelection, computerSelection));