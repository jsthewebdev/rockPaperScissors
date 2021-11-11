const startDiv = document.getElementsByClassName('startScreen')
const playDiv = document.getElementsByClassName('playScreen')
const endDiv = document.getElementsByClassName('endScreen')
const placeHolderText = document.getElementById('resultsPlaceholder')

const selArray = ['ROCK', 'PAPER', 'SCISSORS']

function startPlay() {
    startDiv[0].classList.add('hide')
    playDiv[0].classList.remove('hide')

}

function computerPlay() {
    let computerChoice = selArray[Math.floor(Math.random()*selArray.length)];
    return computerChoice;
}


let playerPoints = 0;
let computerPoints = 0;
let winRound = 'Nothing yet'

function selectItem(elem) {
    let selBtnElements = document.getElementsByClassName('selBtn');
    console.log(selBtnElements)

    for (i=0; i < selBtnElements.length; i++) {
        selBtnElements[i].classList.remove('selected');
    }
    elem.classList.add('selected');
}

function submitChoice() {
    console.log(playDiv)
    playDiv[0].classList.add('hide')
    endDiv[0].classList.remove('hide')
    game()
}

function nextRound() {
    endDiv[0].classList.add('hide')
    playDiv[0].classList.remove('hide')
}
function test() {
}



test(); 
function gameRound() {
    let computerSel = computerPlay();
    let prePlayerSel = document.getElementsByClassName('selected');
    let stringSel = prePlayerSel[0].innerHTML;
    let playerSel = stringSel.toUpperCase();
    
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

let compScoreParagraph = document.getElementById('computerScoreParagraph')
let playScoreParagraph = document.getElementById('playerScoreParagraph')

function game() {
    let result = gameRound()
    console.log(result)
    placeHolderText.innerHTML = `${result}`;
    compScoreParagraph.innerHTML = `${computerPoints}`;
    playScoreParagraph.innerHTML = `${playerPoints}`
    console.log("Computer points:" + computerPoints)
    console.log("Player points:" + playerPoints)
    console.log('Game over!')
    console.log(pointCheck())
}



// game();{result}