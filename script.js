//get computer player choice
function getComputerChoice() {

    let x = Math.random();

    if (x<0.3) {
        return("rock");
    } else if (x<0.6) {
        return("paper");
    } else {
        return("scissors")
    }
}

//intialize scores
let humanScore = 0;
let computerScore = 0;

//logic to play a single round
function playRound (humanChoice, computerChoice) {
    let resultMessage;

    if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        resultMessage = `Computer wins this round! ${computerChoice} beats ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage =`You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        resultMessage = "It's a draw!";
    }

    resultsUpdate(resultMessage);
    scoreUpdate();
    checkWinner()

}

//create heading
const h1 = document.createElement("h1");
h1.textContent = "Rock Paper Scissors";
h1.style.textAlign = "center"
document.body.appendChild(h1);

//create a div to parent the buttons
const div1 = document.createElement("div")

//create a button for "Rock"
const btn1 = document.createElement("button");
btn1.classList.add("rock");
btn1.textContent = "Rock";
btn1.addEventListener("click", () => playRound("rock", getComputerChoice()))

//create a button for "Paper"
const btn2 = document.createElement("button");
btn2.classList.add("paper");
btn2.textContent = "Paper";
btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));

//create a button for "Scissors"
const btn3 = document.createElement("button");
btn3.classList.add("scissors");
btn3.textContent = "Scissors";
btn3.addEventListener("click", () => playRound("scissors", getComputerChoice()));

//add buttons to the div
div1.appendChild(btn1)
div1.appendChild(btn2)
div1.appendChild(btn3)

//add div to the body
document.body.appendChild(div1)

//creating a div to show result message
const resultDiv = document.createElement("div");
resultDiv.setAttribute("id", "results");
resultDiv.style.marginTop = "20px";
resultDiv.style.padding = "10px";
resultDiv.style.border = "1px solid #ccc";
resultDiv.style.borderRadius = "5px";
resultDiv.style.textAlign = "center";
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "scores");
scoreDiv.style.marginTop = "10px";
scoreDiv.style.textAlign = "center";
document.body.appendChild(scoreDiv);

//function to update the results div
function resultsUpdate(message) {
    resultDiv.textContent = message;
}

// function to update the scores
function scoreUpdate() {
    scoreDiv.textContent = `Scores: You: ${humanScore} | Computer: ${computerScore}`;
    
}

// Function to check for a winner (end the game when one player reaches 5)
function checkWinner() {
    if (humanScore >= 5) {
        resultsUpdate("You win the game! Congratulations!");
        disableGame();
    } else if (computerScore >= 5) {
        resultsUpdate("Computer wins the game! Better luck next time.");
        disableGame();
    }
}

// function to disable the game (no more button clicks)
function disableGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => btn.disabled = true);
}
