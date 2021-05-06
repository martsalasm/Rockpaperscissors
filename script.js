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
console.log(computerPlay())
