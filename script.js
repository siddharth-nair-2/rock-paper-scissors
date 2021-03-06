let playerScore = 0, computerScore = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
    var options = ["Rock", "Paper", "Scissors"];
    var random = options[Math.floor(Math.random() * options.length)];

    return random;
}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It is a draw! Both chose Rock!";
        }
        else if (computerSelection === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock!";
        }
        else { 
            playerScore++;
            return "You Win! Rock beats Scissors!" 
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "paper") return "It is a draw! Both chose Paper!";
        else if (computerSelection === "rock"){ 
            playerScore++; 
            return "You Win! Paper beats Rock!";
        }
        else{ 
            computerScore++;
            return "You Lose! Scissors beats Paper!";
        }

    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") return "It is a draw! Both chose Scissors!";
        else if (computerSelection === "rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors!";
        }
        else{
            playerScore++;
            return "You Win! Scissors beats Paper!";
        }
    }
    else {
        return "Sorry! You had an invalid choice!"
    }
}


function game() {
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = computerPlay();
        console.log(singleRound(playerSelection, computerSelection));
    }

    let str = "Final scores are:\n User: " + playerScore + "\n Computer: " + computerScore;
    let result;
    if(playerScore > computerScore) result = "\nYou are the winner!";
    else if(computerScore > playerScore) result = "\nYou lost! The computer is the winner!";
    else result = "\nWow! It was a draw!"

    return str + result;
}

console.log(game());