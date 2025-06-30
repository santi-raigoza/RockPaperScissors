choices = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

let humanScoreDisplay = document.getElementById("human-score-display");
let computerScoreDisplay = document.getElementById("computer-score-display");

const resultsDisplay = document.querySelector(".results");
const middleDisplay = document.querySelector(".middle");

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
            humanScoreDisplay.textContent = humanScore;
            resultsMessage.textContent = userWinMessage + "\t" + choicesMessage;
        } else {
            console.log(`${computerWinMessage}`);
            computerScore += 1;
            computerScoreDisplay.textContent = computerScore;
            resultsMessage.textContent = computerWinMessage + "\t" + choicesMessage
        }
    }

    resultsDisplay.appendChild(resultsMessage);
}

function playGame(e) {
    const button = e.target.closest("button.btn");
    if (button) {
        const computerChoice = getComputerChoice();
        const userChoice = getUserChoice(e);
        
        playRound(userChoice, computerChoice);
    }

    if (humanScore === 5 || computerScore === 5) {
        gameEnd(humanScore, computerScore);
    }

}

function gameStart(e) {
    document.querySelector(".buttons").addEventListener("click", playGame);
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

    document.querySelector(".buttons").removeEventListener("click", playGame);

    displayPlayAgain();
}

function displayPlayAgain() {
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.classList.add("play-again-btn"); 
    middleDisplay.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", function() {
        playAgain(playAgainButton);
    }, {once: true});
}

function playAgain(playAgainButton) {
    console.log("Play Again");
    resultsDisplay.innerHTML = "";
    middleDisplay.removeChild(playAgainButton);
    resetGameData();
    gameStart();
}

function resetGameData() {
    humanScore = 0;
    humanScoreDisplay.textContent = 0;

    computerScore = 0;
    computerScoreDisplay.textContent = 0;
}

document.addEventListener("DOMContentLoaded", gameStart);
