// Write logic to get computer choice
function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return "rock";
    } else if (computer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// Write logic to get human choice
function getHumanChoice() {
    prompt("Enter rock, paper, or scissors:");
}
console.log(getHumanChoice());

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Write logic to play a single round
function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);