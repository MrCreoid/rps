let computerMove = '';
let playerMove = '';

let playerScore = 0;
let computerScore = 0;

const res = document.getElementById('result');

const winCSS = {
  'background-color': '#0f0',
  padding: '0.5vw 1vw',
  'border-radius': '1vw',
  color: '#333'
}

const loseCSS = {
  'background-color': '#f00',
  padding: '0.5vw 1vw',
  'border-radius': '1vw',
  color: '#fff'
}

const tieCSS = {
  'background-color': 'rgb(255, 204, 0)',
  padding: '0.5vw 1vw',
  'border-radius': '1vw',
  color: '#333'

}



function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerMove = choices[randomIndex];
    return computerMove;
}

function result(playerMove, computerMove) {

    let message = '';

    if (playerMove === computerMove) {
        message = 'It\'s a tie!';
        Object.assign(res.style, tieCSS);
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        playerScore++;
        message = 'You win!';
        Object.assign(res.style, winCSS);

    } else {
        computerScore++;
        message = 'You lose!';
        Object.assign(res.style, loseCSS);
    }

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('player-choice').textContent = playerMove;
    document.getElementById('computer-choice').textContent = computerMove;
    document.getElementById('result').textContent = message;
}