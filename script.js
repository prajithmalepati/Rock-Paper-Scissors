const choiceArray = ["Rock", "Paper", "Scissors"];
let computerChoice;
let userChoice;
let computerScore=0;
let userScore=0;

// Add event listeners to the buttons to capture user choices
document.getElementById("rock").addEventListener("click", () => getUserChoice("Rock"));
document.getElementById("paper").addEventListener("click", () => getUserChoice("Paper"));
document.getElementById("scissors").addEventListener("click", () => getUserChoice("Scissors"));

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * 3)];
}

function getUserChoice(choice) {
    userChoice = choice;
    game(); // Call the game logic after user choice is set
}

function game() {
    computerChoice = getComputerChoice();
    
    let resultMessage = "";

    if (
        (userChoice == "Rock" && computerChoice == "Scissors") ||
        (userChoice == "Paper" && computerChoice == "Rock") ||
        (userChoice == "Scissors" && computerChoice == "Paper")
    ) {
        resultMessage = "You win! " + userChoice + " beats " + computerChoice;
        userScore++;
    } else if (userChoice == computerChoice) {
        resultMessage = "Tie game";
    } else {
        resultMessage = "You lose! " + computerChoice + " beats " + userChoice;
        computerScore++;
    }
    document.getElementById("playerScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("roundResults").textContent = resultMessage;
}


