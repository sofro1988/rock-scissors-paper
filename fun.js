function getComputerChoice () {
    const items = ["","rock","scissors","paper"]
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let firstRandomElement = items[randomNumber];
    return firstRandomElement;
}

function playRound(playerSelection, computerSelection) {
    let p1 = 1
    let p2 = 2 
    let score = ""
    if (playerSelection == "rock") {
        p1 = 1;
    } else if (playerSelection == "paper") {
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
    if (p1 == 1 && p2 == 2) {
        score = "l";
    } else if (p1 == 1 && p2 == 3) {
        score = "w";
    } else if (p1 == 2 && p2 == 1 ) {
        score = "w";
    } else if (p1 == 2 && p2 == 3) {
        score = "l";
    } else if (p1 == 3 && p2 == 1) {
        score = "l";
    } else {
        score = "";
    }
    return score  
}  

function game(playerSelection,computerSelection){    
    let score = playRound(playerSelection,computerSelection)
    if (score == "w"){
        t1 = t1 + 1;
        alert("Win " + t1 + " " + t2 )
    } else if (score == "l"){
        t2= t2 + 1;
        alert("Loose " + t1 + " " + t2 )
    } else{
        alert("Tie " + t1 + " " + t2 )
    }
    if (t1 + t2 == 5) {
        if (t1 > t2){
            alert("You have won");
            t1 = 0
            t2 = 0
        } else if (t1 < t2){
            alert("you loose");
            t1 = 0
            t2 = 0
        } else {
            alert("Tie")
            t1 = 0
            t2 = 0
        }  
    } 
}

let t1 = 0
let t2 = 0

function play1() {      
    let playerSelection = "rock"
    let computerSelection = getComputerChoice();
    alert("Computer choose " + computerSelection)
    game(playerSelection,computerSelection)
}

function play2() {   
    let playerSelection = "scissors" 
    let computerSelection = getComputerChoice();
    alert("Computer choose " + computerSelection)
    game(playerSelection,computerSelection)
}

function play3() {   
    let playerSelection = "paper"
    let computerSelection = getComputerChoice();
    alert("Computer choose " + computerSelection)
    game(playerSelection,computerSelection)
}

