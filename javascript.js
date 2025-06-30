choices = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;
let resultsDisplay = document.querySelector(".results");


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
    
    const resultsMessage = document.createElement("p");
    let choicesMessage = `User choice: ${userChoice}\tComputer choice: ${computerChoice}`

    let userWin = true;
    const userWinMessage = "User Won!";
    const computerWinMessage = "Computer Won!"
    const drawMessage = "Game was a Draw!"

    console.log(choicesMessage);

    if (userChoice === computerChoice) {
        console.log("Draw!")
        resultsMessage.textContent = drawMessage + "\t" + choicesMessage;
    } else {
        if (userChoice === "rock") {
            userWin = computerChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "rock" ? true : false;
        } else if (userChoice === "scissor") {
            userWin = computerChoice === "paper" ? true : false;
        }

        if (userWin) {
            console.log(`${userWinMessage}`);
            humanScore += 1;
            currentDisplayValue = parseInt(humanScoreDisplay.textContent);
            humanScoreDisplay.textContent = currentDisplayValue + 1;
            resultsMessage.textContent = userWinMessage + "\t" + choicesMessage;
        } else {
            console.log(`${computerWinMessage}`);
            computerScore += 1;
            currentDisplayValue = parseInt(computerScoreDisplay.textContent);
            computerScoreDisplay.textContent = currentDisplayValue + 1;
            resultsMessage.textContent = computerWinMessage + "\t" + choicesMessage
        }
    }

    resultsDisplay.appendChild(resultsMessage);
}

function playGame(e) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice(e);

    playRound(userChoice, computerChoice);
    
    if (humanScore === 5 || computerScore === 5) {
        gameEnd(humanScore, computerScore);
    }

}

// make it reset the results once u hit play again 
// function playAgain() {

// }

function gameStart(e) {
    const button = e.target.closest("button.btn");
    if (button) {
        playGame(e);
    }

}

function gameEnd(humanScore, computerScore) {
    const gameWinMessage = "Congrats! You win the game!";
    const gameLoseMessage = "You lose, Computer wins the game";
    const gameEndMessage = document.createElement("p");

    console.log(`Final Score:
    Computer: ${computerScore}
    User: ${humanScore}`);

    if (humanScore > computerScore) {
        console.log(gameWinMessage);
        gameEndMessage.textContent = gameWinMessage;
    } else {
        console.log(gameLoseMessage);
        gameEndMessage.textContent = gameLoseMessage;
    }

    resultsDisplay.appendChild(gameEndMessage);

    document.querySelector(".buttons").removeEventListener("click", gameStart);

    // playAgain();
    // might have to make it so a play again buttons appears instead bc idk if it would wait for the click
}

document.querySelector(".buttons").addEventListener("click", gameStart);
