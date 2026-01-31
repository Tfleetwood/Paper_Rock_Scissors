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

    const humanCase = humanChoice.toLowerCase();
    
    if (humanCase === computerChoice) {
        console.log("It's a tie!");}
        else if (humanCase === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors. 🪨 > ✂️");
            humanScore++;}
        else if (humanCase === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock... For some reason 🧐");
            humanScore++;}
        else if (humanCase === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper. ✂️ > 📄");
            humanScore++;}
        else if (computerChoice === "rock" && humanCase === "scissors") {
            console.log("You lose! Rock beats Scissors 🪨 > ✂️");
            computerScore++;}
        else if (computerChoice === "paper" && humanCase === "rock") {
            console.log("You lose! Paper beats Rock... For some reason 🧐");
            computerScore++;}
        else if(computerChoice === "scissors" && humanCase === "paper") {
            console.log("You lose! Scissors beats Paper. ✂️ > 📄");
            computerScore++;}
        else {
            console.log("Invalid input, please enter rock, paper, or scissors.");
        }
    }


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);