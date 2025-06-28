choices = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor((Math.random()*3))];
}

// console.log(getComputerChoice());

function getUserChoice() {
    return prompt("Rock, Paper, or Scissor?").toLowerCase();
}

function playRound(userChoice, computerChoice) {
    let userWin = true;

    if (userChoice === computerChoice) {
        console.log("Draw!")
    } else {
        if (userChoice === "rock") {
            userWin = computerChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "rock" ? true : false;
        } else if (userChoice === "scissor") {
            userWin = computerChoice === "paper" ? true : false;
        }

        if (userWin) {
            console.log("User won!");
            humanScore += 1;
        } else {
            console.log("Computer won!");
            computerScore += 1;
        }
    }
}

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         const computerChoice = getComputerChoice();
//         const userChoice = getUserChoice();

//         console.log(`Round ${i}: `);
//         console.log(`User choice is: ${userChoice}`);
//         console.log(`Computer choice is: ${computerChoice}`);

//         playRound(userChoice, computerChoice);
//     }
// }

playGame()

console.log(`Final Score:
Computer: ${computerScore}
User: ${humanScore}`);









