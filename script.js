//MAIN

//Initialize score
let numberOfRound = 1;
let playerScore = 0;
let computerScore = 0;

// Greet the user
console.log("Welcome to Rock, Paper, Scissors!");
console.log(`Round ${numberOfRound}`);
// Get the user's choice
let playerSelection = getPlayerSelection();
//Calculate the computer's choice
let computerSelection = getComputerSelection();
//Print out the choices
console.log(`You picked: ${playerSelection}.`);
console.log(`The computer's choice is: ${computerSelection}`);
// Evaluate round
let result = playRound(playerSelection, computerSelection);
//Print the results to the console
printResults(result);
    
//FUNCTIONS

// Get the user's input
function getPlayerSelection(){
    let playerChoice = prompt("Please type in your choice: 'rock', 'paper', or 'scissors'!").toLowerCase();
// Evaluate the user's choice, and let them play again if it isn't correct
    while(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        playerChoice = prompt("Sorry, your choice is invalid. Please type in your choice: 'rock', 'paper', or 'scissors'!").toLowerCase();
    }    
    return playerChoice;
}

// Get the computer's choice 
function getComputerSelection(){
    let matcherNumber = Math.random();
    if (matcherNumber < 0.33){
        return "rock";
    } else if (matcherNumber < 0.66){
        return "paper";
    } else return "scissors";
}

function playRound(playerSelection, computerSelection){    
// Evaluate the round
    let result = "";
    numberOfRound++;
    if(playerSelection === computerSelection){        
        result = "It's a tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
        ){
        computerScore++;
        result = `You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`;
    } else {
        playerScore++;
        result = `You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`;
    }
    return result;
};

function printResults(result){    
    console.log(`The result of this round is: ${result}`);
    console.log(`Your score is: ${playerScore}`);
    console.log(`The computer's score is: ${computerScore}`);
}

function capitalizeFirstLetter(selection){
    return selection.charAt(0).toUpperCase() + selection.slice(1);
}


    