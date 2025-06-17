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
    if (userChoice === computerChoice) {
        console.log("Draw");
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1;
        } else if (computerChoice === "scissor") {
            humanScore += 1;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissor") {
            computerScore += 1;
        } else if (computerChoice === "rock") {
            humanScore += 1;
        }
    } else if (userChoice === "scissor") {
        if (computerChoice === "rock") {
            computerScore += 1;
        } else if (computerChoice === "paper") {
            humanScore += 1;
        }
    } else {
        console.log("Error during gameplay")
    }

}

const computerChoice = getComputerChoice();
const userChoice = getUserChoice();

console.log(`User choice is: ${userChoice}`);
console.log(`Computer choice is: ${computerChoice}`);

playRound(userChoice, computerChoice);

if (humanScore > computerScore) {
    console.log("User wins!");
} else if (computerScore > humanScore) {
    console.log("Computer wins!");
}










