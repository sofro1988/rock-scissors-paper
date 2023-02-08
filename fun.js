function getComputerChoice () {
    const items = ["","rock","scissors","paper"]
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let firstRandomElement = items[randomNumber];
    return firstRandomElement;
}

function playRound(playerSelection, computerSelection) {
    let result = playerSelection.toLowerCase();
    console.log(computerSelection,playerSelection)
    //let result = playerSelection
    let p1 = 1
    let p2 = 2 
    let score = ""
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
    console.log(p1,p2)
       
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
    console.log(score)
    return score

    
}  

function game(playerSelection,computerSelection){
    
    let score = playRound(playerSelection,computerSelection)
    
    console.log(score)
    if (score == "w"){
        t1 = t1 + 1;
    } else if (score == "l"){
        t2= t2 + 1;
    }
    console.log(t1,t2)
}
let t1 = 0
let t2 = 0


function play() {
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Scissors or Paper?")
        let computerSelection = getComputerChoice();
        game(playerSelection,computerSelection)
    }
    if (t1 > t2){
        console.log("You have won");
     } else if (t1 < t2){
        console.log("you loose");
     } else {
        console.log("Tie")
     }
    
}
 



