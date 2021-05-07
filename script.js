console.log("Hello world")
// Declared the variables for rock paper and scissors
const rock="rock";
const paper="paper";
const scissors="scissors";
// we declare both the player's score and the computer score, so that we can keep track of it
let playerScore=0;
let computerScore=0;
//made a list that includes the playing options.
const rockpaperscissors= [rock,paper,scissors];

function computerPlay(){
//found a way to make the computer choose a random option. 
    const random = Math.floor(Math.random()*rockpaperscissors.length);
    return rockpaperscissors[random]
}
function playRound(playerSelection,computerSelection){
    if (playerSelection === rock && computerSelection===paper){
    alert("You lose! Computer chose paper and paper beats rock")
    computerScore++;
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    }
    else if (playerSelection===rock && computerSelection===scissors){
    alert("You win! computer chose scissors and rock beats scissors!")
    playerScore++;
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    }
    else if(playerSelection===paper && computerSelection===scissors){
    alert("You lose! Computer chose scissors and scissors beats paper!")
    computerScore++;
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    }
    else if (playerSelection===paper && computerSelection===rock){
    alert("You win! Computer chose rock and paper beats rock!") 
    playerScore++;
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    }
    else if (playerSelection===scissors && computerSelection===rock){
    alert("You lose! computer chose rock and rock beats scissors!")
    computerScore++;
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    
    }
    else if(playerSelection===scissors && computerSelection===paper){
    alert("You win! Computer chose paper and scissors beats paper!")
    playerScore++;
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    }
    else{
    alert("It's a draw! both players chose the same!")
    alert("The score is! Computer: "+computerScore+" Player: "+playerScore)
    }
}

 function game(){
     let i;
     while(playerScore<5 && computerScore<5){ // we make a loop to make a first to five game
         let playerSelection=prompt("First to five! Quick choose! Rock paper scissors!");// We are getting input from the player
         playerSelection=playerSelection.toLowerCase();// We format the player's answer to match ours
         const computerSelection=computerPlay(); // we use the random computer answer we developed for the computer before
         playRound(playerSelection,computerSelection) // finally we play the round
     }
     alert("The end! the final score is Computer: "+computerScore+" Player: "+playerScore)
 }
console.log(game())
