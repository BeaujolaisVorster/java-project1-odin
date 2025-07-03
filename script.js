const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
document.body.appendChild(scissorsBtn);


const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
document.body.appendChild(resultsDiv);


const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
document.body.appendChild(scoreDiv);


let playerScore = 0;
let computerScore = 0;
let gameOver = false;


function updateScore() {
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function endGame(winner) {
  const finalMessage = document.createElement("p");
  finalMessage.textContent = `${winner} wins the game!`;
  finalMessage.style.fontWeight = "bold";
  resultsDiv.appendChild(finalMessage);
  gameOver = true;

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}


function playRound(playerSelection) {
  if (gameOver) return;

  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  resultsDiv.innerHTML = ""; // clear previous result

  const playerChoiceP = document.createElement("p");
  playerChoiceP.textContent = `Player chose: ${playerSelection}`;
  resultsDiv.appendChild(playerChoiceP);

  const computerChoiceP = document.createElement("p");
  computerChoiceP.textContent = `Computer chose: ${computerSelection}`;
  resultsDiv.appendChild(computerChoiceP);

  const resultP = document.createElement("p");

  if (playerSelection === computerSelection) {
    resultP.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultP.textContent = "You win this round!";
    playerScore++;
  } else {
    resultP.textContent = "Computer wins this round!";
    computerScore++;
  }

  resultsDiv.appendChild(resultP);
  updateScore();

  if (playerScore === 5) {
    endGame("Player");
  } else if (computerScore === 5) {
    endGame("Computer");
  }
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));


updateScore();