const choiceArray = ["Rock", "Paper", "Scissors"];
let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;

document.getElementById("rock").addEventListener("click", () => getUserChoice("Rock"));
document.getElementById("paper").addEventListener("click", () => getUserChoice("Paper"));
document.getElementById("scissors").addEventListener("click", () => getUserChoice("Scissors"));
document.getElementById("reset").addEventListener("click", resetGame);

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * 3)];
}

function getUserChoice(choice) {
    userChoice = choice;
    game(); // Call the game logic after user choice is set
}

function game() {
    if (userScore < 5 && computerScore < 5) {
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
        
        if (userScore === 5) {
            document.getElementById("roundResults").textContent = "Congrats! You've won the game!";
        } else if (computerScore === 5) {
            document.getElementById("roundResults").textContent = "Computer wins!";
        }
    }
}

function resetGame() {
    computerScore = 0;
    userScore = 0;
    document.getElementById("playerScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("roundResults").textContent = "";
}
