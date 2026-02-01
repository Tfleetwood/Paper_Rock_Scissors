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

// Write logic to get human choice

    function getHumanChoice() {
        const choice = prompt("Enter your choice: rock, paper, or scissors?");
            return choice;
    }

// Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;

// Write logic to play a single round
    function playRound(humanChoice, computerChoice) {

            const humanChoiceLower = String(humanChoice).toLowerCase(); 
            console.log(`You chose: ${humanChoiceLower} & the Computer chose: ${computerChoice}`);

            if (humanChoiceLower === "rock" && computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors. 🪨 > ✂️");
                console.log("") // Blank line for readability
                return;
            }

            else if (humanChoiceLower === "paper" && computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock... For some reason 🧐");
                console.log("") // Blank line for readability
                return;
            }
            else if (humanChoiceLower === "scissors" && computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissors beats Paper. ✂️ > 📄");
                console.log("") // Blank line for readability
                return;
            }

            else if (computerChoice === "rock" && humanChoiceLower === "scissors") {
                computerScore++;
                console.log("You lose! Rock beats Scissors 🪨 > ✂️");
                console.log("") // Blank line for readability
                return;
            }

            else if (computerChoice === "paper" && humanChoiceLower === "rock") {
                computerScore++;
                console.log("You lose! Paper beats Rock... For some reason 🧐");
                console.log("") // Blank line for readability
                return;
            }

            else if(computerChoice === "scissors" && humanChoiceLower === "paper") {
                computerScore++;
                console.log("You lose! Scissors beats Paper. ✂️ > 📄");
                console.log("") // Blank line for readability
                return;
            }
            else if (humanChoiceLower === computerChoice) {
                console.log("It's a tie! We both suck at this game!🤝");
                console.log("") // Blank line for readability
                return;
            }
            else {
                console.log("The f**K, please enter rock, paper, or scissors, please. 🤬");}
        }

    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    // // playRound(humanSelection, computerSelection);


// Write the logic to play 5 games (without loops for now, and no arrays either)
    function playGame() {

        const humanSelection1 = getHumanChoice();
        const computerSelection1 = getComputerChoice();
        if (humanSelection1 > computerSelection1) {
            humanScore++;
        } else if (computerSelection1 > humanSelection1) {
            computerScore++;
        }
        playRound(humanSelection1, computerSelection1);

        const humanSelection2 = getHumanChoice();
        const computerSelection2 = getComputerChoice();
        if (humanSelection2 > computerSelection2) {
            humanScore++;
        } else if (computerSelection2 > humanSelection2) {
            computerScore++;
        }
        playRound(humanSelection2, computerSelection2);

        const humanSelection3 = getHumanChoice();
        const computerSelection3 = getComputerChoice();
        if (humanSelection3 > computerSelection3) {
            humanScore++;
        } else if (computerSelection3 > humanSelection3) {
            computerScore++;
        }
        playRound(humanSelection3, computerSelection3);

        const humanSelection4 = getHumanChoice();
        const computerSelection4 = getComputerChoice();
        if (humanSelection4 > computerSelection4) {
            humanScore++;
        } else if (computerSelection4 > humanSelection4) {
            computerScore++;
        }
        playRound(humanSelection4, computerSelection4);

        const humanSelection5 = getHumanChoice();
        const computerSelection5 = getComputerChoice();
        if (humanSelection5 > computerSelection5) {
            humanScore++;
        } else if (computerSelection5 > humanSelection5) {
            computerScore++;
        }
        playRound(humanSelection5, computerSelection5);

        console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
        if (humanScore > computerScore) {
            console.log("Congratulations! You are the overall winner! ... for now! 😏");
        } else if (computerScore > humanScore) {
            console.log("The computer wins overall! Better luck next time sucker! 🤣");
        } else {
            console.log("Something went wrong. You 'tie' this game. Either the computer broke, or you did. 🤯");
        }
    }
    playGame();