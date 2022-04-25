console.log("Hello world");
// Declared the variables for rock paper and scissors
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
// we declare both the player's score and the computer score, so that we can keep track of it
let playerScore = 0;
let computerScore = 0;
//made a list that includes the playing options.
const rockpaperscissors = [rock, paper, scissors];

function computerPlay() {
  //found a way to make the computer choose a random option.
  const random = Math.floor(Math.random() * rockpaperscissors.length);
  return rockpaperscissors[random];
}
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let end = document.querySelector(".end");
let computerBox = score.querySelector(".computerBox")
let playerBox =  score.querySelector(".playerBox")
function playRound(playerSelection, computerSelection) {
    end.textContent="";
  if (playerSelection === rock && computerSelection === paper) {
    result.textContent = "You lose! Computer chose paper and paper beats rock";
    computerScore++;
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  } else if (playerSelection === rock && computerSelection === scissors) {
    result.textContent =
      "You win! computer chose scissors and rock beats scissors!";
    playerScore++;
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  } else if (playerSelection === paper && computerSelection === scissors) {
    result.textContent =
      "You lose! Computer chose scissors and scissors beats paper!";
    computerScore++;
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  } else if (playerSelection === paper && computerSelection === rock) {
    result.textContent = "You win! Computer chose rock and paper beats rock!";
    playerScore++;
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  } else if (playerSelection === scissors && computerSelection === rock) {
    result.textContent =
      "You lose! computer chose rock and rock beats scissors!";
    computerScore++;
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  } else if (playerSelection === scissors && computerSelection === paper) {
    result.textContent =
      "You win! Computer chose paper and scissors beats paper!";
    playerScore++;
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  } else {
    result.textContent = "It's a draw! both players chose the same!";
    computerBox.textContent=computerScore
    playerBox.textContent=playerScore
  }
  endGame();
}
// ROCK BUTTON
let rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", function () {
  playRound(rock, computerPlay());
});

// PAPER BUTTON
let paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", function () {
  playRound(paper, computerPlay());
});

//SCISSORS BUTTON
let scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", function () {
  playRound(scissors, computerPlay());
});

function endGame(){
    if (computerScore==5){
        result.textContent=""
        end.textContent="I'm sorry but you lost this time, try playing again!"
        end.setAttribute("style","color:red")
        computerScore=0
        playerScore=0
    }
    else if (playerScore==5){
        result.textContent=""
        end.textContent="Congratulations you won!"
        end.setAttribute("style","color:green")
        computerScore=0
        playerScore=0
    }
}

/*
    QUIERO UN BOTON QUE TRIGEREE GAME
function game(){
     let i;
     while(playerScore<5 && computerScore<5){ // we make a loop to make a first to five game
         let playerSelection=prompt("First to five! Quick choose! Rock paper scissors!");// We are getting input from the player
         const computerSelection=computerPlay(); // we use the random computer answer we developed for the computer before
         playRound(playerSelection,computerSelection) // finally we play the round
     }
     alert("The end! the final score is Computer: "+computerScore+" Player: "+playerScore)
 }
console.log(game())
*/
