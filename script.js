let computerMove = "";
let playerMove = "";

let playerScore = 0;
let computerScore = 0;

const res = document.getElementById("result");

const winCSS = {
  "background-color": "#0f0",
  padding: "0.5vw 1vw",
  "border-radius": "1vw",
  color: "#333",
};

const loseCSS = {
  "background-color": "#f00",
  padding: "0.5vw 1vw",
  "border-radius": "1vw",
  color: "#fff",
};

const tieCSS = {
  "background-color": "rgb(255, 204, 0)",
  padding: "0.5vw 1vw",
  "border-radius": "1vw",
  color: "#333",
};

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerMove = choices[randomIndex];
  return computerMove;
}

function result(playerMove, computerMove) {
  if (playerMove === computerMove) {
    Object.assign(res.style, tieCSS);
    res.innerHTML = `<span>It's a tie</span><img src="./tie.png" alt="tie" style="width: 3vw; vertical-align: middle;">`;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    playerScore++;
    Object.assign(res.style, winCSS);
    res.textContent = "You win!";
  } else {
    computerScore++;
    Object.assign(res.style, loseCSS);
    res.textContent = "You lose!";
  }

  // These update the scores and choices — leave them as-is
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("player-choice").textContent = playerMove;
  document.getElementById("computer-choice").textContent = computerMove;
}
