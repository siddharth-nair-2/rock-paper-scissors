let playerScore = 0, computerScore = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
    var options = ["Rock", "Paper", "Scissors"];
    var random = options[Math.floor(Math.random() * options.length)];

    return random;
}