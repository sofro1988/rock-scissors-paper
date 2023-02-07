function getComputerChoice () {
    const items = ["","rock","scissors","paper"]
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let firstRandomElement = items[randomNumber];
    return firstRandomElement;
}

function playRound(playerSelection, computerSelection) {
    let result = playerSelection.toLowerCase();
    let p1 = 1
    let p2 = 2
    let finalResult = ""
    
    if (result == "rock") {
        p1 = 1;
    } else if (result == "paper") {
        p1 = 2;
    } else {
        p1 = 3;
    }
    if (computerSelection == "rock") {
        p2 = 1;
    } else if (computerSelection == "paper") {
        p2 = 2;
    } else {
        p2 = 3;
    }
  
    if (p1 == p2) {
        finalResult = "Tie";
    } else if (p1 == 1 && p2 == 2) {
        finalResult = "You Lose! Paper beats Rock";
    } else if (p1 == 1 && p2 == 3) {
        finalResult = "You Win! Rock beats Scissors";
    } else if (p1 == 2 && p2 == 1 ) {
        finalResult = "You Win! Paper beats Rock";
    } else if (p1 == 2 && p2 == 3) {
        finalResult = "You Lose! Scissors beats Paper";
    } else if (p1 == 3 && p2 == 1) {
        finalResult = "You Lose! Rock beats Scissors";
    } else {
        finalResult = "You Win! Scissors beats Paper";
    }
   
    return finalResult
}  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



