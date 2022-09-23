//MAIN

//Initialization of variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let result;
let numberOfRounds = 5;

// Greet the user
console.log("Welcome to Rock, Paper, Scissors!");
game();
   
//FUNCTIONS

function game(){
    for(let i = 1; i <= numberOfRounds; i++){
        console.log(`\nRound ${i}\n\n`);
        if (i == numberOfRounds) console.log("Final round!\n\n");
        // Get the user's choice
        playerSelection = getPlayerSelection();
        //Calculate the computer's choice
        computerSelection = getComputerSelection();
        //Print out the choices
        console.log(`You picked: ${playerSelection}.`);
        console.log(`The computer's choice is: ${computerSelection}`);
        // Evaluate round
        result = playRound(playerSelection, computerSelection);
        //Print the results to the console
        printResults(result);        
    }
    printFinalResults();
}

//Print the final results
function printFinalResults(){
    if (playerScore == computerScore){
        console.log(`${playerScore} to ${computerScore}! It's a draw!`);
    } else {
        playerScore > computerScore ? 
        console.log(`Congratulations, you won ${playerScore} to ${computerScore}.`) :
        console.log(`Unfortunately you lost ${computerScore} to ${playerScore}.`);
    }
}

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

// Play a single round
function playRound(playerSelection, computerSelection){
    let result = "";
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

//Print out the results
function printResults(result){    
    console.log(`The result of this round is: ${result}`);
    console.log(`Your score is: ${playerScore}`);
    console.log(`The computer's score is: ${computerScore}\n`);
}

//Capitalize the first letters for the result message
function capitalizeFirstLetter(selection){
    return selection.charAt(0).toUpperCase() + selection.slice(1);
}


    