// Script file

function getComputerChoice() {
    randomInt = getRandomInt(1, 4);
    if (randomInt === 1) {
        return "Rock";
    }else if (randomInt === 2) {
        return "Paper";
    }else {
        return "Scissors";
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
    if (player === "Rock") {
        if (computer === "Rock"){
            return "Tie"
        } else if (computer === "Paper") {
            return "Lose"
        } else {
            return "Win"
        }
    }

    //Logic path if player is paper.
    if (player === "Paper") {
        if (computer === "Paper"){
            return "Tie"
        } else if (computer === "Scissors") {
            return "Lose"
        } else {
            return "Win"
        }
    }

    //Logic path if player is scissors.
    if (player === "Scissors") {
        if (computer === "Scissors"){
            return "Tie"
        } else if (computer === "Rock") {
            return "Lose"
        } else {
            return "Win"
        }
    }
}


//No input validation for now.
let input = prompt();

//Play the game
console.log(playRound(input, getComputerChoice()))