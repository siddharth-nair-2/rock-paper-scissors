function computerPlay(){
    var options = ["Rock", "Paper", "Scissors"];
    var random = options[Math.floor(Math.random() * options.length)];

    return random;
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === "rock"){
        if(computerSelection === "rock") return "It is a draw! Both chose Rock!";
        else if(computerSelection === "paper") return "You Lose! Paper beats Rock!";
        else return "You Win! Rock beats Scissors!"
    }

    else if(playerSelection === "paper"){
        if(computerSelection === "paper") return "It is a draw! Both chose Paper!";
        else if(computerSelection === "rock") return "You Win! Paper beats Rock!";
        else return "You Lose! Scissors beats Paper!"
    }

    else if(playerSelection === "scissors"){
        if(computerSelection === "scissors") return "It is a draw! Both chose Scissors!";
        else if(computerSelection === "rock") return "You Lose! Rock beats Scissors!";
        else return "You Win! Scissors beats Paper!"
    }
    else{
        return "Sorry! You had an invalid choice!"
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(singleRound(playerSelection, computerSelection));