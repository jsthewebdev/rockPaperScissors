const selArray = ['ROCK', 'PAPER', 'SCISSORS']

function computerPlay() {
    let computerChoice = selArray[Math.floor(Math.random()*selArray.length)];
    return computerChoice;
}


let playerPoints = 0;
let computerPoints = 0;
let winRound = 'Nothing yet'

function gameRound() {
    let computerSel = computerPlay();
    let prePlayerSel = prompt("Rock, paper, or scissors?");
    let playerSel = prePlayerSel.toUpperCase();
    
    if (playerSel == computerSel) {
        return "It's a tie!"
    } else if (playerSel == 'ROCK' && computerSel == 'PAPER' ) {
        computerPoints++;
        return "Computer Win";
    } else if (playerSel == 'SCISSORS' && computerSel == 'PAPER') {
        playerPoints++;
        return "Player Win";
    } else if (playerSel == 'PAPER' && computerSel == 'ROCK' ) {
        playerPoints++;
        return "Player Win";
    } else if (playerSel == 'SCISSORS' && computerSel == 'ROCK') {
        computerPoints++;
        return "Computer Win"
    } else if (playerSel == 'PAPER' && computerSel == 'SCISSORS' ) {
        computerPoints++
        return "Computer Win"
    } else if (playerSel == 'ROCK' && computerSel == 'SCISSORS') {
        playerPoints++;
        return "Player Win"
    }
    
}
function pointCheck() {
    if (playerPoints > computerPoints) {
        return "Player Wins!"
    } else if (playerPoints < computerPoints) {
        return "Computer Wins!"
    } else {
        return "It's a tie!"
    }
}

function game() {
    for (let i = 0; i < 4; i++) {
        console.log(gameRound())
        console.log("Computer points:" + computerPoints)
        console.log("Player points:" + playerPoints)
    }
    console.log('Game over!')
    console.log(pointCheck())
}

game();