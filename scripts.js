// Script file

function getComputerChoice() {
    randomInt = getRandomInt(1, 4);
    if (randomInt === 1) {
        return "rock";
    }else if (randomInt === 2) {
        return "paper";
    }else {
        return "scissors";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);   
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(player, computer) {

    console.log("Computer choice was: "+ computer)
    console.log("Player choice was: " +player)

    //Logic path if player is rock.
    if (player === "rock") {
        if (computer === "rock"){
            return "Tie"
        } else if (computer === "paper") {
            return "Lose"
        } else {
            return "Win"
        }
    }

    //Logic path if player is paper.
    if (player === "paper") {
        if (computer === "paper"){
            return "Tie"
        } else if (computer === "scissors") {
            return "Lose"
        } else {
            return "Win"
        }
    }

    //Logic path if player is scissors.
    if (player === "scissors") {
        if (computer === "scissors"){
            return "Tie"
        } else if (computer === "rock") {
            return "Lose"
        } else {
            return "Win"
        }
    }
}

function game(amount) {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < amount; i++) {
        let input = prompt();
        let roundResults = playRound(input.toLowerCase(), getComputerChoice());
        console.log(roundResults);
        if ( roundResults === "Win"){
            playerScore += 1;
        } else if ( roundResults === "Lose") {
            computerScore += 1;
        }
    }

    if (playerScore < computerScore) {
        return "You lose! Your score was: " + playerScore + " Computer score was " + computerScore;
    } else if (playerScore > computerScore) {
        return "You win! Your score was: " + playerScore + " Computer score was " + computerScore;
    } else {
        return "Tie game! Your score was: " + playerScore + " Computer score was " + computerScore;
    }
}



//Play the game
console.log(game(5))
