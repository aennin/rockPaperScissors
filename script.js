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


//get human player choice
function getHumanChoice() {
   let userInput = prompt("Input your choice: ", "rock, paper or scissors");
    return(userInput.toLowerCase()); 
}

//intialize scores
let humanScore = 0;
let computerScore = 0;

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();


//logic to play a single round
function playRound (humanChoice, computerchoice) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (computerSelection==="rock" && humanSelection==="scissors") {
        ++computerScore;
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection);
        return(console.log("Computer wins! Rock beats scissors"));
        
        

    } else if (computerSelection==="paper" && humanSelection==="rock") {
        ++computerScore;
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection);
        return(console.log("Computer wins! Paper beats rock"));

    } else if (computerSelection==="scissors" && humanSelection==="paper") {
        ++computerScore;
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection);
        return(console.log("Computer wins! Scissors beats paper"));

    } else if (computerSelection==="scissors" && humanSelection==="rock") {
        ++humanScore;
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection);
        return(console.log("You win! Rock beats scissors"));

    } else if (computerSelection==="rock" && humanSelection==="paper") {
        ++humanScore;
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection);
        return(console.log("You win! Paper beats rock"));

    } else if (computerSelection==="paper" && humanSelection==="scissors") {
        ++humanScore;
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection);
        return(console.log("You win! Scissors beats paper"));

    } else {
        console.log("Computer selection: " + computerSelection);
        console.log("Your selection: " + humanSelection)
        return(console.log("It\'s a draw game, must be replayed"))
        
    } 

}


//logic to play the entire game
function playGame () {
    for(let i=0; i<5; i++) {
        playRound();
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    console.log("GAME OVER");

    if (humanScore > computerScore) {
        console.log("Congratulations! You are a genius!!")

    } else if (humanScore < computerScore) {
        console.log("Oh no... The computer outsmart you this time... Better luck next time")

    } else {
        console.log("It was a tight game. Nothing could separate you and the computer")
    }

}

playGame();


