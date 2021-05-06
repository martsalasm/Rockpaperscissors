console.log("Hello world")
// Declared the variables for rock paper and scissors
const rock="rock";
const paper="paper";
const scissors="scissors";
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
    return false
    }
    else if (playerSelection===rock && computerSelection===scissors){
    alert("You win! computer chose scissors and rock beats scissors!")
    return true
    }
    else if(playerSelection===paper && computerSelection===scissors){
    alert("You lose! Computer chose scissors and scissors beats paper!")
    return false
    }
    else if (playerSelection===paper && computerSelection===rock){
    alert("You win! Computer chose rock and paper beats rock!")
    return true
    }
    else if (playerSelection===scissors && computerSelection===rock){
    alert("You lose! computer chose rock and rock beats scissors!")
    return false
    }
    else if(playerSelection===scissors && computerSelection===paper){
    alert("You win! Computer chose paper and scissors beats paper!")
    return true
    }
    else{
    return alert("It's a draw! both players chose the same!")
    }
}
var playerSelection=prompt()
playerSelection=playerSelection.toLowerCase()
const computerSelection=computerPlay();
console.log(playRound(playerSelection,computerSelection))