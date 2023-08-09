const choiceArray = ["Rock","Paper","Scissors"];
let computerChoice;
let userChoice;
let computerScore;
let userScore;

function getComputerChoice(){
    return choiceArray[Math.floor((Math.random()*3))];
}
function getUserChoice(){
    while(true){
        let input = prompt("Enter 1 for Rock , 2 for Paper and 3 for Scissor");
        if(input==1||input==2||input==3)
        return choiceArray[(input-1)];
    }
}



// console.log(computerChoice);
// console.log(userChoice)

function game(){
    computerChoice = getComputerChoice();
    userChoice = getUserChoice();
    
}