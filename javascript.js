choices = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor((Math.random()*3))];
}

function getUserChoice(e) {
    let target = e.target.closest('.Rock, .Paper, .Scissor');

    switch(target.className) {
        case 'Rock':
            return "rock";
        case 'Paper':
            return "paper";
        case 'Scissor':
            return "scissor";
        default: 
            return null;
    }
}

function playRound(userChoice, computerChoice) {
    let humanScoreDisplay = document.getElementById("human-score-display");
    let computerScoreDisplay = document.getElementById("computer-score-display");
    let currentDisplayValue = 0;

    let userWin = true;

    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("Draw!")
    } else {
        if (userChoice === "rock") {
            userWin = computerChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "rock" ? true : false;
        } else if (userChoice === "scissor") {
            userWin = computerChoice === "paper" ? true : false;
        }

        if (userWin) {
            console.log("User won!");
            humanScore += 1;
            currentDisplayValue = parseInt(humanScoreDisplay.textContent);
            humanScoreDisplay.textContent = currentDisplayValue + 1;
        } else {
            console.log("Computer won!");
            computerScore += 1;
            currentDisplayValue = parseInt(computerScoreDisplay.textContent);
            computerScoreDisplay.textContent = currentDisplayValue + 1;
        }

    }
}

function playGame(e) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice(e);

    playRound(userChoice, computerChoice);
    
    if (humanScore === 5 || computerScore === 5) {
        gameEnd(humanScore, computerScore);
    }

}

// function playAgain() {

// }

function gameStart(e) {
    const button = e.target.closest("button.btn");
    if (button) {
        playGame(e);
    }

}

function gameEnd(humanScore, computerScore) {

    console.log(`Final Score:
    Computer: ${computerScore}
    User: ${humanScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else {
        console.log("Computer wins the game")
    }

    document.querySelector(".buttons").removeEventListener("click", gameStart);

    // playAgain();
}

document.querySelector(".buttons").addEventListener("click", gameStart);
