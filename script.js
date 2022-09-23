    // greet the user

console.log("Welcome to Rock, Paper, Scissors!");

    // get the user's input

let playerSelection = prompt("Please type in your choice: 'rock', 'paper', or 'scissors'!").toLowerCase();

    // evaluate the user's choice, and let it play again if it isn't correct

while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
    playerSelection = prompt("Sorry, your choice is invalid. Please type in your choice: 'rock', 'paper', or 'scissors'!").toLowerCase();
}
console.log(`Your selection is: ${playerSelection}.`);

    // get the computer's choice

function getComputerSelection(){
    const matcherNumber = Math.random();
    if (matcherNumber < 0.33){
        return "rock";
    } else if (matcherNumber < 0.66){
        return "paper";
    } else return "scissors";
}

    // evaluate
    // print the results to the console