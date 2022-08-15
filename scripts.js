// Script file

//selected rock
const rock = document.querySelector(".rock-btn");
rock.addEventListener('click', () => game("rock"));

//selected paper
const paper = document.querySelector(".paper-btn");
paper.addEventListener('click', () => game("paper"));

//selected scissors
const scissor = document.querySelector(".scissor-btn");
scissor.addEventListener('click', () => game("scissors"));

const resultsPanel = document.querySelector(".results");
const pcDisplay = document.querySelector(".player-choice");
const ccDisplay = document.querySelector(".computer-choice");
const playerScoreCard = document.querySelector(".player-score");
const computerScoreCard = document.querySelector(".computer-score");
const resetButton = document.querySelector(".reset-button");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomInt = getRandomInt(1, 4);
    if (randomInt === 1) {
        return "rock";
    } else if (randomInt === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(player, computer) {

    console.log("Computer choice was: " + computer)
    ccDisplay.textContent = "Computer choice was " + computer;

    console.log("Player choice was: " + player)
    pcDisplay.textContent = "Player choice was " + player;

    //Logic path if player is rock.
    if (player === "rock") {
        if (computer === "rock") {
            return "tied"
        } else if (computer === "paper") {
            computerScore += 1;
            return "lost"
        } else {
            playerScore += 1;
            return "won"
        }
    }

    //Logic path if player is paper.
    if (player === "paper") {
        if (computer === "paper") {
            return "tied"
        } else if (computer === "scissors") {
            computerScore += 1;
            return "lost"
        } else {
            playerScore += 1;
            return "won"
        }
    }

    //Logic path if player is scissors.
    if (player === "scissors") {
        if (computer === "scissors") {
            return "tied"
        } else if (computer === "rock") {
            computerScore += 1;
            return "lost"
        } else {
            playerScore += 1;
            return "won"
        }
    }

    return 0;
}

function toggleButtons() {
    rock.classList.toggle("disable-button");
    paper.classList.toggle("disable-button");
    scissor.classList.toggle("disable-button");
}

function resetGame(){
    toggleButtons();
    playerScore = 0;
    computerScore = 0;
    resultsPanel.textContent = "Results Here";
    pcDisplay.textContent = "Your Choice";
    ccDisplay.textContent = "Computer's Choice";
    playerScoreCard.textContent = "Player Score: 0";
    computerScoreCard.textContent = "Computer Score: 0"
    resetButton.style.visibility = "hidden";
}

function game(input) {

    let roundResults = playRound(input, getComputerChoice());
    resultsPanel.textContent = "You " + roundResults + " this round.";
    computerScoreCard.textContent = "Computer Score: " + computerScore;
    playerScoreCard.textContent = "Player Score: " + playerScore;
    console.log(roundResults);

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            resultsPanel.textContent = "You won the game!"
            toggleButtons();
            resetButton.style.visibility = "visible";
        } else if (playerScore < computerScore) {
            resultsPanel.textContent = "You lost the game!"
            toggleButtons();
            resetButton.style.visibility = "visible";
        }
    }
}

